export default function content(){

  return `
    <container class="home">
      <column class="flex-center">
        <row class="gap-1 p-5">
          <img src="images/logo.gif" class="w-60" style="align-self: center;" />
          <column class="gap-1 w-20">
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
          </column>
        </row>

        <row class="gap-2 p-5">
          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/bariatric.png" class="w-20 mb-5">
            <row class="flex-x-between">
              <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
                <row class="p-2 gap-1 box-modal">
                  <img src="images/bar3.jpg" class="w-30">
                  <img src="images/bar1.jpg" class="w-30">
                  <img src="images/bar5.jpg" class="w-30">
                </row>
                <column class="gap-1 p-2">
                  <h3>${window.Lang.use("info")}</h3>
                  <p>
                    ${window.Lang.use("bariatric_info")}
                  </p>
                </column>
              </x-modal>
              <h3 class="w-100 text-center">${window.Lang.use("bariatric")}</h3>
            </row>
          </column>

          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/xek.png" class="w-20 mb-5">
            <row class="flex-x-between">
              <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
                <row class="p-2 gap-1 box-modal">
                  <img src="images/bar3.jpg" class="w-30">
                  <img src="images/bar1.jpg" class="w-30">
                  <img src="images/bar5.jpg" class="w-30">
                </row>
                <column class="gap-1 p-2">
                  <h3>${window.Lang.use("info")}</h3>
                  <p>
                    ${window.Lang.use("xek_info")}
                  </p>
                </column>
              </x-modal>
              <h3>${window.Lang.use("xek")}</h3>
            </row>
          </column>

          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/back.png" class="w-20 mb-5">
            <row class="flex-x-between">
              <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
                <row class="p-2 gap-1 box-modal">
                  <img src="images/bar3.jpg" class="w-30">
                  <img src="images/bar1.jpg" class="w-30">
                  <img src="images/bar5.jpg" class="w-30">
                </row>
                <column class="gap-1 p-2">
                  <h3>${window.Lang.use("info")}</h3>
                  <p>
                    ${window.Lang.use("churra_info")}
                  </p>
                </column>
              </x-modal>
              <h3>${window.Lang.use("churra")}</h3>
            </row>
          </column>

          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/intestine.png" class="w-20 mb-5">
            <row class="flex-x-between">
              <x-modal trigger="click" type="text" value="Batafsil" button class="mb-2">
                <row class="p-2 gap-1 box-modal">
                  <img src="images/bar3.jpg" class="w-30">
                  <img src="images/bar1.jpg" class="w-30">
                  <img src="images/bar5.jpg" class="w-30">
                </row>
                <column class="gap-1 p-2">
                  <h3>Ma'lumot</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio eum suscipit non repellat illo cumque! Molestias praesentium quasi aliquam autem, quia voluptatem odio, eveniet, perspiciatis doloremque tenetur doloribus nostrum.
                  </p>
                </column>
              </x-modal>
              <h3>Operatsiya nomi</h3>
            </row>
          </column>
        </row>
      </column>

      <column class="w-100 gap-3" style="padding-top: 0;">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white; width: 100vw;">${window.Lang.use("fields")}</h2>

        <row class="flex-x-between p-5 surface-clean  w-90 anim">
          <img src="images/bariatric_surgery_process.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>${window.Lang.use("laparoscopicSurgery")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("laparoscopic_info")}
            </p>
            <button><a href="/laparoskopiya" style="color:white;">${window.Lang.use("more")}</a></button>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/general_surgery.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>${window.Lang.use("general_surgery")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("general_surgery_info")}
            </p>
            <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
              <row class="p-2 gap-1 box-modal">
                <img src="images/bar3.jpg" class="w-30">
                <img src="images/bar1.jpg" class="w-30">
                <img src="images/bar5.jpg" class="w-30">
              </row>
            </x-modal>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/oncology.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>${window.Lang.use("oncology")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("oncology_info")}
            </p>
            <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
              <row class="p-2 gap-1 box-modal">
                <img src="images/bar3.jpg" class="w-30">
                <img src="images/bar1.jpg" class="w-30">
                <img src="images/bar5.jpg" class="w-30">
              </row>
            </x-modal>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 mb-5 anim">
          <img src="images/statsionar.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>${window.Lang.use("inpatient_treatment")}</h2>
            <p class="mt-3 mb-3">
              ${window.Lang.use("inpatient_treatment_info")}
            </p>
            <x-modal trigger="click" type="text" value="${window.Lang.use("more")}" button class="mb-2">
              <row class="p-2 gap-1 box-modal">
                <img src="images/bar3.jpg" class="w-30">
                <img src="images/bar1.jpg" class="w-30">
                <img src="images/bar5.jpg" class="w-30">
              </row>
            </x-modal>
          </column>
        </row>

      </column>

      <column class="w-100 gap-2">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("doctors")}</h2>

        <row class="flex-x-between p-5 surface-2D w-90 anim">
          <img src="images/main_doctor_2.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>${window.Lang.use("doctor_1")}</h2>
            <p class="mt-3 mb-3">${window.Lang.use("doctor_1_info")}</p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="${window.Lang.use("certificates")}" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("diplomas")}" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("info")}" button>
                <h3 class="m-2">${window.Lang.use("doctor_1")}</h3>
                <p class="p-2">${window.Lang.use("doctor_1_fullinfo")}</p>
              </x-modal>
            </row>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-2D w-90 anim">
          <img src="images/main_doctor_1.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>${window.Lang.use("doctor_2")}</h2>
            <p class="mt-3 mb-3">${window.Lang.use("doctor_2_info")}</p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="${window.Lang.use("certificates")}" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="${window.Lang.use("diplomas")}" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
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
              <p class="text-size-2">+998 (90) 123-45-67 </p>
              <button><a href="http://sabadarmon.uz/">${window.Lang.use("more")}</a></button>
            </row>
          </column>
        </row>
      </column>


      <column class="w-100">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("bariatric")}</h2>
        <form name="bmiForm">
          <div class="bmi-calculator">
            <h1 style="margin-bottom: 1em;">${window.Lang.use("checkBmi")}</h1>
            <div class="bmi-calculator-weight">
              <input class="weight-slider range" name="realweight" id="myWeight" type="range" min="25" max="180" value="60" />
              <p style="margin-top: 1.8em;">
                ${window.Lang.use("weight")}: 
                <input class="number" name="Teža" id="inputWeight" type="number" value="60" min="25" max="180" oninput="showValWeight(this.value)"/>
                <span id="weight"></span> kg
              </p>
            </div>
            <div class="bmi-calculator-height">
              <input class="height-slider range" name="realheight" id="myHeight" type="range" min="100" max="220" value="160">
              <p style="margin-top: 1.8em;">
                ${window.Lang.use("height")}:
                <input class="number" name="Višina" id="inputHeight" type="number" value="160" min="100" max="220" oninput="showValHeight(this.value)"/>
                <span id="height"></span> cm
              </p>
            </div>
            <input class="gumb" type="button" value="${window.Lang.use("calc")}" id="button" style="margin-top: 0.5em">
            <p style="margin-top: 1em;font-size: 1.2em;">
              <strong>${window.Lang.use("height")}:</strong>
              <span id="yourbmi" style="font-size: 1.2em;margin-left: 8px;"></span>
            </p>
            <p></p>
            <p>
              <span id="evaluationMessage"></span>
            </p>
          </div>
        </form>

        <row class="p-2 gap-1 box-modal">
          <img src="images/bar3.jpg" class="w-30 anim">
          <img src="images/bar1.jpg" class="w-30 anim">
          <img src="images/bar5.jpg" class="w-30 anim">
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

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("results")}</h2>

        <row class="gap-2 p-3">
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("before")}</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("after")}</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("before")}</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("after")}</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("before")}</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">${window.Lang.use("after")}</h3>
              </column>
            </row>
          </column>
        </row>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">${window.Lang.use("contact")}</h2>
        <row class="surface-clean p-2 w-70 contact">
          <iframe class="anim" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.974372102905!2d69.21694!3d41.330892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUxLjIiTiA2OcKwMTMnMDEuMCJF!5e0!3m2!1sen!2s!4v1697022796395!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <column class="p-2 text-left w-30">
            <h4 class="info">${window.Lang.use("address")}</h4>
            <p>${window.Lang.use("addInfo")}</p>
            <h4 class="info">${window.Lang.use("phoneNum")}</h4>
            <p>
              +998 90 123-45-67
            </p>
            <h4 class="info" style="padding-bottom: 5%;">${window.Lang.use("socialMedia")}</h4>
            <column class="gap-1">
              <row class="gap-1 flex-center">
                <a href="#" class="bg-5 p-2 d-flex flex-center anim">
                  <img src="images/telegram.png" class="w-50">
                </a>
                <a href="#" class="bg-5 p-2 d-flex flex-center anim">
                  <img src="images/instagram.png" class="w-50">
                </a>
              </row>
              <row class="gap-1 flex-center">
                <a href="#" class="bg-5 p-2 d-flex flex-center anim">
                  <img src="images/facebook.png" class="w-50">
                </a>
                <a href="#" class="bg-5 p-2 d-flex flex-center anim">
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


  var weightSlider = document.getElementById("myWeight");
  var weightOutput = document.getElementById("inputWeight");
  // Height variables
  var heightSlider = document.getElementById("myHeight");
  var heightOutput = document.getElementById("inputHeight");
  // Display slider value
  weightOutput.innerHTML = weightSlider.value;
  heightOutput.innerHTML = heightSlider.value;
  // Update sliders in real time while dragging it
  weightSlider.oninput = function () {
    weightOutput.innerHTML = this.value;
  }
  heightSlider.oninput = function () {
    heightOutput.innerHTML = this.value;
  }
  // Change weight-slider value on weight-number input
  function showValWeight(newVal) {
    weightSlider.value=newVal;
  };
  // Change height-slider value on height-number input
  function showValHeight(newVal) {
    heightSlider.value=newVal;
  };
  // *** Change number input when dragging slider ***
  // Add 2 eventListeners for weight and input sliders
  weightSlider.addEventListener("input", updateValueWeight);
  heightSlider.addEventListener("input", updateValueHeight);
  function updateValueWeight(e) {
    weightOutput.value = e.srcElement.value;
  }
  function updateValueHeight(e) {
    heightOutput.value = e.srcElement.value;
  }
  // Calculate BMI
  function calculateBmi() {
    var weight = document.bmiForm.realweight.value;
    var height = (document.bmiForm.realheight.value)/100;
    var realbmi = (weight)/Math.pow(height, 2);
    var realbmiOutput = document.getElementById("yourbmi");
    var messageOutput = document.getElementById("evaluationMessage");
    var roundedBmi = realbmi.toFixed(1);
    messageOutput.innerHTML = ""; // Clear message before calculating new BMI
    realbmiOutput.innerHTML = " " + roundedBmi; // Print BMI
    // Appropriate message for your BMI rating
    if (roundedBmi < 30) {
      messageOutput.innerHTML = window.Lang.use("lessBmi");
    } else {
      messageOutput.innerHTML = window.Lang.use("moreBmi");
    }
  }

  document.querySelector("#button").addEventListener('click', e => {
    e.preventDefault()
    calculateBmi();
  })
}