const express = require("express");
const morgan = require("morgan");
const app = express();

//Settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes

//Static

//Starting server

app.listen(app.get("port"), () => {
  console.log(`Server works okay on port: ${app.get("port")}`);
});
