# Partytime (Remastered)

Scared of Zoom bombing over a static link? Partytime (Remastered) is your savior. 

## Setting Up

### Step 1: Zapier

Please make a copy of this [sample Zapier zap]. Customize the following:

1. In the trigger, record your own Webhook URL. It should look like: `https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXXX/`.
1. In the "Authentication" step, change the value after "(Text) Exactly Matches) to a randomized string. Keep that string safe.
1. In the "Create a Meeting in Zoom" step, authorize with the Zoom account you want to create meetings with.
1. In the "Rebrandly Link" section, create a new link on [Rebrandly](https://rebrandly.com) and associate it with the Zap.
1. In the "Send Channel Message in Slack" step, authenticate with your Zoom account and set a channel to send a notification to.

### Step 2: Instance

Get this app running on Heroku. You'll need to set the following environment variables: 

```
STATIC_URL=[THE REBRANDLY LINK IN #4 ABOVE]
ZAPIER_HOOK=[THE ZAPIER WEBHOOK IN #1 ABOVE]
ZAPIER_HASH=[THE AUTHENTICATION STRING IN #2 ABOVE]
USERNAME=[A USERNAME OF YOUR CHOICE]
PASSWORD=[A PASSWORD OF YOUR CHOICE]
```

You're good to go!

### Step 3: Run

1. Make sure your visitors can directly visit the root path of this app. For example, `partytime.hackclub.com`.
2. If you need to flush the current meeting away and create a new one, hit `/new` and login with your static auth values set in the environment variable. **Note that you can only have one partytime call going at once.**

