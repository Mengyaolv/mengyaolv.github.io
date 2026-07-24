const pages =
document.querySelectorAll(".page");


const nav =
document.querySelectorAll(".navigation div");



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



const elements =
entry.target.querySelectorAll(".fade");


elements.forEach(el=>{


el.classList.add("show");


});



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
threshold:0.5
}



);



pages.forEach(page=>{

observer.observe(page);

});





/* 点击页码跳转 */


nav.forEach((item,index)=>{


item.addEventListener(
"click",
()=>{


pages[index]
.scrollIntoView({

behavior:"smooth"

});


});


});
