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

  Doctors: {
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

  DoctorNames: {
    window.pageData.resp = await window.bridge("admin", {for:"getAllDoctors"});

    window.pageData.nameRows = "No data";

    if("data" in window.pageData.resp){
      window.pageData.nameRows = "";
      for(const doctor of window.pageData.resp.data)
        window.pageData.nameRows += `<option value="${doctor["fullname"]}">${doctor["fullname"]}</option>`;
    }
  }
  Certificates: {
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

  const doctors = `
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
  `;
  const certificates = `
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
  `;
  const diplomas = `
  <section id="diplomas" class="surface-clean w-100 p-1 d-flex flex-column">
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
  `;
  


  return `
    <container>
      <row class="gap-1 p-5">
        <column id="sections" class="w-auto">
          <x-nav selector="column#sections">
            [
              {"link": "commnets"},
              {"link": "doctors"},
              {"link": "certificates"},
              {"link": "diplomas"},
              {"link": "photos"},
              {"link": "videos"}
            ]
          </x-nav>
        </column>

        <column id="sections" class="w-70">
          ${commnets}
          ${doctors}
          ${certificates}
          ${diplomas}
          ${photos}
          ${videos}
        </column>
      </row>
    </container>
  `;
}
