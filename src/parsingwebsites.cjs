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
// const puppeteer = require('puppeteer')
// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage()
//     await page.goto(url)
//     const[el] = await page.$x('//*[@id="MainContent"]/div[1]/section[1]/div[1]')
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();

//     console.log({srcTxt});

//     browser.close()


// }

// scrapeProduct('https://www.gymshark.com/pages/shop-women')




const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 3001; // or any other available port

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const [el] = await page.$x('//*[@id="MainContent"]/div[1]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();
    await browser.close();
    return srcTxt;
}

app.get('/scrape', async (req, res) => {
    const url = req.query.url; // Pass the URL as a query parameter
    try {
        const data = await scrapeProduct(url);
        res.json({ data });
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







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
