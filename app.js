// // forEach method

// const user = [
//   { name: "morsalin" },
//   { name: "abir" },
//   { name: "rakib" },
//   { name: "jonaid" },
// ];

// const forEachUser = user.forEach((value, index, arr) => {
//   return "index is " + index + "=" + value.name + "array is " + arr;
// });

// console.log(forEachUser);

// // map method;

// const userMap = [
//   { name: "morsalin", price: 300 },
//   { name: "abir", price: 400 },
//   { name: "rakib", price: 500 },
//   { name: "jonaid", price: 600 },
// ];

// const getUser = (HtmlTag, whatArray) => {
//   const newUser = whatArray.map((value) => {
//     return `<${HtmlTag}>$${value.price}</${HtmlTag}>`;
//   });
//   return newUser;
// };

// console.log(getUser("div", userMap));

// // fillter method;

// const FilterDoblicateValue = [
//   1,
//   2,
//   3,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   3,
//   2,
//   4,
//   5,
//   2,
//   3,
//   4,
//   5,
//   7,
//   7,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
// ];

// const filterNumbers = FilterDoblicateValue.filter((value, index, arr) => {
//   console.log(arr.indexOf(value) === index);
//   return arr.indexOf(value) === index;
// });
// console.log(filterNumbers);

// // filter all even numbers

// const isEvenNumber = FilterDoblicateValue.filter((value) => {
//   return value % 2 === 0;
// });

// console.log(isEvenNumber);

// // reduce method

// const ReduceNumber = [
//   1,
//   2,
//   3,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   3,
//   2,
//   4,
//   5,
//   2,
//   3,
//   4,
//   5,
//   7,
//   7,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   ,
//   77,
// ];

// const newRreducer = ReduceNumber.reduce((total, value, index, arr) => {
//   console.log(total + value);
//   return (total += value);
// }, 0);

// console.log(newRreducer);

// // get maximum value useing reduce

// const getMaximamValue = ReduceNumber.reduce((acc, value, index, arr) => {
//   if (acc > value) {
//     return acc;
//   } else {
//     return value;
//   }
// }, 0);
// console.log(getMaximamValue);

// // calculate all price with reduce method;

// const userMap2 = [
//   { name: "morsalin", price: 300 },
//   { name: "abir", price: 400 },
//   { name: "rakib", price: 500 },
//   { name: "jonaid", price: 600 },
// ];

// const AppReduce = userMap2.reduce((acc, value, index) => {
//   return (acc = value.price * index);
// });
// console.log(AppReduce);

// slice method;

// const text = "I  am  Mr.Morsalin 😊😊I am a web developer and Programmer";

// let index = 0;

// function writeText(){
//   document.body.innerText = text.slice(0,index);
//   index++;
//   if(index>text.length -1){
//     index = 0;
//   }
// }

// setInterval(writeText,100)

// splice Method ;
