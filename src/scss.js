import fs from 'fs';
import * as sass from 'sass';

export function buildSCSS() {
  const inputDir = 'scss';
  const outputFile = 'dist/style.css';

  const result = sass.compile('scss/main.scss', {
    loadPaths: [inputDir],
    style: 'compressed'
  });

  fs.writeFileSync(outputFile, result.css);
}
