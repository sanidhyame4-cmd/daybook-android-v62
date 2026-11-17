import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const gradle = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
if (!existsSync(`android/${gradle}`)) {
  console.error('Android Gradle wrapper not found. Run npm run android:setup first.');
  process.exit(1);
}
const result = spawnSync(gradle, process.argv.slice(2), {
  cwd: 'android', stdio: 'inherit', shell: process.platform === 'win32'
});
process.exit(result.status ?? 1);
