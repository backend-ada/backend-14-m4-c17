// Este es un ejemplo para comprobar el orden de ejecución del código y para ver las diferencias entre Async/Await y el encadenamiento de promesas con .then().

const API_KEY = '64b8a73f88064c898539139cdf32bf6e';

const API_BASE_URL = new URL(
	`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=ar&pageSize=1`
);

console.log(1);

fetch(API_BASE_URL)
	.then((res) => res.json())
	.then((data) => console.log('DATOS OBTENIDOS CON THEN'));

console.log(2);

async function getData() {
	console.log(3);

	const response = await fetch(API_BASE_URL);

	console.log(response, 9);

	console.log(4);

	const result = await response.json();
	console.log(result, 999);

	console.log(5);
}

console.log(6);

getData();

console.log(7);
