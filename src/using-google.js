const Nightmare = require("nightmare")
const nightmare = Nightmare({ show: true })

nightmare
.goto("https://google.com")
// .wait("#1st-ib")
// .click("#1st-ib")
.type("#lst-ib" , "Github nightmare")
.click("#1st-ib")
.evaluate(() => document.querySelector("#1st-ib").href)
.end()
.then(console.log)
.catch(error => {
  console.error("Search failed:", error)
})
