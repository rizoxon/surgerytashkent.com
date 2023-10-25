export default function content(){
  return `
    <container class="results">
      <row>
        <button><a href="#operations">Operatsiyalar</a></button>
        <button><a href="#results">Avval va Keyingi rasmlar</a></button>
        <button><a href="#others">Boshqa rasmlar</a></button>
      </row>

      <h2  id="operations" class="surface-2D w-100 text-center bg-info" style="color:white;">Operatsiyalar</h2>
      <row>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
      </row anim>

      <h2 id="results" class="surface-2D w-100 text-center bg-info" style="color:white;">Avval va Keyingi rasmlar</h2>
      <row>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
      </row>

      <h2 id="others" class="surface-2D w-100 text-center bg-info" style="color:white;">Boshqa rasmlar</h2>
      <row>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
        </column>
        <column class="p-1 surface-2D gap-1">
          <img src="images/general_surgery.jpg" class="w-100 anim">
          <p>Lorem ipsum dolor sit amet.</p>
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
      }
    });
  });

  const anim_elements = document.querySelectorAll('.anim');
  anim_elements.forEach((el) => observer.observe(el));
}