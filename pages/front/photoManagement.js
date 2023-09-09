export async function before(){
  window.pageData.resp = await window.bridge("photoManagement", {for:"getAllPhotos"});

  window.pageData.photoRows = "No data";

  if("data" in window.pageData.resp){
    window.pageData.photoRows = "";
    for(const data of window.pageData.resp.data)
    window.pageData.photoRows += `
      <tr>
        <td>${data["title"]}</td>
        <td>${data["file"]}</td>
        <td>
          <form action="/photoManagement" for="deletePhoto">
            <input type="hidden" name="id" value="${data["id"]}">
            <button name="deleteCommentButton"><x-icon name="trash"></x-icon></button>
          </form>
        </td>
      </tr>
    `;
  }
}

export default function content(){
  return `
    <container class="gap-1 p-5">
      <form action="/photoManagement" for="savePhoto" class="w-60 surface-clean p-5" style="height: auto;">
        <label>
          <p for="title">Rasm nomini kiriting</p>
          <input type="text" name="title" />
        </label>
        <label>
          <p for="file">Rasmni tanlang</p>
          <input type="file" name="file">
        </label>
        <label>
          <input type="submit" name="savePhoto" value="Saqlash" />
          <p for="savePhoto"></p>
        </label>
      </form>

      <section id="commnets" class="w-60 surface-clean p-1">
        <table class="x-skeleton scrollbar-x">

          <thead>
            <tr>
              <th>Photo name</th>
              <th>Photo file</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>${window.pageData.photoRows}<tbody>
        </table>

      </section>
    </container>
  `;
}


// export function after(){
//   // Del/ Set / Updt
// }
