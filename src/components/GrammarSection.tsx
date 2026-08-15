import React, { useState } from 'react';
import { GRAMMAR_LESSONS } from '../data/grammarLessons';
import { GrammarLesson } from '../types';
import { SentenceCard } from './SentenceCard';
import { Search, BookOpen, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft, Bookmark, Sparkles, Filter } from 'lucide-react';

interface GrammarSectionProps {
  showPinyin: boolean;
  audioSpeed: number;
  onNavigateToPractice?: (lessonId?: string) => void;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({
  showPinyin,
  audioSpeed,
  onNavigateToPractice
}) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string>(GRAMMAR_LESSONS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookmarkedUnits, setBookmarkedUnits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hsk1_bookmarked_grammar');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string) => {
    const next = bookmarkedUnits.includes(id)
      ? bookmarkedUnits.filter((item) => item !== id)
      : [...bookmarkedUnits, id];
    setBookmarkedUnits(next);
    localStorage.setItem('hsk1_bookmarked_grammar', JSON.stringify(next));
  };

  const categories = [
    { id: 'all', label: 'Tất cả 14 Bài' },
    { id: 'DaiTu', label: 'Đại từ' },
    { id: 'CauTruc', label: 'Cấu trúc câu' },
    { id: 'TroTu', label: 'Trợ từ' },
    { id: 'PhoTu', label: 'Phó từ' },
    { id: 'LuongTu', label: 'Lượng từ' },
    { id: 'ThoiGian', label: 'Thời gian' },
    { id: 'ViTri', label: 'Vị trí & Nơi chốn' },
    { id: 'DongTu', label: 'Động từ năng nguyện' },
  ];

