export default function content(){
  return `
    <container class="laproskopic">
      <h1 class="p-5">${window.Lang.use("modernLaproscopy")}</h1>
      <column class="w-70">
        <img src="images/b_main.jpg" class="w-100 anim">
        <column class="p-5 anim">
          <p>${window.Lang.use("laparoscopic_info")}</p>
          <row class="flex-x-between flex-y-center mt-3">
            <button><h2><a href="#contact" style="color: white;">Aloqa</a></h2></button>
            <h2>+998 97 466-77-55</h2>
          </row>
        </column>
      </column>

      <row class="w-70 gap-2 mt-5">
        <column class="flex-center p-5 surface-clean anim anim_rotate">
          <img src="images/instagram.png" class="w-20">
          <h3>Instagram</h3>
        </column>

        <column class="flex-center p-5 surface-clean anim anim_rotate">
          <img src="images/youtube.png" class="w-20">
          <h3>Tou Tube</h3>
        </column>

        <column class="flex-center p-5 surface-clean anim anim_rotate">
          <img src="images/telegram.png" class="w-20">
          <h3>Telegram</h3>
        </column>

        <column class="flex-center p-5 surface-clean anim anim_rotate">
          <img src="images/facebook.png" class="w-20">
          <h3>Facebook</h3>
        </column>
      </row>

      <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("churra")}</h2>
      
      <row class="p-2 gap-1 box-modal">
        <img src="images/churra_1.jpg" class="w-60 anim">
        <img src="images/churra_2.jpg" class="w-30 anim">
        <img src="images/churra_3.jpg" class="w-30 anim">
      </row>
      <row class="p-2 gap-1 box-modal">
        <img src="images/churra_4.jpg" class="w-30 anim">
        <img src="images/churra_5.jpg" class="w-30 anim">
        <img src="images/churra_6.jpg" class="w-30 anim">
      </row>

      <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("gallstone")}</h2>

      <row class="p-2 gap-1 box-modal">
        <img src="images/gallstone_1.jpg" class="w-30 anim">
        <img src="images/gallstone_2.jpg" class="w-30 anim">
        <img src="images/gallstone_3.jpg" class="w-30 anim">
      </row>
      <row class="p-2 gap-1 box-modal">
        <img src="images/gallstone_4.jpg" class="w-30 anim">
        <img src="images/gallstone_5.jpg" class="w-30 anim">
        <img src="images/gallstone_6.jpg" class="w-30 anim">
        <img src="images/gallstone_7.jpg" class="w-30 anim">
      </row>

      <row class="surface-clean p-2 w-70 contact">
        <iframe class="anim" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.974372102905!2d69.21694!3d41.330892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUxLjIiTiA2OcKwMTMnMDEuMCJF!5e0!3m2!1sen!2s!4v1697022796395!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <column class="p-2 text-left w-30">
          <h4 class="info">${window.Lang.use("address")}</h4>
          <p>${window.Lang.use("addInfo")}</p>
          <h4 class="info">${window.Lang.use("phoneNum")}</h4>
          <p>
            +998 97 466-77-55
          </p>
          <h4 class="info" style="padding-bottom: 5%;">${window.Lang.use("socialMedia")}</h4>
          <column class="gap-1">
            <row class="gap-1 flex-center">
              <a href="https://t.me/Bariatriya" class="bg-5 p-2 d-flex flex-center anim link">
                <img src="images/telegram.png" class="w-50">
              </a>
              <a href="https://instagram.com/surgery.tashkent?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" class="bg-5 p-2 d-flex flex-center anim link">
                <img src="images/instagram.png" class="w-50">
              </a>
            </row>
            <row class="gap-1 flex-center">
              <a href="https://www.facebook.com/profile.php?id=100089813675353&mibextid=2JQ9oc" class="bg-5 p-2 d-flex flex-center anim link">
                <img src="images/facebook.png" class="w-50">
              </a>
              <a href="https://youtube.com/@surgerytashkent?si=WBAqG4vhX_7aspCN" class="bg-5 p-2 d-flex flex-center anim link">
                <img src="images/youtube.png" class="w-50">
              </a>
            </row>
          </column>
        </column>
      </row>

      <form action="/" for="sendComment" id="contact" class="w-70 surface-clean p-5 mt-5 mb-5 anim">
        <row class="gap-1">
          <label>
            <p for="fullName">${window.Lang.use("enterName")}</p>
            <input type="text" name="fullName"  />
          </label>
          <label>
            <p for="phoneNumber">${window.Lang.use("enterPhone")}</p>
            <input type="tel" name="phoneNumber"  />
          </label>
        </row>
        <labe>
          <p for="comment">${window.Lang.use("leaveComment")}</p>
          <textarea name="comment"></textarea>
        </labe>
        <label>
          <input type="submit" name="send" value="${window.Lang.use("send")}" />
          <p for="sendComment"></p>
        </label>
      </form>
    </container>
  `;
}

export function after(){
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      console.log(item)
      
      if (item.isIntersecting) {
        if (item.target.classList.contains('anim_left')) {
          item.target.classList.add('move_left')
        }
      } else {
        item.target.classList.remove('move_left')
      }

      if (item.isIntersecting) {
        if (item.target.classList.contains('anim_right')) {
          item.target.classList.add('move_right')
        }
      } else {
        item.target.classList.remove('move_right')
      }

      if (item.isIntersecting) {
        if (item.target.classList.contains('anim_rotate')) {
          item.target.classList.add('move_rotate')
        }
      } else {
        item.target.classList.remove('move_rotate')
      }

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