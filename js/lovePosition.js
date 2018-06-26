 //窗体改变大小时触发事件  
window.onresize = setViewSize;  
var marginLeft=0;  
var marginTop=0;  
//设置画布大小，登录页面显示在屏幕最中间  
function setViewSize() { 
    //计算屏幕大小  
    var w=window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth;  
    var h=window.innerHeight  || document.documentElement.clientHeight  || document.body.clientHeight;  
    //设置登陆div的位置  
    marginLeft = (w-420)/2;  
    marginTop = (h-360)/2;  
    document.getElementById("heartPositon").style.marginLeft=marginLeft;  
    document.getElementById("heartPositon").style.marginTop=marginTop;  
}  