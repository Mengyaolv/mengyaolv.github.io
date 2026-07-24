const pages =
document.querySelectorAll(".page");


const nav =
document.querySelectorAll(".navigation div");




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



entry.target
.querySelectorAll(".fade")
.forEach(el=>{


el.classList.add("show");


});



}



});


},

{

threshold:0.55

}



);





pages.forEach(page=>{

observer.observe(page);


});







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
