import { LessonData } from '../../types';

export const LESSONS_1_TO_5: LessonData[] = [
  {
    id: 'lesson-1',
    lessonNumber: 1,
    chineseTitle: 'AI小语，你好！',
    pinyinTitle: 'AI Xiǎoyǔ, nǐ hǎo!',
    englishTitle: 'Hello, AI Xiaoyu!',
    title: 'Bài 1: Chào AI Tiểu Ngữ!',
    objectives: [
      'Chào hỏi và cảm ơn trong các tình huống hàng ngày',
      'Phân biệt lời chào giữa bạn bè (你好), người lớn/thầy cô (您好), và tập thể (你们好 / 大家好)',
      'Nắm vững cách chào tạm biệt (再见) và đáp lại lời cảm ơn (不客气)',
      'Làm quen với hệ thống ngữ âm Pinyin tiếng Trung'
    ],
    charactersFeatured: ['xiaoyu', 'wangyifei', 'baijiayue', 'chentianzhong', 'annie'],
    warmUp: {
      instructions: 'Nối các lời chào và hành động phổ biến với biểu tượng và nghĩa phù hợp:',
      items: [
        { id: 'w1', labelZh: '你好', pinyin: 'nǐ hǎo', vietnamese: 'Xin chào', icon: '👋' },
        { id: 'w2', labelZh: '您好', pinyin: 'nín hǎo', vietnamese: 'Chào bác / Chào thầy (kính trọng)', icon: '🤝' },
        { id: 'w3', labelZh: '大家好', pinyin: 'dàjiā hǎo', vietnamese: 'Chào mọi người', icon: '👥' },
        { id: 'w4', labelZh: '谢谢', pinyin: 'xièxie', vietnamese: 'Cảm ơn', icon: '🙏' },
        { id: 'w5', labelZh: '不客气', pinyin: 'bú kèqi', vietnamese: 'Không có gì / Đừng khách sáo', icon: '😊' },
        { id: 'w6', labelZh: '再见', pinyin: 'zàijiàn', vietnamese: 'Tạm biệt / Hẹn gặp lại', icon: '🙋' }
      ]
    },
    texts: [
      {
        id: 'l1-t1',
        title: 'Đoạn 1: Làm quen với AI Tiểu Ngữ & Cô giáo Vương',
        situation: 'Tại phòng học tiếng Trung ở nước ngoài, học sinh chào trợ lý AI và cô giáo Vương',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: 'AI小语，你好！', pinyin: 'AI Xiǎoyǔ, nǐ hǎo!', vietnamese: 'Chào AI Tiểu Ngữ!' },
          { speaker: 'AI小语', avatar: '🤖', hanzi: '你好，白家月！', pinyin: 'Nǐ hǎo, Bái Jiāyuè!', vietnamese: 'Chào Bạch Gia Nguyệt!' },
          { speaker: '陈天中', avatar: '👨', hanzi: '王老师，您好！', pinyin: 'Wáng lǎoshī, nín hǎo!', vietnamese: 'Em chào cô giáo Vương ạ!' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你好，陈天中！', pinyin: 'Nǐ hǎo, Chén Tiānzhōng!', vietnamese: 'Chào em, Trần Thiên Trung!' }
        ],
        newWords: [
          { id: 1, hanzi: '你', pinyin: 'nǐ', sinoVietnamese: 'Nhĩ', meaning: 'bạn, cậu (ngôi thứ 2)', partOfSpeechLabel: 'Đại từ' },
          { id: 2, hanzi: '好', pinyin: 'hǎo', sinoVietnamese: 'Hảo', meaning: 'tốt, đẹp, an lành', partOfSpeechLabel: 'Tính từ' },
          { id: 3, hanzi: '您', pinyin: 'nín', sinoVietnamese: 'Nẫm', meaning: 'ngài, ông, thầy/cô (kính ngữ của 你)', partOfSpeechLabel: 'Đại từ' },
          { id: 4, hanzi: '老师', pinyin: 'lǎoshī', sinoVietnamese: 'Lão sư', meaning: 'thầy giáo, cô giáo', partOfSpeechLabel: 'Danh từ' }
        ],
        comprehensionQuestion: {
          question: 'Khi chào cô giáo Vương, Trần Thiên Trung đã dùng đại từ nào để thể hiện sự kính trọng?',
          questionPinyin: 'Chén Tiānzhōng chēnghu Wáng lǎoshī yòng le nǎge cí?',
          options: [
            { id: 'a', text: '你好 (Nǐ hǎo)', pinyin: 'nǐ hǎo' },
            { id: 'b', text: '您好 (Nín hǎo)', pinyin: 'nín hǎo' },
            { id: 'c', text: '大家好 (Dàjiā hǎo)', pinyin: 'dàjiā hǎo' }
          ],
          correctOptionId: 'b',
          explanation: 'Dùng “您好” (Nín hǎo) thay cho “你好” để bày tỏ sự tôn kính với thầy cô giáo hoặc người lớn tuổi.'
        }
      },
      {
        id: 'l1-t2',
        title: 'Đoạn 2: Chào tập thể trong lớp học',
        situation: 'Cô Vương và các bạn học sinh chào nhau trước giờ học',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', vietnamese: 'Chào cả lớp / Chào mọi người!' },
          { speaker: '同学们', avatar: '🎓', hanzi: '老师，您好！', pinyin: 'Lǎoshī, nín hǎo!', vietnamese: 'Chúng em chào cô giáo ạ!' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', vietnamese: 'Chào các em!' },
          { speaker: '安妮', avatar: '👩', hanzi: '你好，小语！', pinyin: 'Nǐ hǎo, Xiǎoyǔ!', vietnamese: 'Chào Tiểu Ngữ nhé!' }
        ],
        newWords: [
          { id: 5, hanzi: '大家', pinyin: 'dàjiā', sinoVietnamese: 'Đại gia', meaning: 'mọi người, tất cả', partOfSpeechLabel: 'Đại từ' },
          { id: 6, hanzi: '你们', pinyin: 'nǐmen', sinoVietnamese: 'Nhĩ môn', meaning: 'các bạn, các cậu (số nhiều)', partOfSpeechLabel: 'Đại từ' },
          { id: 7, hanzi: '同学', pinyin: 'tóngxué', sinoVietnamese: 'Đồng học', meaning: 'bạn học, học sinh', partOfSpeechLabel: 'Danh từ' }
        ],
        comprehensionQuestion: {
          question: 'Từ “大家” (Dàjiā) trong câu “大家好！” có nghĩa là gì?',
          options: [
            { id: 'a', text: 'Nhà to, gia đình lớn', pinyin: 'Dà jiātíng' },
            { id: 'b', text: 'Mọi người, tất cả mọi người', pinyin: 'Měi ge rén / dàjiā' },
            { id: 'c', text: 'Thầy cô giáo', pinyin: 'Lǎoshī' }
          ],
          correctOptionId: 'b',
          explanation: '“大家” là đại từ chỉ chung “tất cả mọi người”, “cả lớp”.'
        }
      },
      {
        id: 'l1-t3',
        title: 'Đoạn 3: Cảm ơn và Tạm biệt',
        situation: 'Cuối buổi học, học sinh cảm ơn cô giáo và chào tạm biệt nhau',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '谢谢，老师！', pinyin: 'Xièxie, lǎoshī!', vietnamese: 'Em cảm ơn cô giáo!' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '不客气。', pinyin: 'Bú kèqi.', vietnamese: 'Không có gì đâu em.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '同学们，再见！', pinyin: 'Tóngxuémen, zàijiàn!', vietnamese: 'Chào tạm biệt các em!' },
          { speaker: '同学们', avatar: '🎓', hanzi: '老师，再见！', pinyin: 'Lǎoshī, zàijiàn!', vietnamese: 'Tạm biệt cô giáo ạ!' }
        ],
        newWords: [
          { id: 8, hanzi: '谢谢', pinyin: 'xièxie', sinoVietnamese: 'Tạ tạ', meaning: 'cảm ơn', partOfSpeechLabel: 'Động từ' },
          { id: 9, hanzi: '不', pinyin: 'bù / bú', sinoVietnamese: 'Bất', meaning: 'không, chẳng (phủ định)', partOfSpeechLabel: 'Phó từ' },
          { id: 10, hanzi: '客气', pinyin: 'kèqi', sinoVietnamese: 'Khách khí', meaning: 'khách sáo, lịch sự', partOfSpeechLabel: 'Tính từ' },
          { id: 11, hanzi: '再见', pinyin: 'zàijiàn', sinoVietnamese: 'Tái kiến', meaning: 'tạm biệt, hẹn gặp lại', partOfSpeechLabel: 'Động từ' }
        ],
        tip: {
          title: 'Biến điệu của chữ “不” (bù)',
          content: 'Chữ “不” đọc thanh 4 (bù), nhưng khi đi trước một âm tiết mang thanh 4 (như “客” kè), “不” phải chuyển sang đọc thanh 2: “bú kèqi”.'
        }
      }
    ],
    grammarPoints: [
      {
        id: 'l1-g1',
        title: 'Lời chào trong tiếng Trung: 你好 / 您好 / 你们好 / 大家好',
        formula: '[Đối tượng / Tên / Chức danh] + 好！',
        explanation: 'Trong tiếng Trung, cấu trúc lời chào thông dụng nhất là đặt đối tượng được chào lên trước chữ “好”.\n• Khi chào một bạn cùng trang lứa: 你好！\n• Khi chào người lớn tuổi, thầy cô, cấp trên (kính cẩn): 您好！\n• Khi chào một nhóm người: 你们好！\n• Khi chào toàn thể mọi người trong phòng/hội trường: 大家好！',
        examples: [
          { id: 'l1-e1', hanzi: '王老师，您好！', pinyin: 'Wáng lǎoshī, nín hǎo!', vietnamese: 'Chào cô giáo Vương ạ!' },
          { id: 'l1-e2', hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', vietnamese: 'Chào mọi người!' },
          { id: 'l1-e3', hanzi: '同学们好！', pinyin: 'Tóngxuémen hǎo!', vietnamese: 'Chào các bạn học sinh!' }
        ],
        commonMistakes: [
          {
            incorrect: '好你！',
            incorrectPinyin: 'Hǎo nǐ!',
            correct: '你好！',
            correctPinyin: 'Nǐ hǎo!',
            reason: 'Tiếng Trung không dịch xuôi theo kiểu "Good you". Luôn phải là [Đối tượng] + 好.'
          }
        ]
      },
      {
        id: 'l1-g2',
        title: 'Lời cảm ơn và đáp lại: 谢谢 & 不客气',
        formula: 'A: 谢谢 / 谢谢你！ ➔ B: 不客气 / 不用谢！',
        explanation: '• “谢谢” (Xièxie) dùng để bày tỏ sự biết ơn.\n• “不客气” (Bú kèqi - Đừng khách sáo) hoặc “不用谢” (Búyòng xiè) là câu đáp lễ lịch sự và chuẩn mực nhất.',
        examples: [
          { id: 'l1-e4', hanzi: '谢谢老师！', pinyin: 'Xièxie lǎoshī!', vietnamese: 'Cảm ơn cô giáo ạ!' },
          { id: 'l1-e5', hanzi: '不客气。', pinyin: 'Bú kèqi.', vietnamese: 'Đừng khách sáo.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l1-fb',
        wordBank: [
          { id: 'A', label: '您好', pinyin: 'nín hǎo', vietnamese: 'Chào ngài/thầy cô' },
          { id: 'B', label: '大家好', pinyin: 'dàjiā hǎo', vietnamese: 'Chào mọi người' },
          { id: 'C', label: '不客气', pinyin: 'bú kèqi', vietnamese: 'Không có gì' },
          { id: 'D', label: '再见', pinyin: 'zàijiàn', vietnamese: 'Tạm biệt' },
          { id: 'E', label: '谢谢', pinyin: 'xièxie', vietnamese: 'Cảm ơn' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '王老师，____！',
            pinyin: 'Wáng lǎoshī, ____!',
            vietnamese: 'Chào cô giáo Vương ạ!',
            correctWordId: 'A',
            explanation: 'Chào cô giáo cần dùng kính ngữ “您好”.'
          },
          {
            id: 's2',
            sentenceWithBlank: 'A: 谢谢你！ B: ____。',
            pinyin: 'A: Xièxie nǐ! B: ____.',
            vietnamese: 'A: Cảm ơn bạn! B: Không có gì.',
            correctWordId: 'C',
            explanation: 'Đáp lại lời cảm ơn là “不客气”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '同学们，____！明天见。',
            pinyin: 'Tóngxuémen, ____! Míngtiān jiàn.',
            vietnamese: 'Các em học sinh, tạm biệt! Hẹn gặp lại ngày mai.',
            correctWordId: 'D',
            explanation: 'Chào tạm biệt dùng “再见”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l1-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '您好', pinyin: 'nín hǎo' },
            { id: 'w2', hanzi: '王老师', pinyin: 'Wáng lǎoshī' }
          ],
          correctOrder: ['w2', 'w1'],
          fullSentence: '王老师，您好！',
          pinyin: 'Wáng lǎoshī, nín hǎo!',
          vietnamese: 'Em chào cô giáo Vương ạ!',
          explanation: 'Đặt danh xưng/chức vụ lên trước câu chào: 王老师 + 您好.'
        }
      ]
    },
    tongueTwister: {
      title: '跟读绕口令: Mẹ trồng gai dầu, tôi chăn ngựa (妈种麻)',
      hanzi: '妈种麻，我放马。马吃麻，妈骂马。',
      pinyin: 'Mā zhòng má, wǒ fàng mǎ. Mǎ chī má, mā mà mǎ.',
      vietnamese: 'Mẹ trồng gai dầu, tôi chăn ngựa. Ngựa ăn cây gai dầu, mẹ mắng ngựa.',
      explanation: 'Bài luyện 4 thanh điệu chuẩn tiếng Trung: mā (thanh 1), má (thanh 2), mǎ (thanh 3), mà (thanh 4).'
    },
    bonusContent: {
      title: 'Hệ thống ngữ âm Pinyin tiếng Trung (汉语拼音)',
      chineseTitle: '汉语拼音',
      category: 'Ngữ âm',
      content: 'Chữ Hán là chữ viết tượng hình biểu ý, không thể nhìn mặt chữ để biết ngay cách đọc. Do đó, hệ thống Bính âm (Pinyin) ra đời bằng các chữ cái Latin để ghi lại cách phát âm chuẩn xác của tiếng Phổ thông Trung Quốc.',
      bulletPoints: [
        'Mỗi âm tiết tiếng Trung gồm 3 phần: Thanh mẫu (phụ âm đầu), Vận mẫu (vần) và Thanh điệu (dấu giọng).',
        'Có 21 thanh mẫu chính và 39 vận mẫu.',
        'Có 4 thanh điệu chính (1 ngang cao, 2 sắc lên, 3 trầm võng, 4 dứt khoát hạ) và 1 thanh nhẹ (khinh thanh).'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Biết chào hỏi theo từng đối tượng', example: '你好 / 您好 / 你们好 / 大家好', vietnamese: 'Chào bạn bè, người lớn, tập thể' },
      { id: 'c2', topic: 'Biết nói cảm ơn và đáp lễ', example: '谢谢 ➔ 不客气', vietnamese: 'Cảm ơn và Không có gì' },
      { id: 'c3', topic: 'Biết nói lời chào tạm biệt', example: '再见！', vietnamese: 'Hẹn gặp lại' }
    ]
  },
  {
    id: 'lesson-2',
    lessonNumber: 2,
    chineseTitle: '我叫李文',
    pinyinTitle: 'Wǒ jiào Lǐ Wén',
    englishTitle: 'My Name is Li Wen',
    title: 'Bài 2: Tôi tên là Lý Văn',
    objectives: [
      'Hỏi và trả lời tên họ của bản thân và người khác (你叫什么名字？ / 我叫...)',
      'Sử dụng thể phủ định với phó từ “不” (我不是...)',
      'Nói lời xin lỗi và đáp lại (对不起 ➔ 没关系 / 没事)',
      'Chào mừng và thể hiện sự hân hạnh khi làm quen (很高兴认识你)'
    ],
    charactersFeatured: ['liwen', 'baijiayue', 'chentianzhong', 'annie'],
    warmUp: {
      instructions: 'Nối các cách diễn đạt khi làm quen với nghĩa tiếng Việt:',
      items: [
        { id: 'w1', labelZh: '叫', pinyin: 'jiào', vietnamese: 'Tên là / Gọi là', icon: '🏷️' },
        { id: 'w2', labelZh: '名字', pinyin: 'míngzi', vietnamese: 'Tên, họ tên', icon: '📝' },
        { id: 'w3', labelZh: '认识', pinyin: 'rènshi', vietnamese: 'Quen biết / Nhận biết', icon: '🤝' },
        { id: 'w4', labelZh: '高兴', pinyin: 'gāoxìng', vietnamese: 'Vui mừng, hạnh phúc', icon: '😃' },
        { id: 'w5', labelZh: '对不起', pinyin: 'duìbuqǐ', vietnamese: 'Xin lỗi', icon: '🙇' },
        { id: 'w6', labelZh: '没关系', pinyin: 'méi guānxi', vietnamese: 'Không sao đâu / Không có gì', icon: '👌' }
      ]
    },
    texts: [
      {
        id: 'l2-t1',
        title: 'Đoạn 1: Hỏi tên trong lớp học',
        situation: 'Bạch Gia Nguyệt lần đầu gặp Trần Thiên Trung và hỏi tên bạn',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', vietnamese: 'Xin hỏi, bạn tên là gì?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', vietnamese: 'Tôi tên là Trần Thiên Trung.' }
        ],
        newWords: [
          { id: 12, hanzi: '请问', pinyin: 'qǐngwèn', sinoVietnamese: 'Thỉnh vấn', meaning: 'xin hỏi (lịch sự)', partOfSpeechLabel: 'Cụm từ' },
          { id: 13, hanzi: '叫', pinyin: 'jiào', sinoVietnamese: 'Khiếu', meaning: 'gọi là, tên là', partOfSpeechLabel: 'Động từ' },
          { id: 14, hanzi: '什么', pinyin: 'shénme', sinoVietnamese: 'Thập ma', meaning: 'cái gì, gì', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 15, hanzi: '名字', pinyin: 'míngzi', sinoVietnamese: 'Danh tự', meaning: 'tên gọi', partOfSpeechLabel: 'Danh từ' },
          { id: 16, hanzi: '我', pinyin: 'wǒ', sinoVietnamese: 'Ngã', meaning: 'tôi, mình (ngôi 1)', partOfSpeechLabel: 'Đại từ' }
        ],
        comprehensionQuestion: {
          question: 'Để hỏi tên một cách lịch sự, người ta thường thêm từ nào ở đầu câu?',
          options: [
            { id: 'a', text: '谢谢 (Xièxie)', pinyin: 'xièxie' },
            { id: 'b', text: '请问 (Qǐngwèn)', pinyin: 'qǐngwèn' },
            { id: 'c', text: '再见 (Zàijiàn)', pinyin: 'zàijiàn' }
          ],
          correctOptionId: 'b',
          explanation: '“请问” (Qǐngwèn - Xin hỏi) dùng trước câu hỏi để tăng tính lịch sự và nhã nhặn.'
        }
      },
      {
        id: 'l2-t2',
        title: 'Đoạn 2: Nhầm lẫn và Xin lỗi',
        situation: 'Trần Thiên Trung nhận nhầm Bạch Gia Nguyệt là Annie',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '你好，安妮！', pinyin: 'Nǐ hǎo, Ānnī!', vietnamese: 'Chào Annie nhé!' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '你好，陈天中！我不是安妮，我是白家月。', pinyin: 'Nǐ hǎo, Chén Tiānzhōng! Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.', vietnamese: 'Chào Trần Thiên Trung! Mình không phải Annie, mình là Bạch Gia Nguyệt.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '对不起！', pinyin: 'Duìbuqǐ!', vietnamese: 'Ôi, xin lỗi bạn!' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '没关系。(没事。)', pinyin: 'Méi guānxi. (Méi shì.)', vietnamese: 'Không sao đâu. (Không có gì đâu.)' }
        ],
        newWords: [
          { id: 17, hanzi: '是', pinyin: 'shì', sinoVietnamese: 'Thị', meaning: 'là, đúng', partOfSpeechLabel: 'Động từ' },
          { id: 18, hanzi: '对不起', pinyin: 'duìbuqǐ', sinoVietnamese: 'Đối bất khởi', meaning: 'xin lỗi', partOfSpeechLabel: 'Cụm từ' },
          { id: 19, hanzi: '没关系', pinyin: 'méi guānxi', sinoVietnamese: 'Một quan hệ', meaning: 'không sao, không hề gì', partOfSpeechLabel: 'Cụm từ' },
          { id: 20, hanzi: '没事', pinyin: 'méi shì', sinoVietnamese: 'Một sự', meaning: 'không sao đâu, chuyện nhỏ', partOfSpeechLabel: 'Cụm từ' }
        ],
        comprehensionQuestion: {
          question: 'Khi ai đó nói “对不起” (Duìbuqǐ), câu đáp lại tự nhiên nhất là gì?',
          options: [
            { id: 'a', text: '不客气 (Bú kèqi)', pinyin: 'bú kèqi' },
            { id: 'b', text: '没关系 / 没事 (Méi guānxi / Méi shì)', pinyin: 'méi guānxi' },
            { id: 'c', text: '再见 (Zàijiàn)', pinyin: 'zàijiàn' }
          ],
          correctOptionId: 'b',
          explanation: 'Đáp lại “对不起” (Xin lỗi) là “没关系” hoặc “没事” (Không sao).'
        }
      },
      {
        id: 'l2-t3',
        title: 'Đoạn 3: Rất vui được làm quen với bạn',
        situation: 'Lý Văn và Bạch Gia Nguyệt gặp nhau và bày tỏ sự hân hạnh',
        sceneType: 'overseas',
        lines: [
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '你好！我叫李文。', pinyin: 'Nǐ hǎo! Wǒ jiào Lǐ Wén.', vietnamese: 'Chào bạn! Tôi tên là Lý Văn.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '你好！我叫白家月。', pinyin: 'Nǐ hǎo! Wǒ jiào Bái Jiāyuè.', vietnamese: 'Chào bạn! Tôi tên là Bạch Gia Nguyệt.' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', vietnamese: 'Rất vui được quen biết bạn.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', vietnamese: 'Quen biết bạn tôi cũng rất vui.' }
        ],
        newWords: [
          { id: 21, hanzi: '很', pinyin: 'hěn', sinoVietnamese: 'Khẩn', meaning: 'rất, quá', partOfSpeechLabel: 'Phó từ' },
          { id: 22, hanzi: '高兴', pinyin: 'gāoxìng', sinoVietnamese: 'Cao hứng', meaning: 'vui mừng, phấn khởi', partOfSpeechLabel: 'Tính từ' },
          { id: 23, hanzi: '认识', pinyin: 'rènshi', sinoVietnamese: 'Nhận thức', meaning: 'quen biết, nhận ra', partOfSpeechLabel: 'Động từ' },
          { id: 24, hanzi: '也', pinyin: 'yě', sinoVietnamese: 'Dã', meaning: 'cũng', partOfSpeechLabel: 'Phó từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l2-g1',
        title: 'Trật tự từ cơ bản trong tiếng Trung (S + V + O)',
        formula: 'Chủ ngữ (S) + Vị ngữ (V) + Tân ngữ (O)',
        explanation: 'Trật tự câu trần thuật cơ bản của tiếng Trung tương đồng với tiếng Việt:\n• Chủ ngữ (我) + Động từ (叫) + Tân ngữ (李文) ➔ 我叫李文。\n• Chủ ngữ (我) + Động từ (是) + Tân ngữ (白家月) ➔ 我是白家月。',
        examples: [
          { id: 'l2-e1', hanzi: '我叫李文。', pinyin: 'Wǒ jiào Lǐ Wén.', vietnamese: 'Tôi tên là Lý Văn.' },
          { id: 'l2-e2', hanzi: '我认识他。', pinyin: 'Wǒ rènshi tā.', vietnamese: 'Tôi quen biết anh ấy.' }
        ]
      },
      {
        id: 'l2-g2',
        title: 'Đại từ nghi vấn “什么” (Cái gì)',
        formula: 'Chủ ngữ + Động từ + 什么 (+ Danh từ)？',
        explanation: '“什么” dùng để hỏi về sự vật, sự việc, tên gọi. Chú ý trong tiếng Trung từ nghi vấn đứng ngay tại vị trí thông tin cần hỏi, không đảo lên đầu câu như tiếng Anh.',
        examples: [
          { id: 'l2-e3', hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', vietnamese: 'Bạn tên là gì?' },
          { id: 'l2-e4', hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', vietnamese: 'Đây là cái gì?' }
        ],
        commonMistakes: [
          {
            incorrect: '什么你叫名字？',
            incorrectPinyin: 'Shénme nǐ jiào míngzi?',
            correct: '你叫什么名字？',
            correctPinyin: 'Nǐ jiào shénme míngzi?',
            reason: 'Không đảo “什么” lên đầu câu theo ngữ pháp tiếng Anh. Tiếng Trung giữ nguyên vị trí tân ngữ: [叫] + [什么名字].'
          }
        ]
      },
      {
        id: 'l2-g3',
        title: 'Phó từ “也” (Cũng)',
        formula: 'Chủ ngữ + 也 + Động từ / Tính từ',
        explanation: '“也” là phó từ mang nghĩa "cũng", luôn đứng TRƯỚC động từ hoặc tính từ, KHÔNG đứng cuối câu như chữ "too" trong tiếng Anh hay chữ "cũng" đứng một mình.',
        examples: [
          { id: 'l2-e5', hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', vietnamese: 'Quen biết bạn tôi cũng rất vui.' },
          { id: 'l2-e6', hanzi: '我也叫李文。', pinyin: 'Wǒ yě jiào Lǐ Wén.', vietnamese: 'Tôi cũng tên là Lý Văn.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l2-fb',
        wordBank: [
          { id: 'A', label: '什么', pinyin: 'shénme', vietnamese: 'Gì / Cái gì' },
          { id: 'B', label: '也', pinyin: 'yě', vietnamese: 'Cũng' },
          { id: 'C', label: '不是', pinyin: 'bú shì', vietnamese: 'Không phải là' },
          { id: 'D', label: '认识', pinyin: 'rènshi', vietnamese: 'Quen biết' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '请问，你叫____名字？',
            pinyin: 'Qǐngwèn, nǐ jiào ____ míngzi?',
            vietnamese: 'Xin hỏi, bạn tên là gì?',
            correctWordId: 'A',
            explanation: 'Hỏi tên dùng cụm “什么名字”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '我____安妮，我是白家月。',
            pinyin: 'Wǒ ____ Ānnī, wǒ shì Bái Jiāyuè.',
            vietnamese: 'Tôi không phải Annie, tôi là Bạch Gia Nguyệt.',
            correctWordId: 'C',
            explanation: 'Phủ định danh tính dùng “不是”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '很高兴____你！',
            pinyin: 'Hěn gāoxìng ____ nǐ!',
            vietnamese: 'Rất vui được quen biết bạn!',
            correctWordId: 'D',
            explanation: 'Cụm từ chuẩn “很高兴认识你”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l2-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '名字', pinyin: 'míngzi' },
            { id: 'w2', hanzi: '你', pinyin: 'nǐ' },
            { id: 'w3', hanzi: '叫', pinyin: 'jiào' },
            { id: 'w4', hanzi: '什么', pinyin: 'shénme' }
          ],
          correctOrder: ['w2', 'w3', 'w4', 'w1'],
          fullSentence: '你叫什么名字？',
          pinyin: 'Nǐ jiào shénme míngzi?',
          vietnamese: 'Bạn tên là gì?',
          explanation: 'Cấu trúc S + V + O: 你 (S) + 叫 (V) + 什么名字 (O).'
        }
      ]
    },
    tongueTwister: {
      title: '跟读绕口令: Bảy cộng một (七加一)',
      hanzi: '七加一，再减一，加完减完等于几？加完减完还是七。',
      pinyin: 'Qī jiā yī, zài jiǎn yī, jiā wán jiǎn wán děngyú jǐ? Jiā wán jiǎn wán háishì qī.',
      vietnamese: 'Bảy cộng một, lại trừ một, cộng xong trừ xong bằng mấy? Cộng xong trừ xong vẫn là bảy.',
      explanation: 'Luyện tập phát âm chuẩn âm đầu “q” (bật hơi) và thanh điệu các số đếm.'
    },
    bonusContent: {
      title: 'Tên tiếng Trung của các quốc gia trên thế giới',
      chineseTitle: '世界各国的中文名称',
      category: 'Văn hóa & Từ vựng',
      content: 'Người Trung Quốc thường dịch tên các quốc gia theo phiên âm ngữ âm hoặc ghép với chữ 国 (guó - quốc gia).',
      bulletPoints: [
        '中国 (Zhōngguó): Trung Quốc',
        '越南 (Yuènán): Việt Nam',
        '法国 (Fǎguó): Nước Pháp',
        '泰国 (Tàiguó): Nước Thái Lan',
        '加拿大 (Jiānádà): Nước Canada',
        '美国 (Měiguó): Nước Mỹ'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Hỏi và trả lời tên đầy đủ', example: '你叫什么名字？➔ 我叫李文。', vietnamese: 'Hỏi tên và xưng tên' },
      { id: 'c2', topic: 'Nói câu phủ định với 不是', example: '我不是安妮。', vietnamese: 'Tôi không phải là...' },
      { id: 'c3', topic: 'Nói câu xã giao khi làm quen', example: '很高兴认识你！➔ 认识你我也很高兴！', vietnamese: 'Rất vui được quen bạn' }
    ]
  },
  {
    id: 'lesson-3',
    lessonNumber: 3,
    chineseTitle: '我是中国人',
    pinyinTitle: 'Wǒ shì Zhōngguó rén',
    englishTitle: "I'm Chinese",
    title: 'Bài 3: Tôi là người Trung Quốc',
    objectives: [
      'Nói về quốc tịch và giới thiệu nguồn gốc quê quán (我是中国人 / 法国人 / 泰国人)',
      'Hỏi ai đó là người nước nào (你女朋友是哪国人？)',
      'Sử dụng câu chữ “是” (Câu phán đoán khẳng định & phủ định)',
      'Sử dụng trợ từ kết cấu “的” biểu thị sở hữu (我的老师 / 我女朋友)',
      'Đặt câu hỏi Có - Không với trợ từ nghi vấn “吗”'
    ],
    charactersFeatured: ['wangyifei', 'baijiayue', 'chentianzhong', 'wangyixue'],
    warmUp: {
      instructions: 'Nối các quốc gia và quốc tịch với cờ và nghĩa tiếng Việt:',
      items: [
        { id: 'w1', labelZh: '中国人', pinyin: 'Zhōngguó rén', vietnamese: 'Người Trung Quốc', icon: '🇨🇳' },
        { id: 'w2', labelZh: '法国人', pinyin: 'Fǎguó rén', vietnamese: 'Người Pháp', icon: '🇫🇷' },
        { id: 'w3', labelZh: '泰国人', pinyin: 'Tàiguó rén', vietnamese: 'Người Thái Lan', icon: '🇹🇭' },
        { id: 'w4', labelZh: '哪国人', pinyin: 'nǎ guó rén', vietnamese: 'Người nước nào', icon: '🌍' },
        { id: 'w5', labelZh: '谁', pinyin: 'shéi / shuí', vietnamese: 'Ai (đại từ hỏi người)', icon: '👤' },
        { id: 'w6', labelZh: '工作', pinyin: 'gōngzuò', vietnamese: 'Công việc / Làm việc', icon: '💼' }
      ]
    },
    texts: [
      {
        id: 'l3-t1',
        title: 'Đoạn 1: Giới thiệu quốc tịch',
        situation: 'Cô giáo Vương và Bạch Gia Nguyệt nói về quốc tịch của mình',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', vietnamese: 'Tôi là người Trung Quốc.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我是法国人。我的中文老师也是中国人。', pinyin: 'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.', vietnamese: 'Tôi là người Pháp. Cô giáo tiếng Trung của tôi cũng là người Trung Quốc.' }
        ],
        newWords: [
          { id: 25, hanzi: '国', pinyin: 'guó', sinoVietnamese: 'Quốc', meaning: 'đất nước, quốc gia', partOfSpeechLabel: 'Danh từ' },
          { id: 26, hanzi: '人', pinyin: 'rén', sinoVietnamese: 'Nhân', meaning: 'người', partOfSpeechLabel: 'Danh từ' },
          { id: 27, hanzi: '的', pinyin: 'de', sinoVietnamese: 'Đích', meaning: 'của (trợ từ kết cấu biểu thị quan hệ sở hữu/định ngữ)', partOfSpeechLabel: 'Trợ từ' },
          { id: 28, hanzi: '中文', pinyin: 'Zhōngwén', sinoVietnamese: 'Trung văn', meaning: 'tiếng Trung, Trung văn', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l3-t2',
        title: 'Đoạn 2: Đây là ai? Bạn gái bạn là người nước nào?',
        situation: 'Bạch Gia Nguyệt xem ảnh của Trần Thiên Trung và hỏi về bạn gái cậu ấy',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '这是谁？', pinyin: 'Zhè shì shéi?', vietnamese: 'Đây là ai thế?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', vietnamese: 'Đây là bạn gái của tôi.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', vietnamese: 'Bạn gái bạn là người nước nào?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '她也是泰国人。', pinyin: 'Tā yě shì Tàiguó rén.', vietnamese: 'Cô ấy cũng là người Thái Lan.' }
        ],
        newWords: [
          { id: 29, hanzi: '这', pinyin: 'zhè', sinoVietnamese: 'Giá', meaning: 'đây, này', partOfSpeechLabel: 'Đại từ chỉ thị' },
          { id: 30, hanzi: '谁', pinyin: 'shéi / shuí', sinoVietnamese: 'Thùy', meaning: 'ai', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 31, hanzi: '女朋友', pinyin: 'nǚpéngyou', sinoVietnamese: 'Nữ bằng hữu', meaning: 'bạn gái', partOfSpeechLabel: 'Danh từ' },
          { id: 32, hanzi: '哪', pinyin: 'nǎ / něi', sinoVietnamese: 'Nả', meaning: 'nào, cái nào', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 33, hanzi: '她', pinyin: 'tā', sinoVietnamese: 'Tha', meaning: 'cô ấy, bà ấy, chị ấy (nữ)', partOfSpeechLabel: 'Đại từ' }
        ],
        comprehensionQuestion: {
          question: 'Bạn gái của Trần Thiên Trung là người nước nào?',
          options: [
            { id: 'a', text: '中国人 (Người Trung Quốc)', pinyin: 'Zhōngguó rén' },
            { id: 'b', text: '法国人 (Người Pháp)', pinyin: 'Fǎguó rén' },
            { id: 'c', text: '泰国人 (Người Thái Lan)', pinyin: 'Tàiguó rén' }
          ],
          correctOptionId: 'c',
          explanation: 'Trần Thiên Trung trả lời: “她也是泰国人。” (Cô ấy cũng là người Thái Lan giống tôi).'
        }
      },
      {
        id: 'l3-t3',
        title: 'Đoạn 3: Gọi điện thoại hỏi thăm người thân',
        situation: 'Vương Nhất Tuyết ở Bắc Kinh gọi điện cho cô em họ Vương Nhất Phi đang ở nước ngoài',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '喂，一飞！', pinyin: 'Wèi, Yīfēi!', vietnamese: 'Alo, Nhất Phi à!' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '姐姐！', pinyin: 'Jiějie!', vietnamese: 'Chị ơi!' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', vietnamese: 'Công việc của em dạo này còn bận không?' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '对，还很忙。你也还忙吗？', pinyin: 'Duì, hái hěn máng. Nǐ yě hái máng ma?', vietnamese: 'Vâng ạ, vẫn còn bận lắm. Chị cũng còn bận không ạ?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我不太忙。我们很想你。', pinyin: 'Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.', vietnamese: 'Chị không bận lắm. Mọi người ở nhà nhớ em lắm.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我也想你们。', pinyin: 'Wǒ yě xiǎng nǐmen.', vietnamese: 'Em cũng nhớ mọi người nhiều lắm ạ.' }
        ],
        newWords: [
          { id: 34, hanzi: '喂', pinyin: 'wèi', sinoVietnamese: 'Ủy', meaning: 'alo (khi nghe máy)', partOfSpeechLabel: 'Thán từ' },
          { id: 35, hanzi: '姐姐', pinyin: 'jiějie', sinoVietnamese: 'Tỷ tỷ', meaning: 'chị gái', partOfSpeechLabel: 'Danh từ' },
          { id: 36, hanzi: '忙', pinyin: 'máng', sinoVietnamese: 'Mang', meaning: 'bận rộn', partOfSpeechLabel: 'Tính từ' },
          { id: 37, hanzi: '吗', pinyin: 'ma', sinoVietnamese: 'Ma', meaning: 'không, chăng (trợ từ nghi vấn cuối câu hỏi Có/Không)', partOfSpeechLabel: 'Trợ từ ngữ khí' },
          { id: 38, hanzi: '还', pinyin: 'hái', sinoVietnamese: 'Hoàn', meaning: 'còn, vẫn còn', partOfSpeechLabel: 'Phó từ' },
          { id: 39, hanzi: '想', pinyin: 'xiǎng', sinoVietnamese: 'Tưởng', meaning: 'nhớ, muốn, nghĩ', partOfSpeechLabel: 'Động từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l3-g1',
        title: 'Câu chữ “是” (Shì - Phán đoán / Định danh)',
        formula: 'Khẳng định: S + 是 + O | Phủ định: S + 不是 + O',
        explanation: 'Dùng để chỉ ra ai/cái gì là ai/cái gì (tương tự động từ to be trong tiếng Anh).\n• Phủ định bằng cách thêm “不” trước “是” ➔ “不是” (bú shì).',
        examples: [
          { id: 'l3-e1', hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', vietnamese: 'Tôi là người Trung Quốc.' },
          { id: 'l3-e2', hanzi: '我不是法国人。', pinyin: 'Wǒ bú shì Fǎguó rén.', vietnamese: 'Tôi không phải người Pháp.' }
        ]
      },
      {
        id: 'l3-g2',
        title: 'Trợ từ kết cấu “的” (de - Biểu thị sở hữu / quan hệ hạn định)',
        formula: 'Người sở hữu + 的 + Danh từ trung tâm ngữ',
        explanation: '“的” nối giữa định ngữ (từ bổ nghĩa) và danh từ trung tâm. Khi danh từ trung tâm chỉ người thân, bạn bè thân thiết, có thể lược bỏ “的” (ví dụ: 我女朋友, 我姐姐).',
        examples: [
          { id: 'l3-e3', hanzi: '我的中文老师。', pinyin: 'Wǒ de Zhōngwén lǎoshī.', vietnamese: 'Giáo viên tiếng Trung của tôi.' },
          { id: 'l3-e4', hanzi: '这是我（的）女朋友。', pinyin: 'Zhè shì wǒ (de) nǚpéngyou.', vietnamese: 'Đây là bạn gái của tôi.' }
        ]
      },
      {
        id: 'l3-g3',
        title: 'Câu hỏi Có - Không với trợ từ “吗” (ma)',
        formula: 'Câu trần thuật + 吗？',
        explanation: 'Thêm “吗” vào cuối câu trần thuật để biến câu đó thành câu hỏi Có/Không mà không cần thay đổi trật tự từ nào trong câu.',
        examples: [
          { id: 'l3-e5', hanzi: '你工作忙吗？', pinyin: 'Nǐ gōngzuò máng ma?', vietnamese: 'Công việc của bạn bận không?' },
          { id: 'l3-e6', hanzi: '你是中国人吗？', pinyin: 'Nǐ shì Zhōngguó rén ma?', vietnamese: 'Bạn là người Trung Quốc phải không?' }
        ],
        commonMistakes: [
          {
            incorrect: '你是哪国人吗？',
            incorrectPinyin: 'Nǐ shì nǎ guó rén ma?',
            correct: '你是哪国人？',
            correctPinyin: 'Nǐ shì nǎ guó rén?',
            reason: 'Khi câu đã có đại từ nghi vấn (như 哪, 谁, 什么) thì TUYỆT ĐỐI KHÔNG dùng thêm “吗” ở cuối câu.'
          }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l3-fb',
        wordBank: [
          { id: 'A', label: '吗', pinyin: 'ma', vietnamese: 'Không (hỏi)' },
          { id: 'B', label: '哪', pinyin: 'nǎ', vietnamese: 'Nào' },
          { id: 'C', label: '谁', pinyin: 'shéi', vietnamese: 'Ai' },
          { id: 'D', label: '的', pinyin: 'de', vietnamese: 'Của' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '这是____？这是我中文老师。',
            pinyin: 'Zhè shì ____? Zhè shì wǒ Zhōngwén lǎoshī.',
            vietnamese: 'Đây là ai? Đây là giáo viên tiếng Trung của tôi.',
            correctWordId: 'C',
            explanation: 'Hỏi người dùng đại từ “谁”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '你女朋友是____国人？',
            pinyin: 'Nǐ nǚpéngyou shì ____ guó rén?',
            vietnamese: 'Bạn gái bạn là người nước nào?',
            correctWordId: 'B',
            explanation: 'Hỏi người nước nào dùng “哪国人”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '你工作还忙____？',
            pinyin: 'Nǐ gōngzuò hái máng ____?',
            vietnamese: 'Công việc của bạn còn bận không?',
            correctWordId: 'A',
            explanation: 'Câu hỏi Có-Không kết thúc bằng “吗”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l3-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '中国人', pinyin: 'Zhōngguó rén' },
            { id: 'w2', hanzi: '是', pinyin: 'shì' },
            { id: 'w3', hanzi: '老师', pinyin: 'lǎoshī' },
            { id: 'w4', hanzi: '我的', pinyin: 'wǒ de' }
          ],
          correctOrder: ['w4', 'w3', 'w2', 'w1'],
          fullSentence: '我的老师是中国人。',
          pinyin: 'Wǒ de lǎoshī shì Zhōngguó rén.',
          vietnamese: 'Giáo viên của tôi là người Trung Quốc.',
          explanation: 'Chủ ngữ [我的老师] + 是 + Tân ngữ [中国人].'
        }
      ]
    },
    tongueTwister: {
      title: '跟读绕口令: Bốn là bốn, mười là mười (四是四，十是十)',
      hanzi: '四是四，十是十，十四是十四，四十是四十。',
      pinyin: 'Sì shì sì, shí shì shí, shísì shì shísì, sìshí shì sìshí.',
      vietnamese: 'Bốn là bốn, mười là mười, mười bốn là mười bốn, bốn mươi là bốn mươi.',
      explanation: 'Luyện phân biệt âm đầu s (âm đầu lưỡi trước) và sh (âm uốn lưỡi quặt).'
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Hỏi và nói về quốc tịch', example: '我是中国人。/ 你是哪国人？', vietnamese: 'Hỏi và nói quốc tịch' },
      { id: 'c2', topic: 'Dùng cấu trúc chữ 是 và 不是', example: '这是谁？/ 这不是我老师。', vietnamese: 'Câu khẳng định và phủ định với 是' },
      { id: 'c3', topic: 'Dùng trợ từ 的 và 吗', example: '我的老师 / 你忙吗？', vietnamese: 'Sở hữu và câu hỏi 吗' }
    ]
  },
  {
    id: 'lesson-4',
    lessonNumber: 4,
    chineseTitle: '我有两个孩子',
    pinyinTitle: 'Wǒ yǒu liǎng ge háizi',
    englishTitle: 'I Have Two Children',
    title: 'Bài 4: Tôi có hai đứa con',
    objectives: [
      'Nói về số lượng thành viên trong gia đình và sở hữu (我有两个孩子 / 我没有哥哥)',
      'Hỏi về số lượng với 几 (dưới 10) và 多少 (trên 10 hoặc bất kỳ)',
      'Sử dụng số đếm 0 - 99 và phân biệt cách dùng “二” (èr) vs “两” (liǎng)',
      'Nắm vững lượng từ tiếng Trung: [Số từ + Lượng từ + Danh từ] (如: 两个学生, 四口人)',
      'Hỏi tuổi: 几岁 (trẻ nhỏ dưới 10 tuổi) vs 多大 (người lớn)'
    ],
    charactersFeatured: ['wangyifei', 'baijiayue', 'liuming', 'liuxiaoxue', 'liuxiaoming'],
    warmUp: {
      instructions: 'Nối các từ chỉ thành viên gia đình và số lượng với hình minh họa:',
      items: [
        { id: 'w1', labelZh: '哥哥', pinyin: 'gēge', vietnamese: 'Anh trai', icon: '👦' },
        { id: 'w2', labelZh: '妈妈', pinyin: 'māma', vietnamese: 'Mẹ', icon: '👩' },
        { id: 'w3', labelZh: '儿子', pinyin: 'érzi', vietnamese: 'Con trai', icon: '🧒' },
        { id: 'w4', labelZh: '女儿', pinyin: 'nǚ\'ér', vietnamese: 'Con gái', icon: '👧' },
        { id: 'w5', labelZh: '学生', pinyin: 'xuésheng', vietnamese: 'Học sinh, sinh viên', icon: '🎒' },
        { id: 'w6', labelZh: '六十岁', pinyin: 'liùshí suì', vietnamese: '60 tuổi', icon: '👴' }
      ]
    },
    texts: [
      {
        id: 'l4-t1',
        title: 'Đoạn 1: Cô giáo Vương có bao nhiêu học sinh?',
        situation: 'Học sinh hỏi thăm về quy mô lớp học của cô giáo Vương',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '一飞忙吗？', pinyin: 'Yīfēi máng ma?', vietnamese: 'Nhất Phi có bận không?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '她很忙。', pinyin: 'Tā hěn máng.', vietnamese: 'Cô ấy rất bận.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '她有多少个学生？', pinyin: 'Tā yǒu duōshao ge xuésheng?', vietnamese: 'Cô ấy có bao nhiêu học sinh?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '她有二十个学生。', pinyin: 'Tā yǒu èrshí ge xuésheng.', vietnamese: 'Cô ấy có 20 học sinh.' }
        ],
        newWords: [
          { id: 40, hanzi: '有', pinyin: 'yǒu', sinoVietnamese: 'Hữu', meaning: 'có', partOfSpeechLabel: 'Động từ' },
          { id: 41, hanzi: '多少', pinyin: 'duōshao', sinoVietnamese: 'Đa thiểu', meaning: 'bao nhiêu', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 42, hanzi: '个', pinyin: 'ge', sinoVietnamese: 'Cá', meaning: 'cái, con, người (lượng từ đa dụng nhất)', partOfSpeechLabel: 'Lượng từ' },
          { id: 43, hanzi: '二十', pinyin: 'èrshí', sinoVietnamese: 'Nhị thập', meaning: 'hai mươi (20)', partOfSpeechLabel: 'Số từ' }
        ]
      },
      {
        id: 'l4-t2',
        title: 'Đoạn 2: Nhà bạn có mấy người?',
        situation: 'Trần Thiên Trung và Bạch Gia Nguyệt nói về các anh chị em trong nhà',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '我有两个哥哥，你呢？', pinyin: 'Wǒ yǒu liǎng ge gēge, nǐ ne?', vietnamese: 'Tôi có hai anh trai, còn bạn thì sao?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我没有哥哥。', pinyin: 'Wǒ méiyǒu gēge.', vietnamese: 'Tôi không có anh trai.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vietnamese: 'Nhà bạn có mấy người?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我家有四口人，爸爸、妈妈、妹妹和我。', pinyin: 'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.', vietnamese: 'Nhà tôi có 4 người: bố, mẹ, em gái và tôi.' }
        ],
        newWords: [
          { id: 44, hanzi: '两', pinyin: 'liǎng', sinoVietnamese: 'Lưỡng', meaning: 'hai (dùng trước lượng từ)', partOfSpeechLabel: 'Số từ' },
          { id: 45, hanzi: '哥哥', pinyin: 'gēge', sinoVietnamese: 'Ca ca', meaning: 'anh trai', partOfSpeechLabel: 'Danh từ' },
          { id: 46, hanzi: '呢', pinyin: 'ne', sinoVietnamese: 'Ni', meaning: 'thì sao, còn... (trợ từ tình thái câu hỏi rút gọn)', partOfSpeechLabel: 'Trợ từ' },
          { id: 47, hanzi: '没有', pinyin: 'méiyǒu', sinoVietnamese: 'Một hữu', meaning: 'không có (phủ định của 有)', partOfSpeechLabel: 'Động từ' },
          { id: 48, hanzi: '家', pinyin: 'jiā', sinoVietnamese: 'Gia', meaning: 'nhà, gia đình', partOfSpeechLabel: 'Danh từ' },
          { id: 49, hanzi: '几', pinyin: 'jǐ', sinoVietnamese: 'Kỷ', meaning: 'mấy (thường dưới 10)', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 50, hanzi: '口', pinyin: 'kǒu', sinoVietnamese: 'Khẩu', meaning: 'người (lượng từ thành viên gia đình)', partOfSpeechLabel: 'Lượng từ' },
          { id: 51, hanzi: '爸爸', pinyin: 'bàba', sinoVietnamese: 'Ba ba', meaning: 'bố, ba', partOfSpeechLabel: 'Danh từ' },
          { id: 52, hanzi: '妈妈', pinyin: 'māma', sinoVietnamese: 'Ma ma', meaning: 'mẹ, má', partOfSpeechLabel: 'Danh từ' },
          { id: 53, hanzi: '妹妹', pinyin: 'mèimei', sinoVietnamese: 'Muội muội', meaning: 'em gái', partOfSpeechLabel: 'Danh từ' },
          { id: 54, hanzi: '和', pinyin: 'hé', sinoVietnamese: 'Hòa', meaning: 'và, cùng', partOfSpeechLabel: 'Liên từ' }
        ]
      },
      {
        id: 'l4-t3',
        title: 'Đoạn 3: Con bạn mấy tuổi rồi?',
        situation: 'Hỏi thăm con trai và con gái của bác sĩ Lưu Minh',
        sceneType: 'domestic',
        lines: [
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '这是您儿子吗？', pinyin: 'Zhè shì nín érzi ma?', vietnamese: 'Đây là con trai anh phải không?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '是的。我有两个孩子，一个儿子，一个女儿。', pinyin: 'Shì de. Wǒ yǒu liǎng ge háizi, yí ge érzi, yí ge nǚ\'ér.', vietnamese: 'Đúng vậy. Tôi có 2 đứa con, một trai một gái.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '您儿子几岁？', pinyin: 'Nín érzi jǐ suì?', vietnamese: 'Con trai anh mấy tuổi rồi?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '他今年五岁。', pinyin: 'Tā jīnnián wǔ suì.', vietnamese: 'Cháu năm nay 5 tuổi.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '您女儿多大？', pinyin: 'Nín nǚ\'ér duō dà?', vietnamese: 'Con gái anh bao nhiêu tuổi rồi?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '她今年十二。', pinyin: 'Tā jīnnián shí\'èr.', vietnamese: 'Cháu năm nay 12 tuổi.' }
        ],
        newWords: [
          { id: 55, hanzi: '儿子', pinyin: 'érzi', sinoVietnamese: 'Nhi tử', meaning: 'con trai', partOfSpeechLabel: 'Danh từ' },
          { id: 56, hanzi: '孩子', pinyin: 'háizi', sinoVietnamese: 'Hài tử', meaning: 'đứa con, trẻ con', partOfSpeechLabel: 'Danh từ' },
          { id: 57, hanzi: '女儿', pinyin: 'nǚ\'ér', sinoVietnamese: 'Nữ nhi', meaning: 'con gái', partOfSpeechLabel: 'Danh từ' },
          { id: 58, hanzi: '岁', pinyin: 'suì', sinoVietnamese: 'Tuế', meaning: 'tuổi', partOfSpeechLabel: 'Lượng từ' },
          { id: 59, hanzi: '今年', pinyin: 'jīnnián', sinoVietnamese: 'Kim niên', meaning: 'năm nay', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 60, hanzi: '多大', pinyin: 'duō dà', sinoVietnamese: 'Đa đại', meaning: 'bao nhiêu tuổi (hỏi chung)', partOfSpeechLabel: 'Cụm từ' }
        ],
        tip: {
          title: 'Cách hỏi tuổi trong tiếng Trung (几岁 vs 多大)',
          content: '• “几岁” (jǐ suì): Thường dùng hỏi trẻ em dưới 10 tuổi (ví dụ: 您儿子几岁？).\n• “多大” (duō dà): Dùng hỏi người trạc tuổi hoặc thanh niên, người lớn (ví dụ: 您女儿多大？).'
        }
      }
    ],
    grammarPoints: [
      {
        id: 'l4-g1',
        title: 'Câu chữ “有” (Biểu thị sự sở hữu & tồn tại)',
        formula: 'Khẳng định: S + 有 + Số lượng + Danh từ | Phủ định: S + 没有 + Danh từ',
        explanation: '• Phủ định của “有” BẮT BUỘC là “没有” (méiyǒu). Tuyệt đối KHÔNG ĐƯỢC nói “不有”.',
        examples: [
          { id: 'l4-e1', hanzi: '我有两个孩子。', pinyin: 'Wǒ yǒu liǎng ge háizi.', vietnamese: 'Tôi có hai đứa con.' },
          { id: 'l4-e2', hanzi: '我没有哥哥。', pinyin: 'Wǒ méiyǒu gēge.', vietnamese: 'Tôi không có anh trai.' }
        ],
        commonMistakes: [
          {
            incorrect: '我不有哥哥。',
            incorrectPinyin: 'Wǒ bù yǒu gēge.',
            correct: '我没有哥哥。',
            correctPinyin: 'Wǒ méiyǒu gēge.',
            reason: 'Phủ định của động từ “有” luôn là “没有”, không dùng “不”.'
          }
        ]
      },
      {
        id: 'l4-g2',
        title: 'Phân biệt “二” (èr) và “两” (liǎng)',
        formula: 'Đếm số thứ tự / toán học ➔ 二 (èr) | Đứng trước lượng từ đếm số lượng ➔ 两 (liǎng)',
        explanation: '• Dùng “二” khi: Đọc số đếm (一, 二, 三), số phòng, số điện thoại, số thứ tự, số thập phân, hàng chục (二十).\n• Dùng “两” khi: Đứng ngay trước LƯỢNG TỪ để chỉ số lượng 2 cái/người (ví dụ: 两个人, 两个孩子, 两本中文书).',
        examples: [
          { id: 'l4-e3', hanzi: '我有两个哥哥。', pinyin: 'Wǒ yǒu liǎng ge gēge.', vietnamese: 'Tôi có 2 người anh trai (trước lượng từ 个 dùng 两).' },
          { id: 'l4-e4', hanzi: '她今年十二岁。', pinyin: 'Tā jīnnián shí\'èr suì.', vietnamese: 'Em ấy năm nay 12 tuổi (trong số 12 dùng 二).' }
        ]
      },
      {
        id: 'l4-g3',
        title: 'Cấu trúc Lượng từ trong tiếng Trung: [Số từ + Lượng từ + Danh từ]',
        formula: 'Số từ + Lượng từ + Danh từ',
        explanation: 'Trong tiếng Trung, khi số từ đứng trước danh từ đếm được, BẮT BUỘC phải có LƯỢNG TỪ ở giữa.\n• “个” (ge): Lượng từ chung đa năng nhất (hai cái bánh, hai người bạn).\n• “口” (kǒu): Lượng từ chuyên dùng cho số nhân khẩu trong gia đình.',
        examples: [
          { id: 'l4-e5', hanzi: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', vietnamese: 'Nhà tôi có 4 người.' },
          { id: 'l4-e6', hanzi: '二十个学生。', pinyin: 'Èrshí ge xuésheng.', vietnamese: 'Hai mươi bạn học sinh.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l4-fb',
        wordBank: [
          { id: 'A', label: '两', pinyin: 'liǎng', vietnamese: 'Hai (trước lượng từ)' },
          { id: 'B', label: '几', pinyin: 'jǐ', vietnamese: 'Mấy' },
          { id: 'C', label: '没有', pinyin: 'méiyǒu', vietnamese: 'Không có' },
          { id: 'D', label: '口', pinyin: 'kǒu', vietnamese: 'Miệng / Người (lượng từ)' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '我____个孩子，一个儿子一个女儿。',
            pinyin: 'Wǒ ____ ge háizi, yí ge érzi yí ge nǚ\'ér.',
            vietnamese: 'Tôi có hai đứa con, một con trai một con gái.',
            correctWordId: 'A',
            explanation: 'Trước lượng từ “个” biểu thị số lượng phải dùng “两”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '你家有几____人？',
            pinyin: 'Nǐ jiā yǒu jǐ ____ rén?',
            vietnamese: 'Nhà bạn có mấy người?',
            correctWordId: 'D',
            explanation: 'Lượng từ đếm số người trong gia đình là “口”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '我____哥哥，我只有一个妹妹。',
            pinyin: 'Wǒ ____ gēge, wǒ zhǐ yǒu yí ge mèimei.',
            vietnamese: 'Tôi không có anh trai, tôi chỉ có một em gái.',
            correctWordId: 'C',
            explanation: 'Phủ định của 有 là “没有”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l4-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '口人', pinyin: 'kǒu rén' },
            { id: 'w2', hanzi: '有', pinyin: 'yǒu' },
            { id: 'w3', hanzi: '我家', pinyin: 'wǒ jiā' },
            { id: 'w4', hanzi: '四', pinyin: 'sì' }
          ],
          correctOrder: ['w3', 'w2', 'w4', 'w1'],
          fullSentence: '我家有四口人。',
          pinyin: 'Wǒ jiā yǒu sì kǒu rén.',
          vietnamese: 'Nhà tôi có bốn người.',
          explanation: 'Chủ ngữ [我家] + Động từ [有] + Số lượng [四口人].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Diễn đạt sở hữu với 有 và 没有', example: '我有两个孩子。/ 我没有哥哥。', vietnamese: 'Tôi có... / Tôi không có...' },
      { id: 'c2', topic: 'Phân biệt 二 và 两', example: '十二岁 / 两个人', vietnamese: 'Dùng đúng 二 và 两' },
      { id: 'c3', topic: 'Hỏi tuổi linh hoạt', example: '你儿子几岁？ / 你女儿多大？', vietnamese: 'Hỏi tuổi trẻ em và người lớn' }
    ]
  },
  {
    id: 'lesson-5',
    lessonNumber: 5,
    chineseTitle: '今天我休息',
    pinyinTitle: 'Jīntiān wǒ xiūxi',
    englishTitle: "I'm Off Today",
    title: 'Bài 5: Hôm nay tôi được nghỉ',
    objectives: [
      'Nói ngày, tháng, thứ trong tuần theo trật tự lớn đến nhỏ (Năm + Tháng + Ngày/Mùng + Thứ)',
      'Hỏi và trả lời ngày tháng (今天几号？ 星期几？)',
      'Sử dụng động từ năng nguyện “会” biểu thị khả năng qua học tập (你会做饭吗？)',
      'Nắm vững câu vị ngữ danh từ biểu thị ngày tháng, tuổi tác, giờ giấc'
    ],
    charactersFeatured: ['wangyixue', 'yangtongle', 'liuming'],
    warmUp: {
      instructions: 'Nối các từ vựng về thời gian, món ăn và hoạt động ngày nghỉ:',
      items: [
        { id: 'w1', labelZh: '星期一', pinyin: 'xīngqīyī', vietnamese: 'Thứ Hai', icon: '📅' },
        { id: 'w2', labelZh: '休息', pinyin: 'xiūxi', vietnamese: 'Nghỉ ngơi, được nghỉ', icon: '☕' },
        { id: 'w3', labelZh: '电脑', pinyin: 'diànnǎo', vietnamese: 'Máy vi tính', icon: '💻' },
        { id: 'w4', labelZh: '做饭', pinyin: 'zuòfàn', vietnamese: 'Nấu ăn', icon: '🍳' },
        { id: 'w5', labelZh: '饺子', pinyin: 'jiǎozi', vietnamese: 'Bánh chẻo / Sủi cảo', icon: '🥟' },
        { id: 'w6', labelZh: '面条儿', pinyin: 'miàntiáor', vietnamese: 'Mì sợi', icon: '🍜' }
      ]
    },
    texts: [
      {
        id: 'l5-t1',
        title: 'Đoạn 1: Hôm nay ngày mấy? Thứ mấy?',
        situation: 'Vương Nhất Tuyết và đồng nghiệp Dương Đồng Lạc hỏi nhau ngày tháng',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '今天几号？', pinyin: 'Jīntiān jǐ hào?', vietnamese: 'Hôm nay ngày mùng mấy?' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '今天9月8号。', pinyin: 'Jīntiān jiǔ yuè bā hào.', vietnamese: 'Hôm nay ngày 8 tháng 9.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '星期几？', pinyin: 'Xīngqī jǐ?', vietnamese: 'Thứ mấy nhỉ?' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '星期日。今天我休息。', pinyin: 'Xīngqīrì. Jīntiān wǒ xiūxi.', vietnamese: 'Chủ nhật. Hôm nay tôi được nghỉ.' }
        ],
        newWords: [
          { id: 61, hanzi: '今天', pinyin: 'jīntiān', sinoVietnamese: 'Kim thiên', meaning: 'hôm nay', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 62, hanzi: '号', pinyin: 'hào', sinoVietnamese: 'Hiệu', meaning: 'ngày, mùng (khẩu ngữ)', partOfSpeechLabel: 'Lượng từ / Danh từ' },
          { id: 63, hanzi: '月', pinyin: 'yuè', sinoVietnamese: 'Nguyệt', meaning: 'tháng', partOfSpeechLabel: 'Danh từ' },
          { id: 64, hanzi: '星期', pinyin: 'xīngqī', sinoVietnamese: 'Tinh kỳ', meaning: 'tuần lễ, thứ', partOfSpeechLabel: 'Danh từ' },
          { id: 65, hanzi: '星期日', pinyin: 'xīngqīrì', sinoVietnamese: 'Tinh kỳ nhật', meaning: 'Chủ nhật (khẩu ngữ cũng dùng 星期天)', partOfSpeechLabel: 'Danh từ' },
          { id: 66, hanzi: '休息', pinyin: 'xiūxi', sinoVietnamese: 'Hưu tức', meaning: 'nghỉ ngơi, ngày nghỉ', partOfSpeechLabel: 'Động từ' }
        ]
      },
      {
        id: 'l5-t2',
        title: 'Đoạn 2: Bạn biết nấu ăn không?',
        situation: 'Nói về sở thích và khả năng nấu các món ăn Trung Hoa',
        sceneType: 'domestic',
        lines: [
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '你会做饭吗？', pinyin: 'Nǐ huì zuòfàn ma?', vietnamese: 'Chị biết nấu ăn không?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我会做。', pinyin: 'Wǒ huì zuò.', vietnamese: 'Tôi biết nấu.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '你会做什么？', pinyin: 'Nǐ huì zuò shénme?', vietnamese: 'Chị biết làm những món gì?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我会做面条儿、饺子，也会做一些菜。星期天我也做饭。', pinyin: 'Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuòfàn.', vietnamese: 'Tôi biết làm mì sợi, sủi cảo, và cũng biết nấu một số món ăn nữa. Chủ nhật tôi cũng hay nấu cơm.' }
        ],
        newWords: [
          { id: 67, hanzi: '会', pinyin: 'huì', sinoVietnamese: 'Hội', meaning: 'biết (qua học tập/rèn luyện)', partOfSpeechLabel: 'Động từ năng nguyện' },
          { id: 68, hanzi: '做', pinyin: 'zuò', sinoVietnamese: 'Tác', meaning: 'làm, nấu', partOfSpeechLabel: 'Động từ' },
          { id: 69, hanzi: '饭', pinyin: 'fàn', sinoVietnamese: 'Phạn', meaning: 'cơm, bữa ăn', partOfSpeechLabel: 'Danh từ' },
          { id: 70, hanzi: '做饭', pinyin: 'zuòfàn', sinoVietnamese: 'Tác phạn', meaning: 'nấu ăn, nấu cơm', partOfSpeechLabel: 'Động từ' },
          { id: 71, hanzi: '面条儿', pinyin: 'miàntiáor', sinoVietnamese: 'Diện điều', meaning: 'mì sợi', partOfSpeechLabel: 'Danh từ' },
          { id: 72, hanzi: '饺子', pinyin: 'jiǎozi', sinoVietnamese: 'Sủi cảo / Bánh chẻo', meaning: 'bánh chẻo', partOfSpeechLabel: 'Danh từ' },
          { id: 73, hanzi: '一些', pinyin: 'yìxiē', sinoVietnamese: 'Nhất ta', meaning: 'một số, một vài, một ít', partOfSpeechLabel: 'Số lượng' },
          { id: 74, hanzi: '菜', pinyin: 'cài', sinoVietnamese: 'Thái', meaning: 'món ăn, rau củ', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l5-t3',
        title: 'Đoạn 3: Chiếc máy tính mới',
        situation: 'Khen ngợi chiếc máy tính xách tay mới mua của đồng nghiệp',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '同乐，下班吗？', pinyin: 'Tónglè, xiàbān ma?', vietnamese: 'Đồng Lạc, tan làm chưa?' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '下班。', pinyin: 'Xiàbān.', vietnamese: 'Tan làm rồi.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '这是你的新电脑吗？', pinyin: 'Zhè shì nǐ de xīn diànnǎo ma?', vietnamese: 'Đây là máy tính mới của cậu à?' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '是的，是我的新电脑。', pinyin: 'Shì de, shì wǒ de xīn diànnǎo.', vietnamese: 'Vâng đúng rồi, máy tính mới của tôi đó.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '真好看！', pinyin: 'Zhēn hǎokàn!', vietnamese: 'Đẹp thật đấy!' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '我也很喜欢它。', pinyin: 'Wǒ yě hěn xǐhuan tā.', vietnamese: 'Tôi cũng rất thích nó.' }
        ],
        newWords: [
          { id: 75, hanzi: '下班', pinyin: 'xiàbān', sinoVietnamese: 'Hạ ban', meaning: 'tan làm, tan sở', partOfSpeechLabel: 'Động từ' },
          { id: 76, hanzi: '新', pinyin: 'xīn', sinoVietnamese: 'Tân', meaning: 'mới', partOfSpeechLabel: 'Tính từ' },
          { id: 77, hanzi: '电脑', pinyin: 'diànnǎo', sinoVietnamese: 'Điện não', meaning: 'máy tính', partOfSpeechLabel: 'Danh từ' },
          { id: 78, hanzi: '真', pinyin: 'zhēn', sinoVietnamese: 'Chân', meaning: 'thật, quả thực', partOfSpeechLabel: 'Phó từ' },
          { id: 79, hanzi: '好看', pinyin: 'hǎokàn', sinoVietnamese: 'Hảo khán', meaning: 'đẹp, ưa nhìn', partOfSpeechLabel: 'Tính từ' },
          { id: 80, hanzi: '喜欢', pinyin: 'xǐhuan', sinoVietnamese: 'Hỉ hoan', meaning: 'thích', partOfSpeechLabel: 'Động từ' },
          { id: 81, hanzi: '它', pinyin: 'tā', sinoVietnamese: 'Tha', meaning: 'nó (chỉ đồ vật, con vật)', partOfSpeechLabel: 'Đại từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l5-g1',
        title: 'Cách diễn đạt thời gian trong tiếng Trung (Từ lớn đến nhỏ)',
        formula: 'Năm (年) + Tháng (月) + Ngày (日/号) + Thứ (星期...)',
        explanation: 'Khác với tiếng Việt (ngày/tháng/năm), tiếng Trung luôn đi từ đơn vị thời gian lớn nhất đến nhỏ nhất.\n• Ngày trong văn nói thường dùng “号” (hào), văn viết dùng “日” (rì).\n• Thứ trong tuần: 星期一 (Thứ 2), 星期二 (Thứ 3), ..., 星期六 (Thứ 7), 星期日 / 星期天 (Chủ nhật).',
        examples: [
          { id: 'l5-e1', hanzi: '今天2025年9月8号，星期日。', pinyin: 'Jīntiān èr líng èr wǔ nián jiǔ yuè bā hào, xīngqīrì.', vietnamese: 'Hôm nay là Chủ nhật ngày 8 tháng 9 năm 2025.' },
          { id: 'l5-e2', hanzi: '今天几号？', pinyin: 'Jīntiān jǐ hào?', vietnamese: 'Hôm nay ngày mấy?' }
        ]
      },
      {
        id: 'l5-g2',
        title: 'Động từ năng nguyện “会” (Huì - Biết làm gì qua học tập)',
        formula: 'Khẳng định: S + 会 + Động từ | Phủ định: S + 不会 + Động từ',
        explanation: '“会” biểu thị một kỹ năng hoặc năng lực có được thông qua việc học tập, rèn luyện (như biết bơi, biết nấu ăn, biết tiếng Trung).',
        examples: [
          { id: 'l5-e3', hanzi: '你会做饭吗？', pinyin: 'Nǐ huì zuòfàn ma?', vietnamese: 'Bạn biết nấu ăn không?' },
          { id: 'l5-e4', hanzi: '我会做饺子。', pinyin: 'Wǒ huì zuò jiǎozi.', vietnamese: 'Tôi biết làm sủi cảo.' }
        ]
      },
      {
        id: 'l5-g3',
        title: 'Câu vị ngữ danh từ (Nominal Predicate Sentences)',
        formula: 'Chủ ngữ + [Cụm danh từ chỉ ngày tháng / tuổi / giá tiền / thời gian]',
        explanation: 'Trong câu nói về ngày tháng, thứ, tuổi tác hoặc giờ giấc, vị ngữ có thể trực tiếp là danh từ mà không nhất thiết phải có động từ “是”.',
        examples: [
          { id: 'l5-e5', hanzi: '今天星期日。', pinyin: 'Jīntiān xīngqīrì.', vietnamese: 'Hôm nay (là) Chủ nhật.' },
          { id: 'l5-e6', hanzi: '他今年五岁。', pinyin: 'Tā jīnnián wǔ suì.', vietnamese: 'Cháu năm nay 5 tuổi.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l5-fb',
        wordBank: [
          { id: 'A', label: '会', pinyin: 'huì', vietnamese: 'Biết' },
          { id: 'B', label: '号', pinyin: 'hào', vietnamese: 'Ngày / Mùng' },
          { id: 'C', label: '星期几', pinyin: 'xīngqī jǐ', vietnamese: 'Thứ mấy' },
          { id: 'D', label: '喜欢', pinyin: 'xǐhuan', vietnamese: 'Thích' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '今天9月8____。',
            pinyin: 'Jīntiān jiǔ yuè bā ____.',
            vietnamese: 'Hôm nay ngày 8 tháng 9.',
            correctWordId: 'B',
            explanation: 'Chỉ ngày dùng “号”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '今天____？今天星期日。',
            pinyin: 'Jīntiān ____? Jīntiān xīngqīrì.',
            vietnamese: 'Hôm nay thứ mấy? Hôm nay Chủ nhật.',
            correctWordId: 'C',
            explanation: 'Hỏi thứ trong tuần dùng “星期几”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '你____做中国菜吗？',
            pinyin: 'Nǐ ____ zuò Zhōngguó cài ma?',
            vietnamese: 'Bạn biết nấu món ăn Trung Quốc không?',
            correctWordId: 'A',
            explanation: 'Hỏi kỹ năng qua học tập dùng “会”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l5-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '做饭', pinyin: 'zuòfàn' },
            { id: 'w2', hanzi: '会', pinyin: 'huì' },
            { id: 'w3', hanzi: '我', pinyin: 'wǒ' },
            { id: 'w4', hanzi: '星期天', pinyin: 'xīngqītiān' }
          ],
          correctOrder: ['w4', 'w3', 'w2', 'w1'],
          fullSentence: '星期天我会做饭。',
          pinyin: 'Xīngqītiān wǒ huì zuòfàn.',
          vietnamese: 'Chủ nhật tôi sẽ nấu ăn / biết nấu ăn.',
          explanation: 'Thời gian [星期天] + Chủ ngữ [我] + Động từ năng nguyện [会] + [做饭].'
        }
      ]
    },
    bonusContent: {
      title: 'Ẩm thực Trung Hoa: Sủi cảo (中国美食——饺子)',
      chineseTitle: '中国美食——饺子',
      category: 'Ẩm thực & Văn hóa',
      content: 'Bánh chẻo (sủi cảo - 饺子) là món ăn truyền thống tiêu biểu nhất của miền Bắc Trung Quốc, mang ý nghĩa đoàn tụ sum vầy và phát tài phát lộc.',
      bulletPoints: [
        'Vào đêm giao thừa Tết Nguyên Đán, cả gia đình sum vầy cùng nhau gói sủi cảo.',
        'Hình dáng chiếc sủi cảo tựa như đồng tiền vàng (Kim nguyên bảo) thời xưa, biểu trưng cho sự sung túc tài lộc.'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Nói ngày, tháng, thứ thành thạo', example: '9月8号，星期日', vietnamese: 'Hỏi và nói ngày tháng' },
      { id: 'c2', topic: 'Sử dụng động từ năng nguyện 会', example: '我会做饭。/ 我不会说法语。', vietnamese: 'Biết làm gì qua rèn luyện' },
      { id: 'c3', topic: 'Khen ngợi và bày tỏ sự yêu thích', example: '真好看！ / 我很喜欢它。', vietnamese: 'Khen và thích thú' }
    ]
  }
];
