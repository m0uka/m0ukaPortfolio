const express = require("express");
const hbs = require("express-handlebars");

const cors = require("cors");

// Controllers
const NavController = require("./controllers/NavController");

// Route requires
const home = require("./routes/home");

// Port
const port = 5551;

// App
var app = express();

// Middlewares
app.use(cors());

// View engine
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    layout: 'main',
    defaultLayout: "main",

    helpers: {
        navActive: function (p, options) { 
            if (options.data.root.pathId) {
                var path = options.data.root.pathId.toLowerCase();
                if (path == p) {
                    return "is-active";
                }
                return "";
            }
        }
    }
}));

// Sidebar
app.use(async function (req, res, next) {
    res.locals.nav = await NavController.GetNav(req);
    next();
})

// Routes

// Static files
app.use("/public", express.static("public"));

// Home route
app.use("/", home);

// Port listenning
app.listen(port, function () {
    console.log("m0ukaPortfolio listening on port " + port + "!");
})