const external = require("./user.external");

module.exports.accounts = async ({ ...rest }) => {
  const result = await external.accounts({ ...rest });

  return { result };
};

module.exports.tweets = async ({ ...rest }) => {
  const result = await external.tweets({
    ...rest,
  });

  return { result };
};

module.exports.audience = async ({ ...rest }) => {
  const result = await external.audience({
    ...rest,
  });

  return { result };
};

module.exports.sentiment = async ({ ...rest }) => {
  const result = await external.sentiment({
    ...rest,
  });

  return { result };
};
