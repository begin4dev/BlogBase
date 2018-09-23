process.env.NODE_ENV = 'production';
process.env.NODE_PATH = 'src';

const pm2 = require('pm2');

pm2.start({
  script: './src/app.js',
  instances: 0,
}, (err, apps) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log('pm2 app start');
  console.log(apps);
});
