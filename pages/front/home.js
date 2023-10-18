export const TITLE = window.Lang.use("home");

export default function content(){

  return `
    <container class="home">
      <column class="flex-center">
        <row class="gap-1 p-5">
          <img src="images/logo.gif" class="w-60" style="align-self: center;" />
          <column class="gap-1 w-20">
            <a href="/bariatriya" class="surface-clean p-5 w-100">
              <column>
                <image src="images/fattothin.png" class="w-20">
                <h4>Bariatriya</h4>
              </column>
            </a>
            <a href="/laparoskopiya" class="surface-clean p-5 w-100">
              <column>
                <image src="images/surgery.png" class="w-20">
                <h4>Laproskopik hirurgiya</h4>
              </column>
            </a>
          </column>
        </row>

        <row class="gap-2 p-5">
          <column class="surface-clean flex-x-between p-2 pb-0">
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

          <column class="surface-clean flex-x-between p-2 pb-0">
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

          <column class="surface-clean flex-x-between p-2 pb-0">
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

          <column class="surface-clean flex-x-between p-2 pb-0">
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

        <row class="flex-x-between p-5 surface-clean  w-90">
          <img src="images/bariatric_surgery_process.jpg" class="w-40 mr-5" />
          <column class="flex-y-end flex-x-between">
            <h2>Laproskopik xirurgiya</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <button><a href="/laparoskopiya" style="color:white;">Batafsil</a></button>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-clean w-90">
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

        <row class="flex-x-between p-5 surface-clean w-90">
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

        <row class="flex-x-between p-5 surface-clean w-90 mb-5">
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

        <row class="flex-x-between p-5 surface-2D w-90">
          <img src="images/main_doctor_2.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>Odilho'jaev Asqar Anvarovich</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="Sertifikatlar" button>Sertifikat rasmlari</x-modal>
              <x-modal trigger="click" type="text" value="Diplomlar" button>Diplom rasmlari</x-modal>
              <x-modal trigger="click" type="text" value="Yutuqlar" button>Yutuq rasmlar</x-modal>
            </row>
          </column>
        </row>

        <row class="flex-x-between p-5 surface-2D w-90">
          <img src="images/main_doctor_1.jpg" class="w-20" />
          <column class="flex-y-start flex-x-between p-5">
            <h2>Husnuddinov Nizomuddin Zuhruddinnovich</h2>
            <p class="mt-3 mb-3">
              Bariatrik hirurgiya haqida qisqa ma'lumot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pulvinar risus. Praesent a cursus lorem. Curabitur nisi purus, luctus vitae pulvinar ac, finibus ac tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida eleifend erat, ut placerat nibh aliquet pellentesque. Nam fringilla nulla ut ligula.
            </p>
            <row class="flex-x-start gap-1">
              <x-modal trigger="click" type="text" value="Sertifikatlar" button>Sertifikat rasmlari</x-modal>
              <x-modal trigger="click" type="text" value="Diplomlar" button>Diplom rasmlari</x-modal>
              <x-modal trigger="click" type="text" value="Yutuqlar" button>Yutuq rasmlar</x-modal>
            </row>
          </column>
        </row>
        <button><a href="/shifokorlar" style="color:white">Barcha shifokorlar haqida ma'lumot</a></button>
      </column>

      <column class="w-100 mt-5">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">Klinika</h2>

        <row class="p-5">
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
        <h4 style="margin: 20px, 0;">O'z tana vazn indeksingizni o'lchang:</h4>
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

        <row class="p-2 gap-1 box-modal">
          <img src="images/bar3.jpg" class="w-30">
          <img src="images/bar1.jpg" class="w-30">
          <img src="images/bar5.jpg" class="w-30">
        </row>
        <column class="gap-1 p-2">
          <h3 class="w-90">Ma'lumot</h3>
          <p class="w-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio eum suscipit non repellat illo cumque! Molestias praesentium quasi aliquam autem, quia voluptatem odio, eveniet, perspiciatis doloremque tenetur doloribus nostrum.
          </p>
        </column>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">Laproskopiya</h2>

        <row class="p-2 gap-1 box-modal">
          <img src="images/laproskopiya1.jpg" class="w-30">
          <img src="images/laproskopiya2.jpg" class="w-30">
          <img src="images/laproskopiya3.jpg" class="w-30">
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
                <img src="images/before1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
          <column class="surface-clean p-2">
            <row>
              <column>
                <img src="images/before1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Avval</h3>
              </column>
              <column>
                <img src="images/after1.jpg" class="w-100 p-1">
                <h3 class="p-1 info">Keyin</h3>
              </column>
            </row>
          </column>
        </row>

        <h2 class="surface-2D w-100 text-center bg-info mt-3 mb-3" style="color:white;">Aloqa</h2>
        <row class="surface-clean p-2 w-70 contact">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.974372102905!2d69.21694!3d41.330892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUxLjIiTiA2OcKwMTMnMDEuMCJF!5e0!3m2!1sen!2s!4v1697022796395!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

      </column>

    </container>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  `;
}
export function after(){
  function B(){
    const e=this.h.valueAsNumber,
    t=this.w.valueAsNumber,
    i=parseFloat(t/(e/100)**2).toFixed(2),
    h=[[0,18.49],[18.5,24.99],[25,29.99],[30,34.99],[35,39.99],[40,100]].findIndex(e=>e[0]<=i&&i<e[1]);let o=(.393700787*e).toFixed(0);
    this.ho.value=`${e} cm`,this.wo.value=`${t} kg`,
    this.g[h].checked=!0,this.r.value=i
  }
  const bmi = document.querySelector('.c-bmi')
  bmi.addEventListener('input', B);
  bmi.dispatchEvent(new Event('input'));
}
