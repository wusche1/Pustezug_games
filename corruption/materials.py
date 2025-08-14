from pydantic import BaseModel
from typing import List, Dict, Optional


class CivilSociety(BaseModel):
    name: str
    handle: str
    strength: int


# Civil Society Cards
civil_society_cards: List[CivilSociety] = [
    CivilSociety(name="The Unions", handle="unions", strength=8), 
    CivilSociety(name="The Army", handle="army", strength=6), 
    CivilSociety(name="The Church", handle="church", strength=9), 
    CivilSociety(name="Academia", handle="academia", strength=4), 
    CivilSociety(name="The Civil Service", handle="service", strength=7), 
    CivilSociety(name="The Newspaper", handle="paper", strength=10), 
    CivilSociety(name="The Landlords", handle="landlords", strength=5), 
    CivilSociety(name="The Banking Sector", handle="banks", strength=6), 
    CivilSociety(name="The Climate Movement", handle="climate", strength=6),
    CivilSociety(name="The Farmers", handle="farmers", strength=7),
    CivilSociety(name="The Pensioners", handle="pensioners", strength=8),
]


class PrivateAction(BaseModel):
    name: str
    handle: str
    category: str  # "Investment", "Jobs", "Practices", "Projects"
    cost: int = 0  # Cost in money to play this card
    immediate_money: int = 0  # Money gained immediately when played
    money_per_turn: int = 0  # Money gained each turn (if permanent)
    permanent: bool = False  # Whether this card stays in play
    interest_group_effects: Dict[str, int] = {}  # Effects on specific civil society groups
    general_effects: str = ""  # Free text for special effects or conditions


