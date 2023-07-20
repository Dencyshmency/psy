const scrollUpButtonWork = document.querySelector(
	".wrapper-button-scroll-up-work"
);

scrollUpButtonWork.onclick = function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

const scrollYWork = window.scrollY || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
	const scrollYWork = window.scrollY || document.documentElement.scrollTop;

	scrollYWork > 400
		? scrollUpButtonWork.classList.add("wrapper-button-scroll-up-open")
		: scrollUpButtonWork.classList.remove("wrapper-button-scroll-up-open");
});
