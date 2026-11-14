module.exports = {
  default: {
    parallel: 1,
    format: ['pretty', 'html:output/report.html', 'junit:output/report.xml'],
    require: ['step-definitions/**/*.js', 'setup/**/*.js'],
    paths: ['features/**/*.feature'],
  },
};
