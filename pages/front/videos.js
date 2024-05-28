export async function before(){
	window.pageData.operatsiyaRows = "";
	window.pageData.shifokorRows = "";
	window.pageData.intervyuRows = "";
	
	const data = [
		"https://www.youtube.com/embed/eL1okPtKTlU",
		"https://www.youtube.com/embed/QkHEgQ9qHec",
		"https://www.youtube.com/embed/WVkrgEYl9RQ",
		"https://www.youtube.com/embed/1JgT1M2-Reg",
		"https://www.youtube.com/embed/u3eQMZpFI3M",
		"https://www.youtube.com/embed/qePKqt3-950",
		"https://www.youtube.com/embed/jArVuS0oxJ0",
		"https://www.youtube.com/embed/XP_NTzUHcwE",
		"https://www.youtube.com/embed/oxGZVuZMAes",
		"https://www.youtube.com/embed/l8Kq_Ufmp1o",
		"https://www.youtube.com/embed/5TpXoWIilgQ",
		"https://www.youtube.com/embed/xOwUJVXN4wg",
		"https://www.youtube.com/embed/6bN6fedPcKI",
		"https://www.youtube.com/embed/v1lv_XDayrs",
		"https://www.youtube.com/embed/cS8UtKDfDD0",
		"https://www.youtube.com/embed/vNn2fPa2rAE",
		"https://www.youtube.com/embed/VUEOqkgUS4U",
		"https://www.youtube.com/embed/VQcknf2L2ng",
		"https://www.youtube.com/embed/4E17j1zl0P0",
		"https://www.youtube.com/embed/PRkzbDjTsVs"
	];

	for(let i = 0; i < data.length; i++){
		if (i <= 4) {
			window.pageData.operatsiyaRows += `
				<iframe class="anim" src="${data[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		} else if (i > 4 && i <= 11) {
			window.pageData.shifokorRows += `
				<iframe class="anim" src="${data[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		} else{
			window.pageData.intervyuRows += `
				<iframe class="anim" src="${data[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		}
	}
}

export default function content(){
  return `
    <container class="gallery">
      <row>
        <button><a href="#operations">${window.Lang.use("operations")}</a></button>
        <button><a href="#advice">${window.Lang.use("interviewDoc")}</a></button>
        <button><a href="#interview">${window.Lang.use("interviewClient")}</a></button>
      </row>

      <h2  id="operations" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("operations")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.operatsiyaRows}
      </row>

      <h2  id="advice" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("interviewDoc")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.shifokorRows}
      </row>

      <h2  id="interview" class="surface-2D w-100 text-center bg-info" style="color:white;">${window.Lang.use("interviewClient")}</h2>
      <row class="p-1 gap-1">
        ${window.pageData.intervyuRows}
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
