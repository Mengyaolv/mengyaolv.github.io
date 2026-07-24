// ==============================
// Page Navigation
// ==============================


const pages = document.querySelectorAll(".page");

const navItems = document.querySelectorAll(".navigation div");




// 页面观察器

const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const currentIndex =

Array.from(pages)

.indexOf(entry.target);





// 更新右侧导航

navItems.forEach(item=>{

item.classList.remove("active");

});



if(navItems[currentIndex]){

navItems[currentIndex]

.classList.add("active");

}





// 当前页面动画

entry.target

.querySelectorAll(

".paper, .intro, .photo-card, .direction, .sticky-note, .think-card, .hobby-card"

)

.forEach((element,index)=>{


element.classList.add("show");

element.style.animationDelay =

`${index * 0.12}s`;

});



}


});


},

{

threshold:0.45

}

);





pages.forEach(page=>{


observer.observe(page);


});








// ==============================
// Navigation Click
// ==============================


navItems.forEach((item,index)=>{


item.addEventListener(

"click",

()=>{


pages[index]

.scrollIntoView({

behavior:"smooth",

block:"center"

});


}

);


});








// ==============================
// 页面首次进入动画
// ==============================


window.addEventListener(

"load",

()=>{


document

.querySelector(".paper")

.classList.add("show");



});
