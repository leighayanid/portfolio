const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

module.exports = {
	siteName: "Leigh Dinaya",
	siteUrl: "https://leighdinaya.com",
	siteDescription: "Personal website of Leigh Dinaya",

	templates: {
		Post: "/post/:title",
		Resource: "/resources/:title",
		Project: "/projects/:title",
		Tag: "/tag/:id",
	},

	// chainWebpack: (config) => {
	// 	const svgRule = config.module.rule("svg");
	// 	svgRule.uses.clear();
	// 	svgRule.use("vue-svg-loader").loader("vue-svg-loader");
	// 	config
	// 		.plugin("BundleAnalyzerPlugin")
	// 		.use(BundleAnalyzerPlugin, [{ analyzerMode: "static" }]);
	// },

	plugins: [
		{
			// Create posts from markdown files
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Post",
				path: "content/posts/*.md",
				remark: {
					plugins: [
						"@gridsome/remark-prismjs",
						"gridsome-plugin-remark-codesandbox",
					],
				},
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					tags: {
						typeName: "Tag",
						create: true,
					},
				},
			},
		},
		{
			// Create posts from markdown files
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Blog",
				path: "content/blogs/*.md",
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					tags: {
						typeName: "Tag",
						create: true,
					},
				},
			},
		},
		{
			// Create posts from markdown files
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Project",
				path: "content/projects/*.md",
			},
		},
		{
			// Create posts from markdown files
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Resource",
				path: "content/resources/*.md",
			},
		},
		{
			use: "gridsome-plugin-flexsearch",
			options: {
				collections: [
					{
						typeName: "Resource",
						indexName: "Resource",
						fields: ["title", "link"],
					},
					{
						typeName: "Post",
						indexName: "Post",
						fields: ["title", "path"],
					},
				],
				searchFields: ["title", "link", "path"],
			},
		},
		{
			use: "@gridsome/plugin-google-analytics",
			options: {
				id: "UA-156810526-1",
			},
		},
		{
			use: "gridsome-plugin-service-worker",
			options: {
				networkFirst: {
					routes: [
						"/",
						/\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
					],
				},
			},
		},
		{
			use: "gridsome-plugin-pwa",
			options: {
				startUrl: "/",
				display: "standalone",
				statusBarStyle: "default",
				manifestPath: "manifest.json",
				title: "Leigh Dinaya",
				disableServiceWorker: false,
				serviceWorkerPath: "service-worker.js",
				cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
				shortName: "Leigh",
				description: "Leigh's Personal Website",
				themeColor: "#101024",
				backgroundColor: "#e59200",
				icon: "./src/favicon.png",
				lang: "en",
				msTileImage: "",
				msTileColor: "#666600",
				appleMaskIcon: "./src/favicon.png",
				appleMaskIconColor: "#e59200",
				maskableIcon: true,
			},
		},
		{
			use: "@gridsome/plugin-sitemap",
			options: {
				config: {
					"/": {
						changefreq: "weekly",
						priority: 0.5,
					},
					"/post/**": {
						changefreq: "weekly",
						priority: 0.5,
					},
					"/portfolio": {
						changefreq: "monthly",
						priority: 0.7,
					},
					"/resources": {
						changefreq: "weekly",
						priority: 0.7,
					},
					"/about": {
						changefreq: "monthly",
						priority: 0.7,
					},
					"/contact": {
						changefreq: "monthly",
						priority: 0.7,
					},
				},
			},
		},
		{
			use: "gridsome-plugin-purgecss",
			// default options, the following will be included if you don't provide anything
			options: {
				content: [
					"./src/**/*.vue",
					"./src/**/*.js",
					"./src/**/*.jsx",
					"./src/**/*.pug",
					"./src/**/*.md",
				],
				defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
			},
		},
	],

	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
			anchorClassName: "icon icon-link",
			plugins: ["@gridsome/remark-prismjs"],
		},
	},
};
