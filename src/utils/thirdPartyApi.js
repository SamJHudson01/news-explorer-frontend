export const getNewsData = async (searchTerm) => {
    const fetchUrl = `https://nomoreparties.co/news/v2/everything?q=${searchTerm}&from=2023-08-01&sortBy=publishedAt&apiKey=b36c926400374e169b0cd23786a68d8c`;

    const request = await fetch(fetchUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const body = await request.json();
    return body;
}
