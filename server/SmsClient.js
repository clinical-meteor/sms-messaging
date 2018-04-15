import twilio from 'twilio';

console.log("TwilioSettings=", TwilioSettings);

class SmsClientClass {

    constructor() {        
        this.client = new twilio(TwilioSettings.accountSid, TwilioSettings.authToken);
    }

    sendMessage(msg) {
        this.client.messages.create(msg)
        .then((message) => console.log(message.sid));
    }

}

SmsClient = SmsClientClass;