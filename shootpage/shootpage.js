
window.onload = function(){
    var imglist = document.getElementById('photo_list').getElementsByTagName('img');
    document.getElementById('photo_count').innerHTML = (imglist.length=='0' ? 0:1) + "/" + imglist.length;
    author(imglist[photo_index]);
}

var photo_index = 0;

function imgchange(text){
    var imglist = document.getElementById('photo_list').getElementsByTagName('img');
    var photo_all = imglist.length;
    imglist[photo_index].className = 'imgnone';
    if(text == "right"){
        photo_index++;
        if(photo_index == imglist.length)photo_index = 0;
    }else if(text == "left"){
        photo_index--;
        if(photo_index == -1)photo_index = photo_all - 1;
    }
    imglist[photo_index].className = 'imgshow';
    document.getElementById('photo_count').innerHTML = (photo_index + 1) + "/" + photo_all;
    author(imglist[photo_index]);
}

function author(imgitem){
    document.getElementById('bottom_text').innerHTML = imgitem.title;
}