export default function content(){

  return `
    <container class="home">
      <column class="flex-center">

        <row class="flex-x-between flex-y-center p-2 main-row">
          <column class="gap-1 anim w-15 doctor-card p-1">
            <img src="images/main_doctor_2.jpg" class="w-100">
            <h5 class="text-center"><a href="#doctor_1">${window.Lang.use("doctor_1")}</a></h5>
          </column>

          <img src="images/logo.gif" class="w-40" style="align-self: center;" />

          <iframe class="main-video" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8pvv9b" allowfullscreen title="Dailymotion Video Player" > </iframe>

          <column class="gap-1 anim w-15 doctor-card p-1">
            <img src="images/main_doctor_1.jpg" class="w-100">
            <h5 class="text-center"><a href="#doctor_2">${window.Lang.use("doctor_2")}</a></h5>
          </column>
        </row>

        <row class="gap-1 p-2 w-60 text-center m-5 text-row flex-center">
          <h2>${window.Lang.use("heroWord")}</h2>
        </row>

        <row class="gap-1 p-2 w-100 page-boxes">
          <a href="/bariatric" class="surface-clean p-5 w-100 anim">
            <column>
              <image src="images/fattothin.png" class="w-20">
              <h4>${window.Lang.use("bariatric")}</h4>
            </column>
          </a>
          <a href="/laparoscopicSurgery" class="surface-clean p-5 w-100 anim">
            <column>
              <image src="images/surgery.png" class="w-20">
              <h4>${window.Lang.use("laparoscopicSurgery")}</h4>
            </column>
          </a>
          <a href="/doctors" class="surface-clean p-5 w-100 anim">
            <column>
              <image src="images/doctor.png" class="w-20">
              <h4>${window.Lang.use("doctors")}</h4>
            </column>
          </a>
          <a href="/videos" class="surface-clean p-5 w-100 anim">
            <column>
              <image src="images/video-marketing.png" class="w-20">
              <h4>${window.Lang.use("videos")}</h4>
            </column>
          </a>
          <a href="/photos" class="surface-clean p-5 w-100 anim">
            <column>
              <image src="images/picture.png" class="w-20">
              <h4>${window.Lang.use("photos")}</h4>
            </column>
          </a>
        </row>
      </column>

      <column class="w-100 gap-3" style="padding-top: 0;">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white; width: 100vw;">${window.Lang.use("fields")}</h2>

        <row class="flex-x-between p-5 surface-clean  w-90 anim">
          <img src="images/bariatric_surgery_process.jpg" class="w-40 mr-5" />
          <column class="flex-y-end gap-2">
            <h2>${window.Lang.use("laparoscopicSurgery")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("laparoscopic_info")}
            </p>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/general_surgery.jpg" class="w-40 mr-5" />
          <column class="flex-y-end gap-2">
            <h2>${window.Lang.use("general_surgery")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("general_surgery_info")}
            </p>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/oncology.jpg" class="w-40 mr-5" />
          <column class="flex-y-end gap-2">
            <h2>${window.Lang.use("oncology")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("oncology_info")}
            </p>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 mb-5 anim">
          <img src="images/statsionar.jpg" class="w-40 mr-5" />
          <column class="flex-y-end gap-2">
            <h2>${window.Lang.use("inpatient_treatment")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("inpatient_treatment_info")}
            </p>
          </column>
        </row>

      </column>

      <column class="w-100 gap-2">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("doctors")}</h2>

        <row class="flex-x-between p-5 surface-2D w-90 anim" id="doctor_1">
          <img src="images/main_doctor_2.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>${window.Lang.use("doctor_1")}</h2>
            <p class="mt-3 mb-3">${window.Lang.use("doctor_1_info")}</p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="${window.Lang.use("certificates")}" button id="certificates_1">
                <img src="images/d1_cer_001.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_002.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_003.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_004.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_005.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_006.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_007.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_008.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_009.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_010.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_011.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_cer_012.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0001.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0002.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0004.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0008.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0011.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0013.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0016.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0017.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0018.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0025.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("diplomas")}" button>
                <img src="images/d1_dip_001.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_dip_002.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/d1_dip_003.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("info")}" button>
                <h3 class="m-2">${window.Lang.use("doctor_1")}</h3>
                <p class="p-2">${window.Lang.use("doctor_1_fullinfo")}</p>
              </x-modal>
            </row>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-2D w-90 anim" id="doctor_2">
          <img src="images/main_doctor_1.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>${window.Lang.use("doctor_2")}</h2>
            <p class="mt-3 mb-3">${window.Lang.use("doctor_2_info")}</p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="${window.Lang.use("certificates")}" button>
                <img src="images/0003.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0005.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0006.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0007.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0009.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0010.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0012.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0014.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0015.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0019.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0020.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0021.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0022.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0023.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0024.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/0026.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("diplomas")}" button>
                <img src="images/diploma_d2_1.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/diploma_d2_2.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("info")}" button>
                <h3 class="m-2">${window.Lang.use("doctor_2")}</h3>
                <p class="p-2">${window.Lang.use("doctor_2_fullinfo")}</p>
              </x-modal>
            </row>
          </column>
        </row>
        <button><a href="/doctors" style="color:white">${window.Lang.use("allDoctors")}</a></button>
      </column>

      <column class="w-100 mt-5">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("clinic")}</h2>

        <row class="p-5 anim">
          <img src="/images/klinika.jpg" class="w-40" alt="Doctor">
          <column>
            <h1>Sabodarmon</h1>                                                             
            <p class="p-5">${window.Lang.use("clinicInfo")}</p>
            <row class="gap-2 flex-center">
              <p class="text-size-2">+998 97 466-77-55</p>
              <button><a href="http://sabadarmon.uz/">${window.Lang.use("more")}</a></button>
            </row>
          </column>
        </row>
      </column>


      <column class="w-100">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("bariatric")}</h2>
        <row class="panel m-5 flex-x-between">
          <column class="gap-1">
            <h2 class="text-center">${window.Lang.use("checkBmi")}</h2>
            
            <form>
                <div id="weightInput">
                  <p>${window.Lang.use("weight")} (KG)</p>
                    <input id="weight" type="number" pattern="[0-9]*" name="a" />
                </div>
                <div id="heightInput">
                  <p>${window.Lang.use("height")} (CM)</p>
                  <input id="height" type="number" pattern="[0-9]*" name="b"/> 
                </div>
                <button type="button" class="btn" id="bmiBtn" style="background-color: #2491eb;" >${window.Lang.use("calc")}</button>
            </form>
          </column>
          <div id="results" class="text-center">${window.Lang.use("yourBmi")}</div>
        </row>

       <row class="p-2 gap-1 box-modal">
          <img src="images/bariatric_img1.jpg" class="w-30 anim">
          <img src="images/bariatric_img2.jpg" class="w-30 anim">
          <img src="images/bariatric_img3.jpg" class="w-30 anim">
        </row>
        <row class="p-2 gap-1 box-modal">
          <img src="images/bariatric_img4.jpg" class="w-60 anim">
          <img src="images/bariatric_img5.jpg" class="w-30 anim">
          <img src="images/bariatric_img6.jpg" class="w-30 anim">
        </row>
        <column class="gap-1 p-2">
          <h3 class="w-90">${window.Lang.use("info")}</h3>
          <p class="w-90">${window.Lang.use("bariatric_info")}</p>
        </column>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("laparoscopicSurgery")}</h2>

        <row class="p-2 gap-1 box-modal">
          <img src="images/laproskopiya1.jpg" class="w-30 anim">
          <img src="images/laproskopiya2.jpg" class="w-30 anim">
          <img src="images/laproskopiya3.jpg" class="w-30 anim">
        </row>
        <column class="gap-1 p-2">
          <h3 class="w-90">${window.Lang.use("info")}</h3>
          <p class="w-90">${window.Lang.use("laparoscopic_info")}</p>
        </column>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("contact")}</h2>
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

        <form action="/" for="sendComment" class="w-70 surface-clean p-5 mt-5 mb-5  anim">
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

      </column>

    </container>
  `;
}

