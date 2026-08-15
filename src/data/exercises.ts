import { MultipleChoiceQuestion, ReorderQuestion, FillBlankQuestion, TranslationQuestion } from '../types';

export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'mc-1',
    lessonId: 'unit-3',
    question: 'Điền từ thích hợp vào chỗ trống: 他 ___ 医生，他是老师。',
    questionPinyin: 'Tā ___ yīshēng, tā shì lǎoshī.',
    options: [
      { id: 'a', text: '不是', pinyin: 'bú shì' },
      { id: 'b', text: '不', pinyin: 'bù' },
      { id: 'c', text: '没', pinyin: 'méi' },
      { id: 'd', text: '没有', pinyin: 'méiyǒu' }
    ],
    correctAnswerId: 'a',
    explanation: 'Cấu trúc phủ định của câu chữ 是 là "不是" (bú shì). Nghĩa: "Anh ấy không phải là bác sĩ, anh ấy là giáo viên."',
    category: 'Câu chữ 是'
  },
  {
    id: 'mc-2',
    lessonId: 'unit-4',
    question: 'Chọn câu đúng ngữ pháp tiếng Trung:',
    options: [
      { id: 'a', text: '我不有汉语书。', pinyin: 'Wǒ bù yǒu Hànyǔ shū.' },
      { id: 'b', text: '我没有汉语书。', pinyin: 'Wǒ méiyǒu Hànyǔ shū.' },
      { id: 'c', text: '我没汉语书。', pinyin: 'Wǒ méi Hànyǔ shū.' },
      { id: 'd', text: '我不是汉语书。', pinyin: 'Wǒ bú shì Hànyǔ shū.' }
    ],
    correctAnswerId: 'b',
    explanation: 'Phủ định của động từ 有 (có) bắt buộc phải dùng "没有" (méiyǒu), tuyệt đối không dùng "不有".',
    category: 'Câu chữ 有'
  },
  {
    id: 'mc-3',
    lessonId: 'unit-5',
    question: 'Dịch câu "Hôm nay thời tiết rất đẹp" sang tiếng Trung:',
    options: [
      { id: 'a', text: '今天天气是很好。', pinyin: 'Jīntiān tiānqì shì hěn hǎo.' },
      { id: 'b', text: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.' },
      { id: 'c', text: '今天天气很好是。', pinyin: 'Jīntiān tiānqì hěn hǎo shì.' },
      { id: 'd', text: '今天天气有很好。', pinyin: 'Jīntiān tiānqì yǒu hěn hǎo.' }
    ],
    correctAnswerId: 'b',
    explanation: 'Câu vị ngữ tính từ trong tiếng Trung KHÔNG dùng 是. Cấu trúc chuẩn: Chủ ngữ + 很 + Tính từ (今天天气很好).',
    category: 'Câu vị ngữ tính từ'
  },
  {
    id: 'mc-4',
    lessonId: 'unit-11',
    question: 'Điền lượng từ thích hợp: 我想买两 ___ 汉语书。',
    questionPinyin: 'Wǒ xiǎng mǎi liǎng ___ Hànyǔ shū.',
    options: [
      { id: 'a', text: '个', pinyin: 'gè' },
      { id: 'b', text: '本', pinyin: 'běn' },
      { id: 'c', text: '块', pinyin: 'kuài' },
      { id: 'd', text: '张', pinyin: 'zhāng' }
    ],
    correctAnswerId: 'b',
    explanation: 'Lượng từ dành cho sách vở, từ điển là "本" (běn). 两本书 = 2 quyển sách.',
    category: 'Lượng từ'
  },
  {
    id: 'mc-5',
    lessonId: 'unit-13',
    question: 'Chọn câu có trật tự từ đúng: "Tôi học tiếng Trung ở trường"',
    options: [
      { id: 'a', text: '我学习汉语在学校。', pinyin: 'Wǒ xuéxí Hànyǔ zài xuéxiào.' },
      { id: 'b', text: '我在学校学习汉语。', pinyin: 'Wǒ zài xuéxiào xuéxí Hànyǔ.' },
      { id: 'c', text: '在学校我汉语学习。', pinyin: 'Zài xuéxiào wǒ Hànyǔ xuéxí.' },
      { id: 'd', text: '我学校在学习汉语。', pinyin: 'Wǒ xuéxiào zài xuéxí Hànyǔ.' }
    ],
    correctAnswerId: 'b',
    explanation: 'Cấu trúc chỉ nơi chốn của hành động trong tiếng Trung: Chủ ngữ + 在 + Nơi chốn + Động từ + Tân ngữ (我在学校学习汉语).',
    category: 'Giới từ 在'
  },
  {
    id: 'mc-6',
    lessonId: 'unit-12',
    question: 'Chọn cách diễn đạt ngày giờ đúng: "8 giờ 30 phút sáng mai"',
    options: [
      { id: 'a', text: '八点三十分明天上午', pinyin: 'Bā diǎn sānshí fēn míngtiān shàngwǔ' },
      { id: 'b', text: '明天上午八点半', pinyin: 'Míngtiān shàngwǔ bā diǎn bàn' },
      { id: 'c', text: '上午明天八点半', pinyin: 'Shàngwǔ míngtiān bā diǎn bàn' },
      { id: 'd', text: '明天八点半上午', pinyin: 'Míngtiān bā diǎn bàn shàngwǔ' }
    ],
    correctAnswerId: 'b',
    explanation: 'Quy tắc thời gian trong tiếng Trung là "Lớn trước, nhỏ sau": Ngày (明天) ➔ Buổi (上午) ➔ Giờ (八点半).',
    category: 'Thời gian'
  },
  {
    id: 'mc-7',
    lessonId: 'unit-7',
    question: 'Điền trợ từ thích hợp: 我是越南人，你 ___ ？',
    questionPinyin: 'Wǒ shì Yuènán rén, nǐ ___ ?',
    options: [
      { id: 'a', text: '吗', pinyin: 'ma' },
      { id: 'b', text: '呢', pinyin: 'ne' },
      { id: 'c', text: '吧', pinyin: 'ba' },
      { id: 'd', text: '了', pinyin: 'le' }
    ],
    correctAnswerId: 'b',
    explanation: 'Trợ từ "呢" dùng để tạo câu hỏi tỉnh lược (Còn bạn thì sao? / 你呢？).',
    category: 'Trợ từ ngữ khí'
  },
  {
    id: 'mc-8',
    lessonId: 'unit-14',
    question: 'Điền từ chỉ kỹ năng học được: 他 ___ 说一点儿汉语。',
    questionPinyin: 'Tā ___ shuō yìdiǎnr Hànyǔ.',
    options: [
      { id: 'a', text: '会', pinyin: 'huì' },
      { id: 'b', text: '要', pinyin: 'yào' },
      { id: 'c', text: '在', pinyin: 'zài' },
      { id: 'd', text: '有', pinyin: 'yǒu' }
    ],
    correctAnswerId: 'a',
    explanation: 'Động từ năng nguyện "会" biểu thị kỹ năng có được qua rèn luyện/học tập (biết nói tiếng Trung ➔ 会说汉语).',
    category: 'Động từ năng nguyện'
  },
  {
    id: 'mc-9',
    lessonId: 'unit-8',
    question: 'Chọn câu cảm thán đúng với cấu trúc "太...了":',
    options: [
      { id: 'a', text: '太好。', pinyin: 'Tài hǎo.' },
      { id: 'b', text: '太好了！', pinyin: 'Tài hǎo le!' },
      { id: 'c', text: '太了很好！', pinyin: 'Tài le hěn hǎo!' },
      { id: 'd', text: '很太好了！', pinyin: 'Hěn tài hǎo le!' }
    ],
    correctAnswerId: 'b',
    explanation: 'Cấu trúc cảm thán cố định: 太 + Tính từ + 了 (Tài hǎo le! = Tốt quá rồi!).',
    category: 'Cấu trúc 太...了'
  },
  {
    id: 'mc-10',
    lessonId: 'unit-2',
    question: 'Muốn hỏi giá của một món đồ, ta dùng câu nào?',
    options: [
      { id: 'a', text: '这个多少钱？', pinyin: 'Zhè ge duōshao qián?' },
      { id: 'b', text: '这个几钱？', pinyin: 'Zhè ge jǐ qián?' },
      { id: 'c', text: '这个怎么钱？', pinyin: 'Zhè ge zěnme qián?' },
      { id: 'd', text: '这个什么钱？', pinyin: 'Zhè ge shénme qián?' }
    ],
    correctAnswerId: 'a',
    explanation: 'Hỏi giá tiền trong tiếng Trung dùng "多少钱" (duōshao qián).',
    category: 'Đại từ nghi vấn'
  }
];

