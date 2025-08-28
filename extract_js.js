const fs = require('fs');
const content = fs.readFileSync('index.html','utf8');
const start = content.indexOf('<script type="module">');
const end = content.indexOf('</script>', start + 1);
if (start === -1 || end === -1) { console.error('script tag not found'); process.exit(1); }
const js = content.slice(start + '<script type="module">'.length, end);
fs.writeFileSync('extracted.js', js);
console.log('Wrote extracted.js with', js.split(/\r?\n/).length, 'lines');
