export const TITLE = window.Lang.use("services");

export default function content(){

  return `
    <container class="services">
      <row class="flex-center">
        <h1>Bizning xizmatlar</h1>
      </row>

      <column>
        <h2 class="mt-5">Bizning bo'limlar</h2>
        <row class="gap-1">

          <column class="surface-clean">
            <div class="mb-3 radius-default"><image src="./images/surgery_process.jpg" /></div>
            <row class="flex-y-center flex-x-between">
              <h3>Xirurgiya</h3>
              <img src="./images/scalpel.png" />
            </row>
          </column>

          <column class="surface-clean">
            <div class="mb-3 radius-default"><image src="./images/poliklinika.jpeg" /></div>
            <row class="flex-y-center flex-x-between">
              <h3>Poliklinika</h3>
              <img src="./images/pharmacy.png" />
            </row>
          </column>

          <column class="surface-clean">
            <div class="mb-3 radius-default"><image src="./images/yotoq.jpg" /></div>
            <row class="flex-y-center flex-x-between">
              <h3>Statsionar</h3>
              <img src="./images/inpatient.png" />
            </row>
          </column>

          <column class="surface-clean">
            <div class="mb-3 radius-default"><image src="./images/kids.jpg" /></div>
            <row class="flex-y-center flex-x-between">
              <h3>Bolalar reabilitatsiyasi</h3>
              <img src="./images/children.png" />
            </row>
          </column>

          <column class="surface-clean">
            <div class="mb-3 radius-default"><image src="./images/diagnostics.jpeg" /></div>
            <row class="flex-y-center flex-x-between">
              <h3>Diagnostika</h3>
              <img src="./images/diagnostic.png" />
            </row>
          </column>
        </row>
      </column>

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

    </container>
  `;
}