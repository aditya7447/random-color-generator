let container=document.querySelector(".container");

for(let i=0;i<30;i++){
    let div1=document.createElement("div");
    div1.classList.add("container-div");
    container.appendChild(div1);
}

let containerdiv = document.querySelectorAll(".container-div");

colorGenerator();

function colorGenerator(){
    containerdiv.forEach((element)=> {
        let new_color = generateRandomColor();
        element.style.backgroundColor=new_color;
        element.innerText=new_color;
    });
}

function generateRandomColor(){
    let hex="0123456789abcdef";
    let hexCode="#";
    for(let j=0;j<6;j++){
        let index=Math.floor(Math.random()*16);
        hexCode+=hex[index];
    }
    return hexCode;
}
