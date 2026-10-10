---
layout: ../layouts/LegalLayout.astro
title: Privacy Policy — Havyu
description: How Havyu handles your data — on-device workout and habit logs, Apple Health and Health Connect, AI coaching with your consent, sign-in, subscriptions and diagnostics.
---

# Privacy Policy for Havyu

**Last Updated:** 10 October 2026

## 1. Who We Are
Havyu (previously named Havyu AI) is developed and operated by an individual developer based in the United Kingdom, who is the seller named on the Havyu listing in the Apple App Store and Google Play ("we", "us"). Havyu is not operated by a company. We are the data controller for the personal data described in this policy and can be contacted at **havyulabs@gmail.com**.

This policy explains what information Havyu handles, where it goes, why, how long it is kept, and the choices you have. It covers workout and habit data, health-platform data, AI coaching, voice input, account data, subscriptions, and diagnostics.

## 2. The Short Version
* Your workout and habit data is stored **on your device**. We do not run a cloud copy of it.
* Data leaves your device only for AI coaching (with your explicit consent), for sign-in and subscriptions (if you use them), for anonymous crash reports, or when you export it yourself.
* We do **not** sell your data, use it for advertising, or track you across other companies' apps or websites.
* You can withdraw AI consent, disconnect Apple Health or Health Connect, export your data, or delete your account at any time in the app.

## 3. Tracking and Advertising
Havyu does **not** track you across other companies' apps or websites, and we do not use the App Tracking Transparency framework. We do not sell your data, and we do not use it for advertising or marketing profiling. Our diagnostic tools are configured to strip personally identifiable information by default.

## 4. Workout and Habit Data (On Your Device)
Your workout sets, routines, session times, habit check-ins (such as protein, water, sleep quality, mood, steps, alcohol, caffeine, meals and body weight), habit goals and other training data are stored **locally on your device** in an SQLite database. We cannot see this data. It leaves your device only:
* when sent to our AI provider for coaching, with your consent (Section 7);
* when you use **Export Data** in Settings to save or share a copy yourself.

The app also keeps a short on-device record of the coach's earlier observations (for example, the action it showed for a lift and the weight at the time) so it can follow up with you. It contains no AI-written text, is deleted automatically after 90 days, is included in Export Data, and is removed by Delete Account and by clearing your workout history.

**Importing data.** If you use **Import Data** in Settings to bring in a Havyu backup or a file exported from another app (for example Strong, Hevy or FitNotes), the file is read and processed entirely on your device. It is not uploaded to us. Imported records are stored in the same on-device database and can be undone from the Import Data screen.

We do not currently sync your workout or habit data to any server. If we add cloud backup in a future version, we will update this policy and ask for your explicit opt-in before any sync happens.

## 5. Apple Health and Health Connect (Optional)
You can choose to connect Havyu to **Apple Health** (iOS) or **Health Connect** (Android) in Settings. This is optional, available on the free tier, and off until you turn it on. You choose which permissions to grant in your device's own permission screen.

**What we read:** your **step count** and **body weight**. Nothing else. We do not read sleep, heart rate, nutrition or any other health data.
* After you connect, the app reads today's and yesterday's values each time you open it.
* Once, shortly after connecting, the app also reads your past steps and body weight to fill in your history: up to **365 days on iOS**, and up to **30 days on Android** (the period Health Connect allows).
* Values you enter yourself always take priority. If you edit an imported value, the app will not overwrite it again.
* Health data is read only while the app is open. We do not request background access.

**What we write:** a record of each **completed strength-training session** (activity type, start time and duration), so your workouts appear in your health app. We only write a session when its real start time was recorded.

**Where it goes:** health data is stored on your device with the rest of your habit data. If you have given AI consent, your steps and body weight (whether you entered them or they came from your health app) may be included in the data sent to our AI provider for your coaching, as described in Section 7. This is explained again when you connect.

**What we never do with it:** health data is never used for advertising or marketing, never sold, never shared with data brokers, and never used to train AI models, by us or by our AI provider.

**Health Connect:** Havyu's use of information received from Health Connect adheres to the [Health Connect Permissions policy](https://support.google.com/googleplay/android-developer/answer/12991134), including the Limited Use requirements.

