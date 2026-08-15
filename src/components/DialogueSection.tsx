import React, { useState } from 'react';
import { HSK1_DIALOGUES } from '../data/dialogues';
import { DialogueLesson } from '../types';
import { speakChinese, stopSpeech } from '../utils/speech';
import { Volume2, Play, Square, MessageSquare, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface DialogueSectionProps {
  showPinyin: boolean;
  audioSpeed: number;
}

export const DialogueSection: React.FC<DialogueSectionProps> = ({
  showPinyin,
  audioSpeed
}) => {
  const [selectedDialogueId, setSelectedDialogueId] = useState<string>(HSK1_DIALOGUES[0].id);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);

  const currentDialogue = HSK1_DIALOGUES.find((d) => d.id === selectedDialogueId) || HSK1_DIALOGUES[0];

  const handleSpeakLine = async (text: string, idx: number) => {
    stopSpeech();
    setActiveLineIndex(idx);
    await speakChinese(text, audioSpeed);
    setActiveLineIndex(null);
  };

  const handlePlayAll = async () => {
    if (isPlayingAll) {
      stopSpeech();
      setIsPlayingAll(false);
      setActiveLineIndex(null);
      return;
    }

    setIsPlayingAll(true);
    for (let i = 0; i < currentDialogue.lines.length; i++) {
      if (!isPlayingAll && i > 0 && activeLineIndex === null) {
        // user stopped
        break;
      }
      setActiveLineIndex(i);
      await speakChinese(currentDialogue.lines[i].hanzi, audioSpeed);
      // small delay between speakers
      await new Promise((r) => setTimeout(r, 600));
    }
    setIsPlayingAll(false);
    setActiveLineIndex(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Dialogue Directory (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-2">
          <div className="px-2 py-1 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Chủ đề hội thoại HSK 1 ({HSK1_DIALOGUES.length})
            </h3>
          </div>

          <div className="space-y-1.5 pt-1">
            {HSK1_DIALOGUES.map((dialogue) => {
              const isSelected = dialogue.id === currentDialogue.id;

              return (
                <div
                  key={dialogue.id}
                  onClick={() => {
                    stopSpeech();
                    setIsPlayingAll(false);
                    setActiveLineIndex(null);
                    setSelectedDialogueId(dialogue.id);
                  }}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-rose-50 border-rose-300 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-bold ${
                          isSelected ? 'text-rose-900' : 'text-slate-800'
                        }`}
                      >
                        {dialogue.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {dialogue.chineseTitle}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isSelected ? 'text-rose-600' : 'text-slate-300'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Dialogue Detail Player (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                    Hội thoại mẫu
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    {currentDialogue.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Ngữ cảnh: {currentDialogue.situation}
                </p>
              </div>

              {/* Play All Button */}
              <button
                onClick={handlePlayAll}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs shrink-0 ${
                  isPlayingAll
                    ? 'bg-amber-500 text-white hover:bg-amber-600 animate-pulse'
                    : 'bg-rose-600 hover:bg-rose-700 text-white'
                }`}
              >
                {isPlayingAll ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlayingAll ? 'Dừng phát' : 'Nghe toàn bài'}</span>
              </button>
            </div>

            {/* Conversation Lines */}
            <div className="space-y-3 pt-2">
              {currentDialogue.lines.map((line, idx) => {
                const isActive = activeLineIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => handleSpeakLine(line.hanzi, idx)}
                    className={`group p-4 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-rose-50/90 border-rose-400 shadow-xs scale-[1.01]'
                        : 'bg-slate-50/80 hover:bg-slate-100/80 border-slate-200/70 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl select-none">{line.avatar}</span>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-slate-700">
                              {line.speaker}
                            </span>
                          </div>

                          {showPinyin && (
                            <p className="text-xs font-mono text-rose-600 font-medium tracking-wide">
                              {line.pinyin}
                            </p>
                          )}

                          <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                            {line.hanzi}
                          </p>

                          <p className="text-xs text-slate-600 pt-0.5">
                            {line.vietnamese}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeakLine(line.hanzi, idx);
                        }}
                        className={`p-2 rounded-xl border transition-all ${
                          isActive
                            ? 'bg-rose-600 text-white border-rose-600'
                            : 'bg-white text-slate-400 group-hover:text-rose-600 border-slate-200 shadow-xs'
                        }`}
                        title="Nghe câu này"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Vocabulary in Context */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Từ vựng trọng tâm trong bài hội thoại này:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentDialogue.keyVocab.map((v, idx) => (
                <div
                  key={idx}
                  onClick={() => speakChinese(v.hanzi, audioSpeed)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200/60 cursor-pointer transition-all"
                >
                  <div>
                    <span className="text-base font-bold text-slate-900 block">{v.hanzi}</span>
                    <span className="text-xs font-mono text-rose-600">{v.pinyin}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{v.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
