let DELETECOOKIES = false;

module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'int',
  LOGSDIR: process.env.LOGSDIR || 'logs/logs.txt',
  setDeleteCookies: function(value) {
    DELETECOOKIES = value;
  },
  showDeleteCookies: function(){
    return DELETECOOKIES;
  }
};
