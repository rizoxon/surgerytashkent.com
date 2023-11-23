export default function header(){
	return `
		<row class="header-row-main">
			<row>
				<a href="https://t.me/Bariatriya">
					<img src="images/telegram.png">
				</a>
				<a href="https://instagram.com/surgery.tashkent?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
					<img src="images/instagram.png">
				</a>
				<a href="https://www.facebook.com/profile.php?id=100089813675353&mibextid=2JQ9oc">
					<img src="images/facebook.png">
				</a>
				<a href="https://youtube.com/@surgerytashkent?si=WBAqG4vhX_7aspCN">
					<img src="images/youtube.png">
				</a>
			</row>
			<h3>
				${window.Lang.use("surgeryTashkent")}
			</h3>
			<x-language></x-language>
		</row>
	`;
}