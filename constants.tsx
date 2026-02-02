
import { ConflictStyle, Question, ScoringMap, StyleMeta } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, a: "There are times when I let others take responsibility for solving the problem.", b: "Rather than negotiate the things on which we disagree, I try to stress the things upon which we both agree." },
  { id: 2, a: "I try to find a compromise situation.", b: "I attempt to deal with all of his and my concerns." },
  { id: 3, a: "I am usually firm in pursuing my goals.", b: "I might try to soothe the other's feelings and preserve our relationship." },
  { id: 4, a: "I try to find a compromise solution.", b: "I sometimes sacrifice my own wishes for the wishes of the other person." },
  { id: 5, a: "I consistently seek the other's help in working out a solution.", b: "I try to do what is necessary to avoid useless tensions." },
  { id: 6, a: "I try to avoid creating unpleasantness for myself.", b: "I try to win my position." },
  { id: 7, a: "I try to postpone the issue until I have had some time to think it over.", b: "I give up some points in exchange for others." },
  { id: 8, a: "I am usually firm in pursuing my goals.", b: "I attempt to get all concerns and issues immediately out in the open." },
  { id: 9, a: "I feel that differences are not always worth worrying about.", b: "I make some effort to get my way." },
  { id: 10, a: "I am firm in pursuing my goals.", b: "I try to find a compromise solution." },
  { id: 11, a: "I attempt to get all concerns and issues immediately out in the open.", b: "I might try to soothe the other's feelings and preserve our relationship." },
  { id: 12, a: "I sometimes avoid taking positions which would create controversy.", b: "I will let him have some of his positions if he lets me have some of mine." },
  { id: 13, a: "I propose a middle ground.", b: "I press to get my points made." },
  { id: 14, a: "I tell him my ideas and ask him for his.", b: "I try to show him the logic and benefits of my position." },
  { id: 15, a: "I might try to soothe the other's feelings and preserve our relationship.", b: "I try to do what is necessary to avoid useless tensions." },
  { id: 16, a: "I try not to hurt the other's feelings.", b: "I try to convince the other person of the merits of my position." },
  { id: 17, a: "I am usually firm in pursuing my goals.", b: "I try to postpone the issue until I have had some time to think it over." },
  { id: 18, a: "If it makes the other person happy, I might let him maintain his views.", b: "I will let him have some of his positions if he lets me have some of mine." },
  { id: 19, a: "I attempt to get all concerns and issues immediately out in the open.", b: "I try to postpone the issue until I have had some time to think it over." },
  { id: 20, a: "I attempt to immediately work through our differences.", b: "I try to find a fair combination of gains and losses for both of us." },
  { id: 21, a: "In approaching negotiations, I try to be considerate of the other person's wishes.", b: "I always lean toward a direct discussion of the problem." },
  { id: 22, a: "I try to find a position that is intermediate between his and mine.", b: "I assert my wishes." },
  { id: 23, a: "I am very often concerned with satisfying all our wishes.", b: "There are times when I let others take responsibility for solving the problem." },
  { id: 24, a: "If the other's position seems very important to him, I would try to meet his wishes.", b: "I try to get him to settle for a compromise." },
  { id: 25, a: "I try to show him the logic and benefits of my position.", b: "In approaching negotiations, I try to be considerate of the other person's wishes." },
  { id: 26, a: "I propose a middle ground.", b: "I am nearly always concerned with satisfying all our wishes." },
  { id: 27, a: "I sometimes avoid taking positions that would create controversy.", b: "If it makes the other person happy, I might let him maintain his views." },
  { id: 28, a: "I am usually firm in pursuing my goals.", b: "I usually seek the other's help in working out a solution." },
  { id: 29, a: "I propose a middle ground.", b: "I feel that differences are not always worth worrying about." },
  { id: 30, a: "I try not to hurt the other's feelings.", b: "I always share the problem with the other person so that we can work it out." }
];

