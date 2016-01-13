/*
@ require Json Web Token lib
*/
var JWT = require('jwt');

/*
@ initialize JWT
*/
var payload = {
    name: "Douglas Hennrich"
  , GUID: "67897564534256"
  }
  , header = {
      typ: "JWT"
    , alg: "HS256" // Only tested with HS256
  }
  ;

var jsonToken = new JWT.WebToken( JSON.stringify(payload), JSON.stringify(header));

/*
@ Generate Token with PassKey
*/
var Token = jsonToken.serialize('keyPass');

/*
@ Verify if Token is correct
*/
var Verify = JWT.WebTokenParser.parse(Token).verify('keyPass');

/*
@ 
*/
