Package.describe({
    name: 'clinical:sms-messaging',
    version: '0.0.2',
    summary: 'SMS Messaging - Alerts, notifications, 2 factor authentication, patient engagement, etc.',
    git: 'https://github.com/clinical-meteor/example-plugin',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-platform');
    api.use('ecmascript');
    api.use('react-meteor-data@0.2.15');
    api.use('session');
    api.use('mongo');

    api.use('clinical:glass-ui@2.1.6');
    api.use('clinical:base-model@1.3.5');
    if(Package['clinical:fhir-vault-server']){
        api.use('clinical:fhir-vault-server@0.0.3', ['client', 'server'], {weak: true});
    }
     
    api.use('aldeed:simple-schema@1.3.3');
    api.use('aldeed:collection2@2.5.0');
    api.use('simple:json-routes@2.1.0');

    api.addFiles('lib/collection.js');

    api.addFiles('server/methods.js', 'server');
    api.addFiles('server/rest.js', 'server');
    api.addFiles('server/SmsClient.js', 'server');

    api.addFiles('assets/asclepius.png', "client", {isAsset: true});    
    api.mainModule('index.jsx', 'client');
});

// Package.onTest(function (api) {
//     api.use('session');
//     api.use('ecmascript');
//     api.use('meteor-platform');
//     // api.use('tinytest');
  
//     api.addFiles('settings/private/TwilioSettings.js', 'server');
//     api.addFiles('server/SmsClient.js', 'server');
//     api.addFiles('test/sms-test.js', 'server');
// });