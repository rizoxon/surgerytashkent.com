export default function content(){
  return `
    <container class="results">
      <row class="w-80">
        <button><a href="#operations">Operatsiyalar</a></button>
        <button><a href="#results">Avval va Keyingi rasmlar</a></button>
        <button><a href="#others">Boshqa rasmlar</a></button>
      </row>

      <h2 class="surface-2D w-100 text-center bg-info" style="color:white;">Operatsiyalar</h2>
      <row class="gap-1 p-3" id="operations">
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
      </row>
      <row id="results"></row>
      <row id="others"></row>
    </container>
  `;
}