export const SCORING_MAP: ScoringMap = {
  1: { a: ConflictStyle.AVOIDING, b: ConflictStyle.ACCOMMODATING },
  2: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.COLLABORATING },
  3: { a: ConflictStyle.COMPETING, b: ConflictStyle.ACCOMMODATING },
  4: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.ACCOMMODATING },
  5: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.AVOIDING },
  6: { a: ConflictStyle.AVOIDING, b: ConflictStyle.COMPETING },
  7: { a: ConflictStyle.AVOIDING, b: ConflictStyle.COMPROMISING },
  8: { a: ConflictStyle.COMPETING, b: ConflictStyle.COLLABORATING },
  9: { a: ConflictStyle.AVOIDING, b: ConflictStyle.COMPETING },
  10: { a: ConflictStyle.COMPETING, b: ConflictStyle.COMPROMISING },
  11: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.ACCOMMODATING },
  12: { a: ConflictStyle.AVOIDING, b: ConflictStyle.COMPROMISING },
  13: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.COMPETING },
  14: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.COMPETING },
  15: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.AVOIDING },
  16: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.COMPETING },
  17: { a: ConflictStyle.COMPETING, b: ConflictStyle.AVOIDING },
  18: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.COMPROMISING },
  19: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.AVOIDING },
  20: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.COMPROMISING },
  21: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.COLLABORATING },
  22: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.COMPETING },
  23: { a: ConflictStyle.COLLABORATING, b: ConflictStyle.AVOIDING },
  24: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.COMPROMISING },
  25: { a: ConflictStyle.COMPETING, b: ConflictStyle.ACCOMMODATING },
  26: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.COLLABORATING },
  27: { a: ConflictStyle.AVOIDING, b: ConflictStyle.ACCOMMODATING },
  28: { a: ConflictStyle.COMPETING, b: ConflictStyle.COLLABORATING },
  29: { a: ConflictStyle.COMPROMISING, b: ConflictStyle.AVOIDING },
  30: { a: ConflictStyle.ACCOMMODATING, b: ConflictStyle.COLLABORATING }
};

export const STYLE_DETAILS: Record<ConflictStyle, StyleMeta> = {
  [ConflictStyle.COMPETING]: {
    name: "Competing",
    archetype: "The Strategist",
    description: "Assertive and uncooperative—the strategist pursues their own concerns at the other person's expense.",
    strengths: ["Quick action", "Firmness", "Directness"],
    weaknesses: ["Can damage relationships", "Missed win-win opportunities", "Low morale"],
    icon: "🎯",
    color: "#ef4444" // red-500
  },
  [ConflictStyle.COLLABORATING]: {
    name: "Collaborating",
    archetype: "The Architect",
    description: "Both assertive and cooperative—the architect attempts to work with the other person to find a solution that satisfies the concerns of both.",
    strengths: ["Long-term solutions", "Buy-in", "Strong relationships"],
    weaknesses: ["Time-consuming", "Energy intensive", "Can be overkill"],
    icon: "🏗️",
    color: "#10b981" // emerald-500
  },
  [ConflictStyle.COMPROMISING]: {
    name: "Compromising",
    archetype: "The Diplomat",
    description: "Intermediate in both assertiveness and cooperativeness—the diplomat finds a middle ground that partially satisfies everyone.",
    strengths: ["Quick resolution", "Fairness", "Temporary balance"],
    weaknesses: ["Win-Lose-Win-Lose", "Superficiality", "Underlying issues persist"],
    icon: "🤝",
    color: "#f59e0b" // amber-500
  },
  [ConflictStyle.AVOIDING]: {
    name: "Avoiding",
    archetype: "The Stoic",
    description: "Unassertive and uncooperative—the stoic sidesteps the conflict, postpones issues, or withdraws from threatening situations.",
    strengths: ["Avoiding drama", "Protecting self", "Gaining perspective"],
    weaknesses: ["Issues fester", "Loss of influence", "Bottleneck creation"],
    icon: "🛡️",
    color: "#6366f1" // indigo-500
  },
  [ConflictStyle.ACCOMMODATING]: {
    name: "Accommodating",
    archetype: "The Altruist",
    description: "Unassertive and cooperative—the altruist neglects their own concerns to satisfy the concerns of the other person.",
    strengths: ["Peacekeeping", "Service", "Building capital"],
    weaknesses: ["Resentment", "Influence loss", "Personal goals neglected"],
    icon: "💖",
    color: "#ec4899" // pink-500
  }
};
