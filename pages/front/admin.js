export const TITLE = window.Lang.use("admin");
export default function content(){
  return `
    <container class="p-5 admin">
      <row>
        <a href="/comments" class="surface-clean p-5 m-2">${window.Lang.use("comments")}</a>
        <a href="/photosControl" class="surface-clean p-5 m-2">${window.Lang.use("photos")}</a>
        <a href="/videosControl" class="surface-clean p-5 m-2">${window.Lang.use("videos")}</a>
      </row>
      <row>
        <a href="/doctorsControl" class="surface-clean p-5 m-2">${window.Lang.use("doctors")}</a>
        <a href="/certificates" class="surface-clean p-5 m-2">${window.Lang.use("certificates")}</a>
        <a href="/diplomas" class="surface-clean p-5 m-2">${window.Lang.use("diplomas")}</a>
      </row>
    </container>
  `;
}
