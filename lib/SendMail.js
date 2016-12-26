var sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: true,
  devPort: 2525 // Default: False 
});
module.exports = sendmail;
