// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";
import FiraSansMedium from "~/assets/fonts/FiraSans-Medium.ttf";
import FiraSansRegular from "~/assets/fonts/FiraSans-Regular.ttf";
import MerriweatherRegular from "~/assets/fonts/Merriweather-Regular.ttf";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	head.link.push([
		{ rel: "preload", href: FiraSansMedium, as: "font" },
		{ rel: "preload", href: FiraSansRegular, as: "font" },
		{ rel: "preload", href: MerriweatherRegular, as: "font" },
	]);
}
