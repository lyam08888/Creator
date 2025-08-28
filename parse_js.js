const fs = require('fs');
const content = fs.readFileSync('index.html','utf8');
const startTag = '<script type="module">';
const endTag = '</script>';
const start = content.indexOf(startTag);
const end = content.indexOf(endTag, start + startTag.length);
if (start === -1 || end === -1) { console.error('Script tag non trouvé'); process.exit(1);} 
const js = content.slice(start + startTag.length, end);
try {
  // Wrap in a block so top-level declarations are allowed in Function body
  new Function(`{"use strict"; ${js}\n}`);
  console.log('Syntax OK');
} catch (e) {
  console.error('Syntax error:', e.message);
}
