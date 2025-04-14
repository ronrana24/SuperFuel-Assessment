export type Campaign = {
  id: number;
  name: string;
  dailyBudget: number;
  keywords: string[];
};

export type Keyword = {
  state: "enabled" | "disabled";
  bid: number;
  text: string;
};

export type KeywordsList = {
  [key: string]: Keyword;
};
