export const TITLE = window.Lang.use("diplomas");
export async function before(){
  DoctorNames: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllDoctors"});

    window.pageData.nameRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.nameRows = "";
      for(const doctor of window.pageData.resp.data)
        window.pageData.nameRows += `<option value="${doctor["fullname"]}">${doctor["fullname"]}</option>`;
    }
  }
  Diplomas: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllDiplomas"});

    window.pageData.diplomaRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.diplomaRows = "";
      for(const diploma of window.pageData.resp.data)
        window.pageData.diplomaRows += `
          <tr>
            <td><img src="assets/diplomas/${diploma["file"]}" style="width: 100px;"></td>
            <td>${diploma["name"]}</td>
            <td>
              <form action="/admin" for="deleteDiploma" class="w-100">
                <input type="hidden" name="id" value="${diploma["id"]}">
                <button name="deleteCertificateButton"><x-icon name="trash"></x-icon></button>
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
    <section id="diplomas" class="surface-clean w-80 p-1 d-flex flex-column">
      <form action="/admin" for="saveDiploma" class="w-100 p-5" style="height: auto;">
        <label>
          <p for="file">Diplomni tanlang</p>
          <input type="file" name="file">
        </label>
        <label>
          <p for="type">Diplom egasini tanlang</p>
          <select name="name">
            ${window.pageData.nameRows}
          </select>
        </label>
        <label>
          <input type="submit" name="saveDiploma" value="Saqlash" />
          <p for="saveDiploma"></p>
        </label>
      </form>

      <table class="x-default scrollbar-x">

        <thead>
          <tr>
            <th>Diplom</th>
            <th>Diplom egasining</th>
            <th>O'chirish</th>
          </tr>
        </thead>

        <tbody>${window.pageData.diplomaRows}<tbody>
      </table>

    </section>
  </container>
  `;
}