// =======================
// Page Navigation
// =======================


const pages =
document.querySelectorAll(".page");


const nav =
document.querySelectorAll(".navigation div");




// 页面观察

const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



const index =

Array.from(pages)

.indexOf(entry.target);




nav.forEach(item=>{


item.classList.remove("active");


});



if(nav[index]){


nav[index]

.classList.add("active");


}




}

});


},

{

threshold:0.6

}

);





pages.forEach(page=>{


observer.observe(page);


});









// =======================
// Navigation Click
// =======================


nav.forEach((item,index)=>{


item.addEventListener(

"click",

()=>{


pages[index]

.scrollIntoView({

behavior:"smooth"

});


}


);


});









// =======================
// Name Typing Animation
// =======================


const nameElement =

document.getElementById("name");



const nameText =

"Mengyao Lv";



let index = 0;



function typing(){


if(index < nameText.length){


nameElement.innerHTML +=

nameText[index];


index++;


setTimeout(

typing,

150

);


}


}





window.addEventListener(

"load",

()=>{


setTimeout(

typing,

700

);


}

);
