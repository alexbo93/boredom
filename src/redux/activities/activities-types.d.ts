export type Activity = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
};

export type Activities = {
  [key: string]: Activity;
};
