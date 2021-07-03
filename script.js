let export_btn = document.querySelector('.export_btn')
let bubble_img = document.querySelector('.bubble_img');

export_btn.onclick = function(){
    domtoimage.toBlob(bubble_img).then(function (blob){
        window.saveAs(blob, 'bubble_img.png');
    });
  }

// document.getElementById('exportBtn').onclick = function(){
//     domtoimage.toBlob(document.getElementById('image__'))
//     .then(function (blob) {
//         window.saveAs(blob, 'image__.png');
//     });
//   }

let textarea = document.querySelector('textarea');

function check(){
    if(textarea.value.length > 100){
        alert("공백 포함 최대 100자까지 입력 가능합니다.");
        textarea.value=textarea.value.substring(0, 100);
        textarea.focus();
    }
}