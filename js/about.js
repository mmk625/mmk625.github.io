window.onload = function(){
    set_br();
}
window.onresize = function(){
    set_br();
}
var member = "<span>kyL_lee</span><br><br><span>marry8969</span><br><br><span>Teemo_z</span><br><br><span>KevinChou</span><br><br>"
var participate = "<span>lisa6521</span><br><br><span>leon930623</span><br><br><span>mac890621</span><br><br><span>jack890611</span><br><br><span>min12323</span><br><br>"
function set_br(){
    width = window.innerWidth;
    height = window.innerHeight;
    if(width > 768){//to desktop setting
        document.getElementById("top_br_1").innerHTML = "<br><br><br><br><br><br><br><br>" + member;
        document.getElementById("top_br_2").innerHTML = "<br><br><br><br><br><br><br><br>" + participate;
    }else{
        document.getElementById("top_br_1").innerHTML = "<br><br><br><br>" + member;
        document.getElementById("top_br_2").innerHTML = "<br><br><br><br>" + participate;
    }
}