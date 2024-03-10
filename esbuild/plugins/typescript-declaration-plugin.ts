import { execSync } from 'node:child_process';
import type { Plugin } from 'esbuild';

export default () => ({
  name: 'TypeScriptDeclarationsPlugin',
  setup(build) {
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        return;
      }

      execSync('tsc --p tsconfig.build.json && tsc-alias -p tsconfig.build.json');
    });
  },
}) as Plugin;
