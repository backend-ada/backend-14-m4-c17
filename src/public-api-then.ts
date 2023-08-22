const API_KEY = '64b8a73f88064c898539139cdf32bf6e';

const API_BASE_URL = new URL(
	`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
);

async function fetchData(dataObj: any): Promise<any> {
	const { country = 'ar', category, sources, pageSize = '5' } = dataObj;

	if (!sources) {
		if (country) API_BASE_URL.searchParams.append('country', country);
		if (category) API_BASE_URL.searchParams.append('category', category);
	} else {
		API_BASE_URL.searchParams.append('sources', sources);
	}

	if (pageSize) API_BASE_URL.searchParams.append('pageSize', pageSize);

	fetch(API_BASE_URL)
		.then((res) => res.json())
		.then((data) => {
			const result = data.articles.map((article: any) => ({
				title: article.title,
				description: article.description,
				author: article.author,
				link: article.url,
			}));

			return result;
		});
}

export default fetchData;
