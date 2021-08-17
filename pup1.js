// reddit-scraper.js

const puppeteer = require('puppeteer');

const url = 'http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena';

async function run() {
    try {
        console.log('launching browser...')
        const browser = await puppeteer.launch()
        console.log('new page...')
        const page = await browser.newPage()
        console.log('go to...' + url)
        await page.goto(url)
        console.log('title...' + page._target._targetInfo.title)
        // Wait for the required DOM to be rendered
        console.log('aguarda #resultados...')
        await page.waitForSelector('#conteudoresultado');
        console.log('chegou #resultado!')

        let urls = await page.evaluate(() => {
            let results = [];
            let items = document.querySelectorAll('h2');
            items.forEach((item) => {
                results.push({
                    url:  item.innerHTML,
                    text: item.innerText,
                });
            });
            return results;
        })
        console.log(urls);
        await browser.close()
    } catch (e) {
        console.log(e)
        return { status: 500, 
            payload: { status: 500,
                messagem: "Erro inesperado",
                stack: JSON(e)
            }
        }
    }
}

run()
console.log('end')
