export interface Question {
  id: number;
  text: string;
  weights: Record<string, number>;
}
