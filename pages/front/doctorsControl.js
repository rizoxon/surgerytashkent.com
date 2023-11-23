export const TITLE = window.Lang.use("doctors");
export async function before(){
  window.pageData.resp = await window.bridge("admin", {for:"getAllDoctors"});

  window.pageData.doctorRows = "No data";

  if("data" in window.pageData.resp){
    window.pageData.doctorRows = "";
    for(const doctor of window.pageData.resp.data)
      window.pageData.doctorRows += `
        <tr>
          <td>${doctor["id"]}</td>
          <td><img src="assets/doctors/${doctor["file"]}" style="width: 100px;"></td>
          <td>${doctor["fullname"]}</td>
          <td>${doctor["info"]}</td>
          <td class="d-flex gap-0-5">
            <x-modal class="w-50" trigger="click" type="icon" value="vertical_dots" button style="min-width: 50px">
              <form action="/admin" for="updateDoctor">
                <input type="hidden" value="${doctor["id"]}" name="doctorID">
                <label>
                  <p for="fullname">To'liq ismni kiriting</p>
                  <input type="text" name="fullname" value="${doctor["fullname"]}" />
                </label>
                <label>
                  <p for="info">Doktor ma'lumotini kiriting</p>
                  <textarea name="info" rows="20">
                    ${doctor["info"]}
                  </textarea>
                </label>
                <label>
                  <input type="submit" name="send" value="Jo'natish" />
                  <p for="updateDoctor"></p>
                </label>
              </form>
            </x-modal>

            <form action="/admin" for="deleteDoctor" class="w-50" style="min-width: 50px">
              <input type="hidden" name="id" value="${doctor["id"]}">
              <button name="deleteDoctorButton"><x-icon name="trash"></x-icon></button>
            </form>
          </td>
        </tr>
      `;
  }
}

export default function content(){
  return `
  <container>
      <column id="sections" class="w-80">
        <section id="doctors" class="surface-clean w-100 p-1 d-flex flex-column">
          <form action="/admin" for="saveDoctor" class="w-100 p-5" style="height: auto;">
            <label>
              <p for="fullname">To'liq ismni kiriting</p>
              <input type="text" name="fullname" />
            </label>
            <label>
              <p for="file">Doktor rasmni tanlang</p>
              <input type="file" name="file">
            </label>
            <label>
              <p for="info">Doktor ma'lumotini kiriting</p>
              <textarea name="info" rows="20"></textarea>
            </label>
            <label>
              <input type="submit" name="saveDoctor" value="Saqlash" />
              <p for="saveDoctor"></p>
            </label>
          </form>
      
          <table class="x-default scrollbar-x">
      
            <thead>
              <tr>
                <th>ID</th>
                <th>Rasm</th>
                <th>To'liq ism</th>
                <th>Ma'lumot</th>
                <th>Amallar</th>
              </tr>
            </thead>
      
            <tbody>${window.pageData.doctorRows}<tbody>
          </table>
      
        </section>
      </column>
    </row>
  </container>
`;
}