**Disconnecting:** you can disconnect at any time in Settings, and you can revoke permissions in the Health app (iOS) or Health Connect settings (Android). Disconnecting stops all future reads and writes. Values already imported remain in your on-device history until you delete them, and workouts already written stay in your health app until you remove them there.

## 6. Voice Input (Microphone)
We use your microphone only when you choose to log sets by voice. Your speech is converted to text by your device's built-in speech-recognition service (Apple or Google), which may process audio under that provider's own privacy policy. We never receive, store or transmit raw audio.

The resulting text is then turned into structured sets and reps:
* **Free tier:** entirely on your device.
* **Pro (including free trial):** the text is sent to our AI provider, Google Gemini, if you have given AI consent (Section 7). If you have not, or the service is unavailable, it is interpreted on your device instead.

## 7. AI Coaching (Google Gemini)
Havyu uses Google's Gemini large language model to generate coaching insights. AI features require you to sign in (Section 8) so that we can protect the service from abuse.

**Consent first.** You are asked for explicit consent before any data is sent to our AI provider. The consent screen lists exactly what is sent. If we ever change what is sent, we will ask for your consent again before sending it. You can withdraw consent at any time in **Settings → AI Privacy**, after which coaching uses on-device analysis only.

**What is sent, with your consent:**
* your logged workout data (exercises, variants, weights, reps, effort ratings and dates), and summaries computed from it on your device;
* your habit check-ins, such as protein, water, sleep quality, mood, steps, body weight and its trend, calorie status, clean-eating days, alcohol (including number of drinks), caffeine and cheat-meal days, and whether a value came from your health app;
* your habit goals (for example your protein, water and step targets);
* your long-term strength goal and your progress towards it;
* session timing (how long workouts last, the time of day you train, and how hard sessions felt);
* a summary of the coach's own earlier observations about your training, so it can follow up on its advice;
* the text of voice commands, when Pro voice logging is used.

**What is not sent:** your name, email address or account details are never sent to the AI provider with your data.

**How it is sent:** requests travel through our own server (Section 8), which checks that you are signed in and enforces daily usage limits, then forwards the request to Google. Our server does not log or store the content of your requests or the AI's replies.

**Google's role:** we use Gemini under Google's **Paid Services** terms. Under those terms Google acts as our data processor under the Google Cloud Data Processing Addendum. It does not use your prompts or responses to train or improve its models. Google may keep requests for a limited period solely to detect abuse and comply with law, as its terms allow.

AI replies are stored on your device so they don't need to be generated again. They are cleared when the underlying data changes and are removed by Delete Account.

## 8. Account and Sign-In (Optional)
Logging workouts and habits works fully without an account. You need to sign in to use AI features and to carry your Pro subscription across devices. You can sign in with **Sign in with Apple** or **Sign in with Google**.

If you sign in:
* We receive your email address. If you use Apple's "Hide My Email", we receive a private relay address instead. Google sign-in is handled by Google under its own privacy policy.
* Your account is held by our authentication provider, **Supabase**, on servers in the EU.
* Our server records **how many AI requests your account made each day**, linked to your account identifier, to enforce daily limits. It does not record what the requests contained.
* Your account identifier is shared with **RevenueCat** so your Pro status follows you across devices.

You can sign out at any time in Settings. You can permanently delete your account in **Settings → Delete Account**, which deletes your account data held by us and the data stored on your device. You can also request deletion by emailing havyulabs@gmail.com from your registered email address. We complete deletion requests within 30 days.

## 9. Subscriptions and Payments
Havyu has a Free tier and a Pro tier, with a free trial available on some plans. All payments are processed by the Apple App Store or Google Play. We never receive or store your payment details. Subscription status is managed by **RevenueCat**, which receives your purchase and subscription status from the store together with an app user identifier.

## 10. Diagnostics and Crash Reporting
We use **Sentry** to receive crash reports, error reports and performance data so we can find and fix problems. These reports are linked only to a random identifier generated on your device, not to your name, email or account. We configure Sentry to strip personally identifiable information, and AI-generated text and your logged data are not included in these reports.

