/* =========================
   Global
========================= */


*{

margin:0;
padding:0;
box-sizing:border-box;

}



html{


scroll-behavior:smooth;


scroll-snap-type:y proximity;


}




body{


background:#f5efe4;


color:#342c24;


font-family:

"PingFang SC",
"Microsoft YaHei",
sans-serif;


overflow-x:hidden;


overscroll-behavior:none;


}





/* =========================
 Page
========================= */


.page{


height:100vh;


scroll-snap-align:start;


display:flex;


justify-content:center;


align-items:center;


}




.paper{


width:700px;


height:850px;


position:relative;


overflow:hidden;


padding:60px;



background:#fffdf8;


border:1px solid #eadbc6;



box-shadow:


0 15px 35px rgba(70,50,30,.08);


animation:

paperAppear 1s ease;


}






/* 纸张纹理 */


.paper::before{


content:"";


position:absolute;


inset:0;


background:


radial-gradient(

rgba(120,90,50,.08) 1px,

transparent 1px

);



background-size:

9px 9px;



opacity:.35;



pointer-events:none;



}





/* 手账横线 */


.paper::after{


content:"";


position:absolute;


left:35px;


top:0;


width:1px;


height:100%;



background:#efdcca;


opacity:.8;



}







/* =========================
 Navigation
========================= */



.navigation{


position:fixed;


right:45px;


top:50%;


transform:translateY(-50%);


z-index:100;


}



.navigation div{


display:flex;


align-items:center;


gap:12px;


margin:22px 0;


font-size:14px;


color:#b6a58d;


cursor:pointer;


transition:.4s;


}




.navigation span{


width:8px;


height:8px;


border-radius:50%;


background:#d9cbb7;


transition:.4s;


}



.navigation .active{


color:#72563a;


font-weight:bold;


}



.navigation .active span{


width:13px;


height:13px;


background:#8c6844;


}









/* =========================
 Cover Page
========================= */


.date{


position:absolute;


top:55px;


left:70px;



font-size:13px;


letter-spacing:2px;


line-height:1.8;


color:#8e7961;



}





.cover-profile{


position:absolute;


left:75px;


top:180px;


}





.cover-profile h1{


font-family:

Georgia,
serif;



font-size:48px;



letter-spacing:3px;



}



.subtitle{


margin-top:15px;


font-size:20px;


font-weight:400;


color:#856747;


}




.education{


margin-top:45px;



display:flex;


flex-direction:column;


gap:30px;


}




.edu-item span{


font-size:12px;


letter-spacing:2px;


color:#a08462;


}



.edu-item p{


margin-top:8px;


font-size:15px;


line-height:2;


color:#53483d;


}








/* =========================
 Photo Sticker
========================= */



.photo-placeholder{


position:absolute;


right:80px;


top:190px;



width:220px;


height:270px;


background:white;



padding:12px;



box-shadow:


0 15px 30px rgba(0,0,0,.15);



transform:

rotate(5deg);


}




.photo-placeholder img{


width:100%;


height:100%;


object-fit:cover;



}





/* =========================
 Tape
========================= */



.tape{


position:absolute;


width:130px;


height:35px;


background:


rgba(218,188,140,.65);


z-index:10;


}




.tape-one{


right:120px;


top:170px;


transform:

rotate(15deg);


}



.tape-two{


right:130px;


top:420px;


transform:

rotate(-20deg);


}







/* =========================
 Research
========================= */



.research-box{


position:absolute;


bottom:120px;


left:75px;


display:flex;


gap:70px;


}



.research-box span{


font-size:12px;


letter-spacing:2px;


color:#9a7c57;


}



.research-box p{


margin-top:12px;


font-size:14px;


line-height:1.9;


}








/* =========================
 Stamp
========================= */


.stamp{


position:absolute;


right:80px;


top:80px;



border:

2px solid #9b805f;



border-radius:50%;


padding:20px;


font-size:12px;


text-align:center;



transform:

rotate(12deg);



color:#806343;


}





/* =========================
 Doodle
========================= */


.doodle{


position:absolute;


font-size:30px;


}




.star{


right:280px;


top:90px;


}



.plant{


left:250px;


bottom:90px;


}








.page-number{


position:absolute;


right:40px;


bottom:30px;


font-size:13px;


color:#b29a7b;


}









/* =========================
 Animation
========================= */



.date-animation{


animation:

fadeLeft 1s ease forwards;


}





.photo-animation{


opacity:0;


animation:

photoDrop 1s ease forwards;


animation-delay:

1.2s;


}





.tape-animation{


opacity:0;


animation:

tapeDrop .8s ease forwards;


animation-delay:

1.8s;



}







@keyframes fadeLeft{


from{


opacity:0;


transform:translateX(-40px);


}


to{


opacity:1;


transform:translateX(0);


}


}







@keyframes photoDrop{


0%{


opacity:0;


transform:

translateY(-80px)
rotate(12deg);


}


70%{


opacity:1;


transform:

translateY(10px)
rotate(2deg);


}



100%{


opacity:1;


transform:

translateY(0)
rotate(5deg);


}


}








@keyframes tapeDrop{


0%{


opacity:0;


transform:

translateY(-50px)
rotate(-20deg);


}



80%{


opacity:1;


transform:

translateY(10px)
rotate(10deg);


}



100%{


opacity:1;


transform:

translateY(0)
rotate(15deg);


}


}







@keyframes paperAppear{


from{


opacity:0;


transform:

translateY(40px)
scale(.98);


}



to{


opacity:1;


transform:

translateY(0)
scale(1);


}


}





/* 小元素漂浮 */


.star,
.plant,
.stamp{


animation:

float 5s ease-in-out infinite;


}




@keyframes float{


50%{


transform:

translateY(-8px);


}


}








/* =========================
 Other Pages
========================= */



.section-title{


font-size:14px;


letter-spacing:3px;


color:#927557;


}




.about{


margin-top:40px;


font-size:18px;


line-height:2;


}



.end{


text-align:center;


}


.end h1{


font-family:Georgia,serif;


font-size:45px;


}
