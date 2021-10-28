const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT != undefined ? process.env.PORT : 8080;
const sqlite3 = require("sqlite3").verbose();
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: process.env.callbackURL
});

var dberror = false;
let db = new sqlite3.Database("./db.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    dberror = err.message;
  }
  console.log("Connected to the database.");
});
app.get("/login", (req, res)=>{
  state = 'some-state-of-my-choice';
  var scopes = ['ugc-image-upload', 'playlist-modify-public', 'user-read-private', 'user-read-email' ,'playlist-modify-public', 'user-library-read'],


// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
res.redirect(authorizeURL);
})
app.get(process.env.cb, (req,res)=>{})
app.listen(port, function(err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
