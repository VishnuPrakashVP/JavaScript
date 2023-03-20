const presentYear = 2023;
let firstName = "Vishnu";
let lastName = "Prakash";
let fullName = firstName + " " + lastName;
const birthYear = "sdadas, sadsa, dasd";
var news = birthYear.split(",").map(word => word.trimStart())
var string = (q) => {
    return `${q.slice(0, q.length - 1)} and ${q.slice(-1)}`; 
}
console.log(string(news))
console.log(news)
let age = presentYear - news;
const grade = 5;

const resultString = `My name is ${fullName}. My age is ${age}. I'm studying in ${grade}th grade.`
console.log(resultString);




