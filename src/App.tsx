import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { CourseLessonView } from './components/CourseLessonView';
import { GrammarSection } from './components/GrammarSection';
import { VocabularySection } from './components/VocabularySection';
import { PracticeSection } from './components/PracticeSection';
import { WritingPractice } from './components/WritingPractice';
import { AITutorSection } from './components/AITutorSection';
import { HSK1_VOCABULARY } from './data/vocabulary';
import { initVoices } from './utils/speech';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('course');
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [audioSpeed, setAudioSpeed] = useState<number>(0.85);

  // Stored state
  const [learnedWords, setLearnedWords] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('hsk1_learned_words');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favoriteWords, setFavoriteWords] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('hsk1_fav_words');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    initVoices();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showPinyin={showPinyin}
        setShowPinyin={setShowPinyin}
        audioSpeed={audioSpeed}
        setAudioSpeed={setAudioSpeed}
        learnedCount={learnedWords.length}
        totalWords={HSK1_VOCABULARY.length}
      />

      {/* Main Tab Content */}
      <main className="flex-1 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {activeTab === 'course' && (
          <CourseLessonView
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarSection
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
            onNavigateToPractice={() => setActiveTab('practice')}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabularySection
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
            learnedWords={learnedWords}
            setLearnedWords={setLearnedWords}
            favoriteWords={favoriteWords}
            setFavoriteWords={setFavoriteWords}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeSection
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
          />
        )}

        {activeTab === 'writing' && (
          <WritingPractice
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
          />
        )}

        {activeTab === 'ai-tutor' && (
          <AITutorSection
            showPinyin={showPinyin}
            audioSpeed={audioSpeed}
          />
        )}
      </main>

      {/* Modern Clean Footer */}
      <footer className="bg-white border-t border-slate-100 py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center text-xs">
              汉
            </div>
            <span className="font-semibold text-slate-700">Giáo Trình Chuẩn HSK 1 & Ngữ Pháp Toàn Diện</span>
            <span className="text-slate-300">•</span>
            <span>15 Bài học, 14 Chuyên đề, 150 Từ vựng & AI Tiểu Ngữ</span>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setActiveTab('course')} className="hover:text-rose-600 transition-colors font-medium text-rose-600">
              15 Bài Giáo Trình
            </button>
            <button onClick={() => setActiveTab('grammar')} className="hover:text-rose-600 transition-colors">
              14 Chuyên Đề
            </button>
            <button onClick={() => setActiveTab('vocab')} className="hover:text-rose-600 transition-colors">
              150 Từ Vựng
            </button>
            <button onClick={() => setActiveTab('practice')} className="hover:text-rose-600 transition-colors">
              Luyện Tập
            </button>
            <button onClick={() => setActiveTab('ai-tutor')} className="hover:text-rose-600 transition-colors">
              AI Tiểu Ngữ
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
