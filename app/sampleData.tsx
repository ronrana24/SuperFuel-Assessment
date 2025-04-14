const getRandomBudget = () => (Math.random() * (200 - 50) + 50).toFixed(2);

const getRandomKeywords = () => {
    const keywordsList = ["marketing", "advertising", "promotion", "sales", "digital", "social media", "branding", "campaign", "strategy", "analytics"];
    const randomKeywords: string[] = [];
    const numberOfKeywords = Math.floor(Math.random() * 5) + 1; // Random number of keywords between 1 and 5

    for (let i = 0; i < numberOfKeywords; i++) {
        const randomIndex = Math.floor(Math.random() * keywordsList.length);
        const keyword = keywordsList[randomIndex];
        if (!randomKeywords.includes(keyword)) {
            randomKeywords.push(keyword);
        }
    }
    return randomKeywords;
};

export type Campaign = {
    id: number;
    name: string;
    dailyBudget: number;
    keywords: string[];
}

export const dummyCampaigns: Campaign[] = [
    {
        id: 1,
        name: "Campaign A",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 2,
        name: "Campaign B",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 3,
        name: "Campaign C",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 4,
        name: "Campaign D",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 5,
        name: "Campaign E",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 6,
        name: "Campaign F",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 7,
        name: "Campaign G",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 8,
        name: "Campaign H",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 9,
        name: "Campaign I",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    },
    {
        id: 10,
        name: "Campaign J",
        dailyBudget: parseFloat(getRandomBudget()),
        keywords: getRandomKeywords()
    }
];