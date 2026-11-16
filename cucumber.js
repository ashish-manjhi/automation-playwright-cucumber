module.exports = {
  default: {
    parallel: 1,
    format: [
      'pretty',
      'html:output/reports/report.html',
      'junit:output/reports/report.xml',
    ],
    require: ['step-definitions/**/*.js', 'setup/**/*.js'],
    paths: ['features/**/*.feature'],
  },
};
