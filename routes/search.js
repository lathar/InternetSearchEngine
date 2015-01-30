var request = require('request');

exports.searchDetails = function (req,res) {

		req.model = {
        	data : {} 
    };
	request('http://api.duckduckgo.com/?q='+req.body.search+'&format=json&pretty=0', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		req.model.data = JSON.parse(body);
		res.render('search', req.model);
	 	}
	});
}
