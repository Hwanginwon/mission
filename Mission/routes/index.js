var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

var CLIENT_ID = '51775896221-630dd2pqbrpfdadmdghqepqefrv6va92.apps.googleusercontent.com';

var CLIENT_SECRET = 'aGLTOMjxubktJBSFQ8o2r8S7';

var REDIRECT_URI = 'http://127.0.0.1:3000/oauth2callback';



출처: http://eventhorizon.tistory.com/26 [프로그래밍]
app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

/* GET home page. */

router.get('/get_auth_code', function(req, res){



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

router.get('/addcloud', function(req, res,next) {
  res.render('addcloud', { title: 'Express' });
});

router.get('/AmazonDrive', function(req, res,next) {
  res.render('AmazonDrive', { title: 'Express' });
});

router.get('/blank', function(req, res,next) {
  res.render('blank', { title: 'Express' });
});

router.get('/buttons', function(req, res,next) {
  res.render('buttons', { title: 'Express' });
});


router.get('/Dropbox', function(req, res,next) {
  res.render('Dropbox', { title: 'Express' });
});

router.get('/explorer', function(req, res,next) {
  res.render('explorer', { title: 'Express' });
});

router.get('/forms', function(req, res,next) {
  res.render('forms', { title: 'Express' });
});



router.get('/GoogleDrive', function(req, res,next) {
  res.render('GoogleDrive', { title: 'Express' });
});


router.get('/grid', function(req, res,next) {
  res.render('grid', { title: 'Express' });
});

router.get('/icons', function(req, res,next) {
  res.render('icons', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/information', function(req, res,next) {
  res.render('information', { title: 'Express' });
});

router.get('/login', function(req, res,next) {
  res.render('login', { title: 'Express' });
});


router.get('/notifications', function(req, res,next) {
  res.render('notifications', { title: 'Express' });
});

router.get('/OneDrive', function(req, res,next) {
  res.render('OneDrive', { title: 'Express' });
});


router.get('/panels-wells', function(req, res,next) {
  res.render('panels-wells', { title: 'Express' });
});

router.get('/setting', function(req, res,next) {
  res.render('setting', { title: 'Express' });
});

router.get('/tables', function(req, res,next) {
  res.render('tables', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/typography', function(req, res,next) {
  res.render('typography', { title: 'Express' });
});

router.get('/Ucloud', function(req, res,next) {
  res.render('Ucloud', { title: 'Express' });
});





module.exports = router;
