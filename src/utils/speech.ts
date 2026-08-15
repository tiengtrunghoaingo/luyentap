// Speech utility using Web Speech API for Chinese (zh-CN / zh-TW)
let selectedVoice: SpeechSynthesisVoice | null = null;

export const initVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      findChineseVoice(voices);
      resolve(voices);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices();
      findChineseVoice(updatedVoices);
      resolve(updatedVoices);
    };
  });
};

const findChineseVoice = (voices: SpeechSynthesisVoice[]) => {
  const chineseVoice = voices.find(
    (v) =>
      v.lang.startsWith('zh-CN') ||
      v.lang.startsWith('zh_CN') ||
      v.lang.startsWith('cmn-Hans') ||
      v.lang.startsWith('zh')
  );
  if (chineseVoice) {
    selectedVoice = chineseVoice;
  }
};

export const speakChinese = (
  text: string,
  rate: number = 0.85,
  pitch: number = 1.0
): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    window.speechSynthesis.cancel(); // Cancel any ongoing speech

    const cleanText = text.replace(/[\(\)\[\]\/]/g, '').trim();
    if (!cleanText) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;
    utterance.pitch = pitch;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      const voices = window.speechSynthesis.getVoices();
      const fallback = voices.find((v) => v.lang.includes('zh'));
      if (fallback) {
        utterance.voice = fallback;
      }
    }

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
