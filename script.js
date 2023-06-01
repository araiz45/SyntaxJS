console.log("hello world !");

// Chapter no 1 - Variables & datatype


// Variables in js 

console.log("This repl contains code for the Ultimate JavaScript course video no 2")
var a = 67 // a contains 67
console.log(a)
a = "harry"
console.log(a)
// var 8harry = 7 // Not allowed this will throw an error
// var var = 7

// var , const and var

console.log("JavaScript tutorial 3: var, var and const")
// var a = 45;
// var a = "p"
var b = "Harry";
const author = "Harry"
author = 5 // Throws an error because constant cannot be changed
b = 4
const harry = 0;
var c = null
var d  = undefined  
{
  var b = 'this'
  console.log(b)
}
console.log(b)


// primitive datatype

// nn bb ss u - Primitives in Js
var a = null;
var be = 345;
var ce = true; // can also be false
var de = BigInt("567") + BigInt("3")
var e = "Harry"
var f = Symbol("I am a nice symbol")
var g
console.log(a, be, ce , de, e, f, g)
console.log(typeof ce)

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])



// Chapter no 2 - Expression and conditionals

// Operators in JS



// 77;
// "Harry bhai"
// false
console.log("Operators in Js")
// Arithmetic Operators 
var a = 10;
var b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
var assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// Comparison Operators 
var comp1 = 6;
var comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
var x = 5;
var y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */





// Conditionals in JavaScript


var a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))



// Chapter no 3 - Loops & Functions


// for loops

// Program to add first n natural numbers
var sum = 0
var n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (var i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
var obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (var a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (var b of "Harry") {
  console.log(b)
}
*/


// while loop


// while loop

var n = prompt("Enter the value of n")
n = Number.parseInt(n)

var i = 0;
while(i<n){
  console.log(i)
  i++;
}

// while loop
var n = prompt("Enter the value of n")
n = Number.parseInt(n)

var i = 10;
do{
  console.log(i)
  i++;
}while (i < n) 


// Functions


const hello = () => {
  console.log("Hey how are you. I am toh fine yaar")
  return "hi"
}

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2
}

const sum = (p, q) => {
  return p + q
}

var a = 1;
var b = 2;
var c = 3;
var v = hello();
console.log(v)
console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of b and c is ", onePlusAvg(b, c))
console.log("One plus Average of a and c is ", onePlusAvg(a, c))
console.log(sum(9, 7))



// Chapter no  4 - Strings


// Strings

var name = "Harry"
// console.log(name.length)
console.log(name[0])
console.log(name[1])
var friend = 'Prakash'
console.log(friend)
// var myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
var boy1 = "Pramod"
var boy2 = "Nikhil"
// Nikhil is a friend of Pramod
var sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

Escape Sequence Characters
var fruit = 'Bana\'na'
console.log(fruit)
var fruit = "Bana\"na"
console.log(fruit)


// Strings Method

var name = "Harry"
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace("Har", "Per"))
var friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " Ok"))
var friend2 = "      Meena        "
console.log(friend2)
console.log(friend2.trim())
var fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)
// QuickQuiz: Use a for loop to print a string



// Chapter no 5 - Arrays  

// Arrays
var marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

// Array Method


// Array Methods
var num = [1, 2, 3, 34, 4]
var b = num.toString() // b is now a string 
console.log(b, typeof b)
var c = num.join(" and ")
console.log(c, typeof c)
var r = num.pop() // pop returns the popped element
console.log(num, r)
var r = num.push(56) // push returns the new array length
console.log(num, r)
var r = num.shift()
console.log(r, num) // Removes an element from the start of the array

var r = num.unshift(78)
console.log(r, num)
console.log(r)

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
var num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num.length)
devare num[0]
console.log(num.length)

var newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)

// sort method
var compare = (a, b)=>{
  return b - a
}
var num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare)
num.reverse()
console.log(num)

// Splice and Slice
var num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
var devaredValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num)
console.log(devaredValues)

var newNum = num.slice(3)
var newNum = num.slice(3, 5)
console.log(newNum)



// Array Loops

var num = [3, 5, 1, 2, 4]

for(var i=0; i<num.length;i++){
  console.log(num[i])
}

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
var name = "Harry"
var arr = Array.from(name)
console.log(arr)

// for...of 
for (var item of num){
  console.log(item)
}

