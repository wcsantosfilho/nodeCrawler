// reddit-scraper.js

const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena';

puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
        return page.goto(url).then(function () {
            return page.content();
        });
    })
    .then(html => {
        const $ = cheerio.load(html);
        const newsHeadlines = [];
        $('#conteudoresultado').each(function () {
            newsHeadlines.push({
                title: $(this).find('h2').text().trim(),
            });
        });

        console.log(newsHeadlines);
    })
    .catch(console.error);