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

const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const urls = [
  'https://www.gymshark.com/pages/shop-women',
  'https://www.gymshark.com/pages/shop-men',
  'https://www.youngla.com/collections/sale'
];

// Function to fetch and process a single URL
async function fetchAndProcess(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Use jsdom to create a DOM environment
    const { window } = new JSDOM(html);
    const { document } = window;

    // Select image elements (adjust as needed based on the HTML structure)
    const imageElements = document.querySelectorAll('img');

    // Iterate over image elements
    imageElements.forEach(imageElement => {
      // Extract image source
      const imageUrl = imageElement.src;

      // Check if the image URL ends with .jpg or .jpeg (case-insensitive)
      if (!imageUrl.toLowerCase().includes('.jpg') && !imageUrl.toLowerCase().endsWith('.jpeg')) {
        return; // Skip this image
      }

      // Log or use the information
      console.log('URL:', url);
      console.log('Image URL:', imageUrl);

      // Start with the parent element and move up the DOM tree until we find an element containing a '$'
      let closestPriceElement = imageElement.parentElement;
      while (closestPriceElement && !closestPriceElement.textContent.includes('$')) {
        closestPriceElement = closestPriceElement.parentElement;
      }

      // Extract price value
      const price = closestPriceElement ? closestPriceElement.textContent.match(/\$\d+(\.\d{1,2})?/)[0] : 'Price not found';

      // Log or use the price information
      console.log('Price:', price);
      console.log('---');
    });
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
