function binomDistro() {
	
	var n = document.binomForm.n.value;
	var p = document.binomForm.p.value;
	var firstParam = document.binomForm.firstParam.value;
	var secParam = document.binomForm.secParam.value;

	var meanX = n*p;
	document.binomForm.meanX.value = meanX.toFixed(4);

	var stdDev = Math.sqrt(n*p*(1 - p));
	document.binomForm.stdDev.value = stdDev.toFixed(4);

	var pHat = ((n*p) / n);
	document.binomForm.pHat.value = pHat.toFixed(4);

	var normSD = Math.sqrt((p*(1 - p)))/n;
	document.binomForm.normSD.value = normSD.toFixed(4);

	var probZPos = (secParam - p)/(Math.sqrt((p*(1 - p))/n));
	document.binomForm.probZPos.value = probZPos.toFixed(4);

	var probZNeg = (firstParam - p)/(Math.sqrt((p*(1 - p))/n));	
	document.binomForm.probZNeg.value = probZNeg.toFixed(4);
}