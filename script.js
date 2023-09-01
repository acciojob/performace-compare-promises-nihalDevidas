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
	return 1;
}



let start = performance.now();
let op1 = fetchBy(true);
timeTakenAll = performance.now()-start;
if(op1){
	allTd.innerText = timeTakenAll;
}


let start1 = performance.now();
let op2 = fetchBy(false);
timeTakenAny = performance.now()-start1;

if(op2){
  anyTd.innerText = timeTakenAny;
}

