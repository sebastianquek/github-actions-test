'use strict';

module.exports.hello = async (event) => {
  const vars = {
    offline_var_1: process.env.OFFLINE_VAR_1,
    github_secrets_var_1: process.env.SECRET_VAR,
    github_secrets_var_2: process.env.NOT_SO_SECRET_VAR,
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `vars: ${JSON.stringify(vars)}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
