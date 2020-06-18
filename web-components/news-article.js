class NewsArticle extends HTMLElement {
	set article(article) {
		this.innerHTML = `
			<a href="${article.url}">
				<img src="${article.urlToImage || ''}">
				<h2>${article.title}</h2>
				<p>${article.description || ''}</p>
			</a>`;
	}
}

customElements.define('news-article', NewsArticle);