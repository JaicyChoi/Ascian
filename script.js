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
const select_bubble_img = document.querySelector('.select_bubble_img');
const battle_bubble_img1 = document.querySelector('.battle_bubble_img1');
const battle_bubble_img2 = document.querySelector('.battle_bubble_img2');
const capture_area = document.querySelector('.capture_area');
let current_value = 'normal_bubble';

// console.log(bubble_check[0].value);

bubble_check.forEach(function(input){
    input.addEventListener('click', function(){
        if(input.value === 'normal_bubble'){
            capture_area.classList.remove('ascian_capture_area');
            capture_area.classList.remove('battle_capture_area1');
            capture_area.classList.remove('battle_capture_area2');
            capture_area.classList.add('normal_capture_area');
            ascian_bubble_img.classList.remove('show');
            select_bubble_img.classList.remove('show');
            normal_bubble_img.classList.add('show');
            battle_bubble_img1.classList.remove('show');
            battle_bubble_img2.classList.remove('show');
        }
        if(input.value === 'ascian_bubble'){
            capture_area.classList.add('ascian_capture_area');
            capture_area.classList.remove('battle_capture_area1');
            capture_area.classList.remove('battle_capture_area2');
            capture_area.classList.remove('normal_capture_area');
            ascian_bubble_img.classList.add('show');
            select_bubble_img.classList.remove('show');
            normal_bubble_img.classList.remove('show');
            battle_bubble_img1.classList.remove('show');
            battle_bubble_img2.classList.remove('show');
        }
        if(input.value === 'select_bubble'){
            capture_area.classList.remove('ascian_capture_area');
            capture_area.classList.remove('battle_capture_area1');
            capture_area.classList.remove('battle_capture_area2');
            capture_area.classList.add('normal_capture_area');
            ascian_bubble_img.classList.remove('show');
            select_bubble_img.classList.add('show');
            normal_bubble_img.classList.remove('show');
            battle_bubble_img1.classList.remove('show');
            battle_bubble_img2.classList.remove('show');
        }
        if(input.value === 'battle_bubble1'){
            capture_area.classList.remove('ascian_capture_area');
            capture_area.classList.remove('normal_capture_area');
            capture_area.classList.add('battle_capture_area1');
            capture_area.classList.remove('battle_capture_area2');
            ascian_bubble_img.classList.remove('show');
            select_bubble_img.classList.remove('show');
            normal_bubble_img.classList.remove('show');
            battle_bubble_img1.classList.add('show');
            battle_bubble_img2.classList.remove('show');
        }
        if(input.value === 'battle_bubble2'){
            capture_area.classList.remove('ascian_capture_area');
            capture_area.classList.remove('normal_capture_area');
            capture_area.classList.remove('battle_capture_area1');
            capture_area.classList.add('battle_capture_area2');
            ascian_bubble_img.classList.remove('show');
            select_bubble_img.classList.remove('show');
            normal_bubble_img.classList.remove('show');
            battle_bubble_img2.classList.add('show');
            battle_bubble_img1.classList.remove('show');
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
function check2(){
    if(textarea.value.length > 30){
        alert("공백 포함 최대 30자까지 입력 가능합니다.");
        textarea.value=textarea.value.substring(0, 30);
        textarea.focus();
    }
}
function check3(){
    if(textarea.value.length > 32){
        alert("공백 포함 최대 32자까지 입력 가능합니다.");
        textarea.value=textarea.value.substring(0, 32);
        textarea.focus();
    }
}