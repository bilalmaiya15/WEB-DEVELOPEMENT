alert("WelcomeTo HBL")
let pincode = 3535
let userpincode = prompt("Enter Your Pin")
if (pincode = userpincode) {
    console.log("Verified")
    
}
let paisaynikalnehain="yes"
let paisaynikalneayeho = prompt("Paisay Nikalne Hain?  Yes Or No")
if( paisaynikalnehain == paisaynikalneayeho) {
    console.log("thk hai kitny nikalny hen")
}else {
    console.log("to kiu aye ho phr")
}
let salary = 25000;
let atmmachine = 50000;
let withdrawamount= prompt("Enter Your Amount")
   if ("withdrawamount > salary") {
    console.log(salary - withdrawamount)
   } else {
    console.log("Insufficient Balace")
   }
   if (atmmachine > withdrawamount) {
    console.log(atmmachine - withdrawamount)
   } else {
    console.log("Balance Not Available")
   }
