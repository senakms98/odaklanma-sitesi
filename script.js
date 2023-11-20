const screenCountElement = document.getElementById("screen_count");
 
let screen_count = 0;
 
function writeInsideElement() {
  screenCountElement.innerText = screen_count;
}
 
function addScreenCount() {
  screen_count++;
  writeInsideElement();
}
