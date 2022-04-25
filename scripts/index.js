// Store the wallet amount to your local storage with key "amount"

// 1. Wallet amount should be in the H1 tag with id as “wallet”.
// 2. Input box for accepting amount with id as “amount”.
// 3. Add to wallet button with id as “add_to_wallet”.
// 4. Add the wallet amount to local storage as key “amount”.
// 5. Link or button to go to “movies.html” should have id as “book_movies”.
// 6. Input box for searching movies will have an id as “search”.
// 7. Append all searched movies inside the div with id as “movies”.
// 8. Book now buttons will have class as “book_now”.
// 9. Add the selected movie for booking to local storage with key as “movie”
// 10. Inside checkout.html name input box id will be “user_name”
// 11. The number of seats input box will have id as “number_of_seats”.
// 12. A submit button to confirm booking with id as “confirm”.
// 13. Give alert as : -
// - “Insufficient Balance!”  in case of insufficient wallet balance.
// - “Booking successful!”  in case of successful booking.


let input = document.getElementById("amount").value;
let button = document.getElementById("add_to_wallet");

button.addEventListener("click",Addmoney);

function Addmoney()
{   
    let input = document.getElementById("amount").value;
    let h1 = document.getElementById("wallet");
    let balanceAmount = Number(input);
    // h1.innerText = Number(input);


    localStorage.setItem("amount",balanceAmount)
}


let update = JSON.parse(localStorage.getItem("amount"));
console.log(update);
let h1 = document.getElementById("wallet");
h1.innerText=update;

