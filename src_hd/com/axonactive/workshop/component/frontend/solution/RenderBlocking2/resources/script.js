$(window).load(function() {
	function execute() {
		var n = 0;
		var x = 0;
		while (n < 7000000000) {
			n++;
			x += n;
		}
		return x;
	}
	document.getElementById('result').innerHTML = execute();
})