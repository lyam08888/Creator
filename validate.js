// Script temporaire pour valider la structure JavaScript
const fs = require('fs');

try {
    const content = fs.readFileSync('index.html', 'utf8');
    
    // Extraire le JavaScript
    const startTag = '<script type="module">';
    const endTag = '</script>';
    
    const start = content.indexOf(startTag);
    const end = content.indexOf(endTag, start);
    
    if (start === -1 || end === -1) {
        console.log('Script tag non trouvé');
        process.exit(1);
    }
    
    const jsContent = content.substring(start + startTag.length, end);
    
    // Compter les accolades et parenthèses
    const openBraces = (jsContent.match(/{/g) || []).length;
    const closeBraces = (jsContent.match(/}/g) || []).length;
    const openParens = (jsContent.match(/\(/g) || []).length;
    const closeParens = (jsContent.match(/\)/g) || []).length;
    
    console.log(`Accolades ouvertes: ${openBraces}`);
    console.log(`Accolades fermées: ${closeBraces}`);
    console.log(`Parenthèses ouvertes: ${openParens}`);
    console.log(`Parenthèses fermées: ${closeParens}`);
    
    if (openBraces !== closeBraces) {
        console.log(`❌ PROBLÈME: ${Math.abs(openBraces - closeBraces)} accolades non appariées`);
        console.log(`Il ${openBraces > closeBraces ? 'manque' : 'y a en trop'} ${Math.abs(openBraces - closeBraces)} accolade(s) fermante(s)`);
    } else {
        console.log('✅ Accolades équilibrées');
    }
    
    if (openParens !== closeParens) {
        console.log(`❌ PROBLÈME: ${Math.abs(openParens - closeParens)} parenthèses non appariées`);
    } else {
        console.log('✅ Parenthèses équilibrées');
    }
    
    // Afficher les dernières lignes
    const lines = jsContent.trim().split('\n');
    console.log('\nDernières lignes du JavaScript:');
    for (let i = Math.max(0, lines.length - 10); i < lines.length; i++) {
        console.log(`${i + 1}: ${lines[i].trim()}`);
    }
    
} catch (error) {
    console.error('Erreur:', error.message);
}
