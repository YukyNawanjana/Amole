/*******************************    Video html sidebar  ***************/

const siwichBtn = document.querySelector('.siwich-button');
const listLesson = document.querySelector('.list-lessons');
const videopreviwe = document.querySelector('.video-previwe'); 
const leftIcon = document.querySelector('.siwich-button-left');
const rightIcon = document.querySelector('.switch-button-right');

siwichBtn.addEventListener(toggle, function(){
    
    listLesson.style.display ="none";
    videopreviwe.classList.add('col-md-12');

});
