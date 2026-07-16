let a =3;
let b =3;

console.log(a != b);


let cash = 1000;

if (cash > 500) {
    console.log("You have enough cash.");
} else if (cash === 500) {
    console.log("You have exactly Rs. 500.");
} else {
    console.log("You need more cash.");
}


let marks = 60;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);

// NOrmal Function
function hand(name) {
    console.log("Hello " + name);
}

hand("Aayush");

// Arrow Function
//


let x = [1,2,3,4,5];

console.log(x[3]);




let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);



fruits.pop();

console.log(fruits);


let ayush = {
    name: "Ayush",
    age: 23,
    address: {
        tole: "kancanbari",
        city: "birtamode",
        country: "Nepal"
    },
    phone: ["1234567890", "0987654321"]
};

console.log(ayush.phone[1]);



let data = [
    "Ram",
    "Hari",
    {
        section: ["A", "B"]
    }
];

console.log(data[2].section[0]);


let students = [
  {
    id: 1,
    name: "Aayush",
    gpa: 3.82,
    course: "BSc CSIT",
    extraCurriculars: ["Debate Team", "Coding Club", "Public Speaking"]
  },
  {
    id: 2,
    name: "Sita",
    gpa: 3.65,
    course: "BCA",
    extraCurriculars: ["Basketball", "Music Club", "Volunteering"]
  }
];

//console.log(students[0].name);                  
//console.log(students[1].gpa);                 
console.log(students[0].extraCurriculars[0]);  
//console.log(students[1].course);                

const numbers = [1, 2, 3, 4, 5];

const even = numbers.every(num => num % 2 === 0);

console.log(even);



const numbe = [1, 2, 3, 4];

const resul = numbe.map(num => num * 2);

console.log(resul);


