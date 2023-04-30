/* required modules */
const express = require("express");
const fs = require("fs");
const path = require("path");
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");

/* app setup */
const PORT = process.env.PORT || 3001
const app = express();

/* middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* api and html routes */
app.use("/", htmlRoutes)
app.use("/api", apiRoutes)

/* getting server to listen */
app.listen(PORT, () => {
    console.log("http://localhost:${PORT}")
});