# Private Action Cards
private_action_cards: List[PrivateAction] = [
    # Investment Cards (10)
    PrivateAction(
        name="New Factory",
        handle="factory",
        category="Investment",
        cost=4,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"climate": -4, "unions": 2}
    ),
    PrivateAction(
        name="Oil Refinery",
        handle="oil_refinery",
        category="Investment",
        cost=5,
        money_per_turn=4,
        permanent=True,
        interest_group_effects={"climate": -5, "farmers": 2}
    ),
    PrivateAction(
        name="Solar Farm",
        handle="solar_farm",
        category="Investment",
        cost=8,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"climate": 4, "academia": 1}
    ),
    PrivateAction(
        name="Strip Mining",
        handle="strip_mining",
        category="Investment",
        cost=3,
        money_per_turn=5,
        permanent=True,
        interest_group_effects={"climate": -5, "farmers": -2}
    ),
    PrivateAction(
        name="Casino",
        handle="casino",
        category="Investment",
        cost=6,
        money_per_turn=4,
        permanent=True,
        interest_group_effects={"church": -3, "pensioners": -2}
    ),
    PrivateAction(
        name="Luxury Resort",
        handle="luxury_resort",
        category="Investment",
        cost=9,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"landlords": 3, "farmers": -2}
    ),
    PrivateAction(
        name="Tobacco Farm",
        handle="tobacco_farm",
        category="Investment",
        cost=2,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"farmers": 3, "pensioners": -4, "church": -2}
    ),
    PrivateAction(
        name="Data Center",
        handle="data_center",
        category="Investment",
        cost=6,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"academia": 1, "climate": -2}
    ),
    PrivateAction(
        name="Shopping Mall",
        handle="shopping_mall",
        category="Investment",
        cost=7,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"landlords": 2, "climate": -1}
    ),
    PrivateAction(
        name="Recycling Plant",
        handle="recycling_plant",
        category="Investment",
        cost=7,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"climate": 3, "unions": 2}
    ),
    
    # Jobs Cards (10)
    PrivateAction(
        name="Asset Liquidation",
        handle="asset_liquidation",
        category="Jobs",
        immediate_money=12
    ),
    PrivateAction(
        name="Automation Line",
        handle="automation_line",
        category="Jobs",
        cost=5,
        money_per_turn=4,
        permanent=True,
        interest_group_effects={"unions": -5, "academia": 2}
    ),
    PrivateAction(
        name="Union Busting",
        handle="union_busting",
        category="Jobs",
        cost=3,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"unions": -6}
    ),
    PrivateAction(
        name="Employee Benefits",
        handle="employee_benefits",
        category="Jobs",
        cost=7,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"unions": 4, "pensioners": 2}
    ),
    PrivateAction(
        name="Gig Economy Platform",
        handle="gig_economy",
        category="Jobs",
        cost=4,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"unions": -4, "service": -2}
    ),
    PrivateAction(
        name="Chaplain Program",
        handle="chaplain_program",
        category="Jobs",
        cost=3,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"church": 3, "unions": 2}
    ),
    PrivateAction(
        name="Senior Hiring Initiative",
        handle="senior_hiring",
        category="Jobs",
        cost=5,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"pensioners": 4, "unions": 2}
    ),
    PrivateAction(
        name="Internship Program",
        handle="internship_program",
        category="Jobs",
        cost=2,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"academia": 2, "unions": -1}
    ),
    PrivateAction(
        name="Temp Agency",
        handle="temp_agency",
        category="Jobs",
        cost=3,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"unions": -3}
    ),
    PrivateAction(
        name="Profit Sharing",
        handle="profit_sharing",
        category="Jobs",
        cost=8,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"unions": 5}
    ),
    
    # Practices Cards (10)
    PrivateAction(
        name="Emergency Sale",
        handle="emergency_sale",
        category="Practices",
        immediate_money=10
    ),
    PrivateAction(
        name="Price Increase",
        handle="price_increase",
        category="Practices",
        immediate_money=8
    ),
    PrivateAction(
        name="Stock Buyback",
        handle="stock_buyback",
        category="Practices",
        immediate_money=6
    ),
    PrivateAction(
        name="Tax Avoidance",
        handle="tax_avoidance",
        category="Practices",
        cost=2,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"service": -3}
    ),
    PrivateAction(
        name="Regulatory Capture",
        handle="regulatory_capture",
        category="Practices",
        cost=6,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"service": 3, "paper": -3}
    ),
    PrivateAction(
        name="Church Donations",
        handle="church_donations",
        category="Practices",
        cost=4,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"church": 4, "pensioners": 1}
    ),
    PrivateAction(
        name="Academic Grants",
        handle="academic_grants",
        category="Practices",
        cost=5,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"academia": 3, "service": 1}
    ),
    PrivateAction(
        name="Farmer Subsidies",
        handle="farmer_subsidies",
        category="Practices",
        cost=3,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"farmers": 4}
    ),
    PrivateAction(
        name="Lobbying Campaign",
        handle="lobbying_campaign",
        category="Practices",
        cost=4,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"service": 2, "paper": -2}
    ),
    PrivateAction(
        name="Environmental Greenwashing",
        handle="greenwashing",
        category="Practices",
        cost=3,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"climate": 1, "paper": -2}
    ),
    
    # Projects Cards (10)
    PrivateAction(
        name="Private Hospital",
        handle="private_hospital",
        category="Projects",
        cost=8,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"service": -2, "pensioners": 3}
    ),
    PrivateAction(
        name="University Sponsorship",
        handle="university_sponsorship",
        category="Projects",
        cost=6,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"academia": 3, "service": 1}
    ),
    PrivateAction(
        name="Church Renovation",
        handle="church_renovation",
        category="Projects",
        cost=5,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"church": 4, "pensioners": 2}
    ),
    PrivateAction(
        name="Newspaper Acquisition",
        handle="newspaper_acquisition",
        category="Projects",
        cost=7,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"paper": 3}
    ),
    PrivateAction(
        name="Retirement Community",
        handle="retirement_community",
        category="Projects",
        cost=9,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"pensioners": 4, "service": 1}
    ),
    PrivateAction(
        name="Agricultural Research",
        handle="agricultural_research",
        category="Projects",
        cost=5,
        money_per_turn=2,
        permanent=True,
        interest_group_effects={"farmers": 3, "academia": 2}
    ),
    PrivateAction(
        name="Private Prison",
        handle="private_prison",
        category="Projects",
        cost=6,
        money_per_turn=4,
        permanent=True,
        interest_group_effects={"service": -3}
    ),
    PrivateAction(
        name="Climate Research Center",
        handle="climate_research",
        category="Projects",
        cost=8,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"climate": 4, "academia": 3}
    ),
    PrivateAction(
        name="Land Development",
        handle="land_development",
        category="Projects",
        cost=6,
        money_per_turn=3,
        permanent=True,
        interest_group_effects={"landlords": 4, "climate": -2}
    ),
    PrivateAction(
        name="Community Center",
        handle="community_center",
        category="Projects",
        cost=8,
        money_per_turn=1,
        permanent=True,
        interest_group_effects={"pensioners": 3, "unions": 2}
    ),
    
    # Production Capacity Cards (Expensive but Popular)
    PrivateAction(
        name="Small Arms Factory",
        handle="small_arms_factory",
        category="Investment",
        cost=6,
        permanent=True,
        interest_group_effects={"army": 2, "unions": 1},
        general_effects="Gain 1 military production capacity"
    ),
    PrivateAction(
        name="Defense Contractor",
        handle="defense_contractor",
        category="Investment",
        cost=12,
        permanent=True,
        interest_group_effects={"army": 4, "unions": 2},
        general_effects="Gain 2 military production capacity"
    ),
    PrivateAction(
        name="Pharmaceutical Lab",
        handle="pharma_lab_small",
        category="Investment",
        cost=6,
        permanent=True,
        interest_group_effects={"pensioners": 2, "academia": 1},
        general_effects="Gain 1 pharma production capacity"
    ),
    PrivateAction(
        name="Medical Research Complex",
        handle="medical_research_complex",
        category="Investment",
        cost=12,
        permanent=True,
        interest_group_effects={"pensioners": 4, "academia": 2},
        general_effects="Gain 2 pharma production capacity"
    ),
    PrivateAction(
        name="Tech Startup Incubator",
        handle="tech_startup",
        category="Investment",
        cost=6,
        permanent=True,
        interest_group_effects={"academia": 2, "unions": -1},
        general_effects="Gain 1 tech production capacity"
    ),
    PrivateAction(
        name="Tech Campus",
        handle="silicon_valley_campus",
        category="Investment",
        cost=12,
        permanent=True,
        interest_group_effects={"academia": 3, "unions": -2},
        general_effects="Gain 2 tech production capacity"
    ),
]


