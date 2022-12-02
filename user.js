const express = require("express")
const app = express()
app.use(express.static('./views'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/time/measure', (req, res) => {
  let serverStartTime = Number(performance.timeOrigin + performance.now()).toFixed(3) //Used this aspect because performance.timing.navigationStart + performance.now() is depreciated in nodejs 
  let serverEndTime = Number(performance.timeOrigin + performance.now()).toFixed(3)
  res.json({ serverStartTime: `${serverStartTime}`, serverEndTime: `${serverEndTime}` });
});

app.get('/time', (req, res) => {
  res.render('index', { serverStartTime: ``, serverEndTime: `` });
});

app.listen("4000", () => { console.log("Listening on port 4000"); })