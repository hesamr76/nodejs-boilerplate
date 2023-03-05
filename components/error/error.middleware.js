module.exports.errorHandler = (error, req, res, next) => {
  let status = error.code;
  console.log(error);
  if (!status) {
    status = 500;
  }

  if (error.log !== false) {
    const method = `${req.path} - ${error.message}`;
    const query = `${JSON.stringify(req.query)} - ${JSON.stringify(
      error.stack
    )}`;
    const params = `${req.userId} - ${JSON.stringify(req.params)}`;
    const body = JSON.stringify(req.body);

    console.log(status, method, query, params, body);
    // service.create(status, method, query, params, body);
  }

  switch (status) {
    case 200:
      res.status(status).jsend.fail(error.data);
      break;

    case 401:
      res.status(status).jsend.fail({
        message: error.message,
      });
      break;

    case 400:
    case 403:
    case 406:
      res.status(status).jsend.fail(error.message);
      break;

    default:
      res.status(status).jsend.error(error.message);
  }
};
