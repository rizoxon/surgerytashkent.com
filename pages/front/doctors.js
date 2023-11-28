export async function before(){
  const doctors = await window.bridge("photos", {for:"getAllDoctors"});
  const certificates = await window.bridge("photos", {for:"getAllCertificates"});
  const diplomas = await window.bridge("photos", {for:"getAllDiplomas"});
  
  window.pageData.doctorRows = "No data";
  window.pageData.certificateRows = "No data";
  window.pageData.diplomaRows = "No data";

  if("data" in doctors){
    window.pageData.doctorRows = "";
    window.pageData.certificateRows = "";
    window.pageData.diplomaRows = "";

    for(const doctor of doctors.data){

      for(const certificate of certificates.data){
        if (certificate["name"] == doctor["fullname"]) {   
          window.pageData.certificateRows += `<img src="assets/certificates/${certificate["file"]}" style="max-width: 80dvw; margin: 10px 0;">`;
        }
      }
  
      for(const diploma of diplomas.data){
        if (diploma["name"] == doctor["fullname"]) {   
          window.pageData.diplomaRows += `<img src="assets/diplomas/${diploma["file"]}" style="max-width: 80dvw; margin: 10px 0;">`;
        }
      }

      window.pageData.doctorRows += `
        <column class="p-5 surface-clean gap-1 anim" style="max-width: 400px">
          <img src="assets/doctors/${doctor["file"]}" class="w-100">
          <h3>${doctor["fullname"]}</h3>
          <row class="flex-x-between">
            <x-modal trigger="click" type="text" value="${window.Lang.use("info")}" style="font-size:1em">
              <h3 class="m-2">${doctor["fullname"]}</h3>
              <p class="p-2">${doctor["info"]}</p>
            </x-modal>
            <x-modal trigger="click" type="text" value="${window.Lang.use("certificates")}" style="font-size:1em">
              ${window.pageData.certificateRows}
            </x-modal>
            <x-modal trigger="click" type="text" value="${window.Lang.use("diplomas")}" style="font-size:1em">
              ${window.pageData.diplomaRows}
            </x-modal>
          </row>
        </column>
      `
      window.pageData.certificateRows = ""
      window.pageData.diplomaRows = ""
      
    }
  }
}

export default function content(){
  return `
    <container class="doctors">
      <header>
        <h1>${window.Lang.use("ourDoctors")}</h1>
      </header>
      <row class="p-5 gap-2">
        ${window.pageData.doctorRows}
      </row>
    </container>
  `;
}

export function after(){
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('move')
      } else {
        item.target.classList.remove('move')
      }
    });
  });

  const anim_elements = document.querySelectorAll('.anim');
  anim_elements.forEach((el) => observer.observe(el));
}