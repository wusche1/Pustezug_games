// Card Generator for Corruption Game
// Generates HTML files for printing game cards

function generateCivilSocietyHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Civil Society Cards</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 10px;
            background: white;
        }
        .cards-container {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 5px;
            max-width: 100%;
        }
        .card { 
            border: 2px solid #333; 
            padding: 8px; 
            width: 140px; 
            height: 200px; 
            page-break-inside: avoid;
            background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
            color: white;
            position: relative;
            box-sizing: border-box;
        }
        .card-title { 
            font-size: 16px; 
            font-weight: bold; 
            margin-bottom: 10px; 
            color: white; 
            text-align: center;
            line-height: 1.1;
        }
        .card-strength { 
            font-size: 24px; 
            font-weight: bold; 
            color: #fff; 
            text-align: center; 
            margin: 10px auto;
            border: 2px solid #fff;
            padding: 8px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            line-height: 24px;
            background: rgba(255, 255, 255, 0.2);
        }
        .card-type { 
            position: absolute; 
            bottom: 10px; 
            right: 10px; 
            font-size: 10px; 
            color: #e0e0e0; 
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            body { margin: 0; padding: 5px; }
            .cards-container { gap: 3px; }
            .card { break-inside: avoid; }
            .page-break { page-break-before: always; }
        }
    </style>
</head>
<body>
    <div class="cards-container">
    ${(() => {
        let result = [];
        civilSocietyCards.forEach((card, index) => {
            // Page break every 30 cards
            if (index > 0 && index % 30 === 0) {
                result.push('<div class="page-break"></div>');
            }
            result.push(`
        <div class="card">
            <div class="card-title">${card.name}</div>
            <div class="card-strength">${card.strength}</div>
        </div>`);
            
            // Add 6 empty cards after every 30 cards, but only if there are more cards coming
            if ((index + 1) % 30 === 0 && (index + 1) < civilSocietyCards.length) {
                for (let i = 0; i < 6; i++) {
                    result.push(`
        <div class="card">
        </div>`);
                }
            }
        });
        
        return result.join('');
    })()}
    </div>
</body>
</html>`;
    return html;
}

function generatePrivateActionHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Private Action Cards</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 10px;
            background: white;
        }
        .cards-container {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 5px;
            max-width: 100%;
        }
        .card { 
            border: 2px solid #333; 
            padding: 8px; 
            width: 140px; 
            height: 200px; 
            page-break-inside: avoid;
            position: relative;
            background: linear-gradient(135deg, #8e44ad 0%, #6c3483 100%);
            color: white;
            box-sizing: border-box;
        }
        .category-symbol {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 24px;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            z-index: 10;
        }
        
        .card-title { 
            font-size: 12px; 
            font-weight: bold; 
            margin-bottom: 8px; 
            margin-right: 30px;
            text-align: center;
            line-height: 1.1;
            padding-top: 3px;
        }
        .card-category { 
            font-size: 18px; 
            font-weight: bold; 
            text-align: center; 
            padding: 8px; 
            margin-bottom: 15px; 
            background: rgba(255,255,255,0.2);
            border-radius: 5px;
        }
        .card-stats { 
            font-size: 14px; 
            margin-bottom: 8px; 
            text-align: center;
            font-weight: bold;
            line-height: 1.1;
        }
        .card-effects { 
            font-size: 10px; 
            margin-bottom: 5px; 
            text-align: center;
            line-height: 1.2;
            font-weight: bold;
        }
        .card-general { 
            font-size: 10px; 
            font-style: italic; 
            margin-top: 5px; 
            background: rgba(255,255,255,0.2);
            padding: 4px;
            border-radius: 3px;
            text-align: center;
            line-height: 1.2;
            font-weight: bold;
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            body { margin: 0; padding: 5px; }
            .cards-container { gap: 3px; }
            .card { break-inside: avoid; }
            .page-break { page-break-before: always; }
        }
    </style>
</head>
<body>
    <div class="cards-container">
    ${(() => {
        let result = [];
        privateActionCards.forEach((card, index) => {
            // Define symbols for each category
            const categorySymbols = {
                'Production': '⚙️',
                'Practices': '💼', 
                'Jobs': '👷',
                'Actions': '⚡',
                'Projects': '🏗️'
            };
            const categorySymbol = categorySymbols[card.category] || '❓';
            
            // Page break every 30 cards
            if (index > 0 && index % 30 === 0) {
                result.push('<div class="page-break"></div>');
            }
            
            let cardContent = `
        <div class="card">
            <div class="category-symbol">${categorySymbol}</div>
            <div class="card-title">${card.name}</div>`;
        
        // Stats line with cost and money
        let stats = [];
        if (card.cost > 0) stats.push(`💰${card.cost}`);
        if (card.immediateMoney > 0) stats.push(`💵+${card.immediateMoney}`);
        if (card.moneyPerTurn > 0) stats.push(`💸+${card.moneyPerTurn}/turn`);
        if (card.permanent) stats.push('🔒');
        
        if (stats.length > 0) {
            cardContent += `        <div class="card-stats">${stats.join(' ')}</div>\n`;
        }
        
        // Interest group effects - only show the effects, not the label
        if (card.interestGroupEffects && Object.keys(card.interestGroupEffects).length > 0) {
            const effects = [];
            for (const [group, effect] of Object.entries(card.interestGroupEffects)) {
                const sign = effect > 0 ? '+' : '';
                effects.push(`${group}: ${sign}${effect}`);
            }
            cardContent += `        <div class="card-effects">${effects.join('<br>')}</div>\n`;
        }
        
        // General effects text (check both 'effects' and 'generalEffects')
        if (card.effects) {
            cardContent += `        <div class="card-general">${card.effects}</div>\n`;
        } else if (card.generalEffects) {
            cardContent += `        <div class="card-general">${card.generalEffects}</div>\n`;
        }
        
        cardContent += '    </div>';
        result.push(cardContent);
        
        // Add 6 empty cards after every 30 cards, but only if there are more cards coming
        if ((index + 1) % 30 === 0 && (index + 1) < privateActionCards.length) {
            for (let i = 0; i < 6; i++) {
                result.push(`
        <div class="card">
        </div>`);
            }
        }
        });
        
        return result.join('');
    })()}
    </div>
</body>
</html>`;
    return html;
}

function generatePublicActionHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Public Action Cards</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 10px;
            background: white;
        }
        .cards-container {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 5px;
            max-width: 100%;
        }
        .card { 
            border: 2px solid #333; 
            padding: 8px; 
            width: 140px; 
            height: 200px; 
            page-break-inside: avoid;
            position: relative;
            background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
            color: white;
            box-sizing: border-box;
        }
        .card-title { 
            font-size: 12px; 
            font-weight: bold; 
            margin-bottom: 8px; 
            text-align: center;
            line-height: 1.1;
        }
        .card-stats { 
            font-size: 14px; 
            margin-bottom: 8px; 
            text-align: center;
            font-weight: bold;
            line-height: 1.1;
        }
        .positive { color: #2ecc71; }
        .negative { color: #e74c3c; }
        .card-effects { 
            font-size: 10px; 
            margin-bottom: 5px; 
            text-align: center;
            line-height: 1.2;
            font-weight: bold;
        }
        .card-general { 
            font-size: 10px; 
            font-style: italic; 
            margin-top: 5px; 
            background: rgba(255,255,255,0.2);
            padding: 4px;
            border-radius: 3px;
            text-align: center;
            line-height: 1.2;
            font-weight: bold;
        }

        .page-break {
            page-break-before: always;
        }
        @media print {
            body { margin: 0; padding: 5px; }
            .cards-container { gap: 3px; }
            .card { break-inside: avoid; }
            .page-break { page-break-before: always; }
        }
    </style>
</head>
<body>
    <div class="cards-container">
    ${(() => {
        let result = [];
        publicActionCards.forEach((card, index) => {
            // Page break every 30 cards
            if (index > 0 && index % 30 === 0) {
                result.push('<div class="page-break"></div>');
            }
            
            let cardContent = `
        <div class="card">
            <div class="card-title">${card.name}</div>`;
        
        // Stats line with cost and popularity
        let stats = [];
        if (card.politicalCapitalCost > 0) {
            stats.push(`🏛️${card.politicalCapitalCost}`);
        }
        if (card.overallPopularity !== undefined && card.overallPopularity !== 0) {
            const sign = card.overallPopularity > 0 ? '+' : '';
            const popClass = card.overallPopularity > 0 ? 'positive' : 'negative';
            stats.push(`<span class="${popClass}">📊${sign}${card.overallPopularity}</span>`);
        }
        
        if (stats.length > 0) {
            cardContent += `        <div class="card-stats">${stats.join(' ')}</div>\n`;
        }
        
        // Interest group effects - only show the effects, not the label
        if (card.interestGroupEffects && Object.keys(card.interestGroupEffects).length > 0) {
            const effects = [];
            for (const [group, effect] of Object.entries(card.interestGroupEffects)) {
                const sign = effect > 0 ? '+' : '';
                effects.push(`${group}: ${sign}${effect}`);
            }
            cardContent += `        <div class="card-effects">${effects.join('<br>')}</div>\n`;
        }
        
        // General effects text (check both 'effects' and 'generalEffects')
        if (card.effects) {
            cardContent += `        <div class="card-general">${card.effects}</div>\n`;
        } else if (card.generalEffects) {
            cardContent += `        <div class="card-general">${card.generalEffects}</div>\n`;
        }
        
        cardContent += '    </div>';
        result.push(cardContent);
        
        // Add 6 empty cards after every 30 cards, but only if there are more cards coming
        if ((index + 1) % 30 === 0 && (index + 1) < publicActionCards.length) {
            for (let i = 0; i < 6; i++) {
                result.push(`
        <div class="card">
        </div>`);
            }
        }
        });
        
        return result.join('');
    })()}
    </div>
</body>
</html>`;
    return html;
}

function downloadHTML(content, filename) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateAllCards() {
    // Generate and download all card files
    downloadHTML(generateCivilSocietyHTML(), 'civil_society_cards.html');
    downloadHTML(generatePrivateActionHTML(), 'private_action_cards.html');
    downloadHTML(generatePublicActionHTML(), 'public_action_cards.html');
    
    console.log('Generated all card HTML files!');
    alert('Generated all card HTML files! Check your downloads folder.');
}

// If running in browser, add a button to generate cards
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Generate Printable Cards';
        button.onclick = generateAllCards;
        button.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            z-index: 1000;
        `;
        document.body.appendChild(button);
    });
}
