export default function () {
	var pro = new Promise(function (resolve) {
		console.log('ccc1');
		setTimeout(function () {
			resolve('ccc2')
		}, 1000)
	});
	
	async function asFn() {
		var a = await pro;
		console.log(a);
	}
	
	asFn();
	
	console.log('c.js');
}