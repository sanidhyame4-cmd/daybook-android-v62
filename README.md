# Daybook v6.2 · Android GitHub Build

This repository packages the **Daybook v6.2 AI-Free Analysis Export** web app as an Android application using Capacitor 7.

## What is included

- The exact v6.2 HTML build in `www/index.html`, including the optimized writing engine, quick-add reset, rule-based calculations, Statistics, and 7-day / 30-day / 90-day AI-analysis report export.
- Android-native file export: JSON backups and Markdown analysis reports open the Android share sheet, so they can be saved to Files/Drive or shared with the AI service you choose.
- Local Android notifications for tasks that have reminders set. The app asks for notification permission when future reminders exist.
- The uploaded white compass-star logo as the launcher icon and notification small icon.
- GitHub Actions workflow that builds a debug APK and uploads it as an artifact.

No Claude integration or AI API is included. Daybook does not send your productivity data to an AI service.

## Build the APK with GitHub

1. Download and extract this ZIP on your computer.
2. Create a new GitHub repository (or use your existing Daybook Android repository).
3. Open the extracted `daybook-android-v6.2` folder. Upload **the contents inside it** to the root of the GitHub repository. The root should contain `package.json`, `capacitor.config.ts`, `www/`, `scripts/`, and `.github/`.
4. Commit the files to the `main` branch.
5. In GitHub, open **Actions** → **Build Daybook Android APK**.
6. Choose **Run workflow** → branch `main` → **Run workflow**.
7. Open the completed workflow run. Under **Artifacts**, download `daybook-v6.2-debug-apk`.
8. Extract that artifact ZIP. Transfer `app-debug.apk` to your Android phone and install it. Allow installation from your browser or file manager if Android asks.

A push to `main` also triggers the workflow automatically.

## Important: move your existing Daybook data

Android app storage is separate from the browser's local storage. Before switching to the installed app:

1. Open your current Daybook v6.2 in the browser.
2. Open Settings → Export backup and save the JSON file somewhere safe.
3. Install and open the Android app.
4. Open Settings → Import backup and select the JSON file.
5. Confirm tasks, categories, ended-day history, settings, and task notes are present before relying on the app as your main copy.

Keep the backup independently. Installing the Android APK does not automatically copy browser data into the app.

## Android export behaviour

- **Export backup** writes a JSON file to the app cache and opens Android's share sheet.
- **Export for AI analysis** creates the selected 7-day, 30-day, or 90-day Markdown file and opens the same share sheet.
- Use the share sheet to save to a file provider such as Drive or Files, or share the report with an AI service yourself.

## Local build (optional)

Requirements: Node.js 22, JDK 21, and Android SDK / platform tools.

```bash
npm install
npm run android:build
```

The debug APK is created at:

`android/app/build/outputs/apk/debug/app-debug.apk`

To open the generated Android project in Android Studio:

```bash
npm run android:setup
npm run android:open
```

## Current scope and limitations

- This package is the Android app build only. The Windows version and cross-device synchronization are not included yet.
- Data remains local to this installation until you export a backup. There is no cloud account or automatic PC synchronization in this build.
- Task reminders need testing on your actual Android device. Notification permission, battery restrictions, and device manufacturer settings can affect delivery. Do not rely on these reminders for safety-critical alerts.
- Inter is requested from Google Fonts when internet is available; the system font fallbacks work offline.
- The GitHub workflow builds a **debug APK**, not a Play Store release-signed APK.

## First-install test checklist

- [ ] App opens and displays Daybook v6.2.
- [ ] Import your JSON backup and verify tasks and history.
- [ ] Add a task, save it, and confirm the quick-add fields reset.
- [ ] Type continuously in the task editor and notes field; check keyboard behaviour.
- [ ] Open Statistics and export each AI-analysis period.
- [ ] Export JSON backup and save it through Android's share sheet.
- [ ] Create a reminder a few minutes in the future and check its notification.
- [ ] Force-close and reopen the app; confirm data remains.

If GitHub Actions fails, share the failed step and its log rather than changing Gradle versions at random.
