const { spawn } = require("child_process");

module.exports.accounts = async ({ ...rest }) => {
  const pythonFilePath = "components/model/risk(Depricated!).py";
  return await spawnPython({ pythonFilePath, ...rest });
};

module.exports.tweets = async ({ ...rest }) => {
  const pythonFilePath = "components/model/NewGailModel(Depricated!).py";
  return await spawnPython({ pythonFilePath, ...rest });
};

module.exports.audience = async ({ ...rest }) => {
  const pythonFilePath = "components/model/main.py";
  return await spawnPython({ pythonFilePath, ...rest });
};

module.exports.sentiment = async ({ ...rest }) => {
  const pythonFilePath = "components/model/main.py";
  return await spawnPython({ pythonFilePath, ...rest });
};

const spawnPython = ({ pythonFilePath, ...rest }) =>
  new Promise((resolve, reject) => {
    const python = spawn("python3", [pythonFilePath, ...rest]);

    python.stdout.on("data", (data) => {
      console.log(data);
      resolve(parseFloat(data));
    });

    python.stderr.on("data", (data) => {
      const error = Error("ایراد در سیستم، لطفا بعدا تلاش کنید");
      error.data = data.toString();
      reject(error);
    });
  });
