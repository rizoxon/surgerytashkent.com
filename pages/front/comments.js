export const TITLE = window.Lang.use("comments");
export async function before(){
  window.pageData.resp = await window.bridge("admin", {for:"getAllComments"});
  console.log(window.pageData.res);
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

export default function content(){
  return `
  <container>
      <column id="sections" class="w-80">
        <section id="comments" class="surface-clean w-100 p-1">
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
      </column>
    </row>
  </container>
  `;
}
