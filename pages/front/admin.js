export const TITLE = window.Lang.use("admin");

export async function before(){
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

export default function content(){
  return `
    <container>
      <row class="gap-1 p-5">
        <column id="sections" class="w-auto">
          <x-nav selector="column#sections">
            [
              {"link": "commnets"}
            ]
          </x-nav>
        </column>

        <column id="sections" class="w-70">
          <section id="commnets" class="surface-clean w-100 p-1">
            <table class="x-skeleton scrollbar-x">

              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Phone number</th>
                  <th>Comment</th>
                  <th>Action</th>
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
