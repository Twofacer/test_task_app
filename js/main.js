var contentPopup = document.getElementById('contentPopup');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    contentPopup.style.display = "block";
}
span.onclick = function() {
    contentPopup.style.display = "none";
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        contentPopup.style.display = "none";
    
    }
};
window.onclick = function(event) {
    if (event.target == contentPopup) {
        contentPopup.style.display = "none";
    }
}