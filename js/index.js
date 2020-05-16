//var index_timer = window.setInterval(indexIMG,5000);
var x = 0;
function imgchange(text){
    var imglist = document.getElementsByTagName('li');
    for(var i=0;i<imglist.length;i++){
        imglist[i].className = 'imgnone';
    }
    if(text == "left"){
        imglist[x].className = 'imghide';
        x--;
        if(x < 0)x = imglist.length-1;
        imglist[x].className = 'imgshow';
    }else{
        imglist[x].className = 'imghide';
        x++;
        if(x > imglist.length-1)x = 0;
        imglist[x].className = 'imgshow';
    }
}