
var increateFontButton= document.getElementById("increateFontButton");
var decreateFontButton= document.getElementById("decreateFontButton");

var content1= document.getElementById("Content1");


var currentFontsize=30;

function updateFont(){
    if(currentFontsize<=10){
    }else{
        content1.style.fontSize=currentFontsize+"px";
    }
}
increateFontButton.addEventListener("click",()=>{
  currentFontsize++;
  updateFont();
})

decreateFontButton.addEventListener("click",()=>{
    currentFontsize--;
  updateFont();
})
