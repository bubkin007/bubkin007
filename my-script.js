const app = window.Telegram.WebApp;
document.getElementById("Gayid").innerHTML = localStorage.getItem("Gay");


//document.getElementById('Gayid').innerHTML = localStorage.getItem("Gay")
// Call as soon as your page is ready for the user to see
app.ready();
function setgay(e){
    localStorage.setItem('Gay',e)
}
// Expand your web app to full screen
app.expand();
