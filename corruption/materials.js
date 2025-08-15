// Corruption Game Materials - JavaScript Version
// All card data for the corruption deck building game

// Civil Society Cards
const civilSocietyCards = [
    { name: "The Unions", handle: "unions", strength: 8 },
    { name: "The Army", handle: "army", strength: 6 },
    { name: "The Church", handle: "church", strength: 9 },
    { name: "Academia", handle: "academia", strength: 4 },
    { name: "The Civil Service", handle: "service", strength: 7 },
    { name: "The Newspaper", handle: "paper", strength: 10 },
    { name: "The Landlords", handle: "landlords", strength: 5 },
    { name: "The Banking Sector", handle: "banks", strength: 6 },
    { name: "The Climate Movement", handle: "climate", strength: 6 },
    { name: "The Farmers", handle: "farmers", strength: 7 },
    { name: "The Pensioners", handle: "pensioners", strength: 8 }
];

// Private Action Cards
const privateActionCards = [
    // Production Cards (9) - Three types with 1, 2, or 3 production capacity each
    // Military Production
    {
        name: "Arms Workshop",
        handle: "arms_workshop",
        category: "Production",
        cost: 4,
        permanent: true,
        interestGroupEffects: { "army": 2, "unions": 1 },
        generalEffects: "Gain 1 military production capacity"
    },
    {
        name: "Defense Contractor",
        handle: "defense_contractor", 
        category: "Production",
        cost: 8,
        permanent: true,
        interestGroupEffects: { "army": 4, "unions": 2 },
        generalEffects: "Gain 2 military production capacity"
    },
    {
        name: "Military-Industrial Complex",
        handle: "military_industrial",
        category: "Production",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "army": 6, "unions": 3 },
        generalEffects: "Gain 3 military production capacity"
    },
    
    // Pharma Production
    {
        name: "Small Clinic",
        handle: "small_clinic",
        category: "Production",
        cost: 4,
        permanent: true,
        interestGroupEffects: { "pensioners": 2, "academia": 1 },
        generalEffects: "Gain 1 pharma production capacity"
    },
    {
        name: "Pharmaceutical Lab",
        handle: "pharma_lab",
        category: "Production",
        cost: 8,
        permanent: true,
        interestGroupEffects: { "pensioners": 4, "academia": 2 },
        generalEffects: "Gain 2 pharma production capacity"
    },
    {
        name: "Medical Research Empire",
        handle: "medical_empire",
        category: "Production",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "pensioners": 6, "academia": 3 },
        generalEffects: "Gain 3 pharma production capacity"
    },
    
    // Tech Production
    {
        name: "Startup Garage",
        handle: "startup_garage",
        category: "Production",
        cost: 4,
        permanent: true,
        interestGroupEffects: { "academia": 2, "unions": -1 },
        generalEffects: "Gain 1 tech production capacity"
    },
    {
        name: "Tech Campus",
        handle: "tech_campus",
        category: "Production",
        cost: 8,
        permanent: true,
        interestGroupEffects: { "academia": 4, "unions": -2 },
        generalEffects: "Gain 2 tech production capacity"
    },
    {
        name: "Silicon Valley Empire",
        handle: "silicon_empire",
        category: "Production",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "academia": 6, "unions": -3 },
        generalEffects: "Gain 3 tech production capacity"
    },

    // Practices Cards (10) - Cheap but controversial
    {
        name: "Tax Evasion",
        handle: "tax_evasion",
        category: "Practices",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "service": -4, "paper": -2 }
    },
    {
        name: "Environmental Dumping",
        handle: "environmental_dumping",
        category: "Practices",
        cost: 1,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "climate": -5, "farmers": -3 }
    },
    {
        name: "Worker Exploitation",
        handle: "worker_exploitation",
        category: "Practices",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "unions": -6, "pensioners": -2 }
    },
    {
        name: "Price Fixing",
        handle: "price_fixing",
        category: "Practices",
        cost: 3,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "service": -3, "paper": -3 }
    },
    {
        name: "Predatory Lending",
        handle: "predatory_lending",
        category: "Practices",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "pensioners": -4, "banks": 2 }
    },
    {
        name: "Media Manipulation",
        handle: "media_manipulation",
        category: "Practices",
        cost: 3,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "paper": -5, "academia": -2 }
    },
    {
        name: "Regulatory Capture",
        handle: "regulatory_capture",
        category: "Practices",
        cost: 4,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "service": -4, "paper": -3 }
    },
    {
        name: "Child Labor",
        handle: "child_labor",
        category: "Practices",
        cost: 1,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "unions": -5, "church": -4, "academia": -3 }
    },
    {
        name: "Monopoly Formation",
        handle: "monopoly_formation",
        category: "Practices",
        cost: 4,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "service": -3, "farmers": -2, "paper": -2 }
    },
    {
        name: "Data Privacy Violation",
        handle: "data_violation",
        category: "Practices",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "academia": -3, "paper": -4, "service": -2 }
    },

    // Jobs Cards (10) - More expensive but less controversial
    {
        name: "Employee Benefits Package",
        handle: "employee_benefits",
        category: "Jobs",
        cost: 6,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "unions": 4, "pensioners": 3 }
    },
    {
        name: "Skills Training Program",
        handle: "skills_training",
        category: "Jobs",
        cost: 7,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "unions": 3, "academia": 2 }
    },
    {
        name: "Green Jobs Initiative",
        handle: "green_jobs",
        category: "Jobs",
        cost: 8,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "climate": 4, "unions": 2 }
    },
    {
        name: "Senior Employment Program",
        handle: "senior_employment",
        category: "Jobs",
        cost: 6,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "pensioners": 4, "unions": 1 }
    },
    {
        name: "Rural Development Jobs",
        handle: "rural_jobs",
        category: "Jobs",
        cost: 5,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "farmers": 4, "unions": 2 }
    },
    {
        name: "Tech Education Center",
        handle: "tech_education",
        category: "Jobs",
        cost: 7,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "academia": 3, "unions": 2 }
    },
    {
        name: "Community Service Corps",
        handle: "community_service",
        category: "Jobs",
        cost: 6,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "service": 3, "church": 2, "unions": 2 }
    },
    {
        name: "Apprenticeship Program",
        handle: "apprenticeship",
        category: "Jobs",
        cost: 5,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "unions": 3, "academia": 1 }
    },
    {
        name: "Healthcare Worker Initiative",
        handle: "healthcare_workers",
        category: "Jobs",
        cost: 8,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "pensioners": 3, "unions": 2, "service": 1 }
    },
    {
        name: "Infrastructure Jobs Program",
        handle: "infrastructure_jobs",
        category: "Jobs",
        cost: 9,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "unions": 4, "service": 2 }
    },

    // Actions Cards (5) - Free with small immediate money
    {
        name: "Asset Liquidation",
        handle: "asset_liquidation",
        category: "Actions",
        cost: 0,
        immediateMoney: 5
    },
    {
        name: "Emergency Sale",
        handle: "emergency_sale",
        category: "Actions",
        cost: 0,
        immediateMoney: 6
    },
    {
        name: "Stock Dividend",
        handle: "stock_dividend",
        category: "Actions",
        cost: 0,
        immediateMoney: 6
    },
    {
        name: "Expense Cuts",
        handle: "expense_cuts",
        category: "Actions",
        cost: 0,
        immediateMoney: 5
    },
    {
        name: "Quick Contract",
        handle: "quick_contract",
        category: "Actions",
        cost: 0,
        immediateMoney: 4
    },

    // Projects Cards (2)
    {
        name: "Revolving Door",
        handle: "revolving_door",
        category: "Projects",
        cost: 8,
        permanent: true,
        generalEffects: "You can give one political donation, conditional on a public action card being played"
    },
    {
        name: "Think Tank",
        handle: "think_tank", 
        category: "Projects",
        cost: 6,
        permanent: true,
        generalEffects: "You can destroy one of the public cards and only give 5 to the parties"
    },
    {
        name: "Shell Company",
        handle: "shell_company",
        category: "Projects", 
        cost: 7,
        permanent: true,
        generalEffects: "This company cannot be targeted by any tax law"
    }
];