// for...in
for (var i in num){
  console.log(num[i])
}


// Map, filter, Reduce


var arr = [45, 23, 21]
// Array map method
var a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
console.log(arr)

// Array filter method
var arr2 = [45, 23, 21, 0, 3, 5]
var a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2, arr2)

// Array reduce method
var arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
var newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)


// Chapter no 6 - JavaScript in the browser

// console objects

console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (var i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

var i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")



// alert prompt and confirm

alert("Enter the value of a!")
var a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
var write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}


// window bom and dom 

window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"


// Chapter 7 - Walking to the dom



// Children

console.log(document.body.firstChild)
console.log(document.body.lastChild)
var arr = Array.from(document.body.childNodes)
console.log(arr)

// Siblings and Parents Elements

console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)


// Element only Navigation

const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

var b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)


// Table 


var t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)



// Searching DOM
// Change the card title to red
var ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

var ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))




// Match closest and contain

var id1 = document.getElementById("id1")
var sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))


// Chapter no 8 - Event and other DOM Properties

// Inner HTML

var x = document.getElementsByTagName('span')[0]
console.log(x)
var y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 
first.outerHTML 
first.outerHTML = "<div>hey</div>"
document.body.firstChild.data 
console.log(document.body.textContent)
first.hidden = false



// Attribute Method

var first = document.getElementById("first");
var a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")
first.removeAttribute("class")
console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)



// Insertion Method


var a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

var div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
a.replaceWith(div);




// insertAdjacentHTML


first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');
first.remove()



// ClassList Methods


first.className = "text-black red"
first.classList.add("red")
first.classList.remove("red")
first.classList.contains("red")
first.classList.toggle("red")



// Set timeout & Set Interval


document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)
setInterval(function() {
  alert("setinterval")
}, 3000)

var a = setTimeout(function() {
  alert("I am inside of settimeout")
}, 5000)

var b = prompt("Do you want to run the settimout?")
if ("n" == b) {
  clearTimeout(a)
}
console.log(a)


// Event 
//  events can be handle in html file
var a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  var b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

// addEventListner


var x = function(event) {
  console.log(event.target)
  console.log(event.type, event.clientX, event.clientY)
  // alert("Hello World1!")
}

var y = function(e) {
  console.log(e)
  alert("Hello World2!")
}

btn.addEventListener('click', x)


btn.addEventListener('click', y)

var a = prompt("What is your favorite number?");


if (a == "2") {
  btn.removeEventListener('click', x)
}




// CHAPTER NO 9 - CALLBACKS, PROMISES AND ASYNC


// Syncronous programming
var a = prompt("What is your name?");
var b = prompt("What is your age?");
var c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming
console.log("Start")
setTimeout(function() {
  console.log("Hey I am good");
}, 3000)
console.log("End")


// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}





// Callback Hell


// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
          console.log("Loaded script with SRC: " + src)
          callback(null, src);
  }
  script.onerror = function() {
          console.log("Error loading script with SRC: " + src);
          callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
          console.log(error)
          return
  }
  alert('Hello World!' + src);
}




loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
  if (error) {
          console.log(error)
          sendEmergencyMessageToCeo();
          return
  }
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
          if (error) {
                  console.log(error)
                  sendEmergencyMessageToCeo();
                  return
          }
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                  if (error) {
                          console.log(error)
                          sendEmergencyMessageToCeo();
                          return
                  }
                  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                          if (error) {
                                  console.log(error)
                                  sendEmergencyMessageToCeo();
                                  return
                          }
                          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                  if (error) {
                                          console.log(error)
                                          sendEmergencyMessageToCeo();
                                          return
                                  }
                                  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                          if (error) {
                                                  console.log(error)
                                                  sendEmergencyMessageToCeo();
                                                  return
                                          }
                                          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                  if (error) {
                                                          console.log(error)
                                                          sendEmergencyMessageToCeo();
                                                          return
                                                  }
                                                  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                          if (error) {
                                                                  console.log(error)
                                                                  sendEmergencyMessageToCeo();
                                                                  return
                                                          }
                                                          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                  })
                                          })
                                  })
                          })
                  })
          })
  })
})
// Chintu

