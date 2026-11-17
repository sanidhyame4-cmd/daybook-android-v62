import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

function run(args) {
  const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (!existsSync('android')) run(['cap', 'add', 'android']);
run(['cap', 'sync', 'android']);
const apply = spawnSync(process.execPath, ['scripts/apply-android-assets.mjs'], { stdio: 'inherit' });
if (apply.status !== 0) process.exit(apply.status ?? 1);
