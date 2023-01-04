const bodyParser = require("body-parser");

exports.handler = async function (event, context) {
  let value = event.body === undefined ? 0 : JSON.parse(event.body).value;
  value += 1;

  // return the value
  return {
    statusCode: 200,
    body: JSON.stringify(value),
  };
};
