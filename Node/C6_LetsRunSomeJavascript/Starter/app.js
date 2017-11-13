// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.

const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Yo, we're cooking something up on PORT:", PORT);
});
