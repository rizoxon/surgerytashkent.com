export const TITLE = window.Lang.use("contact");

export default function content(){

  return `
    <container class="contact">

      <row class="flex-center">
        <h1>Biz bilan bog'laning</h1>
      </row>
      <row class="gap-2 p-5">
        <column class="surface-clean w-20">
          Our location
        </column>
        <column class="surface-clean w-20">
          Our contact
        </column>
        <column class="surface-clean w-20">
          Our social media
        </column>
      </row>
      <row>
        Form
      </row>
      <row>
        Map
      </row>
    </container>
  
  `;
}