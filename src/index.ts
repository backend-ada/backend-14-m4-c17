//PARA HACER FUNCIONAR ESTE EJERCICIO CON .THEN(), DESCOMENTAR EL IMPORT DE ABAJO.
// import fetchData from './public-api-then';

// EJERCICIO FUNCIONANDO CON ASYNC/AWAIT.
import fetchData from './public-api-async-await';

// Librería minimist para procesar parámetros de manera sencilla.
import minimist from 'minimist';

function processParams(params: string[]) {
	// Usamos la librería minimist para procesar parámetros.
	const result = minimist(params);

	const { country, pageSize, sources, category } = result;

	if (country || sources || category)
		return {
			country,
			category,
			sources,
			pageSize,
		};

	return false;
}

function main() {
	const userParams = process.argv.slice(2);
	const formattedData = processParams(userParams);

	// Si processParams() retorna false, es porque los mínimos datos necesarios no fueron provistos.
	// Entonces este IF es true y retorna un mensaje de error.
	if (!formattedData) return console.log('Error!');

	// Llamamos a fetchData() y resolvemos la promesa que nos retorna la función.
	// No hace falta convertir a JSON porque ya está hecho dentro del cuerpo de la función fetchData().
	fetchData(formattedData).then((result) => console.log(result));
}

main();
