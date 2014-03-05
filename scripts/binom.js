function binomDistro() {
	
	var n = document.binomForm.n.value;
	var p = document.binomForm.p.value;
	var firstParam = document.binomForm.firstParam.value;
	var secParam = document.binomForm.secParam.value;

	var meanX = n*p;
	var stdDev = Math.sqrt(n*p*(1 - p));
	var pHat = ((n*p) / n);
	var normSD = Math.sqrt((p*(1 - p)))/n;
	var probZPos = (secParam - p)/(Math.sqrt((p*(1 - p))/n));
	var probZNeg = (firstParam - p)/(Math.sqrt((p*(1 - p))/n));
	
}