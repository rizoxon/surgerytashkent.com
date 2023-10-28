export default function content(){

  return `
    <container class="home">
      <column class="flex-center">
        <row class="gap-1 p-5">
          <img src="images/logo.gif" class="w-60" style="align-self: center;" />
          <column class="gap-1 w-20">
            <a href="/bariatriya" class="surface-clean p-5 w-100 anim">
              <column>
                <image src="images/fattothin.png" class="w-20">
                <h4>Bariatriya</h4>
              </column>
            </a>
            <a href="/laparoskopiya" class="surface-clean p-5 w-100 anim">
              <column>
                <image src="images/surgery.png" class="w-20">
                <h4>Laproskopik hirurgiya</h4>
              </column>
            </a>
          </column>
        </row>

        <row class="gap-2 p-5">
          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/bariatric.png" class="w-20 mb-5">
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
              <h3>Bariatriya</h3>
            </row>
          </column>

          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/nose.png" class="w-20 mb-5">
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
              <h3>XEK</h3>
            </row>
          </column>

          <column class="surface-clean flex-x-between p-2 pb-0 anim">
            <img src="images/back.png" class="w-20 mb-5">
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
              <h3>Grija</h3>
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
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white; width: 100vw;">Yo'nalishlar</h2>

        <row class="flex-x-between p-5 surface-clean  w-90 anim">
          <img src="images/bariatric_surgery_process.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>Laproskopik xirurgiya</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <button><a href="/laparoskopiya" style="color:white;">Batafsil</a></button>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/general_surgery.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>Umumiy xirurgik operatsiya</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
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
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 anim">
          <img src="images/oncology.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>Onkalogiya</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
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
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90 mb-5 anim">
          <img src="images/statsionar.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>Statsionar davolash</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
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
          </column>
        </row>

      </column>

      <column class="w-100 gap-2">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">Shifokorlar</h2>

        <row class="flex-x-between p-5 surface-2D w-90 anim">
          <img src="images/main_doctor_2.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>Odilho'jaev Asqar Anvarovich</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="Sertifikatlar" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="Diplomlar" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="Ma'lumot" button>
                <h3 class="m-2">Odilxo'jaev Asqar Anvarovich</h3>
                <p class="p-2">
                  Adilxo'jaev Asqar Anvarovich, tibbiyot fanlari doktori, dotsent, oliy toifali jarroh.
                  Adilxo‘jaev A, 2005-yilda Birinchi Toshkent Davlat tibbiyot institutini tamomlagan.
                  2005-2008 yillarda Toshkent tibbiyot akademiyasi “Xirurgiya” ixtisosligi bo‘yicha magistraturani tamomlagan.
                  2009-2010 yildan beri TMA xirurgiya kafedrasi aspiranti boʻlgan va 2010 yilda “Oshqozon osti bezi boshining mahalliy rivojlangan saratoni uchun endovaskulyar aralashuvlarni takomillashtirish” ixtisosligi boʻyicha tibbiyot fanlari nomzodi ilmiy darajasini olish uchun nomzodlik dissertatsiyasini himoya qilgan. Jarrohlik".
                  2010-2016 yillarda TMA fakultet va gospital xirurgiyasi kafedrasida assistent, so‘ngra dotsent lavozimlarida ishlagan.
                  2016-yilda “Xirurgiya” ixtisosligi bo‘yicha “Periampulyar o‘smalarda jarrohlik taktikasini takomillashtirish” mavzusida doktorlik dissertatsiyasini himoya qilgan va 2018-yilda oliy toifali dotsent ilmiy unvonini olgan.
                  2018 yildan hozirgacha Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazida ishlab kelmoqda.
                  Adilxo'jaev A. Shoshilinch jarrohlik, videolaparoskopiya, pankreatikobiliar jarrohlik va onkologiya masalalariga bag'ishlangan 150 dan ortiq nashrlarning muallifi va hammuallifi. 10 ta oʻquv qoʻllanma, tavsiyalar, 3 ta monografiya, shuningdek, 3 ta ixtiroga patent muallifi.
                  Kasbiy faoliyati davomida u bir necha marta tematik takomillashtirish, 2007 yilda onkologiya (Rossiya, Moskva), 2012 yilda endoskopik jarrohlik (Rossiya, Moskva), 2017 yilda ftiziatriya (Ispaniya, Barselona), 2018 yilda pankreatikobiliar va endoskopik jarrohlik bo'yicha mahorat darslarini yakunladi. (Koreya Respublikasi, Seul), semizlik jarrohligi 2018-2019 (Toshkent), metabolik jarrohlik 2021 (Gruziya, Tbilisi).
                  2017 yilda endoskopik jarrohlik, 2018 yilda ftiziojarrohlik, ToshUIV tomonidan chiqarilgan qorin onkoxirurgiyasi mutaxassisligi bor.
                  Bariatrik jarrohlar xalqaro assotsiatsiyasi (IFSO), Oʻzbekiston bariatrik jarrohlari, Oʻzbekiston onkologlar assotsiatsiyasi aʼzosi, MDH mamlakatlari gepatologik jarrohlar uyushmasi aʼzosi.
                </p>
              </x-modal>
            </row>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-2D w-90 anim">
          <img src="images/main_doctor_1.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>Husnuddinov Nizomuddin Zuhruddinnovich</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="Sertifikatlar" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="Diplomlar" button>
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
                <img src="images/certificate.jpg" style="max-width: 80dvw; margin: 10px 0;">
              </x-modal>
              <x-modal trigger="click" type="text" value="Ma'lumot" button>
                <h3 class="m-2">Odilxo'jaev Asqar Anvarovich</h3>
                <p class="p-2">
                  Adilxo'jaev Asqar Anvarovich, tibbiyot fanlari doktori, dotsent, oliy toifali jarroh.
                  Adilxo‘jaev A, 2005-yilda Birinchi Toshkent Davlat tibbiyot institutini tamomlagan.
                  2005-2008 yillarda Toshkent tibbiyot akademiyasi “Xirurgiya” ixtisosligi bo‘yicha magistraturani tamomlagan.
                  2009-2010 yildan beri TMA xirurgiya kafedrasi aspiranti boʻlgan va 2010 yilda “Oshqozon osti bezi boshining mahalliy rivojlangan saratoni uchun endovaskulyar aralashuvlarni takomillashtirish” ixtisosligi boʻyicha tibbiyot fanlari nomzodi ilmiy darajasini olish uchun nomzodlik dissertatsiyasini himoya qilgan. Jarrohlik".
                  2010-2016 yillarda TMA fakultet va gospital xirurgiyasi kafedrasida assistent, so‘ngra dotsent lavozimlarida ishlagan.
                  2016-yilda “Xirurgiya” ixtisosligi bo‘yicha “Periampulyar o‘smalarda jarrohlik taktikasini takomillashtirish” mavzusida doktorlik dissertatsiyasini himoya qilgan va 2018-yilda oliy toifali dotsent ilmiy unvonini olgan.
                  2018 yildan hozirgacha Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazida ishlab kelmoqda.
                  Adilxo'jaev A. Shoshilinch jarrohlik, videolaparoskopiya, pankreatikobiliar jarrohlik va onkologiya masalalariga bag'ishlangan 150 dan ortiq nashrlarning muallifi va hammuallifi. 10 ta oʻquv qoʻllanma, tavsiyalar, 3 ta monografiya, shuningdek, 3 ta ixtiroga patent muallifi.
                  Kasbiy faoliyati davomida u bir necha marta tematik takomillashtirish, 2007 yilda onkologiya (Rossiya, Moskva), 2012 yilda endoskopik jarrohlik (Rossiya, Moskva), 2017 yilda ftiziatriya (Ispaniya, Barselona), 2018 yilda pankreatikobiliar va endoskopik jarrohlik bo'yicha mahorat darslarini yakunladi. (Koreya Respublikasi, Seul), semizlik jarrohligi 2018-2019 (Toshkent), metabolik jarrohlik 2021 (Gruziya, Tbilisi).
                  2017 yilda endoskopik jarrohlik, 2018 yilda ftiziojarrohlik, ToshUIV tomonidan chiqarilgan qorin onkoxirurgiyasi mutaxassisligi bor.
                  Bariatrik jarrohlar xalqaro assotsiatsiyasi (IFSO), Oʻzbekiston bariatrik jarrohlari, Oʻzbekiston onkologlar assotsiatsiyasi aʼzosi, MDH mamlakatlari gepatologik jarrohlar uyushmasi aʼzosi.
                </p>
              </x-modal>
            </row>
          </column>
        </row>
        <button><a href="/shifokorlar" style="color:white">Barcha shifokorlar haqida ma'lumot</a></button>
      </column>

      <column class="w-100 mt-5">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">Klinika</h2>

        <row class="p-5 anim">
          <img src="/images/klinika.jpg" class="w-40" alt="Doctor">
          <column>
            <h1>Sabodarmon</h1>
            <p class="p-5">
              -konsultativ poliklinika <br>
              -kunduzgi shifoxona <br>
              -kardiologiya bo'limi <br>
              -terapiya bo'limi <br>
              -nevrologiya bo'limi <br>
              -gepatologiya bo'limi <br>
              -jarroxlik amaliyotini bajarish bo'limi <br>
              -laborotor tekshiruvlar( qon va siydik taxlili, gormonal tekshiruvlar, bioximik kon taxlili , koagulogramma, gepatit B,S va xokazo) <br>
              -instrumental tekshiruvlar (EKG, EXOKG, EEG, EXOEG, UZI, kolposkopiya) <br>
              - EFGDS <br>
              - ozonoterapiya <br>
              -kompleks davolar mavjud <br>
            </p>
            <row class="gap-2 flex-center">
              <p class="text-size-2">+998 (90) 123-45-67 </p>
              <button><a href="http://sabadarmon.uz/">Batafsil</a></button>
            </row>
          </column>
        </row>
      </column>


      <column class="w-100">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">Bariatriya</h2>
        <form name="bmiForm">
          <div class="bmi-calculator">
            <h1 style="margin-bottom: 1em;">Tana vazn indeksini o'lchang</h1>
            <div class="bmi-calculator-weight">
              <input class="weight-slider range" name="realweight" id="myWeight" type="range" min="25" max="180" value="60" />
              <p style="margin-top: 1.8em;">
                Vazn: 
                <input class="number" name="Teža" id="inputWeight" type="number" value="60" min="25" max="180" oninput="showValWeight(this.value)"/>
                <span id="weight"></span> kg
              </p>
            </div>
            <div class="bmi-calculator-height">
              <input class="height-slider range" name="realheight" id="myHeight" type="range" min="100" max="220" value="160">
              <p style="margin-top: 1.8em;">
                Bo'y:
                <input class="number" name="Višina" id="inputHeight" type="number" value="160" min="100" max="220" oninput="showValHeight(this.value)"/>
                <span id="height"></span> cm
              </p>
            </div>
            <input class="gumb" type="button" value="Hisoblash" id="button" style="margin-top: 0.5em">
            <p style="margin-top: 1em;font-size: 1.2em;">
              <strong>Sizning Tana Vazn Indeksingiz:</strong>
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
          <h3 class="w-90">Ma'lumot</h3>
          <p class="w-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio eum suscipit non repellat illo cumque! Molestias praesentium quasi aliquam autem, quia voluptatem odio, eveniet, perspiciatis doloremque tenetur doloribus nostrum.
          </p>
        </column>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">Laproskopiya</h2>

        <row class="p-2 gap-1 box-modal">
          <img src="images/laproskopiya1.jpg" class="w-30 anim">
          <img src="images/laproskopiya2.jpg" class="w-30 anim">
          <img src="images/laproskopiya3.jpg" class="w-30 anim">
        </row>
        <column class="gap-1 p-2">
          <h3 class="w-90">Ma'lumot</h3>
          <p class="w-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio eum suscipit non repellat illo cumque! Molestias praesentium quasi aliquam autem, quia voluptatem odio, eveniet, perspiciatis doloremque tenetur doloribus nostrum.
          </p>
        </column>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">Natijalar</h2>

        <row class="gap-2 p-3">
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1 anim">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
        </row>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">Aloqa</h2>
        <row class="surface-clean p-2 w-70 contact">
          <iframe class="anim" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.974372102905!2d69.21694!3d41.330892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUxLjIiTiA2OcKwMTMnMDEuMCJF!5e0!3m2!1sen!2s!4v1697022796395!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <column class="p-2 text-left w-30">
            <h4 class="info">Manzil</h4>
            <p>
              O'zbekiston, Toshkent <br>
              Nurafshon ko'chasi, 7A Uy
            </p>
            <h4 class="info">Telefon raqam</h4>
            <p>
              +998 90 123-45-67
            </p>
            <h4 class="info" style="padding-bottom: 5%;">Ijtimoiy tarmoqlar</h4>
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
      messageOutput.innerHTML = "18,5 dan 25 gacha bo'lgan Tana vazn indeksi normal va sog'lom hisoblanadi, undon ozi yengil vazn, ortig'i esa ortiqcha vazn hisoblanadi";
    } else {
      messageOutput.innerHTML = "Tana vazn indeksi 25 dan yuqori bo'lgan odamlarda semizlik bo'lishi mumkin, bu sog'likka zarar etkazishi mumkin bo'lgan kasallik yoki ortiqcha yog' to'planishi sifatida aniqlanadi.";
    }
  }

  document.querySelector("#button").addEventListener('click', e => {
    e.preventDefault()
    calculateBmi();
  })
}