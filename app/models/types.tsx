export type Campaign = {
  id: string;
  name: string;
  dailyBudget: number;
  keywords: string[]
};

export type Keyword = {
  id: string;
  text: string;
  bid: number;
  match_type: "exact" | "phrase" | "broad";
  state: "enabled" | "disabled";
};
