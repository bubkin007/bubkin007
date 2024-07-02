const app = window.Telegram.WebApp;
app.ready();
function setgay(e){
    localStorage.setItem('Gay',e)
    document.getElementById("Gayid").innerHTML = localStorage.getItem("Gay");
}
app.expand();
setgay(localStorage.getItem("Gay"));
