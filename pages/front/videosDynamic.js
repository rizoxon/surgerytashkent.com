export async function before(){
  const videos = await window.bridge("photos", {for:"getAllVideos"});
  
  if("data" in videos){
    window.pageData.operatsiyaRows = "";
    window.pageData.shifokorRows = "";
    window.pageData.intervyuRows = "";

    for(const video of videos.data){
      if (video["type"] === "operatsiya_jarayoni") {
        window.pageData.operatsiyaRows += `
        <iframe class="anim" src="${video["iframe"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      } else if (video["type"] === "shifokorlar_suhbati") {
        window.pageData.shifokorRows += `
        <iframe class="anim" src="${video["iframe"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      } else if (video["type"] === "intervyu") {
        window.pageData.intervyuRows += `
        <iframe class="anim" src="${video["iframe"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
    }
  }
}

export default function content(){
  return `
    <container class="gallery">
      <row>
        <button><a href="#operations">${window.Lang.use("operations")}</a></button>
        <button><a href="#advice">${window.Lang.use("interviewDoc")}</a></button>
        <button><a href="#interview">${window.Lang.use("interviewClient")}</a></button>
      </row>

      <h2  id="operations" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("operations")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.operatsiyaRows}
      </row>

      <h2  id="advice" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("interviewDoc")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.shifokorRows}
      </row>

      <h2  id="interview" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("interviewClient")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.intervyuRows}
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
