var cover = document.querySelector("cover")
var icon = document.querySelector("#l-nav i")
 flag = 0
icon.addEventListener("click", function(){
    if (flag == 0){
        cover.style.top = 0
        flag = 1
    }
    else{
        cover.style.top = "-100%"
        flag = 0
    }

})