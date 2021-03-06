// Vue.component("comp-board", {
// 	template: "<div>Message Board</div>",
// });

// Vue.component("comp-form", {
// 	template: '<div>Form<textarea v-model="message"></textarea></div>',
// 	data: function () {
// 		return {
// 			message: "",
// 		};
// 	},
// });

new Vue({
	el: "#app",
	data: {
		order: false,
		list: [
			{ id: 1, name: "りんご", price: 100 },
			{ id: 2, name: "ばなな", price: 200 },
			{ id: 3, name: "いちご", price: 300 },
		],
	},
	computed: {
		sortedList: function () {
			return _.orderBy(this.list, "price", this.order ? "desc" : "asc");
		},
	},
});
