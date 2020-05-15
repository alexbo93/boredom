export type Activity = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  id: string;
};

export type Activities = {
  [key: string]: Activity;
};
