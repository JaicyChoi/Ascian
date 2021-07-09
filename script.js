// let bubble_check = document.getElementsByName('bubble');
// let checked_bubble;

// for( let i = 0 ; i < bubble_check.length; i++ ){
//     if(bubble_check[i].checked)
//         checked_bubble = bubble_check[i].value;
// }

// console.log(checked_bubble);

const bubble_check = document.querySelectorAll('.bubble_check');
const ascian_bubble_img = document.querySelector('.ascian_bubble_img');
const normal_bubble_img = document.querySelector('.normal_bubble_img');
const capture_area = document.querySelector('.capture_area');
let current_value = 'normal_bubble';

// console.log(bubble_check[0].value);

bubble_check.forEach(function(input){
    input.addEventListener('click', function(){
        if(input.value === 'normal_bubble'){
            capture_area.classList.remove('ascian_capture_area');
            capture_area.classList.add('normal_capture_area');
            ascian_bubble_img.classList.toggle('show');
            normal_bubble_img.classList.toggle('show');
        }
        if(input.value === 'ascian_bubble'){
            capture_area.classList.add('ascian_capture_area');
            capture_area.classList.remove('normal_capture_area');
            ascian_bubble_img.classList.toggle('show');
            normal_bubble_img.classList.toggle('show');
        }
        current_value = input.value;
    });
});

let export_btn = document.querySelector('.export_btn')
let bubble_img = document.querySelector('.capture_bubble');

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