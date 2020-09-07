const express = require('express');
const app = express();
const server = require('http').Server(app);

module.exports = function (app, server) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/about', function (req, res) {
        res.render('about');
    });

    app.get('/rules', function (req, res) {
        res.render('rules');
    });

    app.get('/contact', function (req, res) {
        res.render('contact');
    });
    
    app.get('/apply', function (req, res) {
        res.render('apply');
    });

    app.get('/requirements', function (req, res) {
        res.render('requirements');
    });
}
