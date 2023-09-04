export function before(){
  let photos = await window.bridge("photoManagement", {for:"getAllPhotos"}, "application/json");

  loop
    calc

  window.pageData.HTML = `

    <img src=${photos[0][name]} />
  `;
}


export default function content(){
  return `
    <form action="photoManagement" for="uploadPhoto">

    </form>

    ${window.pageData.HTML}
  `;
}


export function after(){
  // Del/ Set / Updt
}
