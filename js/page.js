function nav_click(text){
    if(text == 'open'){
        document.getElementById("menu").className = "navimg_show_close";
        document.getElementById("cross").className = "navimg_show_open";
        document.getElementById("navlist").className = "menu_navlist menu_navlist_open";
    }else{
        document.getElementById("menu").className = "navimg_show_open";
        document.getElementById("cross").className = "navimg_show_close";
        document.getElementById("navlist").className = "menu_navlist menu_navlist_close";
    }
}
window.onresize = function(){
    width = window.innerWidth;
    height = window.innerHeight;
    if(width > 768){//to desktop setting
        document.getElementById("navlist").className = "navlist";
        document.getElementById("menu").className = "navimg_show_open";
        document.getElementById("cross").className = "navimg_show_close";
    }
}

window.onscroll = function(){
    if(window.document.documentElement.scrollTop > 0)
        document.getElementById("top").style.backgroundColor = "rgba(23, 58, 87, 1)";
    else
        document.getElementById("top").style.backgroundColor = "rgba(23, 58, 87, 0.5)";
}