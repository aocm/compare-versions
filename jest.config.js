module.exports = {
    verbose: true
};

module.exports = {
    transform: {
        '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',
    },
    moduleFileExtensions: ['js'] // テスト対象の拡張子を列挙する
  }