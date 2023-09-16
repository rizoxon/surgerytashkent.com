export const TITLE = window.Lang.use("contact");

export default function content(){

  return `
    <container class="contact">

      <row class="flex-center">
        <h1>Biz bilan bog'laning</h1>
      </row>

      <row class="gap-2 w-60 py-5">
        <column class="surface-clean">
          <img src="./images/map.png" />
          <h2>Bizning manzil</h2>
          <p>Ўзбекистон, Тошкент. Нурафшон кўчаси, Уй № 7А</p>
        </column>
        <column class="surface-clean">
          <img src="./images/map.png" />
          <h2>Bizning aloqa</h2>
          <p> +998(90)-123-44-55<br>+998(90)-123-44-55</p>
        </column>
        <column class="surface-clean">
          <img src="./images/mail.png" />
          <h2>Xabar qoldirish</h2>
          <p>Pastdagi havola orqali bizga, savol, taklif yoki aloqaga chiqish uchun ma'lumot qoldiring</p>
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

      
      <column class="w-100 mt-5">
        <h2>Ijtimoiy tarmoqlar</h2>
        <row class="gap-2 p-5">
          <a href="#" class="surface-clean p-5"><img src="./images/facebook.png" style="width: 50px;" /></a>
          <a href="#" class="surface-clean p-5"><img src="./images/instagram.png" style="width: 50px;" /></a>
          <a href="#" class="surface-clean p-5"><img src="./images/telegram.png" style="width: 50px;" /></a>
          <a href="#" class="surface-clean p-5"><img src="./images/youtube.png" style="width: 50px;" /></a>
        </row>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.985208578498!2d69.2167817!3d41.330935000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8b303ea6cb%3A0xc10570ee75a17d5!2sSaba%20Darmon!5e0!3m2!1sen!2s!4v1693187392275!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </column>
    </container>
  
  `;
}