const service = require("./user.service");

module.exports.accounts = async (req, res) => {
  const { ...rest } = req.body;

  const response = await service.accounts({
    ...rest,
  });

  res.jsend.success(response);
};

module.exports.tweets = async (req, res) => {
  const {
    age: agecat,
    numberOfBiops: nbiops,
    firstPeriod: agemen,
    firstChild: ageflb,
    firstDegrees: numrel,
    ...rest
  } = req.body;
  if (
    agecat === undefined ||
    nbiops === undefined ||
    agemen === undefined ||
    ageflb === undefined ||
    numrel === undefined
  ) {
    const error = Error("ابتدا فرم را کامل کنید");
    error.code = 400;
    throw error;
  }

  const response = await service.tweets({
    agecat,
    nbiops,
    agemen,
    ageflb,
    numrel,
    ...rest,
  });

  res.jsend.success(response);
};

module.exports.audience = async (req, res) => {
  const {
    currentAge,
    biopsyWithAtypical: hyperplasia,
    age: agecat,
    numberOfBiops: nbiops,
    firstPeriod: agemen,
    firstChild: ageflb,
    firstDegrees: numrel,
    ...rest
  } = req.body;
  if (
    nbiops === undefined ||
    agemen === undefined ||
    ageflb === undefined ||
    numrel === undefined ||
    hyperplasia === undefined
  ) {
    const error = Error("ابتدا فرم را کامل کنید");
    error.code = 400;
    throw error;
  }

  const response = await service.audience({
    currentAge,
    agecat,
    nbiops,
    agemen,
    ageflb,
    numrel,
    hyperplasia,
    ...rest,
  });

  res.jsend.success(response);
};

module.exports.sentiment = async (req, res) => {
  const {
    currentAge,
    biopsyWithAtypical: hyperplasia,
    age: agecat,
    numberOfBiops: nbiops,
    firstPeriod: agemen,
    firstChild: ageflb,
    firstDegrees: numrel,
    ...rest
  } = req.body;
  if (
    nbiops === undefined ||
    agemen === undefined ||
    ageflb === undefined ||
    numrel === undefined ||
    hyperplasia === undefined
  ) {
    const error = Error("ابتدا فرم را کامل کنید");
    error.code = 400;
    throw error;
  }

  const response = await service.sentiment({
    currentAge,
    agecat,
    nbiops,
    agemen,
    ageflb,
    numrel,
    hyperplasia,
    ...rest,
  });

  res.jsend.success(response);
};
