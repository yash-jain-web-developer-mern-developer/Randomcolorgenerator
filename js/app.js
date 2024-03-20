const butt=document.getElementById("btn")
const codepos=document.getElementById("color-code")
const randomgenerator=()=>{
    const random=Math.floor(Math.random()*16777215);
    const code="#"+random.toString(16);//16 to make it hexcode
    document.body.style.backgroundColor=code;
   codepos.innerText=code;   
}
butt.addEventListener("click",randomgenerator);
randomgenerator();
//navigator.clipboard.writeText(code)//it is used to copy on clipboard