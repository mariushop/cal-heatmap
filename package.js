Package.describe({
  name: 'mariuspop:cal-heatmap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A javascript module to create a calendar heatmap',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mariushop/cal-heatmap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('d3js:d3@3.5.8');
  api.addFiles(['cal-heatmap.js','cal-heatmap.css'],"client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mariuspop:cal-heatmap');
  api.addFiles('cal-heatmap-tests.js');
});