  const filteredLessons = GRAMMAR_LESSONS.filter((lesson) => {
    const matchesCat = selectedCategory === 'all' || lesson.category === selectedCategory;
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.chineseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.rules.some(
        (r) =>
          r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.examples.some((ex) => ex.hanzi.includes(searchQuery) || ex.vietnamese.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCat && matchesSearch;
  });

  const currentLesson = GRAMMAR_LESSONS.find((l) => l.id === selectedLessonId) || GRAMMAR_LESSONS[0];
  const currentIndex = GRAMMAR_LESSONS.findIndex((l) => l.id === selectedLessonId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-6">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ngữ pháp, chữ Hán, mẫu câu..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Categories Pill Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Lesson Directory List (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-3 border border-slate-100 shadow-xs space-y-1.5 max-h-[780px] overflow-y-auto">
          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Danh mục chuyên đề ({filteredLessons.length})
            </span>
            <span className="text-[11px] text-rose-600 font-medium">HSK Cấp 1</span>
          </div>

          {filteredLessons.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              Không tìm thấy chuyên đề phù hợp với từ khóa "{searchQuery}"
            </div>
          ) : (
            filteredLessons.map((lesson) => {
              const isSelected = lesson.id === currentLesson.id;
              const isBookmarked = bookmarkedUnits.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`group relative p-3 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-rose-50/80 border-rose-300 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start space-x-2.5">
                      <span
                        className={`shrink-0 w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          isSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-rose-100 group-hover:text-rose-700'
                        }`}
                      >
                        {lesson.unitNumber}
                      </span>
                      <div>
                        <h4
                          className={`text-xs sm:text-sm font-semibold transition-colors ${
                            isSelected ? 'text-rose-900' : 'text-slate-800 group-hover:text-rose-700'
                          }`}
                        >
                          {lesson.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className="text-[11px] font-medium text-slate-500 font-sans">
                            {lesson.chineseTitle}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                            {lesson.categoryLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(lesson.id);
                      }}
                      className={`p-1 rounded-md transition-all ${
                        isBookmarked
                          ? 'text-amber-500 hover:text-amber-600'
                          : 'text-slate-300 hover:text-slate-400'
                      }`}
                      title={isBookmarked ? 'Bỏ lưu bài học' : 'Lưu bài học'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Selected Lesson Detail (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Lesson Header Card */}
          <div className="bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-5 text-white shadow-sm shadow-rose-200">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-xs rounded-lg text-xs font-semibold uppercase tracking-wider">
                Bài {currentLesson.unitNumber} • {currentLesson.categoryLabel}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleBookmark(currentLesson.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-xs transition-all ${
                    bookmarkedUnits.includes(currentLesson.id)
                      ? 'bg-amber-400 text-amber-950 font-bold'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarkedUnits.includes(currentLesson.id) ? 'fill-current' : ''}`} />
                  <span>{bookmarkedUnits.includes(currentLesson.id) ? 'Đã lưu' : 'Lưu bài'}</span>
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              {currentLesson.title}
            </h2>
            <p className="text-rose-100 text-sm font-medium mb-3">
              {currentLesson.chineseTitle}
            </p>
            <p className="text-xs sm:text-sm text-rose-50 bg-black/10 p-3 rounded-xl leading-relaxed">
              💡 {currentLesson.summary}
            </p>
          </div>

          {/* Rules & Formulas Breakdown */}
          <div className="space-y-6">
            {currentLesson.rules.map((rule, idx) => (
              <div key={rule.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
                {/* Rule Title */}
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-slate-800">
                    {rule.title}
                  </h3>
                </div>

                {/* Formula Highlight Box */}
                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 uppercase tracking-wide mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Công thức cấu trúc chuẩn</span>
                  </div>
                  <pre className="text-xs sm:text-sm font-semibold font-mono text-amber-950 whitespace-pre-wrap leading-relaxed">
                    {rule.formula}
                  </pre>
                </div>

                {/* Rule Explanation */}
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <p>{rule.explanation}</p>
                </div>

                {/* Specific Notes List if any */}
                {rule.notes && rule.notes.length > 0 && (
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 border border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                      📌 Lưu ý chi tiết & Mở rộng:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {rule.notes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start space-x-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Common Mistakes Comparison */}
                {rule.commonMistakes && rule.commonMistakes.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-red-600 uppercase tracking-wide">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Lỗi sai phổ biến người Việt hay mắc phải</span>
                    </div>
                    {rule.commonMistakes.map((mistake, mIdx) => (
                      <div key={mIdx} className="p-3 bg-red-50/50 border border-red-200 rounded-xl space-y-2 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="p-2 bg-red-100/60 rounded-lg text-red-800">
                            <span className="font-bold text-[11px] block text-red-700">❌ SAI:</span>
                            <p className="font-medium">{mistake.incorrect}</p>
                            {showPinyin && <p className="text-[10px] text-red-600 font-mono">{mistake.incorrectPinyin}</p>}
                          </div>
                          <div className="p-2 bg-emerald-100/60 rounded-lg text-emerald-900">
                            <span className="font-bold text-[11px] block text-emerald-700">✅ ĐÚNG:</span>
                            <p className="font-medium">{mistake.correct}</p>
                            {showPinyin && <p className="text-[10px] text-emerald-700 font-mono">{mistake.correctPinyin}</p>}
                          </div>
                        </div>
                        <p className="text-slate-600 text-[11px] pt-1">
                          <strong className="text-slate-800">Tại sao sai?</strong> {mistake.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Example Sentences */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      🔊 Câu ví dụ thực tế (Bấm để nghe phát âm):
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {rule.examples.map((ex) => (
                      <SentenceCard
                        key={ex.id}
                        hanzi={ex.hanzi}
                        pinyin={ex.pinyin}
                        vietnamese={ex.vietnamese}
                        highlightWords={ex.highlightWords}
                        audioSpeed={audioSpeed}
                        showPinyin={showPinyin}
                        note={ex.note}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center space-x-2 text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-sm sm:text-base">Tóm tắt ghi nhớ cốt lõi (Bài {currentLesson.unitNumber})</h4>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950">
              {currentLesson.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Navigation between lessons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              disabled={currentIndex === 0}
              onClick={() => setSelectedLessonId(GRAMMAR_LESSONS[currentIndex - 1].id)}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Bài trước</span>
            </button>

            {onNavigateToPractice && (
              <button
                onClick={() => onNavigateToPractice(currentLesson.id)}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-xs transition-all"
              >
                <span>Luyện tập bài này</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              disabled={currentIndex === GRAMMAR_LESSONS.length - 1}
              onClick={() => setSelectedLessonId(GRAMMAR_LESSONS[currentIndex + 1].id)}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span>Bài tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
