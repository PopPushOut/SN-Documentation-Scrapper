const puppeteer = require('puppeteer');
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');
const fs = require("fs");

(async () => {
const extractData = async url => {
  console.log("scrapping: ", url);
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const bodyHTML = await page.evaluate(() => document.querySelector('.dp-api-content').innerHTML);
  const h4 = await page.evaluateHandle(() => {
    return Array.from(document.querySelectorAll('h4'))
            .map(el => el.innerText);
  });
  //console.log(await h4.jsonValue());
  return bodyHTML;
};

const browser = await puppeteer.launch();
const page = await browser.newPage();
const rootUrl = 'https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=no-namespace';
await page.goto(rootUrl);
await page.waitForSelector('#no-namespace a');
const noNamespaceLinks = await page.evaluateHandle(() => {
  return Array.from(document.querySelectorAll('#no-namespace label > a'))
          .map(a => {
            let str = a.getAttribute('js-href');
            let reg = 'app.do#!/api_doc?v=madrid&id=';
            if(str) return str.replace(reg, '');
          });
});
const ids = await noNamespaceLinks.jsonValue();

for (const id of ids) {
  //console.log(id);
  const url = `https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=${id}`;
  const data = await extractData(url);
  console.log(data);
  const gfm = turndownPluginGfm.gfm;
  const turndownService = new TurndownService()
  turndownService.use(gfm);
  const markdown = turndownService.turndown(data);
  console.log(markdown);
  fs.writeFile(`./docs/${id}.md`, markdown, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`file created in: ./docs/${id}.md`);
  });
}
})(); 