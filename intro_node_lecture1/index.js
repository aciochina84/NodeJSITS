// const hello = () => "Hello world!";

// console.log("hello = ", hello());

// const arr1 = [12, 1, 3];

// console.log("arr1 = ", arr1);

// const tot = arr1.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 0);

// console.log("tot = ", tot);

const cart = [
  {
    name: "video card",
    netPrice: 95,
    weight: 100,
    discount: 5,
    quantity: 2,
  },
  {
    name: "motherboard",
    netPrice: 270,
    weight: 900,
    discount: 0,
    quantity: 1,
  },
  {
    name: "ram",
    netPrice: 120,
    weight: 60,
    discount: 10,
    quantity: 2,
  },
  {
    name: "processor",
    netPrice: 400,
    weight: 130,
    discount: 0,
    quantity: 1,
  },
  {
    name: "power supply",
    netPrice: 130,
    weight: 1400,
    discount: 15,
    quantity: 1,
  },
  {
    name: "cpu cooler",
    netPrice: 170,
    weight: 1000,
    discount: 23,
    quantity: 1,
  },
  {
    name: "gpu",
    netPrice: 1600,
    weight: 2500,
    discount: 0,
    quantity: 1,
  },
  {
    name: "case",
    netPrice: 130,
    weight: 3500,
    discount: 30,
    quantity: 1,
  },
];

function getItemPrice(item) {
  return item.netPrice * item.quantity;
}

function getItemDiscount(basePrice, item) {
  return basePrice - basePrice * (item.discount / 100);
}

function setIVA(price) {
  return price + price * 0.22;
}
// * TODO
function calculateWeight(itemsTotalPrice) {
  if (totalWeight > 2000) itemsTotalPrice += 5;
  if (totalWeight > 5000) itemsTotalPrice += 10;
  if (totalWeight > 10000) itemsTotalPrice += 20;

  return itemsTotalPrice;
}

function printObject(totalPrice, COUNTRY_CODE) {
  return {
    "Total Price": totalPrice,
    "Country Code": COUNTRY_CODE,
  };
}

let basePrice = 0;
let totalPrice = 0;
let priceWithDiscount = 0;
let totalWeight = 0;
let COUNTRY_CODE = "IT";

cart.forEach((item) => {
  basePrice = getItemPrice(item);
  totalWeight += item.weight;

  priceWithDiscount = getItemDiscount(basePrice, item);

  totalPrice += priceWithDiscount;
});

if (COUNTRY_CODE === "IT") totalPrice = setIVA(totalPrice);

totalPrice = calculateWeight(totalPrice);

console.log("totalItemsPrice = ", Math.floor(totalPrice));

console.log("Object = ", printObject(totalPrice, COUNTRY_CODE));

// TODO vet calculation

// TODO hello world
