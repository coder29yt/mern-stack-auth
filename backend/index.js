const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const { connectDb } = require("./conn");
const routes = require("./routes/route");

connectDb();
app.use(cors());
app.use(express.json());

// we are using routes here
app.use("/api", routes);

app.listen(port, () => console.log(`Server running at port ${port}`));
