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
    // Investment Cards (10)
    {
        name: "New Factory",
        handle: "factory",
        category: "Investment",
        cost: 4,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "climate": -4, "unions": 2 }
    },
    {
        name: "Oil Refinery",
        handle: "oil_refinery",
        category: "Investment",
        cost: 5,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "climate": -5, "farmers": 2 }
    },
    {
        name: "Solar Farm",
        handle: "solar_farm",
        category: "Investment",
        cost: 8,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "climate": 4, "academia": 1 }
    },
    {
        name: "Strip Mining",
        handle: "strip_mining",
        category: "Investment",
        cost: 3,
        moneyPerTurn: 5,
        permanent: true,
        interestGroupEffects: { "climate": -5, "farmers": -2 }
    },
    {
        name: "Casino",
        handle: "casino",
        category: "Investment",
        cost: 6,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "church": -3, "pensioners": -2 }
    },
    {
        name: "Luxury Resort",
        handle: "luxury_resort",
        category: "Investment",
        cost: 9,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "landlords": 3, "farmers": -2 }
    },
    {
        name: "Tobacco Farm",
        handle: "tobacco_farm",
        category: "Investment",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "farmers": 3, "pensioners": -4, "church": -2 }
    },
    {
        name: "Data Center",
        handle: "data_center",
        category: "Investment",
        cost: 6,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "academia": 1, "climate": -2 }
    },
    {
        name: "Shopping Mall",
        handle: "shopping_mall",
        category: "Investment",
        cost: 7,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "landlords": 2, "climate": -1 }
    },
    {
        name: "Recycling Plant",
        handle: "recycling_plant",
        category: "Investment",
        cost: 7,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "climate": 3, "unions": 2 }
    },

    // Jobs Cards (10)
    {
        name: "Asset Liquidation",
        handle: "asset_liquidation",
        category: "Jobs",
        immediateMoney: 12
    },
    {
        name: "Automation Line",
        handle: "automation_line",
        category: "Jobs",
        cost: 5,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "unions": -5, "academia": 2 }
    },
    {
        name: "Union Busting",
        handle: "union_busting",
        category: "Jobs",
        cost: 3,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "unions": -6 }
    },
    {
        name: "Employee Benefits",
        handle: "employee_benefits",
        category: "Jobs",
        cost: 7,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "unions": 4, "pensioners": 2 }
    },
    {
        name: "Gig Economy Platform",
        handle: "gig_economy",
        category: "Jobs",
        cost: 4,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "unions": -4, "service": -2 }
    },
    {
        name: "Chaplain Program",
        handle: "chaplain_program",
        category: "Jobs",
        cost: 3,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "church": 3, "unions": 2 }
    },
    {
        name: "Senior Hiring Initiative",
        handle: "senior_hiring",
        category: "Jobs",
        cost: 5,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "pensioners": 4, "unions": 2 }
    },
    {
        name: "Internship Program",
        handle: "internship_program",
        category: "Jobs",
        cost: 2,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "academia": 2, "unions": -1 }
    },
    {
        name: "Temp Agency",
        handle: "temp_agency",
        category: "Jobs",
        cost: 3,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "unions": -3 }
    },
    {
        name: "Profit Sharing",
        handle: "profit_sharing",
        category: "Jobs",
        cost: 8,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "unions": 5 }
    },

    // Practices Cards (10)
    {
        name: "Emergency Sale",
        handle: "emergency_sale",
        category: "Practices",
        immediateMoney: 10
    },
    {
        name: "Price Increase",
        handle: "price_increase",
        category: "Practices",
        immediateMoney: 8
    },
    {
        name: "Stock Buyback",
        handle: "stock_buyback",
        category: "Practices",
        immediateMoney: 6
    },
    {
        name: "Tax Avoidance",
        handle: "tax_avoidance",
        category: "Practices",
        cost: 2,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "service": -3 }
    },
    {
        name: "Regulatory Capture",
        handle: "regulatory_capture",
        category: "Practices",
        cost: 6,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "service": 3, "paper": -3 }
    },
    {
        name: "Church Donations",
        handle: "church_donations",
        category: "Practices",
        cost: 4,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "church": 4, "pensioners": 1 }
    },
    {
        name: "Academic Grants",
        handle: "academic_grants",
        category: "Practices",
        cost: 5,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "academia": 3, "service": 1 }
    },
    {
        name: "Farmer Subsidies",
        handle: "farmer_subsidies",
        category: "Practices",
        cost: 3,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "farmers": 4 }
    },
    {
        name: "Lobbying Campaign",
        handle: "lobbying_campaign",
        category: "Practices",
        cost: 4,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "service": 2, "paper": -2 }
    },
    {
        name: "Environmental Greenwashing",
        handle: "greenwashing",
        category: "Practices",
        cost: 3,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "climate": 1, "paper": -2 }
    },

    // Projects Cards (10)
    {
        name: "Private Hospital",
        handle: "private_hospital",
        category: "Projects",
        cost: 8,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "service": -2, "pensioners": 3 }
    },
    {
        name: "University Sponsorship",
        handle: "university_sponsorship",
        category: "Projects",
        cost: 6,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "academia": 3, "service": 1 }
    },
    {
        name: "Church Renovation",
        handle: "church_renovation",
        category: "Projects",
        cost: 5,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "church": 4, "pensioners": 2 }
    },
    {
        name: "Newspaper Acquisition",
        handle: "newspaper_acquisition",
        category: "Projects",
        cost: 7,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "paper": 3 }
    },
    {
        name: "Retirement Community",
        handle: "retirement_community",
        category: "Projects",
        cost: 9,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "pensioners": 4, "service": 1 }
    },
    {
        name: "Agricultural Research",
        handle: "agricultural_research",
        category: "Projects",
        cost: 5,
        moneyPerTurn: 2,
        permanent: true,
        interestGroupEffects: { "farmers": 3, "academia": 2 }
    },
    {
        name: "Private Prison",
        handle: "private_prison",
        category: "Projects",
        cost: 6,
        moneyPerTurn: 4,
        permanent: true,
        interestGroupEffects: { "service": -3 }
    },
    {
        name: "Climate Research Center",
        handle: "climate_research",
        category: "Projects",
        cost: 8,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "climate": 4, "academia": 3 }
    },
    {
        name: "Land Development",
        handle: "land_development",
        category: "Projects",
        cost: 6,
        moneyPerTurn: 3,
        permanent: true,
        interestGroupEffects: { "landlords": 4, "climate": -2 }
    },
    {
        name: "Community Center",
        handle: "community_center",
        category: "Projects",
        cost: 8,
        moneyPerTurn: 1,
        permanent: true,
        interestGroupEffects: { "pensioners": 3, "unions": 2 }
    },

    // Production Capacity Cards (6)
    {
        name: "Small Arms Factory",
        handle: "small_arms_factory",
        category: "Investment",
        cost: 6,
        permanent: true,
        interestGroupEffects: { "army": 2, "unions": 1 },
        generalEffects: "Gain 1 military production capacity"
    },
    {
        name: "Defense Contractor",
        handle: "defense_contractor",
        category: "Investment",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "army": 4, "unions": 2 },
        generalEffects: "Gain 2 military production capacity"
    },
    {
        name: "Pharmaceutical Lab",
        handle: "pharma_lab_small",
        category: "Investment",
        cost: 6,
        permanent: true,
        interestGroupEffects: { "pensioners": 2, "academia": 1 },
        generalEffects: "Gain 1 pharma production capacity"
    },
    {
        name: "Medical Research Complex",
        handle: "medical_research_complex",
        category: "Investment",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "pensioners": 4, "academia": 2 },
        generalEffects: "Gain 2 pharma production capacity"
    },
    {
        name: "Tech Startup Incubator",
        handle: "tech_startup",
        category: "Investment",
        cost: 6,
        permanent: true,
        interestGroupEffects: { "academia": 2, "unions": -1 },
        generalEffects: "Gain 1 tech production capacity"
    },
    {
        name: "Tech Campus",
        handle: "silicon_valley_campus",
        category: "Investment",
        cost: 12,
        permanent: true,
        interestGroupEffects: { "academia": 3, "unions": -2 },
        generalEffects: "Gain 2 tech production capacity"
    }
];

