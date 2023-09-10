export const TITLE = window.Lang.use("admin");
export async function before(){
  Photos: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllPhotos"});

    window.pageData.photoRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.photoRows = "";
      for(const data of window.pageData.resp.data)
      window.pageData.photoRows += `
        <tr>
          <td>${data["title"]}</td>
          <td>${data["file"]}</td>
          <td class="d-flex gap-0-5">
            <x-modal class="w-50" trigger="click" type="icon" value="vertical_dots" button>
              <form action="/admin" for="photoUpdate">
                <label>
                  <p for="title">Rasm sarlavhasini kiriting</p>
                  <input type="text" value="${data["title"]}" name="title"  />
                </label>
                <fieldset>
                  <legend>Choose label</legend>
                  <label>
                    <input type="checkbox" name="general"  />
                    <p for="general">Umumiy</p>
                  </label>
                  <label>
                    <input type="checkbox" name="doctor"  />
                    <p for="doctor">Doktor</p>
                  </label>
                  <label>
                    <input type="checkbox" name="result"  />
                    <p for="result">Natija</p>
                  </label>
                </fieldset>
                <label>
                  <input type="submit" name="send" value="Jo'natish" />
                  <p for="sendComment"></p>
                </label>
              </form>
            </x-modal>

            <form action="/admin" for="deletePhoto" class="w-50">
              <input type="hidden" name="id" value="${data["id"]}">
              <button name="deleteCommentButton"><x-icon name="trash"></x-icon></button>
            </form>
          </td>
        </tr>
      `;
    }
  }

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
}

export default function content(){
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
          <input type="submit" name="savePhoto" value="Saqlash" />
          <p for="savePhoto"></p>
        </label>
      </form>

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
  `;

  const commnets = `
    <section id="commnets" class="surface-clean w-100 p-1">
      <table class="x-skeleton scrollbar-x">

        <thead>
          <tr>
            <th>Full name</th>
            <th>Phone number</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>${window.pageData.commentsRows}<tbody>
      </table>

    </section>
  `;


  return `
    <container>
      <row class="gap-1 p-5">
        <column id="sections" class="w-auto">
          <x-nav selector="column#sections">
            [
              {"link": "photos"},
              {"link": "commnets"}
            ]
          </x-nav>
        </column>

        <column id="sections" class="w-70">
          ${photos}
          ${commnets}
        </column>
      </row>
    </container>
  `;
}
