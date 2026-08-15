import { DialogueLesson } from '../types';

export const HSK1_DIALOGUES: DialogueLesson[] = [
  {
    id: 'd-1',
    title: '1. Gặp gỡ & Làm quen',
    chineseTitle: '初次见面',
    situation: 'Hai người bạn lần đầu gặp nhau trong lớp học tiếng Trung và chào hỏi, giới thiệu tên, quốc tịch.',
    keyVocab: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' },
      { hanzi: '名字', pinyin: 'míngzi', meaning: 'tên' },
      { hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'vui mừng' },
      { hanzi: '认识', pinyin: 'rènshi', meaning: 'quen biết' }
    ],
    lines: [
      { speaker: 'A (Minh)', avatar: '👦', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vietnamese: 'Chào bạn!' },
      { speaker: 'B (Lan)', avatar: '👧', hanzi: '你好！你叫什么名字？', pinyin: 'Nǐ hǎo! Nǐ jiào shénme míngzi?', vietnamese: 'Chào bạn! Bạn tên là gì?' },
      { speaker: 'A (Minh)', avatar: '👦', hanzi: '我叫李明。你呢？', pinyin: 'Wǒ jiào Lǐ Míng. Nǐ ne?', vietnamese: 'Tôi tên là Lý Minh. Còn bạn thì sao?' },
      { speaker: 'B (Lan)', avatar: '👧', hanzi: '我叫王小兰。你是哪国人？', pinyin: 'Wǒ jiào Wáng Xiǎolán. Nǐ shì nǎ guó rén?', vietnamese: 'Tôi tên là Vương Tiểu Lan. Bạn là người nước nào?' },
      { speaker: 'A (Minh)', avatar: '👦', hanzi: '我是越南人，我学习汉语。', pinyin: 'Wǒ shì Yuènán rén, wǒ xuéxí Hànyǔ.', vietnamese: 'Tôi là người Việt Nam, tôi học tiếng Trung.' },
      { speaker: 'B (Lan)', avatar: '👧', hanzi: '很高兴认识你！', pinyin: 'Hěn gāoxìng rènshi nǐ!', vietnamese: 'Rất vui được quen biết bạn!' },
      { speaker: 'A (Minh)', avatar: '👦', hanzi: '认识你我也很高兴！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng!', vietnamese: 'Quen biết bạn tôi cũng rất vui!' }
    ]
  },
  {
    id: 'd-2',
    title: '2. Mua hoa quả ở cửa hàng',
    chineseTitle: '在水果店买水果',
    situation: 'Mua táo và hỏi giá tiền, số lượng.',
    keyVocab: [
      { hanzi: '买', pinyin: 'mǎi', meaning: 'mua' },
      { hanzi: '苹果', pinyin: 'píngguǒ', meaning: 'quả táo' },
      { hanzi: '多少钱', pinyin: 'duōshao qián', meaning: 'bao nhiêu tiền' },
      { hanzi: '块', pinyin: 'kuài', meaning: 'tệ, đồng' },
      { hanzi: '太...了', pinyin: 'tài...le', meaning: 'quá... rồi' }
    ],
    lines: [
      { speaker: 'Người mua', avatar: '🧑', hanzi: '你好，请问这个苹果多少钱一斤？', pinyin: 'Nǐ hǎo, qǐngwèn zhè ge píngguǒ duōshao qián yì jīn?', vietnamese: 'Xin chào, xin hỏi táo này bao nhiêu tiền một cân?' },
      { speaker: 'Chủ quán', avatar: '👨‍🌾', hanzi: '五块钱一斤。', pinyin: 'Wǔ kuài qián yì jīn.', vietnamese: 'Năm tệ một cân.' },
      { speaker: 'Người mua', avatar: '🧑', hanzi: '太贵了！四块钱可以吗？', pinyin: 'Tài guì le! Sì kuài qián kěyǐ ma?', vietnamese: 'Đắt quá rồi! Bốn tệ được không?' },
      { speaker: 'Chủ quán', avatar: '👨‍🌾', hanzi: '好吧，你要几个？', pinyin: 'Hǎo ba, nǐ yào jǐ ge?', vietnamese: 'Được rồi, bạn muốn mấy quả?' },
      { speaker: 'Người mua', avatar: '🧑', hanzi: '我要六个，谢谢！', pinyin: 'Wǒ yào liù ge, xièxie!', vietnamese: 'Tôi lấy 6 quả, cảm ơn!' },
      { speaker: 'Chủ quán', avatar: '👨‍🌾', hanzi: '不客气，一共二十块。', pinyin: 'Bú kèqi, yígòng èrshí kuài.', vietnamese: 'Không có chi, tổng cộng 20 tệ.' }
    ]
  },
  {
    id: 'd-3',
    title: '3. Gọi món tại nhà hàng',
    chineseTitle: '在饭馆点菜',
    situation: 'Xem thực đơn, gọi món ăn Trung Quốc và gọi nước uống.',
    keyVocab: [
      { hanzi: '吃', pinyin: 'chī', meaning: 'ăn' },
      { hanzi: '喝', pinyin: 'hē', meaning: 'uống' },
      { hanzi: '米饭', pinyin: 'mǐfàn', meaning: 'cơm' },
      { hanzi: '茶', pinyin: 'chá', meaning: 'trà' }
    ],
    lines: [
      { speaker: 'Phục vụ', avatar: '🤵', hanzi: '您好，你想吃什么？', pinyin: 'Nín hǎo, nǐ xiǎng chī shénme?', vietnamese: 'Kính chào quý khách, bạn muốn ăn gì?' },
      { speaker: 'Khách', avatar: '👩', hanzi: '我想吃中国菜，有什么好吃的菜？', pinyin: 'Wǒ xiǎng chī Zhōngguó cài, yǒu shénme hǎochī de cài?', vietnamese: 'Tôi muốn ăn món Trung, có món nào ngon không?' },
      { speaker: 'Phục vụ', avatar: '🤵', hanzi: '这个菜很好吃，不太辣。', pinyin: 'Zhè ge cài hěn hǎochī, bú tài là.', vietnamese: 'Món này rất ngon, không quá cay.' },
      { speaker: 'Khách', avatar: '👩', hanzi: '好的，我要这个菜和一碗米饭。', pinyin: 'Hǎo de, wǒ yào zhè ge cài hé yì wǎn mǐfàn.', vietnamese: 'Được, tôi lấy món này và một bát cơm.' },
      { speaker: 'Phục vụ', avatar: '🤵', hanzi: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', vietnamese: 'Bạn muốn uống gì?' },
      { speaker: 'Khách', avatar: '👩', hanzi: '请给我一杯热茶。', pinyin: 'Qǐng gěi wǒ yì bēi rè chá.', vietnamese: 'Xin cho tôi một cốc trà nóng.' }
    ]
  },
  {
    id: 'd-4',
    title: '4. Hỏi giờ & Hẹn gặp mặt',
    chineseTitle: '问时间和约会',
    situation: 'Hỏi giờ hiện tại và hẹn bạn đi xem phim vào ngày mai.',
    keyVocab: [
      { hanzi: '现在', pinyin: 'xiànzài', meaning: 'bây giờ' },
      { hanzi: '几点', pinyin: 'jǐ diǎn', meaning: 'mấy giờ' },
      { hanzi: '明天', pinyin: 'míngtiān', meaning: 'ngày mai' },
      { hanzi: '电影', pinyin: 'diànyǐng', meaning: 'phim' }
    ],
    lines: [
      { speaker: 'Lan', avatar: '👧', hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vietnamese: 'Xin hỏi, bây giờ là mấy giờ rồi?' },
      { speaker: 'Minh', avatar: '👦', hanzi: '现在下午四点三十分。', pinyin: 'Xiànzài xiàwǔ sì diǎn sānshí fēn.', vietnamese: 'Bây giờ là 4 giờ 30 phút chiều.' },
      { speaker: 'Lan', avatar: '👧', hanzi: '明天下午你有时间吗？', pinyin: 'Míngtiān xiàwǔ nǐ yǒu shíjiān ma?', vietnamese: 'Chiều mai bạn có thời gian rảnh không?' },
      { speaker: 'Minh', avatar: '👦', hanzi: '有啊，怎么了？', pinyin: 'Yǒu a, zěnme le?', vietnamese: 'Có chứ, sao vậy?' },
      { speaker: 'Lan', avatar: '👧', hanzi: '我们一起去看电影吧！', pinyin: 'Wǒmen yìqǐ qù kàn diànyǐng ba!', vietnamese: 'Chúng ta cùng đi xem phim đi nhé!' },
      { speaker: 'Minh', avatar: '👦', hanzi: '太好了！明天见！', pinyin: 'Tài hǎo le! Míngtiān jiàn!', vietnamese: 'Tuyệt quá! Hẹn ngày mai gặp!' }
    ]
  }
];
