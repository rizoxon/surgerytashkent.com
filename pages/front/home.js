export const TITLE = window.Lang.use("home");

export default function content(){

  return `

    <container class="home">

      <row>
        <column class="flex-x-center flex-y-start w-60 gap-0-8">
          <p class="radius-default sm-text bg-shadow">Shifokor</p>
          <p class="text-size-3 text-lh-2-5">Xusnuddinov Nizomuddin Zuxruddinovich</p>
          <p class="text-size-1.5">ROSSIYA, KOREYA, GRUJIYA, AZARBAYJON VA TURKIYADA onkologiya va radiologiya yo'nalishida rsnpmc doktoranturasi ta'limini o'tagan. Shoshilinch jarrohlik, videolaparoskopiya, pankreatobiliar jarrohlik va onkologiyaga oid 10 dan ortiq nashrlar muallifi va hammuallifi. U 2021 yilda TMA tomonidan chiqarilgan endoskopik jarrohlik bo'yicha mutaxassislikka ega. Bariatrik jarrohlar xalqaro assotsiatsiyasi (IFSO) aʼzosi, Oʻzbekiston bariatrik jarrohlari.</p>
          <a href="/about"><button class="text-size-1">Batafsil</button></a>
        </column>
        <img src="./images/doctor.png" alt="Doctor">
      </row>

      <row>
        <row class="flex-center w-40">
          <img src="./images/clinic.jpg" class="bs-default" alt="Doctor">
        </row>
        <column class="flex-x-center flex-y-start w-60 gap-0-8">
          <p class="radius-default sm-text bg-shadow">Shifoxona</p>
          <h1>Sog'lom hayot sari yo'l shu yerdan boshlanadi.</h1>
          <p>“ SABA DARMON ” клиникаси ўз фаолиятини 18 йилдан бери юритиб келмоқда. Клиника ўз фаолиятини бепуштликни даволаш билан бошлаган. Хозирда барча касалликларни самарали даволаб келмоқдамиз.</p>
          <ul>
            <li>18 йиллик иш тажрибаси.</li>
            <li>35 шифокор.</li>
            <li>14 жаррох.</li>
            <li>1 500 000 бемор даволанган.</li>
          </ul>
          <p class="text-size-2">+998 (90) 123-45-67 </p>
          <a href="#"><button class="text-size-1">Batafsil</button></a>
        </column>
      </row>

      <column class="p-5 flex-y-center w-80">
        <h1 class="text-center mb-5">Bariatrik jarrohlik</h1>
        <p>
        &nbsp &nbsp &nbsp “Asr kasalligi” deb atalgan semizlik inson salomatligi uchun jiddiy xavf tug‘diradi va afsuski, jahon miqyosida ham, mamlakatimizda ham tez sur’atlar bilan o‘sishda davom etmoqda.
        O'z-o'zidan boshqariladigan turli xil parhezlar, sport mashqlari va turmush tarzini o'zgartirishga urinishlar ko'p hollarda o'z-o'zidan samarasiz bo'lib qoladi. Xususan, semizlik o‘zi bilan olib keladigan diabet, yurak xastaligi va uyqu apnesi kabi jiddiy sog‘liq muammolari vaqt o‘tishi bilan hayot uchun xavf tug‘diradi. Aynan shunday paytlarda bariatrik jarrohlik muhim ahamiyatga ega bo'ladi.
        <br> &nbsp &nbsp &nbsp  Bariatrik jarrohlik - bu vazn yo'qotish uchun bajariladigan barcha jarrohlik muolajalar to'plami.
        <br> &nbsp &nbsp &nbsp Ushbu operatsiyalar og'irlikni kamaytirishga qaratilgan bo'lib, siz qancha ovqatlanishingiz mumkinligiga cheklovlar qo'yish va ovqatning oshqozon-ichak traktidan so'rilishini kamaytirishdir.
        <br><br> &nbsp &nbsp &nbsp Eng keng tarqalgan Bariatrik operatsiyalar:
        <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Oshqozon rezektsiyasi - Sleeve Gastroplasty
        <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Gastrobypass operatsiyasi
        <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Mini gastrik bypass anastomozi
        <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Oshqozon tasmasi
        <br><br> &nbsp &nbsp &nbsp Agar soddalashtirsak, gastrektomiya operatsiyasi paytida oshqozon hajmi, operatsiya tufayli oshqozon hajmi kamayadi, natijada oziq-ovqat kamroq iste'mol qilinadi. Bemor iste'mol qilinadigan oziq-ovqat miqdorini nazorat qila oladi, tezda to'yinganlik tuyg'usiga erishadi.
        Yoki boshqa turdagi bariatrik jarrohlik bilan, ichak hajmini kamaytirish orqali ozuqa moddalarining so'rilishi kamayadi. Shunday qilib, kaloriya iste'molini oldini oladi.
        Shuning uchun ko'p hollarda bariatrik jarrohlik "Og'irlikdagi jarrohlik" deb ham ataladi. Chunki bariatrik jarrohlik uzoq muddatli va barqaror vazn yo'qotishni ta'minlaydigan yagona usuldir.
        Bariatrik jarrohlikda operatsiyalar yopiq usulda, ya'ni laparoskopik usulda amalga oshiriladi. Shunday qilib, u bemorning tanasida kesilgan izlarni qoldirmaydi va estetik ko'rinishni buzmaydi. Laparoskopik jarrohlik davolanish vaqtini va kasalxonada qolishni qisqartiradi.
        Qisqa vaqt ichida o'zida ijobiy o'zgarishlarni ko'rgan bemorning kayfiyatida ham sezilarli o'zgarishlar yuz beradi.
        Sog'lom ovqatlanish va faol turmush tarzi bilan birgalikda bariatrik jarrohlik kutilgan vazn yo'qotish natijalarini beradi.
        </p>
      </column>

      <row class="p-5 bmi">
        <form class="c-bmi">
          <label class="c-bmi__label"><strong>Bo'y</strong>
            <input class="c-bmi__range" type="range" name="h" min="150" max="230" step="0.5" value="180" />
            <output name="ho"><output>
          </label>
          <label class="c-bmi__label"><strong>Vazn</strong>
            <input class="c-bmi__range" type="range" name="w" min="35" max="200" step="0.1" value="75" />
            <output name="wo">75</output>
          </label>
          <div class="c-bmi__result">Tana vazn indeksi: <output name="r"></output></div>
          <div class="c-bmi__groups" readonly>
            <input type="radio" id="bmi-g0" name="g" />
            <label for="bmi-g0">Kam vazn</label>
            <div class="c-bmi__group-text">18,5 dan kam tana vazn indeksi noto'g'ri ovqatlanish, ovqatlanish buzilishi yoki boshqa sog'liq muammolarini ko'rsatishi mumkin.</div>
            <input type="radio" id="bmi-g1" name="g" checked />
            <label for="bmi-g1">Odatiy</label>
            <div class="c-bmi__group-text">18,5 dan 25 gacha bo'lgan Tana vazn indeksi normal va sog'lom hisoblanadi. </div>
            <input type="radio" id="bmi-g2" name="g" />
            <label for="bmi-g2">Deyarli semizlik</label>
            <div class="c-bmi__group-text">Ushbu toifaga kiradigan odamlar semirishni rivojlantirishxavfi ostida bo'lishi mumkin.<br />Ilgari bu "ortiqcha vazn" deb tasniflangan.</div>
            <input type="radio" id="bmi-g3" name="g" />
            <label for="bmi-g3">Ortiqcha vazn I</label>
            <div class="c-bmi__group-text">Tana vazn indeksi 30 ga teng yoki yuqori bo'lgan odamlarda semizlik bo'lishi mumkin, bu sog'likka zarar etkazishi mumkin bo'lgan kasallik yoki ortiqcha yog' to'planishi sifatida aniqlanadi.</div>
            <input type="radio" id="bmi-g4" name="g" />
            <label for="bmi-g4">Ortiqcha vazn II</label>
            <div class="c-bmi__group-text">Tana vazn indeksi 30 ga teng yoki yuqori bo'lgan odamlarda semizlik bo'lishi mumkin, bu sog'likka zarar etkazishi mumkin bo'lgan kasallik yoki ortiqcha yog' to'planishi sifatida aniqlanadi.</div>
            <input type="radio" id="bmi-g5" name="g" />
            <label for="bmi-g5">Ortiqcha vazn III</label>
            <div class="c-bmi__group-text">Tana vazn indeksi 30 ga teng yoki yuqori bo'lgan odamlarda semizlik bo'lishi mumkin, bu sog'likka zarar etkazishi mumkin bo'lgan kasallik yoki ortiqcha yog' to'planishi sifatida aniqlanadi.</div>
          </div>
        </form>
      </row>

      <column class="p-5">
        <h1 class="mb-5">Bizning ishonchli va professional jarrohlik xizmatlarimiz</h1>
        <row class="flex-y-center">
          <column class="p-5 gap-1">
            <row class="flex-y-center gap-1">
              <img style="width: 15%;" src="./images/surgery-room.png" />
              <column class="flex-y-start">
                <h4>Yмумий хирургия</h4>
                <p class="text-size-0-7" class="text-size-0-7">Tananing har qanday mintaqasidagi shikastlanishlar va kasalliklarni tashxislash va davolashga qaratilgan keng ko'lamli operativ muolajalarni o'z ichiga oladi.</p>
              </column>
            </row>
            <row class="flex-y-center gap-1">
              <img style="width: 15%;" src="./images/gynecology.png" />
              <column class="flex-y-start">
                <h4>гинекология</h4>
                <p class="text-size-0-7">Hayotni biz bilan yangitdan boshlang. Eng so'ngi texnika va malakali shifokorlar faqat bizda.</p>
              </column>
            </row>
            <row class="flex-y-center gap-1">
              <img style="width: 15%;" src="./images/lor.png" />
              <column class="flex-y-start">
                <h4>ЛОР</h4>
                <p class="text-size-0-7">LOR - bu bosh va bo'yin kasalliklarini jarrohlik va tibbiy davolash bilan shug'ullanadigan tibbiyotning jarrohlik kichik ixtisosligi.</p>
              </column>
            </row>
          </column>

          <column>
            <img src="./images/services.jpg" style="width: 60%;">
          </column>
          
          <column class="p-5 gap-1">
            <row class="flex-y-center gap-1">
              <column class="flex-y-end">
                <h4>лапороскопик операциялар</h4>
                <p class="text-size-0-7 text-right" class="text-right">Laparoskopik jarrohlik - bu kichik (bir santimetrdan kam) kesmalar orqali qorin bo'shlig'iga qisqa, tor naychalar (trokarlar) kiritiladigan jarrohlik usuli.</p>
              </column>
              <img style="width: 15%;" src="./images/scalpel.png" />
            </row>
            <row class="flex-y-center gap-1">
              <column class="flex-y-end">
                <h4>бариатрик операциялар</h4>
                <p class="text-size-0-7 text-right" class="text-right">Bariatrik jarrohlik parhez va jismoniy mashqlar yordam bermaganda yoki vazningiz tufayli jiddiy sog'liq muammolariga duch kelganda bemorlarga yordam beradi.</p>
              </column>
              <img style="width: 15%;" src="./images/bariatric.png" />
            </row>
            <row class="flex-y-center gap-1">
              <column class="flex-y-end">
                <h4>стационар даво</h4>
                <p class="text-size-0-7 text-right" class="text-right">Ushbu davolash markazi bemorlarga ambulator yordam ko'rsatishdan ko'ra ko'proq intensiv davolanish uchun xavfsiz va xavfsiz joyni ta'minlaydi.</p>
              </column>
              <img style="width: 15%;" src="./images/inpatient.png" />
            </row>
          </column>
        </row>
      </column>

      <column class="w-100">
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
export function after(){
  function B(){const e=this.h.valueAsNumber,t=this.w.valueAsNumber,i=parseFloat(t/(e/100)**2).toFixed(2),h=[[0,18.49],[18.5,24.99],[25,29.99],[30,34.99],[35,39.99],[40,100]].findIndex(e=>e[0]<=i&&i<e[1]);let o=(.393700787*e).toFixed(0);this.ho.value=`${e} cm / ${Math.floor(o/12)}' ${o%=12}"`,this.wo.value=`${t} kg / ${(2.2046*t).toFixed(2)} lb`,this.g[h].checked=!0,this.r.value=i}
  const bmi = document.querySelector('.c-bmi')
  bmi.addEventListener('input', B);
  bmi.dispatchEvent(new Event('input'));
}
