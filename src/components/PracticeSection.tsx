import React, { useState } from 'react';
import {
  MULTIPLE_CHOICE_QUESTIONS,
  REORDER_QUESTIONS,
  FILL_BLANK_QUESTIONS,
  TRANSLATION_QUESTIONS
} from '../data/exercises';
import { MultipleChoiceQuestion, ReorderQuestion, FillBlankQuestion, TranslationQuestion } from '../types';
import { speakChinese } from '../utils/speech';
import { CheckCircle2, XCircle, Volume2, RotateCcw, Award, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeSectionProps {
  showPinyin: boolean;
  audioSpeed: number;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  showPinyin,
  audioSpeed
}) => {
  const [practiceMode, setPracticeMode] = useState<'mc' | 'reorder' | 'fill' | 'translate' | 'mock'>('mc');

  // MC State
  const [mcIndex, setMcIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [mcScore, setMcScore] = useState(0);

  // Reorder State
  const [roIndex, setRoIndex] = useState(0);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [roResult, setRoResult] = useState<'correct' | 'wrong' | null>(null);

  // Fill in blank state
  const [fbIndex, setFbIndex] = useState(0);
  const [fbSelected, setFbSelected] = useState<string | null>(null);
  const [fbSubmitted, setFbSubmitted] = useState(false);

  // Translation state
  const [trIndex, setTrIndex] = useState(0);
  const [trSelectedWords, setTrSelectedWords] = useState<string[]>([]);
  const [trSubmitted, setTrSubmitted] = useState(false);

  // Mock Exam State
  const [isExamMode, setIsExamMode] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examScore, setExamScore] = useState(0);

  // MC handlers
  const currentMc = MULTIPLE_CHOICE_QUESTIONS[mcIndex];
  const handleSelectOption = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);

    if (optionId === currentMc.correctAnswerId) {
      setMcScore((prev) => prev + 1);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    }
  };

  const handleNextMc = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setMcIndex((prev) => (prev + 1) % MULTIPLE_CHOICE_QUESTIONS.length);
  };

  const handleResetMc = () => {
    setMcIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setMcScore(0);
  };

  // Reorder handlers
  const currentRo = REORDER_QUESTIONS[roIndex];
  const handleToggleWordChip = (wordId: string) => {
    if (roResult !== null) return;
    if (userOrder.includes(wordId)) {
      setUserOrder(userOrder.filter((id) => id !== wordId));
    } else {
      setUserOrder([...userOrder, wordId]);
    }
  };

  const handleCheckReorder = () => {
    if (userOrder.length === 0) return;
    const isCorrect = userOrder.join('') === currentRo.correctOrder.join('') ||
      userOrder.map(id => currentRo.scrambledWords.find(w => w.id === id)?.hanzi).join('') === currentRo.fullSentence.replace(/[。，！？]/g, '');
    
    if (isCorrect) {
      setRoResult('correct');
      confetti({ particleCount: 40, spread: 60 });
    } else {
      setRoResult('wrong');
    }
  };

  const handleNextRo = () => {
    setUserOrder([]);
    setRoResult(null);
    setRoIndex((prev) => (prev + 1) % REORDER_QUESTIONS.length);
  };

  // Fill Blank Handlers
  const currentFb = FILL_BLANK_QUESTIONS[fbIndex];
  const handleCheckFillBlank = (opt: string) => {
    if (fbSubmitted) return;
    setFbSelected(opt);
    setFbSubmitted(true);
    if (opt === currentFb.correctAnswer) {
      confetti({ particleCount: 30, spread: 50 });
    }
  };

  const handleNextFb = () => {
    setFbSelected(null);
    setFbSubmitted(false);
    setFbIndex((prev) => (prev + 1) % FILL_BLANK_QUESTIONS.length);
  };

  // Translation Handlers
  const currentTr = TRANSLATION_QUESTIONS[trIndex];
  const handleToggleTrWord = (word: string) => {
    if (trSubmitted) return;
    if (trSelectedWords.includes(word)) {
      setTrSelectedWords(trSelectedWords.filter((w) => w !== word));
    } else {
      setTrSelectedWords([...trSelectedWords, word]);
    }
  };

  const handleCheckTranslation = () => {
    if (trSubmitted || trSelectedWords.length === 0) return;
    setTrSubmitted(true);
    confetti({ particleCount: 40, spread: 60 });
  };

  const handleNextTr = () => {
    setTrSelectedWords([]);
    setTrSubmitted(false);
    setTrIndex((prev) => (prev + 1) % TRANSLATION_QUESTIONS.length);
  };

  const handleSpeak = (text: string) => {
    speakChinese(text, audioSpeed);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Practice Navigation Mode Bar */}
      <div className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-xs flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => setPracticeMode('mc')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              practiceMode === 'mc'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🎯 Trắc Nghiệm ({MULTIPLE_CHOICE_QUESTIONS.length})
          </button>
          <button
            onClick={() => setPracticeMode('reorder')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              practiceMode === 'reorder'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🧩 Xếp Câu ({REORDER_QUESTIONS.length})
          </button>
          <button
            onClick={() => setPracticeMode('fill')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              practiceMode === 'fill'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            ✏️ Điền Từ ({FILL_BLANK_QUESTIONS.length})
          </button>
          <button
            onClick={() => setPracticeMode('translate')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              practiceMode === 'translate'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🔄 Luyện Dịch ({TRANSLATION_QUESTIONS.length})
          </button>
        </div>
      </div>

      {/* MODE 1: MULTIPLE CHOICE */}
      {practiceMode === 'mc' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold">
                Câu {mcIndex + 1} / {MULTIPLE_CHOICE_QUESTIONS.length}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Chuyên đề: {currentMc.category}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                Điểm: {mcScore}
              </span>
              <button
                onClick={handleResetMc}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                title="Làm lại từ đầu"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentMc.question}
            </h3>
            {showPinyin && currentMc.questionPinyin && (
              <p className="text-xs sm:text-sm font-mono text-rose-600">
                {currentMc.questionPinyin}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentMc.options.map((option) => {
              const isChosen = selectedOption === option.id;
              const isCorrect = option.id === currentMc.correctAnswerId;

              let optionStyle = 'bg-slate-50 border-slate-200/80 hover:bg-rose-50/50 hover:border-rose-300 text-slate-800';

              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                } else if (isChosen) {
                  optionStyle = 'bg-red-50 border-red-500 text-red-950';
                } else {
                  optionStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-600';
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 text-left transition-all ${optionStyle}`}
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-base block">{option.text}</span>
                    {showPinyin && option.pinyin && (
                      <span className="text-xs font-mono text-rose-600 block">{option.pinyin}</span>
                    )}
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {isAnswered && isChosen && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next */}
          {isAnswered && (
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3 pt-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                <HelpCircle className="w-4 h-4 text-rose-600" />
                <span>Giải thích ngữ pháp chi tiết</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentMc.explanation}
              </p>
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextMc}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Câu tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: SENTENCE REORDER */}
      {practiceMode === 'reorder' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold">
              Câu {roIndex + 1} / {REORDER_QUESTIONS.length}
            </span>
            <span className="text-xs text-slate-500">
              Nhấp vào các từ để sắp xếp câu đúng trật tự ngữ pháp
            </span>
          </div>

          {/* Vietnamese meaning guide */}
          <div className="p-4 bg-rose-50/50 border border-rose-200/60 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-rose-700 block mb-1">Ý nghĩa câu cần ghép:</span>
            <p className="text-base sm:text-lg font-bold text-slate-800">
              {currentRo.vietnamese}
            </p>
          </div>

          {/* Selected Order Drop Area */}
          <div className="min-h-[70px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
            {userOrder.length === 0 ? (
              <span className="text-xs text-slate-400 italic">
                (Chưa chọn từ nào. Nhấp vào các từ bên dưới để ghép câu)
              </span>
            ) : (
              userOrder.map((id, idx) => {
                const word = currentRo.scrambledWords.find((w) => w.id === id);
                if (!word) return null;
                return (
                  <button
                    key={id}
                    onClick={() => handleToggleWordChip(id)}
                    className="flex items-center space-x-1 px-3.5 py-2 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-xs hover:bg-rose-700 transition-all"
                  >
                    <span>{word.hanzi}</span>
                    {showPinyin && <span className="text-[10px] font-mono opacity-80">({word.pinyin})</span>}
                  </button>
                );
              })
            )}
          </div>

          {/* Word Pool Chips */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Ngân hàng từ vựng:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {currentRo.scrambledWords.map((word) => {
                const isUsed = userOrder.includes(word.id);
                return (
                  <button
                    key={word.id}
                    disabled={isUsed}
                    onClick={() => handleToggleWordChip(word.id)}
                    className={`px-4 py-2.5 rounded-xl border-2 font-bold text-sm transition-all ${
                      isUsed
                        ? 'opacity-30 border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'border-slate-300 bg-white hover:border-rose-400 text-slate-800 shadow-xs hover:scale-105'
                    }`}
                  >
                    <div>{word.hanzi}</div>
                    {showPinyin && <div className="text-[10px] font-mono text-rose-600">{word.pinyin}</div>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions & Result */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setUserOrder([])}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
            >
              Đặt lại
            </button>

            {roResult === null ? (
              <button
                disabled={userOrder.length === 0}
                onClick={handleCheckReorder}
                className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold disabled:opacity-40 transition-all shadow-xs"
              >
                Kiểm tra kết quả
              </button>
            ) : (
              <button
                onClick={handleNextRo}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {roResult && (
            <div
              className={`p-4 rounded-2xl border ${
                roResult === 'correct'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-red-50 border-red-200 text-red-950'
              } space-y-2`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">
                  {roResult === 'correct' ? '🎉 Chính xác!' : '❌ Chưa chính xác!'}
                </span>
                <button
                  onClick={() => handleSpeak(currentRo.fullSentence)}
                  className="flex items-center space-x-1 text-xs font-semibold px-2 py-1 bg-white rounded-lg shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Nghe câu mẫu</span>
                </button>
              </div>
              <p className="font-bold text-base">{currentRo.fullSentence}</p>
              {showPinyin && <p className="text-xs font-mono text-rose-600">{currentRo.pinyin}</p>}
              <p className="text-xs text-slate-700">{currentRo.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: FILL IN THE BLANK */}
      {practiceMode === 'fill' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold">
              Câu {fbIndex + 1} / {FILL_BLANK_QUESTIONS.length}
            </span>
            <span className="text-xs text-slate-500">Điền từ hoặc lượng từ thích hợp vào chỗ trống</span>
          </div>

          <div className="space-y-3 text-center py-4">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide">
              {currentFb.sentenceWithBlank}
            </p>
            {showPinyin && (
              <p className="text-sm font-mono text-rose-600">{currentFb.pinyinWithBlank}</p>
            )}
            <p className="text-xs sm:text-sm text-slate-600">
              Nghĩa: {currentFb.vietnamese}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currentFb.options.map((opt) => {
              const isSelected = fbSelected === opt;
              const isCorrect = opt === currentFb.correctAnswer;

              let style = 'bg-slate-50 border-slate-200 hover:border-rose-400 text-slate-800';
              if (fbSubmitted) {
                if (isCorrect) style = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                else if (isSelected) style = 'bg-red-500 text-white border-red-600 font-bold';
                else style = 'opacity-40 bg-slate-50 border-slate-200';
              }

              return (
                <button
                  key={opt}
                  disabled={fbSubmitted}
                  onClick={() => handleCheckFillBlank(opt)}
                  className={`p-4 rounded-2xl border-2 text-xl font-bold transition-all ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {fbSubmitted && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <p className="text-xs sm:text-sm text-slate-700">{currentFb.explanation}</p>
              <div className="flex justify-end">
                <button
                  onClick={handleNextFb}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Câu tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 4: TRANSLATION */}
      {practiceMode === 'translate' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold">
              Câu {trIndex + 1} / {TRANSLATION_QUESTIONS.length}
            </span>
            <span className="text-xs text-slate-500">Luyện dịch câu hoàn chỉnh</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Câu gốc cần dịch:</span>
            <p className="text-lg font-bold text-slate-900">{currentTr.sourceText}</p>
          </div>

          <div className="min-h-[60px] p-4 bg-slate-50/50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
            {trSelectedWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">Chọn các cụm từ gợi ý bên dưới để hoàn thành câu dịch...</span>
            ) : (
              trSelectedWords.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handleToggleTrWord(w)}
                  className="px-3.5 py-2 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-xs"
                >
                  {w}
                </button>
              ))
            )}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Từ gợi ý:</span>
            <div className="flex flex-wrap gap-2">
              {currentTr.suggestedWords.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handleToggleTrWord(w)}
                  className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:border-rose-400 text-sm font-semibold text-slate-800 shadow-xs"
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setTrSelectedWords([])}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
            >
              Xóa câu
            </button>
            {!trSubmitted ? (
              <button
                disabled={trSelectedWords.length === 0}
                onClick={handleCheckTranslation}
                className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold disabled:opacity-40 shadow-xs"
              >
                Xem câu mẫu & giải thích
              </button>
            ) : (
              <button
                onClick={handleNextTr}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {trSubmitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-emerald-950">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">✅ Đáp án chuẩn:</span>
                <button
                  onClick={() => handleSpeak(currentTr.correctAnswer)}
                  className="flex items-center space-x-1 text-xs font-semibold px-2 py-1 bg-white rounded-lg shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Nghe phát âm</span>
                </button>
              </div>
              <p className="font-bold text-base">{currentTr.correctAnswer}</p>
              <p className="text-xs text-slate-700">{currentTr.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
