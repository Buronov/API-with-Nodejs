const express = require('express');
const bodyParse = require("body-parser"); 


const app = express();
app.use(bodyParse.urlencoded({extended: true}))

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {
	var num1 =  Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var math = req.body.math;
	var result = 0;

	if (math === "+") {
		result = num1 + num2;
	} else if (math === "-") {
		result = num1 - num2;
	} else if (math === "*") {
		result = num1 * num2;
	} else if (math === "/") {
		result = num1 / num2;
	} else {
		result = "Something went wrong!!!"
	}

	res.send("Result:" + result);
})


var port  = 2000;
app.listen(port, () => {
	console.log("Your server is running on", port)
})