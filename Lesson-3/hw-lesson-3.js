//task 1
	let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = [];
for (let i = 0; i < a.length; i++) {
b[i] = a[i].slice();
	for(let j = 0; j < a[i].length; j++) {
		b[i][j] = a[i][j];
		for (let key in a[i][j]) {
			b[i][j][key] = a[i][j][key]
		}
	}
}

console.log(b);


//так же поиски по просторам интернета привели к двум вариантам, которые решают поставленную задачу

/*Вариант 1
let b = a.map(function cloneArr(el){
    if(Object.prototype.toString.call(el) == "[object Array]"){
        return el.map(cloneArr);
    }
    return el;
});
*/

/*Вариант 2
let c = JSON.stringify(a);
let b = JSON.parse(c);
*/

// task 2

	let cart = [
	{name: "phone", count: 1, price: 19990},
	{name: "screen galss", count: 1, price: 790},
	{name: "car charger", count: 1, price: 490},
	{name: "chewing gum", count: 2, price: 50}
	];
	
	let sum = countBasketPrice(cart);
	console.log(`Сумма товаров в корзине ${sum} рублей`);


	function countBasketPrice(arr) {
		let sumCart = 0;
		let sumProduct;

		for (var i = 0; i < arr.length; i++) {
		sumProduct = arr[i].count * arr[i].price;
		sumCart = sumCart + sumProduct;
		}
		return sumCart;
	} 

// task 3

for (let i = 0; i < 10; i++, console.log(i-1)) {} 

// task 4

let pyramid = [];
for (let i = 0; i < 20; i++) {
pyramid.push("x");
console.log(pyramid.join(""));
}