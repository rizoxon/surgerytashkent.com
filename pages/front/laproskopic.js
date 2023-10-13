export default function content(){
  return `
    <container class="laproskopic">
      <h1 class="p-5">
        Zamonaviy laproskopik operatsiyalar
      </h1>
      <column class="w-70">
        <img src="images/b_main.jpg" class="w-100">
        <column class="p-5">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, velit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facere voluptate dicta est doloribus nesciunt, assumenda dolores esse, dolor illum iste cupiditate, ad excepturi. Exercitationem voluptatum perspiciatis animi omnis pariatur.</p>
          <row class="flex-x-between flex-y-center">
            <button><h2><a href="#" style="color: white;">Aloqa</a></h2></button>
            <h2>+998 90 123-45-67</h2>
          </row>
        </column>
      </column>

      <row class="w-70 gap-2 mt-5">
        <column class="flex-center p-5 surface-clean">
          <img src="images/flash.png" class="w-20">
          <h3>Tezkor</h3>
        </column>

        <column class="flex-center p-5 surface-clean">
          <img src="images/security.png" class="w-20">
          <h3>Ishonchli</h3>
        </column>

        <column class="flex-center p-5 surface-clean">
          <img src="images/clock.png" class="w-20">
          <h3>Samarali</h3>
        </column>

        <column class="flex-center p-5 surface-clean">
          <img src="images/trust.png" class="w-20">
          <h3>Kafolatlangan</h3>
        </column>
      </row>
      
      <row class="gap-1 w-80 p-5">
        <img src="images/general_surgery.jpg" class="w-30 surface-clean p-1">
        <img src="images/laproskopiya3.jpg" class="w-30 surface-clean p-1">
        <img src="images/bariatrik1.jpg" class="w-30 surface-clean p-1">
      </row>

      <row class="gap-1 w-80 p-5">
        <img src="images/general_surgery.jpg" class="w-30 surface-clean p-1">
        <img src="images/laproskopiya3.jpg" class="w-30 surface-clean p-1">
        <img src="images/bariatrik1.jpg" class="w-30 surface-clean p-1">
      </row>

      <row class="surface-clean p-2 w-70 contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.974372102905!2d69.21694!3d41.330892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUxLjIiTiA2OcKwMTMnMDEuMCJF!5e0!3m2!1sen!2s!4v1697022796395!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <column class="p-2 text-left w-30">
          <h4 class="info">Manzil</h4>
          <p>
            Ўзбекистон, Тошкент <br>
            Нурафшон кўчаси, Уй № 7А
          </p>
          <h4 class="info">Telefon raqam</h4>
          <p>
            +998 90 123-45-67
          </p>
          <h4 class="info" style="padding-bottom: 5%;">Ijtimoiy tarmoqlar</h4>
          <column class="gap-1">
            <row class="gap-1 flex-center">
              <a href="#" class="bg-5 p-2 d-flex flex-center">
                <img src="images/telegram.png" class="w-50">
              </a>
              <a href="#" class="bg-5 p-2 d-flex flex-center">
                <img src="images/instagram.png" class="w-50">
              </a>
            </row>
            <row class="gap-1 flex-center">
              <a href="#" class="bg-5 p-2 d-flex flex-center">
                <img src="images/facebook.png" class="w-50">
              </a>
              <a href="#" class="bg-5 p-2 d-flex flex-center">
                <img src="images/youtube.png" class="w-50">
              </a>
            </row>
          </column>
        </column>
      </row>

      <form action="/" for="sendComment" class="w-70 surface-clean p-5 mt-5 mb-5">
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
    </container>
  `;
}