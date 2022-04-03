const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require("fs");

// const mainUrl = "https://info.zufe.edu.cn/szdw.htm";
const mainUrl = "https://zhuanlan.zhihu.com/p/448915502";
// const mainUrl = "https://weibo.com/2656274875/LgWUkqJqX#repost"

let getData = (url) => {
  superagent.get(mainUrl).end((err, res) => {
    if (err) {
      throw Error(err);
      return;
    }
    // 解析数据cheerio
    // let $ = cheerio.load(res.text, { decodeEntities: false });
    let $ = cheerio.load(res.text);
    const listtimes = $("p");
    const data = [];
    listtimes.each(function (index, d) {
      // console.log(index, $(d).text());
      data.push($(d).text());
    });
    console.log(data);
  });
  console.log("end function");
};

getData(mainUrl);
