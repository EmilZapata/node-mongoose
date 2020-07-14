const yenv = require("yenv");
const mongoose = require("mongoose");
// const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const env = yenv();
const MONGO_URI = env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const { BreakingNew } = require("./models");

//0 */4 * * *
cron.schedule("* * * * * *", async () => {
  console.log("Se ejecuto Job");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().toString(),
      link: $(element).children().attr("href"),
    };

    BreakingNew.create([breakingNew]);
  });
});

// const prueba = new BreakingNew({
//   title:'Oshe si',
//   link:'Brrr'
// })
// prueba.save().then(() => {console.log('se logro')})

// BreakingNew.find().then(console.log)