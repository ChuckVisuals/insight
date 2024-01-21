// import axios from 'axios';
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://gymshark.p.rapidapi.com/2022-12/gymshark/latestproducts',
//   headers: {
//     'X-RapidAPI-Key': '56498b123bmsh2e0f22b0320239ep14cce8jsn3fe658da82b7',
//     'X-RapidAPI-Host': 'gymshark.p.rapidapi.com'
//   }
// };

// async function main() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();
// Example URL to get HTML from
// Example URL to get HTML from

const urls = ['https://www.gymshark.com/pages/shop-women', 'https://www.gymshark.com/pages/shop-men', 'https://www.youngla.com/collections/sale'];

// Function to fetch and process a single URL
async function fetchAndProcess(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Use a regular expression to find prices (assuming they contain $)
    const priceRegex = /\$\d+(\.\d{1,2})?/g;
    const prices = html.match(priceRegex) || [];

    // Log the extracted prices to the console
    console.log('Prices for', url, ':', prices);

    // If you're working in a browser, you can also display them on the webpage
    // For example, assuming you have an HTML element with id="output"
    // document.getElementById('output').innerHTML += prices.join('<br>') + '<br>';
  } catch (error) {
    console.error('Error fetching HTML:', error);
  }
}

// Loop over the URLs and fetch each one
urls.forEach(fetchAndProcess);
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
