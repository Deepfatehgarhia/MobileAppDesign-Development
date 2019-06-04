
var accountdetail = [ {"user": "user01","savingaccountnumber":"sv01","chequeaccountnumber":"ch01","otheraccountnumber":"oth01","savingbalance":"500","checkingBalance":"1000","creditlimit":"1000","creditbalance":"500","finalbalance":"2000","other":"0"},
                                  {"user": "user02","savingaccountnumber":"sv02","chequeaccountnumber":"ch02","otheraccountnumber":"oth02","savingbalance":"200","checkingBalance":"1000","creditlimit":"1000","creditbalance":"300","finalbalance":"1900","other":"0"}];

function call(){
localStorage.setItem('accountdetail',JSON.stringify(accountdetail));

};

if(localStorage.getItem("accountdetail") === null){
  call();
}
else{



          var obj=JSON.parse(localStorage.getItem('accountdetail'));

          var loggeduser = JSON.parse(localStorage.getItem('coruser'));

          function validation(value)
          {

           if(value == "Saving"){

              //window.alert(obj[0].user);
               document.getElementById("current").innerHTML = obj[0].savingbalance;
               document.getElementById("totalCredit").innerHTML = obj[0].creditlimit;
                document.getElementById("availableCredit").innerHTML = obj[0].creditbalance;
                }
                else if(value == "Checking"){
                   document.getElementById("current").innerHTML = obj[0].checkingBalance;
                   document.getElementById("totalCredit").innerHTML = obj[0].creditlimit;
                    document.getElementById("availableCredit").innerHTML = obj[0].creditbalance;
                }




          return true;
          }


          function transferFund(){

            var Index1 = document.getElementById("fromaccount");
             var transferFrom = Index1.options[Index1.selectedIndex].value;

             var Index2 = document.getElementById("toaccount");
              var transferTo = Index2.options[Index2.selectedIndex].value;


                     var transferamount=  document.getElementById('amount').value;

                     if(transferFrom == "Checking" && transferTo =="Credit")
                     {
                       var avlCredit = parseInt(obj[0].creditbalance) + parseInt(transferamount);
                       obj[0].creditbalance=avlCredit;



                      var creBal = parseInt(obj[0].checkingBalance) -  parseInt(transferamount);
                      obj[0].checkingBalance=creBal;

                      var finalBal = parseInt(obj[0].checkingBalance)+ parseInt(obj[0].savingbalance)  -  parseInt(transferamount);

                      obj[0].finalbalance=finalBal;

                       localStorage.setItem('accountdetail',JSON.stringify(obj));

                       var abc=JSON.parse(localStorage.getItem('accountdetail'));
                       if(finalBal>0){
                     document.getElementById("balanceamount").innerHTML = abc[0].finalbalance;

                     window.alert("your remaining balance is = "+abc[0].finalbalance);
                   }
                   else{
                     window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
                        }
                  }




                  else if(transferFrom == "Checking" && transferTo =="Saving"){

                             var cheBal = parseInt(obj[0].checkingBalance) -  parseInt(transferamount);
                             obj[0].checkingBalance=cheBal;

                             var savBal = parseInt(obj[0].savingbalance) +  parseInt(transferamount);
                             obj[0].savingbalance=savBal;


                             var finalBal = parseInt(obj[0].checkingBalance)+ parseInt(obj[0].savingbalance) - parseInt(transferamount);

                             obj[0].finalbalance=finalBal;

                              localStorage.setItem('accountdetail',JSON.stringify(obj));

                              var abc=JSON.parse(localStorage.getItem('accountdetail'));
                              if(finalBal>0){
                            document.getElementById("balanceamount").innerHTML = abc[0].finalbalance;

                            window.alert("your remaining balance is = "+abc[0].finalbalance);
                          }
                          else{
                            window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
                               }

                          }
                    else if(transferFrom == "Checking" && transferTo =="other"){

                               var cheBal = parseInt(obj[0].checkingBalance) -  parseInt(transferamount);
                               obj[0].checkingBalance=cheBal;

                               var othBal = parseInt(obj[0].other) +  parseInt(transferamount);
                               obj[0].other=othBal;


                               var finalBal = parseInt(obj[0].checkingBalance)+ parseInt(obj[0].savingbalance) - parseInt(transferamount);

                               obj[0].finalbalance=finalBal;

                                localStorage.setItem('accountdetail',JSON.stringify(obj));

                                var abc=JSON.parse(localStorage.getItem('accountdetail'));
                                if(finalBal>0){
                              document.getElementById("balanceamount").innerHTML = abc[0].finalbalance;

                              window.alert("your remaining balance is = "+abc[0].finalbalance);
                            }
                            else{
                              window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
                                 }

                            }
                    else if(transferFrom == "Saving" && transferTo =="Checking"){

                               var savBal = parseInt(obj[0].savingbalance) -  parseInt(transferamount);
                               obj[0].checkingBalance=cheBal;

                               var cheBal = parseInt(obj[0].checkingBalance) +  parseInt(transferamount);
                               obj[0].savingbalance=savBal;


                               var finalBal = parseInt(obj[0].checkingBalance)+ parseInt(obj[0].savingbalance) - parseInt(transferamount);

                               obj[0].finalbalance=finalBal;

                                localStorage.setItem('accountdetail',JSON.stringify(obj));

                                var abc=JSON.parse(localStorage.getItem('accountdetail'));
                                if(finalBal>0){
                              document.getElementById("balanceamount").innerHTML = abc[0].finalbalance;

                              window.alert("your remaining balance is = "+abc[0].finalbalance);
                            }
                            else{
                              window.alert("Sorry, you don't have sufficient balance to transfer this money. Request you to please enter Correct amount.");
                                 }

                            }



                else if ((transferFrom == "Saving" && transferTo =="Saving")||(transferFrom == "Checking" && transferTo =="Checking")){
                  alert("Both accounts can't be same");
                }
                else{
                  alert("RIght Now you are not allowed to transfer into this accounts.");
                }
          }


          function clearcredit()
          {
                  document.getElementById("balanceamount")=" ";
                document.getElementById("availableCredit")=" ";
                document.getElementById("current")=" ";

                return false;
          }
}
