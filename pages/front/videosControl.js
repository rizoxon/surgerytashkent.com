export const TITLE = window.Lang.use("videosControl");
export async function before(){
  Videos: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllVideos"});

    window.pageData.videoRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.videoRows = "";
      for(const video of window.pageData.resp.data)
        window.pageData.videoRows += `
          <tr>
            <td><iframe style="width:300px;" src="${video["iframe"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
            <td>${video["iframe"]}</td>
            <td>${video["type"]}</td>
            <td>
              <form action="/admin" for="deleteVideo">
                <input type="hidden" name="id" value="${video["id"]}">
                <button name="deleteVideoButton"><x-icon name="trash"></x-icon></button>
              </form>
            </td>
          </tr>
        `;
    }
  }
}

export default function content(){
  return `
  <container>
    <section id="videos" class="surface-clean w-80 p-1 d-flex flex-column">
      <form action="/admin" for="saveVideo" class="w-100 p-5" style="height: auto;">
        <label>
          <p for="title">Iframeni kiriting</p>
          <input type="text" name="iframe" />
        </label>
        <label>
          <p for="type">Rasmni turini tanlang</p>
          <select name="type">
            <option value="operatsiya_jarayoni">Operatsiya jarayoni</option>
            <option value="shifokorlar_suhbati">Shifokorlar bilan suhbat</option>
            <option value="intervyu">Bemorlar bilan intervyu </option>
          </select>
        </label>
        <label>
          <input type="submit" name="saveVideo" value="Saqlash" />
          <p for="saveVideo"></p>
        </label>
      </form>

      <table class="x-default scrollbar-x">

        <thead>
          <tr>
            <th>Video</th>
            <th>Video iframi</th>
            <th>Video turi</th>
            <th>Amallar</th>
          </tr>
        </thead>

        <tbody>${window.pageData.videoRows}<tbody>
      </table>

    </section>
  </container>
  `;
}