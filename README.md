# clinical:sms-messaging

SMS Messaging - Alerts, notifications, 2 factor authentication, patient engagement, etc.

#### Clone this Plugin      

```bash
cd webapp/packages
git clone https://github.com/clinical-meteor/sms-messaging
```


#### Run Meteor on FHIR with your plugin  

```bash
# add your package
meteor add clinical:sms-messaging
meteor npm install

# run with a custom settings file
meteor --settings packages/sms-messaging/configs/settings.example.json
```

### After cloning, need to do this to meteoritize it
```meteor create .```