export function after(){
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('move')
      } else {
        item.target.classList.remove('move')
      }
    });
  });

  const anim_elements = document.querySelectorAll('.anim');
  anim_elements.forEach((el) => observer.observe(el));

  var weight, height, measure, bmi, error ;

  function calculate() {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    error = "Please enter some values";
    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
      measure = `
        <column>
            <p>${window.Lang.use("yourBmi")}: <h1 style="color: #2491eb; text-align: center;">${bmi}</h1></p>
            <column>
              <p>${window.Lang.use("lessBmi")}</p>
              <img src='images/skinny.png'>
            </column>
        </column>
      `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      measure = `
        <column>
            <p>${window.Lang.use("yourBmi")}: <h1 style="color: #009e3d; text-align: center;">${bmi}</h1></p>
            <column>
              <p>${window.Lang.use("lessBmi")}</p>
              <img src='images/normal.png'>
            </column>
        </column>
      `;
    } else if (bmi >= 25 && bmi <= 29.9) {
      measure = `
        <column>
            <p>${window.Lang.use("yourBmi")}: <h1 style="color: #ff1b00; text-align: center;">${bmi}</h1></p>
            <column>
              <p>${window.Lang.use("moreBmi")}</p>
              <img src='images/overweight.png'>
            </column>
        </column>
      `;
    } else if (bmi >= 30) {
      measure = `
        <column>
            <p>${window.Lang.use("yourBmi")}: <h1 style="color: #ff1b00; text-align: center;">${bmi}</h1></p>
            <column>
              <p>${window.Lang.use("moreBmi")}</p>
              <img src='images/obese.png'>
            </column>
        </column>
      `;
    }
    

    if (weight === 0 ) {
      document.getElementById("results").innerHTML = error;
    } else if (height === 0){
      document.getElementById("results").innerHTML = error;
    }
    else {

      document.getElementById("results").innerHTML = measure;
    }
    if (weight < 0) {
      document.getElementById("results").innerHTML = "Negative Values not Allowed";
    }
  }
  document.getElementById('bmiBtn').addEventListener('click', e => {
    e.preventDefault()
    calculate()
  })
}