function goodmorning(error, src) {
  
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  alert('Good morning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 




// Introduction to promises

var promise = new Promise(function(resolve, reject) {
  alert("Hello")
  resolve(56)
})

console.log("Hello One")
setTimeout(function() {
  console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)


// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 



// then & catch 


var p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          // console.log("I am a promise and I am resolved")
          resolve(true)
  }, 5000)
})

var p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          // console.log("I am a promise and I am rejected")
          reject(new Error("I am an error"))
  }, 5000)
})

// To get the value
p1.then((value) => {
  console.log(value)
})

// To catch the errors
p2.catch((error) => {
        console.log("some error occurred in p2")
})

p2.then((value)=>{
  console.log(value) 
},(error)=>{
  console.log(error)
})


// Promise Chaning 

var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
          console.log("Resolved after 2 seconds")
          resolve(56)
  }, 2000)
})

p1.then((value) => {
  console.log(value)
  return new Promise((resolve, reject) => {
          setTimeout(() => { resolve("Promise 2") }, 2000)
  }) 
}).then((value) => {
  console.log("We are done")
  return 2
}).then((value)=>{
  console.log("Now we are pakka done")
})



// Multiple Handler Attaching


var p1 = new Promise((resolve, reject) => {
  // alert("Hey I am not resolved")
  setTimeout(() => {
          resolve(1);
  }, 2000)
})

p1.then(() => {
  console.log("Hurray")
  return new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve(4)
          }, 6000)
  })
}).then((value) => { console.log(value) })

p1.then(() => {
  console.log("Congratulations this promise is now resolved")
})




// Promise API


var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
          resolve("Value 1");
  }, 11000);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
          // resolve("Value 2");
          reject(new Error("Error"));
  }, 2000);
});

var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
          resolve("Value 3");
  }, 3000);
});

p1.then((value) => {
        console.log(value)
})

p2.then((value) => {
        console.log(value)
})

p3.then((value) => {
        console.log(value)
})

var promise_all = Promise.all([p1, p2, p3])
var promise_all = Promise.allSettled([p1, p2, p3])
var promise_all = Promise.race([p1, p2, p3])
var promise_all = Promise.resolve(6)
var promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
  console.log(value)
})



// Async Await 


async function harry() {
  var delhiWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("27 Deg")
          }, 2000)
  })

  var bangaloreWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("21 Deg")
          }, 5000)
  })

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)
  console.log("Fetching Delhi Weather Please wait ...")
  var delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)
  console.log("Fetching Bangalore Weather Please wait ...")
  var bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore Weather: " + bangaloreW)
  return [delhiW, bangaloreW]
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
  console.log("Welcome to weather control room")
  var a = await harry()
  var b = await cherry()

}
main1()



// try / catch


setTimeout(()=>{
  console.log("Hacking wifi.... Please wait..." ) 
  }, 1000)
  
  try{
          setTimeout(()=>{ 
                  console.log(rahul)  
          }, 100)
  }
  catch(err){
          console.log("Balle balle")
  }
  
  
  setTimeout(()=>{ 
          console.log("Fetching username and password.... Please wait..." )
  }, 2000) 
  
  setTimeout(()=>{ 
  console.log("Hacking Rahul's facebook id.... Please wait..." )
  }, 3000) 
  
  setTimeout(()=>{ 
  console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
  }, 4000) 


// Error Objects

try {
  var age = prompt("Enter your age")
  age = Number.parseInt(age) 
  if(age>150){
  throw new ReferenceError("This is probably not true")
  }
} catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}

console.log("The script is still running")



// finally 


const f = () => {
  try {
          var a = 0;
          // console.log(program)
          console.log("Program ran successfully")
          return
  }
  catch (err) {
          console.log("This is an error")
          console.log(p)
  }
  finally {
          console.log("I am a good boy")
          // Close the file
          // Exit the Loop
          // Write to the log file
  }
}

f()
console.log("End")




// CHAPTER NO 10 - REQUEST AND STORING DATA

// Fetch API

var p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})


var p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})



// Post Request 

const createTodo = async (todo) => {
  var options = {
          method: "POST",
          headers: {
                  "Content-type": "application/json"
          },
          body: JSON.stringify(todo),
  }
  var p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  var response = await p.json()
  return response
}

const getTodo = async (id) => {
  var response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  var r = await response.json()
  return r
}

