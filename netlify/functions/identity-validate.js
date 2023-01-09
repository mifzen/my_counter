// const netlifyIdentity = require("netlify-identity-widget");

exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  console.log("===============logging-identity-validate===============");

  console.log("\ncontext\n");
  console.log(context);

  console.log("\nevent\n");
  console.log(event);

  return {
    statusCode: 200,
  };
};
