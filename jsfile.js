function cdr() {
    let d = number(document.getElementById("ckematian").value);
    let p = number(document.getElementById("cPenduduk").value);
    let result = d / p * 1000;
    document.getElementById("cresult").innerHTML = result;
}

function asbr() {
    let d = number(document.getElementById("akematian").value);
    let p = number(document.getElementById("aPenduduk").value);
    let result = d / p * 1000;
    document.getElementById("aresult").innerHTML = result;    
}
document.getElementById("result").innerHTML = "dsdsds";