export const TITLE = window.Lang.use("contact");

export default function content(){

  return `
    <container class="contact">

      <row class="flex-center">
        <h1>Biz bilan bog'laning</h1>
      </row>

      <row class="gap-2 w-60 py-5">
        <column class="surface-clean w-100">
          Our location
        </column>
        <column class="surface-clean w-100">
          Our contact
        </column>
        <column class="surface-clean w-100">
          Our social media
        </column>
      </row>

      <form action="/contact" for="sendComment" class="w-60 surface-clean p-5" style="height: auto;">
        <row class="gap-1">
          <label>
            <p for="fullName">Ismingizni kiriting</p>
            <input type="text" name="fullName"  />
          </label>
          <label>
            <p for="phoneNumber">Telefon raqamingizni kiriting</p>
            <input type="tel" name="phoneNumber"  />
          </label>
        </row>
        <labe>
          <p for="comment">Komentariya qoldiring</p>
          <textarea name="comment"></textarea>
        </labe>
        <label>
          <input type="submit" name="send" value="Jo'natish" />
          <p for="sendComment"></p>
        </label>
      </form>

      
      <row>
        Map
      </row>
    </container>
  
  `;
}