## 11. Why We Use Your Data (Legal Bases)
Under UK and EU data-protection law, we rely on:
* **Your explicit consent** to send your workout, habit and health data to our AI provider (this data may be health data), and to read from and write to Apple Health or Health Connect. You can withdraw consent at any time. Withdrawal does not affect processing that happened before it.
* **Performance of our contract with you** to provide your account, sign-in and Pro subscription.
* **Our legitimate interests** in keeping the app stable, secure and affordable to run, through anonymous crash reporting and daily AI usage limits. We have weighed these against your privacy and keep the data to the minimum needed.
* **Legal obligations**, where we must keep or disclose information by law.

## 12. Who We Share Data With

| Provider | Purpose | Data shared | Location |
|---|---|---|---|
| Google (Gemini) | AI coaching | The data listed in Section 7, without your name or email (only with consent) | United States and other Google locations |
| Supabase | Sign-in; AI request routing and daily usage limits | Email, account identifier, daily AI request counts (only if you sign in) | European Union |
| RevenueCat | Subscription management | Account or app user identifier, purchase and subscription status | United States |
| Sentry | Crash and performance diagnostics | Anonymous diagnostic data linked to a random device identifier | United States |
| Apple / Google Play | App distribution and in-app payments | Handled under the store's own privacy policy | — |
| Apple Health / Health Connect | Optional health data exchange you control | Completed workout sessions (written); steps and body weight (read) | On your device |

Google, Supabase, RevenueCat and Sentry act as our data processors under data-processing terms that require them to protect your data. Apple and Google Play are independent providers acting under their own policies.

## 13. International Transfers
Some of our providers process data outside the UK and European Economic Area, mainly in the United States. Where this happens, the transfer is protected by recognised safeguards, such as the UK Extension to the EU–US Data Privacy Framework where the provider is certified, or standard contractual clauses with the UK International Data Transfer Addendum. You can contact us for more information about these safeguards.

## 14. How Long We Keep Data
* **On-device data** stays on your device until you delete it, clear it in Settings, delete your account, or uninstall the app.
* **Coach observation record:** deleted automatically after 90 days.
* **Account data (Supabase):** kept until you delete your account.
* **Daily AI usage counts:** kept only as long as needed to enforce limits and prevent abuse, and deleted with your account.
* **Subscription records (RevenueCat):** kept while your account or subscription exists, and afterwards only as long as needed for accounting and legal obligations.
* **Crash reports (Sentry):** deleted automatically under Sentry's retention settings, which we keep to no more than 90 days.
* **AI requests at Google:** not kept by us. Google may keep them for a limited period solely for abuse detection, as described in Section 7.

## 15. Your Rights
Depending on where you live (including under the UK GDPR, EU GDPR and California law), you have the right to:
* **Access** your data. Most of it is on your device; use **Settings → Export Data**. For data linked to your account, email us.
* **Correct** inaccurate data. You can edit your logs directly in the app.
* **Delete** your data. Use the Clear options or **Settings → Delete Account**, uninstall the app, or email us.
* **Withdraw consent** for AI coaching in **Settings → AI Privacy**, and disconnect Apple Health or Health Connect in Settings.
* **Object to** or **restrict** certain processing, and request **data portability** (Export Data provides a portable copy).
* **Complain** to a data-protection authority. In the UK this is the Information Commissioner's Office (ico.org.uk). We'd appreciate the chance to resolve your concern first.

We will not discriminate against you for exercising any of these rights. We respond to requests within one month.

## 16. Children
You must be at least 16 years old to use Havyu. We do not knowingly collect data from anyone under 16. If you believe someone under 16 has given us data, contact havyulabs@gmail.com and we will delete it promptly.

## 17. Security
Your on-device data is protected by your device's own security. Data sent to our server and providers is encrypted in transit. The AI provider's key is held on our server, never in the app. No system is perfectly secure, but we limit what leaves your device to reduce risk.

## 18. Changes to This Policy
We may update this policy as Havyu changes. The "Last Updated" date above will show when it last changed, and material changes will be highlighted in the app. If a change affects data you have consented to share, such as what is sent to our AI provider, we will ask for your consent again before it applies.

## 19. Contact
For any question or request about your data, email **havyulabs@gmail.com**.
