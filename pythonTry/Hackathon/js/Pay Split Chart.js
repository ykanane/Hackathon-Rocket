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

var myConfig = {
  type:"pie",
  title:{
    text:'Pay Split'
  },
  plot:{
   valueBox:{
      fontSize: '10',
      fontColor: '#222222',
      text: "%t\n$%v"
   }
  },
  series:[
    {values:[moneySplit[0]],
    text: names[0] + "'s Share",
      backgroundColor: '#50ADF5'},
    {values:[moneySplit[1]],
    text: names[1] + "'s Share",
    backgroundColor: '#ADF550'},
    {values:[moneySplit[2]],
    text: names[2] + "'s Share",
    backgroundColor: '#F94232'},
  ]
};
  
zingchart.render({ 
 	id : 'paySplit', 
  	data : myConfig, 
  	height: 400, 
  	width: '90%'
});

