// const netlifyIdentity = require("netlify-identity-widget");

exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  console.log("===============logging-identity-login===============");

  console.log("\ncontext\n");
  console.log(context);

  console.log("\nevent\n");
  console.log(event);
  console.log("\nuser\n");

  let parsed = JSON.parse(event.body);
  console.log(parsed.user.user_metadata.full_name);

  return {
    statusCode: 200,
  };
};
