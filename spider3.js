var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    var url = "http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena";
    page.open(url, function() {
      page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
          $('#conteudoresultado').each(function () {
            console.log($(this).find('h2').texto());
          });
        }, function(){
          ph.exit()
        });
      });
    });
  });
});