// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={input}


let imgBox = document.getElementById("img-box");
let QR = document.getElementById("qrimg");
let Text = document.getElementById("qrText");//returns the value in input

function generate(){
    QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Text.value;
    imgBox.classList.add("show-img");
}