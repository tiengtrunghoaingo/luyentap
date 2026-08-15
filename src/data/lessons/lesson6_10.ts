import { LessonData } from '../../types';

export const LESSONS_6_TO_10: LessonData[] = [
  {
    id: 'lesson-6',
    lessonNumber: 6,
    chineseTitle: '你的手机号是多少？',
    pinyinTitle: 'Nǐ de shǒujī hào shì duōshao?',
    englishTitle: "What's Your Cell Phone Number?",
    title: 'Bài 6: Số điện thoại của bạn là bao nhiêu?',
    objectives: [
      'Hỏi và đọc số điện thoại chính xác (chữ số 1 đọc là “yāo”)',
      'Sử dụng động từ năng nguyện “想” biểu thị mong muốn, dự định (我想去超市买东西)',
      'Sử dụng câu liên động chỉ mục đích và phương thức di chuyển (去超市买牛奶 / 坐出租车去)',
      'Sử dụng đại từ nghi vấn “怎么” để hỏi cách thức tiến hành hành động (我们怎么去？)'
    ],
    charactersFeatured: ['baijiayue', 'chentianzhong', 'liuxiaoxue', 'wangyixue'],
    warmUp: {
      instructions: 'Nối các từ vựng mua sắm, phương tiện và đồ ăn với biểu tượng tương ứng:',
      items: [
        { id: 'w1', labelZh: '手机', pinyin: 'shǒujī', vietnamese: 'Điện thoại di động', icon: '📱' },
        { id: 'w2', labelZh: '超市', pinyin: 'chāoshì', vietnamese: 'Siêu thị', icon: '🛒' },
        { id: 'w3', labelZh: '牛奶', pinyin: 'niúnǎi', vietnamese: 'Sữa bò', icon: '🥛' },
        { id: 'w4', labelZh: '出租车', pinyin: 'chūzūchē', vietnamese: 'Xe taxi', icon: '🚕' },
        { id: 'w5', labelZh: '米饭', pinyin: 'mǐfàn', vietnamese: 'Cơm trắng', icon: '🍚' },
        { id: 'w6', labelZh: '包子', pinyin: 'bāozi', vietnamese: 'Bánh bao', icon: '🥟' }
      ]
    },
    texts: [
      {
        id: 'l6-t1',
        title: 'Đoạn 1: Trao đổi số điện thoại liên lạc',
        situation: 'Trần Thiên Trung và Bạch Gia Nguyệt lưu số điện thoại của nhau',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '家月，你的手机号是多少？', pinyin: 'Jiāyuè, nǐ de shǒujī hào shì duōshao?', vietnamese: 'Gia Nguyệt, số điện thoại của bạn là bao nhiêu?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我的手机号是 +33 601493190。', pinyin: 'Wǒ de shǒujī hào shì jiā sān-sān, liù líng yāo sì jiǔ sān yāo jiǔ líng.', vietnamese: 'Số điện thoại của mình là +33 601493190.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '我的手机号是 +86 13552721160。', pinyin: 'Wǒ de shǒujī hào shì jiā bā-liù, yāo sān wǔ wǔ èr qī èr yāo yāo liù líng.', vietnamese: 'Số của mình là +86 13552721160.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '好的。', pinyin: 'Hǎo de.', vietnamese: 'Được rồi nhé.' }
        ],
        newWords: [
          { id: 82, hanzi: '手机', pinyin: 'shǒujī', sinoVietnamese: 'Thủ cơ', meaning: 'điện thoại di động', partOfSpeechLabel: 'Danh từ' },
          { id: 83, hanzi: '号', pinyin: 'hào', sinoVietnamese: 'Hiệu', meaning: 'số, mã số', partOfSpeechLabel: 'Danh từ' }
        ],
        tip: {
          title: 'Cách đọc số “1” trong số điện thoại (yāo)',
          content: 'Khi đọc số điện thoại, số phòng, số xe buýt, số “1” thường được phát âm là “yāo” thay vì “yī” để tránh nhầm lẫn về âm thanh với số “7” (qī).'
        }
      },
      {
        id: 'l6-t2',
        title: 'Đoạn 2: Đi siêu thị mua đồ',
        situation: 'Trần Thiên Trung hỏi về kế hoạch ngày mai của Bạch Gia Nguyệt',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '家月，明天你去哪儿？', pinyin: 'Jiāyuè, míngtiān nǐ qù nǎr?', vietnamese: 'Gia Nguyệt, ngày mai bạn đi đâu?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我想去超市买东西。', pinyin: 'Wǒ xiǎng qù chāoshì mǎi dōngxi.', vietnamese: 'Mình muốn đi siêu thị mua ít đồ.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '你去超市买什么？', pinyin: 'Nǐ qù chāoshì mǎi shénme?', vietnamese: 'Bạn đến siêu thị mua cái gì?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我想买些牛奶。', pinyin: 'Wǒ xiǎng mǎi xiē niúnǎi.', vietnamese: 'Mình muốn mua một ít sữa tươi.' }
        ],
        newWords: [
          { id: 84, hanzi: '去', pinyin: 'qù', sinoVietnamese: 'Khứ', meaning: 'đi', partOfSpeechLabel: 'Động từ' },
          { id: 85, hanzi: '哪儿', pinyin: 'nǎr', sinoVietnamese: 'Nả nhi', meaning: 'ở đâu, đâu', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 86, hanzi: '超市', pinyin: 'chāoshì', sinoVietnamese: 'Siêu thị', meaning: 'siêu thị', partOfSpeechLabel: 'Danh từ' },
          { id: 87, hanzi: '买', pinyin: 'mǎi', sinoVietnamese: 'Mãi', meaning: 'mua', partOfSpeechLabel: 'Động từ' },
          { id: 88, hanzi: '东西', pinyin: 'dōngxi', sinoVietnamese: 'Đông tây', meaning: 'đồ đạc, đồ vật', partOfSpeechLabel: 'Danh từ' },
          { id: 89, hanzi: '牛奶', pinyin: 'niúnǎi', sinoVietnamese: 'Ngưu nãi', meaning: 'sữa bò, sữa tươi', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l6-t3',
        title: 'Đoạn 3: Đi ăn tối bằng taxi',
        situation: 'Gia đình Vương Nhất Tuyết bàn nhau đi ăn tối cuối tuần',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '星期天我们去哪儿吃晚饭？', pinyin: 'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?', vietnamese: 'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '我还想去西安饭店。那边的包子非常好吃，我想吃包子。', pinyin: 'Wǒ hái xiǎng qù Xī\'ān Fàndiàn. Nàbian de bāozi fēicháng hǎochī, wǒ xiǎng chī bāozi.', vietnamese: 'Anh vẫn muốn đến quán ăn Tây An. Bánh bao ở đó ngon tuyệt cú mèo, anh muốn ăn bánh bao.' },
          { speaker: '刘小雪', avatar: '👧', hanzi: '妈妈，我想吃米饭，不想吃包子。', pinyin: 'Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.', vietnamese: 'Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao đâu.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '好的。我们怎么去？', pinyin: 'Hǎo de. Wǒmen zěnme qù?', vietnamese: 'Được rồi. Nhà mình đi bằng cách nào đây?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '坐出租车去。', pinyin: 'Zuò chūzūchē qù.', vietnamese: 'Đi xe taxi nhé.' }
        ],
        newWords: [
          { id: 90, hanzi: '吃', pinyin: 'chī', sinoVietnamese: 'Cật', meaning: 'ăn', partOfSpeechLabel: 'Động từ' },
          { id: 91, hanzi: '晚饭', pinyin: 'wǎnfàn', sinoVietnamese: 'Vãn phạn', meaning: 'bữa tối, cơm tối', partOfSpeechLabel: 'Danh từ' },
          { id: 92, hanzi: '饭店', pinyin: 'fàndiàn', sinoVietnamese: 'Phạn điếm', meaning: 'nhà hàng, quán ăn, khách sạn', partOfSpeechLabel: 'Danh từ' },
          { id: 93, hanzi: '包子', pinyin: 'bāozi', sinoVietnamese: 'Bao tử', meaning: 'bánh bao', partOfSpeechLabel: 'Danh từ' },
          { id: 94, hanzi: '好吃', pinyin: 'hǎochī', sinoVietnamese: 'Hảo cật', meaning: 'ngon miệng', partOfSpeechLabel: 'Tính từ' },
          { id: 95, hanzi: '米饭', pinyin: 'mǐfàn', sinoVietnamese: 'Mễ phạn', meaning: 'cơm tẻ, cơm trắng', partOfSpeechLabel: 'Danh từ' },
          { id: 96, hanzi: '怎么', pinyin: 'zěnme', sinoVietnamese: 'Chẩm ma', meaning: 'như thế nào, bằng cách nào', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 97, hanzi: '坐', pinyin: 'zuò', sinoVietnamese: 'Tọa', meaning: 'ngồi, đi (phương tiện công cộng)', partOfSpeechLabel: 'Động từ' },
          { id: 98, hanzi: '出租车', pinyin: 'chūzūchē', sinoVietnamese: 'Xuất tô xa', meaning: 'xe taxi', partOfSpeechLabel: 'Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l6-g1',
        title: 'Động từ năng nguyện “想” (Xiǎng - Muốn / Dự định)',
        formula: 'Khẳng định: S + 想 + Động từ | Phủ định: S + 不想 + Động từ',
        explanation: '“想” đứng trước động từ biểu thị ý muốn chủ quan, dự định hoặc mong muốn làm một việc gì đó.',
        examples: [
          { id: 'l6-e1', hanzi: '我想去超市买东西。', pinyin: 'Wǒ xiǎng qù chāoshì mǎi dōngxi.', vietnamese: 'Tôi muốn đi siêu thị mua đồ.' },
          { id: 'l6-e2', hanzi: '我不想吃包子。', pinyin: 'Wǒ bù xiǎng chī bāozi.', vietnamese: 'Tôi không muốn ăn bánh bao.' }
        ]
      },
      {
        id: 'l6-g2',
        title: 'Câu liên động chỉ mục đích & phương thức di chuyển (Serial Verb Sentences)',
        formula: '1. S + 去 / 来 + Địa điểm + Động từ (Mục đích) | 2. S + 坐 + Phương tiện + 去 + Địa điểm (Phương thức)',
        explanation: 'Trong câu liên động, hai hành động diễn ra liên tiếp:\n• Hành động 2 nêu mục đích của hành động 1 (ví dụ: 去超市 + 买牛奶).\n• Cụm “坐 + Phương tiện” đứng trước để chỉ cách thức di chuyển (ví dụ: 坐出租车去).',
        examples: [
          { id: 'l6-e3', hanzi: '我去超市买牛奶。', pinyin: 'Wǒ qù chāoshì mǎi niúnǎi.', vietnamese: 'Tôi đi siêu thị mua sữa.' },
          { id: 'l6-e4', hanzi: '我们坐出租车去饭店。', pinyin: 'Wǒmen zuò chūzūchē qù fàndiàn.', vietnamese: 'Chúng tôi đi taxi đến nhà hàng.' }
        ]
      },
      {
        id: 'l6-g3',
        title: 'Đại từ nghi vấn “怎么” (Zěnme - Hỏi cách thức)',
        formula: '怎么 + Động từ？',
        explanation: '“怎么” đứng trước động từ để hỏi về cách thức, phương thức thực hiện một hành động (như cách đi lại, cách nấu, cách đọc).',
        examples: [
          { id: 'l6-e5', hanzi: '我们怎么去？', pinyin: 'Wǒmen zěnme qù?', vietnamese: 'Chúng ta đi bằng cách nào?' },
          { id: 'l6-e6', hanzi: '这个汉字怎么读？', pinyin: 'Zhè ge hànzì zěnme dú?', vietnamese: 'Chữ Hán này đọc như thế nào?' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l6-fb',
        wordBank: [
          { id: 'A', label: '想', pinyin: 'xiǎng', vietnamese: 'Muốn' },
          { id: 'B', label: '怎么', pinyin: 'zěnme', vietnamese: 'Bằng cách nào / Thế nào' },
          { id: 'C', label: '坐', pinyin: 'zuò', vietnamese: 'Đi (xe)' },
          { id: 'D', label: '买', pinyin: 'mǎi', vietnamese: 'Mua' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '我____去超市买牛奶。',
            pinyin: 'Wǒ ____ qù chāoshì mǎi niúnǎi.',
            vietnamese: 'Tôi muốn đi siêu thị mua sữa bò.',
            correctWordId: 'A',
            explanation: 'Biểu thị mong muốn dùng “想”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '我们____去西安饭店？',
            pinyin: 'Wǒmen ____ qù Xī\'ān Fàndiàn?',
            vietnamese: 'Chúng ta đi đến nhà hàng Tây An bằng cách nào?',
            correctWordId: 'B',
            explanation: 'Hỏi phương thức đi lại dùng “怎么”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '我们____出租车去吧。',
            pinyin: 'Wǒmen ____ chūzūchē qù ba.',
            vietnamese: 'Chúng ta đi taxi đi.',
            correctWordId: 'C',
            explanation: 'Đi phương tiện công cộng dùng động từ “坐”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l6-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '去超市', pinyin: 'qù chāoshì' },
            { id: 'w2', hanzi: '我想', pinyin: 'wǒ xiǎng' },
            { id: 'w3', hanzi: '买东西', pinyin: 'mǎi dōngxi' }
          ],
          correctOrder: ['w2', 'w1', 'w3'],
          fullSentence: '我想去超市买东西。',
          pinyin: 'Wǒ xiǎng qù chāoshì mǎi dōngxi.',
          vietnamese: 'Tôi muốn đi siêu thị mua đồ.',
          explanation: 'Chủ ngữ + 想 + [去 + Địa điểm] + [Hành động mục đích].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Hỏi và đọc số điện thoại chuẩn xác', example: '你的手机号是多少？ +86 135...', vietnamese: 'Đọc số 1 là yāo' },
      { id: 'c2', topic: 'Biểu thị ý muốn với 想 / 不想', example: '我想去超市 / 我不想吃包子', vietnamese: 'Muốn và không muốn' },
      { id: 'c3', topic: 'Đặt câu hỏi phương thức với 怎么', example: '我们怎么去？➔ 坐出租车去。', vietnamese: 'Hỏi cách thức' }
    ]
  },
  {
    id: 'lesson-7',
    lessonNumber: 7,
    chineseTitle: '我晚上六点半下班',
    pinyinTitle: 'Wǒ wǎnshang liù diǎn bàn xiàbān',
    englishTitle: "I'll Finish Work at 6:30 in the Evening",
    title: 'Bài 7: Tối 6 rưỡi tôi tan làm',
    objectives: [
      'Nói giờ và phút trong tiếng Trung chính xác (点, 分, 半)',
      'Hỏi giờ hiện tại (现在几点？) và sắp xếp cuộc hẹn (我们下午两点见吧)',
      'Sử dụng trợ từ ngữ khí “吧” biểu thị sự gợi ý, thương lượng',
      'Vị trí của trạng ngữ thời gian trong câu (đầu câu hoặc sau chủ ngữ)',
      'Sử dụng trợ từ ngữ khí “呢” khẳng định sự thật khách quan'
    ],
    charactersFeatured: ['baijiayue', 'annie', 'wangyixue', 'liuming'],
    warmUp: {
      instructions: 'Nối các mốc thời gian trên đồng hồ với cách đọc tiếng Trung:',
      items: [
        { id: 'w1', labelZh: '8:40', pinyin: 'bā diǎn sìshí', vietnamese: '8 giờ 40 phút', icon: '🕗' },
        { id: 'w2', labelZh: '10:10', pinyin: 'shí diǎn shí fēn', vietnamese: '10 giờ 10 phút', icon: '🕙' },
        { id: 'w3', labelZh: '14:00', pinyin: 'xiàwǔ liǎng diǎn', vietnamese: '2 giờ chiều', icon: '🕑' },
        { id: 'w4', labelZh: '16:30', pinyin: 'sì diǎn bàn', vietnamese: '4 giờ rưỡi', icon: '🕟' },
        { id: 'w5', labelZh: '18:30', pinyin: 'liù diǎn bàn', vietnamese: '6 giờ rưỡi tối', icon: '🕡' },
        { id: 'w6', labelZh: '20:00', pinyin: 'wǎnshang bā diǎn', vietnamese: '8 giờ tối', icon: '🕗' }
      ]
    },
    texts: [
      {
        id: 'l7-t1',
        title: 'Đoạn 1: Bây giờ là mấy giờ? Lịch học hôm nay',
        situation: 'Bạch Gia Nguyệt và Annie xem đồng hồ và hẹn giờ gặp nhau',
        sceneType: 'overseas',
        lines: [
          { speaker: '安妮', avatar: '👩', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', vietnamese: 'Bây giờ là mấy giờ rồi?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '早上八点四十。', pinyin: 'Zǎoshang bā diǎn sìshí.', vietnamese: '8 giờ 40 phút sáng.' },
          { speaker: '安妮', avatar: '👩', hanzi: '我上午十点十分有课。', pinyin: 'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.', vietnamese: '10 giờ 10 phút sáng nay mình có tiết học.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '好的，我们下午两点见吧。', pinyin: 'Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.', vietnamese: 'Được rồi, vậy chiều 2 giờ chúng mình gặp nhau nhé.' }
        ],
        newWords: [
          { id: 99, hanzi: '现在', pinyin: 'xiànzài', sinoVietnamese: 'Hiện tại', meaning: 'bây giờ, hiện nay', partOfSpeechLabel: 'Danh từ thời gian' },
          { id: 100, hanzi: '点', pinyin: 'diǎn', sinoVietnamese: 'Điểm', meaning: 'giờ (trên đồng hồ)', partOfSpeechLabel: 'Lượng từ' },
          { id: 101, hanzi: '早上', pinyin: 'zǎoshang', sinoVietnamese: 'Tảo thượng', meaning: 'buổi sáng sớm (khoảng 6h - 8h)', partOfSpeechLabel: 'Danh từ' },
          { id: 102, hanzi: '上午', pinyin: 'shàngwǔ', sinoVietnamese: 'Thượng ngọ', meaning: 'buổi sáng (khoảng 8h - 12h)', partOfSpeechLabel: 'Danh từ' },
          { id: 103, hanzi: '分', pinyin: 'fēn', sinoVietnamese: 'Phân', meaning: 'phút', partOfSpeechLabel: 'Lượng từ' },
          { id: 104, hanzi: '有课', pinyin: 'yǒu kè', sinoVietnamese: 'Hữu khóa', meaning: 'có tiết học', partOfSpeechLabel: 'Cụm động từ' },
          { id: 105, hanzi: '下午', pinyin: 'xiàwǔ', sinoVietnamese: 'Hạ ngọ', meaning: 'buổi chiều', partOfSpeechLabel: 'Danh từ' },
          { id: 106, hanzi: '见', pinyin: 'jiàn', sinoVietnamese: 'Kiến', meaning: 'gặp gỡ', partOfSpeechLabel: 'Động từ' },
          { id: 107, hanzi: '吧', pinyin: 'ba', sinoVietnamese: 'Ba', meaning: 'nhé, đi, nha (gợi ý/thương lượng)', partOfSpeechLabel: 'Trợ từ' }
        ]
      },
      {
        id: 'l7-t2',
        title: 'Đoạn 2: Rủ bạn đi xem phim',
        situation: 'Bạch Gia Nguyệt rủ Annie đi xem phim chiều nay',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '下午我想去电影院看电影，你去吗？', pinyin: 'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?', vietnamese: 'Chiều nay mình muốn đến rạp xem phim, bạn có đi không?' },
          { speaker: '安妮', avatar: '👩', hanzi: '我不想去，下午还有事。', pinyin: 'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.', vietnamese: 'Mình không đi được rồi, chiều nay còn có việc.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '好的。明天呢？', pinyin: 'Hǎo de. Míngtiān ne?', vietnamese: 'Thế à. Còn ngày mai thì sao?' },
          { speaker: '安妮', avatar: '👩', hanzi: '我明天下午两点还上课呢，四点半下课。', pinyin: 'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.', vietnamese: 'Chiều mai 2 giờ mình vẫn còn phải học cơ, 4 rưỡi mới tan học.' }
        ],
        newWords: [
          { id: 108, hanzi: '电影院', pinyin: 'diànyǐngyuàn', sinoVietnamese: 'Điện ảnh viện', meaning: 'rạp chiếu phim', partOfSpeechLabel: 'Danh từ' },
          { id: 109, hanzi: '看', pinyin: 'kàn', sinoVietnamese: 'Khán', meaning: 'xem, nhìn, đọc', partOfSpeechLabel: 'Động từ' },
          { id: 110, hanzi: '电影', pinyin: 'diànyǐng', sinoVietnamese: 'Điện ảnh', meaning: 'phim, bộ phim', partOfSpeechLabel: 'Danh từ' },
          { id: 111, hanzi: '事', pinyin: 'shì', sinoVietnamese: 'Sự', meaning: 'việc, sự việc', partOfSpeechLabel: 'Danh từ' },
          { id: 112, hanzi: '上课', pinyin: 'shàngkè', sinoVietnamese: 'Thượng khóa', meaning: 'vào học, lên lớp', partOfSpeechLabel: 'Động từ' },
          { id: 113, hanzi: '半', pinyin: 'bàn', sinoVietnamese: 'Bán', meaning: 'nửa, rưỡi (30 phút)', partOfSpeechLabel: 'Số từ' },
          { id: 114, hanzi: '下课', pinyin: 'xiàkè', sinoVietnamese: 'Hạ khóa', meaning: 'tan học', partOfSpeechLabel: 'Động từ' }
        ]
      },
      {
        id: 'l7-t3',
        title: 'Đoạn 3: Cuộc gọi sau giờ làm việc',
        situation: 'Hai vợ chồng Lưu Minh và Vương Nhất Tuyết gọi điện bàn chuyện nấu bữa tối',
        sceneType: 'domestic',
        lines: [
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '喂，你在哪儿呢？', pinyin: 'Wèi, nǐ zài nǎr ne?', vietnamese: 'Alo, em đang ở đâu đấy?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我在家里呢。', pinyin: 'Wǒ zài jiā lǐ ne.', vietnamese: 'Em đang ở nhà.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我晚上六点半下班。', pinyin: 'Wǒ wǎnshang liù diǎn bàn xiàbān.', vietnamese: 'Tối 6 rưỡi em mới tan làm.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '我八点去医院上班。', pinyin: 'Wǒ bā diǎn qù yīyuàn shàngbān.', vietnamese: 'Anh 8 giờ phải đến bệnh viện trực ban.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '好的，你去店里买些菜吧。', pinyin: 'Hǎo de, nǐ qù diàn lǐ mǎi xiē cài ba.', vietnamese: 'Vâng, vậy anh ghé qua cửa hàng mua ít thức ăn nhé.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '好，我十分钟后去。', pinyin: 'Hǎo, wǒ shí fēnzhōng hòu qù.', vietnamese: 'Được, 10 phút nữa anh đi.' }
        ],
        newWords: [
          { id: 115, hanzi: '晚上', pinyin: 'wǎnshang', sinoVietnamese: 'Vãn thượng', meaning: 'buổi tối', partOfSpeechLabel: 'Danh từ' },
          { id: 116, hanzi: '医院', pinyin: 'yīyuàn', sinoVietnamese: 'Y viện', meaning: 'bệnh viện', partOfSpeechLabel: 'Danh từ' },
          { id: 117, hanzi: '上班', pinyin: 'shàngbān', sinoVietnamese: 'Thượng ban', meaning: 'đi làm, vào ca', partOfSpeechLabel: 'Động từ' },
          { id: 118, hanzi: '店', pinyin: 'diàn', sinoVietnamese: 'Điếm', meaning: 'cửa hàng, tiệm', partOfSpeechLabel: 'Danh từ' },
          { id: 119, hanzi: '分钟', pinyin: 'fēnzhōng', sinoVietnamese: 'Phân chung', meaning: 'phút (khoảng thời gian)', partOfSpeechLabel: 'Danh từ' },
          { id: 120, hanzi: '后', pinyin: 'hòu', sinoVietnamese: 'Hậu', meaning: 'sau, sau khi', partOfSpeechLabel: 'Phương vị từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l7-g1',
        title: 'Cách nói giờ và phút (点 & 分 & 半)',
        formula: 'Giờ + 点 + Phút + 分 (30 phút dùng 半)',
        explanation: '• Giờ đúng: 八点 (8 giờ), 两点 (2 giờ - chú ý dùng 两点 chứ không dùng 二点).\n• Giờ kèm phút: 八点四十 (8 giờ 40), 十点十分 (10 giờ 10 phút).\n• Giờ rưỡi: 六点半 (6 giờ rưỡi).',
        examples: [
          { id: 'l7-e1', hanzi: '现在早上八点四十。', pinyin: 'Xiànzài zǎoshang bā diǎn sìshí.', vietnamese: 'Bây giờ là 8 giờ 40 phút sáng.' },
          { id: 'l7-e2', hanzi: '四点半下课。', pinyin: 'Sì diǎn bàn xiàkè.', vietnamese: '4 giờ rưỡi tan học.' }
        ]
      },
      {
        id: 'l7-g2',
        title: 'Trợ từ ngữ khí “吧” (ba - Đề nghị / Rủ rê / Thương lượng)',
        formula: 'Câu trần thuật / Đề xuất + 吧。',
        explanation: 'Đặt ở cuối câu để biểu thị lời đề nghị, thỉnh cầu hoặc bàn bạc với giọng điệu nhẹ nhàng, lịch sự.',
        examples: [
          { id: 'l7-e3', hanzi: '我们下午两点见吧。', pinyin: 'Wǒmen xiàwǔ liǎng diǎn jiàn ba.', vietnamese: 'Chiều 2 giờ chúng mình gặp nhau nhé.' },
          { id: 'l7-e4', hanzi: '你去店里买些菜吧。', pinyin: 'Nǐ qù diàn lǐ mǎi xiē cài ba.', vietnamese: 'Anh ghé qua tiệm mua ít thức ăn đi nhé.' }
        ]
      },
      {
        id: 'l7-g3',
        title: 'Vị trí của trạng ngữ chỉ thời gian trong câu',
        formula: '1. Thời gian + Chủ ngữ + Vị ngữ | 2. Chủ ngữ + Thời gian + Vị ngữ',
        explanation: 'Trạng ngữ thời gian trong tiếng Trung LUÔN PHẢI đứng TRƯỚC ĐỘNG TỪ (có thể đặt ở đầu câu hoặc ngay sau chủ ngữ). TUYỆT ĐỐI KHÔNG đặt thời gian ở cuối câu như tiếng Việt/Anh.',
        examples: [
          { id: 'l7-e5', hanzi: '我晚上六点半下班。', pinyin: 'Wǒ wǎnshang liù diǎn bàn xiàbān.', vietnamese: 'Tối 6 rưỡi tôi tan làm (Thời gian đứng trước 下班).' },
          { id: 'l7-e6', hanzi: '下午我想去电影院。', pinyin: 'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn.', vietnamese: 'Buổi chiều tôi muốn đến rạp chiếu phim.' }
        ],
        commonMistakes: [
          {
            incorrect: '我下班晚上六点半。',
            incorrectPinyin: 'Wǒ xiàbān wǎnshang liù diǎn bàn.',
            correct: '我晚上六点半下班。',
            correctPinyin: 'Wǒ wǎnshang liù diǎn bàn xiàbān.',
            reason: 'Trạng ngữ chỉ thời gian không được để ở cuối câu. Phải đặt trước động từ.'
          }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l7-fb',
        wordBank: [
          { id: 'A', label: '几点', pinyin: 'jǐ diǎn', vietnamese: 'Mấy giờ' },
          { id: 'B', label: '吧', pinyin: 'ba', vietnamese: 'Nhé / Đi' },
          { id: 'C', label: '两点', pinyin: 'liǎng diǎn', vietnamese: '2 giờ' },
          { id: 'D', label: '半', pinyin: 'bàn', vietnamese: 'Rưỡi' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '现在____？现在八点四十。',
            pinyin: 'Xiànzài ____? Xiànzài bā diǎn sìshí.',
            vietnamese: 'Bây giờ mấy giờ? Bây giờ 8 giờ 40.',
            correctWordId: 'A',
            explanation: 'Hỏi giờ dùng “几点”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '我们下午____见吧。',
            pinyin: 'Wǒmen xiàwǔ ____ jiàn ba.',
            vietnamese: 'Chiều 2 giờ chúng mình gặp nhau nhé.',
            correctWordId: 'C',
            explanation: '2 giờ nói là “两点”, không dùng “二点”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '我们去电影院看电影____。',
            pinyin: 'Wǒmen qù diànyǐngyuàn kàn diànyǐng ____.',
            vietnamese: 'Chúng mình đến rạp xem phim đi nhé.',
            correctWordId: 'B',
            explanation: 'Đề nghị rủ rê kết thúc bằng “吧”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l7-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '下班', pinyin: 'xiàbān' },
            { id: 'w2', hanzi: '六点半', pinyin: 'liù diǎn bàn' },
            { id: 'w3', hanzi: '我', pinyin: 'wǒ' },
            { id: 'w4', hanzi: '晚上', pinyin: 'wǎnshang' }
          ],
          correctOrder: ['w3', 'w4', 'w2', 'w1'],
          fullSentence: '我晚上六点半下班。',
          pinyin: 'Wǒ wǎnshang liù diǎn bàn xiàbān.',
          vietnamese: 'Tối 6 rưỡi tôi tan làm.',
          explanation: 'Chủ ngữ [我] + Thời gian [晚上六点半] + Động từ [下班].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Nói và hỏi giờ giấc', example: '现在几点？➔ 早上八点四十 / 六点半', vietnamese: 'Hỏi và nói giờ phút' },
      { id: 'c2', topic: 'Dùng trợ từ 吧 để đưa ra đề xuất', example: '我们下午两点见吧。', vietnamese: 'Đưa ra lời rủ rê, hẹn' },
      { id: 'c3', topic: 'Đặt đúng vị trí trạng ngữ thời gian', example: '我八点去医院上班。', vietnamese: 'Thời gian trước động từ' }
    ]
  },
  {
    id: 'lesson-8',
    lessonNumber: 8,
    chineseTitle: '我爸爸也在医院工作',
    pinyinTitle: 'Wǒ bàba yě zài yīyuàn gōngzuò',
    englishTitle: 'My Father Also Works at a Hospital',
    title: 'Bài 8: Bố tôi cũng làm việc ở bệnh viện',
    objectives: [
      'Sử dụng các phương vị từ chỉ vị trí (上, 下, 里, 外, 前, 后)',
      'Sử dụng giới từ “在” biểu thị địa điểm xảy ra hành động (S + 在 + Nơi chốn + Động từ)',
      'Sử dụng động từ năng nguyện “能” biểu thị khả năng khách quan hoặc cho phép (两点你能到吗？)',
      'Miêu tả vị trí của đồ vật và thú cưng (小猫在桌子下)'
    ],
    charactersFeatured: ['baijiayue', 'chentianzhong', 'liuming', 'drhu'],
    warmUp: {
      instructions: 'Nối từ chỉ vị trí, nghề nghiệp và đồ vật với biểu tượng:',
      items: [
        { id: 'w1', labelZh: '小猫', pinyin: 'xiǎomāo', vietnamese: 'Mèo con', icon: '🐱' },
        { id: 'w2', labelZh: '桌子', pinyin: 'zhuōzi', vietnamese: 'Cái bàn', icon: '🪑' },
        { id: 'w3', labelZh: '学校', pinyin: 'xuéxiào', vietnamese: 'Trường học', icon: '🏫' },
        { id: 'w4', labelZh: '书店', pinyin: 'shūdiàn', vietnamese: 'Hiệu sách', icon: '📚' },
        { id: 'w5', labelZh: '医生', pinyin: 'yīshēng', vietnamese: 'Bác sĩ', icon: '🩺' },
        { id: 'w6', labelZh: '房间', pinyin: 'fángjiān', vietnamese: 'Căn phòng', icon: '🚪' }
      ]
    },
    texts: [
      {
        id: 'l8-t1',
        title: 'Đoạn 1: Chú mèo con dưới gầm bàn',
        situation: 'Trần Thiên Trung và Bạch Gia Nguyệt nhìn thấy chú mèo con xinh xắn',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '房间外有一只小猫。', pinyin: 'Fángjiān wài yǒu yì zhī xiǎomāo.', vietnamese: 'Bên ngoài phòng có một chú mèo con kìa.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我没看见，它在哪儿呢？', pinyin: 'Wǒ méi kànjiàn, tā zài nǎr ne?', vietnamese: 'Mình không nhìn thấy, nó ở đâu thế?' },
          { speaker: '陈天中', avatar: '👨', hanzi: '它在桌子下呢。', pinyin: 'Tā zài zhuōzi xià ne.', vietnamese: 'Nó đang ở dưới gầm bàn kìa.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '这只小猫真漂亮！', pinyin: 'Zhè zhī xiǎomāo zhēn piàoliang!', vietnamese: 'Chú mèo này xinh thật đấy!' }
        ],
        newWords: [
          { id: 121, hanzi: '房间', pinyin: 'fángjiān', sinoVietnamese: 'Phòng gian', meaning: 'căn phòng', partOfSpeechLabel: 'Danh từ' },
          { id: 122, hanzi: '外', pinyin: 'wài', sinoVietnamese: 'Ngoại', meaning: 'bên ngoài', partOfSpeechLabel: 'Phương vị từ' },
          { id: 123, hanzi: '只', pinyin: 'zhī', sinoVietnamese: 'Chích', meaning: 'con (lượng từ cho thú vật)', partOfSpeechLabel: 'Lượng từ' },
          { id: 124, hanzi: '小猫', pinyin: 'xiǎomāo', sinoVietnamese: 'Tiểu miêu', meaning: 'mèo con', partOfSpeechLabel: 'Danh từ' },
          { id: 125, hanzi: '看见', pinyin: 'kànjiàn', sinoVietnamese: 'Khán kiến', meaning: 'nhìn thấy, trông thấy', partOfSpeechLabel: 'Động từ' },
          { id: 126, hanzi: '在', pinyin: 'zài', sinoVietnamese: 'Tại', meaning: 'ở, tại', partOfSpeechLabel: 'Động từ / Giới từ' },
          { id: 127, hanzi: '桌子', pinyin: 'zhuōzi', sinoVietnamese: 'Trác tử', meaning: 'cái bàn', partOfSpeechLabel: 'Danh từ' },
          { id: 128, hanzi: '下', pinyin: 'xià', sinoVietnamese: 'Hạ', meaning: 'dưới, phía dưới', partOfSpeechLabel: 'Phương vị từ' },
          { id: 129, hanzi: '漂亮', pinyin: 'piàoliang', sinoVietnamese: 'Phiêu lượng', meaning: 'xinh xắn, đẹp đẽ', partOfSpeechLabel: 'Tính từ' }
        ]
      },
      {
        id: 'l8-t2',
        title: 'Đoạn 2: Hẹn gặp trước hiệu sách của trường',
        situation: 'Bạch Gia Nguyệt và Trần Thiên Trung thống nhất địa điểm gặp nhau',
        sceneType: 'overseas',
        lines: [
          { speaker: '陈天中', avatar: '👨', hanzi: '我们在哪儿见呢？', pinyin: 'Wǒmen zài nǎr jiàn ne?', vietnamese: 'Chúng mình gặp nhau ở đâu đây?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '在学校书店前见吧。', pinyin: 'Zài xuéxiào shūdiàn qián jiàn ba.', vietnamese: 'Gặp nhau trước hiệu sách của trường đi nhé.' },
          { speaker: '陈天中', avatar: '👨', hanzi: '好的。下午两点你能到吗？', pinyin: 'Hǎo de. Xiàwǔ liǎng diǎn nǐ néng dào ma?', vietnamese: 'Được rồi. Chiều 2 giờ bạn đến kịp không?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我能到。我在学校吃午饭。', pinyin: 'Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.', vietnamese: 'Mình đến được. Trưa mình ăn cơm ở trường luôn.' }
        ],
        newWords: [
          { id: 130, hanzi: '学校', pinyin: 'xuéxiào', sinoVietnamese: 'Học hiệu', meaning: 'trường học', partOfSpeechLabel: 'Danh từ' },
          { id: 131, hanzi: '书店', pinyin: 'shūdiàn', sinoVietnamese: 'Thư điếm', meaning: 'hiệu sách', partOfSpeechLabel: 'Danh từ' },
          { id: 132, hanzi: '前', pinyin: 'qián', sinoVietnamese: 'Tiền', meaning: 'phía trước, đằng trước', partOfSpeechLabel: 'Phương vị từ' },
          { id: 133, hanzi: '能', pinyin: 'néng', sinoVietnamese: 'Năng', meaning: 'có thể (khả năng khách quan)', partOfSpeechLabel: 'Động từ năng nguyện' },
          { id: 134, hanzi: '到', pinyin: 'dào', sinoVietnamese: 'Đáo', meaning: 'đến, tới', partOfSpeechLabel: 'Động từ' },
          { id: 135, hanzi: '午饭', pinyin: 'wǔfàn', sinoVietnamese: 'Ngọ phạn', meaning: 'cơm trưa, bữa trưa', partOfSpeechLabel: 'Danh từ' }
        ]
      },
      {
        id: 'l8-t3',
        title: 'Đoạn 3: Hai thế hệ bác sĩ tại bệnh viện',
        situation: 'Bác sĩ Lưu Minh trò chuyện với bác sĩ Hồ trong giờ trực',
        sceneType: 'domestic',
        lines: [
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '小胡，还没吃饭呢？', pinyin: 'Xiǎo Hú, hái méi chīfàn ne?', vietnamese: 'Cậu Hồ, vẫn chưa ăn cơm à?' },
          { speaker: '胡医生', avatar: '🥼', hanzi: '没吃呢。', pinyin: 'Méi chī ne.', vietnamese: 'Em chưa ăn anh ạ.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '大医院病人多，医生非常忙。', pinyin: 'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.', vietnamese: 'Bệnh viện lớn đông bệnh nhân, bác sĩ bận rộn vô cùng.' },
          { speaker: '胡医生', avatar: '🥼', hanzi: '是的。我爸爸也在医院工作，他也非常忙。', pinyin: 'Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.', vietnamese: 'Vâng ạ. Bố em cũng làm việc ở bệnh viện, ông cũng rất bận.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '你家有两个医生？', pinyin: 'Nǐ jiā yǒu liǎng ge yīshēng?', vietnamese: 'Nhà cậu có hai bác sĩ cơ à?' },
          { speaker: '胡医生', avatar: '🥼', hanzi: '对。', pinyin: 'Duì.', vietnamese: 'Dạ đúng rồi ạ.' }
        ],
        newWords: [
          { id: 136, hanzi: '大', pinyin: 'dà', sinoVietnamese: 'Đại', meaning: 'to, lớn', partOfSpeechLabel: 'Tính từ' },
          { id: 137, hanzi: '病人', pinyin: 'bìngrén', sinoVietnamese: 'Bệnh nhân', meaning: 'người bệnh, bệnh nhân', partOfSpeechLabel: 'Danh từ' },
          { id: 138, hanzi: '多', pinyin: 'duō', sinoVietnamese: 'Đa', meaning: 'nhiều', partOfSpeechLabel: 'Tính từ' },
          { id: 139, hanzi: '医生', pinyin: 'yīshēng', sinoVietnamese: 'Y sinh', meaning: 'bác sĩ', partOfSpeechLabel: 'Danh từ' },
          { id: 140, hanzi: '工作', pinyin: 'gōngzuò', sinoVietnamese: 'Công tác', meaning: 'làm việc / công việc', partOfSpeechLabel: 'Động từ / Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l8-g1',
        title: 'Phương vị từ (方位词 - Từ chỉ phương hướng & vị trí)',
        formula: 'Danh từ + [上 / 下 / 里 / 外 / 前 / 后]',
        explanation: 'Phương vị từ đứng sau danh từ để tạo thành cụm từ chỉ vị trí cụ thể:\n• 桌子上 (trên bàn), 桌子下 (dưới bàn)\n• 房间里 (trong phòng), 房间外 (ngoài phòng)\n• 书店前 (trước hiệu sách), 饭店后 (sau nhà hàng)',
        examples: [
          { id: 'l8-e1', hanzi: '小猫在桌子下。', pinyin: 'Xiǎomāo zài zhuōzi xià.', vietnamese: 'Mèo con ở dưới bàn.' },
          { id: 'l8-e2', hanzi: '在学校书店前见。', pinyin: 'Zài xuéxiào shūdiàn qián jiàn.', vietnamese: 'Gặp nhau ở trước hiệu sách của trường.' }
        ]
      },
      {
        id: 'l8-g2',
        title: 'Giới từ “在” chỉ địa điểm thực hiện hành động',
        formula: 'Chủ ngữ + 在 + Địa điểm / Vị trí + Động từ',
        explanation: 'Trong tiếng Trung, trạng ngữ chỉ địa điểm [在 + Nơi chốn] LUÔN ĐỨNG TRƯỚC ĐỘNG TỪ chính của câu (ngược với tiếng Việt là Động từ + ở đâu).',
        examples: [
          { id: 'l8-e3', hanzi: '我爸爸在医院工作。', pinyin: 'Wǒ bàba zài yīyuàn gōngzuò.', vietnamese: 'Bố tôi làm việc ở bệnh viện.' },
          { id: 'l8-e4', hanzi: '我在学校吃午饭。', pinyin: 'Wǒ zài xuéxiào chī wǔfàn.', vietnamese: 'Tôi ăn cơm trưa ở trường.' }
        ],
        commonMistakes: [
          {
            incorrect: '我爸爸工作在医院。',
            incorrectPinyin: 'Wǒ bàba gōngzuò zài yīyuàn.',
            correct: '我爸爸在医院工作。',
            correctPinyin: 'Wǒ bàba zài yīyuàn gōngzuò.',
            reason: 'Trạng ngữ nơi chốn [在 + 医院] bắt buộc phải đứng trước động từ [工作].'
          }
        ]
      },
      {
        id: 'l8-g3',
        title: 'Động từ năng nguyện “能” (Néng - Có thể)',
        formula: 'S + 能 / 不能 + Động từ',
        explanation: '“能” biểu thị năng lực vốn có hoặc điều kiện khách quan cho phép thực hiện một việc gì đó.',
        examples: [
          { id: 'l8-e5', hanzi: '下午两点你能到吗？', pinyin: 'Xiàwǔ liǎng diǎn nǐ néng dào ma?', vietnamese: 'Chiều 2 giờ bạn có thể đến được không?' },
          { id: 'l8-e6', hanzi: '我能到。', pinyin: 'Wǒ néng dào.', vietnamese: 'Tôi có thể đến được.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l8-fb',
        wordBank: [
          { id: 'A', label: '在', pinyin: 'zài', vietnamese: 'Ở / Tại' },
          { id: 'B', label: '下', pinyin: 'xià', vietnamese: 'Dưới' },
          { id: 'C', label: '能', pinyin: 'néng', vietnamese: 'Có thể' },
          { id: 'D', label: '只', pinyin: 'zhī', vietnamese: 'Con (lượng từ)' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '小猫在桌子____。',
            pinyin: 'Xiǎomāo zài zhuōzi ____.',
            vietnamese: 'Mèo con ở dưới bàn.',
            correctWordId: 'B',
            explanation: 'Dưới bàn dùng phương vị từ “下”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '我爸爸____医院工作。',
            pinyin: 'Wǒ bàba ____ yīyuàn gōngzuò.',
            vietnamese: 'Bố tôi làm việc ở bệnh viện.',
            correctWordId: 'A',
            explanation: 'Chỉ địa điểm hành động dùng giới từ “在”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '下午两点你____到吗？',
            pinyin: 'Xiàwǔ liǎng diǎn nǐ ____ dào ma?',
            vietnamese: 'Chiều 2 giờ bạn có thể đến được không?',
            correctWordId: 'C',
            explanation: 'Biểu thị khả năng cho phép dùng “能”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l8-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '在学校', pinyin: 'zài xuéxiào' },
            { id: 'w2', hanzi: '我', pinyin: 'wǒ' },
            { id: 'w3', hanzi: '吃午饭', pinyin: 'chī wǔfàn' }
          ],
          correctOrder: ['w2', 'w1', 'w3'],
          fullSentence: '我在学校吃午饭。',
          pinyin: 'Wǒ zài xuéxiào chī wǔfàn.',
          vietnamese: 'Tôi ăn cơm trưa ở trường.',
          explanation: 'Chủ ngữ [我] + [在学校] + Động từ [吃午饭].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Nắm vững phương vị từ', example: '桌子上/下，房间里/外，书店前/后', vietnamese: 'Các vị trí không gian' },
      { id: 'c2', topic: 'Sử dụng cấu trúc 在 + Địa điểm + Động từ', example: '我爸爸在医院工作。', vietnamese: 'Địa điểm trước hành động' },
      { id: 'c3', topic: 'Dùng động từ năng nguyện 能', example: '你能到吗？➔ 我能到。', vietnamese: 'Khả năng có thể' }
    ]
  },
  {
    id: 'lesson-9',
    lessonNumber: 9,
    chineseTitle: '我明天上午在学校学习',
    pinyinTitle: 'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí',
    englishTitle: "I'll Be Studying at School Tomorrow Morning",
    title: 'Bài 9: Sáng mai tôi học ở trường',
    objectives: [
      'Sử dụng câu tồn hiện (存现句) để biểu thị sự tồn tại của sự vật ở một nơi chốn (学校前边有一家电影院)',
      'Nắm vững quy tắc kết hợp: [Thời gian] + [Địa điểm] + [Động từ] trong câu tiếng Trung',
      'Sử dụng tiền tố “第” (dì) để biểu thị số thứ tự (第一, 第二)',
      'Miêu tả các hoạt động giải trí ngày cuối tuần (读书, 看电视, 唱歌, 玩)'
    ],
    charactersFeatured: ['baijiayue', 'liwen', 'wangyixue', 'yangtongle'],
    warmUp: {
      instructions: 'Nối các hoạt động giải trí và đồ vật thường gặp:',
      items: [
        { id: 'w1', labelZh: '学习', pinyin: 'xuéxí', vietnamese: 'Học tập', icon: '📖' },
        { id: 'w2', labelZh: '小狗', pinyin: 'xiǎogǒu', vietnamese: 'Chó con', icon: '🐶' },
        { id: 'w3', labelZh: '电视', pinyin: 'diànshì', vietnamese: 'Tivi, truyền hình', icon: '📺' },
        { id: 'w4', labelZh: '玩', pinyin: 'wán', vietnamese: 'Chơi', icon: '🎮' },
        { id: 'w5', labelZh: '椅子', pinyin: 'yǐzi', vietnamese: 'Cái ghế', icon: '🪑' },
        { id: 'w6', labelZh: '书', pinyin: 'shū', vietnamese: 'Sách', icon: '📚' }
      ]
    },
    texts: [
      {
        id: 'l9-t1',
        title: 'Đoạn 1: Rạp chiếu phim trước trường',
        situation: 'Lý Văn và Bạch Gia Nguyệt hẹn nhau xem phim trước cổng trường',
        sceneType: 'overseas',
        lines: [
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '学校前边有一家电影院。', pinyin: 'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.', vietnamese: 'Phía trước trường có một rạp chiếu phim.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '对。我们晚上去那个电影院看电影吧。', pinyin: 'Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.', vietnamese: 'Đúng rồi. Tối nay chúng mình đến rạp đó xem phim đi nhé.' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '好！我们七点在电影院外边见，好吗？', pinyin: 'Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?', vietnamese: 'Được! 7 giờ chúng mình gặp nhau ở bên ngoài rạp, được không?' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '好的，晚上七点见！', pinyin: 'Hǎo de, wǎnshang qī diǎn jiàn!', vietnamese: 'Được chứ, tối 7 giờ gặp nhé!' }
        ],
        newWords: [
          { id: 141, hanzi: '前边', pinyin: 'qiánbian', sinoVietnamese: 'Tiền biên', meaning: 'phía trước, đằng trước', partOfSpeechLabel: 'Phương vị từ' },
          { id: 142, hanzi: '家', pinyin: 'jiā', sinoVietnamese: 'Gia', meaning: 'nhà (lượng từ cho công ty, cửa hàng, rạp phim)', partOfSpeechLabel: 'Lượng từ' },
          { id: 143, hanzi: '外边', pinyin: 'wàibian', sinoVietnamese: 'Ngoại biên', meaning: 'bên ngoài, phía ngoài', partOfSpeechLabel: 'Phương vị từ' },
          { id: 144, hanzi: '好吗', pinyin: 'hǎo ma', sinoVietnamese: 'Hảo ma', meaning: 'được không, đồng ý chứ', partOfSpeechLabel: 'Cụm hỏi' }
        ]
      },
      {
        id: 'l9-t2',
        title: 'Đoạn 2: Cuốn sách tiếng Trung thứ hai',
        situation: 'Bạch Gia Nguyệt nhặt được cuốn sách trên ghế và trả lại cho Lý Văn',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '椅子上有一本中文书，那是谁的书？', pinyin: 'Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?', vietnamese: 'Trên ghế có một cuốn sách tiếng Trung, đó là sách của ai thế?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '是我的书，谢谢。这是我的第二本中文书。', pinyin: 'Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.', vietnamese: 'Là sách của tôi đấy, cảm ơn bạn nhé. Đây là cuốn sách tiếng Trung thứ hai của tôi.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '不客气。你明天上午在哪儿？', pinyin: 'Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?', vietnamese: 'Không có gì đâu. Sáng mai bạn ở đâu thế?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '我明天上午在学校学习。', pinyin: 'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.', vietnamese: 'Sáng mai tôi học ở trường.' }
        ],
        newWords: [
          { id: 145, hanzi: '椅子', pinyin: 'yǐzi', sinoVietnamese: 'Y tử', meaning: 'cái ghế', partOfSpeechLabel: 'Danh từ' },
          { id: 146, hanzi: '本', pinyin: 'běn', sinoVietnamese: 'Bản', meaning: 'cuốn, quyển (lượng từ sách)', partOfSpeechLabel: 'Lượng từ' },
          { id: 147, hanzi: '第', pinyin: 'dì', sinoVietnamese: 'Đệ', meaning: 'thứ (tiền tố số thứ tự)', partOfSpeechLabel: 'Tiền tố' },
          { id: 148, hanzi: '学习', pinyin: 'xuéxí', sinoVietnamese: 'Học tập', meaning: 'học tập, ôn bài', partOfSpeechLabel: 'Động từ' }
        ]
      },
      {
        id: 'l9-t3',
        title: 'Đoạn 3: Kế hoạch ngày thứ Bảy',
        situation: 'Vương Nhất Tuyết và Dương Đồng Lạc nói về hoạt động ngày thứ Bảy',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '明天星期六，你做什么？', pinyin: 'Míngtiān xīngqīliù, nǐ zuò shénme?', vietnamese: 'Ngày mai thứ Bảy, cậu làm gì thế?' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '我白天在家里读书，晚上和朋友们去外边唱歌。', pinyin: 'Wǒ báitiān zài jiā lǐ dúshū, wǎnshang hé péngyoumen qù wàibian chànggē.', vietnamese: 'Ban ngày tôi ở nhà đọc sách, tối thì đi ra ngoài hát hò cùng bạn bè.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '你唱歌很好听。', pinyin: 'Nǐ chànggē hěn hǎotīng.', vietnamese: 'Cậu hát hay lắm đấy.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '谢谢！您星期六做什么？', pinyin: 'Xièxie! Nín xīngqīliù zuò shénme?', vietnamese: 'Cảm ơn chị! Thứ Bảy chị làm gì ạ?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '我在家里做饭、看电视，和孩子们、小狗玩。', pinyin: 'Wǒ zài jiā lǐ zuòfàn, kàn diànshì, hé háizimen, xiǎogǒu wán.', vietnamese: 'Tôi ở nhà nấu nướng, xem tivi, chơi cùng các con và chú cún con.' },
          { speaker: '杨同乐', avatar: '👨‍💻', hanzi: '我也有一只小狗。', pinyin: 'Wǒ yě yǒu yì zhī xiǎogǒu.', vietnamese: 'Tôi cũng có một chú cún con đấy.' }
        ],
        newWords: [
          { id: 149, hanzi: '白天', pinyin: 'báitiān', sinoVietnamese: 'Bạch thiên', meaning: 'ban ngày', partOfSpeechLabel: 'Danh từ' },
          { id: 150, hanzi: '读书', pinyin: 'dúshū', sinoVietnamese: 'Độc thư', meaning: 'đọc sách, đi học', partOfSpeechLabel: 'Động từ' },
          { id: 151, hanzi: '唱歌', pinyin: 'chànggē', sinoVietnamese: 'Xướng ca', meaning: 'hát, ca hát', partOfSpeechLabel: 'Động từ' },
          { id: 152, hanzi: '好听', pinyin: 'hǎotīng', sinoVietnamese: 'Hảo thính', meaning: 'hay, êm tai (âm nhạc/giọng hát)', partOfSpeechLabel: 'Tính từ' },
          { id: 153, hanzi: '电视', pinyin: 'diànshì', sinoVietnamese: 'Điện thị', meaning: 'tivi, truyền hình', partOfSpeechLabel: 'Danh từ' },
          { id: 154, hanzi: '玩', pinyin: 'wán', sinoVietnamese: 'Ngoạn', meaning: 'chơi', partOfSpeechLabel: 'Động từ' },
          { id: 155, hanzi: '小狗', pinyin: 'xiǎogǒu', sinoVietnamese: 'Tiểu cẩu', meaning: 'chó con, cún con', partOfSpeechLabel: 'Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l9-g1',
        title: 'Câu tồn hiện biểu thị sự tồn tại (存现句)',
        formula: 'Địa điểm / Nơi chốn + 有 / 是 + Tân ngữ (Người / Vật)',
        explanation: 'Dùng để miêu tả ở một nơi nào đó có cái gì hoặc có ai tồn tại.\n• 学校前边有一家电影院 (Trước trường có một rạp phim).\n• 椅子上有一本中文书 (Trên ghế có một cuốn sách tiếng Trung).',
        examples: [
          { id: 'l9-e1', hanzi: '椅子上有一本书。', pinyin: 'Yǐzi shang yǒu yì běn shū.', vietnamese: 'Trên ghế có một cuốn sách.' },
          { id: 'l9-e2', hanzi: '学校前边有一家电影院。', pinyin: 'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.', vietnamese: 'Phía trước trường có một rạp chiếu phim.' }
        ]
      },
      {
        id: 'l9-g2',
        title: 'Trật tự Trạng ngữ thời gian và Nơi chốn trong câu',
        formula: 'Chủ ngữ + [Thời gian] + [在 + Nơi chốn] + Động từ',
        explanation: 'Quy tắc vàng của câu tiếng Trung: Thời gian đứng trước, rồi đến Nơi chốn, sau đó mới đến Động từ hành động.',
        examples: [
          { id: 'l9-e3', hanzi: '我明天上午在学校学习。', pinyin: 'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.', vietnamese: 'Sáng mai tôi học ở trường (Thời gian: 明天上午 ➔ Nơi chốn: 在学校 ➔ Động từ: 学习).' },
          { id: 'l9-e4', hanzi: '我白天在家里读书。', pinyin: 'Wǒ báitiān zài jiā lǐ dúshū.', vietnamese: 'Ban ngày tôi ở nhà đọc sách.' }
        ]
      },
      {
        id: 'l9-g3',
        title: 'Biểu thị số thứ tự với tiền tố “第” (dì)',
        formula: '第 + Số từ (+ Lượng từ + Danh từ)',
        explanation: 'Thêm chữ “第” trước con số để chuyển từ số đếm sang số thứ tự:\n• 第一 (thứ nhất, hạng nhất), 第二 (thứ hai), 第三 (thứ ba).\n• 第一本中文书 (cuốn sách tiếng Trung đầu tiên), 第二个学生 (học sinh thứ hai).',
        examples: [
          { id: 'l9-e5', hanzi: '这是我的第二本中文书。', pinyin: 'Zhè shì wǒ de dì-èr běn Zhōngwén shū.', vietnamese: 'Đây là cuốn sách tiếng Trung thứ hai của tôi.' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l9-fb',
        wordBank: [
          { id: 'A', label: '本', pinyin: 'běn', vietnamese: 'Cuốn / Quyển' },
          { id: 'B', label: '第二', pinyin: 'dì-èr', vietnamese: 'Thứ hai' },
          { id: 'C', label: '前边', pinyin: 'qiánbian', vietnamese: 'Phía trước' },
          { id: 'D', label: '学习', pinyin: 'xuéxí', vietnamese: 'Học tập' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '学校____有一家电影院。',
            pinyin: 'Xuéxiào ____ yǒu yì jiā diànyǐngyuàn.',
            vietnamese: 'Phía trước trường có một rạp chiếu phim.',
            correctWordId: 'C',
            explanation: 'Chỉ vị trí phía trước dùng “前边”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '椅子上有一____中文书。',
            pinyin: 'Yǐzi shang yǒu yì ____ Zhōngwén shū.',
            vietnamese: 'Trên ghế có một cuốn sách tiếng Trung.',
            correctWordId: 'A',
            explanation: 'Lượng từ của sách là “本”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '我明天上午在学校____。',
            pinyin: 'Wǒ míngtiān shàngwǔ zài xuéxiào ____.',
            vietnamese: 'Sáng mai tôi học tập ở trường.',
            correctWordId: 'D',
            explanation: 'Động từ phù hợp là “学习”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l9-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '学习', pinyin: 'xuéxí' },
            { id: 'w2', hanzi: '在学校', pinyin: 'zài xuéxiào' },
            { id: 'w3', hanzi: '明天上午', pinyin: 'míngtiān shàngwǔ' },
            { id: 'w4', hanzi: '我', pinyin: 'wǒ' }
          ],
          correctOrder: ['w4', 'w3', 'w2', 'w1'],
          fullSentence: '我明天上午在学校学习。',
          pinyin: 'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.',
          vietnamese: 'Sáng mai tôi học ở trường.',
          explanation: 'Chủ ngữ [我] + Thời gian [明天上午] + Nơi chốn [在学校] + Hành động [学习].'
        }
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Đặt câu tồn hiện', example: '学校前边有一家电影院。', vietnamese: 'Nơi chốn + 有 + Danh từ' },
      { id: 'c2', topic: 'Sắp xếp chuẩn trật tự Thời gian + Nơi chốn + Hành động', example: '我明天上午在学校学习。', vietnamese: 'Trật tự câu chuẩn' },
      { id: 'c3', topic: 'Dùng tiền tố 第 để nói số thứ tự', example: '第一 / 第二本中文书', vietnamese: 'Số thứ tự' }
    ]
  },
  {
    id: 'lesson-10',
    lessonNumber: 10,
    chineseTitle: '这儿的苹果真便宜！',
    pinyinTitle: 'Zhèr de píngguǒ zhēn piányi!',
    englishTitle: 'The Apples Here Are Really Affordable!',
    title: 'Bài 10: Táo ở đây rẻ thật đấy!',
    objectives: [
      'Hỏi giá và nói giá tiền bằng tiếng Trung (多少钱？ 苹果三块五一斤)',
      'Phân biệt đơn vị tiền tệ khẩu ngữ (块, 毛, 分) và văn viết (元, 角, 分)',
      'Sử dụng câu vị ngữ tính từ (这儿的水果真不少 / 衣服好看也不贵)',
      'Sử dụng đại từ nghi vấn “怎么样” để hỏi ý kiến đánh giá'
    ],
    charactersFeatured: ['baijiayue', 'liwen', 'wangyixue', 'liuming'],
    warmUp: {
      instructions: 'Nối các từ vựng mua sắm, hoa quả và trang phục:',
      items: [
        { id: 'w1', labelZh: '苹果', pinyin: 'píngguǒ', vietnamese: 'Quả táo', icon: '🍎' },
        { id: 'w2', labelZh: '便宜', pinyin: 'piányi', vietnamese: 'Rẻ, giá rẻ', icon: '🏷️' },
        { id: 'w3', labelZh: '衣服', pinyin: 'yīfu', vietnamese: 'Quần áo', icon: '👗' },
        { id: 'w4', labelZh: '穿', pinyin: 'chuān', vietnamese: 'Mặc (quần áo, giày)', icon: '👕' },
        { id: 'w5', labelZh: '杯子', pinyin: 'bēizi', vietnamese: 'Cốc, ly tách', icon: '🥛' },
        { id: 'w6', labelZh: '商店', pinyin: 'shāngdiàn', vietnamese: 'Cửa hàng, tiệm', icon: '🏪' }
      ]
    },
    texts: [
      {
        id: 'l10-t1',
        title: 'Đoạn 1: Mua cốc ở cửa hàng',
        situation: 'Bạch Gia Nguyệt đi mua cốc uống nước và hỏi giá',
        sceneType: 'overseas',
        lines: [
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '请问，有杯子吗？', pinyin: 'Qǐngwèn, yǒu bēizi ma?', vietnamese: 'Xin hỏi, ở đây có cốc không ạ?' },
          { speaker: '店员', avatar: '💁', hanzi: '有，杯子在这边。', pinyin: 'Yǒu, bēizi zài zhèbian.', vietnamese: 'Có chứ, cốc ở phía bên này.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '多少钱一个？', pinyin: 'Duōshao qián yí ge?', vietnamese: 'Bao nhiêu tiền một cái thế ạ?' },
          { speaker: '店员', avatar: '💁', hanzi: '这些五块钱一个，那些十块钱一个。', pinyin: 'Zhèxiē wǔ kuài qián yí ge, nàxiē shí kuài qián yí ge.', vietnamese: 'Những cái này 5 tệ một chiếc, những cái kia 10 tệ một chiếc.' },
          { speaker: '白家月', avatar: '👱‍♀️', hanzi: '我买这个吧。', pinyin: 'Wǒ mǎi zhè ge ba.', vietnamese: 'Tôi mua chiếc này nhé.' }
        ],
        newWords: [
          { id: 156, hanzi: '杯子', pinyin: 'bēizi', sinoVietnamese: 'Bôi tử', meaning: 'cốc, ly', partOfSpeechLabel: 'Danh từ' },
          { id: 157, hanzi: '钱', pinyin: 'qián', sinoVietnamese: 'Tiền', meaning: 'tiền', partOfSpeechLabel: 'Danh từ' },
          { id: 158, hanzi: '这些', pinyin: 'zhèxiē', sinoVietnamese: 'Giá ta', meaning: 'những cái này, chỗ này', partOfSpeechLabel: 'Đại từ' },
          { id: 159, hanzi: '块', pinyin: 'kuài', sinoVietnamese: 'Khối', meaning: 'đồng, tệ (khẩu ngữ của 元)', partOfSpeechLabel: 'Lượng từ tiền tệ' },
          { id: 160, hanzi: '那些', pinyin: 'nàxiē', sinoVietnamese: 'Na ta', meaning: 'những cái kia, chỗ kia', partOfSpeechLabel: 'Đại từ' }
        ]
      },
      {
        id: 'l10-t2',
        title: 'Đoạn 2: Táo ở đây rẻ thật đấy!',
        situation: 'Lý Văn mua táo tươi ở quầy hoa quả',
        sceneType: 'overseas',
        lines: [
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '这儿的水果真不少！', pinyin: 'Zhèr de shuǐguǒ zhēn bù shǎo!', vietnamese: 'Hoa quả ở đây thật là nhiều!' },
          { speaker: '店员', avatar: '💁', hanzi: '您想买什么？', pinyin: 'Nín xiǎng mǎi shénme?', vietnamese: 'Bác muốn mua gì ạ?' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '我想买两斤苹果。', pinyin: 'Wǒ xiǎng mǎi liǎng jīn píngguǒ.', vietnamese: 'Tôi muốn mua 2 cân (1 kg) táo.' },
          { speaker: '店员', avatar: '💁', hanzi: '苹果三块五一斤。这些七块二，七块钱吧。', pinyin: 'Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.', vietnamese: 'Táo 3 tệ rưỡi 1 cân (500g). Chỗ này 7 tệ 2 hào, tính bác 7 tệ thôi nhé.' },
          { speaker: '李文', avatar: '👨‍⚕️', hanzi: '好的，这儿的苹果真便宜！', pinyin: 'Hǎo de, zhèr de píngguǒ zhēn piányi!', vietnamese: 'Được quá, táo ở đây rẻ thật đấy!' }
        ],
        newWords: [
          { id: 161, hanzi: '这儿', pinyin: 'zhèr', sinoVietnamese: 'Giá nhi', meaning: 'ở đây, chỗ này', partOfSpeechLabel: 'Đại từ' },
          { id: 162, hanzi: '水果', pinyin: 'shuǐguǒ', sinoVietnamese: 'Thủy quả', meaning: 'hoa quả, trái cây', partOfSpeechLabel: 'Danh từ' },
          { id: 163, hanzi: '少', pinyin: 'shǎo', sinoVietnamese: 'Thiểu', meaning: 'ít', partOfSpeechLabel: 'Tính từ' },
          { id: 164, hanzi: '斤', pinyin: 'jīn', sinoVietnamese: 'Cân', meaning: 'cân Trung Quốc (bằng 500 gram)', partOfSpeechLabel: 'Lượng từ' },
          { id: 165, hanzi: '苹果', pinyin: 'píngguǒ', sinoVietnamese: 'Bình quả', meaning: 'quả táo', partOfSpeechLabel: 'Danh từ' },
          { id: 166, hanzi: '便宜', pinyin: 'piányi', sinoVietnamese: 'Tiện nghi', meaning: 'rẻ, giá rẻ', partOfSpeechLabel: 'Tính từ' }
        ],
        tip: {
          title: 'Đơn vị đo lường “斤” (jīn) tại Trung Quốc',
          content: 'Tại Trung Quốc, 1 cân (一斤) bằng đúng 500 gram (nửa kg). Vì vậy 2 cân (两斤) tương đương 1 kg.'
        }
      },
      {
        id: 'l10-t3',
        title: 'Đoạn 3: Chọn mua quần áo cho con',
        situation: 'Vương Nhất Tuyết và Lưu Minh đi sắm quần áo mới cho các con',
        sceneType: 'domestic',
        lines: [
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '这家商店衣服真多！这件一百元，怎么样？', pinyin: 'Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yībǎi yuán, zěnmeyàng?', vietnamese: 'Cửa hàng này nhiều quần áo thật đấy! Bộ này 100 tệ, anh thấy thế nào?' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '好看，也不贵。', pinyin: 'Hǎokàn, yě bú guì.', vietnamese: 'Đẹp mà lại không đắt.' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '小雪能穿，买一件吧。', pinyin: 'Xiǎoxuě néng chuān, mǎi yí jiàn ba.', vietnamese: 'Bé Tiểu Tuyết mặc vừa đấy, mua một bộ nhé.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '好的。小明能穿吗？', pinyin: 'Hǎo de. Xiǎomíng néng chuān ma?', vietnamese: 'Được. Còn Tiểu Minh có mặc được không?' },
          { speaker: '王一雪', avatar: '👩‍💼', hanzi: '不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。', pinyin: 'Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.', vietnamese: 'Không được. Đây là quần áo của bé gái, quần áo bé trai ở đằng kia.' },
          { speaker: '刘明', avatar: '👨‍⚕️', hanzi: '好的。', pinyin: 'Hǎo de.', vietnamese: 'Được rồi.' }
        ],
        newWords: [
          { id: 167, hanzi: '商店', pinyin: 'shāngdiàn', sinoVietnamese: 'Thương điếm', meaning: 'cửa hàng', partOfSpeechLabel: 'Danh từ' },
          { id: 168, hanzi: '衣服', pinyin: 'yīfu', sinoVietnamese: 'Y phục', meaning: 'quần áo', partOfSpeechLabel: 'Danh từ' },
          { id: 169, hanzi: '件', pinyin: 'jiàn', sinoVietnamese: 'Kiện', meaning: 'bộ, chiếc (lượng từ quần áo/sự việc)', partOfSpeechLabel: 'Lượng từ' },
          { id: 170, hanzi: '百', pinyin: 'bǎi', sinoVietnamese: 'Bách', meaning: 'trăm (100)', partOfSpeechLabel: 'Số từ' },
          { id: 171, hanzi: '元', pinyin: 'yuán', sinoVietnamese: 'Nguyên', meaning: 'đồng, tệ (văn viết)', partOfSpeechLabel: 'Lượng từ tiền tệ' },
          { id: 172, hanzi: '怎么样', pinyin: 'zěnmeyàng', sinoVietnamese: 'Chẩm ma dạng', meaning: 'thế nào, ra sao (hỏi ý kiến)', partOfSpeechLabel: 'Đại từ nghi vấn' },
          { id: 173, hanzi: '贵', pinyin: 'guì', sinoVietnamese: 'Quý', meaning: 'đắt, quý giá', partOfSpeechLabel: 'Tính từ' },
          { id: 174, hanzi: '穿', pinyin: 'chuān', sinoVietnamese: 'Xuyên', meaning: 'mặc (áo quần), xỏ (giày tất)', partOfSpeechLabel: 'Động từ' },
          { id: 175, hanzi: '女孩子', pinyin: 'nǚ háizi', sinoVietnamese: 'Nữ hài tử', meaning: 'bé gái, con gái', partOfSpeechLabel: 'Danh từ' },
          { id: 176, hanzi: '男孩子', pinyin: 'nán háizi', sinoVietnamese: 'Nam hài tử', meaning: 'bé trai, con trai', partOfSpeechLabel: 'Danh từ' }
        ]
      }
    ],
    grammarPoints: [
      {
        id: 'l10-g1',
        title: 'Cách diễn đạt tiền tệ trong tiếng Trung (Tiền Nhân dân tệ - RMB)',
        formula: 'Khẩu ngữ: [Số + 块] + [Số + 毛/角] + [Số + 分] | Văn viết: 元, 角, 分',
        explanation: '• 1 Tệ (1 块 / 元) = 10 Hào (10 毛 / 角) = 100 Xu (100 分).\n• Trong khẩu ngữ hàng ngày: 3.5 tệ đọc là “三块五” (sān kuài wǔ); 7.2 tệ đọc là “七块二” (qī kuài èr).\n• Hỏi giá: “多少钱？” hoặc “多少钱一个/一斤/一件？”',
        examples: [
          { id: 'l10-e1', hanzi: '苹果多少钱一斤？', pinyin: 'Píngguǒ duōshao qián yì jīn?', vietnamese: 'Táo bao nhiêu tiền một cân?' },
          { id: 'l10-e2', hanzi: '三块五一斤。', pinyin: 'Sān kuài wǔ yì jīn.', vietnamese: '3 tệ 5 hào một cân.' }
        ]
      },
      {
        id: 'l10-g2',
        title: 'Câu vị ngữ tính từ (Adjectival Predicate Sentences)',
        formula: 'Chủ ngữ + [Phó từ mức độ: 很 / 真 / 非常 / 不] + Tính từ',
        explanation: 'Trong câu vị ngữ tính từ, tính từ trực tiếp làm vị ngữ. KHÔNG ĐƯỢC thêm động từ “是” giữa chủ ngữ và tính từ.',
        examples: [
          { id: 'l10-e3', hanzi: '这儿的苹果真便宜！', pinyin: 'Zhèr de píngguǒ zhēn piányi!', vietnamese: 'Táo ở đây thật rẻ!' },
          { id: 'l10-e4', hanzi: '衣服好看，也不贵。', pinyin: 'Yīfu hǎokàn, yě bú guì.', vietnamese: 'Quần áo đẹp, cũng không đắt.' }
        ],
        commonMistakes: [
          {
            incorrect: '这儿的苹果是真便宜。',
            incorrectPinyin: 'Zhèr de píngguǒ shì zhēn piányi.',
            correct: '这儿的苹果真便宜！',
            correctPinyin: 'Zhèr de píngguǒ zhēn piányi!',
            reason: 'Câu vị ngữ tính từ không dùng động từ “是”.'
          }
        ]
      },
      {
        id: 'l10-g3',
        title: 'Đại từ nghi vấn “怎么样” (Zěnmeyàng - Như thế nào / Ý kiến)',
        formula: 'S (+ V) + 怎么样？',
        explanation: 'Dùng để hỏi về tình hình, tính chất hoặc thăm dò ý kiến đánh giá của người nghe.',
        examples: [
          { id: 'l10-e5', hanzi: '这件衣服怎么样？', pinyin: 'Zhè jiàn yīfu zěnmeyàng?', vietnamese: 'Bộ quần áo này thế nào?' },
          { id: 'l10-e6', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vietnamese: 'Thời tiết hôm nay thế nào?' }
        ]
      }
    ],
    comprehensiveExercises: {
      fillBlank: {
        id: 'l10-fb',
        wordBank: [
          { id: 'A', label: '多少钱', pinyin: 'duōshao qián', vietnamese: 'Bao nhiêu tiền' },
          { id: 'B', label: '件', pinyin: 'jiàn', vietnamese: 'Bộ / Chiếc (lượng từ)' },
          { id: 'C', label: '便宜', pinyin: 'piányi', vietnamese: 'Rẻ' },
          { id: 'D', label: '怎么样', pinyin: 'zěnmeyàng', vietnamese: 'Thế nào' }
        ],
        sentences: [
          {
            id: 's1',
            sentenceWithBlank: '请问，杯子____一个？',
            pinyin: 'Qǐngwèn, bēizi ____ yí ge?',
            vietnamese: 'Xin hỏi, cốc bao nhiêu tiền một chiếc?',
            correctWordId: 'A',
            explanation: 'Hỏi giá tiền dùng “多少钱”.'
          },
          {
            id: 's2',
            sentenceWithBlank: '这____衣服一百元。',
            pinyin: 'Zhè ____ yīfu yībǎi yuán.',
            vietnamese: 'Bộ quần áo này 100 tệ.',
            correctWordId: 'B',
            explanation: 'Lượng từ của quần áo là “件”.'
          },
          {
            id: 's3',
            sentenceWithBlank: '这件衣服好看吗？____？',
            pinyin: 'Zhè jiàn yīfu hǎokàn ma? ____?',
            vietnamese: 'Bộ quần áo này có đẹp không? Bạn thấy thế nào?',
            correctWordId: 'D',
            explanation: 'Hỏi ý kiến đánh giá dùng “怎么样”.'
          }
        ]
      },
      reorders: [
        {
          id: 'l10-ro1',
          scrambledWords: [
            { id: 'w1', hanzi: '苹果', pinyin: 'píngguǒ' },
            { id: 'w2', hanzi: '这儿的', pinyin: 'zhèr de' },
            { id: 'w3', hanzi: '真便宜', pinyin: 'zhēn piányi' }
          ],
          correctOrder: ['w2', 'w1', 'w3'],
          fullSentence: '这儿的苹果真便宜！',
          pinyin: 'Zhèr de píngguǒ zhēn piányi!',
          vietnamese: 'Táo ở đây thật là rẻ!',
          explanation: 'Chủ ngữ [这儿的苹果] + Vị ngữ tính từ [真便宜].'
        }
      ]
    },
    bonusContent: {
      title: 'Tìm hiểu về tiền tệ Nhân dân tệ (认识人民币)',
      chineseTitle: '认识人民币',
      category: 'Văn hóa & Tiền tệ',
      content: 'Đồng tiền chính thức của Trung Quốc là Nhân Dân Tệ (RMB - Renminbi, ký hiệu ¥).',
      bulletPoints: [
        'Mệnh giá tiền giấy phổ biến gồm: 1元, 5元, 10元, 20元, 50元 và 100元.',
        'Mặt trước của các tờ tiền RMB hiện hành in hình Chủ tịch Mao Trạch Đông, mặt sau in các danh lam thắng cảnh nổi tiếng của Trung Quốc như Vạn Lý Trường Thành, Tây Hồ Hàng Châu, Tam Hiệp sông Dương Tử và Cung điện Potala.'
      ]
    },
    selfEvaluation: [
      { id: 'c1', topic: 'Hỏi giá và nói giá tiền bằng tiếng Trung', example: '多少钱一个？ ➔ 五块钱一个。', vietnamese: 'Hỏi giá và mua sắm' },
      { id: 'c2', topic: 'Đặt câu vị ngữ tính từ không dùng 是', example: '衣服好看，也不贵。', vietnamese: 'Khen ngợi và nhận xét' },
      { id: 'c3', topic: 'Hỏi thăm ý kiến với 怎么样', example: '这件衣服怎么样？', vietnamese: 'Thăm dò ý kiến' }
    ]
  }
];
