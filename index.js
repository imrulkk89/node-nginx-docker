const express = require("express");
const randomNum = require("random-number");

const app = express();

const numGenOptions = { min: 0, max: 1000, integer: true }

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200, 
    message:"Base URL"
  });
});

app.get("/url/1", async (req, res) => {

    const waitTime = randomNum(numGenOptions);    
    await sleep(waitTime);

  return res.status(200).json({
    status: 200,
    message: `Response delayed ${waitTime}`,
  });
});

app.get("/url/2", async (req, res) => {

  const waitTime = randomNum(numGenOptions);    
  await sleep(waitTime);

  return res.status(200).json({
    status: 200,
    message: `Response delayed ${waitTime}`,
  });
});

app.get("/url/3", async (req, res) => {

  const waitTime = randomNum(numGenOptions);    
  await sleep(waitTime);

  return res.status(200).json({
    status: 200,
    message: `Response delayed ${waitTime}`,
  });
});


app.get("/url/4", async (req, res) => {

  const waitTime = randomNum(numGenOptions);    
  await sleep(waitTime);

  return res.status(200).json({
    status: 200,
    message: `Response delayed ${waitTime}`,
  });
});


app.get("/url/5", async (req, res) => {

  const waitTime = randomNum(numGenOptions);    
  await sleep(waitTime);

  return res.status(200).json({
    status: 200,
    message: `Response delayed ${waitTime}`,
  });
});




const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.listen(8080, () => console.log("Server running port 8080"));
