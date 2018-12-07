var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

function Gagana() {
	var xn, a, r, n, p;
	var va = ["svalue", "avalue", "rvalue", "nvalue", "decimalvalue"], v = [];
	for (var i = 0; i < va.length; i++) v.push(parseFloat(document.getElementById(va[i]).value));
	var xn = v[0], a = v[1], r = v[2], n = v[3], p = v[4];
	var array = [];
	if (v) {	
		while (n-- && (xn -= (Math.pow(xn, r)-a)/(r*Math.pow(xn, r-1))) && array.push(xn+"<br>"))
	
		calculator.setExpression({id: 'graph1', latex:'y=x^{1/'+r+'}'});
		var actual = Math.pow(a, 1/r).toFixed(p);
		var Accuracy = Math.abs(((actual-xn)/actual)*100).toFixed(2);
		var ids = ["compute", "actual", "terms", "accuracy"], vals = [xn.toFixed(p), actual, array, Accuracy+"%"];
		
		for (var i = 0; i < 4; i++) document.getElementById(ids[i]).innerHTML = vals[i];
	}
}
