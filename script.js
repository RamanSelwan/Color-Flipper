const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F']
const btn = document.getElementById("button");
const color = document.querySelector('.color');
btn.addEventListener('click' , function(){
    let hexColor = "#";

    for(let i=0;i<6;i++){
      hexColor += hex[getRandom()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
  
})
function getRandom(){
    return Math.floor(Math.random()*15);
}