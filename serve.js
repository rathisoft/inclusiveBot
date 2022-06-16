const http = require("https");

const options = {
	"method": "GET",
	"hostname": "google-jobs-search.p.rapidapi.com",
	"port": null,
	"path": "/search?query=Full%20time%20web%20developer%20jobs%20in%20new%20york&remote_jobs_only=false",
	"headers": {
		"X-RapidAPI-Key": "7a507731ffmsh0ca73a9f3583012p111ee4jsnb6d2f3bfe73a",
		"X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();