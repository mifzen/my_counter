// const netlifyIdentity = require("netlify-identity-widget");

exports.handler = async function (event, context) {
  // const identity = await netlifyIdentity.currentUser();
  const { identity, user } = context.clientContext;
  console.log("user:", user);
  console.log("identity:", identity);

  if (!identity || !identity.id) {
    // User is not authenticated, return an error
    console.log("unknown identity");
    return {
      statusCode: 401,
    };
  }
  // User is authenticated, proceed with login
  // Implement your login logic here
  console.log("hello");
};
