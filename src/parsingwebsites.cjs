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

const urls = ['https://www.gymshark.com/pages/shop-women', 'https://www.gymshark.com/pages/shop-men', 
'https://www.youngla.com/collections/sale', 'https://www.rawgear.com/collections/december-sale', 'https://inakapower.com/collections/sale', 
'https://www.nike.com/w/sale-3yaep', 'https://shop.lululemon.com/c/sale/_/N-8t6?cid=Google_PPC_US_NAT_EN_X_BrandIncr_All-Brand_GEN_Y23_ag-PPC_G_US_EN_DM_X_GEN_ALL_lululemon-Sale&gad_source=1&gclid=Cj0KCQiA-62tBhDSARIsAO7twbaTG-jCJC-du1APiDvmJH0nyxte63mcwnHn82wIyLKyyQmp-VFd02QaAp4rEALw_wcB&gclsrc=aw.ds', 
'https://www.underarmour.com/en-us/c/outlet/', 'https://www.fabletics.com/', 'https://www.newbalance.com/sale/', 'https://www.adidas.com/us/sale', 'https://www.asics.com/us/en-us/clearance/c/aa60000000/' ];

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
