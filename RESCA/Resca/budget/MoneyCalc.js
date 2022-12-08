//let $ = selector => document.querySelector(selector);
    txt = document.getElementById(`hidden`);
    
    btn_spend = document.getElementById(`submit-spend`);

    btn_spend.addEventListener("click", () =>{

        const num = document.getElementById(`input-spend`).value;
        console.log(num)

        function spent(num) {
            let budget = document.getElementById(`input-budget`).value;
            var x = num;
            var drawn = 0;
            drawn = budget - x;

            if (x < budget) {
                console.log("You went over your limit by " + drawn)
                window.alert("You went over your limit by " + drawn)
            }
            else if (x > budget){
                console.log("You are still under your limit by " + drawn)
                window.alert("You are still under your limit by " + drawn)
            }
            else {
                console.log("You are at your buget")
                window.alert("You are at your budget")
            }
            return drawn;
        }    
        
 
        console.log("Num inserted: " + num)
        const finalSpent = spent(num);
        
        if (btn_spend.type === 'submit') {
            txt.textContent = 'You currently have: ' + finalSpent;
        }
        else{
            //txt.textContent = 'Enter Another Number: '
            console.log("button or paragraph text not working");
        }
    });
    