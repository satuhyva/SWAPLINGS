module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['FACEBOOK_LOGIN_APP_ID'],
          safe: true,
          allowUndefined: false,
        },
      ],
    ]
  };
};


