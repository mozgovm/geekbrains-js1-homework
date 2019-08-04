// task 1

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 - при префиксной форме инкремента значение переменной сначала увеличивается на единицу, а потом это значение присваивается переменной c

d = b++;
alert(d); // ответ 1 - при постфиксной форме инкремента переменной d сначала присваивается значение переменной b, затем значение переменной b увеличивается на единицу

c = (2+ ++a);
alert(c); // ответ 5 - сначала выполняется префиксный инкремент и возвращается новое значение переменной a, затем выполянется операция сложения числа 2 и нового значения переменной a

d = (2+ b++);
alert(d); // ответ 4 - сначала выполняется постфиксный инкремент и возвращается значение переменной b до инкрементации, затем выполняется операция сложения числа 2 и старого значения переменной b

alert(a); // ответ 3 - строка 3: a = 1, строка 4: a = 1 + a = 2, строка 10: a = 1 + a = 3
alert(b); // ответ 3 - строка 3: b = 1, строка 7: b = b + 1 = 2, строка 13: b = b + 1 = 3

// task 2

let a = 2;
let x = 1 + (a *= 2); // ответ x = 5;  (a *= 2 ) = (a = a * 2); a = 4; x = 1 + 4; 

// task 3

//случайным образом генерируем два целых числа от -100 до 100
let a = Math.floor((Math.random() - 0.5) * 101);
let b = Math.floor((Math.random() - 0.5) * 101);
console.log(a);
console.log(b);

if (a >= 0 && b >= 0) {
	let c = a - b;
	alert(c);
} else if (a < 0 && b < 0) {
	let c = a * b;
	alert(c);
} else {
	let c = a + b;
	alert(c);
}

// task 4

	function addition (add1, add2) {
		return add1 + add2;
	}
	function subtraction (minuend, subtrahend) {
		return minuend - subtrahend;
	}
	function multiplication (mult1, mult2) {
		return mult1 * mult2;
	}
	function division (div1, div2) {
		return div1 / div2;
	}

// task 5
/*
попробовал реализовать выбор арифметической функции и параментров для нее через prompt
Известная проблема:
Появление  в консоли ошибки Uncaught TypeError: Cannot read property 'arg1' of undefined
Она возникает если в формы вводить непредусмотренные значения, например оставлять строку пустой
Придумать способ обойти эту ошибку не удалось
*/
let operation = prompt("Введите арифметическую операцию:" + "\n" + "Сложение, вычитание, умножение, деление").toLowerCase()
	let values = receiveValues(operation);
	console.log(values);
	let operatonResult = mathOperation(values.arg1, values.arg2, operation);
	alert(`Результат выбранной операции: ${operatonResult}`);

// непосредственно функция для задания 5
	function mathOperation(arg1, arg2, operation) {
		let result;
				switch (operation) {
					case "сложение":
						result = addition(arg1, arg2);
						break;
					case "вычитание":
						result = subtraction(arg1, arg2);
						break;
					case "умножение":
						result = multiplication(arg1, arg2);
						break;
					case "деление":
						result = division(arg1, arg2);
						break;
		}
	return result;
	}

//функция получения параметров для вычислений - получилось что-то типа велосипеда на костылях
	function receiveValues(operation) {
		let word1;
		let word2;
		switch (operation) {
			case "сложение":
				word1 = "первое слагаемое";
				word2 = "второе слагаемое";
				break;
			case "вычитание":
				word1 = "уменьшаемое";
				word2 = "вычитаемое";
				break;
			case "умножение":
				word1 = "умножаемое";
				word2 = "множитель";
				break;
			case "деление":
				word1 = "делимое";
				word2 = "делитель";
				break;
			default:
				alert("Требуется ввести название одной из перечисленных арифметических операций");
				return;
		}

		let arg1 = +prompt(`Введите ${word1}`);
		let arg1Validation = invalidInput(arg1)
		if (arg1Validation) {
			return;
		}
		let arg2 = +prompt(`Введите ${word2}`);
		let arg2Validation	= invalidInput(arg2) 
		if (arg2Validation) {
			return;
		}

		return {arg1, arg2};
	}

//функция проверки на NaN и пустую строку
	function invalidInput(userInput) {
		if (isNaN(userInput) || userInput === "") {
			alert("Требуется ввести число");
			return true;
		} else {
			return false;
		}
	}