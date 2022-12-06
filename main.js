// task 1
// function logItems(array) {
//    for (const arrayElement of array) {
//       console.log(`${array.indexOf(arrayElement) + 1} - ${arrayElement}`)
//    }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// task 2
// const calculateEngravingPrice = function(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord
//  };
//  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

// task 3
// const findLongestWord = function (string) {
//    let wordLength = "";
//    const words = string.split(" ")
//    for (const word of words) {
//       if (wordLength.length < word.length) {
//          wordLength = word
//       }
//    }
//    return wordLength
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// task 4
// const formatString = function(string) {
//   if(string.length <= 40) {
//    return string
//   } else {
//    return string.slice(0, 40)+'...'
//   }
//  };

//  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//  // вернется оригинальная строка

//  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//  // вернется форматированная строка

//  console.log(formatString('Curabitur ligula sapien.'));
//  // вернется оригинальная строка

//  console.log(formatString(
//      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//    ),
//  );

// task 5
// const checkForSpam = function(message) {
//    const words = message.toLowerCase().split(' ') 
//    console.log(words) 
//       if (words.includes('spam') || words.includes('sale')) {
//          return true
//       } else {
//          return false
//       }  
//  }; 
//  console.log(checkForSpam('Latest technology news')); // false

//  console.log(checkForSpam('JavaScript weekly newsletter')); // false

//  console.log(checkForSpam('Get best sale offers now!')); // true

//  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// task 6
// let alert;
// let total = 0;
// let input = prompt('Нажміть Cancel, або введіть число');
// const numbers = [];

//    total += Number(input)
//    numbers.push(Number(input))

// do {
//    // input = prompt('Нажміть Cancel, або введіть число');
//    if (Number.isNaN(input = prompt('Нажміть Cancel, або введіть число'))) {
//       alert = 'Было введено не число, попробуйте еще раз'
//       console.log(alert)
//    } else {
//       numbers.push(Number(input))
//       total += Number(input);
//    }

// } while (input !== null) {
//    alert = `Общая сумма чисел равна ${total}`
// }

// console.log(numbers)

// task 7
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//    if (login.length >= 4 && login.length <= 16) {
//       return true
//    } else {
//       return false
//    }
// };

// const isLoginUnique = function (allLogins, login) {
//    allLogins = logins
//    for (const oneLogin of allLogins) {
//       if (oneLogin === login) {
//          return true
//       } else {
//          return false
//       }
//    }
// };

// const addLogin = function (allLogins, login) {
//    if (!isLoginValid(login)) {
//       return 'Ошибка! Логин должен быть от 4 до 16 символов'
//    } else if (allLogins.includes(login)) {
//       return 'Такой логин уже используется!'
//    } else {
//       logins.push(login)
//       return 'Логин успешно добавлен!'
//    }
// };

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'


