var request = require('request');
var cheerio = require('cheerio');

const htmladdress = 'http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena'
// const htmladdress = 'https://www.imdb.com/chart/moviemeter'


var options = {
    url: htmladdress,
    jar: true
  };
  
request(options, function(err, res, body) {
    let $ = cheerio.load(body,{ normalizeWhitespace: false, xmlMode: false, decodeEntities: true });

    if (err) console.log('Erro ' + err);

    $('.listMain > li').each(function () {
        console.log($(this).find('a').attr('href'));
    });

    let title = $('title');
    console.log(title.text());

    // var xpto = $('#conteudoresultado').each(function() {
    //     var title = $(this).find('h2').text().trim();
    //     var xpta = $(this).find('.ng-binding').text().trim();

    //     console.log('h2: ' + title);
    //     console.log('ng: ' + xpta);
    // });
});

console.log('acabou!')
