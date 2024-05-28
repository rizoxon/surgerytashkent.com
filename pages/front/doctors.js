export default function content(){
  return `
      <column class="w-100 gap-2">
        <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("doctors")}</h2>

        <column class="flex-x-between p-5 surface-2D w-90 ">
          <img src="images/main_doctor_2.jpg" class="w-100" style="object-fit: cover;" />
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
        </column>

        <column class="flex-x-between p-5 surface-2D w-90 " id="doctor_2">
          <img src="images/main_doctor_1.jpg" class="w-100" style="object-fit: cover;" />
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
        </column>
      </column>
  `;
}
