var express = require('express');

var router = express.Router();

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
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
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



router.get('/typography', function(req, res,next) {
  res.render('typography', { title: 'Express' });
});

router.get('/Ucloud', function(req, res,next) {
  res.render('Ucloud', { title: 'Express' });
});




module.exports = router;
