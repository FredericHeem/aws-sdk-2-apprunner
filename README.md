This repository reproduces the following issue with AWS AppRunner createService with a source code repository option, as opposed to the docker image option.

```sh
npm install
node index.js
```

```txt
creating service
Error [TypeError]: Cannot read properties of undefined (reading 'ImageIdentifier')
    at ParamValidator.validateStructure (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:60:25)
    at ParamValidator.validateMember (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:89:21)
    at ParamValidator.validateStructure (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:76:14)
    at ParamValidator.validateMember (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:89:21)
    at ParamValidator.validateStructure (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:76:14)
    at ParamValidator.validateMember (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:89:21)
    at ParamValidator.validate (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/param_validator.js:34:10)
    at Request.VALIDATE_PARAMETERS (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/event_listeners.js:132:42)
    at Request.callListeners (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/sequential_executor.js:106:20)
    at callNextListener (/Users/fredericheem/aws-sdk-2-apprunner/node_modules/aws-sdk/lib/sequential_executor.js:96:12) {
  code: 'TypeError',
  time: 2022-02-16T16:22:52.547Z
}

```
