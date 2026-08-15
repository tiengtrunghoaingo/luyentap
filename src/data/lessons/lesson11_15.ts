import { LessonData } from '../../types';

export const LESSONS_11_TO_15: LessonData[] = [
  {
    id: 'lesson-11',
    lessonNumber: 11,
    chineseTitle: '我读大学呢',
    pinyinTitle: 'Wǒ dú dàxué ne',
    englishTitle: "I'm Studying at University",
    title: 'Bài 11: Tôi đang học đại học',
    objectives: [
      'Sử dụng câu hỏi chính phản (X不X, X没X) (忙不忙？ 开车没开车？ 去不去？)',
      'Sử dụng phó từ “在 / 正在 ... 呢” biểu thị hành động đang tiếp diễn (正在找呢 / 还在睡觉)',
      'Sử dụng động từ năng nguyện “要” biểu thị dự định sắp làm gì (今天要和小朋友玩)',
      'Nói về ngành học và đời sống sinh viên (学医, 大学生, 课很多)'
    ],
    charactersFeatured: ['liwen', 'chentianzhong', 'liuxiaoming', 'wangyixue'],
    warmUp: {
      instructions: 'Nối các từ chỉ hành động và trường học với biểu tượng tương ứng:',
      items: [
        { id: 'w1', labelZh: '开车', pinyin: 'kāichē', vietnamese: 'Lái xe ô tô', icon: '🚗' },
        { id: 'w2', labelZh: '睡觉', pinyin: 'shuìjiào', vietnamese: 'Ngủ, đi ngủ', icon: '😴' },
        { id: 'w3', labelZh: '大学生', pinyin: 'dàxuéshēng', vietnamese: 'Sinh viên đại học', icon: '🎓' },
        { id: 'w4', labelZh: '找', pinyin: 'zhǎo', vietnamese: 'Tìm kiếm', icon: '🔍' },
        { id: 'w5', labelZh: '起床', pinyin: 'qǐchuáng', vietnamese: 'Thức dậy, ngủ dậy', icon: '⏰' },
        { id: 'w6', labelZh: '问', pinyin: 'wèn', vietnamese: 'Hỏi', icon: '❓' }
      ]
    },
    texts: [
      {
        id: 'l11-t1',
        title: 'Đoạn 1: Tìm đường đến nhà hàng',
        situation: 'Trần Thiên Trung gọi điện hỏi Lý Văn khi nào đến nhà hàng',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '喂，李文，你什么时候能到饭店？', pinyin: 'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?', vietnamese: 'Alo, Lý Văn à, bao giờ cậu mới đến được nhà hàng thế?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '还不知道，正在找呢。它是不是在超市后边？', pinyin: 'Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?', vietnamese: 'Mình chưa biết nữa, đang tìm đây. Có phải quán ăn nằm ở phía sau siêu thị không?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '是的。你开车没开车？', pinyin: 'Shì de. Nǐ kāichē méi kāichē?', vietnamese: 'Đúng rồi. Cậu có tự lái xe không đấy?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '我没开车，坐车呢。', pinyin: 'Wǒ méi kāichē, zuòchē ne.', vietnamese: 'Mình không lái xe, đang ngồi xe buýt/taxi đây.' }
        ],
        newWords: [
          { id: 177, hanzi: '什么时候', pinyin: 'shénme shíhou', sinoVietnamese: 'Thập ma thời hậu', meaning: 'khi nào, bao giờ', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 178, hanzi: '知道', pinyin: 'zhīdào', sinoVietnamese: 'Tri đạo', meaning: 'biết, hiểu rõ', partOfSpeechLabel: 'Động từ' },
          { id: 179, hanzi: '正在', pinyin: 'zhèngzài', sinoVietnamese: 'Chính tại', meaning: 'đang (chỉ hành động đang tiếp diễn)', partOfSpeechLabel: 'Phó từ' },
          { id: 180, hanzi: '找', pinyin: 'zhǎo', sinoVietnamese: 'Trảo', meaning: 'tìm, tìm kiếm', partOfSpeechLabel: 'Động từ' },
          { id: 181, hanzi: '是不是', pinyin: 'shì bu shì', sinoVietnamese: 'Thị bất thị', meaning: 'phải chăng, có phải... không', partOfSpeechLabel: 'Cụm hỏi' },
          { id: 182, hanzi: '开车', pinyin: 'kāichē', sinoVietnamese: 'Khai xa', meaning: 'lái xe ô tô', partOfSpeechLabel: 'Động từ' }
        ]
      },
      {
        id: 'l11-t2',
        title: 'Đoạn 2: Chuyện học hành ở trường đại học',
        situation: 'Trần Thiên Trung và Lý Văn nói về ngành Y và cuộc sống sinh viên',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '你还在读大学吗？', pinyin: 'Nǐ hái zài dú dàxué ma?', vietnamese: 'Cậu vẫn đang học đại học à?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '对，我读大学呢，还是大学生。', pinyin: 'Duì, wǒ dú dàxué ne, háishì dàxuéshēng.', vietnamese: 'Đúng rồi, mình đang học đại học, vẫn là sinh viên.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '你们学习忙不忙？', pinyin: 'Nǐmen xuéxí máng bu máng?', vietnamese: 'Học tập của các cậu có bận không?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '非常忙，我学医，我们的课很多。', pinyin: 'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.', vietnamese: 'Bận vô cùng luôn, mình học ngành Y, bài vở nhiều lắm.' }
        ],
        newWords: [
          { id: 183, hanzi: '读', pinyin: 'dú', sinoVietnamese: 'Độc', meaning: 'đọc, học (đại học)', partOfSpeechLabel: 'Động từ' },
          { id: 184, hanzi: '大学', pinyin: 'dàxué', sinoVietnamese: 'Đại học', meaning: 'trường đại học', partOfSpeechLabel: 'Danh từ' },
          { id: 185, hanzi: '大学生', pinyin: 'dàxuéshēng', sinoVietnamese: 'Đại học sinh', meaning: 'sinh viên đại học', partOfSpeechLabel: 'Danh từ' },
          { id: 186, hanzi: '学', pinyin: 'xué', sinoVietnamese: 'Học', meaning: 'học, nghiên cứu', partOfSpeechLabel: 'Động từ' },
          { id: 187, hanzi: '医', pinyin: 'yī', sinoVietnamese: 'Y', meaning: 'y học, ngành y', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l11-t3',
        title: 'Đoạn 3: Cậu bé lười dậy buổi sáng',
        situation: 'Vương Nhất Tuyết và con gái Tiểu Tuyết nói về bé Tiểu Minh đang ngủ nướng',
        sceneType: 'domestic',
        lines: [
          { speaker: '刘小雪', avatar: '👧', hanzi: '弟弟起床没起床呢？', pinyin: 'Dìdi qǐchuáng méi qǐchuáng ne?', vietnamese: 'Em trai đã dậy chưa hả mẹ?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '没起床呢，还在睡觉。', pinyin: 'Méi qǐchuáng ne, hái zài shuìjiào.', vietnamese: 'Chưa dậy con ạ, vẫn đang ngủ nướng kia kìa.' },
          { speaker: '刘小雪', avatar: '👧', hanzi: '还睡呢？他今天去不去那里？', pinyin: 'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?', vietnamese: 'Vẫn còn ngủ ạ? Hôm nay em ấy có đi đến đằng kia không mẹ?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '去哪里？', pinyin: 'Qù nǎlǐ?', vietnamese: 'Đi đâu cơ con?' },
          { speaker: '刘小雪', avatar: '👧', hanzi: '去超市。', pinyin: 'Qù chāoshì.', vietnamese: 'Đi siêu thị ạ.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我昨天问他，他对我说，他不去，他今天要和小朋友玩。', pinyin: 'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyou wán.', vietnamese: 'Hôm qua mẹ hỏi nó rồi, nó bảo với mẹ là không đi, hôm nay nó định chơi với các bạn nhỏ.' }
        ],
        newWords: [
          { id: 188, hanzi: '起床', pinyin: 'qǐchuáng', sinoVietnamese: 'Khởi sàng', meaning: 'ngủ dậy, rời giường', partOfSpeechLabel: 'Động từ' },
          { id: 189, hanzi: '睡觉', pinyin: 'shuìjiào', sinoVietnamese: 'Thụy giác', meaning: 'ngủ, đi ngủ', partOfSpeechLabel: 'Động từ' },
          { id: 190, hanzi: '那里', pinyin: 'nàlǐ', sinoVietnamese: 'Na lý', meaning: 'chỗ đó, đằng kia', partOfSpeechLabel: 'Đại từ' },
          { id: 191, hanzi: '昨天', pinyin: 'zuótiān', sinoVietnamese: 'Tạc thiên', meaning: 'hôm qua', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 192, hanzi: '问', pinyin: 'wèn', sinoVietnamese: 'Vấn', meaning: 'hỏi', partOfSpeechLabel: 'Động từ' },
          { id: 193, hanzi: '对', pinyin: 'duì', sinoVietnamese: 'Đối', meaning: 'đối với, nói với', partOfSpeechLabel: 'Giới từ' },
          { id: 194, hanzi: '说', pinyin: 'shuō', sinoVietnamese: 'Thuyết', meaning: 'nói, bảo', partOfSpeechLabel: 'Động từ' },
          { id: 195, hanzi: '要', pinyin: 'yào', sinoVietnamese: 'Yếu', meaning: 'muốn, sẽ, cần', partOfSpeechLabel: 'Động từ năng nguyện' },
          { id: 196, hanzi: '小朋友', pinyin: 'xiǎopéngyou', sinoVietnamese: 'Tiểu bằng hữu', meaning: 'bạn nhỏ, em bé', partOfSpeechLabel: 'Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l11-g1',
        title: 'Câu hỏi chính phản (正反问句: X không X / X chưa X)',
        formula: 'Động từ + 不 / 没 + Động từ (như: 去不去 / 忙不忙 / 开车没开车)',
        explanation: 'Ghép dạng khẳng định và phủ định của vị ngữ lại với nhau để tạo thành câu hỏi lựa chọn. Khi đã dùng câu hỏi chính phản thì KHÔNG ĐƯỢC dùng thêm “吗” ở cuối câu.',
        examples: [
          { id: 'l11-e1', hanzi: '你们学习忙不忙？', pinyin: 'Nǐmen xuéxí máng bu máng?', vietnamese: 'Học tập của các bạn có bận không?' },
          { id: 'l11-e2', hanzi: '他今天去不去超市？', pinyin: 'Tā jīntiān qù bu qù chāoshì?', vietnamese: 'Hôm nay nó có đi siêu thị không?' }
        ],
        commonMistakes: [
          {
            incorrect: '你们学习忙不忙吗？',
            incorrectPinyin: 'Nǐmen xuéxí máng bu máng ma?',
            correct: '你们学习忙不忙？',
            correctPinyin: 'Nǐmen xuéxí máng bu máng?',
            reason: 'Câu hỏi chính phản đã chứa yếu tố nghi vấn nên không được thêm “吗” vào cuối câu.'
          }
        ]
      },
      {
        id: 'l11-g2',
        title: 'Hành động đang tiếp diễn với “在 / 正在 ... (呢)”',
        formula: 'Chủ ngữ + (正 / 在 / 正在) + Động từ + (呢)',
        explanation: 'Biểu thị một hành động đang trong quá trình diễn ra tại một thời điểm nhất định.',
        examples: [
          { id: 'l11-e3', hanzi: '我正在找呢。', pinyin: 'Wǒ zhèngzài zhǎo ne.', vietnamese: 'Tôi đang tìm kiếm đây.' },
          { id: 'l11-e4', hanzi: '他还在睡觉呢。', pinyin: 'Tā hái zài shuìjiào ne.', vietnamese: 'Nó vẫn đang ngủ.' }
        ]
      },
      {
        id: 'l11-g3',
        title: 'Động từ năng nguyện “要” (Yào - Sẽ / Định / Muốn)',
        formula: 'S + 要 + Động từ',
        explanation: '“要” biểu thị ý định, kế hoạch sẽ thực hiện một hành động trong tương lai gần.',
        examples: [
          { id: 'l11-e5', hanzi: '他今天要和小朋友玩。', pinyin: 'Tā jīntiān yào hé xiǎopéngyou wán.', vietnamese: 'Hôm nay bé định chơi với các bạn nhỏ.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l11-fb',
        wordBank: [
          { id: 'A', label: '正在', pinyin: 'zhèngzài', vietnamese: 'Đang' },
          { id: 'B', label: '去不去', pinyin: 'qù bu qù', vietnamese: 'Có đi không' },
          { id: 'C', label: '什么时候', pinyin: 'shénme shíhou', vietnamese: 'Khi nào' },
          { id: 'D', label: '要', pinyin: 'yào', vietnamese: 'Định / Sẽ' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '你____能到饭店？',
            pinyin: 'Nǐ ____ néng dào fàndiàn?',
            vietnamese: 'Khi nào bạn mới đến được nhà hàng?',
            correctWordId: 'C',
            explanation: 'Hỏi mốc thời gian dùng “什么时候”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '我____找呢，马上就到。',
            pinyin: 'Wǒ ____ zhǎo ne, mǎshàng jiù dào.',
            vietnamese: 'Tôi đang tìm đây, đến ngay bây giờ.',
            correctWordId: 'A',
            explanation: 'Hành động đang tiếp diễn dùng “正在...呢”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '他今天____超市？',
            pinyin: 'Tā jīntiān ____ chāoshì?',
            vietnamese: 'Hôm nay cậu ấy có đi siêu thị không?',
            correctWordId: 'B',
            explanation: 'Câu hỏi chính phản dùng “去不去”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l11-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '在睡觉', pinyin: 'zài shuìjiào' },
            { id: 'w2', hanzi: '弟弟', pinyin: 'dìdi' },
            { id: 'w3', hanzi: '还在', pinyin: 'hái zài' }
          ],
          correctOrder: ['w2', 'w3', 'w1'],
          fullSentence: '弟弟还在睡觉。',
          pinyin: 'Dìdi hái zài shuìjiào.',
          vietnamese: 'Em trai vẫn đang ngủ.',
          explanation: 'Chủ ngữ [弟弟] + Phó từ [还在] + Động từ [睡觉].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Đặt câu hỏi chính phản', example: '忙不忙？ / 去不去？ / 开车没开车？', vietnamese: 'Hỏi chính phản' },
      { id: 'c2', topic: 'Diễn đạt hành động đang tiếp diễn', example: '我正在找呢。/ 还在睡觉。', vietnamese: 'Đang làm gì' },
      { id: 'c3', topic: 'Dùng 要 biểu thị ý định kế hoạch', example: '他今天要和小朋友玩。', vietnamese: 'Định làm gì' }
    ]
  },
  {
    id: 'lesson-12',
    lessonNumber: 12,
    chineseTitle: '昨天下了雪',
    pinyinTitle: 'Zuótiān xià le xuě',
    englishTitle: 'It Snowed Yesterday',
    title: 'Bài 12: Hôm qua tuyết đã rơi',
    objectives: [
      'Nói về thời tiết và nhiệt độ (下雨了, 下雪了, 太冷了)',
      'Sử dụng câu phi chủ vị (Non-subject predicate sentences: 下雨了, 下雪了)',
      'Sử dụng trợ từ ngữ khí “了” biểu thị sự thay đổi tình huống hoặc xuất hiện trạng thái mới',
      'Sử dụng cấu trúc cảm thán “太……了” (Thái... liễu - ...quá)',
      'Nói về việc đi khám bệnh và uống thuốc (生病, 看病, 吃药, 喝热水)'
    ],
    charactersFeatured: ['baijiayue', 'annie', 'wangyixue', 'liuming'],
    warmUp: {
      instructions: 'Nối các từ về thời tiết, khám bệnh và sức khỏe với hình ảnh:',
      items: [
        { id: 'w1', labelZh: '下雨', pinyin: 'xiàyǔ', vietnamese: 'Mưa rơi, trời mưa', icon: '🌧️' },
        { id: 'w2', labelZh: '下雪', pinyin: 'xiàxuě', vietnamese: 'Tuyết rơi', icon: '❄️' },
        { id: 'w3', labelZh: '冷', pinyin: 'lěng', vietnamese: 'Lạnh', icon: '🥶' },
        { id: 'w4', labelZh: '生病', pinyin: 'shēngbìng', vietnamese: 'Bị ốm, đổ bệnh', icon: '🤒' },
        { id: 'w5', labelZh: '看病', pinyin: 'kànbìng', vietnamese: 'Đi khám bệnh', icon: '🩺' },
        { id: 'w6', labelZh: '热水', pinyin: 'rèshuǐ', vietnamese: 'Nước ấm, nước nóng', icon: '☕' }
      ]
    },
    texts: [
      {
        id: 'l12-t1',
        title: 'Đoạn 1: Thời tiết mưa lạnh',
        situation: 'Annie và Bạch Gia Nguyệt nói về thời tiết mưa gió bên ngoài',
        sceneType: 'overseas',
        lines: [
          { speaker: '安妮', avatar: '👩', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vietnamese: 'Thời tiết hôm nay thế nào nhỉ?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '这里的天气不太好，下雨了。', pinyin: 'Zhèlǐ de tiānqì bú tài hǎo, xiàyǔ le.', vietnamese: 'Thời tiết ở đây không được tốt lắm, trời mưa rồi.' },
          { speaker: '安妮', avatar: '👩', hanzi: '雨大吗？', pinyin: 'Yǔ dà ma?', vietnamese: 'Mưa to không bạn?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '有点儿大，我觉得很冷。', pinyin: 'Yǒudiǎnr dà, wǒ juéde hěn lěng.', vietnamese: 'Cũng hơi to, mình cảm thấy lạnh lắm.' }
        ],
        newWords: [
          { id: 197, hanzi: '天气', pinyin: 'tiānqì', sinoVietnamese: 'Thiên khí', meaning: 'thời tiết', partOfSpeechLabel: 'Danh từ' },
          { id: 198, hanzi: '下雨', pinyin: 'xiàyǔ', sinoVietnamese: 'Hạ vũ', meaning: 'mưa rơi, đổ mưa', partOfSpeechLabel: 'Động từ' },
          { id: 199, hanzi: '雨', pinyin: 'yǔ', sinoVietnamese: 'Vũ', meaning: 'mưa', partOfSpeechLabel: 'Danh từ' },
          { id: 200, hanzi: '有点儿', pinyin: 'yǒudiǎnr', sinoVietnamese: 'Hữu điểm nhi', meaning: 'hơi, một chút (chỉ cảm giác tiêu cực/không vừa ý)', partOfSpeechLabel: 'Phó từ' },
          { id: 201, hanzi: '觉得', pinyin: 'juéde', sinoVietnamese: 'Giác đắc', meaning: 'cảm thấy, cho rằng', partOfSpeechLabel: 'Động từ' },
          { id: 202, hanzi: '冷', pinyin: 'lěng', sinoVietnamese: 'Lãnh', meaning: 'lạnh', partOfSpeechLabel: 'Tính từ' }
        ]
      },
      {
        id: 'l12-t2',
        title: 'Đoạn 2: Hôm qua tuyết rơi và nghỉ ốm',
        situation: 'Dương Đồng Lạc hỏi thăm Vương Nhất Tuyết bị ốm vì trời tuyết lạnh',
        sceneType: 'domestic',
        lines: [
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '昨天下了雪。', pinyin: 'Zuótiān xià le xuě.', vietnamese: 'Hôm qua tuyết rơi.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '是的，太冷了。', pinyin: 'Shì de, tài lěng le.', vietnamese: 'Đúng vậy, lạnh buốt quá.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '你昨天没来公司，生病了？', pinyin: 'Nǐ zuótiān méi lái gōngsī, shēngbìng le?', vietnamese: 'Hôm qua chị không đến công ty, bị ốm rồi à?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '对，我昨天去医院看病了。', pinyin: 'Duì, wǒ zuótiān qù yīyuàn kànbìng le.', vietnamese: 'Ừ, hôm qua tôi phải vào bệnh viện khám bệnh.' }
        ],
        newWords: [
          { id: 203, hanzi: '雪', pinyin: 'xuě', sinoVietnamese: 'Tuyết', meaning: 'tuyết', partOfSpeechLabel: 'Danh từ' },
          { id: 204, hanzi: '下雪', pinyin: 'xiàxuě', sinoVietnamese: 'Hạ tuyết', meaning: 'tuyết rơi', partOfSpeechLabel: 'Động từ' },
          { id: 205, hanzi: '太', pinyin: 'tài', sinoVietnamese: 'Thái', meaning: 'quá, lắm', partOfSpeechLabel: 'Phó từ' },
          { id: 206, hanzi: '公司', pinyin: 'gōngsī', sinoVietnamese: 'Công ty', meaning: 'công ty', partOfSpeechLabel: 'Danh từ' },
          { id: 207, hanzi: '生病', pinyin: 'shēngbìng', sinoVietnamese: 'Sinh bệnh', meaning: 'bị ốm, ngã bệnh', partOfSpeechLabel: 'Động từ' },
          { id: 208, hanzi: '看病', pinyin: 'kànbìng', sinoVietnamese: 'Khán bệnh', meaning: 'khám bệnh, đi khám', partOfSpeechLabel: 'Động từ' }
        ]
      },
      {
        id: 'l12-t3',
        title: 'Đoạn 3: Lời khuyên của bác sĩ',
        situation: 'Bác sĩ Lưu Minh khám cho người bệnh và dặn dò uống thuốc',
        sceneType: 'domestic',
        lines: [
          { speaker: '病人', avatar: '😷', hanzi: '医生，我病了。', pinyin: 'Yīshēng, wǒ bìng le.', vietnamese: 'Bác sĩ ơi, tôi bị ốm rồi.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '我看看。你觉得怎么样？', pinyin: 'Wǒ kànkan. Nǐ juéde zěnmeyàng?', vietnamese: 'Để tôi xem nào. Bác thấy trong người thế nào?' },
          { speaker: '病人', avatar: '😷', hanzi: '我很冷。', pinyin: 'Wǒ hěn lěng.', vietnamese: 'Tôi thấy lạnh run người.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '好的，吃一点儿药，今天休息半天吧。', pinyin: 'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.', vietnamese: 'Được rồi, bác uống chút thuốc này, hôm nay nghỉ ngơi nửa ngày nhé.' },
          { speaker: '病人', avatar: '😷', hanzi: '好的。', pinyin: 'Hǎo de.', vietnamese: 'Vâng thưa bác sĩ.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '回家后再喝些热水。', pinyin: 'Huí jiā hòu zài hē xiē rèshuǐ.', vietnamese: 'Sau khi về nhà thì uống thêm nhiều nước ấm nhé.' }
        ],
        newWords: [
          { id: 209, hanzi: '药', pinyin: 'yào', sinoVietnamese: 'Dược', meaning: 'thuốc uống', partOfSpeechLabel: 'Danh từ' },
          { id: 210, hanzi: '吃药', pinyin: 'chī yào', sinoVietnamese: 'Cật dược', meaning: 'uống thuốc', partOfSpeechLabel: 'Cụm động từ' },
          { id: 211, hanzi: '回', pinyin: 'huí', sinoVietnamese: 'Hồi', meaning: 'về, quay về', partOfSpeechLabel: 'Động từ' },
          { id: 212, hanzi: '喝', pinyin: 'hē', sinoVietnamese: 'Hát', meaning: 'uống', partOfSpeechLabel: 'Động từ' },
          { id: 213, hanzi: '水', pinyin: 'shuǐ', sinoVietnamese: 'Thủy', meaning: 'nước', partOfSpeechLabel: 'Danh từ' },
          { id: 214, hanzi: '热', pinyin: 'rè', sinoVietnamese: 'Nhiệt', meaning: 'nóng, ấm', partOfSpeechLabel: 'Tính từ' }
        ],
        tip: {
          title: 'Cách nói “Uống thuốc” trong tiếng Trung (吃药)',
          content: 'Trong tiếng Trung, người ta nói “吃药” (ăn thuốc) chứ KHÔNG dùng “喝药” khi uống thuốc viên.'
        }
      }
    ],
    grammarPoints: [
      {
        id: 'l12-g1',
        title: 'Câu phi chủ vị miêu tả hiện tượng tự nhiên (Non-Subject Predicate)',
        formula: 'Động từ + Tân ngữ (như: 下雨了 / 下雪了)',
        explanation: 'Khi miêu tả hiện tượng thời tiết tự nhiên, câu tiếng Trung không cần có chủ ngữ cụ thể (như từ "It" trong tiếng Anh).',
        examples: [
          { id: 'l12-e1', hanzi: '下雨了。', pinyin: 'Xiàyǔ le.', vietnamese: 'Trời mưa rồi.' },
          { id: 'l12-e2', hanzi: '昨天下了雪。', pinyin: 'Zuótiān xià le xuě.', vietnamese: 'Hôm qua trời đổ tuyết.' }
        ]
      },
      {
        id: 'l12-g2',
        title: 'Trợ từ ngữ khí “了” (1) (Biến đổi trạng thái / Xuất hiện tình huống mới)',
        formula: 'Câu trần thuật + 了',
        explanation: 'Đặt ở cuối câu để chỉ ra rằng trạng thái đã thay đổi so với trước đó (ví dụ: trước đó chưa mưa, bây giờ đã mưa: “下雨了”).',
        examples: [
          { id: 'l12-e3', hanzi: '生病了。', pinyin: 'Shēngbìng le.', vietnamese: 'Bị ốm mất rồi.' },
          { id: 'l12-e4', hanzi: '医生，我病了。', pinyin: 'Yīshēng, wǒ bìng le.', vietnamese: 'Bác sĩ ơi, tôi ngã bệnh rồi.' }
        ]
      },
      {
        id: 'l12-g3',
        title: 'Cấu trúc cảm thán “太……了” (Quá... lắm)',
        formula: '太 + Tính từ + 了！',
        explanation: 'Dùng để bộc lộ cảm xúc khen ngợi hoặc phàn nàn ở mức độ rất cao.',
        examples: [
          { id: 'l12-e5', hanzi: '太冷了！', pinyin: 'Tài lěng le!', vietnamese: 'Lạnh quá đi mất!' },
          { id: 'l12-e6', hanzi: '太漂亮了！', pinyin: 'Tài piàoliang le!', vietnamese: 'Đẹp quá!' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l12-fb',
        wordBank: [
          { id: 'A', label: '太', pinyin: 'tài', vietnamese: 'Quá' },
          { id: 'B', label: '下雨', pinyin: 'xiàyǔ', vietnamese: 'Đổ mưa' },
          { id: 'C', label: '喝', pinyin: 'hē', vietnamese: 'Uống' },
          { id: 'D', label: '吃', pinyin: 'chī', vietnamese: 'Uống (thuốc) / Ăn' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '今天天气不好，____了。',
            pinyin: 'Jīntiān tiānqì bù hǎo, ____ le.',
            vietnamese: 'Thời tiết hôm nay không tốt, trời mưa rồi.',
            correctWordId: 'B',
            explanation: 'Thời tiết mưa dùng “下雨”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '昨天下雪了，____冷了！',
            pinyin: 'Zuótiān xiàxuě le, ____ lěng le!',
            vietnamese: 'Hôm qua tuyết rơi rồi, lạnh quá đi mất!',
            correctWordId: 'A',
            explanation: 'Cấu trúc cảm thán “太...了”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '回家后____一些热水。',
            pinyin: 'Huí jiā hòu ____ yìxiē rèshuǐ.',
            vietnamese: 'Sau khi về nhà thì uống chút nước ấm.',
            correctWordId: 'C',
            explanation: 'Uống nước dùng “喝”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l12-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '看病了', pinyin: 'kànbìng le' },
            { id: 'w2', hanzi: '我昨天', pinyin: 'wǒ zuótiān' },
            { id: 'w3', hanzi: '去医院', pinyin: 'qù yīyuàn' }
          ],
          correctOrder: ['w2', 'w3', 'w1'],
          fullSentence: '我昨天去医院看病了。',
          pinyin: 'Wǒ zuótiān qù yīyuàn kànbìng le.',
          vietnamese: 'Hôm qua tôi đi bệnh viện khám bệnh.',
          explanation: 'Chủ ngữ [我昨天] + Nơi chốn [去医院] + Hành động [看病了].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Miêu tả thời tiết', example: '今天天气怎么样？➔ 下雨了 / 下雪了', vietnamese: 'Hỏi và tả thời tiết' },
      { id: 'c2', topic: 'Dùng cấu trúc cảm thán 太...了', example: '太冷了！ / 太好了！', vietnamese: 'Cảm thán mức độ' },
      { id: 'c3', topic: 'Giao tiếp khi ốm đau', example: '吃药 / 看病 / 喝热水', vietnamese: 'Khám bệnh và dùng thuốc' }
    ]
  },
  {
    id: 'lesson-13',
    lessonNumber: 13,
    chineseTitle: '请给我一杯茶',
    pinyinTitle: 'Qǐng gěi wǒ yì bēi chá',
    englishTitle: "I'll Have a Cup of Tea, Please",
    title: 'Bài 13: Xin cho tôi một ly trà',
    objectives: [
      'Sử dụng động từ năng nguyện “可以” để xin phép hoặc đưa ra đề xuất lịch sự (我可以再问您一个问题吗？)',
      'Sử dụng cấu trúc “Động từ + 一下” làm nhẹ giọng điệu (打电话问一下 / 我看一下)',
      'Sử dụng câu song tân ngữ (Double Object Sentences) với 给 và 问 (请给我一杯茶 / 问您一个问题)',
      'Gọi đồ ăn và thức uống trong nhà hàng / quán trà (茶, 牛奶, 面包, 鸡蛋, 一半)'
    ],
    charactersFeatured: ['wangyifei', 'baijiayue', 'liwen'],
    warmUp: {
      instructions: 'Nối các từ về ăn uống và gọi món với biểu tượng tương ứng:',
      items: [
        { id: 'w1', labelZh: '茶', pinyin: 'chá', vietnamese: 'Trà, chè', icon: '🍵' },
        { id: 'w2', labelZh: '面包', pinyin: 'miànbāo', vietnamese: 'Bánh mì', icon: '🍞' },
        { id: 'w3', labelZh: '鸡蛋', pinyin: 'jīdàn', vietnamese: 'Trứng gà', icon: '🥚' },
        { id: 'w4', labelZh: '一杯', pinyin: 'yì bēi', vietnamese: 'Một ly, một tách', icon: '🥛' },
        { id: 'w5', labelZh: '给', pinyin: 'gěi', vietnamese: 'Cho, đưa cho', icon: '🤲' },
        { id: 'w6', labelZh: '请', pinyin: 'qǐng', vietnamese: 'Mời, xin vui lòng', icon: '🙏' }
      ]
    },
    texts: [
      {
        id: 'l13-t1',
        title: 'Đoạn 1: Xin phép hỏi cô giáo một câu hỏi',
        situation: 'Bạch Gia Nguyệt lễ phép xin hỏi cô giáo Vương về nơi bán điện thoại',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '王老师，我可以再问您一个问题吗？', pinyin: 'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí ge wèntí ma?', vietnamese: 'Thưa cô Vương, em có thể hỏi cô thêm một câu hỏi nữa được không ạ?' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '可以。你有什么问题？', pinyin: 'Kěyǐ. Nǐ yǒu shénme wèntí?', vietnamese: 'Được chứ em. Em có câu hỏi gì nào?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '那个小店卖不卖手机？', pinyin: 'Nàge xiǎodiàn mài bu mài shǒujī?', vietnamese: 'Cửa tiệm nhỏ đằng kia có bán điện thoại di động không ạ?' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我不知道。你可以打电话问一下。', pinyin: 'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.', vietnamese: 'Cô cũng chưa rõ nữa. Em có thể gọi điện thoại hỏi thử xem sao.' }
        ],
        newWords: [
          { id: 215, hanzi: '可以', pinyin: 'kěyǐ', sinoVietnamese: 'Khả dĩ', meaning: 'có thể, được phép', partOfSpeechLabel: 'Động từ năng nguyện' },
          { id: 216, hanzi: '再', pinyin: 'zài', sinoVietnamese: 'Tái', meaning: 'lại, thêm nữa (hành động chưa xảy ra)', partOfSpeechLabel: 'Phó từ' },
          { id: 217, hanzi: '问题', pinyin: 'wèntí', sinoVietnamese: 'Vấn đề', meaning: 'câu hỏi, vấn đề', partOfSpeechLabel: 'Danh từ' },
          { id: 218, hanzi: '卖', pinyin: 'mài', sinoVietnamese: 'Mại', meaning: 'bán', partOfSpeechLabel: 'Động từ' },
          { id: 219, hanzi: '打电话', pinyin: 'dǎ diànhuà', sinoVietnamese: 'Đả điện thoại', meaning: 'gọi điện thoại', partOfSpeechLabel: 'Cụm động từ' },
          { id: 220, hanzi: '一下', pinyin: 'yíxià', sinoVietnamese: 'Nhất hạ', meaning: 'một chút, một lát', partOfSpeechLabel: 'Trợ từ' }
        ]
      },
      {
        id: 'l13-t2',
        title: 'Đoạn 2: Gọi bữa sáng tại quán',
        situation: 'Bạch Gia Nguyệt vào quán gọi món cho bữa sáng',
        sceneType: 'overseas',
        lines: [
          { speaker: '服务员', avatar: '💁', hanzi: '女士，请坐！您喝什么？', pinyin: 'Nǚshì, qǐng zuò! Nín hē shénme?', vietnamese: 'Chào quý cô, xin mời ngồi! Cô uống gì ạ?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我稍微看一下。请给我一杯牛奶。', pinyin: 'Wǒ shāowēi kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.', vietnamese: 'Để tôi xem một lát nhé. Xin cho tôi một ly sữa bò.' },
          { speaker: '服务员', avatar: '💁', hanzi: '好的。您还要什么？', pinyin: 'Hǎo de. Nín hái yào shénme?', vietnamese: 'Vâng ạ. Cô còn muốn dùng thêm gì nữa không ạ?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我还没吃早饭，再要这个面包和鸡蛋吧。', pinyin: 'Wǒ hái méi chī zǎofàn, zài yào zhè ge miànbāo hé jīdàn ba.', vietnamese: 'Tôi chưa ăn sáng, cho tôi thêm chiếc bánh mì này và một quả trứng gà nhé.' }
        ],
        newWords: [
          { id: 221, hanzi: '请', pinyin: 'qǐng', sinoVietnamese: 'Thỉnh', meaning: 'mời, xin vui lòng', partOfSpeechLabel: 'Động từ' },
          { id: 222, hanzi: '坐', pinyin: 'zuò', sinoVietnamese: 'Tọa', meaning: 'ngồi', partOfSpeechLabel: 'Động từ' },
          { id: 223, hanzi: '给', pinyin: 'gěi', sinoVietnamese: 'Cấp', meaning: 'cho, đưa cho', partOfSpeechLabel: 'Động từ' },
          { id: 224, hanzi: '杯', pinyin: 'bēi', sinoVietnamese: 'Bôi', meaning: 'ly, cốc, tách (lượng từ đồ uống)', partOfSpeechLabel: 'Lượng từ' },
          { id: 225, hanzi: '早饭', pinyin: 'zǎofàn', sinoVietnamese: 'Tảo phạn', meaning: 'bữa sáng, cơm sáng', partOfSpeechLabel: 'Danh từ' },
          { id: 226, hanzi: '面包', pinyin: 'miànbāo', sinoVietnamese: 'Diện bao', meaning: 'bánh mì', partOfSpeechLabel: 'Danh từ' },
          { id: 227, hanzi: '鸡蛋', pinyin: 'jīdàn', sinoVietnamese: 'Kê đản', meaning: 'trứng gà', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l13-t3',
        title: 'Đoạn 3: Gọi một ấm trà và sủi cảo',
        situation: 'Lý Văn gọi món tại quán ăn truyền thống',
        sceneType: 'overseas',
        lines: [
          { speaker: '服务员', avatar: '💁', hanzi: '先生，请坐！您要什么？', pinyin: 'Xiānsheng, qǐng zuò! Nín yào shénme?', vietnamese: 'Chào quý anh, mời ngồi! Anh muốn dùng gì ạ?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '我要一斤饺子。', pinyin: 'Wǒ yào yì jīn jiǎozi.', vietnamese: 'Cho tôi một cân (500g) sủi cảo.' },
          { speaker: '服务员', avatar: '💁', hanzi: '好的。一斤饺子40个。', pinyin: 'Hǎo de. Yì jīn jiǎozi sìshí ge.', vietnamese: 'Dạ vâng. Một cân sủi cảo là 40 chiếc đấy ạ.' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '40个太多了，我要一半吧。', pinyin: 'Sìshí ge tài duō le, wǒ yào yíbàn ba.', vietnamese: '40 chiếc thì nhiều quá, cho tôi lấy một nửa (nửa cân) thôi nhé.' },
          { speaker: '服务员', avatar: '💁', hanzi: '半斤20个。您想喝什么？', pinyin: 'Bàn jīn èrshí ge. Nín xiǎng hē shénme?', vietnamese: 'Nửa cân là 20 chiếc ạ. Anh muốn uống nước gì không ạ?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '请给我一杯茶吧。', pinyin: 'Qǐng gěi wǒ yì bēi chá ba.', vietnamese: 'Xin cho tôi một ly trà nhé.' }
        ],
        newWords: [
          { id: 228, hanzi: '先生', pinyin: 'xiānsheng', sinoVietnamese: 'Tiên sinh', meaning: 'quý ông, anh, ngài', partOfSpeechLabel: 'Danh từ' },
          { id: 229, hanzi: '一半', pinyin: 'yíbàn', sinoVietnamese: 'Nhất bán', meaning: 'một nửa', partOfSpeechLabel: 'Số lượng' },
          { id: 230, hanzi: '茶', pinyin: 'chá', sinoVietnamese: 'Trà', meaning: 'trà, chè', partOfSpeechLabel: 'Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l13-g1',
        title: 'Động từ năng nguyện “可以” (Kěyǐ - Có thể / Xin phép)',
        formula: 'S + 可以 + Động từ？',
        explanation: 'Dùng trong câu cầu khiến hoặc câu hỏi xin phép để thể hiện sự lễ độ, lịch thiệp.',
        examples: [
          { id: 'l13-e1', hanzi: '我可以再问您一个问题吗？', pinyin: 'Wǒ kěyǐ zài wèn nín yí ge wèntí ma?', vietnamese: 'Em có thể hỏi cô thêm một câu hỏi nữa được không ạ?' },
          { id: 'l13-e2', hanzi: '你可以打电话问一下。', pinyin: 'Nǐ kěyǐ dǎ diànhuà wèn yíxià.', vietnamese: 'Bạn có thể gọi điện thoại hỏi thử xem.' }
        ]
      },
      {
        id: 'l13-g2',
        title: 'Cấu trúc “Động từ + 一下” (Thử làm một chút)',
        formula: 'Động từ + 一下 (yíxià)',
        explanation: '“一下” đứng sau động từ để biểu thị hành động diễn ra nhanh gọn trong thời gian ngắn hoặc làm thử, giúp câu văn trở nên uyển chuyển, nhẹ nhàng và lịch sự hơn.',
        examples: [
          { id: 'l13-e3', hanzi: '我看一下。', pinyin: 'Wǒ kàn yíxià.', vietnamese: 'Để tôi xem một lát.' },
          { id: 'l13-e4', hanzi: '问一下。', pinyin: 'Wèn yíxià.', vietnamese: 'Hỏi thử một chút.' }
        ]
      },
      {
        id: 'l13-g3',
        title: 'Câu song tân ngữ với “给” và “问” (Double Object Sentences)',
        formula: 'Chủ ngữ + Động từ (给 / 问) + Tân ngữ 1 (Người) + Tân ngữ 2 (Vật/Sự việc)',
        explanation: 'Một số động từ như “给” (cho), “问” (hỏi) có thể mang cùng lúc hai tân ngữ: Tân ngữ gián tiếp (chỉ người) đứng trước, Tân ngữ trực tiếp (chỉ vật/nội dung) đứng sau.',
        examples: [
          { id: 'l13-e5', hanzi: '请给我一杯茶。', pinyin: 'Qǐng gěi wǒ yì bēi chá.', vietnamese: 'Xin cho tôi (O1) một ly trà (O2).' },
          { id: 'l13-e6', hanzi: '我问您一个问题。', pinyin: 'Wǒ wèn nín yí ge wèntí.', vietnamese: 'Em hỏi cô (O1) một câu hỏi (O2).' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l13-fb',
        wordBank: [
          { id: 'A', label: '可以', pinyin: 'kěyǐ', vietnamese: 'Có thể' },
          { id: 'B', label: '杯', pinyin: 'bēi', vietnamese: 'Ly / Tách' },
          { id: 'C', label: '一下', pinyin: 'yíxià', vietnamese: 'Một chút / Thử xem' },
          { id: 'D', label: '给', pinyin: 'gěi', vietnamese: 'Cho' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '我____问您一个问题吗？',
            pinyin: 'Wǒ ____ wèn nín yí ge wèntí ma?',
            vietnamese: 'Em có thể hỏi cô một câu hỏi được không ạ?',
            correctWordId: 'A',
            explanation: 'Xin phép lịch sự dùng “可以”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '请____我一杯茶。',
            pinyin: 'Qǐng ____ wǒ yì bēi chá.',
            vietnamese: 'Xin cho tôi một ly trà.',
            correctWordId: 'D',
            explanation: 'Đưa cho ai cái gì dùng động từ “给”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '请等我，我看____。',
            pinyin: 'Qǐng děng wǒ, wǒ kàn ____.',
            vietnamese: 'Xin đợi tôi, để tôi xem một lát.',
            correctWordId: 'C',
            explanation: 'Làm thử một chút sau động từ dùng “一下”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l13-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '一杯茶', pinyin: 'yì bēi chá' },
            { id: 'w2', hanzi: '请给我', pinyin: 'qǐng gěi wǒ' }
          ],
          correctOrder: ['w2', 'w1'],
          fullSentence: '请给我一杯茶。',
          pinyin: 'Qǐng gěi wǒ yì bēi chá.',
          vietnamese: 'Xin cho tôi một ly trà.',
          explanation: 'Câu song tân ngữ: 请给我 + [一杯茶].'
        }
      ]
    },
    bonusContent: {
      title: 'Văn hóa Trà đạo Trung Hoa (中国茶)',
      chineseTitle: '中国茶',
      category: 'Văn hóa',
      content: 'Trung Quốc là quê hương của cây chè và là cái nôi của nghệ thuật thưởng trà.',
      bulletPoints: [
        'Trà Trung Quốc được chia làm sáu loại chính: Lục trà (trà xanh), Hồng trà (trà đen), Ô long trà, Bạch trà, Hoàng trà và Hắc trà (trà Phổ Nhĩ).',
        'Khách đến nhà mời trà là nét đẹp hiếu khách ngàn đời của người dân phương Đông.'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Xin phép lịch sự với 可以', example: '我可以问您一个问题吗？', vietnamese: 'Xin phép và thỉnh cầu' },
      { id: 'c2', topic: 'Dùng cấu trúc Động từ + 一下', example: '看查一下 / 问一下', vietnamese: 'Làm thử một lát' },
      { id: 'c3', topic: 'Gọi món ăn và thức uống', example: '请给我一杯茶 / 一斤饺子', vietnamese: 'Gọi món bằng tiếng Trung' }
    ]
  },
  {
    id: 'lesson-14',
    lessonNumber: 14,
    chineseTitle: '我看了一个电影',
    pinyinTitle: 'Wǒ kàn le yí ge diànyǐng',
    englishTitle: 'I Watched a Movie',
    title: 'Bài 14: Tôi đã xem một bộ phim',
    objectives: [
      'Sử dụng trợ từ động thái “了” (2) biểu thị hành động đã hoàn thành (我看了一个电影 / 吃了早饭)',
      'Nhận biết và sử dụng từ ly hợp cơ bản (离合词: 睡觉, 上课, 下班, 说话, 生病)',
      'Sử dụng phó từ phạm vi “都” (Đều / Tất cả) (我们都会写了 / 他们都忙了)',
      'Miêu tả các trải nghiệm đã qua trên chuyến tàu và cuộc sống học tập (上火车后, 听不见, 写汉字)'
    ],
    charactersFeatured: ['baijiayue', 'wangyifei', 'liuming', 'wangyixue'],
    warmUp: {
      instructions: 'Nối các từ vựng về trải nghiệm và học tập với hình ảnh:',
      items: [
        { id: 'w1', labelZh: '火车', pinyin: 'huǒchē', vietnamese: 'Tàu hỏa, xe lửa', icon: '🚆' },
        { id: 'w2', labelZh: '汉字', pinyin: 'hànzì', vietnamese: 'Chữ Hán', icon: '🈲' },
        { id: 'w3', labelZh: '听', pinyin: 'tīng', vietnamese: 'Nghe', icon: '👂' },
        { id: 'w4', labelZh: '说话', pinyin: 'shuōhuà', vietnamese: 'Nói chuyện, phát biểu', icon: '🗣️' },
        { id: 'w5', labelZh: '小学生', pinyin: 'xiǎoxuéshēng', vietnamese: 'Học sinh tiểu học', icon: '🧒' },
        { id: 'w6', labelZh: '中学生', pinyin: 'zhōngxuéshēng', vietnamese: 'Học sinh trung học', icon: '🧑' }
      ]
    },
    texts: [
      {
        id: 'l14-t1',
        title: 'Đoạn 1: Chuyến tàu hỏa trưa nay',
        situation: 'Học sinh kể lại những việc đã làm trên chuyến tàu hỏa',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '你们上火车后看见王老师了吗？', pinyin: 'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?', vietnamese: 'Lúc lên tàu xong các bạn có nhìn thấy cô giáo Vương không?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '没看见。中午车开后，有些人在看书，有些人睡觉了。', pinyin: 'Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.', vietnamese: 'Không thấy đâu. Buổi trưa tàu chạy xong, có người thì ngồi đọc sách, có người thì đã đi ngủ rồi.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '你呢？', pinyin: 'Nǐ ne?', vietnamese: 'Còn bạn thì sao?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我看了一个电影。', pinyin: 'Wǒ kàn le yí ge diànyǐng.', vietnamese: 'Mình đã xem xong một bộ phim.' }
        ],
        newWords: [
          { id: 231, hanzi: '火车', pinyin: 'huǒchē', sinoVietnamese: 'Hỏa xa', meaning: 'tàu hỏa, xe lửa', partOfSpeechLabel: 'Danh từ' },
          { id: 232, hanzi: '中午', pinyin: 'zhōngwǔ', sinoVietnamese: 'Trung ngọ', meaning: 'buổi trưa (11h - 13h)', partOfSpeechLabel: 'Danh từ' },
          { id: 233, hanzi: '开', pinyin: 'kāi', sinoVietnamese: 'Khai', meaning: 'mở, khởi hành (xe chạy)', partOfSpeechLabel: 'Động từ' },
          { id: 234, hanzi: '有些人', pinyin: 'yǒuxiē rén', sinoVietnamese: 'Hữu ta nhân', meaning: 'một số người, có người', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l14-t2',
        title: 'Đoạn 2: Các em đã biết viết những chữ Hán nào?',
        situation: 'Cô Vương kiểm tra chữ Hán của học sinh trong lớp',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你们会说汉语了，也会写汉字了吗？', pinyin: 'Nǐmen huì shuō Hànyǔ le, yě huì xiě hànzì le ma?', vietnamese: 'Các em đã biết nói tiếng Trung rồi, thế đã biết viết chữ Hán chưa?' },
          { speaker: '同学们', avatar: '🎓', hanzi: '我们都会写了。', pinyin: 'Wǒmen dōu huì xiě le.', vietnamese: 'Chúng em đều biết viết rồi ạ.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '老师，我听不见。', pinyin: 'Lǎoshī, wǒ tīng bu jiàn.', vietnamese: 'Thưa cô, em nghe không rõ ạ.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '请大家不要说话！请听老师的问题：你们都会写哪些汉字了？', pinyin: 'Qǐng dàjiā bú yào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē hànzì le?', vietnamese: 'Xin cả lớp đừng nói chuyện riêng! Hãy nghe câu hỏi của cô: Các em đều đã biết viết những chữ Hán nào rồi?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我会写这些字了，您看！', pinyin: 'Wǒ huì xiě zhèxiē zì le, nín kàn!', vietnamese: 'Em biết viết những chữ này rồi ạ, cô xem này!' }
        ],
        newWords: [
          { id: 235, hanzi: '汉语', pinyin: 'Hànyǔ', sinoVietnamese: 'Hán ngữ', meaning: 'tiếng Trung, tiếng Hán', partOfSpeechLabel: 'Danh từ' },
          { id: 236, hanzi: '写', pinyin: 'xiě', sinoVietnamese: 'Tả', meaning: 'viết', partOfSpeechLabel: 'Động từ' },
          { id: 237, hanzi: '汉字', pinyin: 'hànzì', sinoVietnamese: 'Hán tự', meaning: 'chữ Hán', partOfSpeechLabel: 'Danh từ' },
          { id: 238, hanzi: '听', pinyin: 'tīng', sinoVietnamese: 'Thính', meaning: 'nghe', partOfSpeechLabel: 'Động từ' },
          { id: 239, hanzi: '不要', pinyin: 'bú yào', sinoVietnamese: 'Bất yếu', meaning: 'đừng, không được', partOfSpeechLabel: 'Phó từ' },
          { id: 240, hanzi: '说话', pinyin: 'shuōhuà', sinoVietnamese: 'Thuyết thoại', meaning: 'nói chuyện', partOfSpeechLabel: 'Động từ' },
          { id: 241, hanzi: '哪些', pinyin: 'nǎxiē', sinoVietnamese: 'Nả ta', meaning: 'những cái nào, những ai', partOfSpeechLabel: 'Đại từ' },
          { id: 242, hanzi: '字', pinyin: 'zì', sinoVietnamese: 'Tự', meaning: 'chữ', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l14-t3',
        title: 'Đoạn 3: Hai đứa con bước vào cấp học mới',
        situation: 'Lưu Minh và Vương Nhất Tuyết bàn về việc học của các con',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '明年女儿上中学。', pinyin: 'Míngnián nǚ\'ér shàng zhōngxué.', vietnamese: 'Năm sau con gái lên cấp hai (trung học) rồi.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '对。儿子也上小学了。', pinyin: 'Duì. Érzi yě shàng xiǎoxué le.', vietnamese: 'Đúng vậy. Con trai cũng vào học tiểu học rồi.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我们家有了一个中学生。', pinyin: 'Wǒmen jiā yǒu le yí ge zhōngxuéshēng.', vietnamese: 'Nhà mình đã có một học sinh cấp hai.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '还有一个小学生。', pinyin: 'Hái yǒu yí ge xiǎoxuéshēng.', vietnamese: 'Lại còn có thêm một học sinh cấp một nữa.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '上学后，他们都忙了。', pinyin: 'Shàngxué hòu, tāmen dōu máng le.', vietnamese: 'Sau khi đi học, hai đứa nó đều sẽ bận rộn hơn.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '是的。太晚了，睡觉吧。', pinyin: 'Shì de. Tài wǎn le, shuìjiào ba.', vietnamese: 'Đúng thế. Muộn quá rồi, đi ngủ thôi em.' }
        ],
        newWords: [
          { id: 243, hanzi: '明年', pinyin: 'míngnián', sinoVietnamese: 'Minh niên', meaning: 'năm sau, sang năm', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 244, hanzi: '上', pinyin: 'shàng', sinoVietnamese: 'Thượng', meaning: 'lên, vào học', partOfSpeechLabel: 'Động từ' },
          { id: 245, hanzi: '中学', pinyin: 'zhōngxué', sinoVietnamese: 'Trung học', meaning: 'trường trung học', partOfSpeechLabel: 'Danh từ' },
          { id: 246, hanzi: '小学', pinyin: 'xiǎoxué', sinoVietnamese: 'Tiểu học', meaning: 'trường tiểu học', partOfSpeechLabel: 'Danh từ' },
          { id: 247, hanzi: '中学生', pinyin: 'zhōngxuéshēng', sinoVietnamese: 'Trung học sinh', meaning: 'học sinh trung học', partOfSpeechLabel: 'Danh từ' },
          { id: 248, hanzi: '小学生', pinyin: 'xiǎoxuéshēng', sinoVietnamese: 'Tiểu học sinh', meaning: 'học sinh tiểu học', partOfSpeechLabel: 'Danh từ' },
          { id: 249, hanzi: '上学', pinyin: 'shàngxué', sinoVietnamese: 'Thượng học', meaning: 'đi học, cắp sách tới trường', partOfSpeechLabel: 'Động từ' },
          { id: 250, hanzi: '都', pinyin: 'dōu', sinoVietnamese: 'Đô', meaning: 'đều, tất cả', partOfSpeechLabel: 'Phó từ' },
          { id: 251, hanzi: '晚', pinyin: 'wǎn', sinoVietnamese: 'Vãn', meaning: 'muộn, trễ', partOfSpeechLabel: 'Tính từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l14-g1',
        title: 'Trợ từ động thái “了” (2) (Biểu thị hành động đã hoàn thành)',
        formula: 'Chủ ngữ + Động từ + 了 + [Số lượng + Danh từ / Tân ngữ cụ thể]',
        explanation: 'Khi “了” đứng ngay sau động từ, nó biểu thị rằng hành động đó đã diễn ra và hoàn thành.\n• Phủ định của hành động đã hoàn thành dùng “没 / 没有 + Động từ” (KHÔNG được có 了 ở cuối câu phủ định).',
        examples: [
          { id: 'l14-e1', hanzi: '我看了一个电影。', pinyin: 'Wǒ kàn le yí ge diànyǐng.', vietnamese: 'Tôi đã xem một bộ phim.' },
          { id: 'l14-e2', hanzi: '我没看电影。', pinyin: 'Wǒ méi kàn diànyǐng.', vietnamese: 'Tôi đã không xem phim (không dùng 了).' }
        ],
        commonMistakes: [
          {
            incorrect: '我没看了电影。',
            incorrectPinyin: 'Wǒ méi kàn le diànyǐng.',
            correct: '我没看电影。',
            correctPinyin: 'Wǒ méi kàn diànyǐng.',
            reason: 'Trong câu phủ định với “没 / 没有”, tuyệt đối bỏ “了”.'
          }
        ]
      },
      {
        id: 'l14-g2',
        title: 'Phó từ phạm vi “都” (Đều / Tất cả)',
        formula: 'Chủ ngữ số nhiều + 都 + Động từ / Tính từ',
        explanation: '“都” dùng để tổng kết hoặc bao quát toàn bộ các đối tượng đứng trước nó.',
        examples: [
          { id: 'l14-e3', hanzi: '我们都会写了。', pinyin: 'Wǒmen dōu huì xiě le.', vietnamese: 'Chúng em đều biết viết rồi.' },
          { id: 'l14-e4', hanzi: '他们都忙了。', pinyin: 'Tāmen dōu máng le.', vietnamese: 'Họ đều bận rộn cả rồi.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l14-fb',
        wordBank: [
          { id: 'A', label: '了', pinyin: 'le', vietnamese: 'Đã (hoàn thành)' },
          { id: 'B', label: '都', pinyin: 'dōu', vietnamese: 'Đều' },
          { id: 'C', label: '不要', pinyin: 'bú yào', vietnamese: 'Đừng' },
          { id: 'D', label: '写', pinyin: 'xiě', vietnamese: 'Viết' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '我看了____一个电影。',
            pinyin: 'Wǒ kàn ____ yí ge diànyǐng.',
            vietnamese: 'Tôi đã xem một bộ phim.',
            correctWordId: 'A',
            explanation: 'Trợ từ động thái hoàn thành “看了一个电影”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '请大家____说话！',
            pinyin: 'Qǐng dàjiā ____ shuōhuà!',
            vietnamese: 'Xin mọi người đừng nói chuyện!',
            correctWordId: 'C',
            explanation: 'Khuyên ngăn đừng làm gì dùng “不要”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '我们____会写汉字了。',
            pinyin: 'Wǒmen ____ huì xiě hànzì le.',
            vietnamese: 'Chúng tôi đều biết viết chữ Hán rồi.',
            correctWordId: 'B',
            explanation: 'Phó từ chỉ phạm vi “đều” là “都”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l14-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '一个电影', pinyin: 'yí ge diànyǐng' },
            { id: 'w2', hanzi: '看', pinyin: 'kàn' },
            { id: 'w3', hanzi: '我', pinyin: 'wǒ' },
            { id: 'w4', hanzi: '了', pinyin: 'le' }
          ],
          correctOrder: ['w3', 'w2', 'w4', 'w1'],
          fullSentence: '我看了一个电影。',
          pinyin: 'Wǒ kàn le yí ge diànyǐng.',
          vietnamese: 'Tôi đã xem một bộ phim.',
          explanation: 'Chủ ngữ [我] + Động từ [看] + 了 + Tân ngữ [一个电影].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Dùng trợ từ động thái 了 chỉ sự hoàn thành', example: '我看了一个电影。', vietnamese: 'Hành động đã hoàn tất' },
      { id: 'c2', topic: 'Dùng phó từ 都 tổng kết phạm vi', example: '我们都会写汉字了。', vietnamese: 'Đều, tất cả' },
      { id: 'c3', topic: 'Nhắc nhở lịch sự với 不要', example: '请不要说话！', vietnamese: 'Xin đừng...' }
    ]
  },
  {
    id: 'lesson-15',
    lessonNumber: 15,
    chineseTitle: '大兴机场见！',
    pinyinTitle: 'Dàxīng Jīchǎng jiàn!',
    englishTitle: 'See You at Daxing Airport!',
    title: 'Bài 15: Hẹn gặp ở sân bay Đại Hưng!',
    objectives: [
      'Sử dụng câu phức liên hợp đẳng lập “……，还/也……” (好吃，还很好看 / 也喜欢做)',
      'Nói về chuyến bay, du lịch và đón tiễn tại sân bay (飞机, 几个小时, 机场接你们)',
      'Nắm vững phong tục hiếu khách và lời mời ẩm thực Trung Hoa (大家多吃点儿)',
      'Tổng kết toàn bộ vốn từ vựng, ngữ pháp và mẫu câu chuẩn HSK 1'
    ],
    charactersFeatured: ['wangyifei', 'baijiayue', 'chentianzhong', 'annie', 'wangyixue'],
    warmUp: {
      instructions: 'Nối các từ du lịch, sân bay và ẩm thực với biểu tượng:',
      items: [
        { id: 'w1', labelZh: '飞机', pinyin: 'fēijī', vietnamese: 'Máy bay', icon: '✈️' },
        { id: 'w2', labelZh: '机场', pinyin: 'jīchǎng', vietnamese: 'Sân bay, phi trường', icon: '🛫' },
        { id: 'w3', labelZh: '北京', pinyin: 'Běijīng', vietnamese: 'Bắc Kinh', icon: '🏯' },
        { id: 'w4', labelZh: '好玩儿', pinyin: 'hǎowánr', vietnamese: 'Vui vẻ, thú vị', icon: '🎡' },
        { id: 'w5', labelZh: '早', pinyin: 'zǎo', vietnamese: 'Sớm', icon: '🌅' },
        { id: 'w6', labelZh: '男朋友', pinyin: 'nánpéngyou', vietnamese: 'Bạn trai', icon: '👦' }
      ]
    },
    texts: [
      {
        id: 'l15-t1',
        title: 'Đoạn 1: Bữa tiệc chia tay ấm cúng',
        situation: 'Cô Vương thết đãi các học sinh bữa tiệc món ăn Trung Quốc ngon miệng',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你们爱吃哪个菜？', pinyin: 'Nǐmen ài chī nǎge cài?', vietnamese: 'Các em thích ăn món nào nhất?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '我喜欢这个，也喜欢那个。', pinyin: 'Wǒ xǐhuan zhè ge, yě xǐhuan nà ge.', vietnamese: 'Em thích món này, mà cũng mê cả món kia nữa.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '这些菜都好吃，还很好看。', pinyin: 'Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.', vietnamese: 'Những món này đều ngon, lại còn trình bày rất đẹp mắt nữa ạ.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我爱吃中国菜，也喜欢做。大家多吃点儿。', pinyin: 'Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.', vietnamese: 'Cô mê món ăn Trung Quốc, cũng rất thích tự nấu. Mọi người ăn nhiều vào nhé.' }
        ],
        newWords: [
          { id: 252, hanzi: '爱', pinyin: 'ài', sinoVietnamese: 'Ái', meaning: 'yêu, thích, chuộng', partOfSpeechLabel: 'Động từ' },
          { id: 253, hanzi: '多', pinyin: 'duō', sinoVietnamese: 'Đa', meaning: 'nhiều, làm nhiều hơn', partOfSpeechLabel: 'Phó từ' }
        ]
      },
      {
        id: 'l15-t2',
        title: 'Đoạn 2: Lên kế hoạch du lịch Bắc Kinh',
        situation: 'Các bạn sinh viên chia sẻ về kế hoạch đến Bắc Kinh thăm quan',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你们都想去哪儿？', pinyin: 'Nǐmen dōu xiǎng qù nǎr?', vietnamese: 'Kỳ nghỉ này các em đều muốn đi đâu chơi?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '去年我和男朋友去了西安，今年我想去北京。', pinyin: 'Qùnián wǒ hé nánpéngyou qù le Xī\'ān, jīnnián wǒ xiǎng qù Běijīng.', vietnamese: 'Năm ngoái em cùng bạn trai đã đến Tây An, năm nay em muốn đến Bắc Kinh.' },
          { speaker: '安妮', avatar: '👩', hanzi: '前几年我去了西安，非常好玩儿。今年我也想去北京。', pinyin: 'Qián jǐ nián wǒ qù le Xī\'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.', vietnamese: 'Mấy năm trước em cũng từng đến Tây An rồi, cực kỳ thú vị luôn. Năm nay em cũng muốn đến Bắc Kinh.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我和李文都是北京人，北京非常漂亮。', pinyin: 'Wǒ hé Lǐ Wén dōu shì Běijīng rén, Běijīng fēicháng piàoliang.', vietnamese: 'Cô và Lý Văn đều là người Bắc Kinh đấy, Bắc Kinh đẹp lắm.' }
        ],
        newWords: [
          { id: 254, hanzi: '去年', pinyin: 'qùnián', sinoVietnamese: 'Khứ niên', meaning: 'năm ngoái', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 255, hanzi: '男朋友', pinyin: 'nánpéngyou', sinoVietnamese: 'Nam bằng hữu', meaning: 'bạn trai', partOfSpeechLabel: 'Danh từ' },
          { id: 256, hanzi: '西安', pinyin: 'Xī\'ān', sinoVietnamese: 'Tây An', meaning: 'thành phố Tây An', partOfSpeechLabel: 'Danh từ riêng' },
          { id: 257, hanzi: '好玩儿', pinyin: 'hǎowánr', sinoVietnamese: 'Hảo ngoạn nhi', meaning: 'vui vẻ, thú vị', partOfSpeechLabel: 'Tính từ' },
          { id: 258, hanzi: '北京', pinyin: 'Běijīng', sinoVietnamese: 'Bắc Kinh', meaning: 'thủ đô Bắc Kinh', partOfSpeechLabel: 'Danh từ riêng' }
        ]
      },
      {
        id: 'l15-t3',
        title: 'Đoạn 3: Hẹn gặp nhau ở Sân bay Quốc tế Đại Hưng',
        situation: 'Cô Vương hẹn các học sinh sẽ gặp nhau và đón tại sân bay Bắc Kinh',
        sceneType: 'overseas',
        lines: [
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '你们的飞机到北京要几个小时？', pinyin: 'Nǐmen de fēijī dào Běijīng yào jǐ ge xiǎoshí?', vietnamese: 'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng đồng hồ?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '九个小时。', pinyin: 'Jiǔ ge xiǎoshí.', vietnamese: 'Dạ 9 tiếng đồng hồ ạ.' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。', pinyin: 'Wǒ jiārén dōu zài Běijīng, xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.', vietnamese: 'Gia đình cô đều ở Bắc Kinh cả, Chủ nhật chị gái cô cũng rảnh rỗi, chị ấy có thể ra sân bay đón các em, các em cũng có thể đến ở nhà cô.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我们星期日早上八点到大兴机场，早不早？', pinyin: 'Wǒmen xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?', vietnamese: 'Bọn em sáng Chủ nhật 8 giờ đến Sân bay Đại Hưng, có sớm quá không cô?' },
          { speaker: '王一飞', avatar: '👩‍🏫', hanzi: '不早。', pinyin: 'Bù zǎo.', vietnamese: 'Không sớm đâu em.' },
          { speaker: '同学们', avatar: '🎓', hanzi: '谢谢老师！那我们和您姐姐在大兴机场见！', pinyin: 'Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!', vietnamese: 'Chúng em cảm ơn cô nhiều lắm ạ! Vậy hẹn gặp cô và chị gái ở Sân bay Đại Hưng nhé!' }
        ],
        newWords: [
          { id: 259, hanzi: '飞机', pinyin: 'fēijī', sinoVietnamese: 'Phi cơ', meaning: 'máy bay', partOfSpeechLabel: 'Danh từ' },
          { id: 260, hanzi: '小时', pinyin: 'xiǎoshí', sinoVietnamese: 'Tiểu thời', meaning: 'tiếng đồng hồ, giờ đồng hồ', partOfSpeechLabel: 'Danh từ' },
          { id: 261, hanzi: '家人', pinyin: 'jiārén', sinoVietnamese: 'Gia nhân', meaning: 'người nhà, người thân', partOfSpeechLabel: 'Danh từ' },
          { id: 262, hanzi: '时间', pinyin: 'shíjiān', sinoVietnamese: 'Thời gian', meaning: 'thời gian, thời giờ rảnh', partOfSpeechLabel: 'Danh từ' },
          { id: 263, hanzi: '机场', pinyin: 'jīchǎng', sinoVietnamese: 'Cơ trường', meaning: 'sân bay, phi trường', partOfSpeechLabel: 'Danh từ' },
          { id: 264, hanzi: '接', pinyin: 'jiē', sinoVietnamese: 'Tiếp', meaning: 'đón, đón rước', partOfSpeechLabel: 'Động từ' },
          { id: 265, hanzi: '住', pinyin: 'zhù', sinoVietnamese: 'Trú', meaning: 'ở, cư trú', partOfSpeechLabel: 'Động từ' },
          { id: 266, hanzi: '大兴', pinyin: 'Dàxīng', sinoVietnamese: 'Đại Hưng', meaning: 'Đại Hưng (quận và sân bay ở Bắc Kinh)', partOfSpeechLabel: 'Danh từ riêng' },
          { id: 267, hanzi: '早', pinyin: 'zǎo', sinoVietnamese: 'Tảo', meaning: 'sớm', partOfSpeechLabel: 'Tính từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l15-g1',
        title: 'Câu phức liên hợp đẳng lập “……，还 / 也……”',
        formula: 'Vế 1 + ，+ (还 / 也) + Vế 2',
        explanation: 'Dùng để bổ sung thêm tính chất hoặc thông tin cùng loại, tương đương với "vừa... vừa..." hoặc "...lại còn...".',
        examples: [
          { id: 'l15-e1', hanzi: '这些菜都好吃，还很好看。', pinyin: 'Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.', vietnamese: 'Những món này đều ngon, lại còn rất đẹp mắt.' },
          { id: 'l15-e2', hanzi: '我爱吃中国菜，也喜欢做。', pinyin: 'Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò.', vietnamese: 'Tôi thích ăn món Trung Quốc, và cũng thích tự nấu.' }
        ]
      },
      {
        id: 'l15-g2',
        title: 'Tổng kết: Trật tự ngữ pháp nòng cốt HSK 1',
        formula: '[Chủ ngữ] + [Trạng ngữ thời gian] + [Trạng ngữ địa điểm 在+Nơi] + [Phó từ] + [Động từ] + [Tân ngữ]',
        explanation: 'Khung cấu trúc hoàn chỉnh của câu đơn tiếng Trung:\n• Ví dụ: 我们 (S) + 星期日早上八点 (Thời gian) + 在大兴机场 (Địa điểm) + 见 (V)！',
        examples: [
          { id: 'l15-e3', hanzi: '我们星期日早上八点在大兴机场见！', pinyin: 'Wǒmen xīngqīrì zǎoshang bā diǎn zài Dàxīng Jīchǎng jiàn!', vietnamese: 'Chúng mình gặp nhau ở sân bay Đại Hưng lúc 8 giờ sáng Chủ nhật nhé!' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l15-fb',
        wordBank: [
          { id: 'A', label: '机场', pinyin: 'jīchǎng', vietnamese: 'Sân bay' },
          { id: 'B', label: '小时', pinyin: 'xiǎoshí', vietnamese: 'Tiếng đồng hồ' },
          { id: 'C', label: '接', pinyin: 'jiē', vietnamese: 'Đón' },
          { id: 'D', label: '好吃', pinyin: 'hǎochī', vietnamese: 'Ngon' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '飞机到北京要九个____。',
            pinyin: 'Fēijī dào Běijīng yào jiǔ ge ____.',
            vietnamese: 'Máy bay đến Bắc Kinh mất 9 tiếng đồng hồ.',
            correctWordId: 'B',
            explanation: 'Khoảng thời gian tính bằng giờ dùng “小时”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '她可以去____接你们。',
            pinyin: 'Tā kěyǐ qù ____ jiē nǐmen.',
            vietnamese: 'Chị ấy có thể ra sân bay đón các bạn.',
            correctWordId: 'A',
            explanation: 'Sân bay là “机场”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '这些中国菜真____！',
            pinyin: 'Zhèxiē Zhōngguó cài zhēn ____!',
            vietnamese: 'Những món ăn Trung Quốc này ngon thật đấy!',
            correctWordId: 'D',
            explanation: 'Món ăn ngon dùng “好吃”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l15-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '在大兴机场', pinyin: 'zài Dàxīng Jīchǎng' },
            { id: 'w2', hanzi: '见', pinyin: 'jiàn' },
            { id: 'w3', hanzi: '我们', pinyin: 'wǒmen' }
          ],
          correctOrder: ['w3', 'w1', 'w2'],
          fullSentence: '我们在大兴机场见。',
          pinyin: 'Wǒmen zài Dàxīng Jīchǎng jiàn.',
          vietnamese: 'Chúng mình gặp nhau ở sân bay Đại Hưng nhé.',
          explanation: 'Chủ ngữ [我们] + Nơi chốn [在大兴机场] + Động từ [见].'
        }
      ]
    },
    bonusContent: {
      title: 'Bắc Kinh chào đón bạn & Sân bay Quốc tế Đại Hưng (北京欢迎你)',
      chineseTitle: '北京欢迎你——大兴国际机场',
      category: 'Văn hóa & Đất nước',
      content: 'Sân bay Quốc tế Đại Hưng Bắc Kinh (PKX) là một trong những công trình kiến trúc kỳ vĩ nhất thế giới do nữ kiến trúc sư Zaha Hadid thiết kế mang hình chim Phượng Hoàng lửa sải cánh.',
      bulletPoints: [
        'Là sân bay đơn thể lớn nhất thế giới với công nghệ 5G và nhận diện khuôn mặt tự động.',
        'Chào mừng các bạn đã hoàn thành trọn vẹn 15 bài học trong giáo trình 《新HSK教程 1》!'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Đặt câu phức liên hợp với 还 / 也', example: '好吃，还很好看。', vietnamese: 'Vừa ngon vừa đẹp' },
      { id: 'c2', topic: 'Nói về việc đi máy bay và du lịch', example: '飞机要九个小时 / 去机场接你们', vietnamese: 'Máy bay và sân bay' },
      { id: 'c3', topic: 'Tự tin hoàn thành HSK 1', example: '我们在大兴机场见！', vietnamese: 'Tổng kết toàn diện HSK 1' }
    ]
  }
];