class PublicAction(BaseModel):
    name: str
    handle: str
    political_capital_cost: int = 0  # Cost in political capital to play this card
    overall_popularity: int = 0  # General public opinion change
    interest_group_effects: Dict[str, int] = {}  # Effects on specific civil society groups
    effects: str = ""  # Free text for special effects


# Public Action Cards
public_action_cards: List[PublicAction] = [
    # Popular/Expensive Cards (High Political Capital + Money Cost)
    PublicAction(
        name="Universal Healthcare",
        handle="universal_healthcare",
        political_capital_cost=8,
        overall_popularity=4,
        interest_group_effects={"pensioners": 3, "banks": -2},
        effects="Permanent healthcare system for all citizens"
    ),
    PublicAction(
        name="Free University Education",
        handle="free_university",
        political_capital_cost=7,
        overall_popularity=3,
        interest_group_effects={"academia": 4},
        effects="Permanent free higher education system"
    ),
    PublicAction(
        name="Green New Deal",
        handle="green_new_deal",
        political_capital_cost=9,
        overall_popularity=3,
        interest_group_effects={"climate": 5, "banks": -3},
        effects="Permanent massive environmental transformation program"
    ),
    PublicAction(
        name="Public Housing Program",
        handle="public_housing",
        political_capital_cost=6,
        overall_popularity=3,
        interest_group_effects={"unions": 2, "landlords": -4},
        effects="Permanent affordable housing construction program"
    ),
    PublicAction(
        name="Infrastructure Investment",
        handle="infrastructure_investment",
        political_capital_cost=5,
        overall_popularity=2,
        interest_group_effects={"unions": 3, "service": 2},
        effects="One-time major infrastructure spending boost"
    ),
    
    # Moderate Cards (Medium Political Capital)
    PublicAction(
        name="Minimum Wage Increase",
        handle="minimum_wage",
        political_capital_cost=4,
        overall_popularity=2,
        interest_group_effects={"unions": 3, "banks": -2},
        effects="Permanent higher minimum wage law"
    ),
    PublicAction(
        name="Environmental Regulations",
        handle="environmental_regulations",
        political_capital_cost=5,
        overall_popularity=1,
        interest_group_effects={"climate": 3, "banks": -2},
        effects="Permanent stricter environmental standards"
    ),
    PublicAction(
        name="Education Funding",
        handle="education_funding",
        political_capital_cost=3,
        overall_popularity=2,
        interest_group_effects={"academia": 3},
        effects="One-time major education spending increase"
    ),
    PublicAction(
        name="Agricultural Subsidies",
        handle="agricultural_subsidies",
        political_capital_cost=3,
        overall_popularity=1,
        interest_group_effects={"farmers": 4},
        effects="Permanent farm support payments"
    ),
    PublicAction(
        name="Senior Benefits",
        handle="senior_benefits",
        political_capital_cost=4,
        overall_popularity=2,
        interest_group_effects={"pensioners": 4},
        effects="Permanent enhanced retirement benefits"
    ),
    
    # Cheap/Popular Cards (Low Political Capital, Popular)
    PublicAction(
        name="Tax Relief for Workers",
        handle="tax_relief_workers",
        political_capital_cost=2,
        overall_popularity=2,
        interest_group_effects={"unions": 2},
        effects="One-time tax rebate for working families"
    ),
    PublicAction(
        name="Church Tax Exemption",
        handle="church_tax_exemption",
        political_capital_cost=1,
        overall_popularity=1,
        interest_group_effects={"church": 3},
        effects="Permanent religious organization tax benefits"
    ),
    PublicAction(
        name="Press Freedom Act",
        handle="press_freedom",
        political_capital_cost=2,
        overall_popularity=1,
        interest_group_effects={"paper": 3},
        effects="Permanent media protection laws"
    ),
    PublicAction(
        name="Climate Awareness Campaign",
        handle="climate_awareness",
        political_capital_cost=1,
        overall_popularity=1,
        interest_group_effects={"climate": 2},
        effects="One-time public education initiative"
    ),
    PublicAction(
        name="Farmer Support Program",
        handle="farmer_support",
        political_capital_cost=2,
        overall_popularity=1,
        interest_group_effects={"farmers": 3},
        effects="One-time agricultural assistance package"
    ),
    
    # Outlawing Cards (Free, Counter Corporate Actions)
    PublicAction(
        name="Expropriation",
        handle="outlaw_investment",
        effects="Remove one Investment category private action card from play"
    ),
    PublicAction(
        name="Labour Regulation",
        handle="outlaw_jobs",

        effects="Remove one Jobs category private action card from play"
    ),
    PublicAction(
        name="Corporation Regulation",
        handle="outlaw_practices",

        effects="Remove one Practices category private action card from play"
    ),
    PublicAction(
        name="Public Interest Protection",
        handle="outlaw_projects",
        effects="Remove one Projects category private action card from play"
    ),
    
    # Controversial Sector Support Cards (Benefit production sectors but hurt popularity)
    PublicAction(
        name="Border Conflict",
        handle="border_conflict",
        political_capital_cost=2,
        overall_popularity=-2,
        interest_group_effects={"army": 2, "climate": -1},
        effects="Give 3 money per military production capacity"
    ),
    PublicAction(
        name="Declare War",
        handle="declare_war",
        political_capital_cost=4,
        overall_popularity=-4,
        interest_group_effects={"army": 3, "academia": -2, "climate": -2},
        effects="Give 6 money per military production capacity"
    ),
    PublicAction(
        name="Privatize Hospitals",
        handle="privatize_hospitals",
        political_capital_cost=3,
        overall_popularity=-2,
        interest_group_effects={"banks": 2, "service": -3, "pensioners": -1},
        effects="Give 3 money per pharma production capacity"
    ),
    PublicAction(
        name="Healthcare Deregulation",
        handle="healthcare_deregulation",
        political_capital_cost=5,
        overall_popularity=-3,
        interest_group_effects={"banks": 3, "service": -4, "pensioners": -2},
        effects="Give 6 money per pharma production capacity"
    ),
    PublicAction(
        name="Surveillance Program",
        handle="surveillance_program",
        political_capital_cost=2,
        overall_popularity=-2,
        interest_group_effects={"service": 1, "paper": -2, "academia": -1},
        effects="Give 3 money per tech production capacity"
    ),
    PublicAction(
        name="Digital ID Mandate",
        handle="digital_id_mandate",
        political_capital_cost=4,
        overall_popularity=-3,
        interest_group_effects={"service": 2, "paper": -3, "unions": -2},
        effects="Give 6 money per tech production capacity"
    ),
]

