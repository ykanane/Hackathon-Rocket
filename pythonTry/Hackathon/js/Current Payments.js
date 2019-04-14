var grey = '#CFCFCF';

var rent = 700;
var numOfRoomates = 3;
var names = [numOfRoomates];
var percentSplit = [numOfRoomates];
var moneySplit = [numOfRoomates];

names = ["Joe", "Jeb", "Shirley"];
percentSplit = [35,35,30];

var sum = 0;
for(var i = 0; i<numOfRoomates-1; i++){
   moneySplit[i] = Math.floor(rent*percentSplit[i]/100);
   sum+=moneySplit[i];
}

moneySplit[numOfRoomates-1] = rent-sum;

var moneyPaid = [numOfRoomates];
moneyPaid = [150, 40, 120];

var unPaidPortion = [numOfRoomates];

for(var i = 0; i < numOfRoomates; i++){
   unPaidPortion[i] = moneySplit[i]-moneyPaid[i];
}

var myConfig = {
  type:"pie",
  title:{
    text:'Current Payments'
  },
  plot:{
   valueBox:{
      fontSize: '10',
      fontColor: '#222222',
      text: "%t\n$%v"
   }
  },
  series:[
   {
      values: [moneyPaid[0]],
      text: names[0] + "'s Paid",
      backgroundColor: '#50ADF5'
   },
   {
      values:[unPaidPortion[0]],
      text: names[0] + "'s Remaining",
      backgroundColor: grey},
   {
      values:[moneyPaid[1]],
      text: names[1] + "'s Paid",
      backgroundColor: '#ADF550'},
   {
      values:[unPaidPortion[1]],
      text: names[1] + "'s Remaining",
      backgroundColor: grey},
   {
      values:[moneyPaid[2]],
      text: names[2] + "'s Paid",
      backgroundColor: '#F94232'},
   {
      values:[unPaidPortion[2]],
      text: names[2] + "'s Remaining",
      backgroundColor: grey},
  ]
};
  
zingchart.render({ 
 	id : 'currentPayments', 
  	data : myConfig, 
  	height: 400, 
  	width: '90%'
});