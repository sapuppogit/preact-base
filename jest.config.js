const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/test/setupTests.js"
  ],
  transform: {
    ...tsjPreset.transform
  },
  moduleNameMapper: {
    "\\.(sa|sc|c)ss$": "identity-obj-proxy",
    "\\.(ttf|otf|eot|svg|woff(2)?|png|jpg|mp4)$": "<rootDir>/test/__mocks__/fileMock.js"
  },
  reporters: [ 'default', 'jest-junit' ]
};
