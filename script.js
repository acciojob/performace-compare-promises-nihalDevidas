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
let timeTaken;

const allTd = document.getElementById("output-all");
const anyTd = document.getElementById("output-any");

let promisrArr = [];
	for(let i=0; i< apiUrls.length; i++){
		let prom = fetch(apiUrls[i]);
		promisrArr.push(prom);
	}

function fetchBy(fetchByAll){
	let start = performance.now();
	let result =fetchByAll ? Promise.all(promisrArr) : Promise.any(promisrArr);
	timeTaken = performance.now()-start;
	    result.then(()=>{
			console.log("data fetch success");
			
		})
	.catch((error)=>{
		console.log("failed to load data");
	})

	
	if(fetchByAll){
		allTd.innerText = timeTaken;
	}
	else{
		anyTd.innerText = timeTaken;
	}
}




fetchBy(true);

fetchBy(false);


// setTimeout(()=>{
// 	allTd.innerText = timeTakenAll;
//     anyTd.innerText = timeTakenAny;
// },2000);