// Public Action Cards
const publicActionCards = [
    // Outlawing Cards (5) - Updated for new categories
    {
        name: "Production Nationalization",
        handle: "outlaw_production",
        effects: "Remove one Production category private action card from play"
    },
    {
        name: "Labour Regulation",
        handle: "outlaw_jobs",
        effects: "Remove one Jobs category private action card from play"
    },
    {
        name: "Corporation Regulation",
        handle: "outlaw_practices",
        effects: "Remove one Practices category private action card from play"
    },

    {
        name: "Public Interest Protection",
        handle: "outlaw_projects",
        effects: "Remove one Projects category private action card from play"
    },
    {
        name: "Anti-Corruption Investigation",
        handle: "anti_corruption",
        effects: "The party currently having the most money immediately loses 2 political influence"
    },
    {
        name: "Constitutional Challenge",
        handle: "constitutional_challenge",
        politicalCapitalCost: 5,
        effects: "Remove any permanent private action card from play without triggering its interest group effects"
    },

    // Controversial Sector Support Cards (6) - Keep existing
    {
        name: "Border Conflict",
        handle: "border_conflict",
        politicalCapitalCost: 2,
        overallPopularity: -2,
        interestGroupEffects: { "army": 2, "climate": -1 },
        effects: "Give 3 money per military production capacity"
    },
    {
        name: "Declare War",
        handle: "declare_war",
        politicalCapitalCost: 4,
        overallPopularity: -4,
        interestGroupEffects: { "army": 3, "academia": -2, "climate": -2 },
        effects: "Give 6 money per military production capacity"
    },
    {
        name: "Privatize Hospitals",
        handle: "privatize_hospitals",
        politicalCapitalCost: 3,
        overallPopularity: -2,
        interestGroupEffects: { "banks": 2, "service": -3, "pensioners": -1 },
        effects: "Give 3 money per pharma production capacity"
    },
    {
        name: "Healthcare Deregulation",
        handle: "healthcare_deregulation",
        politicalCapitalCost: 5,
        overallPopularity: -3,
        interestGroupEffects: { "banks": 3, "service": -4, "pensioners": -2 },
        effects: "Give 6 money per pharma production capacity"
    },
    {
        name: "Surveillance Program",
        handle: "surveillance_program",
        politicalCapitalCost: 2,
        overallPopularity: -2,
        interestGroupEffects: { "service": 1, "paper": -2, "academia": -1 },
        effects: "Give 3 money per tech production capacity"
    },
    {
        name: "Digital ID Mandate",
        handle: "digital_id_mandate",
        politicalCapitalCost: 4,
        overallPopularity: -3,
        interestGroupEffects: { "service": 2, "paper": -3, "unions": -2 },
        effects: "Give 6 money per tech production capacity"
    },

    // Tax Cards (3)
    {
        name: "Small Business Tax",
        handle: "small_tax",
        politicalCapitalCost: 2,
        overallPopularity: 3,
        interestGroupEffects: { "service": 2, "banks": -1 },
        effects: "One company has to pay 2 money"
    },
    {
        name: "Corporate Tax",
        handle: "medium_tax",
        politicalCapitalCost: 4,
        overallPopularity: 4,
        interestGroupEffects: { "service": 3, "banks": -2 },
        effects: "Two companies have to pay 2 money each"
    },
    {
        name: "Wealth Tax",
        handle: "wealth_tax",
        politicalCapitalCost: 5,
        overallPopularity: 5,
        interestGroupEffects: { "service": 3, "banks": -3, "unions": 2 },
        effects: "One company has to pay 4 money"
    },
    {
        name: "Progressive Tax",
        handle: "progressive_tax",
        politicalCapitalCost: 7,
        overallPopularity: 4,
        interestGroupEffects: { "service": 4, "banks": -4, "unions": 3 },
        effects: "Two companies have to pay 4 money each"
    },

    // Wage and Practice Laws (2)
    {
        name: "Minimum Wage Law",
        handle: "minimum_wage_law",
        politicalCapitalCost: 4,
        overallPopularity: 4,
        interestGroupEffects: { "unions": 4, "banks": -3 },
        effects: "In the next turn, companies make only half as much money via Jobs cards (rounding down)"
    },
    {
        name: "Corporate Ethics Law",
        handle: "ethics_law",
        politicalCapitalCost: 5,
        overallPopularity: 4,
        interestGroupEffects: { "service": 3, "paper": 2, "banks": -3 },
        effects: "In the next turn, companies make only half as much money via Practices cards (rounding down)"
    },

    // State Purchase Cards (6) - Party buys production elements
    {
        name: "Military Procurement",
        handle: "buy_military_one",
        politicalCapitalCost: 3,
        overallPopularity: 0,
        interestGroupEffects: { "army": 2, "unions": 1 },
        effects: "Buy one specific military production for 2 money each"
    },
    {
        name: "Defense Expansion",
        handle: "buy_military_two",
        politicalCapitalCost: 6,
        overallPopularity: -1,
        interestGroupEffects: { "army": 4, "unions": 2, "climate": -1 },
        effects: "Buy two specific military production for 2 money each"
    },
    {
        name: "Public Health Investment",
        handle: "buy_pharma_one",
        politicalCapitalCost: 4,
        overallPopularity: 2,
        interestGroupEffects: { "pensioners": 3, "service": 1 },
        effects: "Buy one specific pharma production for 2 money each"
    },
    {
        name: "National Health Service",
        handle: "buy_pharma_two",
        politicalCapitalCost: 8,
        overallPopularity: 3,
        interestGroupEffects: { "pensioners": 5, "service": 2, "banks": -2 },
        effects: "Buy two specific pharma production for 2 money each"
    },
    {
        name: "Digital Infrastructure",
        handle: "buy_tech_one",
        politicalCapitalCost: 3,
        overallPopularity: 1,
        interestGroupEffects: { "academia": 2, "service": 1 },
        effects: "Buy one specific tech production for 2 money each"
    },
    {
        name: "National Tech Initiative",
        handle: "buy_tech_two",
        politicalCapitalCost: 6,
        overallPopularity: 1,
        interestGroupEffects: { "academia": 4, "service": 2, "unions": 1 },
        effects: "Buy two specific tech production for 2 money each"
    },

    // Interest Group Conflict Cards (6) - Pitting groups against each other
    {
        name: "Religious Education Reform",
        handle: "religious_education",
        politicalCapitalCost: 4,
        overallPopularity: 0,
        interestGroupEffects: { "church": 4, "academia": -3 }
    },
    {
        name: "Land Redistribution",
        handle: "land_redistribution",
        politicalCapitalCost: 5,
        overallPopularity: 1,
        interestGroupEffects: { "farmers": 5, "landlords": -6 }
    },
    {
        name: "Banking Deregulation",
        handle: "banking_deregulation",
        politicalCapitalCost: 3,
        overallPopularity: -2,
        interestGroupEffects: { "banks": 4, "pensioners": -4 }
    },
    {
        name: "Military Housing Program",
        handle: "military_housing",
        politicalCapitalCost: 4,
        overallPopularity: 0,
        interestGroupEffects: { "army": 3, "landlords": -3 }
    },
    {
        name: "Climate Emergency Powers",
        handle: "climate_emergency",
        politicalCapitalCost: 6,
        overallPopularity: 2,
        interestGroupEffects: { "climate": 5, "farmers": -4, "banks": -2 }
    },
    {
        name: "Pension Fund Investment Rules",
        handle: "pension_investment",
        politicalCapitalCost: 3,
        overallPopularity: 1,
        interestGroupEffects: { "pensioners": 3, "banks": -2, "climate": 2 }
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { civilSocietyCards, privateActionCards, publicActionCards };
}

