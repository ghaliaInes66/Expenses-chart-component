const col1=document.querySelector('.column1');
const col2=document.querySelector('.column2');
const col3=document.querySelector('.column3');
const col4=document.querySelector('.column4');
const col5=document.querySelector('.column5');
const col6=document.querySelector('.column6');
const col7=document.querySelector('.column7');

const id=document.querySelector('.id');
const id1=document.querySelector('.id1');
const id2=document.querySelector('.id2');
const id3=document.querySelector('.id3');
const id4=document.querySelector('.id4');
const id5=document.querySelector('.id5');
const id6=document.querySelector('.id6');
const id7=document.querySelector('.id7');


function cl1(){
    id1.style.display='inline-block';
    id2.style.display='none';
    id3.style.display='none';
    id4.style.display='none';
    id5.style.display='none';
    id6.style.display='none';
    id7.style.display='none';
}

col1.addEventListener('mouseover',cl1);

function cl2(){
    id2.style.display='inline-block';
    id1.style.display='none';
    id3.style.display='none';
    id4.style.display='none';
    id5.style.display='none';
    id6.style.display='none';
    id7.style.display='none';
}

col2.addEventListener('mouseover',cl2);
function cl3(){
    id2.style.display='none';
    id1.style.display='none';
    id4.style.display='none';
    id5.style.display='none';
    id6.style.display='none';
    id7.style.display='none';
    id3.style.display='inline-block';
}

col3.addEventListener('mouseover',cl3)
;function cl4(){
    id2.style.display='none';
    id3.style.display='none';
    id1.style.display='none';
    id5.style.display='none';
    id6.style.display='none';
    id7.style.display='none';
    id4.style.display='inline-block';
}

col4.addEventListener('mouseover',cl4);

function cl5(){
    id2.style.display='none';
    id3.style.display='none';
    id4.style.display='none';
    id1.style.display='none';
    id6.style.display='none';
    id7.style.display='none';
    id5.style.display='inline-block';
}

col5.addEventListener('mouseover',cl5);
function cl6(){
    id2.style.display='none';
    id3.style.display='none';
    id4.style.display='none';
    id5.style.display='none';
    id1.style.display='none';
    id7.style.display='none';
    id6.style.display='inline-block';
}

col6.addEventListener('mouseover',cl6);
function cl7(){
    id2.style.display='none';
    id3.style.display='none';
    id4.style.display='none';
    id5.style.display='none';
    id6.style.display='none';
    id1.style.display='none';
    id7.style.display='inline-block';
}

col7.addEventListener('mouseover',cl7);
