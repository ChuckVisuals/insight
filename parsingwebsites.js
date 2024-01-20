const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.gymshark.com/'; // URL of the site you want to scrape

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const data = [];

        $('.some-class', html).each(function() {
            const text = $(this).text();
            const link = $(this).find('a').attr('href');
            data.push({
                text: text,
                link: link
            });
        });

        console.log(data);
    })
    .catch(console.error);
