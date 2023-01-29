function cdr() {
    let d = document.getElementById("ckematian").value;
    let p = document.getElementById("cPenduduk").value;
    let result = d / p * 1000;
    document.getElementById("cresult").innerHTML = result;
}
