const contactCircle = document.querySelector(".contacts-circle");
contactCircle.onclick = function () {
	const instagam = document
		.querySelector(".instagram-animation-icon")
		.classList.toggle("instagram-animation-icon-actived");
	const viber = document
		.querySelector(".viber-animation-icon")
		.classList.toggle("viber-animation-icon-actived");
	const telegram = document
		.querySelector(".telegram-animation-icon")
		.classList.toggle("telegram-animation-icon-actived");
	const watsapp = document
		.querySelector(".watsapp-animation-icon")
		.classList.toggle("watsapp-animation-icon-actived");
};

const openBurgerMenu = document.querySelector(".burger-menu");

openBurgerMenu.onclick = function () {
	const burgerWrapper = document.querySelector(".burger-wrapper");
	burgerWrapper.classList.toggle("open-burger-menu");
};

function onEntry(entry) {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add("animation-edit");
		}
	});
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
	".price-item, .wrapper-skill, .advantages-item"
);
for (let elm of elements) {
	observer.observe(elm);
}

try {
	const scrollUpButton = document.querySelector(".wrapper-button-scroll-up");

	scrollUpButton.onclick = function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;

		scrollY > 400
			? scrollUpButton.classList.add("wrapper-button-scroll-up-open")
			: scrollUpButton.classList.remove("wrapper-button-scroll-up-open");
	});
} catch {}

const scrollUpButtonWork = document.querySelector(
	".wrapper-button-scroll-up-work"
);

try {
	scrollUpButtonWork.onclick = function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", () => {
		const scrollYWork =
			window.scrollY || document.documentElement.scrollTop;

		scrollYWork > 400
			? scrollUpButtonWork.classList.add(
					"wrapper-button-scroll-up-open-work"
			  )
			: scrollUpButtonWork.classList.remove(
					"wrapper-button-scroll-up-open-work"
			  );
	});
} catch {}
