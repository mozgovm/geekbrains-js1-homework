// task 1

	function getNumberCategories (number) {
		if (isNaN(number) || number === "" || number < 0) {
			return alert("Требуется ввести число от 0 до 999");			
		}
		let arrNumber = number.split([,]);
		let categories = {};
		if (arrNumber.length > 3) {
			console.log(`Вы ввели число больше 999`);
			return categories;
		} else if (arrNumber.length < 3) {
			while (arrNumber.length < 3) {
				arrNumber.unshift(0);
			}
		}
		
		categories.units = +arrNumber[2],
		categories.dozens = +arrNumber[1],
		categories.hundreds = +arrNumber[0]
		return categories;
	}

	let number = prompt("Введите число от 0 до 999");
	let res = getNumberCategories(number);
	console.log(res);

// task 2

let Basket = {
	goodlList: [],
	putProduct: function(sourse) {
		for (let i = 0; i < sourse.length; i++) {
			this.goodlList[i] = {};
			for (let key in sourse[i]) {
				this.goodlList[i][key] = sourse[i][key];
				// четность/нечетность товара рассчитывал по значению индекса товара в массиве, если нумеровать товары в корзине не с 0, а с 1, то в  условия if следует указывать ((i + 1) % 2)
				if (i % 2 === 0) {
					this.goodlList[i].count = 1;
				} else {
					this.goodlList[i].count = 2;
				}
			}
		}
		return this.goodlList;
	},
	countTotalPrice: function(sourse) {
		let totalPrice = 0;
		let sumProduct;

		for (let i = 0; i < sourse.length; i++) {
			sumProduct = sourse[i].count * sourse[i].price;
			totalPrice += sumProduct;
		}
		return totalPrice;
	},
	countTotalNumber: function(sourse) {
		let totalNumber = 0;
		for (let i = 0; i < sourse.length; i++) {
			totalNumber += this.goodlList[i].count;
		}
		return totalNumber;
	}
}
let goods = [
	{
		name: "T-shirt",
		price: 200
	},	
	{
		name: "phone",
		price: 19990
	},
	{
		name: "screen galss",
		price: 790
	},
	{
		name: "car charger",
		price: 490
	},
	{
		name: "chewing gum",
		price: 49
	},
		{
		name: "bicycle",
		price: 13499
	},
		{
		name: "toy gun",
		price: 1349
	},
		{
		name: "toothbrush",
		price: 259
	}
];

Basket.putProduct(goods);
let totalPrice = Basket.countTotalPrice(Basket.goodlList);
console.log(`Общая стоимость товаров в корзине: ${totalPrice}`);
let totalNumber = Basket.countTotalNumber(Basket.goodlList);
console.log(`Общее количество товаров в корзине: ${totalNumber}`);