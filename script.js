const pages=document.querySelectorAll(".page");


const nav=document.querySelectorAll(".navigation div");



const observer=new IntersectionObserver(

(entries)=>{


entries.forEach(item=>{


if(item.isIntersecting){


item.target.classList.add("active");


let index=[...pages].indexOf(item.target);



nav.forEach(n=>n.classList.remove("active"));



if(nav[index]){

nav[index].classList.add("active");

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



nav.forEach((item,index)=>{


item.onclick=()=>{


pages[index].scrollIntoView({

behavior:"smooth"

});


};


});

document
.querySelectorAll(".project-card")
.forEach(card=>{


    card.addEventListener(
        "click",
        function(e){


            e.preventDefault();


            const url=this.href;


            document.body.classList.add(
                "page-out"
            );


            setTimeout(()=>{

                window.location=url;


            },350);


        }
    )


})
