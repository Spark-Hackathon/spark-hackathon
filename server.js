/*
	Spark Hackathon - SERVER CONFIGURATION
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// Import Required Dependencies
const express = require("express")
const app = express()

const axios = require("axios")
const hbs = require("express-handlebars")


// Application Setup
app.use(express.static("public"))
app.set("view engine", "hbs")
app.engine("hbs", hbs({
	extname: "hbs",
	defaultView: "main",
	layoutsDir: `${__dirname}/views/layouts`,
	partialsDir: `${__dirname}/views/partials`
}))


// Routes
app.get("/", async (req, res) => {
	axios.get("http://localhost:8000/pages/hackathon/index")
		.then(result => {
			res.render("index", {
				layout: "main",
				page: result.data
			})
		})
		.catch(err => {
			throw err
		})
})

app.get("/:page", (req, res) => {
	const ROUTE_LOOKUP_TABLE = {
		"about-us": "about",
		"our-sponsors": "sponsors",
		"ping-a-mentor": "ping"
	}

	const PAGE_REQUESTED = ROUTE_LOOKUP_TABLE[req.params.page] || req.params.page

	axios.get(`http://localhost:8000/pages/hackathon/${PAGE_REQUESTED}`)
		.then(result => {
			res.render(PAGE_REQUESTED, {
				layout: "main",
				page: result.data
			})
		})
		.catch(err => {
			throw err
		})
})


// Start Listening
app.listen(8080, () => console.log("Spark Hackathon running on :8000"))
