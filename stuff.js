	
$(document).ready(function(){
	var $apple = $('#apple');
	var $orange = $('#orange');
	var $banana = $('#banana');
	var $pear = $('#pear');
	var $div = $('div');
	var $p = $('p');
	var $span = $('span');
	//create object constructor for fruit 
	var Fruit = function(type){
		this.type = type;
		this.price = randomNumber(0.5, 9.99);	
	}
	//user object
	var user = {
	money: 100,
	appleBought: [],
	bananaBought: [],
	orangeBought: [],
	pearBought: []
};
	//create fruits
	
	var apple = new Fruit("Apple");
	var orange = new Fruit("Orange");
	var banana = new Fruit("Banana");
	var pear = new Fruit("Pear");
	var fruits = [apple, orange, banana, pear];
		
		$("p.apple").html("$" + apple.price);
		$("p.orange").html("$" + orange.price);
		$("p.banana").html("$" + banana.price);
		$("p.pear").html("$" + pear.price);

setInterval(function() {
	apple.price = updatePrice(apple); 
	;}, 15000);
setInterval(function() {orange.price = updatePrice(orange);}, 15000);
setInterval(function() {banana.price = updatePrice(banana); }, 15000);
setInterval(function() {pear.price = updatePrice(pear); }, 15000);
//price update function
function updatePrice(fruit){
	var name = fruit.type;
	var price = fruit.price;
	
	var increment = randomNumber(0,1);
	
	if (increment == 0){
		price += 0.5;	
	} else {
		price -= 0.5;
	}
	if (price > 9.99) {
		price = 9.99;
	};
	if (price < 0.5) {
		price = 0.5;
	};
	$p.each(function(){
		if (this.id == fruit.type){
			$(this).text("Current Price $" + price);
		} 
	})
	
	return price;
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// $("span.apple").html(apple.price);

$('.applePurchase').on('click', function(e){
	e.preventDefault;
	user.appleBought.push(apple.price);
	user.money -= apple.price;
	$( "div.remainingMoney" ).html( "Remaining $" + user.money );
	$("span.appleQuantityPurchased").html(user.appleBought.length);
	$('span.appleAveragePrice').html(" Average Price $" + ((user.appleBought.reduce(function(a,b){ return a+b;}))/user.appleBought.length));
	console.log(user.money,user.appleBought);
});
$('.orangePurchase').on('click', function(e){
	e.preventDefault;
	user.orangeBought.push(orange.price);
	user.money -= orange.price;
	$( "div.remainingMoney" ).html( "$" + user.money );
	$("span.orangeQuantityPurchased").html(user.orangeBought.length);
	$('span.orangeAveragePrice').html(" Average Price $" + ((user.orangeBought.reduce(function(a,b){ return a+b;}))/user.orangeBought.length));
	console.log(user.money,user.orangeBought);
});

$('.bananaPurchase').on('click', function(e){
	e.preventDefault;
	user.bananaBought.push(banana.price);
	user.money -= banana.price;
	$( "div.remainingMoney" ).html( "$" + user.money );
	$("span.bananaQuantityPurchased").html(user.bananaBought.length);
	$('span.bananaAveragePrice').html(" Average Price $" + ((user.bananaBought.reduce(function(a,b){ return a+b;}))/user.bananaBought.length));
	console.log(user.money,user.bananaBought);
});

$('.pearPurchase').on('click', function(e){
	e.preventDefault;
	user.pearBought.push(pear.price);
	user.money -= pear.price;
	$( "div.remainingMoney" ).html( "$" + user.money );
	$("span.pearQuantityPurchased").html(user.pearBought.length);
	$('span.pearAveragePrice').html(" Average Price $" + ((user.pearBought.reduce(function(a,b){ return a+b;}))/user.pearBought.length));
	console.log(user.money,user.pearBought);
});
});





	//create object constructor for fruit 
// 	var Fruit = function(type){
// 		this.type = type;
// 		this.price = 1;
// 	}

// 	//function to update prices
//   randomNumber(0.5, 9.99);

// 	//create fruits
// 	var apple = new Fruit("Apple");
// 	var orange = new Fruit("Orange");
// 	var banana = new Fruit("Banana");
// 	var pear = new Fruit("Pear");

// 	//display objects on the DOM
// 	var $Fruits = $('#Fruits');
// 	var $li = $('<li>');
// 	var $span = $('<span>');





	
// apple.currentPrice = setInterval(function () {updatePrice(apple)}, 5000);






// 	//create object constructor for user displaying total cash, inventory, and avg purchase price 





// // });


// //price update function
// function updatePrice(object){
// 	var name = object.type;
// 	var price = object.currentPrice || object.price;


// 	console.log("price " + price);

// 	var increment = randomNumber(0,1);

	
// 	if (increment == 0){
// 		price += 0.5;	
// 	} 

// 	else if (increment == 1) {
// 		price -= 0.5;
// 	};

// 	if (price > 9.99) {
// 		price = 9.99;
// 	};

// 	if (price < 0.5) {
// 		price = 0.5;
// 	};

// 	console.log(price);

// 	$li.text(name);
// 	$span.text(" Price: " + price);
// 	$li.append($span);
// 	$Fruits.append($li);

// 	return price;

// }


// 		function randomNumber(min, max) {
// 			return Math.floor(Math.random() * (max - min + 1) + min);
// }

// });

