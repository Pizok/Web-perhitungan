function cdr() {
    let d = number(document.getElementById("ckematian").value);
    let p = number(document.getElementById("cPenduduk").value);
    let result = d / p * 1000;
    document.getElementById("result").innerHTML = result;
}
document.getElementById("result").innerHTML = "dsdsds";