export const REORDER_QUESTIONS: ReorderQuestion[] = [
  {
    id: 'ro-1',
    scrambledWords: [
      { id: 'w1', hanzi: '是', pinyin: 'shì' },
      { id: 'w2', hanzi: '我', pinyin: 'wǒ' },
      { id: 'w3', hanzi: '中国人', pinyin: 'Zhōngguó rén' },
      { id: 'w4', hanzi: '朋友', pinyin: 'péngyou' },
      { id: 'w5', hanzi: '的', pinyin: 'de' }
    ],
    correctOrder: ['w4', 'w5', 'w2', 'w1', 'w3'], // or w2 w5 w4 w1 w3: 我的朋友是中国人
    fullSentence: '我的朋友是中国人。',
    pinyin: 'Wǒ de péngyou shì Zhōngguó rén.',
    vietnamese: 'Bạn của tôi là người Trung Quốc.',
    explanation: 'Cấu trúc: Định ngữ (我的) + Danh từ (朋友) + 是 + Tân ngữ (中国人).'
  },
  {
    id: 'ro-2',
    scrambledWords: [
      { id: 'w1', hanzi: '喝茶', pinyin: 'hē chá' },
      { id: 'w2', hanzi: '在', pinyin: 'zài' },
      { id: 'w3', hanzi: '妈妈', pinyin: 'māma' },
      { id: 'w4', hanzi: '饭馆', pinyin: 'fànguǎn' }
    ],
    correctOrder: ['w3', 'w2', 'w4', 'w1'],
    fullSentence: '妈妈在饭馆喝茶。',
    pinyin: 'Māma zài fànguǎn hē chá.',
    vietnamese: 'Mẹ uống trà ở nhà hàng.',
    explanation: 'Cấu trúc ở đâu làm gì: Chủ ngữ (妈妈) + 在 + Địa điểm (饭馆) + Hành động (喝茶).'
  },
  {
    id: 'ro-3',
    scrambledWords: [
      { id: 'w1', hanzi: '昨天', pinyin: 'zuótiān' },
      { id: 'w2', hanzi: '去', pinyin: 'qù' },
      { id: 'w3', hanzi: '没', pinyin: 'méi' },
      { id: 'w4', hanzi: '他', pinyin: 'tā' },
      { id: 'w5', hanzi: '学校', pinyin: 'xuéxiào' }
    ],
    correctOrder: ['w4', 'w1', 'w3', 'w2', 'w5'],
    fullSentence: '他昨天没去学校。',
    pinyin: 'Tā zuótiān méi qù xuéxiào.',
    vietnamese: 'Hôm qua anh ấy không đi học.',
    explanation: 'Chủ ngữ (他) + Thời gian (昨天) + Phủ định quá khứ (没) + Động từ (去) + Tân ngữ (学校).'
  },
  {
    id: 'ro-4',
    scrambledWords: [
      { id: 'w1', hanzi: '想', pinyin: 'xiǎng' },
      { id: 'w2', hanzi: '两本', pinyin: 'liǎng běn' },
      { id: 'w3', hanzi: '我', pinyin: 'wǒ' },
      { id: 'w4', hanzi: '书', pinyin: 'shū' },
      { id: 'w5', hanzi: '买', pinyin: 'mǎi' }
    ],
    correctOrder: ['w3', 'w1', 'w5', 'w2', 'w4'],
    fullSentence: '我想买两本书。',
    pinyin: 'Wǒ xiǎng mǎi liǎng běn shū.',
    vietnamese: 'Tôi muốn mua hai quyển sách.',
    explanation: 'Chủ ngữ (我) + Động từ năng nguyện (想) + Động từ (买) + Lượng từ cụm (两本书).'
  },
  {
    id: 'ro-5',
    scrambledWords: [
      { id: 'w1', hanzi: '一只', pinyin: 'yì zhī' },
      { id: 'w2', hanzi: '有', pinyin: 'yǒu' },
      { id: 'w3', hanzi: '椅子下面', pinyin: 'yǐzi xiàmian' },
      { id: 'w4', hanzi: '小猫', pinyin: 'xiǎo māo' }
    ],
    correctOrder: ['w3', 'w2', 'w1', 'w4'],
    fullSentence: '椅子下面有一只小猫。',
    pinyin: 'Yǐzi xiàmian yǒu yì zhī xiǎo māo.',
    vietnamese: 'Dưới ghế có một con mèo nhỏ.',
    explanation: 'Câu tồn hiện: Nơi chốn (椅子下面) + 有 + Sự vật (一只小猫).'
  }
];

