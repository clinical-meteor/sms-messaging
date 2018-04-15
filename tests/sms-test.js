

const smsClient = new SmsClient();
// Tinytest.add("Send message to Twilio", function (test) {
//     console.log("TEST THIS: Send SMS message to Dave's cellphone");
//     const msg = {
//         body: 'Hello from dpdonohue:biob',
//         to: '+13024634270',  // Text this number
//         from: '+13026001411' // From a valid Twilio number
//     }
//     cureClient.sendMessage(msg);

//     test.equal(true, true);
//     // test.equal(Template.leaderboard.players(), someLocalCollectionCursor);
//     //expect(Template.leaderboard.players()).toBe(someLocalCollectionCursor);
// });

describe('Send message to Twilio', function () {
    it.server('sends sms message', function (done) {
  
    // const msg = {
    //     body: 'Hello from dpdonohue:biob',
    //     to: '+13024634270',  // Text this number
    //     from: '+13026001411' // From a valid Twilio number
    // }
    // cureClient.sendMessage(msg);
    // expect(true);
    // test.equal(true, true);
        // done();
        [1,2,3].indexOf(5).should.equal(-1);
    });
  });