export const hello = {
	mounted() {
		console.log('你好啊！')
	},
}
export const showNameDemo = {
	data() {
		return {
			name: 100,
		}
	},
	methods: {
		showName() {
			alert(this.name)
		}
	},
}
