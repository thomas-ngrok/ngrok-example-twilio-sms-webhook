## Twilio SMS Webhooks

This guide covers how to use ngrok to integrate your localhost app with [Twilio SMS Webhooks](https://www.twilio.com/docs/usage/webhooks/sms-webhooks). By integrating ngrok with Twilio, you can:

- **Develop and test Twilio webhooks locally**, eliminating the time in deploying your development code to a public environment
- **Secure your app by validating Twilio webhook using ngrok**, letting ngrok handle security leaving more time for developing what really matters
- **Inspect and troubleshoot requests from Twilio** in real-time via the inspection UI and API
- **Modify and Replay Twilio Webhook requests** with a single click and without spending time reproducing events manually in Twilio

### Download and Start the example app
The code for this example can be found on Github here: [https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook](https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook).

To install this example application, run the following commands:<br />
`git clone git@github.com:thomas-ngrok/ngrok-example-twilio-sms-webhook.git`<br />
`cd ngrok-example-twilio-sms-webhook`<br />
`npm install`<br />
`DEBUG=ngrok-example-twilio-sms-webhook:* npm start`<br />

This will start your app on port 3000. You can validate it is up and running by visiting [http://localhost:3000](http://localhost:3000). 

The part we are going to focus on is http://localhost:3000/sms found under /routes/sms.js in your Express example code.

### Download and Launch ngrok with Twilio Webhook Verification

Once your app is running successfully on localhost, let's get it on the internet securely using ngrok's Twilio Webhook Verification! 

1. If you're not a ngrok user yet, just [sign up to ngrok for free](https://ngrok.com/signup)
2. [Download the ngrok agent](https://ngrok.com/download)
3. Go to the [ngrok dashboard](https://dashboard.ngrok.com) and copy your Authtoken. <br />
    **Tip:** The ngrok agent uses the authtoken to log into your account when you start a tunnel.
4. Login to [Twilio Console](https://console.twilio.com/) and copy your Auth Token value.<br />
    **Note:** ngrok Webhook Verification ensures traffic from your Twilio account is the **only traffic allowed** to make calls to your app. Because Twilio signs all Webhooks using the Primary Auth Token, ngrok can verifies the signature of every request and only authorizing requests originating from your Twilio account. 
5. Start ngrok by running the command, replacing {your auth token} with your Twilio Auth Token:
    - `ngrok http 3000 --verify-webhook twilio --verify-webhook-secret {your auth token}`
6. ngrok will display a url where your example applicaiton is exposed to the internet (copy this URL for use with Twilio).<br>
    ![ngrok agent running](/public/images/launch_ngrok_tunnel.png)


### Integrate ngrok and Twilio SMS Webhook
Now that you have your local environment on the internet protected by ngrok's Webhook Verification, let's configure Twilio to call your code.

1. Sign in to your Twilio account.
2. From the Twilio Console, go to **Develop** > **# Phone Numbers** > **Manage** > **Active Numbers** and select a number to add a webhook to.
3. At the bottom of the page, under Messaging, (1) add your ngrok url (don't forget to append /sms) under Webhook and (2) change the type to HTTP Post.
    ![Twilio SMS Webhook Config Screen](/public/images/add_ngrok_url_to_Twilio.png)
4. Save the phone number configuration.

Congrats, everything is configured! Now it's time to test.

### Run Webhooks with Twilio and ngrok

1. Send an SMS message to your Twilio Phone number that was configured in the steps above. 
2. Get excited (and maybe a little scared) when you get a text back saying, **"The Robots are coming! Head for the hills!"**

Congrats! You got an end-to-end example working but there's even more you can do with ngrok that will make development even easier. Check out how to inspect and replay your requests without having to send an SMS. Trust me, you won't regret it.

### Inspecting requests

### Replaying requests
