export default function content(){
  return `
    <container class="doctors">
      <header>
        <h1>Bizning mutaxassislarimiz</h1>
      </header>
      <row class="p-5 gap-2">

        <column class="p-5 surface-clean gap-1 anim">
          <img src="images/main_doctor_2.jpg" class="w-100">
          <h3>Odilho'jaev Asqar Anvarovich</h3>
          <row class="flex-x-between">
            <x-modal trigger="click" type="text" value="Ma'lumot">Ma'lumot</x-modal>
            <x-modal trigger="click" type="text" value="Sertifikatlar">Sertifikat rasmlari</x-modal>
            <x-modal trigger="click" type="text" value="Diplomlar">Diplom rasmlari</x-modal>
          </row>
        </column>

        <column class="p-5 surface-clean gap-1 anim">
          <img src="images/main_doctor_1.jpg" class="w-100">
          <h3>Husnuddinov Nizomuddin Zuhruddinnovich</h3>
          <row class="flex-x-between">
            <x-modal trigger="click" type="text" value="Ma'lumot">Ma'lumot</x-modal>
            <x-modal trigger="click" type="text" value="Sertifikatlar">Sertifikat rasmlari</x-modal>
            <x-modal trigger="click" type="text" value="Diplomlar">Diplom rasmlari</x-modal>
          </row>
        </column>

        <column class="p-5 surface-clean gap-1 anim">
          <img src="images/main_doctor_2.jpg" class="w-100">
          <h3>Odilho'jaev Asqar Anvarovich</h3>
          <row class="flex-x-between">
            <x-modal trigger="click" type="text" value="Ma'lumot">Ma'lumot</x-modal>
            <x-modal trigger="click" type="text" value="Sertifikatlar">Sertifikat rasmlari</x-modal>
            <x-modal trigger="click" type="text" value="Diplomlar">Diplom rasmlari</x-modal>
          </row>
        </column>

        <column class="p-5 surface-clean gap-1 anim">
          <img src="images/main_doctor_1.jpg" class="w-100">
          <h3>Husnuddinov Nizomuddin Zuhruddinnovich</h3>
          <row class="flex-x-between">
            <x-modal trigger="click" type="text" value="Ma'lumot">Ma'lumot</x-modal>
            <x-modal trigger="click" type="text" value="Sertifikatlar">Sertifikat rasmlari</x-modal>
            <x-modal trigger="click" type="text" value="Diplomlar">Diplom rasmlari</x-modal>
          </row>
        </column>

      </row>
    </container>
  `;
}

export function after(){
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      console.log(item)
      if (item.isIntersecting) {
        item.target.classList.add('move')
      } else {
        item.target.classList.remove('move')
      }
    });
  });

  const anim_elements = document.querySelectorAll('.anim');
  anim_elements.forEach((el) => observer.observe(el));
}