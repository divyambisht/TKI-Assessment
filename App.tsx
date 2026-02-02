
import React, { useState } from 'react';
import { QUESTIONS, SCORING_MAP } from './constants';
import { ConflictStyle, QuizState } from './types';
import Quiz from './components/Quiz';
import Result from './components/Result';

type View = 'intro' | 'quiz' | 'result';

const App: React.FC = () => {
  const [view, setView] = useState<View>('intro');
  const [userName, setUserName] = useState<string>('');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    scores: {
      [ConflictStyle.COMPETING]: 0,
      [ConflictStyle.COLLABORATING]: 0,
      [ConflictStyle.COMPROMISING]: 0,
      [ConflictStyle.AVOIDING]: 0,
      [ConflictStyle.ACCOMMODATING]: 0,
    }
  });

  const startQuiz = () => {
    if (userName.trim()) {
      setView('quiz');
    }
  };

  const handleAnswer = (choice: 'a' | 'b') => {
    const currentQuestion = QUESTIONS[quizState.currentQuestionIndex];
    const styleScored = SCORING_MAP[currentQuestion.id][choice];

    setQuizState(prev => {
      const newAnswers = { ...prev.answers, [currentQuestion.id]: choice };
      const newScores = { ...prev.scores, [styleScored]: prev.scores[styleScored] + 1 };
      
      const isLastQuestion = prev.currentQuestionIndex === QUESTIONS.length - 1;
      
      if (isLastQuestion) {
        setTimeout(() => setView('result'), 300);
      }

      return {
        ...prev,
        answers: newAnswers,
        scores: newScores,
        currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1
      };
    });
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      scores: {
        [ConflictStyle.COMPETING]: 0,
        [ConflictStyle.COLLABORATING]: 0,
        [ConflictStyle.COMPROMISING]: 0,
        [ConflictStyle.AVOIDING]: 0,
        [ConflictStyle.ACCOMMODATING]: 0,
      }
    });
    setUserName('');
    setView('intro');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      {view === 'intro' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-200 flex items-center justify-center text-5xl mb-8 animate-float">
            📊
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            TKI Assessment
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            The <b>Thomas-Kilman Conflict Mode Instrument</b> is the world's most trusted tool for understanding conflict behavior.
          </p>
          
          <div className="w-full max-w-sm mb-12">
            <label htmlFor="name" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
              Enter your name to begin
            </label>
            <input 
              type="text" 
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Alex Johnson"
              className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg font-medium focus:border-indigo-500 focus:outline-none transition-colors text-center shadow-sm"
              onKeyDown={(e) => e.key === 'Enter' && startQuiz()}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">30 Mode Choices</h3>
              <p className="text-sm text-slate-500">Forced-choice statements used by professionals worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold mb-2">Formal Scoring</h3>
              <p className="text-sm text-slate-500">Calculate your results across the 5 standard conflict modes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold mb-2">AI Interpretation</h3>
              <p className="text-sm text-slate-500">Gemini-enhanced feedback on your TKI scores.</p>
            </div>
          </div>
          
          <button 
            onClick={startQuiz}
            disabled={!userName.trim()}
            className={`px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg active:scale-95 ${
              userName.trim() 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-indigo-200' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Start Assessment
          </button>
        </div>
      )}

      {view === 'quiz' && (
        <Quiz 
          quizState={quizState} 
          onAnswer={handleAnswer} 
          totalQuestions={QUESTIONS.length} 
        />
      )}

      {view === 'result' && (
        <Result 
          scores={quizState.scores} 
          userName={userName}
          onReset={resetQuiz} 
        />
      )}
    </div>
  );
};

export default App;
