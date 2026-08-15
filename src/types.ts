export interface ExampleSentence {
  id: string;
  hanzi: string;
  pinyin: string;
  vietnamese: string;
  literalMeaning?: string;
  highlightWords?: string[];
  note?: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  formula: string;
  explanation: string;
  notes?: string[];
  commonMistakes?: {
    incorrect: string;
    incorrectPinyin: string;
    correct: string;
    correctPinyin: string;
    reason: string;
  }[];
  examples: ExampleSentence[];
}

export interface GrammarLesson {
  id: string;
  unitNumber: number;
  title: string;
  chineseTitle: string;
  category: string;
  categoryLabel: string;
  summary: string;
  rules: GrammarRule[];
  keyTakeaways?: string[];
}

export interface DialogueLesson {
  id: string;
  title: string;
  chineseTitle: string;
  situation: string;
  keyVocab: { hanzi: string; pinyin: string; meaning: string }[];
  lines: DialogueLine[];
}

export interface WarmUpItem {
  id: string;
  labelZh: string;
  pinyin: string;
  vietnamese: string;
  icon: string; // Emoji / visual icon representation
  imageHint?: string;
}

export interface DialogueLine {
  speaker: string;
  avatar: string;
  characterName?: string;
  hanzi: string;
  pinyin: string;
  vietnamese: string;
}

export interface TextComprehensionQuestion {
  question: string;
  questionPinyin?: string;
  options: { id: string; text: string; pinyin?: string }[];
  correctOptionId: string;
  explanation: string;
}

export interface LessonText {
  id: string;
  title: string;
  situation: string;
  sceneType: 'overseas' | 'domestic';
  lines: DialogueLine[];
  newWords: {
    id: number;
    hanzi: string;
    pinyin: string;
    sinoVietnamese: string;
    meaning: string;
    partOfSpeechLabel: string;
  }[];
  comprehensionQuestion?: TextComprehensionQuestion;
  tip?: {
    title: string;
    content: string;
  };
}

export interface FillWordBankQuestion {
  id: string;
  wordBank: { id: string; label: string; pinyin: string; vietnamese: string }[];
  sentences: {
    id: string;
    sentenceWithBlank: string;
    pinyin: string;
    vietnamese: string;
    correctWordId: string;
    explanation: string;
  }[];
}

export interface PictureDescribeQuestion {
  id: string;
  imageIcon: string;
  promptText: string;
  promptPinyin: string;
  promptVietnamese: string;
  sentencePrefix: string;
  suggestedAnswer: string;
  pinyin: string;
  vietnamese: string;
}

export interface TongueTwister {
  title: string;
  hanzi: string;
  pinyin: string;
  vietnamese: string;
  explanation: string;
}

export interface BonusContent {
  title: string;
  chineseTitle: string;
  category: string;
  content: string;
  bulletPoints?: string[];
}

export interface SelfCheckItem {
  id: string;
  topic: string;
  example: string;
  vietnamese: string;
}

export interface LessonData {
  id: string;
  lessonNumber: number;
  title: string;
  chineseTitle: string;
  pinyinTitle: string;
  englishTitle: string;
  objectives: string[];
  charactersFeatured: string[];
  warmUp: {
    instructions: string;
    items: WarmUpItem[];
  };
  texts: LessonText[];
  grammarPoints: GrammarRule[];
  comprehensiveExercises: {
    fillBlank?: FillWordBankQuestion;
    pictureDescribe?: PictureDescribeQuestion[];
    reorders?: ReorderQuestion[];
    multipleChoice?: MultipleChoiceQuestion[];
  };
  tongueTwister?: TongueTwister;
  bonusContent?: BonusContent;
  selfEvaluation: SelfCheckItem[];
}

export interface VocabWord {
  id: number;
  lessonNumber?: number;
  hanzi: string;
  pinyin: string;
  sinoVietnamese: string; // Âm Hán Việt
  meaning: string;
  partOfSpeech: string;
  partOfSpeechLabel: string;
  topic: string;
  example: {
    hanzi: string;
    pinyin: string;
    vietnamese: string;
  };
}

export interface MultipleChoiceQuestion {
  id: string;
  lessonId?: string;
  lessonNumber?: number;
  question: string;
  questionPinyin?: string;
  options: {
    id: string;
    text: string;
    pinyin?: string;
  }[];
  correctAnswerId: string;
  explanation: string;
  category: string;
}

export interface ReorderQuestion {
  id: string;
  lessonId?: string;
  lessonNumber?: number;
  scrambledWords: { id: string; hanzi: string; pinyin: string }[];
  correctOrder: string[]; // array of word IDs
  fullSentence: string;
  pinyin: string;
  vietnamese: string;
  explanation: string;
}

export interface FillBlankQuestion {
  id: string;
  lessonNumber?: number;
  sentenceWithBlank: string;
  pinyinWithBlank: string;
  vietnamese: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TranslationQuestion {
  id: string;
  lessonNumber?: number;
  sourceText: string;
  sourceLang: 'vi' | 'zh';
  targetPinyin?: string;
  suggestedWords: string[];
  correctAnswer: string;
  acceptedAnswers: string[];
  explanation: string;
}

export type ActiveTab = 'course' | 'grammar' | 'vocab' | 'practice' | 'writing' | 'ai-tutor';
