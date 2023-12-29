export const TITLE = window.Lang.use("photosControl");
export async function before(){
  Photos: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllPhotos"});

    window.pageData.photoRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.photoRows = "";
      for(const photo of window.pageData.resp.data)
        window.pageData.photoRows += `
          <tr>
            <td><img src="/assets/photos/${photo["file"]}" style="width: 100px;"></td>
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
}

export default function content(){
  return `
  <container>  
    <section id="photos" class="surface-clean w-80 p-1 d-flex flex-column">
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
  </container>
  `;
}