#!/usr/bin/env python3
"""
Generate printable HTML files for all corruption game cards.
Run this script to create HTML files that can be printed or converted to PDF.
"""

from materials import civil_society_cards, private_action_cards, public_action_cards
import os


def generate_civil_society_html():
    """Generate HTML for civil society cards."""
    html = """<!DOCTYPE html>
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
"""
    
    for card in civil_society_cards:
        html += f"""
    <div class="card">
        <div class="card-title">{card.name}</div>
        <div class="card-handle">({card.handle})</div>
        <div class="card-strength">{card.strength}</div>
        <div class="card-type">Civil Society</div>
    </div>
"""
    
    html += """
</body>
</html>"""
    return html


def generate_private_action_html():
    """Generate HTML for private action cards."""
    html = """<!DOCTYPE html>
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
"""
    
    for card in private_action_cards:
        category_class = card.category.lower()
        html += f"""
    <div class="card {category_class}">
        <div class="card-category">{card.category}</div>
        <div class="card-title">{card.name}</div>
        <div class="card-handle">({card.handle})</div>
"""
        
        if card.cost > 0:
            html += f'        <div class="card-cost">💰 Cost: {card.cost}</div>\n'
        
        if card.immediate_money > 0:
            html += f'        <div class="card-money">💵 Immediate: +{card.immediate_money}</div>\n'
        
        if card.money_per_turn > 0:
            html += f'        <div class="card-money">💸 Per Turn: +{card.money_per_turn}</div>\n'
        
        if card.permanent:
            html += '        <div class="card-money">🔒 Permanent</div>\n'
        
        if card.interest_group_effects:
            html += '        <div class="card-effects">Interest Group Effects:<br>'
            for group, effect in card.interest_group_effects.items():
                sign = '+' if effect > 0 else ''
                html += f'        • {group}: {sign}{effect}<br>'
            html += '        </div>\n'
        
        if card.general_effects:
            html += f'        <div class="card-general">{card.general_effects}</div>\n'
        
        html += '    </div>\n'
    
    html += """
</body>
</html>"""
    return html


def generate_public_action_html():
    """Generate HTML for public action cards."""
    html = """<!DOCTYPE html>
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
"""
    
    for card in public_action_cards:
        html += f"""
    <div class="card">
        <div class="card-title">{card.name}</div>
        <div class="card-handle">({card.handle})</div>
"""
        
        if card.political_capital_cost > 0:
            html += f'        <div class="card-cost">🏛️ Political Cost: {card.political_capital_cost}</div>\n'
        
        if card.overall_popularity != 0:
            sign = '+' if card.overall_popularity > 0 else ''
            pop_class = 'positive' if card.overall_popularity > 0 else 'negative'
            html += f'        <div class="card-popularity {pop_class}">📊 Popularity: {sign}{card.overall_popularity}</div>\n'
        
        if card.interest_group_effects:
            html += '        <div class="card-effects">Interest Group Effects:<br>'
            for group, effect in card.interest_group_effects.items():
                sign = '+' if effect > 0 else ''
                html += f'        • {group}: {sign}{effect}<br>'
            html += '        </div>\n'
        
        if card.effects:
            html += f'        <div class="card-general">{card.effects}</div>\n'
        
        html += '    </div>\n'
    
    html += """
</body>
</html>"""
    return html


def main():
    """Generate all HTML files."""
    output_dir = "printable_cards"
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate civil society cards
    with open(f"{output_dir}/civil_society_cards.html", "w", encoding="utf-8") as f:
        f.write(generate_civil_society_html())
    
    # Generate private action cards
    with open(f"{output_dir}/private_action_cards.html", "w", encoding="utf-8") as f:
        f.write(generate_private_action_html())
    
    # Generate public action cards
    with open(f"{output_dir}/public_action_cards.html", "w", encoding="utf-8") as f:
        f.write(generate_public_action_html())
    
    print(f"Generated printable HTML files in '{output_dir}/' directory:")
    print("- civil_society_cards.html")
    print("- private_action_cards.html") 
    print("- public_action_cards.html")
    print("\nOpen these files in a web browser and use Print -> Save as PDF to create PDFs.")


if __name__ == "__main__":
    main()