export const FILL_BLANK_QUESTIONS: FillBlankQuestion[] = [
  {
    id: 'fb-1',
    sentenceWithBlank: '今天天气 ___ 热了！',
    pinyinWithBlank: 'Jīntiān tiānqì ___ rè le!',
    vietnamese: 'Hôm nay thời tiết nóng quá rồi!',
    options: ['很', '太', '不', '都'],
    correctAnswer: '太',
    explanation: 'Đi với "了" ở cuối câu biểu thị cảm thán ta dùng cấu trúc "太 + Adj + 了".'
  },
  {
    id: 'fb-2',
    sentenceWithBlank: '桌子上有一 ___ 杯子。',
    pinyinWithBlank: 'Zhuōzi shang yǒu yì ___ bēizi.',
    vietnamese: 'Trên bàn có một cái cốc.',
    options: ['本', '个', '岁', '块'],
    correctAnswer: '个',
    explanation: 'Lượng từ chỉ cái cốc (杯子) là "个" (gè).'
  },
  {
    id: 'fb-3',
    sentenceWithBlank: '我们 ___ 是越南人。',
    pinyinWithBlank: 'Wǒmen ___ shì Yuènán rén.',
    vietnamese: 'Chúng tôi đều là người Việt Nam.',
    options: ['都', '和', '很', '没'],
    correctAnswer: '都',
    explanation: 'Phó từ "都" (dōu) đứng trước động từ để biểu thị "đều, tất cả".'
  },
  {
    id: 'fb-4',
    sentenceWithBlank: '你叫 ___ 名字？',
    pinyinWithBlank: 'Nǐ jiào ___ míngzi?',
    vietnamese: 'Bạn tên là gì?',
    options: ['谁', '什么', '哪儿', '几'],
    correctAnswer: '什么',
    explanation: 'Hỏi tên dùng đại từ nghi vấn "什么" (shénme - cái gì/gì).'
  },
  {
    id: 'fb-5',
    sentenceWithBlank: '他 ___ 会写汉字。',
    pinyinWithBlank: 'Tā ___ huì xiě hànzì.',
    vietnamese: 'Anh ấy không biết viết chữ Hán.',
    options: ['不', '没', '太', '很'],
    correctAnswer: '不',
    explanation: 'Phủ định của động từ năng nguyện 会 dùng "不" ➔ 不会 (bú huì - không biết).'
  }
];

