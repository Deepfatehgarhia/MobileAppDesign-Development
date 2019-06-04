var accountdetail = {"username":"test",
              "savingbalance":"1000",
              "checkingBalance":"500"
            };

function validation(value)
{
if(value == "Saving"){
      document.getElementById("current").innerHTML = "Saving Balance is "+ accountdetail["savingbalance"];
      }
      else {
      document.getElementById("current").innerHTML = "Checking Balance is "+ accountdetail["checkingBalance"];
}
}


function transferFund(){



  var Index1 = document.getElementById("fromaccount");
   var transferFrom = Index1.options[Index1.selectedIndex].value;

   var Index2 = document.getElementById("toaccount");
    var transferTo = Index2.options[Index2.selectedIndex].value;


           var transferamount=  document.getElementById('amount').value;
           if(transferFrom == "Checking" && transferTo =="Saving"){

             var pendingBal = accountdetail["checkingBalance"]- transferamount;
             if(pendingBal>0){
           document.getElementById("balanceamount").innerHTML = "your remaining balance is ="+ pendingBal.value;
           window.alert("your remaining balance is = "+ pendingBal);
         }
         else{
           window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
         }
           }

        else if(transferFrom == "Saving" && transferTo =="Checking"){
          var pendingBal = accountdetail["savingbalance"]- transferamount;
          if(pendingBal>0){
        document.getElementById("balanceamount").innerHTML = "your remaining balance is = "+ pendingBal;

        window.alert("your remaining balance is = "+ pendingBal);
      }
      else{
        window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
      }

      }
      else{
        alert("Both accounts can't be same");
      }

}
