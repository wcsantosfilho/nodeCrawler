const request = require("request");

const uri = 'http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena';
const headers = {
  accept: "*/*",
  "content-type": "application/json",
  app_client: "consumer_web"
};

process.on("warning", e => console.warn(e.stack));

request({ uri, headers, method: "GET", "jar": true }, (err, response, body) => {
  if (!err) {
    console.log(response);

    console.log(err);
  }
});
