
<!DOCTYPE html>
<html>
    <meta charset="UTF-8">
    <head>
        <link rel="stylesheet" type="text/css" href="Money.css">
    </head>
    <body>
        <?php include("inc/nav.php");?>
        <section id="Calc">
            <div class="calculations">

                <!--BANK API-->
                <div class="bank-api">
                    <h1>BANK API INSERT ! </h1>
                </div>
            </br>
                <h1>What's your monthly budget?</h1>
                <div id="budget">
                  <div class="button">
                    <input name="budget"id="input-budget" type="text" />
                    <button type="submit-budget"id="submit-budget">Enter</button>
                    <p id="answer"></p>
                  </div>
                </div>
                <h3>You're budget is {budget}</h3>
            </br>
                <h1>How much did you spend this month?</h1>
                <div id="spent">
                  <div class="button">
                    <input name="spent"id="input-spend" type="text" />
                    <button type="submit-spend"id="submit-spend">Enter</button>
                    <p id="answer"></p>
                  </div>
                </div>
                <h3>You spent {spent}</h3>
            </br>              
            </div>
            <p id="hidden" class="textContent"></p>

            <div class="bank-api-report">
                <h2>Based off your bank report</h2>
                <h3>You spent this much on </h3>
                <p>food: </p>
                <p>rent: </p>
                <p>Miscellaneous: </p>
            </div>


            <script src="MoneyCalc.js"></script>
        </section>
        <section id="num"></section>
    </body>
</html>