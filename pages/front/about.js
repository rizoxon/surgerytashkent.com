export const TITLE = window.Lang.use("about");

export default function content(){

  return `
  <container class="about">
    <row class="flex-center">
      <h1>About Us</h1>
    </row>

    <row>
      <row class="flex-center w-40">
          <img src="./images/about.jpg" alt="Doctor">
      </row>
      <column class="flex-x-center flex-y-start w-60 gap-0-8">
        <p class="radius-default sm-text">Klinika</p>
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
        <p class="radius-default sm-text">Shifokor</p>
        <h1>Хуснуддинов Низомуддин Зухруддиннович</h1>
        <p>
          &nbsp Хуснуддинов Низомуддин Зухруддиннович, базовый докторант в РСПМЦ ОиР, врач-хирург 3 категории. <br>
          &nbsp Хуснуддинов Н, в 2017 году окончил  Ташкентская Медицинская Академия.  <br>
          &nbsp С 2017 по 2020 годы проходил магистратуру по специальности «Хирургия» Ташкентской медицинской академии. <br>
          &nbsp C 2021 года и по настоящее время работает аспирантом в Республиканском специализированном научно-практическом медицинском центре онкологии и радиологии.  <br>
          &nbsp Хуснуддинов Н, является автором и соавтором более 10 публикаций посвященным вопросам ургентной хирургии, видеолапароскопии, панкреатобиларной хирургии и онкологии. <br> 
          &nbsp За время своей профессиональной деятельности неоднократно проходил тематические усовершенствования, мастер-классы по онкологии и хирургии в 2017 г (Ташент, Узбекистан), Эндоскопической хирургии в 2018 г (Ташент, Узбекистан), хирургия ожирения 2018-2019 гг (Ташкент), метаболическая хирургия 2021 г. (Грузия, Тбилиси).  <br>
          &nbsp Имеет специализацию по эндоскопической хирургии 2021г выданные ТМА. <br>
          &nbsp Является членом бариатрических хирургов международной ассоциации (IFSO), бариатрических хирургов Узбекистана. <br> <hr>
        </p>
      </column>
      <row class="flex-center w-40">
        <img src="./images/about.jpg" alt="Doctor">
      </row>
    </row>
    
    <row class="gap-1 p-5">
      <img src="./images/doctor_info_1.png">
      <img src="./images/doctor_info_2.png">
      <img src="./images/doctor_info_3.png">
    </row>

    <row class="gap-2 m-5">
      <p class="surface-clean w-20 d-flex flex-center">Onkohirurgiya</p>
      <p class="surface-clean w-20 d-flex flex-center">Umumiy hirurgiya</p>
      <p class="surface-clean w-20 d-flex flex-center">Endoskopik hirurgiya</p>
      <p class="surface-clean w-20 d-flex flex-center">Bartiartik hirurgiya</p>
    </row>


    <!--///////////////////////////// ERROR  //////////////////////// -->

    <column class="about-doctors">
      <h2>Barcha shifokorlar</h2>
      <section>
        <img src="./images/doctor_1.jpg">
        <img src="./images/doctor_2.jpg">
        <img src="./images/doctor_1.jpg">
        <img src="./images/doctor_2.jpg">
        <img src="./images/doctor_1.jpg">
        <img src="./images/doctor_2.jpg">
        <img src="./images/doctor_2.jpg">
        <img src="./images/doctor_2.jpg">
      </section>
    </column>

  </container>
  
  `;
}