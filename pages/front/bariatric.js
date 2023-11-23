export function before(){

}
export default function content(){
  return `
    <container class="bariatric">
      <h1 class="p-5">${window.Lang.use("qualityService")}</h1>
      <row class="w-70 flex-y-center">
        <column class="flex-x-between anim anim_left w-80">
          <p>${window.Lang.use("bariatricPage")}</p>
          <row class="flex-x-between flex-y-center mt-5">
            <button><h2><a href="#contact" style="color: white;">${window.Lang.use("contact")}</a></h2></button>
            <h2>+998 97 466-77-55</h2>
          </row>
        </column>
        <img src="images/fat-thin.png" class="w-60 anim anim_right">
      </row>

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

      <row class="panel m-5 flex-x-between">
        <column class="gap-1">
          <h2 class="text-center">Check your BMI</h2>
          
          <p id="introText" class="text-center">Enter your weight and height below to check your BMI results</p>
          
          <form>
              <div id="weightInput">
                <p>Put your weight in here (KG)</p>
                  <input id="weight" type="number" pattern="[0-9]*" name="a" />
              </div>
              <div id="heightInput">
                <p>And your height in here (CM)</p>
                <input id="height" type="number" pattern="[0-9]*" name="b"/> 
              </div>
              <button type="button" class="btn" id="bmiBtn" style="background-color: #2491eb;" >Calculate BMI</button>
          </form>
        </column>
        <div id="results" class="text-center">Your BMI results will appear here</div>
      </row>
      
      <row class="gap-1 w-80 p-5">
        <img src="images/general_surgery.jpg" class="w-30 surface-clean p-1 anim">
        <img src="images/laproskopiya3.jpg" class="w-30 surface-clean p-1 anim">
        <img src="images/bariatrik1.jpg" class="w-30 surface-clean p-1 anim">
      </row>

      <row class="gap-1 w-80 p-5">
        <img src="images/bar1.jpg" class="w-30 surface-clean p-1 anim">
        <img src="images/bar2.jpg" class="w-30 surface-clean p-1 anim">
        <img src="images/bar3.jpg" class="w-30 surface-clean p-1 anim">
      </row>

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
            <input type="number" name="phoneNumber" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"  />
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
      measure = "Your BMI is " + bmi + " which means " + "you are Underweight" + "<img src='images/skinny.png' class='w-30'>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      measure = "Your BMI is " + bmi + " which means " + "You are Normal" + "<img src='images/normal.png' class='w-30'>";
    } else if (bmi >= 25 && bmi <= 29.9) {
      measure = "Your BMI is " + bmi + " which means " + "You are Overweight" + "<img src='images/overweight.png' class='w-30'>";
    } else if (bmi >= 30) {
      measure = "Your BMI is " + bmi + " which means " + "You are Obese" + "<img src='images/obese.png' class='w-30'>";
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