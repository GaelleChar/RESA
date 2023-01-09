/* Ask people for their budget
    SO FAR PERSONAL, CAN BE EXPANDED TO BUSINESS
    Work with finance professor 
    //TODO: have emoticons for each
    rent payments?
    groceries/food?
    transportation/gas?
    healthcare?
    miscellaneous?

    (can add up to 5 other purchases (such as specifics: eye doctor visits/tickets/clothing etc))

    (Python)API that uses Bank info (think CashApp asking for bank accts)
    --> get access to their statements and arrange their funds accordingly
    (Python)Visualization of data/funds

    BUS 211	Professional Development for Finance and Accounting (or other approved Miami Herbert Business School career course)
    get math equation for finances
 */

//Hey whats your name? slider (think MLH info) Enter name: 
//Hey [name], My name is [app name] I'm here to help you with your finances ^_^
//Have u been spending too much ;>)
//How old are you?

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
let [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z] 
= Array.from({
  length: 26
}, (v, i) => 65 + i);

class Money{
    constructor(user_name){
        this.user_name = user_name;
        //this is the username section
    }

}
function main(){
}
    const txt = document.getElementById(`hidden`);
    const bot_intro = document.getElementById(`bot-intro`);
    //bot_intro.style.display = 'none';
    const user_name_string = [];
    
    btn.addEventListener("click", (user) =>{
        //store user info into JSON mongoDB? or SQL?
        const user_name = document.getElementById(`name-input`).value;

        function user_fullname(user_name){
            //TODO: ignore case + separate first and last name by space
        }
        function user(user_name) {
            var name = user_name.toLowerCase();
            return name;
        }

        /* change username to a char string
        ex: gaelle --> 'g','a','e','l','l','e'
        and check if each letter contains numbers
        */
        function stringToArray(user_name, user_name_string){
            for (var i = 0; i < user_name.length; i++){
                user_name_string.push(user_name[i]);
            }
            return user_name_string;
        }

        //sort user_name_string using quick sort and check if it has any numbers
        //push all non Numbers to the back of the array
        function quick_sort_name(user_name_string, low, high){
            if(low < high){
                let pivot = pivot_element(user_name_string, low, high);

                quick_sort_name(user_name_string, low, pivot - 1)
                quick_sort_name(user_name_string, pivot + 1, high)
            }
        }

        function swap(user_name_string, i, j){
            let temp = user_name_string[i];
            user_name_string[i] = user_name_string[j];
            user_name_string[j] = temp;
        }

        function pivot_element(user_name_string, low, high){
            let pivot = user_name_string[high];
            let i = (low - 1);
            for  (let j = low; j <= high - 1; j++){
                if(user_name_string[j] < [pivot]){
                    i++;
                    swap(user_name_string, i, j)
                }
            }
            swap(user_name_string, i + 1, high)
            return (i + 1);
        }
        /*

        function printMessage(user_name_string){
            //
            right now its going
            'g' 'a' 'e'
             'a' = name[1]
            name[1] = num[0]
            name[1] = num[1]
            name[1] = num[2] THEN IT GOES YES!
            //
            var i = 0
            for (i = 0; user_name_string[0] >= numbers[i]; i++){
                if(user_name_string[0] == numbers[i] || user_name_string[i] == null){
                    //TODO: not working -->
                    txt.textContent = 'Please Enter a valid name';
                    return;
                        
                }
                else{
                    txt.textContent = 'Hi, ' + user_name;
                    bot_intro.style.display = 'block';

                    function botMessage(){
                        bot_intro.style.visibility = 'visible';
                    }
                    setTimeout(botMessage, 10);
                }
            //check:
            //window.alert(user_name_string[0])
            //window.alert(numbers[i])
            }
        }
        */
        //return an array from a string
        stringToArray(user_name, user_name_string);
        
        //window.alert(user_name_string)
        let n = user_name_string.length;
        var low = 0;
        var high = n-1;

        quick_sort_name(user_name_string, low, high);
        //printMessage(user_name_string);


    });
        

if(typeof window !== undefined){
    window.addEventListener('DOMContentLoaded', (event) => {
        money = new Money();
        money.user_name = null;
        console.log('DOM fully loaded and parsed');
    })
}
else{
    console.log('DOM not loaded');
}