export const TRANSLATION_QUESTIONS: TranslationQuestion[] = [
  {
    id: 'tr-1',
    sourceText: 'Tôi là người Việt Nam, bạn là người nước nào?',
    sourceLang: 'vi',
    suggestedWords: ['我', '是', '越南人', '你', '哪国人', '呢'],
    correctAnswer: '我是越南人，你是哪国人？',
    acceptedAnswers: [
      '我是越南人，你是哪国人？',
      '我是越南人，你哪国人？',
      '我是越南人，你是哪国人'
    ],
    explanation: 'Tôi là người Việt Nam (我是越南人) + Bạn là người nước nào (你是哪国人？).'
  },
  {
    id: 'tr-2',
    sourceText: 'Chiều mai bạn có đi trường học không?',
    sourceLang: 'vi',
    suggestedWords: ['明天', '下午', '你', '去', '学校', '吗'],
    correctAnswer: '明天下午你去学校吗？',
    acceptedAnswers: [
      '明天下午你去学校吗？',
      '你明天下午去学校吗？',
      '明天下午你去学校吗',
      '你明天下午去学校吗'
    ],
    explanation: 'Trạng ngữ thời gian (明天下午) đặt trước động từ (去学校吗).'
  },
  {
    id: 'tr-3',
    sourceText: '这是我买的苹果，太好吃了！',
    sourceLang: 'zh',
    suggestedWords: ['đây', 'táo', 'tôi mua', 'ngon quá'],
    correctAnswer: 'Đây là táo tôi mua, ngon quá rồi!',
    acceptedAnswers: [
      'Đây là táo tôi mua, ngon quá rồi!',
      'Đây là táo tôi mua, ngon quá!',
      'Đây là quả táo tôi mua, ngon quá rồi!'
    ],
    explanation: '我买的苹果 = táo tôi mua (định ngữ với 的), 太好吃了 = ngon quá rồi.'
  }
];
