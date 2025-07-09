 let balance = 10000;

 function displayMenu(){
  let  choice = prompt(
    "Welcome To The ATM"+
    "1. Check Balance" +
    "2.Deposit Funds" +
    "3. Withdraw Funds" +
    "4. Exit" +
    "Enter Your Choice"
  );
  return PageTransitionEvent(choice);  
 }
 function checkBalance (){
  alert("Your current Balance is: ₹. " + balance);
 }

 function depositFunds (){
  let amount = parseFloat (prompt("Enter amount to deposit"));
   if(isNaN(amount) || amount<= 0){
    alert("Invaild deposit amount");
  } else{
    balance +=amount;
    alert("Deposit Successful Your New balance is : ₹. " + balance);
  }
 }

 function withdrawFunds (){
  let amount = parseFloat(prompt("Enter Amount To Withdraw"));
  if(isNaN(amount) || amount <=  0){
    alert("Invaild Withdrawal amount.");
  } else if(amount > balance){
    alert("Insufficient funds Your Curent balance is :"+ balance);
  } else{
    balance -=amount;
    alert("withdrawal successful Your New balance is :₹. "+ balance);
  }
 }

 function returnATm(){
  let choice;
  do{
    choice= displayMenu();
    switch(choice){
      case 1:
        checkBalance();
        break;
        case 2:
          depositFunds();
          break;
          case 3:
            withdrawFunds();
            break;
            case 4:
              alert("Thank you  For Using the ATM");
              break;
              default:
                alert("Invaild choise Please try agin");
    }
  } while(choice !==4);
 }


// function displayMenu (){
//   let choice =prompt(
//     "Welcome To The ATM :" +
//     "1.Check Balance "+
//      "2.Deposit Funds" +
//      "3. Withdraw Funds" +
//        "4. Exit" +
//      "Enter Your Choice"
//   );
//   return PageTransitionEvent(choice);
// }
// function checkBalance(){
//   alert("Your current Balance is $"+ balance);
// }

// function depositFunds(){
//   let amount=parseFloat (prompt("Enter Amonut deposit"));
//    if(isNaN(amount) || amount<= 0){
//     alert("Invaild deposit amount");
//   } else{
//     balance +=amount;
//     alert("Deposit Successful Your New balance is : $" + balance);
//   }
// }

