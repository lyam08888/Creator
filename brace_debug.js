const fs = require('fs');
const path = 'index.html';
const startTag = '<script type="module">';
const endTag = '</script>';

const content = fs.readFileSync(path, 'utf8');
const start = content.indexOf(startTag);
const end = content.indexOf(endTag, start + startTag.length);
if (start === -1 || end === -1) {
  console.log('Script tag non trouvé');
  process.exit(1);
}
const before = content.slice(0, start + startTag.length);
const jsStartLine = before.split(/\r?\n/).length;
const js = content.slice(start + startTag.length, end);

let stack = [];
let line = jsStartLine;
let inSingle = false, inDouble = false, inBack = false;
let inLineComment = false, inBlockComment = false;

for (let i = 0; i < js.length; i++) {
  const ch = js[i];
  const prev = js[i - 1];
  const next = js[i + 1];

  if (ch === '\n') { line++; inLineComment = false; continue; }

  // handle comments
  if (!inSingle && !inDouble && !inBack) {
    if (!inBlockComment && ch === '/' && next === '/') { inLineComment = true; continue; }
    if (!inLineComment && ch === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (inBlockComment && prev === '*' && ch === '/') { inBlockComment = false; continue; }
  }
  if (inLineComment || inBlockComment) continue;

  // handle strings
  if (!inDouble && !inBack && ch === '\'' && prev !== '\\') { inSingle = !inSingle; continue; }
  if (!inSingle && !inBack && ch === '"' && prev !== '\\') { inDouble = !inDouble; continue; }
  if (!inSingle && !inDouble && ch === '`' && prev !== '\\') { inBack = !inBack; continue; }
  if (inSingle || inDouble || inBack) continue;

  if (ch === '{') stack.push({ line });
  if (ch === '}') stack.pop();
}

if (stack.length === 0) {
  console.log('Braces OK');
} else {
  console.log(`Manque ${stack.length} accolade(s) fermante(s). Ouvrants restants aux lignes:`);
  for (const s of stack.slice(-10)) {
    console.log('- ligne', s.line);
  }
}
