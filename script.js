
alert("Good morning!");
console.log("Is there any error here?");
var whitecake="White cake with blueberries and other fruits"; //The beautiful white cake with fruits on top
var rubarb="Cake with rubarb";
var marshmallows="Chocolate cake with marshmallows on top";
var biscuit="Biscuit with I love you sign on it";
var present="Make yourself a present!";
var discount="10";
var whitecakeprice="35 EUR";
var rubprice="20";
var marprice="40 EUR";
var bisprice="2";
var preprice="30 EUR";
var person=prompt("Hej! We would like to know you better! What is your favourite cake?");
console.log("whitecake");
console.log("rubarb");
console.log("marshmallows");
console.log("biscuit");
console.log("present");
console.log("Hey! Today we have "+discount+" % discount on "+whitecake+", "+rubarb+" and "+marshmallows+"");
console.log("+person+");
console.log("Today we have "+whitecake+" for "+whitecakeprice+", "+rubarb+" for "+rubprice+" and "+marshmallows+" for "+marprice+"");
var quantity=prompt("How many of "+biscuit+" do you want to buy?");
console.log(quantity);
var total=quantity*bisprice;
console.log(total);
alert("Great, that will cost "+total+" EUR");
var b=10>9;
var z=9>10;
console.log(b);
console.log(z);
var cakeArray=["whitecake","rubarb","marshmallows"];
console.log(cakeArray);
cakeArray[0]="biscuit";
console.log(cakeArray);
cakeArray.push("whitecake"); //adding item at the end of the array
cakeArray.splice(2,0,"present"); //inserting item present at the third place, not removing anything
cakeArray.pop(); //removing the last item from the array
cakeArray.unshift("whitecake"); //adding item in the beginning of the array
console.log(cakeArray[3]); //giving me the fourth item from the array (0,1,2,3)
cakeArray.shift(); //removing the first item from the array
cakeArray.sort(); //sorting items alphabetically
var sentence="I love delicious cakes";
console.log(sentence);
var divided=sentence.split(""); //dividing sentence into single words and spaces and commas
console.log(divided);
divided.sort(); //sorting thing
divided.reverse(); //reversing the sorting
var applepie={
	name:"Applepie with the scrumptious filling and the Double-Crust Pastry",
	price:15,
	currency:"EUR"
}; //creating an object with different properties in it
console.log(applepie);
console.log(applepie.name);
delete applepie.currency; //deleting a property of an object
var applepie2={
	name:"Applepie with soft filling and meringue on top",
	price:15,
	image:"https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/11062097_818113701613685_6593241283371768950_n.jpg?oh=8cff026aefbcf738501d6195ac25111b&oe=5A9084CF"
};
var carrot={
	name:"Super tasty carrot cake with sweet top and nuts",
	price:10,
	image: "https://scontent-frt3-2.xx.fbcdn.net/v/l/t1.0-9/13419124_1048322281926158_5279558969100031085_n.jpg?oh=d4d87d0e5dbc575b1a78661250d642f8&oe=5AD05B7B"
};
var meringue={
	name:"Meringue with lemon curd an kiwi on top",
	price:8,
	image:"https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/12310673_936598593098528_3288443329769782211_n.jpg?oh=1acc4854f1f2bb96bca122d1838df342&oe=5A89F951"
};
var cheesecake={
	name:"Cheesecake with strawberry mousse",
	price:10,
	image:"https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/12345685_936653463093041_3193342811558969079_n.jpg?oh=77031da351ac089c2760cc51a0153308&oe=5A973EA0"
};
var newcakeArray=[cheesecake,meringue,carrot,applepie2];
console.log(newcakeArray);
console.log(newcakeArray[0]); //printing in console first item form the object
//var restaurant={
	//name:"Pierog",
	//seatingCapacity:20,
	//hasDineInSpecial:true,
	//entrees:var entrees=[Russian pierogi,Pierogi with meat,Strawberries pierogi] //crap
//}
//console.log(restaurant);
//console.log(restaurant.entrees);
//resturant.entrees.push("Pierogi z kapusta i grzybami");
console.log(newcakeArray[0]);
console.log(newcakeArray[1]);
console.log(newcakeArray[2]);
console.log(newcakeArray[3]);
for (i=0;i<newcakeArray.length;i++) {
	console.log(newcakeArray[i])
};

for (i=0;i<newcakeArray.length;i++) {
	console.log(newcakeArray[i].name)
};

function printProducts(newcakeArray) {
	for (i=0;i<newcakeArray.length;i++) {
	console.log(newcakeArray[i].name)}};
printProducts(newcakeArray);

function printProducts(newcakeArray) {
	for (i=0;i<newcakeArray.length;i++) {
	console.log(newcakeArray[i].name, newcakeArray[i].price, newcakeArray[i].image)}};
printProducts(newcakeArray);













