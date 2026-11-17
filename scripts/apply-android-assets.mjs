import { cp, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const androidRes = 'android/app/src/main/res';
if (!existsSync(androidRes)) throw new Error('Android resources directory not found. Run Capacitor setup first.');
await cp('android-assets/res', androidRes, { recursive: true, force: true });
const gradleFile = 'android/app/build.gradle';
if (existsSync(gradleFile)) {
  let gradle = await readFile(gradleFile, 'utf8');
  gradle = gradle.replace(/versionCode\s+\d+/, 'versionCode 602');
  gradle = gradle.replace(/versionName\s+"[^"]+"/, 'versionName "6.2"');
  await writeFile(gradleFile, gradle);
}
console.log('Daybook launcher and notification icons installed; Android version set to 6.2.');
