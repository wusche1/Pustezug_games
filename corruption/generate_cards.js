// Card Generator for Corruption Game
// Generates HTML files for printing game cards

function generateCivilSocietyHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Civil Society Cards</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .card { 
            border: 2px solid #333; 
            padding: 15px; 
            margin: 10px; 
            width: 250px; 
            height: 350px; 
            display: inline-block; 
            vertical-align: top;
            page-break-inside: avoid;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            position: relative;
        }
        .card-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; color: #2c3e50; }
        .card-handle { font-size: 12px; color: #7f8c8d; margin-bottom: 15px; }
        .card-strength { 
            font-size: 24px; 
            font-weight: bold; 
            color: #e74c3c; 
            text-align: center; 
            margin: 20px 0;
            border: 2px solid #e74c3c;
            padding: 10px;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            line-height: 40px;
            margin: 20px auto;
        }
        .card-type { 
            position: absolute; 
            bottom: 10px; 
            right: 10px; 
            font-size: 10px; 
            color: #95a5a6; 
        }
        h1 { text-align: center; color: #2c3e50; }
        @media print {
            .card { margin: 5px; }
            body { margin: 10px; }
        }
    </style>
</head>
<body>
    <h1>Civil Society Cards</h1>
    ${civilSocietyCards.map(card => `
    <div class="card">
        <div class="card-title">${card.name}</div>
        <div class="card-handle">(${card.handle})</div>
        <div class="card-strength">${card.strength}</div>
        <div class="card-type">Civil Society</div>
    </div>`).join('')}
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
        body { font-family: Arial, sans-serif; margin: 20px; }
        .card { 
            border: 2px solid #333; 
            padding: 15px; 
            margin: 10px; 
            width: 250px; 
            height: 350px; 
            display: inline-block; 
            vertical-align: top;
            page-break-inside: avoid;
            position: relative;
        }
        .investment { background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; }
        .jobs { background: linear-gradient(135deg, #e67e22 0%, #d35400 100%); color: white; }
        .practices { background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); color: white; }
        .projects { background: linear-gradient(135deg, #27ae60 0%, #229954 100%); color: white; }
        
        .card-title { font-size: 16px; font-weight: bold; margin-bottom: 8px; }
        .card-handle { font-size: 10px; margin-bottom: 10px; opacity: 0.8; }
        .card-category { 
            font-size: 12px; 
            font-weight: bold; 
            text-align: center; 
            padding: 5px; 
            margin-bottom: 10px; 
            background: rgba(255,255,255,0.2);
            border-radius: 5px;
        }
        .card-cost { font-size: 14px; margin-bottom: 5px; }
        .card-money { font-size: 14px; margin-bottom: 5px; }
        .card-effects { font-size: 11px; margin-bottom: 10px; }
        .card-general { font-size: 10px; font-style: italic; margin-top: 10px; }
        h1 { text-align: center; color: #2c3e50; }
        @media print {
            .card { margin: 5px; }
            body { margin: 10px; }
        }
    </style>
</head>
<body>
    <h1>Private Action Cards</h1>
    ${privateActionCards.map(card => {
        const categoryClass = card.category.toLowerCase();
        let cardContent = `
    <div class="card ${categoryClass}">
        <div class="card-category">${card.category}</div>
        <div class="card-title">${card.name}</div>
        <div class="card-handle">(${card.handle})</div>`;
        
        if (card.cost > 0) {
            cardContent += `        <div class="card-cost">💰 Cost: ${card.cost}</div>\n`;
        }
        
        if (card.immediateMoney > 0) {
            cardContent += `        <div class="card-money">💵 Immediate: +${card.immediateMoney}</div>\n`;
        }
        
        if (card.moneyPerTurn > 0) {
            cardContent += `        <div class="card-money">💸 Per Turn: +${card.moneyPerTurn}</div>\n`;
        }
        
        if (card.permanent) {
            cardContent += '        <div class="card-money">🔒 Permanent</div>\n';
        }
        
        if (card.interestGroupEffects && Object.keys(card.interestGroupEffects).length > 0) {
            cardContent += '        <div class="card-effects">Interest Group Effects:<br>';
            for (const [group, effect] of Object.entries(card.interestGroupEffects)) {
                const sign = effect > 0 ? '+' : '';
                cardContent += `        • ${group}: ${sign}${effect}<br>`;
            }
            cardContent += '        </div>\n';
        }
        
        if (card.generalEffects) {
            cardContent += `        <div class="card-general">${card.generalEffects}</div>\n`;
        }
        
        cardContent += '    </div>';
        return cardContent;
    }).join('')}
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
        body { font-family: Arial, sans-serif; margin: 20px; }
        .card { 
            border: 2px solid #333; 
            padding: 15px; 
            margin: 10px; 
            width: 250px; 
            height: 350px; 
            display: inline-block; 
            vertical-align: top;
            page-break-inside: avoid;
            position: relative;
            background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
            color: white;
        }
        .card-title { font-size: 16px; font-weight: bold; margin-bottom: 8px; }
        .card-handle { font-size: 10px; margin-bottom: 10px; opacity: 0.8; }
        .card-cost { font-size: 14px; margin-bottom: 5px; }
        .card-popularity { 
            font-size: 14px; 
            margin-bottom: 10px; 
            font-weight: bold;
        }
        .positive { color: #2ecc71; }
        .negative { color: #e74c3c; }
        .card-effects { font-size: 11px; margin-bottom: 10px; }
        .card-general { 
            font-size: 10px; 
            font-style: italic; 
            margin-top: 10px; 
            background: rgba(255,255,255,0.2);
            padding: 5px;
            border-radius: 3px;
        }
        h1 { text-align: center; color: #2c3e50; }
        @media print {
            .card { margin: 5px; }
            body { margin: 10px; }
        }
    </style>
</head>
<body>
    <h1>Public Action Cards</h1>
    ${publicActionCards.map(card => {
        let cardContent = `
    <div class="card">
        <div class="card-title">${card.name}</div>
        <div class="card-handle">(${card.handle})</div>`;
        
        if (card.politicalCapitalCost > 0) {
            cardContent += `        <div class="card-cost">🏛️ Political Cost: ${card.politicalCapitalCost}</div>\n`;
        }
        
        if (card.overallPopularity !== undefined && card.overallPopularity !== 0) {
            const sign = card.overallPopularity > 0 ? '+' : '';
            const popClass = card.overallPopularity > 0 ? 'positive' : 'negative';
            cardContent += `        <div class="card-popularity ${popClass}">📊 Popularity: ${sign}${card.overallPopularity}</div>\n`;
        }
        
        if (card.interestGroupEffects && Object.keys(card.interestGroupEffects).length > 0) {
            cardContent += '        <div class="card-effects">Interest Group Effects:<br>';
            for (const [group, effect] of Object.entries(card.interestGroupEffects)) {
                const sign = effect > 0 ? '+' : '';
                cardContent += `        • ${group}: ${sign}${effect}<br>`;
            }
            cardContent += '        </div>\n';
        }
        
        if (card.effects) {
            cardContent += `        <div class="card-general">${card.effects}</div>\n`;
        }
        
        cardContent += '    </div>';
        return cardContent;
    }).join('')}
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
