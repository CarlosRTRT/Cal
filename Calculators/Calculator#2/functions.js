const buttons = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");

buttons.forEach(buttons => {
    buttons.addEventListener("click", ()=>{
        const buttonDawn = buttons.textContent;

        if(screen.textContent.length === 19){
            screen.textContent = screen.textContent.slice(0, -1);
        }
        if (buttons.id == "reset"){
            screen.textContent = "0";
            return;
        }
        if (buttons.id === "reset"){
            screen.textContent === "0";
        }
        if (buttons.id === "delete"){
            if(screen.textContent === screen.textContent.length === 1 || screen.textContent === "!Error!"){
                screen.textContent = "0";
            } else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            if(screen.textContent ===""){
                screen.textContent = "0";
            }

            return; 
        }
        if (buttons.id === "equal"){
            try {
                 screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "!Error!";
            }
            return;
        }
        if (screen.textContent === "0" || screen.textContent === "!Error!"){
            screen.textContent = buttonDawn;
        } else {
         screen.textContent += buttonDawn;    
        }
       
    });
});