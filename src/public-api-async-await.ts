const API_KEY = '64b8a73f88064c898539139cdf32bf6e';

const API_BASE_URL = new URL(
	`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
);

interface FetchDataObject {
	country?: 'string';
	category?: 'string';
	sources?: 'string';
	pageSize?: 'string';
}

interface Article {
	title: 'string';
	description: 'string';
	author: 'string';
	url: 'string';
}

interface Error {
	message: string;
}

// Función asincrónica que retorna una promesa, que cuando se resuelva retorna Article o un Error: Promise<Article | Error>
async function fetchData(dataObj: FetchDataObject): Promise<Article | Error> {
	// Desestructuramos el objeto que llega por parámetro y establecemos valores por defecto para country y pageSize.
	const { country = 'ar', category, sources, pageSize = '5' } = dataObj;

	// Si NO hay fuentes especificadas, entonces evaluá si hay filtro por país y/o por categoría.
	// Esto es para que respetar la documentación de la API.
	if (!sources) {
		if (country) API_BASE_URL.searchParams.append('country', country);
		if (category) API_BASE_URL.searchParams.append('category', category);
		// Si hay fuentes, entonces las tomamos en cuenta para filtrar los datos que nos retorna la solicitud.
	} else {
		API_BASE_URL.searchParams.append('sources', sources);
	}

	// En el caso de que se indique la cantidad de resultados a mostrar por solicitud, lo comprobamos.
	if (pageSize) API_BASE_URL.searchParams.append('pageSize', pageSize);

	try {
		// Intentamos hacer la petición a la API.
		// En caso de algún error, inmediatamente la sentencia catch(error) es ejecutada y el error es capturado en la variable "error".
		const response = await fetch(API_BASE_URL);
		const data = await response.json();

		const result = data.articles.map((article: Article) => ({
			title: article.title,
			description: article.description,
			author: article.author,
			link: article.url,
		}));

		return result;
	} catch (error) {
		// En caso de error retornamos un objeto con el mensaje de error.
		return { message: `${error}` };
	}
}

export default fetchData;
