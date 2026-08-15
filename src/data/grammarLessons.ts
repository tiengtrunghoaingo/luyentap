import { GrammarLesson } from '../types';

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'unit-1',
    unitNumber: 1,
    title: 'Đại từ nhân xưng & Đại từ chỉ định',
    chineseTitle: '人称代词与指示代词',
    category: 'DaiTu',
    categoryLabel: 'Đại từ',
    summary: 'Nắm vững hệ thống đại từ xưng hô (tôi, bạn, anh ấy...) và đại từ chỉ định khoảng cách (đây, kia) trong tiếng Trung HSK 1.',
    rules: [
      {
        id: 'rule-1-1',
        title: '1. Đại từ nhân xưng cơ bản (我, 你, 他, 她, 它)',
        formula: 'Đại từ số ít + 们 (men) ➔ Đại từ số nhiều',
        explanation: 'Trong tiếng Trung, đại từ nhân xưng số ít kết hợp với hậu tố "们" (men) để tạo thành dạng số nhiều. Không có biến đổi hình thái từ như tiếng Anh.',
        notes: [
          '我 (wǒ - tôi) ➔ 我们 (wǒmen - chúng tôi/chúng ta)',
          '你 (nǐ - bạn) ➔ 你们 (nǐmen - các bạn)',
          '您 (nín - ngài/ông/bà - dạng tôn kính của 你, không thêm 们)',
          '他 (tā - anh ấy/ông ấy - nam) ➔ 他们 (tāmen - họ/các anh ấy)',
          '她 (tā - cô ấy/bà ấy - nữ) ➔ 她们 (tāmen - các cô ấy)',
          '它 (tā - nó - đồ vật/con vật) ➔ 它们 (tāmen - chúng nó)'
        ],
        commonMistakes: [
          {
            incorrect: '您们好！',
            incorrectPinyin: 'Nínmen hǎo!',
            correct: '大家/各位好！ hoặc 你们好！',
            correctPinyin: 'Dàjiā hǎo! / Nǐmen hǎo!',
            reason: 'Trong tiếng Trung chuẩn, từ kính cẩn "您" (nín) thường không đi với hậu tố "们". Muốn chào nhiều người trang trọng, dùng "大家好" hoặc "各位好".'
          }
        ],
        examples: [
          {
            id: 'ex-1-1',
            hanzi: '我是越南人。',
            pinyin: 'Wǒ shì Yuènán rén.',
            vietnamese: 'Tôi là người Việt Nam.',
            highlightWords: ['我']
          },
          {
            id: 'ex-1-2',
            hanzi: '你们是学生吗？',
            pinyin: 'Nǐmen shì xuésheng ma?',
            vietnamese: 'Các bạn là học sinh phải không?',
            highlightWords: ['你们']
          },
          {
            id: 'ex-1-3',
            hanzi: '他是我的汉语老师。',
            pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.',
            vietnamese: 'Thầy ấy là giáo viên tiếng Trung của tôi.',
            highlightWords: ['他']
          }
        ]
      },
      {
        id: 'rule-1-2',
        title: '2. Đại từ chỉ định (这 - zhè & 那 - nà)',
        formula: '这 / 那 (+ Lượng từ) + Danh từ',
        explanation: '这 (zhè) chỉ người/sự vật ở gần ("đây, này"), 那 (nà) chỉ người/sự vật ở xa ("kia, đó"). Khi đứng trước danh từ, thường phải có Lượng từ đi kèm (ví dụ: 这个, 那本书).',
        notes: [
          '这 (zhè): đây/này (vị trí gần người nói)',
          '那 (nà): kia/đó (vị trí xa người nói)',
          '这儿 (zhèr) / 这里 (zhèlǐ): ở đây/chỗ này',
          '那儿 (nàr) / 那里 (nàlǐ): ở kia/chỗ kia',
          '这些 (zhèxiē): những cái này | 那些 (nàxiē): những cái kia'
        ],
        examples: [
          {
            id: 'ex-1-4',
            hanzi: '这是我的书。',
            pinyin: 'Zhè shì wǒ de shū.',
            vietnamese: 'Đây là sách của tôi.',
            highlightWords: ['这']
          },
          {
            id: 'ex-1-5',
            hanzi: '那个人是谁？',
            pinyin: 'Nà ge rén shì shéi?',
            vietnamese: 'Người kia là ai thế?',
            highlightWords: ['那', '个']
          },
          {
            id: 'ex-1-6',
            hanzi: '我住在这儿。',
            pinyin: 'Wǒ zhù zài zhèr.',
            vietnamese: 'Tôi sống ở đây.',
            highlightWords: ['这儿']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Đại từ số nhiều luôn thêm 们 (wǒmen, nǐmen, tāmen).',
      '这 (gần) vs 那 (xa).',
      'Trước danh từ cần có lượng từ: 这个人 (người này), 那本书 (cuốn sách kia).'
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    title: 'Đại từ nghi vấn (谁, 什么, 哪, 几, 多少, 怎么...)',
    chineseTitle: '疑问代词',
    category: 'DaiTu',
    categoryLabel: 'Đại từ',
    summary: 'Học cách dùng các từ để hỏi quan trọng nhất trong HSK 1: hỏi người (ai), hỏi vật (cái gì), hỏi vị trí (ở đâu), hỏi số lượng (mấy/bao nhiêu), hỏi phương thức (làm sao).',
    rules: [
      {
        id: 'rule-2-1',
        title: '1. Quy tắc vàng đặt câu hỏi trong tiếng Trung',
        formula: 'Câu trần thuật có thành phần nào cần hỏi ➔ Thay trực tiếp Đại từ nghi vấn vào vị trí đó (KHÔNG đảo trật tự từ)',
        explanation: 'Khác với tiếng Anh (phải đảo trợ động từ lên đầu), tiếng Trung giữ nguyên trật tự câu. Muốn hỏi phần nào thì thay từ để hỏi vào đúng vị trí của phần đó.',
        examples: [
          {
            id: 'ex-2-1',
            hanzi: '他是李老师。➔ 他是谁？',
            pinyin: 'Tā shì Lǐ lǎoshī. ➔ Tā shì shéi?',
            vietnamese: 'Thầy ấy là thầy Lý. ➔ Thầy ấy là ai?',
            highlightWords: ['谁']
          },
          {
            id: 'ex-2-2',
            hanzi: '我买苹果。➔ 你买什么？',
            pinyin: 'Wǒ mǎi píngguǒ. ➔ Nǐ mǎi shénme?',
            vietnamese: 'Tôi mua táo. ➔ Bạn mua cái gì?',
            highlightWords: ['什么']
          }
        ]
      },
      {
        id: 'rule-2-2',
        title: '2. Bảng các đại từ nghi vấn HSK 1 cốt lõi',
        formula: 'Từ để hỏi + Vị trí tương ứng',
        explanation: 'Mỗi từ nghi vấn có chức năng ngữ pháp riêng:',
        notes: [
          '谁 (shéi / shuí): Ai? (Hỏi người)',
          '什么 (shénme): Cái gì? (Hỏi sự vật/tên gọi)',
          '哪 (nǎ): Nào? (哪 + Lượng từ + Danh từ: 哪本书 - quyển sách nào, 哪国人 - người nước nào)',
          '哪儿 (nǎr) / 哪里 (nǎlǐ): Ở đâu? (Hỏi địa điểm)',
          '几 (jǐ): Mấy? (Hỏi số lượng nhỏ dưới 10, bắt buộc có Lượng từ: 几个人, 几点)',
          '多少 (duōshao): Bao nhiêu? (Hỏi số lượng trên 10 hoặc giá cả: 多少钱, 多少学生)',
          '怎么 (zěnme): Làm sao / Thế nào? (Hỏi cách thức: 怎么去 - đi như thế nào, 怎么读 - đọc thế nào)',
          '怎么样 (zěnmeyàng): Thế nào / Ra sao? (Hỏi tính chất, tình hình hoặc xin ý kiến)'
        ],
        commonMistakes: [
          {
            incorrect: '你几岁？ (Hỏi người lớn)',
            incorrectPinyin: 'Nǐ jǐ suì?',
            correct: '你多大？ / 您多大年纪？',
            correctPinyin: 'Nǐ duō dà? / Nín duōdà niánjì?',
            reason: '"几岁" chỉ dùng hỏi trẻ em dưới 10 tuổi. Hỏi người cùng trang lứa dùng "你多大？", hỏi người lớn tuổi dùng "您多大年纪？".'
          }
        ],
        examples: [
          {
            id: 'ex-2-3',
            hanzi: '你叫什么名字？',
            pinyin: 'Nǐ jiào shénme míngzi?',
            vietnamese: 'Bạn tên là gì?',
            highlightWords: ['什么']
          },
          {
            id: 'ex-2-4',
            hanzi: '医院在哪儿？',
            pinyin: 'Yīyuàn zài nǎr?',
            vietnamese: 'Bệnh viện ở đâu?',
            highlightWords: ['在哪儿']
          },
          {
            id: 'ex-2-5',
            hanzi: '这个苹果多少钱？',
            pinyin: 'Zhè ge píngguǒ duōshao qián?',
            vietnamese: 'Quả táo này bao nhiêu tiền?',
            highlightWords: ['多少钱']
          },
          {
            id: 'ex-2-6',
            hanzi: '今天天气怎么样？',
            pinyin: 'Jīntiān tiānqì zěnmeyàng?',
            vietnamese: 'Thời tiết hôm nay thế nào?',
            highlightWords: ['怎么样']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Tiếng Trung không đảo trật tự từ khi đặt câu hỏi nghi vấn.',
      '几 hỏi số lượng < 10 (cần lượng từ); 多少 hỏi số lượng bất kỳ/giá cả.',
      '怎么 + Động từ (hỏi cách làm); 怎么样 đứng cuối câu (hỏi ý kiến/tính chất).'
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    title: 'Cấu trúc câu chữ "是" (Phán đoán, Danh tính)',
    chineseTitle: '“是”字句',
    category: 'CauTruc',
    categoryLabel: 'Cấu trúc câu',
    summary: 'Cách dùng động từ hệ từ "是" (shì - là) để giới thiệu tên, nghề nghiệp, quốc tịch, quan hệ và tính chất sự vật.',
    rules: [
      {
        id: 'rule-3-1',
        title: '1. Cấu trúc Khẳng định - Phủ định - Nghi vấn với "是"',
        formula: 'Khẳng định: Chủ ngữ + 是 + Tân ngữ\nPhủ định: Chủ ngữ + 不是 + Tân ngữ\nNghi vấn: Chủ ngữ + 是 + Tân ngữ + 吗？',
        explanation: 'Động từ "是" tương đương với động từ "to be" (là) trong tiếng Anh. Dùng để phán đoán, xác nhận danh tính, đặc điểm, thuộc tính của chủ ngữ.',
        notes: [
          'Khẳng định: 我是学生。(Tôi là học sinh.)',
          'Phủ định dùng 不 (bù), đọc biến điệu thành bú: 他不是医生。(Anh ấy không phải là bác sĩ.)',
          'Câu hỏi Yes/No thêm 吗 (ma) ở cuối câu: 你是老师吗？(Bạn là giáo viên phải không?)'
        ],
        commonMistakes: [
          {
            incorrect: '他是不中国。(Sai cấu trúc)',
            incorrectPinyin: 'Tā shì bù Zhōngguó.',
            correct: '他不是中国人。',
            correctPinyin: 'Tā bú shì Zhōngguó rén.',
            reason: 'Phủ định của 是 là 不是 (bú shì), không đặt 不 sau 是. Ngoài ra tên quốc gia cần thêm 人 (người).'
          },
          {
            incorrect: '我很好是。(Thừa 是 với tính từ)',
            incorrectPinyin: 'Wǒ hěn hǎo shì.',
            correct: '我很好。',
            correctPinyin: 'Wǒ hěn hǎo.',
            reason: 'Trước tính từ không dùng 是, chỉ dùng phó từ mức độ như 很 (xem Unit 5).'
          }
        ],
        examples: [
          {
            id: 'ex-3-1',
            hanzi: '她是我的中国朋友。',
            pinyin: 'Tā shì wǒ de Zhōngguó péngyou.',
            vietnamese: 'Cô ấy là người bạn Trung Quốc của tôi.',
            highlightWords: ['是']
          },
          {
            id: 'ex-3-2',
            hanzi: '今天不是星期一，今天是星期二。',
            pinyin: 'Jīntiān bú shì xīngqīyī, jīntiān shì xīngqī’èr.',
            vietnamese: 'Hôm nay không phải thứ Hai, hôm nay là thứ Ba.',
            highlightWords: ['不是', '是']
          },
          {
            id: 'ex-3-3',
            hanzi: '那是你的猫吗？',
            pinyin: 'Nà shì nǐ de māo ma?',
            vietnamese: 'Đó là con mèo của bạn phải không?',
            highlightWords: ['是', '吗']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Phủ định của 是 luôn là 不是 (bú shì).',
      'Đằng sau 是 thường là Danh từ / Cụm danh từ, tuyệt đối không dùng 是 trước Tính từ độc lập.'
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    title: 'Cấu trúc câu chữ "有" & "没有" (Sở hữu, Tồn tại)',
    chineseTitle: '“有”字句',
    category: 'CauTruc',
    categoryLabel: 'Cấu trúc câu',
    summary: 'Học cách diễn đạt sở hữu ("có"), sự tồn hiện ("ở đâu có cái gì") và quy tắc phủ định bắt buộc với 没有.',
    rules: [
      {
        id: 'rule-4-1',
        title: '1. Biểu thị sự sở hữu (Có / Không có)',
        formula: 'Khẳng định: Chủ ngữ + 有 + Tân ngữ\nPhủ định: Chủ ngữ + 没有 + Tân ngữ (KHÔNG dùng 不有)\nNghi vấn: S + 有 + O + 吗？ HOẶC S + 有没有 + O？',
        explanation: 'Động từ "有" (yǒu) biểu thị ai đó có cái gì. Phủ định của 有 BẮT BUỘC dùng 没有 (méiyǒu), tuyệt đối không được nói 不有.',
        notes: [
          'Khẳng định: 我有三本书。(Tôi có 3 quyển sách.)',
          'Phủ định: 我没有汉语书。(Tôi không có sách tiếng Trung.)',
          'Câu hỏi chính phản: 你有没有钱？= 你有钱吗？(Bạn có tiền không?)'
        ],
        commonMistakes: [
          {
            incorrect: '我不有一只狗。',
            incorrectPinyin: 'Wǒ bù yǒu yì zhī gǒu.',
            correct: '我没有狗。',
            correctPinyin: 'Wǒ méiyǒu gǒu.',
            reason: 'Tuyệt đối không có cụm từ "不有". Phủ định của 有 luôn là "没有" (méiyǒu).'
          }
        ],
        examples: [
          {
            id: 'ex-4-1',
            hanzi: '我家有三口人。',
            pinyin: 'Wǒ jiā yǒu sān kǒu rén.',
            vietnamese: 'Nhà tôi có 3 người.',
            highlightWords: ['有']
          },
          {
            id: 'ex-4-2',
            hanzi: '他没有电脑。',
            pinyin: 'Tā méiyǒu diànnǎo.',
            vietnamese: 'Anh ấy không có máy tính.',
            highlightWords: ['没有']
          }
        ]
      },
      {
        id: 'rule-4-2',
        title: '2. Biểu thị sự tồn tại (Ở đâu có cái gì)',
        formula: 'Địa điểm / Nơi chốn + 有 + Danh từ',
        explanation: 'Dùng để diễn tả tại một địa điểm, vị trí nào đó đang có sự hiện diện của người hoặc đồ vật.',
        examples: [
          {
            id: 'ex-4-3',
            hanzi: '桌子上有一个杯子。',
            pinyin: 'Zhuōzi shang yǒu yí ge bēizi.',
            vietnamese: 'Trên bàn có một cái cốc.',
            highlightWords: ['桌子上', '有']
          },
          {
            id: 'ex-4-4',
            hanzi: '学校里有很多学生。',
            pinyin: 'Xuéxiào lǐ yǒu hěn duō xuésheng.',
            vietnamese: 'Trong trường học có rất nhiều học sinh.',
            highlightWords: ['有', '很多']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Phủ định của 有 luôn là 没有 (méiyǒu), không bao giờ dùng 不有.',
      'Câu hỏi chính phản: 有没有 + Tân ngữ (không cần thêm 吗).',
      'Nơi chốn + 有 + Sự vật: biểu thị tồn hiện (trên bàn có cái cốc).'
    ]
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    title: 'Câu vị ngữ tính từ (Hình dung từ & Cách dùng "很")',
    chineseTitle: '形容词谓语句',
    category: 'CauTruc',
    categoryLabel: 'Cấu trúc câu',
    summary: 'Hiểu đúng câu vị ngữ tính từ trong tiếng Trung: tuyệt đối không dùng 是, vai trò thực sự của phó từ 很.',
    rules: [
      {
        id: 'rule-5-1',
        title: '1. Cấu trúc câu vị ngữ tính từ cơ bản',
        formula: 'Khẳng định: Chủ ngữ + 很 + Tính từ (KHÔNG dùng 是!)\nPhủ định: Chủ ngữ + 不 + Tính từ (Bỏ 很)\nNghi vấn: Chủ ngữ + Tính từ + 吗？',
        explanation: 'Trong tiếng Trung, Tính từ (Hình dung từ) có thể trực tiếp làm vị ngữ mà KHÔNG cần động từ 是. Ở thể khẳng định, thường phải thêm "很" (hěn) phía trước để câu nghe tự nhiên và cân bằng âm tiết.',
        notes: [
          'Vai trò của "很" trong câu khẳng định thường chỉ mang tính đệm ngữ, không nhất thiết nhấn mạnh nghĩa "rất". Muốn nhấn mạnh "rất" thật sự thì phát âm nhấn giọng từ 很.',
          'Nếu nói "我好" (không có 很) thì câu mang sắc thái so sánh ngầm ("Tôi tốt, còn người khác thì không").',
          'Thể phủ định dùng 不: 我不高。(Tôi không cao - KHÔNG dùng 我很不高).'
        ],
        commonMistakes: [
          {
            incorrect: '我是很高兴。',
            incorrectPinyin: 'Wǒ shì hěn gāoxìng.',
            correct: '我很高兴。',
            correctPinyin: 'Wǒ hěn gāoxìng.',
            reason: 'Người Việt hay dịch từ "Tôi là rất vui", dẫn đến thừa từ "是". Tiếng Trung: S + 很 + Adj.'
          }
        ],
        examples: [
          {
            id: 'ex-5-1',
            hanzi: '今天天气很好。',
            pinyin: 'Jīntiān tiānqì hěn hǎo.',
            vietnamese: 'Thời tiết hôm nay (rất) đẹp.',
            highlightWords: ['很好']
          },
          {
            id: 'ex-5-2',
            hanzi: '米饭不好吃。',
            pinyin: 'Mǐfàn bù hǎochī.',
            vietnamese: 'Cơm không ngon.',
            highlightWords: ['不好吃']
          },
          {
            id: 'ex-5-3',
            hanzi: '汉语难吗？— 汉语不难。',
            pinyin: 'Hànyǔ nán ma? — Hànyǔ bù nán.',
            vietnamese: 'Tiếng Trung khó không? — Tiếng Trung không khó.',
            highlightWords: ['难吗', '不难']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Quy tắc vàng: S + 很 + Adj (Cấm dùng 是 trước tính từ).',
      'Phủ định bỏ 很: S + 不 + Adj.',
      'Nghi vấn: S + Adj + 吗？'
    ]
  },
  {
    id: 'unit-6',
    unitNumber: 6,
    title: 'Trợ từ kết cấu "的" (Quan hệ sở hữu & Định ngữ)',
    chineseTitle: '结构助词“的”',
    category: 'TroTu',
    categoryLabel: 'Trợ từ',
    summary: 'Nắm vững cách dùng trợ từ kết cấu "的" (de) để biểu thị sở hữu ("của"), tạo cụm danh từ bổ nghĩa và các trường hợp có thể lược bỏ 的.',
    rules: [
      {
        id: 'rule-6-1',
        title: '1. Biểu thị quan hệ sở hữu (Định ngữ + 的 + Danh từ trung tâm)',
        formula: 'Người sở hữu + 的 + Đồ vật / Sự vật sở hữu\n(Dịch ngược từ sau ra trước: Trung tâm ngữ trước, định ngữ sau)',
        explanation: '"的" đóng vai trò như từ "của" trong tiếng Việt. Lưu ý trật tự từ: Cái bị sở hữu đặt ở sau "的", người sở hữu đặt ở trước "的".',
        notes: [
          '我的书 (Sách của tôi)',
          '李老师的电话 (Số điện thoại của thầy Lý)',
          '爸爸的衣服 (Quần áo của bố)'
        ],
        examples: [
          {
            id: 'ex-6-1',
            hanzi: '这是王老师的电脑。',
            pinyin: 'Zhè shì Wáng lǎoshī de diànnǎo.',
            vietnamese: 'Đây là máy tính của thầy Vương.',
            highlightWords: ['王老师的电脑']
          },
          {
            id: 'ex-6-2',
            hanzi: '那是谁的杯子？',
            pinyin: 'Nà shì shéi de bēizi?',
            vietnamese: 'Đó là cái cốc của ai?',
            highlightWords: ['谁的']
          }
        ]
      },
      {
        id: 'rule-6-2',
        title: '2. Trường hợp lược bỏ "的" (Quan hệ thân thuộc, tổ chức)',
        formula: 'Đại từ nhân xưng + Danh từ người thân / Trường học / Công ty (KHÔNG cần 的)',
        explanation: 'Khi biểu thị quan hệ gia đình ruột thịt thân thiết hoặc cơ quan/tổ chức trực thuộc, có thể lược bỏ "的" để câu văn tự nhiên, gần gũi.',
        notes: [
          '我爸爸 / 我妈妈 (Bố tôi / Mẹ tôi - thay vì 我的爸爸)',
          '我们家 / 我家 (Nhà tôi / Gia đình chúng tôi)',
          '我们学校 (Trường của chúng tôi)'
        ],
        examples: [
          {
            id: 'ex-6-3',
            hanzi: '我爸爸是医生。',
            pinyin: 'Wǒ bàba shì yīshēng.',
            vietnamese: 'Bố tôi là bác sĩ.',
            highlightWords: ['我爸爸']
          },
          {
            id: 'ex-6-4',
            hanzi: '我朋友去北京了。',
            pinyin: 'Wǒ péngyou qù Běijīng le.',
            vietnamese: 'Bạn tôi đi Bắc Kinh rồi.',
            highlightWords: ['我朋友']
          }
        ]
      },
      {
        id: 'rule-6-3',
        title: '3. Cụm chữ "的" độc lập (Lược bỏ danh từ phía sau khi đã rõ ngữ cảnh)',
        formula: 'Định ngữ + 的 (Thay thế cho cả cụm danh từ)',
        explanation: 'Khi danh từ trung tâm đã được nhắc đến trước đó, có thể nói tắt bằng cách dùng "Cụm + 的" để tránh lặp từ.',
        examples: [
          {
            id: 'ex-6-5',
            hanzi: '这件衣服是大的，那件是小的。',
            pinyin: 'Zhè jiàn yīfu shì dà de, nà jiàn shì xiǎo de.',
            vietnamese: 'Chiếc áo này là chiếc to, chiếc kia là chiếc nhỏ.',
            highlightWords: ['大的', '小的']
          },
          {
            id: 'ex-6-6',
            hanzi: '这本书是我的。',
            pinyin: 'Zhè běn shū shì wǒ de.',
            vietnamese: 'Quyển sách này là của tôi (sách của tôi).',
            highlightWords: ['我的']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Định ngữ + 的 + Danh từ chính (Sách của tôi ➔ 我的书).',
      'Quan hệ người thân, bạn bè thân thiết, đơn vị trực thuộc có thể bỏ 的 (我妈妈, 我们学校).',
      'Cụm chữ "的" thay thế cho danh từ đã nhắc tới (我的 = của tôi).'
    ]
  },
  {
    id: 'unit-7',
    unitNumber: 7,
    title: 'Trợ từ ngữ khí "吗", "呢", "吧"',
    chineseTitle: '语气助词“吗、呢、吧”',
    category: 'TroTu',
    categoryLabel: 'Trợ từ',
    summary: 'Phân biệt chính xác 3 trợ từ ngữ khí đứng cuối câu phổ biến nhất: 吗 (hỏi Yes/No), 呢 (hỏi tỉnh lược/tiếp diễn), 吧 (đề nghị/thương lượng).',
    rules: [
      {
        id: 'rule-7-1',
        title: '1. Trợ từ "吗" (ma) - Tạo câu hỏi Yes/No',
        formula: 'Câu trần thuật + 吗？',
        explanation: 'Đặt ở cuối câu khẳng định để biến câu đó thành câu hỏi "phải không? / có... không?".',
        examples: [
          {
            id: 'ex-7-1',
            hanzi: '你喜欢喝茶吗？',
            pinyin: 'Nǐ xǐhuan hē chá ma?',
            vietnamese: 'Bạn thích uống trà không?',
            highlightWords: ['吗']
          },
          {
            id: 'ex-7-2',
            hanzi: '明天你去学校吗？',
            pinyin: 'Míngtiān nǐ qù xuéxiào ma?',
            vietnamese: 'Ngày mai bạn đi trường học không?',
            highlightWords: ['吗']
          }
        ]
      },
      {
        id: 'rule-7-2',
        title: '2. Trợ từ "呢" (ne) - Câu hỏi tỉnh lược & Trạng thái',
        formula: 'Danh từ / Đại từ + 呢？ (Thế còn... thì sao? / ...ở đâu?)',
        explanation: '"呢" dùng để hỏi lại về đối tượng khác mà không cần lặp lại toàn bộ câu hỏi trước đó. Ngoài ra còn dùng để hỏi "ở đâu" khi tìm đồ vật/người.',
        examples: [
          {
            id: 'ex-7-3',
            hanzi: '我是越南人，你呢？',
            pinyin: 'Wǒ shì Yuènán rén, nǐ ne?',
            vietnamese: 'Tôi là người Việt Nam, còn bạn thì sao?',
            highlightWords: ['你呢']
          },
          {
            id: 'ex-7-4',
            hanzi: '我的书呢？— 在桌子上呢。',
            pinyin: 'Wǒ de shū ne? — Zài zhuōzi shang ne.',
            vietnamese: 'Sách của tôi đâu rồi? — Ở trên bàn kìa.',
            highlightWords: ['呢']
          }
        ]
      },
      {
        id: 'rule-7-3',
        title: '3. Trợ từ "吧" (ba) - Đề nghị, rủ rê, phỏng đoán',
        formula: 'Câu đề nghị / Lời khuyên / Phỏng đoán + 吧。',
        explanation: 'Đứng cuối câu mang ngữ khí thương lượng, rủ rê ("nhé, đi, nào") hoặc phỏng đoán nhẹ nhàng ("chắc là... nhỉ").',
        examples: [
          {
            id: 'ex-7-5',
            hanzi: '我们走吧！',
            pinyin: 'Wǒmen zǒu ba!',
            vietnamese: 'Chúng ta đi thôi nào!',
            highlightWords: ['吧']
          },
          {
            id: 'ex-7-6',
            hanzi: '你是李老师吧？',
            pinyin: 'Nǐ shì Lǐ lǎoshī ba?',
            vietnamese: 'Bạn chắc là thầy Lý nhỉ? (Phỏng đoán)',
            highlightWords: ['吧']
          }
        ]
      }
    ],
    keyTakeaways: [
      '吗: Hỏi Có/Không (Cuối câu trần thuật).',
      '呢: Hỏi tỉnh lược ("Còn... thì sao?", "Ở đâu?").',
      '吧: Rủ rê, đề nghị, phỏng đoán ("...nhé/đi/nhỉ").'
    ]
  },
  {
    id: 'unit-8',
    unitNumber: 8,
    title: 'Trợ từ động thái & ngữ khí "了" (le)',
    chineseTitle: '助词“了”的用法',
    category: 'TroTu',
    categoryLabel: 'Trợ từ',
    summary: 'Hiểu đúng 2 cách dùng quan trọng nhất của "了": biểu thị hành động đã hoàn thành và biểu thị sự thay đổi trạng thái.',
    rules: [
      {
        id: 'rule-8-1',
        title: '1. "了" biểu thị hành động đã xảy ra / hoàn thành',
        formula: 'Động từ + 了 (+ Tân ngữ)',
        explanation: 'Khi "了" đứng ngay sau động từ, nó nhấn mạnh hành động đã được thực hiện hoặc hoàn thành.',
        notes: [
          'Khẳng định: 我买了三个苹果。(Tôi đã mua 3 quả táo.)',
          'Phủ định: Dùng 没 / 没有 + Động từ (BẮT BUỘC BỎ 了): 我没买苹果。(Tôi chưa mua táo - KHÔNG nói 我没买了苹果).'
        ],
        commonMistakes: [
          {
            incorrect: '我昨天没去了学校。',
            incorrectPinyin: 'Wǒ zuótiān méi qù le xuéxiào.',
            correct: '我昨天没去学校。',
            correctPinyin: 'Wǒ zuótiān méi qù xuéxiào.',
            reason: 'Khi câu đã có phó từ phủ định "没" hoặc "没有", hành động chưa xảy ra nên KHÔNG được dùng "了".'
          }
        ],
        examples: [
          {
            id: 'ex-8-1',
            hanzi: '他喝了一杯水。',
            pinyin: 'Tā hē le yì bēi shuǐ.',
            vietnamese: 'Anh ấy đã uống một cốc nước.',
            highlightWords: ['喝了']
          },
          {
            id: 'ex-8-2',
            hanzi: '我吃饭了。',
            pinyin: 'Wǒ chī fàn le.',
            vietnamese: 'Tôi ăn cơm rồi.',
            highlightWords: ['了']
          }
        ]
      },
      {
        id: 'rule-8-2',
        title: '2. "了" ở cuối câu biểu thị sự thay đổi trạng thái (Đã... rồi)',
        formula: 'Tình huống mới / Trạng thái mới + 了',
        explanation: 'Đặt ở cuối câu để báo hiệu một tình huống mới xuất hiện, trước đây không như vậy mà bây giờ đã thay đổi.',
        examples: [
          {
            id: 'ex-8-3',
            hanzi: '下雨了。',
            pinyin: 'Xià yǔ le.',
            vietnamese: 'Trời mưa rồi (trước đó chưa mưa, bây giờ bắt đầu mưa).',
            highlightWords: ['下雨了']
          },
          {
            id: 'ex-8-4',
            hanzi: '我已经十八岁了。',
            pinyin: 'Wǒ yǐjīng shíbā suì le.',
            vietnamese: 'Tôi đã 18 tuổi rồi.',
            highlightWords: ['了']
          }
        ]
      },
      {
        id: 'rule-8-3',
        title: '3. Cấu trúc cố định: "太 + Tính từ + 了" (Quá... rồi / Cực kỳ...)',
        formula: '太 + Tính từ + 了 (Cảm thán mức độ cao)',
        explanation: 'Cấu trúc dùng để khen ngợi hoặc cảm thán mức độ rất cao.',
        examples: [
          {
            id: 'ex-8-5',
            hanzi: '太好了！',
            pinyin: 'Tài hǎo le!',
            vietnamese: 'Tốt quá rồi! / Tuyệt vời!',
            highlightWords: ['太好了']
          },
          {
            id: 'ex-8-6',
            hanzi: '这个菜太好吃了！',
            pinyin: 'Zhè ge cài tài hǎochī le!',
            vietnamese: 'Món ăn này ngon quá đi mất!',
            highlightWords: ['太好吃了']
          }
        ]
      }
    ],
    keyTakeaways: [
      'V + 了: Đã làm xong việc gì.',
      'Phủ định dùng 没 + V (Cấm có 了).',
      'Cuối câu + 了: Biến đổi trạng thái mới.',
      'Cấu trúc cảm thán: 太 + Adj + 了 (Tài... le).'
    ]
  },
  {
    id: 'unit-9',
    unitNumber: 9,
    title: 'Phó từ chỉ mức độ & Phủ định (很, 太, 不, 没)',
    chineseTitle: '程度副词与否定副词',
    category: 'PhoTu',
    categoryLabel: 'Phó từ',
    summary: 'Nắm vững vị trí của phó từ trong câu và phân biệt rạch ròi cặp phó từ phủ định "不" (bù) vs "没" (méi).',
    rules: [
      {
        id: 'rule-9-1',
        title: '1. Phân biệt "不" (bù) và "没/没有" (méi/méiyǒu)',
        formula: '不 + Động từ/Tính từ: Phủ định ý muốn chủ quan, thói quen, hiện tại & tương lai\n没 + Động từ: Phủ định hành động chưa xảy ra / trong quá khứ\n没有 + Danh từ: Không có (sở hữu)',
        explanation: 'Đây là điểm ngữ pháp cực kỳ quan trọng và dễ nhầm lẫn nhất đối với người mới học HSK 1.',
        notes: [
          '我不吃米饭。(Tôi không ăn cơm - thói quen/ý muốn không muốn ăn).',
          '我没吃米饭。(Tôi chưa ăn cơm - thực tế chưa diễn ra).',
          '不是 (Không phải - BẮT BUỘC dùng 不, không có 没是).',
          '没有 (Không có - BẮT BUỘC dùng 没, không có 不有).'
        ],
        commonMistakes: [
          {
            incorrect: '他昨天不去学校。',
            incorrectPinyin: 'Tā zuótiān bú qù xuéxiào.',
            correct: '他昨天没去学校。',
            correctPinyin: 'Tā zuótiān méi qù xuéxiào.',
            reason: 'Hành động xảy ra trong quá khứ (hôm qua) phủ định dùng "没", không dùng "不".'
          }
        ],
        examples: [
          {
            id: 'ex-9-1',
            hanzi: '今天我不去工作。',
            pinyin: 'Jīntiān wǒ bú qù gōngzuò.',
            vietnamese: 'Hôm nay tôi không đi làm (chủ ý không đi).',
            highlightWords: ['不去']
          },
          {
            id: 'ex-9-2',
            hanzi: '我还没看那本书。',
            pinyin: 'Wǒ hái méi kàn nà běn shū.',
            vietnamese: 'Tôi vẫn chưa đọc cuốn sách đó.',
            highlightWords: ['没看']
          }
        ]
      }
    ],
    keyTakeaways: [
      '不: Phủ định hiện tại, tương lai, thói quen, phán đoán (不是), cảm xúc.',
      '没: Phủ định quá khứ, hành động chưa diễn ra, sở hữu (没有).',
      'Luôn là: 不是 (không phải), 没有 (không có).'
    ]
  },
  {
    id: 'unit-10',
    unitNumber: 10,
    title: 'Phó từ phạm vi & Liên từ (也, 都, 和)',
    chineseTitle: '范围副词“也、都”与连词“和”',
    category: 'PhoTu',
    categoryLabel: 'Phó từ',
    summary: 'Cách dùng "也" (yě - cũng), "都" (dōu - đều) và liên từ nối "和" (hé - và) chuẩn xác theo trật tự câu.',
    rules: [
      {
        id: 'rule-10-1',
        title: '1. Phó từ "也" (yě - cũng) và "都" (dōu - đều)',
        formula: 'Chủ ngữ + 也 / 都 + Động từ / Tính từ\nChủ ngữ 1 和 Chủ ngữ 2 + 也 / 都 + V/Adj',
        explanation: 'Phó từ "也" và "都" LUÔN đứng TRƯỚC động từ hoặc tính từ, KHÔNG bao giờ đứng đầu câu như từ "Also" trong tiếng Anh.',
        notes: [
          'Cả hai cùng xuất hiện trong một câu: "也" luôn đứng TRƯỚC "都" (也 + 都): 我们也都去。(Chúng tôi cũng đều đi).',
          'Phủ định toàn bộ: 都不 (đều không...) | Phủ định một phần: 不都 (không phải tất cả đều...).'
        ],
        examples: [
          {
            id: 'ex-10-1',
            hanzi: '我也是中国人。',
            pinyin: 'Wǒ yě shì Zhōngguó rén.',
            vietnamese: 'Tôi cũng là người Trung Quốc.',
            highlightWords: ['也']
          },
          {
            id: 'ex-10-2',
            hanzi: '他们都是医生。',
            pinyin: 'Tāmen dōu shì yīshēng.',
            vietnamese: 'Họ đều là bác sĩ.',
            highlightWords: ['都']
          },
          {
            id: 'ex-10-3',
            hanzi: '我和他都喜欢吃中国菜。',
            pinyin: 'Wǒ hé tā dōu xǐhuan chī Zhōngguó cài.',
            vietnamese: 'Tôi và anh ấy đều thích ăn món Trung Quốc.',
            highlightWords: ['和', '都']
          }
        ]
      },
      {
        id: 'rule-10-2',
        title: '2. Liên từ "和" (hé - và)',
        formula: 'Danh từ A + 和 + Danh từ B',
        explanation: '"和" CHỈ dùng để nối giữa 2 danh từ hoặc 2 đại từ (A và B). "和" KHÔNG dùng để nối hai mệnh đề hoặc hai câu đơn như từ "and" trong tiếng Anh!',
        commonMistakes: [
          {
            incorrect: '我去北京，和我去上海。(Sai vì dùng 和 nối 2 mệnh đề)',
            incorrectPinyin: 'Wǒ qù Běijīng, hé wǒ qù Shànghǎi.',
            correct: '我去北京和上海。 hoặc 我去北京，也去上海。',
            correctPinyin: 'Wǒ qù Běijīng hé Shànghǎi. / Wǒ qù Běijīng, yě qù Shànghǎi.',
            reason: '"和" chỉ nối từ với từ (Danh từ A 和 Danh từ B), không nối 2 phân câu.'
          }
        ],
        examples: [
          {
            id: 'ex-10-4',
            hanzi: '爸爸和妈妈都在家。',
            pinyin: 'Bàba hé māma dōu zài jiā.',
            vietnamese: 'Bố và mẹ đều ở nhà.',
            highlightWords: ['和', '都']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Phó từ 也, 都 đứng ngay trước V hoặc Adj.',
      'Nếu cùng dùng: Chủ ngữ + 也 + 都 + V/Adj.',
      'Liên từ 和 chỉ dùng để nối 2 danh từ/đại từ (Tôi và bạn ➔ 我和你).'
    ]
  },
  {
    id: 'unit-11',
    unitNumber: 11,
    title: 'Lượng từ thông dụng HSK 1 (个, 本, 块, 岁, 杯...)',
    chineseTitle: 'HSK1常用量词',
    category: 'LuongTu',
    categoryLabel: 'Lượng từ',
    summary: 'Quy tắc vàng: Số từ + Lượng từ + Danh từ. Nắm trọn các lượng từ bắt buộc trong HSK 1.',
    rules: [
      {
        id: 'rule-11-1',
        title: '1. Cấu trúc ngữ pháp chứa Lượng từ',
        formula: 'Số từ / 这 / 那 / 哪 / 几 + LƯỢNG TỪ + Danh từ',
        explanation: 'Trong tiếng Trung, khi muốn đếm số lượng danh từ hoặc dùng đại từ chỉ định/nghi vấn trước danh từ, BẮT BUỘC phải chèn một Lượng từ thích hợp vào giữa.',
        notes: [
          '个 (gè): Lượng từ thông dụng nhất (người, cái, quả: 一个人, 一个苹果, 一个杯子)',
          '本 (běn): Dùng cho sách vở, tạp chí, từ điển (一本书, 两本词典)',
          '块 (kuài): Dùng cho tiền tệ (tệ/đồng), miếng, cục (五块钱, 一块蛋糕)',
          '岁 (suì): Dùng cho tuổi tác (二十岁)',
          '只 (zhī): Dùng cho động vật nhỏ (一只猫, 一只狗)',
          '张 (zhāng): Dùng cho vật có mặt phẳng như bàn, giấy, vé (一张桌子, 一张票)',
          '杯 (bēi): Dùng cho cốc, ly đồ uống (一杯茶, 一杯水)',
          '件 (jiàn): Dùng cho quần áo, sự việc (一件衣服, 一件事)',
          '些 (xiē): Lượng từ chỉ số lượng ít / vài (一些书 - một vài cuốn sách, 这些 - những cái này)'
        ],
        commonMistakes: [
          {
            incorrect: '我看一书。(Thiếu lượng từ)',
            incorrectPinyin: 'Wǒ kàn yī shū.',
            correct: '我看一本书。',
            correctPinyin: 'Wǒ kàn yì běn shū.',
            reason: 'Tiếng Trung không thể ghép trực tiếp Số từ + Danh từ, bắt buộc phải có Lượng từ: 一 (Số) + 本 (Lượng) + 书 (Danh).'
          },
          {
            incorrect: '我有二本书。(Dùng sai số 2)',
            incorrectPinyin: 'Wǒ yǒu èr běn shū.',
            correct: '我有两本书。',
            correctPinyin: 'Wǒ yǒu liǎng běn shū.',
            reason: 'Trước lượng từ, số 2 bắt buộc phải dùng "两" (liǎng), không dùng "二" (èr).'
          }
        ],
        examples: [
          {
            id: 'ex-11-1',
            hanzi: '我想买两本书。',
            pinyin: 'Wǒ xiǎng mǎi liǎng běn shū.',
            vietnamese: 'Tôi muốn mua 2 quyển sách.',
            highlightWords: ['两本书']
          },
          {
            id: 'ex-11-2',
            hanzi: '请给我一杯水。',
            pinyin: 'Qǐng gěi wǒ yì bēi shuǐ.',
            vietnamese: 'Xin cho tôi một cốc nước.',
            highlightWords: ['一杯水']
          },
          {
            id: 'ex-11-3',
            hanzi: '这个苹果三块钱。',
            pinyin: 'Zhè ge píngguǒ sān kuài qián.',
            vietnamese: 'Quả táo này 3 tệ.',
            highlightWords: ['个', '块']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Công thức bất biến: Số / 这 / 那 / 几 + LƯỢNG TỪ + Danh từ.',
      'Trước lượng từ, số 2 đọc là 两 (liǎng), không đọc là 二 (èr).',
      'Nhớ cặp từ: 一本书, 一个人, 一杯水, 一件衣服, 五块钱.'
    ]
  },
  {
    id: 'unit-12',
    unitNumber: 12,
    title: 'Thời gian, Ngày tháng, Thứ & Trật tự thời gian',
    chineseTitle: '时间与日期的表达法',
    category: 'ThoiGian',
    categoryLabel: 'Thời gian',
    summary: 'Quy tắc "Lớn trước - Nhỏ sau" khi nói thời gian và vị trí của trạng ngữ chỉ thời gian trong câu tiếng Trung.',
    rules: [
      {
        id: 'rule-12-1',
        title: '1. Quy tắc diễn đạt Ngày tháng & Giờ giấc (Lớn trước, Nhỏ sau)',
        formula: 'Năm (年) ➔ Tháng (月) ➔ Ngày/Mùng (日/号) ➔ Thứ (星期)\nBuổi (上午/下午) ➔ Giờ (点) ➔ Phút (分)',
        explanation: 'Khác hoàn toàn tiếng Việt (ngày trước tháng sau), tiếng Trung sắp xếp đơn vị thời gian từ lớn nhất đến nhỏ nhất.',
        notes: [
          'Năm: 2026年 (èr líng èr liù nián - đọc từng con số đơn lẻ + nián)',
          'Tháng: 8月 (bā yuè)',
          'Ngày: 15号 (hào - khẩu ngữ) hoặc 15日 (rì - văn viết)',
          'Thứ: 星期一 (Thứ Hai), 星期二 (Thứ Ba)... 星期六 (Thứ Bảy), 星期日/星期天 (Chủ Nhật)',
          'Giờ: 8点 (bā diǎn), 8点半 (8 rưỡi), 8点15分 (8 giờ 15)'
        ],
        examples: [
          {
            id: 'ex-12-1',
            hanzi: '今天是2026年8月15号，星期六。',
            pinyin: 'Jīntiān shì èr líng èr liù nián bā yuè shíwǔ hào, xīngqīliù.',
            vietnamese: 'Hôm nay là thứ Bảy, ngày 15 tháng 8 năm 2026.',
            highlightWords: ['年', '月', '号', '星期六']
          },
          {
            id: 'ex-12-2',
            hanzi: '现在是下午三点三十分。',
            pinyin: 'Xiànzài shì xiàwǔ sān diǎn sānshí fēn.',
            vietnamese: 'Bây giờ là 3 giờ 30 phút chiều.',
            highlightWords: ['下午', '点', '分']
          }
        ]
      },
      {
        id: 'rule-12-2',
        title: '2. Vị trí của Trạng ngữ chỉ thời gian trong câu',
        formula: 'Cách 1: Chủ ngữ + THỜI GIAN + Động từ + Tân ngữ\nCách 2: THỜI GIAN + Chủ ngữ + Động từ + Tân ngữ',
        explanation: 'Từ chỉ thời gian luôn đứng TRƯỚC động từ chính (có thể đứng trước hoặc sau chủ ngữ). TUYỆT ĐỐI KHÔNG đặt thời gian ở cuối câu như tiếng Việt hay tiếng Anh!',
        commonMistakes: [
          {
            incorrect: '我去北京明天。(Đặt thời gian cuối câu)',
            incorrectPinyin: 'Wǒ qù Běijīng míngtiān.',
            correct: '我明天去北京。 hoặc 明天我去北京。',
            correctPinyin: 'Wǒ míngtiān qù Běijīng. / Míngtiān wǒ qù Běijīng.',
            reason: 'Trạng ngữ chỉ thời gian bắt buộc đứng TRƯỚC động từ: S + Thời gian + V + O.'
          }
        ],
        examples: [
          {
            id: 'ex-12-3',
            hanzi: '我们明天上午九点开会。',
            pinyin: 'Wǒmen míngtiān shàngwǔ jiǔ diǎn kāihuì.',
            vietnamese: 'Chúng tôi họp vào lúc 9 giờ sáng mai.',
            highlightWords: ['明天上午九点']
          },
          {
            id: 'ex-12-4',
            hanzi: '昨天下午他去医院看医生了。',
            pinyin: 'Zuótiān xiàwǔ tā qù yīyuàn kàn yīshēng le.',
            vietnamese: 'Chiều hôm qua anh ấy đã đi bệnh viện khám bác sĩ.',
            highlightWords: ['昨天下午']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Trật tự thời gian: Lớn trước, nhỏ sau (Năm > Tháng > Ngày > Buổi > Giờ > Phút).',
      'Vị trí thời gian trong câu: Đứng TRƯỚC động từ (Chủ ngữ + Thời gian + Động từ). Cấm để thời gian ở cuối câu.'
    ]
  },
  {
    id: 'unit-13',
    unitNumber: 13,
    title: 'Cấu trúc vị trí với "在" & Phương vị từ (上, 下, 里...)',
    chineseTitle: '介词“在”与方位词',
    category: 'ViTri',
    categoryLabel: 'Vị trí & Nơi chốn',
    summary: 'Cách dùng giới từ "在" (ở/tại) để chỉ vị trí hành động và các từ chỉ phương hướng/vị trí cơ bản.',
    rules: [
      {
        id: 'rule-13-1',
        title: '1. Cấu trúc Ai đó làm gì ở đâu',
        formula: 'Chủ ngữ + 在 + NƠI CHỐN / ĐỊA ĐIỂM + ĐỘNG TỪ + Tân ngữ',
        explanation: 'Trong tiếng Trung, cụm giới từ chỉ địa điểm "在 + Nơi chốn" PHẢI đứng TRƯỚC hành động. Ngược lại với tiếng Việt ("Tôi ăn cơm ở nhà" ➔ Tiếng Trung: "Tôi ở nhà ăn cơm").',
        notes: [
          '你在哪儿工作？(Bạn làm việc ở đâu? - Hỏi nơi chốn đứng trước động từ)',
          '我在学校学习汉语。(Tôi học tiếng Trung ở trường).'
        ],
        commonMistakes: [
          {
            incorrect: '我学习汉语在学校。(Sai trật tự từ)',
            incorrectPinyin: 'Wǒ xuéxí Hànyǔ zài xuéxiào.',
            correct: '我在学校学习汉语。',
            correctPinyin: 'Wǒ zài xuéxiào xuéxí Hànyǔ.',
            reason: 'Cụm giới từ nơi chốn "在 + Nơi chốn" bắt buộc đứng TRƯỚC động từ chính.'
          }
        ],
        examples: [
          {
            id: 'ex-13-1',
            hanzi: '他在饭馆吃饭。',
            pinyin: 'Tā zài fànguǎn chī fàn.',
            vietnamese: 'Anh ấy ăn cơm ở nhà hàng.',
            highlightWords: ['在饭馆']
          },
          {
            id: 'ex-13-2',
            hanzi: '我朋友在家看电影。',
            pinyin: 'Wǒ péngyou zài jiā kàn diànyǐng.',
            vietnamese: 'Bạn tôi ở nhà xem phim.',
            highlightWords: ['在家']
          }
        ]
      },
      {
        id: 'rule-13-2',
        title: '2. Phương vị từ cơ bản (上, 下, 里, 前, 后)',
        formula: 'Danh từ + 上 (trên) / 下 (dưới) / 里 (trong) / 前面 (trước) / 后面 (sau)',
        explanation: 'Phương vị từ đứng SAU danh từ để tạo thành cụm từ chỉ vị trí cụ thể.',
        notes: [
          '桌子上 (zhuōzi shang): Trên bàn',
          '椅子下 (yǐzi xià): Dưới ghế',
          '商店里 (shāngdiàn lǐ): Trong cửa hàng',
          '学校前面 (xuéxiào qiánmian): Phía trước trường học',
          '医院后面 (yīyuàn hòumian): Phía sau bệnh viện'
        ],
        examples: [
          {
            id: 'ex-13-3',
            hanzi: '小猫在椅子下面。',
            pinyin: 'Xiǎo māo zài yǐzi xiàmian.',
            vietnamese: 'Mèo con ở dưới ghế.',
            highlightWords: ['在椅子下面']
          },
          {
            id: 'ex-13-4',
            hanzi: '我的手机在衣服里。',
            pinyin: 'Wǒ de shǒujī zài yīfu lǐ.',
            vietnamese: 'Điện thoại của tôi ở trong túi áo.',
            highlightWords: ['在衣服里']
          }
        ]
      }
    ],
    keyTakeaways: [
      'Công thức vàng: S + 在 + Địa điểm + V + O (Ở đâu làm gì).',
      'Phương vị từ đứng sau danh từ: 桌子上 (trên bàn), 学校里 (trong trường).'
    ]
  },
  {
    id: 'unit-14',
    unitNumber: 14,
    title: 'Động từ năng nguyện (会, 想, 要, 能, 可以)',
    chineseTitle: '能愿动词（助动词）',
    category: 'DongTu',
    categoryLabel: 'Động từ năng nguyện',
    summary: 'Cách dùng các trợ động từ chỉ khả năng, nguyện vọng và sự cho phép: 会 (biết), 想 (muốn/nhớ), 要 (muốn/cần), 能 (có thể).',
    rules: [
      {
        id: 'rule-14-1',
        title: '1. Động từ năng nguyện "会" (huì) - Biết qua học tập / Sẽ',
        formula: 'Chủ ngữ + 会 + Động từ (Biết làm kỹ năng gì nhờ học tập rèn luyện)',
        explanation: '"会" biểu thị một kỹ năng mà người đó biết làm do quá trình học tập (như nói tiếng Trung, bơi, nấu ăn, lái xe). Ngoài ra còn dùng để biểu thị việc gì sẽ xảy ra trong tương lai.',
        examples: [
          {
            id: 'ex-14-1',
            hanzi: '我会说汉语。',
            pinyin: 'Wǒ huì shuō Hànyǔ.',
            vietnamese: 'Tôi biết nói tiếng Trung (do học mà biết).',
            highlightWords: ['会说']
          },
          {
            id: 'ex-14-2',
            hanzi: '他不会写汉字。',
            pinyin: 'Tā bú huì xiě hànzì.',
            vietnamese: 'Anh ấy không biết viết chữ Hán.',
            highlightWords: ['不会写']
          },
          {
            id: 'ex-14-3',
            hanzi: '明天天气会很好。',
            pinyin: 'Míngtiān tiānqì huì hěn hǎo.',
            vietnamese: 'Ngày mai thời tiết sẽ rất đẹp.',
            highlightWords: ['会']
          }
        ]
      },
      {
        id: 'rule-14-2',
        title: '2. Phân biệt "想" (xiǎng) vs "要" (yào)',
        formula: '想 + V: Muốn, mong muốn (nguyện vọng tâm lý nhẹ nhàng)\n要 + V / Danh từ: Muốn, cần, phải (quyết tâm cao hơn hoặc nhu cầu cụ thể)',
        explanation: '"想" là dự định hoặc ước muốn trong đầu. "要" mang tính bắt buộc, nhu cầu thực tế hoặc quyết định hành động ngay.',
        notes: [
          '我想喝水。(Tôi muốn uống nước - nhu cầu nhẹ nhàng).',
          '我要买这个电脑。(Tôi muốn mua/sẽ mua chiếc máy tính này - hành động thực tế).',
          'Phủ định của 想 / 要 thường dùng 不想: 我不想去。(Tôi không muốn đi).'
        ],
        examples: [
          {
            id: 'ex-14-4',
            hanzi: '我想去中国旅游。',
            pinyin: 'Wǒ xiǎng qù Zhōngguó lǚyóu.',
            vietnamese: 'Tôi muốn đi du lịch Trung Quốc.',
            highlightWords: ['想去']
          },
          {
            id: 'ex-14-5',
            hanzi: '我要喝一杯热茶。',
            pinyin: 'Wǒ yào hē yì bēi rè chá.',
            vietnamese: 'Tôi muốn uống một cốc trà nóng.',
            highlightWords: ['要喝']
          }
        ]
      },
      {
        id: 'rule-14-3',
        title: '3. "能" (néng) - Có thể (Khả năng thực tế, Điều kiện cho phép)',
        formula: 'Chủ ngữ + 能 / 不能 + Động từ',
        explanation: 'Dùng khi nói về năng lực bẩm sinh/thực tế hoặc hoàn cảnh khách quan có cho phép thực hiện hành động hay không.',
        examples: [
          {
            id: 'ex-14-6',
            hanzi: '我今天身体不好，不能去上班。',
            pinyin: 'Wǒ jīntiān shēntǐ bù hǎo, bù néng qù shàngbān.',
            vietnamese: 'Hôm nay sức khỏe tôi không tốt, không thể đi làm.',
            highlightWords: ['不能去']
          },
          {
            id: 'ex-14-7',
            hanzi: '你明天能来我家吗？',
            pinyin: 'Nǐ míngtiān néng lái wǒ jiā ma?',
            vietnamese: 'Ngày mai bạn có thể đến nhà tôi không?',
            highlightWords: ['能来']
          }
        ]
      }
    ],
    keyTakeaways: [
      '会: Biết làm gì nhờ học tập (học lái xe, học tiếng Hán).',
      '想: Mong muốn dự tính trong suy nghĩ.',
      '要: Cần, muốn, dự định làm ngay.',
      '能: Có thể (điều kiện/khả năng khách quan cho phép).'
    ]
  }
];
