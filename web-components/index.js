import './news-article.js';

/* delay until the page is loaded to ensure better user experience
 */
window.addEventListener('load', () => {
	const main = document.querySelector('main');

	const json = fetchNews().then( response => {
		response.articles.forEach( article => {
			const html_element = document.createElement('news-article');
			html_element.article = article;
			main.appendChild(html_element);
		});
	});
});

/* asynchronous function to fetch news from newsAPI
 */
async function fetchNews(){
	const apiKey = "59b7de2a5bf4463bbb9b3996c1721519"
	const response = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=${apiKey}`);
	const json = await response.json();
	
	return json;
};