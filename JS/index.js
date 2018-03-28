
var nav = document.getElementsByTagName("nav")[0];//除ID获取外，都为伪数组，需要在后面加【0】选中元素
var navHeight =nav.offsetHeight;
window.onscroll=function(){
    var rollTop = window.scrollY; //滚动条滚动距离
    
    console.log(navHeight);
    console.log(rollTop == navHeight ||rollTop > navHeight );
    if( rollTop > navHeight){
       nav.classList.add("navAnimation");
       nav.classList.add("navFixed");
    }else{
        nav.classList.remove("navAnimation");
        nav.classList.remove("navFixed");
    }
}