const mainFunc = async () => {
  var todo = {
          title: 'Harry2',
          body: 'bhai2',
          userId: 1100,
  }
  var todor = await createTodo(todo)
  console.log(todor)
  console.log(await getTodo(101))
}

mainFunc()


// cookies

console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
var key = prompt("enter your key")
var value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)



// Local Storage


var key = prompt("Enter key you want to set")
var value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}


// Session Storage

sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")
sessionStorage.setItem("name", "harry")
sessionStorage.removeItem("name")


window.onstorage = (e) => {
  alert("changed")
  console.log(e)
}




// CHAPTER NO 11 -- INTRODUCTION TO OBJECT ORIENTED

// Array Prototype
var a = {
  name2: "Harry",
  language: "JavaScript",
  run: () => {
    alert("self run")
  }
}
console.log(a)


var p = {
  run: () => {
    alert("run")
  }
}

p.__proto__ = {
  name: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name)


// Classes and Objects


class RailwayForm {
  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

// Create a form for Harry
var harryForm = new RailwayForm()
// Fill the form with Harry's details
harryForm.fill("Harry", 145316)

// Create a forms for Rohan
var rohanForm1 = new RailwayForm()
var rohanForm2 = new RailwayForm()
// Fill the forms with Rohan's details
rohanForm1.fill("Rohan", 222420)
rohanForm2.fill("Rohan", 2229211)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()


// Constructor

class RailwayForm {
  constructor(givenname, trainno) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " "  + trainno)
    this.name = givenname
    this.trainno = trainno
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
}

// Create & fill a form for Harry
var harryForm = new RailwayForm("Harry", 145316)
// No need to Fill the form with Harry's details
// harryForm.fill()

// Create & fill a forms for Rohan
var rohanForm1 = new RailwayForm("Rohan", 222420)
var rohanForm2 = new RailwayForm("Rohan", 2229211)

 

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()



// Inheritance

class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  run() {
    console.log(this.name + " is running!")
  }
  shout() {
    console.log(this.name + " is barking!")
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana")
  }
  hide() {
    console.log(`${this.name} is hiding`)
  }
}

var ani = new Animal("Bruno", "white")
var m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()
// ani.hide() //This will throw an error




// method overridding
class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

  }
}

var e = new Programmer("Harry")
e.login()
e.requestLeaves(3)





// overriding consturctor

class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

  }
}

var e = new Programmer("Harry")
e.login()
e.requestLeaves(3)



// static method

class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name)
  }
  walk() {
    alert("Animal " + this.name + " is walking")
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
  }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work



// setter and getter

class Animal {
  constructor(name) {
    this._name = name
  }
  fly() {
    console.log("Mai ud rha hu")
  }
  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating carrot")
  }
}

var a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)
var c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)


// CHAPTER NO 12 - ADVANCED JAVASCRIPT


// iife
var a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 4000)
  })
}

(async () => {
  var b = await a()
  console.log(b)
  var c = await a()
  console.log(c)
  var d = await a()
  console.log(d)
})()


// console.log(d) // Throws error



// Destructing


var arr = [3, 5, 8, 9, 12, 14]
// No need to do this:
// var a = arr[0]
// var b = arr[1]
// var [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)
// var [a, , b, ...rest] = arr
// console.log(a, b, rest)
var { a, b } = { a: 1, b: 5 }
// console.log(a, b)

// Spread Operator
var arr1 = [3, 5, 8]
var obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
  return v1 + v2 + v3
}

console.log(sum(...arr1))

var obj2 = {
  name: "Harry",
  company: "Company xyz",
  address: "XYZ"
}

// console.log({ ...obj2, name: "John", company: "ABC" })
console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax




// local global scope

var p = 9
function ax() {
  var a = 8;
  console.log(p)
  console.log(a)
}

ax()
console.log(p)
console.log(a)



// hoisting

// var a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
var greet = function() {
  console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)


// clouses


// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// var c = init();
// c()


function returnFunc() {
  const x = () => {
    var a = 1
    console.log(a)
    const y = () => {
      // var a = 2
      console.log(a)
      const z = () => {
        // var a = 3
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}

var a = returnFunc()
a()




// Arrow Lexical This


const sayHello = name => {
  console.log("greeting" + " " + name)
  console.log("hi")
}

const x = {
  name: "Harry",
  role: "Js Developer",
  exp: 30,
  show: function() {
    // var that = this
    // console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000)
  }
}
sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()