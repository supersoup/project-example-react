export default function () {
	var pro = new Promise(function (resolve) {
		setTimeout(function () {
			resolve('aaa')
		}, 1000)
	});
	
	async function asFn() {
		var a = await pro;
		console.log(a);
	}
	
	console.log('c.js');
}