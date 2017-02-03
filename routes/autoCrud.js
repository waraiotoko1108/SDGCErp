var express = require('express');
var router = express.Router();
var Handlebars =  require('handlebars').create();

/* 所有页面请求的地址 */
router.get('/', function(req, res, next) {
    var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
        "{{kids.length}} kids:</p>" +
        "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
    var template = Handlebars.compile(source);

    var data = { "name": "Alan", "hometown": "Somewhere, TX",
        "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    var result = template(data);
    console.log(result)
});

module.exports = router;
