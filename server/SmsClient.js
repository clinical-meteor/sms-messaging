import twilio from 'twilio';

console.log("BiobSettings=", BiobSettings);

class SmsClientClass {

    constructor() {        
        this.client = new twilio(BiobSettings.accountSid, BiobSettings.authToken);
    }

    sendMessage(msg) {
        this.client.messages.create(msg)
        .then((message) => console.log(message.sid));
    }

}

SmsClient = SmsClientClass;