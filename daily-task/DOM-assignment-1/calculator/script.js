let keyboard = document.getElementById('keyboard')
let display = document.getElementById('display')


keyboard.addEventListener('click',(e)=>{
    let value = e.target.innerText;

    if(value === "C"){
        display.innerText = "";
    }

    else if(value === "="){
       try{
         display.innerText = eval(display.innerText)
       } 
       catch(error){
        display.innerText = "Error"
       }
       
    }

    else{
        if(display.innerText === 'Error'){
            display.innerText = ""
        }

        display.innerText += value;
    }
    
})