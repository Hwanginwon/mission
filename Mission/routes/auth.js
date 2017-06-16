
var request = require('request');

var express = require('express');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

require('console-stamp')(console, '[yyyy-mm-dd HH:MM:ss.l]');
var router = express.Router();



var CLIENT_ID: '51775896221-630dd2pqbrpfdadmdghqepqefrv6va92.apps.googleusercontent.com',
var CLIENT_SECRET: 'aGLTOMjxubktJBSFQ8o2r8S7',
var REDIRECT_URI: 'http://127.0.0.1:3000/oauth2callback'

//웹에서 구글 로그인 페이지(로그인테스트용)

router.get('/auth/get_auth_code', function(req, res){
    var s_html = '<html>';

    s_html += '<head></head>';

    s_html += '<body>';

    s_html += '<a href="https://accounts.google.com/o/oauth2/auth?'+

        'client_id='+CLIENT_ID+

        '&redirect_uri='+REDIRECT_URI+

        '&scope=https://www.googleapis.com/auth/plus.login'+

        '&response_type=code">로그인</a>';

    s_html += "</body>";

    s_html += "</html>";
    res.send(s_html);

});

//콜백 테스트용

router.get('/oauth2callback', function(req,res) {
    if(typeof req.query.code != 'undefined')

    {

        console.log("authorization code = " + req.query.code);

        res.send("authorization code = " + req.query.code);

    }

    else if(typeof req.query.access_token != 'undefined')

    {

        console.log("access_token = " + req.query.access_token);

        res.send("access_token = " + req.query.access_token);

    }

    else if(typeof req.query.user_id != 'undefined')

    {

        console.log("user_id = " + req.query.user_id);

        res.send("user_id = " + req.query.user_id);

    }

});

//authorization code -> access_token

router.get('/redeem', function(req,res) {

    var postVal = "grant_type=authorization_code"+

            "&code="+req.query.code+

            "&client_id="+CLIENT_ID+

            "&client_secret="+CLIENT_SECRET+

            "&redirect_uri="+REDIRECT_URI;
    var requestOption = {

        url : "https://www.googleapis.com/oauth2/v4/token",

        headers: {'content-type' : 'application/x-www-form-urlencoded'},

        method : 'POST',

        body : postVal

    }
    request.post(requestOption, function(err, google_res, body) {



        if (err != null) {

            console.error("error");

            return;

        }
  var res_obj = JSON.parse(google_res.body);

        console.log("received access_token : "+res_obj.access_token);

    });



    res.send("authorization code : " + req.query.code);

});
//access_token -> user_uid

router.get('/get_user_id', function(req,res) {



    postVal = 'access_token='+req.query.access_token;



    var requestOption = {

        url : 'https://www.googleapis.com/oauth2/v1/tokeninfo',

        headers : {'content-type' : 'application/x-www-form-urlencoded'},

        method : 'POST',

        body : postVal

    };

    request(requestOption, function(err, google_res, body) {

        if (err != null) {

            console.dir(err);

            //sendModule.SendResult(res, "F", "AC_GOOGLE_REQ_FAIL", "{}");

            return;

        }
        //var g_res = JSON.parse(google_res.body);
  var res_obj = JSON.parse(google_res.body);

        console.log("user_id : "+res_obj.user_id);

    });

});


app.use(function(req, res, next) {

    res.status(404);

    res.render('error', {

        message: '404 : Invalid page request',

        error: {}

    });

});

});
