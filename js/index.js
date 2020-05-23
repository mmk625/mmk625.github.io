//git pull --rebase
//git push origin HEAD:refs/heads/master

window.onload = function(){ 
    document.getElementById("left").onmouseover = function(){mouse_over(true)};
    document.getElementById("right").onmouseover = function(){mouse_over(true)};
    document.getElementById("left").onmouseout = function(){mouse_over(false)};
    document.getElementById("right").onmouseout = function(){mouse_over(false)};
}

var x = 0;
var status = 0;
var index_timer = window.setInterval(imgchange,10000);

function mouse_over(check){
    if(check)status = 1;
    else status = 0;
}

function imgchange(text){
    var imglist = document.getElementsByTagName('li');
    if(status == 0 || text == "right"){
        if(x == 0)imglist[imglist.length-1].className = 'imgnone';
        else imglist[x-1].className = 'imgnone'; 
        imglist[x].className = 'imghide';
        x++;
        if(x > imglist.length-1)x = 0;
        imglist[x].className = 'imgshow';
    }else if(text == "left"){
        if(x == imglist.length-1)imglist[0].className = 'imgnone';
        else imglist[x+1].className = 'imgnone'; 
        imglist[x].className = 'imghide';
        x--;
        if(x < 0)x = imglist.length-1;
        imglist[x].className = 'imgshow';
    }
}