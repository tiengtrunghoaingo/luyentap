import React, { useState, useMemo } from 'react';
import { HSK1_VOCABULARY } from '../data/vocabulary';
import { VocabWord } from '../types';
import { speakChinese } from '../utils/speech';
import { Search, Volume2, CheckCircle, Star, Shuffle, RotateCcw, LayoutGrid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VocabularySectionProps {
  showPinyin: boolean;
  audioSpeed: number;
  learnedWords: number[];
  setLearnedWords: React.Dispatch<React.SetStateAction<number[]>>;
  favoriteWords: number[];
  setFavoriteWords: React.Dispatch<React.SetStateAction<number[]>>;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({
  showPinyin,
  audioSpeed,
  learnedWords,
  setLearnedWords,
  favoriteWords,
  setFavoriteWords
}) => {
  const [viewMode, setViewMode] = useState<'flashcard' | 'grid' | 'table'>('flashcard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filterLearned, setFilterLearned] = useState<'all' | 'unlearned' | 'learned' | 'favorite'>('all');
  
  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Topics
  const topics = useMemo(() => {
    const set = new Set(HSK1_VOCABULARY.map((w) => w.topic));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return HSK1_VOCABULARY.filter((word) => {
      const matchesTopic = selectedTopic === 'all' || word.topic === selectedTopic;
      const matchesLearned =
        filterLearned === 'all' ||
        (filterLearned === 'learned' && learnedWords.includes(word.id)) ||
        (filterLearned === 'unlearned' && !learnedWords.includes(word.id)) ||
        (filterLearned === 'favorite' && favoriteWords.includes(word.id));

      const matchesSearch =
        word.hanzi.includes(searchQuery) ||
        word.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.sinoVietnamese.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.meaning.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTopic && matchesLearned && matchesSearch;
    });
  }, [selectedTopic, filterLearned, searchQuery, learnedWords, favoriteWords]);

  const currentCard = filteredWords[cardIndex] || filteredWords[0];

  const toggleLearned = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLearnedWords((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('hsk1_learned_words', JSON.stringify(next));
      if (!prev.includes(id) && next.length % 10 === 0) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      }
      return next;
    });
  };

  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFavoriteWords((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('hsk1_fav_words', JSON.stringify(next));
      return next;
    });
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCardIndex(Math.floor(Math.random() * filteredWords.length));
  };

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    speakChinese(text, audioSpeed);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header & Stats */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Trọn Bộ 150 Từ Vựng HSK 1 Chuẩn</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-semibold">
              Phiên Bản Chuẩn
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Kèm âm Hán Việt, phiên âm Pinyin, loại từ, câu ví dụ thực tế và phát âm giọng bản xứ.
          </p>
        </div>

        {/* Progress Bar & Stats */}
        <div className="flex items-center space-x-4 bg-slate-50 p-3 rounded-xl border border-slate-200/60 w-full md:w-auto justify-around">
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Đã thuộc</span>
            <span className="text-sm sm:text-base font-extrabold text-emerald-600">
              {learnedWords.length} / 150
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Yêu thích</span>
            <span className="text-sm sm:text-base font-extrabold text-amber-500">
              {favoriteWords.length}
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Tiến độ</span>
            <span className="text-sm sm:text-base font-extrabold text-rose-600">
              {Math.round((learnedWords.length / 150) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Filter & View Mode Controls */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCardIndex(0);
              }}
              placeholder="Tìm chữ Hán, pinyin, nghĩa..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
            />
          </div>

          {/* Filter Learned Status */}
          <div className="flex items-center space-x-1 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {(
              [
                { id: 'all', label: 'Tất cả' },
                { id: 'unlearned', label: 'Chưa thuộc' },
                { id: 'learned', label: 'Đã thuộc' },
                { id: 'favorite', label: 'Đã lưu ★' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setFilterLearned(item.id);
                  setCardIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  filterLearned === item.id
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* View Modes */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('flashcard')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'flashcard' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Chế độ Flashcard lật thẻ"
            >
              Flashcard
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Chế độ Lưới thẻ"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'table' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Chế độ Bảng danh sách"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Topics Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pt-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide shrink-0 mr-1">
            Chủ đề:
          </span>
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => {
                setSelectedTopic(t);
                setCardIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedTopic === t
                  ? 'bg-rose-50 text-rose-700 border border-rose-300 font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {t === 'all' ? 'Tất cả chủ đề' : t}
            </button>
          ))}
        </div>
      </div>

      {/* View Mode 1: Interactive Flashcard */}
      {viewMode === 'flashcard' && (
        <div className="max-w-2xl mx-auto space-y-5">
          {filteredWords.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center text-slate-400 border border-slate-100">
              Không có từ vựng nào trong danh sách này.
            </div>
          ) : (
            <>
              {/* Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200/80 shadow-md hover:border-rose-300 cursor-pointer min-h-[360px] flex flex-col justify-between transition-all select-none"
              >
                {/* Card Top Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      #{currentCard.id} / 150
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                      {currentCard.partOfSpeechLabel}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={(e) => toggleFavorite(currentCard.id, e)}
                      className={`p-2 rounded-xl transition-all ${
                        favoriteWords.includes(currentCard.id)
                          ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                          : 'text-slate-300 hover:text-slate-500 bg-slate-50'
                      }`}
                      title="Lưu yêu thích"
                    >
                      <Star className={`w-4 h-4 ${favoriteWords.includes(currentCard.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => toggleLearned(currentCard.id, e)}
                      className={`p-2 rounded-xl transition-all ${
                        learnedWords.includes(currentCard.id)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-slate-300 hover:text-slate-500 bg-slate-50'
                      }`}
                      title={learnedWords.includes(currentCard.id) ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}
                    >
                      <CheckCircle className={`w-4 h-4 ${learnedWords.includes(currentCard.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="text-center my-6 space-y-3">
                  {!isFlipped ? (
                    /* Front Face: Hanzi + Audio Button */
                    <div className="space-y-4">
                      <div className="text-6xl sm:text-7xl font-semibold text-slate-900 tracking-wider">
                        {currentCard.hanzi}
                      </div>
                      {showPinyin && (
                        <p className="text-lg font-mono text-rose-600 font-medium tracking-wide">
                          {currentCard.pinyin}
                        </p>
                      )}
                      <p className="text-xs text-slate-400">
                        (Bấm để lật thẻ xem nghĩa tiếng Việt & ví dụ)
                      </p>
                    </div>
                  ) : (
                    /* Back Face: Meaning + Sino-Vietnamese + Example */
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-slate-900">
                        {currentCard.hanzi}
                      </div>
                      <p className="text-sm font-mono text-rose-600 font-medium">
                        {currentCard.pinyin} • Hán Việt: <span className="font-semibold text-slate-700">{currentCard.sinoVietnamese}</span>
                      </p>
                      <div className="py-2 px-4 bg-rose-50/70 border border-rose-200 rounded-xl inline-block">
                        <p className="text-base sm:text-lg font-bold text-rose-950">
                          {currentCard.meaning}
                        </p>
                      </div>

                      {/* Example Sentence */}
                      <div className="pt-3 border-t border-slate-100 text-left bg-slate-50 p-3.5 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Ví dụ:</span>
                          <button
                            onClick={(e) => handleSpeak(currentCard.example.hanzi, e)}
                            className="p-1 text-slate-500 hover:text-rose-600"
                            title="Nghe câu ví dụ"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-slate-800">{currentCard.example.hanzi}</p>
                        {showPinyin && <p className="text-xs text-rose-600 font-mono">{currentCard.example.pinyin}</p>}
                        <p className="text-xs text-slate-600">{currentCard.example.vietnamese}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Pronunciation Play Button */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={(e) => handleSpeak(currentCard.hanzi, e)}
                    className="flex items-center space-x-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 font-semibold text-xs transition-all shadow-xs"
                  >
                    <Volume2 className="w-4 h-4 text-rose-600" />
                    <span>Nghe phát âm</span>
                  </button>
                </div>
              </div>

              {/* Navigation & Controls */}
              <div className="flex items-center justify-between px-2">
                <button
                  onClick={handlePrevCard}
                  className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Từ trước</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShuffle}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs transition-all shadow-xs"
                    title="Ngẫu nhiên từ"
                  >
                    <Shuffle className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-semibold text-slate-500">
                    {cardIndex + 1} / {filteredWords.length}
                  </span>
                </div>

                <button
                  onClick={handleNextCard}
                  className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-rose-600 text-white hover:bg-rose-700 text-xs font-bold transition-all shadow-xs"
                >
                  <span>Từ tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* View Mode 2: Grid of Word Cards */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredWords.map((word) => {
            const isLearned = learnedWords.includes(word.id);
            const isFav = favoriteWords.includes(word.id);

            return (
              <div
                key={word.id}
                onClick={() => handleSpeak(word.hanzi)}
                className={`group relative p-4 rounded-2xl bg-white border transition-all cursor-pointer shadow-xs hover:shadow-sm ${
                  isLearned
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-slate-200/80 hover:border-rose-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-mono text-slate-400">#{word.id}</span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={(e) => toggleFavorite(word.id, e)}
                      className={`p-1 rounded ${isFav ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                    >
                      <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => toggleLearned(word.id, e)}
                      className={`p-1 rounded ${isLearned ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-400'}`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isLearned ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="my-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-rose-600 transition-colors">
                    {word.hanzi}
                  </h3>
                  {showPinyin && (
                    <p className="text-xs font-mono text-rose-600 font-medium">
                      {word.pinyin}
                    </p>
                  )}
                  <p className="text-xs font-bold text-slate-700 mt-1">
                    {word.meaning}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Hán Việt: {word.sinoVietnamese}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{word.partOfSpeechLabel}</span>
                  <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Mode 3: Detailed Table */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[11px] uppercase font-bold">
                <tr>
                  <th className="p-3.5 text-center w-12">#</th>
                  <th className="p-3.5">Chữ Hán</th>
                  <th className="p-3.5">Pinyin</th>
                  <th className="p-3.5">Âm Hán Việt</th>
                  <th className="p-3.5">Nghĩa tiếng Việt</th>
                  <th className="p-3.5">Loại từ</th>
                  <th className="p-3.5">Ví dụ</th>
                  <th className="p-3.5 text-center w-20">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredWords.map((word) => {
                  const isLearned = learnedWords.includes(word.id);
                  const isFav = favoriteWords.includes(word.id);

                  return (
                    <tr
                      key={word.id}
                      className="hover:bg-rose-50/40 transition-colors cursor-pointer"
                      onClick={() => handleSpeak(word.hanzi)}
                    >
                      <td className="p-3.5 text-center text-slate-400 font-mono text-xs">{word.id}</td>
                      <td className="p-3.5 font-bold text-base text-slate-900 flex items-center space-x-2">
                        <span>{word.hanzi}</span>
                        <button
                          onClick={(e) => handleSpeak(word.hanzi, e)}
                          className="p-1 text-slate-400 hover:text-rose-600"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                      <td className="p-3.5 font-mono text-rose-600 font-medium">{word.pinyin}</td>
                      <td className="p-3.5 text-slate-600 font-medium">{word.sinoVietnamese}</td>
                      <td className="p-3.5 font-semibold text-slate-800">{word.meaning}</td>
                      <td className="p-3.5 text-slate-500 text-xs">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {word.partOfSpeechLabel}
                        </span>
                      </td>
                      <td className="p-3.5 text-xs text-slate-600 max-w-xs">
                        <p className="font-medium text-slate-800">{word.example.hanzi}</p>
                        <p className="text-slate-500 text-[11px]">{word.example.vietnamese}</p>
                      </td>
                      <td className="p-3.5 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center space-x-1">
                          <button
                            onClick={(e) => toggleFavorite(word.id, e)}
                            className={`p-1.5 rounded-lg ${isFav ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                          >
                            <Star className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={(e) => toggleLearned(word.id, e)}
                            className={`p-1.5 rounded-lg ${isLearned ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-400'}`}
                          >
                            <CheckCircle className={`w-4 h-4 ${isLearned ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
