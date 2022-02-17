const AWS = require("aws-sdk");
const { switchCase } = require("rubico");
const apprunner = new AWS.AppRunner({ apiVersion: "2020-05-15" });

const payload = {
  SourceConfiguration: {
    CodeRepository: {
      RepositoryUrl: "https://github.com/grucloud/grucloud",
      SourceCodeVersion: {
        Type: "BRANCH",
        Value: "main",
      },
      CodeConfiguration: {
        ConfigurationSource: "API",
        CodeConfigurationValues: {
          Runtime: "NODEJS_12",
          BuildCommand: "npm install;npm run bootstrap",
          StartCommand: "npm run start:mock",
          Port: "8089",
          RuntimeEnvironmentVariables: {
            NODE_CONFIG: "'{}'",
          },
        },
      },
    },
    AutoDeploymentsEnabled: false,
    ImageRepository: undefined,
  },
  InstanceConfiguration: {
    Cpu: "1024",
    Memory: "2048",
  },
  HealthCheckConfiguration: {
    Protocol: "TCP",
    Path: "/",
    Interval: 10,
    Timeout: 5,
    HealthyThreshold: 1,
    UnhealthyThreshold: 5,
  },
};

const run = async () => {
  await new Promise((resolve, reject) => {
    apprunner.createService(payload, (error, result) =>
      switchCase([() => error, () => reject(error), () => resolve(result)])()
    );
  });
};

run()
  .then(() => {
    console.log("done");
  })
  .catch(console.error);
