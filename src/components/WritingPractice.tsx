import React, { useRef, useState, useEffect } from 'react';
import { HSK1_VOCABULARY } from '../data/vocabulary';
import { speakChinese } from '../utils/speech';
import { Volume2, RotateCcw, Trash2, Edit3, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface WritingPracticeProps {
  showPinyin: boolean;
  audioSpeed: number;
}

export const WritingPractice: React.FC<WritingPracticeProps> = ({
  showPinyin,
  audioSpeed
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#e11d48');
  const [brushSize, setBrushSize] = useState(6);
  const [strokesHistory, setStrokesHistory] = useState<ImageData[]>([]);

  const sampleWords = HSK1_VOCABULARY.slice(0, 30);
  const currentWord = sampleWords[selectedWordIndex] || sampleWords[0];

  // Initialize Canvas & Tian Zi Ge Grid
  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Outer border
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 2;
    ctx.strokeRect(4, 4, width - 8, height - 8);

    // Inner dashed lines (Tian Zi Ge / Mi Zi Ge)
    ctx.strokeStyle = '#fecdd3';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);

    // Horizontal center
    ctx.beginPath();
    ctx.moveTo(4, height / 2);
    ctx.lineTo(width - 4, height / 2);
    ctx.stroke();

    // Vertical center
    ctx.beginPath();
    ctx.moveTo(width / 2, 4);
    ctx.lineTo(width / 2, height - 4);
    ctx.stroke();

    // Diagonal lines
    ctx.beginPath();
    ctx.moveTo(4, 4);
    ctx.lineTo(width - 4, height - 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - 4, 4);
    ctx.lineTo(4, height - 4);
    ctx.stroke();

    ctx.setLineDash([]); // reset dash

    // Watermark character for tracing guide
    ctx.fillStyle = '#f1f5f9';
    ctx.font = `bold ${width * 0.7}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(currentWord.hanzi[0] || '我', width / 2, height / 2 + 10);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawGrid(ctx, canvas.width, canvas.height);
    setStrokesHistory([]);
  }, [currentWord]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save current state for undo
    const currentImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setStrokesHistory((prev) => [...prev, currentImageData]);

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawGrid(ctx, canvas.width, canvas.height);
    setStrokesHistory([]);
  };

  const handleUndo = () => {
    if (strokesHistory.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const previousState = strokesHistory[strokesHistory.length - 1];
    ctx.putImageData(previousState, 0, 0);
    setStrokesHistory((prev) => prev.slice(0, -1));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <span>Tập Viết Chữ Hán HSK 1 (Điền Tự Cách)</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Luyện viết từng nét chữ Hán trên khung ô mễ tiêu chuẩn với mẫu mờ hướng dẫn.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => speakChinese(currentWord.hanzi, audioSpeed)}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold transition-all"
          >
            <Volume2 className="w-4 h-4" />
            <span>Phát âm</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Word Select List (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-4 border border-slate-100 shadow-xs space-y-2 max-h-[500px] overflow-y-auto">
          <span className="text-xs font-bold uppercase text-slate-400 block px-2">
            Chọn chữ Hán tập viết:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {sampleWords.map((word, idx) => {
              const isSelected = idx === selectedWordIndex;
              return (
                <button
                  key={word.id}
                  onClick={() => setSelectedWordIndex(idx)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-rose-50 border-rose-400 shadow-xs'
                      : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200/60'
                  }`}
                >
                  <span className="text-2xl font-bold text-slate-900 block">{word.hanzi}</span>
                  <span className="text-[11px] font-mono text-rose-600 block">{word.pinyin}</span>
                  <span className="text-[10px] text-slate-500 block truncate">{word.meaning}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-5 flex flex-col items-center">
          {/* Word Info Banner */}
          <div className="text-center space-y-1">
            <h3 className="text-3xl font-extrabold text-slate-900">{currentWord.hanzi}</h3>
            <p className="text-sm font-mono font-semibold text-rose-600">
              {currentWord.pinyin} • Hán Việt: {currentWord.sinoVietnamese}
            </p>
            <p className="text-xs text-slate-600 font-medium">Nghĩa: {currentWord.meaning}</p>
          </div>

          {/* Canvas Box */}
          <div className="relative border-4 border-rose-200 rounded-3xl overflow-hidden shadow-inner bg-white touch-none">
            <canvas
              ref={canvasRef}
              width={340}
              height={340}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="cursor-crosshair"
            />
          </div>

          {/* Canvas Toolbar Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full pt-2">
            {/* Color Select */}
            <div className="flex items-center space-x-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-200/80">
              {['#e11d48', '#0f172a', '#2563eb', '#059669'].map((c) => (
                <button
                  key={c}
                  onClick={() => setBrushColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    brushColor === c ? 'border-white ring-2 ring-rose-500 scale-110' : 'border-transparent'
                  }`}
                />
              ))}
            </div>

            {/* Brush Thickness */}
            <div className="flex items-center space-x-1 bg-slate-50 p-1.5 rounded-xl border border-slate-200/80 text-xs text-slate-600">
              <span className="text-[10px] font-bold px-1">Nét:</span>
              {[4, 6, 9].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setBrushSize(sz)}
                  className={`px-2 py-1 rounded-md font-bold ${
                    brushSize === sz ? 'bg-rose-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {sz === 4 ? 'Mảnh' : sz === 6 ? 'Vừa' : 'Đậm'}
                </button>
              ))}
            </div>

            {/* Undo & Clear */}
            <button
              onClick={handleUndo}
              disabled={strokesHistory.length === 0}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold disabled:opacity-40"
              title="Hoàn tác nét vừa viết"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Hoàn tác</span>
            </button>

            <button
              onClick={handleClear}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold"
              title="Xóa trắng để viết lại"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa hết</span>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full pt-3 border-t border-slate-100">
            <button
              onClick={() => setSelectedWordIndex((prev) => (prev - 1 + sampleWords.length) % sampleWords.length)}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Chữ trước</span>
            </button>

            <span className="text-xs text-slate-400">
              {selectedWordIndex + 1} / {sampleWords.length}
            </span>

            <button
              onClick={() => setSelectedWordIndex((prev) => (prev + 1) % sampleWords.length)}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white shadow-xs"
            >
              <span>Chữ tiếp theo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
