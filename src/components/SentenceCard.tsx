import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakChinese } from '../utils/speech';

interface SentenceCardProps {
  hanzi: string;
  pinyin: string;
  vietnamese: string;
  highlightWords?: string[];
  audioSpeed?: number;
  showPinyin?: boolean;
  note?: string;
  className?: string;
}

export const SentenceCard: React.FC<SentenceCardProps> = ({
  hanzi,
  pinyin,
  vietnamese,
  highlightWords = [],
  audioSpeed = 0.85,
  showPinyin = true,
  note,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleSpeak = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isPlaying) return;
    setIsPlaying(true);
    await speakChinese(hanzi, audioSpeed);
    setIsPlaying(false);
  };

  return (
    <div
      onClick={handleSpeak}
      className={`group relative p-3.5 bg-slate-50/80 hover:bg-rose-50/50 rounded-xl border border-slate-200/80 hover:border-rose-300 transition-all cursor-pointer ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          {/* Pinyin */}
          {showPinyin && (
            <p className="text-xs font-mono font-medium text-rose-600 tracking-wide">
              {pinyin}
            </p>
          )}

          {/* Hanzi */}
          <p className="text-lg sm:text-xl font-medium text-slate-800 tracking-normal leading-relaxed">
            {hanzi}
          </p>

          {/* Vietnamese */}
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            {vietnamese}
          </p>

          {/* Note if any */}
          {note && (
            <p className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block border border-amber-200/60 mt-1">
              💡 {note}
            </p>
          )}
        </div>

        {/* Audio Button */}
        <button
          onClick={handleSpeak}
          className={`shrink-0 p-2 rounded-lg transition-all ${
            isPlaying
              ? 'bg-rose-600 text-white animate-pulse'
              : 'bg-white text-slate-500 hover:text-rose-600 hover:bg-rose-100/70 border border-slate-200 group-hover:border-rose-200 shadow-xs'
          }`}
          title="Nghe phát âm chuẩn"
          aria-label="Phát âm"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
