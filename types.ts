
export enum ConflictStyle {
  COMPETING = 'Competing',
  COLLABORATING = 'Collaborating',
  COMPROMISING = 'Compromising',
  AVOIDING = 'Avoiding',
  ACCOMMODATING = 'Accommodating'
}

export interface Question {
  id: number;
  a: string;
  b: string;
}

export interface ScoringMap {
  [key: number]: {
    a: ConflictStyle;
    b: ConflictStyle;
  };
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: { [questionId: number]: 'a' | 'b' };
  scores: Record<ConflictStyle, number>;
}

export interface StyleMeta {
  name: string;
  archetype: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  icon: string;
  color: string;
}
