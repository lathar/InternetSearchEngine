var request = require('request');

exports.searchDetails = function (req,res) {

	// console.log('~~~~~~~~~', req.body.search);
	req.model = {
        	data : {} 
    };
	request('http://api.duckduckgo.com/?q='+req.body.search+'&format=json&pretty=0', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			
			req.model.data = JSON.parse(body);
    		// console.log(req.model.data);
			res.render('search', req.model);
		}
	});
}
