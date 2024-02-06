// //console.log(arguments);


// function gree(name) {
//     console.log(arguments);
//     console.log(`Hello ${name}`);
// }

// const greet = function(name) {
//     console.log(arguments);
//     console.log(`Hello ${name}`);
// }

// greet("Andrei");
// const a = greet("Maria");

// const arr = [];
// arr.forEach(function(item) { // funzione anonima function(item)
//     console.log(item);
// });

// arr.forEach((item) => {
//     console.log(item);
// });

// const arr2 = arr.map((item) => {
//     return item * 2;
// });

// const arr3 = arr.map(item => item * 2);

// const result = a > b ? a : b;

// for (let item of arr) {
//     console.log(item);
// }

// const cart = [
// 	{
// 	name: 'ssd',
// 	netPrice: 95,
// 	weight: 100,
// 	discount: 5,
// 	quantity: 2,
//     country: 'Italy'
// 	},
// 	{
// 	name: 'motherboard',
// 	netPrice: 270,
// 	weight: 900,
// 	discount: 0,
// 	quantity: 1,
//     country: 'Germany'
// 	},
// 	{
// 	name: 'ram',
// 	netPrice: 120,
// 	weight: 60,
// 	discount: 10,
// 	quantity: 2,
//     country: 'Italy'
// 	},
// 	{
// 	name: 'processor',
// 	netPrice: 400,
// 	weight: 130,
// 	discount: 0,
// 	quantity: 1,
//     country: 'Germany'
// 	},
// 	{
// 	name: 'power supply',
// 	netPrice: 130,
// 	weight: 1400,
// 	discount: 15,
// 	quantity: 1,
//     country: 'Italy'
// 	},
// 	{
// 	name: 'cpu cooler',
// 	netPrice: 170,
// 	weight: 1000,
// 	discount: 23,
// 	quantity:1,
//     country: 'Germany'
// 	},
// 	{
// 	name: 'gpu',
// 	netPrice: 1600,
// 	weight: 2500,
// 	discount: 0,
// 	quantity: 1,
//     country: 'Italy'
// 	},
// 	{
// 	name: 'case',
// 	netPrice: 130,
// 	weight: 3500,
// 	discount: 30,
// 	quantity: 1,
//     country: 'Germany'
// 	}
// ];

// const country = "Italy";


// for (let i = 0; i < cart.length; i++) {
//     if (cart[i].weight / 1000 > 10) {
//         cart[i].netPrice += 20;
//     }
//     else if (cart[i].weight / 1000 > 5) {
//         cart[i].netPrice += 15;
//     }
//     else if (cart[i].weight / 1000 > 2) {
//         cart[i].netPrice += 7;
//     }

//     if (cart[i].country === 'Italy') {
//         cart[i].netPrice *= 0.22;
//     }
// }

// for (let i = 0; i < cart.length; i++) {
//     console.log("Prodotto: " + cart[i].name + " Prezzo: " + cart[i].netPrice);
// }

const cart = [
	{
	  name: 'ssd',
	  netPrice: 95,
	  weight: 100,
	  discount: 5,
	  quantity: 2,
	  country: 'Italy',
	},
	{
	  name: 'motherboard',
	  netPrice: 270,
	  weight: 900,
	  discount: 0,
	  quantity: 1,
	  country: 'Germany',
	},
	{
	  name: 'ram',
	  netPrice: 120,
	  weight: 60,
	  discount: 10,
	  quantity: 2,
	  country: 'Italy',
	},
	{
	  name: 'processor',
	  netPrice: 400,
	  weight: 130,
	  discount: 0,
	  quantity: 1,
	  country: 'Germany',
	},
	{
	  name: 'power supply',
	  netPrice: 130,
	  weight: 1400,
	  discount: 15,
	  quantity: 1,
	  country: 'Italy',
	},
	{
	  name: 'cpu cooler',
	  netPrice: 170,
	  weight: 1000,
	  discount: 23,
	  quantity: 1,
	  country: 'Germany',
	},
	{
	  name: 'gpu',
	  netPrice: 1600,
	  weight: 2500,
	  discount: 0,
	  quantity: 1,
	  country: 'Italy',
	},
	{
	  name: 'case',
	  netPrice: 130,
	  weight: 3500,
	  discount: 30,
	  quantity: 1,
	  country: 'Germany',
	},
  ];

  function getVat(countryCode) {
	return countryCode === "IT" ? 0.22 : 0;
  }

  function getDiscountPrice(price, discount) {
	return price * (100 - discount) / 100;
  }

  function getVatPrice(price, vat) {
	return price * (1 + vat);
  }

  function getTransportFee(weight) {
	let transporFee = 0;
  	if (weight > 2000) {
		transporFee = 7;
  	}
  	if (weight > 5000) {
		transporFee = 15;
  	}
  	if (weight > 10_000) {
		transporFee = 20;
  	}
  }

  function calculateCartItem(item, vat) {
	const basePrice = item.netPrice * item.quantity;

	const discountPrice = getDiscountPrice(basePrice, item.discount);
	const vatPrice = getVatPrice(discountPrice, vat);

	return {
		name: item,
		quantity: item.quantity,

	}
  }

  function printCartItem(item) {
	console.log(`${item.name} ${vatPrice}`);
  }

  let totalPrice = 0;
  let vat = getVat(COUNTRY_CODE);
  const totalWeight = 0;
  const calculatedItems = cart.map((item) => {
	return calculateCartItem(item, vat);
  });

  calculatedItems.forEach(item => printCartItem(item));

// 	totalPrice += vatPrice;
// 	totalWeight = item.weight * item.quantity;
// 	console.log(`${item.name} ${vatPrice}`);
//   }

let transportFee = getTransportFee(totalWeight);
console.log("🚀 ~ transportFee:", transportFee)

// * acesta este primul comentariu

// * this is another

// ! this is

// ? Salut Lume


// Exercițiul 02-01
// Dezvoltați codul care gestionează calculele unui coș de cumpărături.

// Caracteristici:

// Fiecare element al coșului este un obiect cu acest format:
// let item = {
// Nume: „Numele obiectului”,
// NetPrice: 10, // Preț net
// Greutate: 250, // Greutatea obiectului în grame
// reducere: 10, // reducere aplicată obiectului, poate fi 0
// Cantitate: 2 // Numărul de obiecte de acest tip
//}
// coșul este format dintr -o serie de obiecte ca mai sus
// Dacă greutatea totală a comenzii depășește 2 kg, există un cost de transport de 7 €, peste 5 din 15 € și peste 10 întotdeauna 20 €
// În funcție de dacă achiziția ajunge din Italia sau din străinătate la prețuri, 22% din TVA se aplică
// Obiective:

// Tipăriți lista de articole cu prețul final calculat (reducere și TVA) în consolă
// Calculați prețul total al articolelor și imprimați -l
// Calculați costurile de transport pe baza greutății și imprimați -le
// Scrieți codul astfel încât să verifice prescurtarea țării de destinație, dacă este vorba, aplică 22% din TVA, altfel 0

const arr = arr.reduce()
        const button = document.getElementById('button');