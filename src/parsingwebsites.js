import axios from 'axios';
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://gymshark.p.rapidapi.com/2022-12/gymshark/latestproducts',
  headers: {
    'X-RapidAPI-Key': '56498b123bmsh2e0f22b0320239ep14cce8jsn3fe658da82b7',
    'X-RapidAPI-Host': 'gymshark.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.gymshark.com/'; // URL of the site you want to scrape

// axios.get(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const data = [];

//         $('.some-class', html).each(function() {
//             const text = $(this).text();
//             const link = $(this).find('a').attr('href');
//             data.push({
//                 text: text,
//                 link: link
//             });
//         });

//         console.log(data);
//     })
//     .catch(console.error);
