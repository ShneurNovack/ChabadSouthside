document.addEventListener('DOMContentLoaded', function() {
    // List of URLs to fetch content from
    const urls = [
        '/templates/articlecco_cdo/aid/6484208/jewish/Holidays.htm',
        '/templates/articlecco_cdo/aid/6484211/jewish/Classes.htm',
        '/templates/articlecco_cdo/aid/6484250/jewish/Programs.htm'
    ];

    // Function to fetch and parse HTML
    const fetchAndParseHTML = async (url) => {
        try {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const articles = doc.querySelectorAll('.article_index_container .row.clearfix');
            const result = [];

            articles.forEach(article => {
                const titleElement = article.querySelector('.title a');
                const dateElement = article.querySelector('.subtitle');
                const imageElement = article.querySelector('.synopsis_icon img');

                if (titleElement && dateElement && imageElement) {
                    const title = titleElement.innerText.trim();
                    const date = dateElement.innerText.trim();
                    const image = imageElement.src;

                    result.push({
                        Title: title,
                        Date: date,
                        Image: image
                    });
                }
            });

            return result;
        } catch (error) {
            console.error('Error fetching and parsing HTML:', error);
            return [];
        }
    };

    // Fetch all URLs and parse their content
    const fetchAllContent = async () => {
        const allResults = [];

        for (const url of urls) {
            const results = await fetchAndParseHTML(url);
            allResults.push(...results);
        }

        // Log the JSON structure to the console
        console.log(JSON.stringify(allResults, null, 2));
    };

    // Start fetching the content
    fetchAllContent();
});
