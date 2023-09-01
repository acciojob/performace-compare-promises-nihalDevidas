// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let timeTakenAll;
let timeTakenAny;
const allTd = document.getElementById("output-all");
const anyTd = document.getElementById("output-any");

let promisrArr = [];
	for(let i=0; i< apiUrls.length; i++){
		let prom = fetch(apiUrls[i]);
		promisrArr.push(prom);
	}

function fetchBy(fetchByAll){
	
	let result =fetchByAll ? Promise.all(promisrArr) : Promise.any(promisrArr);
	    result.then(()=>{
			console.log("data fetch success");
		})
	.catch((error)=>{
		console.log("failed to load data");
	})
}



let start = performance.now();
fetchBy(true);
timeTakenAll = performance.now()-start;


let start1 = performance.now();
fetchBy(false);
timeTakenAny = performance.now()-start1;

setTimeout(()=>{
	allTd.innerText = timeTakenAll;
    anyTd.innerText = timeTakenAny;
},2000);


