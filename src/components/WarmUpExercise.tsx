import React, { useState } from 'react';
import { Volume2, CheckCircle2, RefreshCw, Sparkles } from 'lucide-react';
import { WarmUpItem } from '../types';
import { speakChinese } from '../utils/speech';

interface WarmUpExerciseProps {
  items: WarmUpItem[];
  instructions: string;
  speechRate?: number;
}

export const WarmUpExercise: React.FC<WarmUpExerciseProps> = ({
  items,
  instructions,
  speechRate = 0.85
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<string | null>(null);

  // Shuffle definitions for the right column
  const [shuffledDefs] = useState(() => {
    return [...items].sort(() => Math.random() - 0.5);
  });

  const handleWordClick = (id: string, hanzi: string) => {
    if (matchedPairs.includes(id)) return;
    speakChinese(hanzi, speechRate);
    setSelectedWord(id);
    setWrongPair(null);
  };

  const handleDefClick = (id: string) => {
    if (!selectedWord || matchedPairs.includes(id)) return;

    if (selectedWord === id) {
      // Correct Match!
      setMatchedPairs((prev) => [...prev, id]);
      setSelectedWord(null);
      setWrongPair(null);
    } else {
      // Wrong Match
      setWrongPair(id);
      setTimeout(() => {
        setWrongPair(null);
        setSelectedWord(null);
      }, 1000);
    }
  };

  const handleReset = () => {
    setSelectedWord(null);
    setMatchedPairs([]);
    setWrongPair(null);
  };

  const isAllMatched = matchedPairs.length === items.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
            🔥
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-base">热身 · Warm-Up Khởi Động</h3>
            <p className="text-xs text-slate-500">{instructions}</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          title="Làm lại bài khởi động"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Làm lại</span>
        </button>
      </div>

      {isAllMatched ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center my-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 text-2xl shadow-inner">
            🎉
          </div>
          <h4 className="font-bold text-emerald-900 text-base">Tuyệt vời! Bạn đã hoàn thành phần Khởi động!</h4>
          <p className="text-xs text-emerald-700 mt-1">Bạn đã sẵn sàng để bắt đầu đọc và nghe các bài khóa (课文) bên dưới.</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {/* Left Column: Chinese Words with Audio */}
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">Chữ Hán & Phát Âm</p>
          {items.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedWord === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleWordClick(item.id, item.labelZh)}
                disabled={isMatched}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isMatched
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800 opacity-80 cursor-default'
                    : isSelected
                    ? 'bg-red-50 border-red-400 shadow-sm ring-2 ring-red-200 text-red-950'
                    : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/80 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-lg leading-tight tracking-wide">{item.labelZh}</div>
                    <div className="text-xs text-red-600 font-medium">{item.pinyin}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {isMatched ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <div className="p-1.5 rounded-lg bg-white/80 text-slate-400 hover:text-red-600 shadow-xs">
                      <Volume2 className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Vietnamese Meanings */}
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">Ý Nghĩa Tiếng Việt</p>
          {shuffledDefs.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isWrong = wrongPair === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleDefClick(item.id)}
                disabled={isMatched}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isMatched
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800 opacity-80 cursor-default'
                    : isWrong
                    ? 'bg-rose-50 border-rose-400 text-rose-800 animate-shake'
                    : selectedWord
                    ? 'bg-amber-50/60 border-amber-300 hover:bg-amber-100/70 text-slate-800 cursor-pointer shadow-xs'
                    : 'bg-slate-50/70 border-slate-200/80 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="font-medium text-sm text-slate-800">{item.vietnamese}</span>
                </div>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
