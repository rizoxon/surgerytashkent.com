export const TITLE = window.Lang.use("admin");
export async function before(){
  Comments: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllComments"});

    window.pageData.commentsRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.commentsRows = "";
      for(const data of window.pageData.resp.data)
      window.pageData.commentsRows += `
        <tr>
          <td>${data["fullName"]}</td>
          <td>${data["phoneNumber"]}</td>
          <td>${data["comment"]}</td>
          <td>
            <form action="/admin" for="deleteComment">
              <input type="hidden" name="id" value="${data["id"]}">
              <button name="deleteCommentButton"><x-icon name="trash"></x-icon></button>
            </form>
          </td>
        </tr>
      `;
    }
  }

  Photos: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllPhotos"});

    window.pageData.photoRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.photoRows = "";
      for(const photo of window.pageData.resp.data)
        window.pageData.photoRows += `
          <tr>
            <td><img src="assets/photos/${photo["file"]}" style="width: 100px;"></td>
            <td>${photo["title"]}</td>
            <td>${photo["file"]}</td>
            <td>${photo["type"]}</td>
            <td class="d-flex gap-0-5">
              <x-modal class="w-50" trigger="click" type="icon" value="vertical_dots" button>
                <form action="/admin" for="updatePhoto">
                  <input type="hidden" value="${photo["id"]}" name="photoID">

                  <label>
                    <p for="title">Rasm sarlavhasini kiriting</p>
                    <input type="text" value="${photo["title"]}" name="title"  />
                  </label>
                  <fieldset>
                    <legend>Rasm turini tanlang</legend>
                    <label>
                    <select name="type">
                      <option value="operatsiya">Operatsiyalar</option>
                      <option value="avval_keyin">Avval Keyin</option>
                      <option value="boshqa">Boshqa</option>
                    </select>
                    </label>
                  </fieldset>
                  <label>
                    <input type="submit" name="send" value="Jo'natish" />
                    <p for="updatePhoto"></p>
                  </label>
                </form>
              </x-modal>

              <form action="/admin" for="deletePhoto" class="w-50">
                <input type="hidden" name="id" value="${photo["id"]}">
                <button name="deleteCommentButton"><x-icon name="trash"></x-icon></button>
              </form>
            </td>
          </tr>
        `;
    }
  }

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
  const commnets = `
    <section id="commnets" class="surface-clean w-100 p-1">
      <table class="x-default scrollbar-x">

        <thead>
          <tr>
            <th>Ism</th>
            <th>Telefon raqam</th>
            <th>Kommentariya</th>
            <th>O'chirish</th>
          </tr>
        </thead>

        <tbody>${window.pageData.commentsRows}<tbody>
      </table>

    </section>
  `;

  const photos = `
  <section id="photos" class="surface-clean w-100 p-1 d-flex flex-column">
    <form action="/admin" for="savePhoto" class="w-100 p-5" style="height: auto;">
      <label>
        <p for="title">Rasm nomini kiriting</p>
        <input type="text" name="title" />
      </label>
      <label>
        <p for="file">Rasmni tanlang</p>
        <input type="file" name="file">
      </label>
      <label>
        <p for="type">Rasmni turini tanlang</p>
        <select name="type">
          <option value="operatsiya">Operatsiyalar</option>
          <option value="avval_keyin">Avval Keyin</option>
          <option value="boshqa">Boshqa</option>
        </select>
      </label>
      <label>
        <input type="submit" name="savePhoto" value="Saqlash" />
        <p for="savePhoto"></p>
      </label>
    </form>

    <table class="x-default scrollbar-x">

      <thead>
        <tr>
          <th>Rasm</th>
          <th>Rasm sarlavhasi</th>
          <th>Rasm fayli</th>
          <th>Rasm turi</th>
          <th>Amallar</th>
        </tr>
      </thead>

      <tbody>${window.pageData.photoRows}<tbody>
    </table>

  </section>
  `;

  const videos = `
  <section id="videos" class="surface-clean w-100 p-1 d-flex flex-column">
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
  `;


  return `
    <container>
      <row class="gap-1 p-5">
        <column id="sections" class="w-auto">
          <x-nav selector="column#sections">
            [
              {"link": "commnets"},
              {"link": "photos"},
              {"link": "videos"}
            ]
          </x-nav>
        </column>

        <column id="sections" class="w-70">
          ${commnets}
          ${photos}
          ${videos}
        </column>
      </row>
    </container>
  `;
}
