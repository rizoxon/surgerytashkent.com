export async function before(){
  const photos = await window.bridge("photos", {for:"getAllPhotos"});
  
  if("data" in photos){
    window.pageData.operationRows = "";
    window.pageData.before_afterRows = "";
    window.pageData.otherRows = "";

    for(const photo of photos.data){
      if (photo["type"] === "operatsiya") {
        window.pageData.operationRows += `
          <column class="p-1 surface-2D gap-1">
            <img src="assets/photos/${photo["file"]}" class="w-100 anim">
            <p>${photo["title"]}</p>
          </column>
        `;
      } else if (photo["type"] === "avval_keyin") {
        window.pageData.before_afterRows += `
          <column class="p-1 surface-2D gap-1">
            <img src="assets/photos/${photo["file"]}" class="w-100 anim">
            <p>${photo["title"]}</p>
          </column>
        `;
      } else if (photo["type"] === "boshqa") {
        window.pageData.otherRows += `
          <column class="p-1 surface-2D gap-1">
            <img src="assets/photos/${photo["file"]}" class="w-100 anim">
            <p>${photo["title"]}</p>
          </column>
        `;
      }
    }
  }
}

export default function content(){
  return `
    <container class="results">
      <row>
        <button><a href="#operations">Operatsiyalar</a></button>
        <button><a href="#results">Avval va Keyingi rasmlar</a></button>
        <button><a href="#others">Boshqa rasmlar</a></button>
      </row>

      <h2  id="operations" class="surface-2D w-100 text-center bg-info" style="color:white;">Operatsiyalar</h2>
      <row>
        ${window.pageData.operationRows}
      </row>

      <h2 id="results" class="surface-2D w-100 text-center bg-info" style="color:white;">Avval va Keyingi rasmlar</h2>
      <row>
        ${window.pageData.before_afterRows}
      </row>

      <h2 id="others" class="surface-2D w-100 text-center bg-info" style="color:white;">Boshqa rasmlar</h2>
      <row>
        ${window.pageData.otherRows}
      </row>
    </container>
  `;
}

export function after(){
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      console.log(item)
      if (item.isIntersecting) {
        item.target.classList.add('move')
      }
    });
  });

  const anim_elements = document.querySelectorAll('.anim');
  anim_elements.forEach((el) => observer.observe(el));
}