import React from 'react';
import { ActiveTab } from '../types';
import { GraduationCap, BookOpen, Layers, CheckCircle2, Edit3, Sparkles, Volume2, Eye, EyeOff } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  showPinyin: boolean;
  setShowPinyin: (show: boolean) => void;
  audioSpeed: number;
  setAudioSpeed: (speed: number) => void;
  learnedCount: number;
  totalWords: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  showPinyin,
  setShowPinyin,
  audioSpeed,
  setAudioSpeed,
  learnedCount,
  totalWords
}) => {
  const tabs = [
    { id: 'course' as ActiveTab, label: 'Giáo Trình 15 Bài', icon: GraduationCap, badge: 'Đầy Đủ' },
    { id: 'grammar' as ActiveTab, label: 'Ngữ Pháp', icon: BookOpen, badge: '14 Chuyên Đề' },
    { id: 'vocab' as ActiveTab, label: '150 Từ Vựng', icon: Layers, badge: `${learnedCount}/${totalWords}` },
    { id: 'practice' as ActiveTab, label: 'Luyện Tập', icon: CheckCircle2, badge: 'Đề Thi' },
    { id: 'writing' as ActiveTab, label: 'Tập Viết', icon: Edit3, badge: 'Nét Hán' },
    { id: 'ai-tutor' as ActiveTab, label: 'AI Gia Sư', icon: Sparkles, badge: 'Tiểu Ngữ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('grammar')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center font-bold text-xl shadow-sm shadow-rose-200">
              汉
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-slate-800 tracking-tight">Ngữ Pháp HSK 1</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-rose-50 text-rose-700 rounded-full border border-rose-200">
                  Tiếng Trung Cơ Bản
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Chuyên đề ngữ pháp, 150 từ vựng & bài tập tương tác</p>
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Pinyin Toggle */}
            <button
              id="btn-toggle-pinyin"
              onClick={() => setShowPinyin(!showPinyin)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                showPinyin
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Bật/Tắt phiên âm Pinyin"
            >
              {showPinyin ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Pinyin:</span>
              <span>{showPinyin ? 'Hiện' : 'Ẩn'}</span>
            </button>

            {/* Audio Speed Toggle */}
            <button
              id="btn-toggle-audio-speed"
              onClick={() => setAudioSpeed(audioSpeed === 0.75 ? 1.0 : 0.75)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
              title="Tốc độ phát âm (0.75x chậm / 1.0x chuẩn)"
            >
              <Volume2 className="w-3.5 h-3.5 text-rose-600" />
              <span>{audioSpeed}x</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex space-x-1 overflow-x-auto no-scrollbar py-2 border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-xs shadow-rose-200'
                    : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-rose-600'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
