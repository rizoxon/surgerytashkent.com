export const TITLE = window.Lang.use("about");
// export async function before(){
//   const labeledPhotos = await window.bridge("admin", {for:"getAllPhotosByLabel", label:"doctor"});
//   console.log('-----------------------------------');
//   console.log(labeledPhotos);
// }

export default function content(){

  return `
  <container class="about">
    <row class="flex-center">
      <h1>Biz haqimizda</h1>
    </row>

    <row>
      <row class="flex-center w-40">
          <img src="./images/klinika.jpg" class="bs-default" alt="Doctor">
      </row>
      <column class="flex-x-center flex-y-start w-60 gap-0-8">
        <p class="radius-default sm-text bg-shadow">Klinika</p>
        <h1>Sabodarmon | Клиникамизда</h1>
        <p>
          -консультатив поликлиника <br>
          -кундузги шифохона <br>
          -кардиология булими <br>
          -терапия булими <br>
          -неврология булими <br>
          -гепатология булими <br>
          -жаррохлик амалиётини бажариш булими <br>
          -лаборотор текширувлар( кон ва сийдик тахлили, гормонал текширувлар, биохимик кон тахлили , коагулограмма, гепатит в,с ва хоказо) <br>
          -инструментал текширувлар (ЭКГ, ЭХОКГ, ЭЭГ, ЭХОЭГ, УЗИ, кольпоскопия) <br>
          - ЭФГДС <br>
          - озонотерапия <br>
          -комплекс даволар мавжуд <br>
        </p>
        <p class="text-size-2">+998 (90) 123-45-67 </p>
      </column>
    </row>

    <row>
      <column class="flex-x-center flex-y-start w-60 gap-0-8">
        <p class="radius-default sm-text bg-shadow">Shifokor</p>
        <h1>Xusnuddinov Nizomiddin Zuxruddinovich</h1>
        <p>
          Xusnuddinov Nizomuddin Zuxruddinovich, RSPMTS OiR tayanch doktoranti, 3-toifali jarroh.
          Xusnuddinov N, 2017-yilda Toshkent tibbiyot akademiyasini tamomlagan.
          2017-2020 yillarda Toshkent tibbiyot akademiyasining “Xirurgiya” ixtisosligi bo‘yicha magistratura bosqichini tamomlagan.
          2021 yildan hozirgacha Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazi aspiranti lavozimida ishlab kelmoqda.
          Xusnuddinov N, shoshilinch jarrohlik, videolaparoskopiya, pankreatikobiliar jarrohlik va onkologiya masalalariga bag'ishlangan 10 dan ortiq nashrlarning muallifi va hammuallifidir.
          Kasbiy faoliyati davomida u bir necha marta tematik takomillashtirish, 2017 yilda onkologiya va jarrohlik bo'yicha mahorat darslarini (Toshent, O'zbekiston), 2018 yilda endoskopik jarrohlik (Toshent, O'zbekiston), semizlik jarrohligi 2018-2019 (Toshkent), 2021 (Gruziya) metabolik jarrohlik bo'yicha bitirgan. , Tbilisi).
          TMA tomonidan chiqarilgan 2021 yilda endoskopik jarrohlik bo'yicha ixtisoslashgan.
          Bariatrik jarrohlar xalqaro assotsiatsiyasi (IFSO) aʼzosi, Oʻzbekiston bariatrik jarrohlari.
          <br>
          <button class="mt-5">
            <a href="./images/doctor_info.docx" download style="color: white;">
              To'liq ma'lumot
            </a>
          </button>
        </p>
      </column>
      <row class="flex-center w-40">
        <img src="./images/main_doctor.jpg" class="bs-default" alt="Doctor">
      </row>
    </row>
    

    <row class="gap-1 m-5">
      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
          <img style="width: 20%;" src="./images/surgery-room.png" />
          <h3>Yмумий хирургия</h3>
        </row>
        <p class="text-size-1" class="text-size-0-7">Tananing har qanday mintaqasidagi shikastlanishlar va kasalliklarni tashxislash va davolashga qaratilgan keng ko'lamli operativ muolajalarni o'z ichiga oladi.</p>
      </column>

      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
         <img style="width: 20%;" src="./images/lor.png" />
          <h3>LOR</h3>
         </row>
        <p class="text-size-1" class="text-size-0-7">LOR - bu bosh va bo'yin kasalliklarini jarrohlik va tibbiy davolash bilan shug'ullanadigan tibbiyotning jarrohlik kichik ixtisosligi.</p>
      </column>

      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
         <img style="width: 20%;" src="./images/scalpel.png" />
          <h3>Laproskopik operatsiyalar</h3>
         </row>
        <p class="text-size-1" class="text-size-0-7">Laparoskopik jarrohlik - bu kichik (bir santimetrdan kam) kesmalar orqali qorin bo'shlig'iga qisqa, tor naychalar (trokarlar) kiritiladigan jarrohlik usuli.</p>
      </column>

      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
         <img style="width: 20%;" src="./images/bariatric.png" />
          <h3>Bariatrik operatsiyalar</h3>
         </row>
        <p class="text-size-1" class="text-size-0-7">Bariatrik jarrohlik parhez va jismoniy mashqlar yordam bermaganda yoki vazningiz tufayli jiddiy sog'liq muammolariga duch kelganda bemorlarga yordam beradi.</p>
      </column>

      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
         <img style="width: 20%;" src="./images/gynecology.png" />
          <h3>Ginekologiya</h3>
         </row>
        <p class="text-size-1" class="text-size-0-7">Hayotni biz bilan yangitdan boshlang. Eng so'ngi texnika va malakali shifokorlar faqat bizda.</p>
      </column>

      <column class="surface-clean p-5">
        <row class="gap-5 flex-center mb-5">
         <img style="width: 20%;" src="./images/inpatient.png" />
          <h3>Statsionar davo</h3>
         </row>
        <p class="text-size-1" class="text-size-0-7">Ushbu davolash markazi bemorlarga ambulator yordam ko'rsatishdan ko'ra ko'proq intensiv davolanish uchun xavfsiz va xavfsiz joyni ta'minlaydi.</p>
      </column>

    </row>

    <column class="p-5 w-100">
      <row class="w-80 flex-x-between">
        <column>
          <h2>25</h2>
          <p>Malakali shifokor</p>
        </column>
        <column>
          <h2>2500+</h2>
          <p>Mamnum be'mor</p>
        </column>
        <column>
          <h2>12+</h2>
          <p>Yillik tajriba</p>
        </column>
        <column>
          <h2>250+</h2>
          <p>Yutuqlar</p>
        </column>
      </row>

      <h2 style="margin: 3rem 0">Bizning sinovdan o'tgan ish jarayonimiz</h2>

      <row class="gap-5">
        <column>
          <row>
            <img src="./images/conversation.png" style="width: 100%" />
            <h1>1</h1>
          </row>
          Be'pul konsultatsiya
        </column>

        <column>
          <row>
            <img src="./images/medical-team.png" style="width: 100%" />
            <h1>2</h1>
          </row>
          Sana va vaqtni belgilang
        </column>

        <column>
          <row>
            <img src="./images/hospital.png" style="width: 100%" />
            <h1>3</h1>
          </row>
          Shifoxonaga yetib keling
        </column>

        <column>
          <row>
            <img src="./images/vaccine.png" style="width: 100%" />
            <h1>4</h1>
          </row>
          Sog'lom hayotdan zavqlaning
        </column>
      </row>
    </column>

    <row class="gap-2"> 
      <column class="surface-clean">
        <img src="./images/doctor_1.jpg" />
        <h3>Xusnuddinov Nizomiddin Zuxruddinovich</h3>
      </column>
      <column class="surface-clean">
        <img src="./images/doctor_1.jpg" />
        <h3>Doktorning ismi</h3>
      </column>
      <column class="surface-clean">
        <img src="./images/doctor_1.jpg" />
        <h3>Doktorning ismi</h3>
      </column>
      <column class="surface-clean">
        <img src="./images/doctor_1.jpg" />
        <h3>Doktorning ismi</h3>
      </column>
      <column class="surface-clean">
        <img src="./images/doctor_1.jpg" />
        <h3>Doktorning ismi</h3>
      </column>
    </row>


  </container>
  
  `;
}