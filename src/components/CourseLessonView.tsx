import React, { useState, useEffect } from 'react';
import {
  Volume2,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  HelpCircle,
  Lightbulb,
  Award,
  Layers,
  FileText,
  Music,
  CheckSquare,
  Play,
  RotateCcw
} from 'lucide-react';
import { LessonData, DialogueLine, TextComprehensionQuestion } from '../types';
import { HSK1_ALL_LESSONS } from '../data/hsk1CourseData';
import { COURSE_CHARACTERS } from '../data/characters';
import { WarmUpExercise } from './WarmUpExercise';
import { FillWordBankComponent } from './FillWordBankComponent';
import { speakChinese, stopSpeech } from '../utils/speech';

interface CourseLessonViewProps {
  initialLessonNumber?: number;
  showPinyin: boolean;
  audioSpeed: number;
}

export const CourseLessonView: React.FC<CourseLessonViewProps> = ({
  initialLessonNumber = 1,
  showPinyin,
  audioSpeed
}) => {
  const [currentLessonNum, setCurrentLessonNum] = useState<number>(initialLessonNumber);
  const [activeSubTab, setActiveSubTab] = useState<'warmup' | 'texts' | 'vocab' | 'grammar' | 'exercises' | 'bonus' | 'summary'>('texts');
  const [activeTextIndex, setActiveTextIndex] = useState<number>(0);
  const [playingLineIndex, setPlayingLineIndex] = useState<number | null>(null);
  const [showVietnamese, setShowVietnamese] = useState<boolean>(true);
  const [comprehensionAnswers, setComprehensionAnswers] = useState<Record<string, string>>({});
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});

  // Get current lesson
  const currentLesson: LessonData =
    HSK1_ALL_LESSONS.find((l) => l.lessonNumber === currentLessonNum) || HSK1_ALL_LESSONS[0];

  // Reset states when switching lessons
  useEffect(() => {
    setActiveTextIndex(0);
    setPlayingLineIndex(null);
  }, [currentLessonNum]);

  // Handle playing full dialogue
  const handlePlayFullText = async (lines: DialogueLine[]) => {
    stopSpeech();
    for (let i = 0; i < lines.length; i++) {
      setPlayingLineIndex(i);
      await speakChinese(lines[i].hanzi, audioSpeed);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    setPlayingLineIndex(null);
  };

  const handlePlayLine = (line: DialogueLine, index: number) => {
    setPlayingLineIndex(index);
    speakChinese(line.hanzi, audioSpeed).then(() => {
      setPlayingLineIndex(null);
    });
  };

  const handleChecklistToggle = (id: string) => {
    setCheckedChecklist((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Lesson Selector Top Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Giáo trình HSK 1:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full no-scrollbar">
              {HSK1_ALL_LESSONS.map((l) => {
                const isActive = l.lessonNumber === currentLessonNum;
                return (
                  <button
                    key={l.id}
                    onClick={() => setCurrentLessonNum(l.lessonNumber)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs shrink-0 transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-xs shadow-red-200 ring-2 ring-red-300'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    Bài {l.lessonNumber}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentLessonNum((prev) => Math.max(1, prev - 1))}
              disabled={currentLessonNum <= 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Bài trước</span>
            </button>
            <button
              onClick={() => setCurrentLessonNum((prev) => Math.min(15, prev + 1))}
              disabled={currentLessonNum >= 15}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Bài sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-800 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs tracking-wider uppercase">
              Bài {currentLesson.lessonNumber} / 15
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/30 text-amber-200 text-xs font-medium">
              Chuẩn HSK 3.0
            </span>
          </div>

          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide font-serif">
                {currentLesson.chineseTitle}
              </h1>
              <button
                onClick={() => speakChinese(currentLesson.chineseTitle, audioSpeed)}
                className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all shadow-xs"
                title="Nghe tiêu đề"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-red-100 font-medium text-sm sm:text-base mt-1">
              {currentLesson.pinyinTitle} • {currentLesson.title}
            </p>
          </div>

          {/* Objectives & Featured Characters */}
          <div className="pt-3 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <TargetIcon className="w-3.5 h-3.5" />
                <span>Mục tiêu bài học (Objectives):</span>
              </div>
              <ul className="text-xs text-red-50 space-y-1">
                {currentLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <UsersIcon className="w-3.5 h-3.5" />
                <span>Nhân vật xuất hiện trong bài:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {currentLesson.charactersFeatured.map((charKey) => {
                  const char = COURSE_CHARACTERS[charKey];
                  if (!char) return null;
                  return (
                    <div
                      key={char.id}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-xs font-medium"
                      title={`${char.role} - ${char.description}`}
                    >
                      <span className="text-base">{char.avatar}</span>
                      <span>{char.nameZh}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200">
        <button
          onClick={() => setActiveSubTab('warmup')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'warmup'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <span>🔥</span>
          <span>1. Khởi động (热身)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('texts')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'texts'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>2. Bài khóa (课文)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('vocab')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'vocab'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>3. Từ mới bài ({currentLesson.texts.flatMap(t => t.newWords).length} từ)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('grammar')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'grammar'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>4. Tiểu Ngữ giảng đường (小语讲堂)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('exercises')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'exercises'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>5. Luyện tập tổng hợp</span>
        </button>

        {currentLesson.bonusContent || currentLesson.tongueTwister ? (
          <button
            onClick={() => setActiveSubTab('bonus')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
              activeSubTab === 'bonus'
                ? 'bg-red-600 text-white shadow-xs shadow-red-200'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            <Music className="w-4 h-4 text-emerald-500" />
            <span>6. Rào khẩu lệnh & Văn hóa</span>
          </button>
        ) : null}

        <button
          onClick={() => setActiveSubTab('summary')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all ${
            activeSubTab === 'summary'
              ? 'bg-red-600 text-white shadow-xs shadow-red-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <CheckSquare className="w-4 h-4 text-indigo-500" />
          <span>7. Tự đánh giá (小结)</span>
        </button>
      </div>

      {/* SUBTAB 1: WARM-UP */}
      {activeSubTab === 'warmup' && (
        <WarmUpExercise
          items={currentLesson.warmUp.items}
          instructions={currentLesson.warmUp.instructions}
          speechRate={audioSpeed}
        />
      )}

      {/* SUBTAB 2: TEXTS (3 DIALOGUES) */}
      {activeSubTab === 'texts' && (
        <div className="space-y-6">
          {/* Text Tabs (Đoạn 1, 2, 3) */}
          <div className="flex items-center justify-between gap-3 flex-wrap bg-white p-3 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2">
              {currentLesson.texts.map((text, idx) => {
                const isSelected = activeTextIndex === idx;
                return (
                  <button
                    key={text.id}
                    onClick={() => setActiveTextIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isSelected
                        ? 'bg-red-50 text-red-700 border border-red-300 shadow-2xs'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Đoạn {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowVietnamese(!showVietnamese)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  showVietnamese
                    ? 'bg-slate-800 text-white border-slate-800'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {showVietnamese ? 'Ẩn nghĩa tiếng Việt' : 'Hiện nghĩa tiếng Việt'}
              </button>
              <button
                onClick={() => handlePlayFullText(currentLesson.texts[activeTextIndex].lines)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs shadow-red-200"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Nghe toàn đoạn</span>
              </button>
            </div>
          </div>

          {/* Active Text Dialogue Box */}
          {(() => {
            const currentText = currentLesson.texts[activeTextIndex];
            return (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                    <span>Đoạn khóa {activeTextIndex + 1}</span>
                    <span>•</span>
                    <span className="text-slate-500 font-normal">{currentText.sceneType === 'overseas' ? 'Bối cảnh lớp học ở nước ngoài' : 'Bối cảnh cuộc sống tại Trung Quốc'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mt-1">{currentText.title}</h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">Tình huống: {currentText.situation}</p>
                </div>

                {/* Dialogue Lines */}
                <div className="space-y-4">
                  {currentText.lines.map((line, lineIdx) => {
                    const isPlaying = playingLineIndex === lineIdx;
                    return (
                      <div
                        key={lineIdx}
                        className={`flex items-start gap-3.5 p-4 rounded-2xl transition-all ${
                          isPlaying
                            ? 'bg-red-50/80 border border-red-300 ring-2 ring-red-100 shadow-xs'
                            : 'bg-slate-50/70 border border-slate-100 hover:bg-slate-100/70'
                        }`}
                      >
                        <div className="text-3xl shrink-0 select-none p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                          {line.avatar}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-600">{line.speaker}</span>
                            <button
                              onClick={() => handlePlayLine(line, lineIdx)}
                              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 transition-colors shadow-2xs"
                              title="Nghe câu này"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-slate-900 font-serif tracking-wide">
                            {line.hanzi}
                          </div>
                          {showPinyin && (
                            <div className="text-xs sm:text-sm text-red-600 font-medium">{line.pinyin}</div>
                          )}
                          {showVietnamese && (
                            <div className="text-xs text-slate-600 font-normal pt-0.5">{line.vietnamese}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Xiaoyu's Tip if available */}
                {currentText.tip && (
                  <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-950 text-xs sm:text-sm flex items-center gap-1.5">
                        <span>小语助力 · Mẹo của AI Tiểu Ngữ:</span>
                        <span className="font-normal text-amber-900">{currentText.tip.title}</span>
                      </h4>
                      <p className="text-xs text-amber-800 mt-1 whitespace-pre-line leading-relaxed">
                        {currentText.tip.content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Comprehension Question if available */}
                {currentText.comprehensionQuestion && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                      <HelpCircle className="w-4 h-4" />
                      <span>Câu hỏi kiểm tra nghe hiểu (Comprehension Check):</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                      {currentText.comprehensionQuestion.question}
                    </p>
                    <div className="space-y-2">
                      {currentText.comprehensionQuestion.options.map((opt) => {
                        const qId = `${currentLesson.id}-${currentText.id}`;
                        const selectedOpt = comprehensionAnswers[qId];
                        const isChosen = selectedOpt === opt.id;
                        const isCorrect = opt.id === currentText.comprehensionQuestion?.correctOptionId;

                        return (
                          <button
                            key={opt.id}
                            onClick={() =>
                              setComprehensionAnswers((prev) => ({ ...prev, [qId]: opt.id }))
                            }
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                              isChosen
                                ? isCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                  : 'bg-rose-50 border-rose-400 text-rose-950'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span className="font-bold mr-2 uppercase">{opt.id}.</span>
                            <span>{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                    {comprehensionAnswers[`${currentLesson.id}-${currentText.id}`] && (
                      <div className="text-xs text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-200">
                        <span className="font-bold">Giải thích: </span>
                        {currentText.comprehensionQuestion.explanation}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* SUBTAB 3: VOCABULARY OF THE LESSON */}
      {activeSubTab === 'vocab' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-base">生词 · Từ mới trọng tâm Bài {currentLesson.lessonNumber}</h3>
                <p className="text-xs text-slate-500">Toàn bộ các từ mới xuất hiện trong các bài khóa của bài học này:</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {currentLesson.texts
                .flatMap((t) => t.newWords)
                .map((word) => (
                  <div
                    key={word.id}
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-red-300 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900 font-serif group-hover:text-red-600 transition-colors">
                          {word.hanzi}
                        </span>
                        <span className="text-xs font-semibold text-red-600">{word.pinyin}</span>
                      </div>
                      <button
                        onClick={() => speakChinese(word.hanzi, audioSpeed)}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 transition-colors shadow-2xs"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-2 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 text-2xs font-medium">
                          {word.partOfSpeechLabel}
                        </span>
                        <span className="text-slate-400">Hán Việt:</span>
                        <span className="font-medium text-slate-700">{word.sinoVietnamese}</span>
                      </div>
                      <div className="text-slate-800 font-semibold text-sm">{word.meaning}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: XIAOYU'S CLASSROOM (GRAMMAR POINTS) */}
      {activeSubTab === 'grammar' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-5 text-white shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <h3 className="font-bold text-base">小语讲堂 · Trọng tâm Ngữ pháp Bài {currentLesson.lessonNumber}</h3>
              <p className="text-xs text-amber-100">Các cấu trúc ngữ pháp nòng cốt cần nắm chắc và ví dụ thực tế có phát âm.</p>
            </div>
          </div>

          <div className="space-y-6">
            {currentLesson.grammarPoints.map((rule, idx) => (
              <div
                key={rule.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-lg">{rule.title}</h4>
                </div>

                {/* Formula Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border border-red-200">
                  <div className="text-2xs font-bold text-red-600 uppercase tracking-wider mb-1">Công thức nòng cốt:</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-red-950 tracking-wide">
                    {rule.formula}
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                  {rule.explanation}
                </div>

                {/* Common Mistakes if any */}
                {rule.commonMistakes && rule.commonMistakes.length > 0 && (
                  <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4 space-y-2">
                    <div className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                      <span>⚠️ Lỗi người học thường mắc phải (Common Mistake):</span>
                    </div>
                    {rule.commonMistakes.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-rose-600 font-bold">❌ Không dùng:</span>
                          <span className="line-through text-slate-600 font-medium">{m.incorrect} ({m.incorrectPinyin})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-700 font-bold">✅ Phải dùng:</span>
                          <span className="font-bold text-emerald-900">{m.correct} ({m.correctPinyin})</span>
                        </div>
                        <div className="text-slate-600 italic pl-5">➔ Nguyên nhân: {m.reason}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Example Sentences */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Câu ví dụ thực tế (Examples):</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {rule.examples.map((ex) => (
                      <div
                        key={ex.id}
                        className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-all flex items-start justify-between gap-2 shadow-2xs"
                      >
                        <div className="space-y-0.5">
                          <div className="text-base font-bold text-slate-900 font-serif">{ex.hanzi}</div>
                          <div className="text-xs text-red-600 font-medium">{ex.pinyin}</div>
                          <div className="text-xs text-slate-600">{ex.vietnamese}</div>
                        </div>
                        <button
                          onClick={() => speakChinese(ex.hanzi, audioSpeed)}
                          className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-red-600 transition-colors shadow-2xs shrink-0"
                          title="Nghe câu ví dụ"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 5: COMPREHENSIVE EXERCISES */}
      {activeSubTab === 'exercises' && (
        <div className="space-y-6">
          {currentLesson.comprehensiveExercises.fillBlank && (
            <FillWordBankComponent
              data={currentLesson.comprehensiveExercises.fillBlank}
              speechRate={audioSpeed}
            />
          )}
        </div>
      )}

      {/* SUBTAB 6: TONGUE TWISTER & BONUS */}
      {activeSubTab === 'bonus' && (
        <div className="space-y-6">
          {/* Tongue Twister if any */}
          {currentLesson.tongueTwister && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗣️</span>
                  <h4 className="font-bold text-amber-950 text-base">{currentLesson.tongueTwister.title}</h4>
                </div>
                <button
                  onClick={() => speakChinese(currentLesson.tongueTwister?.hanzi || '', audioSpeed * 0.85)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe đọc mẫu</span>
                </button>
              </div>

              <div className="bg-white/80 p-5 rounded-2xl border border-amber-200 text-center space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif tracking-wide">
                  {currentLesson.tongueTwister.hanzi}
                </div>
                <div className="text-sm text-red-600 font-semibold">{currentLesson.tongueTwister.pinyin}</div>
                <div className="text-xs text-slate-600 italic">{currentLesson.tongueTwister.vietnamese}</div>
              </div>

              <div className="text-xs text-amber-900 bg-amber-100/60 p-3 rounded-xl">
                💡 <span className="font-bold">Mục tiêu luyện âm: </span>
                {currentLesson.tongueTwister.explanation}
              </div>
            </div>
          )}

          {/* Bonus Egg & Culture */}
          {currentLesson.bonusContent && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🎁</span>
                <div>
                  <div className="text-2xs font-bold text-red-600 uppercase tracking-wider">小语的彩蛋 · Góc Khám Phá Văn Hóa</div>
                  <h4 className="font-bold text-slate-900 text-base">{currentLesson.bonusContent.title}</h4>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {currentLesson.bonusContent.content}
              </p>

              {currentLesson.bonusContent.bulletPoints && (
                <ul className="space-y-2 text-xs text-slate-700 bg-red-50/50 p-4 rounded-2xl border border-red-100">
                  {currentLesson.bonusContent.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}

      {/* SUBTAB 7: SELF-EVALUATION SUMMARY */}
      {activeSubTab === 'summary' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
              📋
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">学习小结 · Bảng tự đánh giá kết quả Bài {currentLesson.lessonNumber}</h3>
              <p className="text-xs text-slate-500">Tích chọn các mục bạn đã hiểu và có thể tự tin vận dụng:</p>
            </div>
          </div>

          <div className="space-y-3">
            {currentLesson.selfEvaluation.map((item) => {
              const isChecked = !!checkedChecklist[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => handleChecklistToggle(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                      : 'bg-slate-50/60 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="mt-0.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300" />
                    )}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="font-bold text-sm leading-tight">{item.topic}</div>
                    <div className="text-xs text-slate-500">{item.vietnamese}</div>
                    <div className="text-xs font-mono font-bold text-red-600 bg-white/70 px-2 py-0.5 rounded border border-slate-200/60 inline-block mt-1">
                      Mẫu: {item.example}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Next Lesson Prompt */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Đã hoàn thành <span className="font-bold text-slate-800">{Object.values(checkedChecklist).filter(Boolean).length}/{currentLesson.selfEvaluation.length}</span> mục tiêu
            </div>
            {currentLessonNum < 15 && (
              <button
                onClick={() => {
                  setCurrentLessonNum((prev) => prev + 1);
                  setActiveSubTab('texts');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm shadow-red-200"
              >
                <span>Chuyển sang Bài {currentLessonNum + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
