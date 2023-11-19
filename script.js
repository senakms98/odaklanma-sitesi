const ekranSayacElement = document.getElementById("ekran_sayac");
 
let ekran_sayac = 0;
 
function elementinIcineYaz() {
  ekranSayacElement.innerText = ekran_sayac;
}
 
function ekranSayacArttir() {
  ekran_sayac++;
  elementinIcineYaz();
}