// Public Action Cards
const publicActionCards = [
    // Popular/Expensive Cards
    {
        name: "Universal Healthcare",
        handle: "universal_healthcare",
        politicalCapitalCost: 8,
        overallPopularity: 4,
        interestGroupEffects: { "pensioners": 3, "banks": -2 },
        effects: "Permanent healthcare system for all citizens"
    },
    {
        name: "Free University Education",
        handle: "free_university",
        politicalCapitalCost: 7,
        overallPopularity: 3,
        interestGroupEffects: { "academia": 4 },
        effects: "Permanent free higher education system"
    },
    {
        name: "Green New Deal",
        handle: "green_new_deal",
        politicalCapitalCost: 9,
        overallPopularity: 3,
        interestGroupEffects: { "climate": 5, "banks": -3 },
        effects: "Permanent massive environmental transformation program"
    },
    {
        name: "Public Housing Program",
        handle: "public_housing",
        politicalCapitalCost: 6,
        overallPopularity: 3,
        interestGroupEffects: { "unions": 2, "landlords": -4 },
        effects: "Permanent affordable housing construction program"
    },
    {
        name: "Infrastructure Investment",
        handle: "infrastructure_investment",
        politicalCapitalCost: 5,
        overallPopularity: 2,
        interestGroupEffects: { "unions": 3, "service": 2 },
        effects: "One-time major infrastructure spending boost"
    },

    // Moderate Cards
    {
        name: "Minimum Wage Increase",
        handle: "minimum_wage",
        politicalCapitalCost: 4,
        overallPopularity: 2,
        interestGroupEffects: { "unions": 3, "banks": -2 },
        effects: "Permanent higher minimum wage law"
    },
    {
        name: "Environmental Regulations",
        handle: "environmental_regulations",
        politicalCapitalCost: 5,
        overallPopularity: 1,
        interestGroupEffects: { "climate": 3, "banks": -2 },
        effects: "Permanent stricter environmental standards"
    },
    {
        name: "Education Funding",
        handle: "education_funding",
        politicalCapitalCost: 3,
        overallPopularity: 2,
        interestGroupEffects: { "academia": 3 },
        effects: "One-time major education spending increase"
    },
    {
        name: "Agricultural Subsidies",
        handle: "agricultural_subsidies",
        politicalCapitalCost: 3,
        overallPopularity: 1,
        interestGroupEffects: { "farmers": 4 },
        effects: "Permanent farm support payments"
    },
    {
        name: "Senior Benefits",
        handle: "senior_benefits",
        politicalCapitalCost: 4,
        overallPopularity: 2,
        interestGroupEffects: { "pensioners": 4 },
        effects: "Permanent enhanced retirement benefits"
    },

    // Cheap/Popular Cards
    {
        name: "Tax Relief for Workers",
        handle: "tax_relief_workers",
        politicalCapitalCost: 2,
        overallPopularity: 2,
        interestGroupEffects: { "unions": 2 },
        effects: "One-time tax rebate for working families"
    },
    {
        name: "Church Tax Exemption",
        handle: "church_tax_exemption",
        politicalCapitalCost: 1,
        overallPopularity: 1,
        interestGroupEffects: { "church": 3 },
        effects: "Permanent religious organization tax benefits"
    },
    {
        name: "Press Freedom Act",
        handle: "press_freedom",
        politicalCapitalCost: 2,
        overallPopularity: 1,
        interestGroupEffects: { "paper": 3 },
        effects: "Permanent media protection laws"
    },
    {
        name: "Climate Awareness Campaign",
        handle: "climate_awareness",
        politicalCapitalCost: 1,
        overallPopularity: 1,
        interestGroupEffects: { "climate": 2 },
        effects: "One-time public education initiative"
    },
    {
        name: "Farmer Support Program",
        handle: "farmer_support",
        politicalCapitalCost: 2,
        overallPopularity: 1,
        interestGroupEffects: { "farmers": 3 },
        effects: "One-time agricultural assistance package"
    },

    // Outlawing Cards
    {
        name: "Expropriation",
        handle: "outlaw_investment",
        effects: "Remove one Investment category private action card from play"
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

    // Controversial Sector Support Cards
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
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { civilSocietyCards, privateActionCards, publicActionCards };
}
