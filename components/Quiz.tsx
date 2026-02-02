
import React, { useMemo } from 'react';
import { QUESTIONS } from '../constants';
import { QuizState } from '../types';

interface QuizProps {
  quizState: QuizState;
  onAnswer: (choice: 'a' | 'b') => void;
  totalQuestions: number;
}

const Quiz: React.FC<QuizProps> = ({ quizState, onAnswer, totalQuestions }) => {
  const currentQuestion = QUESTIONS[quizState.currentQuestionIndex];
  const progress = (quizState.currentQuestionIndex / totalQuestions) * 100;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
      {/* Header & Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">Assessment Phase</span>
            <h2 className="text-3xl font-bold mt-1">Which feels more like you?</h2>
          </div>
          <div className="text-slate-400 font-medium">
            Question <span className="text-slate-900">{quizState.currentQuestionIndex + 1}</span> / {totalQuestions}
          </div>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="grid grid-cols-1 gap-6">
        <button
          onClick={() => onAnswer('a')}
          className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 text-left flex items-start gap-6 active:scale-[0.98]"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            A
          </div>
          <p className="text-xl md:text-2xl font-medium leading-snug text-slate-800">
            {currentQuestion.a}
          </p>
        </button>

        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-slate-400 font-bold text-sm uppercase">OR</span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <button
          onClick={() => onAnswer('b')}
          className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-50 transition-all duration-300 text-left flex items-start gap-6 active:scale-[0.98]"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
            B
          </div>
          <p className="text-xl md:text-2xl font-medium leading-snug text-slate-800">
            {currentQuestion.b}
          </p>
        </button>
      </div>

      <p className="text-center mt-12 text-slate-400 text-sm italic">
        "Pick the response which you would be more likely to use, even if neither fits perfectly."
      </p>
    </div>
  );
};

export default Quiz;
