const searchOpen = document.getElementsByClassName("search-open")[0];
const searchWrapper = document.getElementsByClassName("side-bar-container")[0];
const searchBox = document.getElementsByClassName("search-box")[0];
const main = document.getElementsByClassName("main")[0];

const bagOpen = document.getElementsByClassName("shopping-bag-open")[0];
const bagBox = document.getElementsByClassName("bag-box")[0];
const bagClose = document.getElementsByClassName("bag-close")[0];

searchOpen.addEventListener("click", function () {
    searchWrapper.style.backgroundColor = "#33333380";
    searchWrapper.style.width = "100%";
    main.style.marginLeft = "-400px";
    searchBox.style.right = "0";
});
const searchClose = document.getElementsByClassName("search-close")[0];
searchClose.addEventListener("click", function () {
    if (searchWrapper.style.backgroundColor != null) {
        main.style.marginLeft = "0";
        searchBox.style.right = "-100%";
        searchWrapper.style.backgroundColor = null;
    }
    const s = setTimeout(function () { searchWrapper.style.width = "0"; }, 300);
});

bagOpen.addEventListener("click", function () {
    searchWrapper.style.backgroundColor = "#33333380";
    searchWrapper.style.width = "100%";
    main.style.marginLeft = "-400px";
    bagBox.style.right = "0";
});
bagClose.addEventListener("click", function () {
    if (searchWrapper.style.backgroundColor != null) {
        main.style.marginLeft = "0";
        bagBox.style.right = "-100%";
        searchWrapper.style.backgroundColor = null;
    }
    const s = setTimeout(function () { searchWrapper.style.width = "0"; }, 300);
});
const navOpen = document.getElementsByClassName("submenu-container")[0];
var submenuIsNotOpen = true;
navOpen.addEventListener("click", function () {
    if (submenuIsNotOpen && $('.mobile-menu-button').css('display')!='none') {
        console.log(1)
        $('.header__nav-list .nav__item:not(:first-child)').css({
            transform: "translateY(calc(52*5px))"
        });
        $('.submenu').css({
            transform: "translateX(0)"
        });
        if($('.mobile-menu-button').css('display')!='none'){
            $('.nav__item:hover i').css({
                transform: "rotate(-90deg)"
            });
        }
        
        submenuIsNotOpen = false;
    } else {
        $('.header__nav-list .nav__item:not(:first-child)').css({
            transform: "translateY(0)"
        });
        if($('.mobile-menu-button').css('display')!='none'){
            $('.submenu').css({
                transform: "translateX(-100%)"
            });
            $('.nav__item:hover i').css({
                transform: "rotate(0deg)"
            });
        }else{
            $('.submenu').css({
                transform: "translateX(0%)"
            });
            $('.nav__item:hover i').css({
                // transform: "rotate(-180deg)"
            });
        }
        submenuIsNotOpen = true;
    }
});
var mobileMenuisHidden = true;
$('.mobile-menu-button').click(function () {
    $(this).toggleClass("active");
    if (mobileMenuisHidden) {
        $(".header__nav-list").css({
            left: 0
        });
        // $(".main").css({
        //     marginLeft: "100%"
        // });
        mobileMenuisHidden = false;
        searchWrapper.style.backgroundColor = "#33333380";
        searchWrapper.style.width = "100%";
        return;
    }else{
        $(".header__nav-list").css({
            left: "-100%"
        });
        // $(".main").css({
        //     marginLeft: "0px"
        // });
        mobileMenuisHidden = true;
        searchWrapper.style.backgroundColor = null;
        const s = setTimeout(function () { searchWrapper.style.width = "0"; }, 300);
    }
    
});
function closeMenu(){
        $(".header__nav-list").css({
            left: "-100%"
        });
        // $(".main").css({
        //     marginLeft: "0px"
        // });
        
        mobileMenuisHidden = true;
        searchWrapper.style.backgroundColor = null;
        const s = setTimeout(function () { searchWrapper.style.width = "0"; }, 300);
        $(".mobile-menu-button").toggleClass("active");
}
var headerLiTags = document.querySelectorAll(".header__nav-list li");
// console.log(headerLiTags)
for(var i=0; i<headerLiTags.length; i++){
    const item = headerLiTags[i];
    item.addEventListener("click", function(){
        console.log(item.classList.contains('submenu-container'))
        if(!item.classList.contains("submenu-container")){
            closeMenu();
        }
    });
}
const a = document.querySelectorAll(".main a");
// console.log(a);
for(var i=12; i<a.length; i++){
    const aNoImg = a[i];
    if(aNoImg.classList.length<2&&aNoImg.innerText!= ""){
        aNoImg.innerText = "Anh Yêu Em";
    }
    // for(var j=0; j<aNoImg.childNodes.length; j++){
    //     const aNoImgChild = aNoImg.childNodes[j];
    //     if(aNoImgChild.tagName != "img"&&!aNoImg.classList.contains("btn")){
    //         console.log(aNoImg.innerText); 
    //     }
    // }
}
const h1 = document.querySelectorAll(".main h1, h2, h3");
for(var i=0; i<h1.length; i++){
    let item = h1[i];
    item.innerText = "ANH YÊU EM"
}
// $(window).resize(function(e) {
//     if(!$('.mobile-menu-button').css('display')!='none'){
//         $(".nav__item").css({
//             transform: "translateY(0)"
//         });
//         $(".submenu").css({
//             left: "0"
//         });
//         submenuIsNotOpen == false;
//         searchWrapper.style.backgroundColor = null;
//         const s = setTimeout(function () { searchWrapper.style.width = "0"; }, 300);
//         $(".mobile-menu-button").removeClass("active");
//         $('.submenu-container i').css({
//             transform: "rotate(0)"
//         });
//     }else{
//         if(submenuIsNotOpen == false){
//             $(".mobile-menu-button").removeClass("active");
//         }
//     }
// });