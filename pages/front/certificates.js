export const TITLE = window.Lang.use("certificates");
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
  window.pageData.resp = await window.bridge("admin", {for:"getAllCertificates"});

  window.pageData.certificateRows = "No data";
  console.log(window.pageData.resp);
  if("data" in window.pageData.resp){
    window.pageData.certificateRows = "";
    for(const certificate of window.pageData.resp.data)
      window.pageData.certificateRows += `
        <tr>
          <td><img src="assets/certificates/${certificate["file"]}" style="width: 100px;"></td>
          <td>${certificate["name"]}</td>
          <td>
            <form action="/admin" for="deleteCertificate" class="w-100">
              <input type="hidden" name="id" value="${certificate["id"]}">
              <button name="deleteCertificateButton"><x-icon name="trash"></x-icon></button>
            </form>
          </td>
        </tr>
      `;
  }
}

export default function content(){
  return `
  <container>
    <row class="gap-1 p-5">
      <column id="sections" class="w-80">
        <section id="certificates" class="surface-clean w-100 p-1 d-flex flex-column">
          <form action="/admin" for="saveCertificate" class="w-100 p-5" style="height: auto;">
            <label>
              <p for="file">Sertifikatni tanlang</p>
              <input type="file" name="file">
            </label>
            <label>
              <p for="type">Sertifikat egasini tanlang</p>
              <select name="name">
                ${window.pageData.nameRows}
              </select>
            </label>
            <label>
              <input type="submit" name="saveCertificate" value="Saqlash" />
              <p for="saveCertificate"></p>
            </label>
          </form>
      
          <table class="x-default scrollbar-x">
      
            <thead>
              <tr>
                <th>Sertifikat</th>
                <th>Sertifikat egasining</th>
                <th>O'chirish</th>
              </tr>
            </thead>
      
            <tbody>${window.pageData.certificateRows}<tbody>
          </table>
      
        </section>
      </column>
    </row>
  </container>
`;
}