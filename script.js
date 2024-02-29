// Function to change the favicon based on user dark mode

// let icon = document.querySelector('link[rel="icon"]');

// console.log(icon);

// icon.href = "img/favicon-light.ico";

// function changeFavicon(darkMode) {
// 	const favicon = document.querySelector('link[rel="icon"]');
// 	if (darkMode) {
// 		favicon.href = "img/favicon-light.ico"; // Path to your dark mode favicon
// 	} else {
// 		favicon.href = "img/favicon-dark.ico"; // Path to your light mode favicon
// 	}
// }

// Check if the user's operating system is set to dark mode
// const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// const prefersDarkScheme = window.matchMedia(
// 	"(prefers-colour-scheme: dark)"
// ).matches;

// if (prefersDarkScheme) {
// 	document.body.classList.add("dark-theme");
// } else {
// 	document.body.classList.add("light-theme");
// }

// // Initial call to changeFavicon
// changeFavicon(darkModeMediaQuery.matches);

// // Listen for changes to the user's dark mode preference
// darkModeMediaQuery.addEventListener((e) => {
// 	changeFavicon(e.matches);
// });

// document.querySelector("link[rel='shortcut icon']").href = "favicon.ico";

// document.querySelector("link[rel*='icon']").href = "favicon.ico";
