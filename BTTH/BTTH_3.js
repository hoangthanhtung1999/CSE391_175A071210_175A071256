$(function() {
    $(".row").click(function() {
var mau = $(this).css("background-color");
var mau_goc = 'rgb(0, 128, 0)';
var id = 'tich' + $(this).attr('id');
if (mau == mau_goc) {
$(this).css("background-color", "white");
document.getElementById(id).checked = false;
} else {
$(this).css("background-color", "green");
document.getElementById(id).checked = true;
}
});
});
function Open() {
var person = prompt("Nhap gia tri!");
$('#1').before('<div class="row" > ' +' <input type="checkbox" id="nhan">'+ person + '</div>');
}
