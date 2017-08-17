// 1
document.getElementById("start").onclick=f1;
function f1 () {
	var v = document.getElementById("i1").value;
	// alert(v/26);
	document.getElementById("sum").innerHTML=v/26+' $';
}


// 2       3

document.getElementById("ok").onclick=f2;
function f2 (){
	var a = document.getElementById("w").value;
	var b = document.getElementById("l").value;
	var c = document.getElementById("h").value;

	document.getElementById("out").innerHTML=a*b*c*12+' кг';
}

document.getElementById("ok2").onclick=f3;
function f3 (){
	var a = document.getElementById("w").value;
	var b = document.getElementById("l").value;
	var c = document.getElementById("h").value;
	document.getElementById("out2").innerHTML=a*b*c*12/50+' мешков';
}



// 4
document.getElementById("funt").onclick=f4;
function f4 () {
	var f = document.getElementById("kg").value;
	// alert(v/26);
	document.getElementById("out4").innerHTML=f*2.2046+' фунт.';
}


// 5
document.getElementById("yes").onclick=f5;
function f5 () {
	var s = 15000;
	var g = 11;
	var b = 26;
	var r = document.getElementById("rashod").value;
	var p = document.getElementById("probeg").value;

	document.getElementById("gbo").innerHTML=s/(r*p/100*(b-1.2*g))+' мес.';
	
}
