import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { FillWordBankQuestion } from '../types';
import { speakChinese } from '../utils/speech';

interface FillWordBankComponentProps {
  data: FillWordBankQuestion;
  speechRate?: number;
}

export const FillWordBankComponent: React.FC<FillWordBankComponentProps> = ({
  data,
  speechRate = 0.85
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectWord = (sentenceId: string, wordId: string) => {
    if (showResults) return;
    setUserAnswers((prev) => ({
      ...prev,
      [sentenceId]: wordId
    }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const isAllAnswered = data.sentences.every((s) => userAnswers[s.id]);
  const correctCount = data.sentences.filter(
    (s) => userAnswers[s.id] === s.correctWordId
  ).length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">1</span>
            选词填空 · Chọn từ điền vào chỗ trống
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">Chọn các từ A, B, C, D từ ngân hàng từ vựng để hoàn thành câu phù hợp:</p>
        </div>
      </div>

      {/* Word Bank Display */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
        <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">Ngân hàng từ vựng (Word Bank):</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
          {data.wordBank.map((wb) => (
            <div
              key={wb.id}
              onClick={() => speakChinese(wb.label, speechRate)}
              className="bg-white border border-amber-200 rounded-lg p-2.5 text-center shadow-2xs hover:border-red-300 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-center gap-1.5 font-bold text-slate-800 group-hover:text-red-600">
                <span className="text-xs font-semibold px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">{wb.id}</span>
                <span className="text-base">{wb.label}</span>
              </div>
              <div className="text-2xs text-red-600 font-medium">{wb.pinyin}</div>
              <div className="text-2xs text-slate-500 truncate">{wb.vietnamese}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sentences with blanks */}
      <div className="space-y-4">
        {data.sentences.map((sent, index) => {
          const selected = userAnswers[sent.id];
          const isCorrect = selected === sent.correctWordId;

          return (
            <div
              key={sent.id}
              className={`p-4 rounded-xl border transition-all ${
                showResults
                  ? isCorrect
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-rose-50/50 border-rose-300'
                  : 'bg-slate-50/50 border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium mb-1">Câu {index + 1}:</div>
                  <div className="text-lg font-bold text-slate-800 tracking-wide flex items-center flex-wrap gap-2">
                    {sent.sentenceWithBlank.split('____').map((part, pIdx, arr) => (
                      <React.Fragment key={pIdx}>
                        <span>{part}</span>
                        {pIdx < arr.length - 1 && (
                          <span className={`inline-block min-w-[70px] px-2.5 py-0.5 border-b-2 font-bold text-center text-sm rounded ${
                            selected
                              ? 'bg-red-50 border-red-500 text-red-700'
                              : 'bg-white border-dashed border-slate-300 text-slate-400'
                          }`}>
                            {selected ? data.wordBank.find(w => w.id === selected)?.label || selected : '______'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="text-xs text-red-600 font-medium mt-1">{sent.pinyin}</div>
                  <div className="text-xs text-slate-600 mt-0.5 italic">{sent.vietnamese}</div>
                </div>

                <button
                  onClick={() => speakChinese(sent.sentenceWithBlank.replace('____', selected ? data.wordBank.find(w => w.id === selected)?.label || '' : ''), speechRate)}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-red-600 transition-colors shadow-2xs"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Selection Options */}
              <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-200/60">
                <span className="text-2xs font-semibold text-slate-400">Chọn đáp án:</span>
                {data.wordBank.map((wb) => {
                  const isThisSelected = selected === wb.id;
                  return (
                    <button
                      key={wb.id}
                      onClick={() => handleSelectWord(sent.id, wb.id)}
                      disabled={showResults}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        isThisSelected
                          ? 'bg-red-600 text-white border-red-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {wb.id}. {wb.label}
                    </button>
                  );
                })}
              </div>

              {/* Result & Explanation */}
              {showResults && (
                <div className={`mt-3 p-3 rounded-lg text-xs flex items-start gap-2 ${
                  isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                }`}>
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold">
                      {isCorrect ? 'Chính xác! ' : `Chưa đúng. Đáp án đúng là: ${sent.correctWordId} (${data.wordBank.find(w => w.id === sent.correctWordId)?.label}) — `}
                    </span>
                    <span>{sent.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-2">
        {!showResults ? (
          <button
            onClick={handleCheckAnswers}
            disabled={!isAllAnswered}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all shadow-sm ${
              isAllAnswered
                ? 'bg-red-600 hover:bg-red-700 cursor-pointer shadow-red-200'
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            Kiểm tra kết quả ({Object.keys(userAnswers).length}/{data.sentences.length})
          </button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="text-sm font-bold text-slate-800">
              Điểm số: <span className="text-red-600">{correctCount}/{data.sentences.length}</span> câu đúng
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Làm lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
