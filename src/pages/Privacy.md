---
layout: ../layouts/LegalLayout.astro
title: Privacy Policy — Havyu AI
description: How Havyu AI collects, uses, and protects your data — workout and habit data, authentication, voice input, AI processing, and diagnostics.
---

# Privacy Policy for Havyu AI

**Last Updated:** 9 June 2026

## 1. Introduction
Welcome to Havyu AI. We are committed to protecting your privacy. This policy explains how our application collects, uses, and protects your information, including workout and habit data, authentication data, voice input, and technical diagnostics.

We are based in the UK and can be contacted at havyulabs@gmail.com.

## 2. Tracking
Havyu AI does **not** track you across other companies' apps or websites, and we do not use the App Tracking Transparency framework. We do not sell your data, and we do not use your data for third-party advertising. Our diagnostic tools are configured to strip personally identifiable information by default.

## 3. Voice Input (Microphone)
We use your microphone only when you choose to log workouts via voice commands. When you dictate a set, your speech is transmitted to your device's native operating system speech-recognition service (Apple or Google) to convert it to text. We do not store or intercept raw audio on our own servers.

To interpret the resulting text into structured sets and reps, that text may be processed by our AI provider, Google Gemini, as described in Section 5 and subject to the same consent. If you have not granted AI consent, or the AI service is unavailable, the text is interpreted on-device instead.

## 4. Camera (Future Feature)
A future version of Havyu AI may offer optional camera-based movement tracking to help count repetitions. This feature is **not active in the current version** of the app, and the app does not request camera access during normal use. If we introduce camera tracking in a future release, all visual processing is designed to happen locally on your device — we will not record, store, or transmit your video feed — and we will update this policy before the feature becomes available.

## 5. AI Coaching & Workout Data
Havyu AI uses Large Language Models (LLMs) to provide coaching insights. To generate your personalized coaching, we transmit your logged **habit and weightlifting data** to our AI provider, Google Gemini, through our own secure server.
* This data is used strictly to generate your in-app coaching experience.
* We do not transmit personally identifiable information (such as your name or email address) alongside this workout data to the LLM provider.
* You will be asked for explicit consent before any data is transmitted to our AI provider for the first time. You may withdraw this consent at any time in **Settings → AI Privacy**, after which AI coaching features fall back to on-device computation only.
* When you log sets using voice, the text transcribed from your spoken commands is also sent to Google Gemini to interpret it into structured sets and reps, subject to the same consent. If you decline consent or the service is unavailable, voice input is interpreted on-device instead.
* We use Google Gemini under Google's **Paid Services** terms. Under those terms Google acts as our data processor: it does not use your prompts or responses to improve or train its products and models, and it processes your data under the Google Cloud Data Processing Addendum, which requires it to protect your data to a standard equivalent to the protections described in this policy.

## 6. Account and Authentication (Optional)
Havyu AI is fully usable without an account. However, you may optionally sign in using **Sign in with Apple** or **Sign in with Google** to enable subscription portability and (in a future version) cloud backup of your data.

If you choose to sign in:
* We receive your email address. If you use Apple's "Hide My Email" feature, we receive a private relay address rather than your real email. If you sign in with Google, your sign-in is handled by Google and is subject to Google's own privacy policy.
* This authentication data is stored by our authentication provider, **Supabase**, on infrastructure located in the EU.
* Your user identifier is shared with our subscription processor, **RevenueCat**, so that your Pro subscription status follows you across devices.
* We do not store any payment information. All payments are processed by your app store — the Apple App Store on iOS or Google Play on Android.

You can sign out at any time from Settings, which removes your session from this device. You can also permanently delete your account and all associated authentication data directly in the app via **Settings → Delete Account**. Alternatively, you may request deletion by contacting havyulabs@gmail.com from your registered email address. We process deletion requests promptly and within 30 days.

## 7. Workout and Habit Data Storage
Your workout sets, habit check-ins, body weight, sleep, mood, and other personal training data are stored **locally on your device** in an SQLite database. This data does not leave your device except:
* When transmitted to Google Gemini for AI coaching (with your consent — see Section 5); or
* When you explicitly use the Export Data feature in Settings to share a copy with yourself.

We do not currently sync your workout data to any cloud server. If we add cloud backup in a future version, we will update this policy and request your explicit opt-in before any sync occurs.

## 8. Subscriptions and Payments (Free / Pro Tiers)
Havyu AI offers both Free and Pro tiers. All payments and subscriptions are processed securely through your app store — the Apple App Store on iOS or Google Play on Android. We do not collect, process, or store your payment information on our servers. Subscription state is managed by **RevenueCat**, our subscription infrastructure provider.

## 9. Diagnostics and Crash Reporting
To ensure a stable experience, we use a third-party diagnostic service (**Sentry**) to capture crash reports and performance data. We configure our tools to strip personally identifiable information by default. This diagnostic data is used only to identify and fix problems and to improve app stability and performance. It is not used to track you and is not linked to your identity where technically avoidable; crash and performance data are associated only with an anonymous device identifier.

## 10. Third Parties and Sub-Processors
We share data with the following third parties to operate Havyu AI:

| Provider | Purpose | Data shared |
|---|---|---|
| Google Gemini | AI coaching | Workout, nutrition, sleep, and mood data, and the text of voice commands when voice logging is used — without name or email (with consent) |
| Supabase | Authentication and (future) cloud sync | Email and user identifier (only if you sign in) |
| RevenueCat | Subscription management | User identifier and entitlement status |
| Sentry | Crash and performance diagnostics | Anonymous diagnostic data |
| Apple / Google Play | App store distribution and in-app payments | Governed by the respective store's own privacy policy |

Of the parties above, Google Gemini, Supabase, and RevenueCat process data on our behalf as data processors and are bound by data-processing terms requiring them to protect your data to a standard equivalent to the protections described in this policy (Google under its Cloud Data Processing Addendum). Sentry receives only anonymous diagnostic data. Apple and Google Play are independent providers of app distribution and in-app payments and handle any data under their own privacy policies.

## 11. Your Rights (GDPR, UK GDPR, CCPA, and similar regulations)
You have the right to:
* **Access** the data we hold about you. Most of your data is on your device — use Settings → Export Data. For authentication data, contact us at havyulabs@gmail.com.
* **Delete** your data. Local data is deleted by uninstalling the app or using the relevant "Clear" options in Settings. Your account and authentication data can be deleted in-app via **Settings → Delete Account**, or by contacting havyulabs@gmail.com.
* **Withdraw consent** for AI coaching at any time in **Settings → AI Privacy**.
* **Object** to specific processing or request data portability — contact us.

## 12. Children's Privacy
**Age Requirement:** You must be at least 16 years of age to use Havyu AI. By downloading or using the app, you confirm that you meet this requirement. We do not knowingly collect data from anyone under 16. If you believe we may have collected data from someone under 16, please contact us at havyulabs@gmail.com so we can promptly delete it.

## 13. Changes to This Policy
We may update this policy from time to time. Material changes will be highlighted in-app on next launch, and the "Last Updated" date at the top of this document will reflect the change. Continued use of Havyu AI after a change constitutes acceptance of the updated policy.

## 14. Contact
If you have any questions regarding your data, please reach out to us at: **havyulabs@gmail.com**
