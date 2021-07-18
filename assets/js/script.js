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
    if (submenuIsNotOpen) {
        $('.header__nav-list .nav__item:not(:first-child)').css({
            transform: "translateY(calc(52*5px))"
        });
        $('.submenu').css({
            transform: "translateX(0)"
        });
        $('.nav__item:hover i').css({
            transform: "rotate(-90deg)"
        });
        submenuIsNotOpen = false;
    } else {
        $('.header__nav-list .nav__item:not(:first-child)').css({
            transform: "translateY(0)"
        });
        $('.submenu').css({
            transform: "translateX(-100%)"
        });
        $('.nav__item:hover i').css({
            transform: "rotate(-0)"
        });
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
    } else {
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

var menuItems = document.querySelectorAll(".header__nav-list li");

console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        var mobilebutton = $('.mobile-menu-button').css('display') == "none";
        console.log("a" + mobilebutton);
        var isParentMenu = mobilebutton == false && this.classList.contains("submenu-container");
        console.log(isParentMenu);
        if (isParentMenu) {
            $(".header__nav-list").css({
                left: "0%"
            });
            // $(".main").css({
            //     marginLeft: "0px"
            // });
            // mobileMenuisHidden = true;
            event.preventDefault();
        } else {
            console.log(11);
            $(".mobile-menu-button").toggleClass("active");
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
    }
}