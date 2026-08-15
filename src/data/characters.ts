export interface CharacterProfile {
  id: string;
  nameZh: string;
  namePinyin: string;
  nameVi: string;
  avatar: string;
  role: string;
  description: string;
  scene: 'overseas' | 'domestic' | 'system';
}

export const COURSE_CHARACTERS: Record<string, CharacterProfile> = {
  xiaoyu: {
    id: 'xiaoyu',
    nameZh: 'AI小语',
    namePinyin: 'AI Xiǎoyǔ',
    nameVi: 'AI Tiểu Ngữ',
    avatar: '🤖',
    role: 'Trợ lý học tập AI thông minh',
    description: 'Người bạn AI đồng hành giải thích ngữ pháp, hướng dẫn phát âm và văn hóa xuyên suốt giáo trình.',
    scene: 'system'
  },
  wangyifei: {
    id: 'wangyifei',
    nameZh: '王一飞',
    namePinyin: 'Wáng Yīfēi',
    nameVi: 'Vương Nhất Phi (Cô giáo Vương)',
    avatar: '👩‍🏫',
    role: 'Giáo viên tiếng Trung giảng dạy ở nước ngoài',
    description: 'Nữ, người Bắc Kinh, khoảng 30 tuổi, giáo viên chủ nhiệm lớp HSK 1 ở nước ngoài.',
    scene: 'overseas'
  },
  baijiayue: {
    id: 'baijiayue',
    nameZh: '白家月',
    namePinyin: 'Bái Jiāyuè',
    nameVi: 'Bạch Gia Nguyệt',
    avatar: '👱‍♀️',
    role: 'Du học sinh người Pháp',
    description: 'Nữ sinh viên đại học người Pháp, ngoài 20 tuổi, chăm chỉ và hào hứng học tiếng Trung.',
    scene: 'overseas'
  },
  annie: {
    id: 'annie',
    nameZh: '安妮',
    namePinyin: 'Ānnī',
    nameVi: 'Annie',
    avatar: '👩',
    role: 'Du học sinh người Canada',
    description: 'Nữ sinh viên đại học người Canada, ngoài 20 tuổi, bạn cùng lớp của Bạch Gia Nguyệt.',
    scene: 'overseas'
  },
  chentianzhong: {
    id: 'chentianzhong',
    nameZh: '陈天中',
    namePinyin: 'Chén Tiānzhōng',
    nameVi: 'Trần Thiên Trung',
    avatar: '👨',
    role: 'Du học sinh người Thái Lan',
    description: 'Nam sinh viên đại học người Thái Lan, ngoài 20 tuổi, tính tình cởi mở, thân thiện.',
    scene: 'overseas'
  },
  liwen: {
    id: 'liwen',
    nameZh: '李文',
    namePinyin: 'Lǐ Wén',
    nameVi: 'Lý Văn',
    avatar: '👨‍⚕️',
    role: 'Du học sinh Trung Quốc ngành Y',
    description: 'Nam, người Bắc Kinh, ngoài 20 tuổi, sinh viên y khoa du học tại nước ngoài.',
    scene: 'overseas'
  },
  wangyixue: {
    id: 'wangyixue',
    nameZh: '王一雪',
    namePinyin: 'Wáng Yīxuě',
    nameVi: 'Vương Nhất Tuyết',
    avatar: '👩‍💼',
    role: 'Chị họ của Vương Nhất Phi (Nhân viên văn phòng)',
    description: 'Nữ, ngoài 30 tuổi, sống và làm việc tại công ty đa quốc gia ở Bắc Kinh.',
    scene: 'domestic'
  },
  liuming: {
    id: 'liuming',
    nameZh: '刘明',
    namePinyin: 'Liú Míng',
    nameVi: 'Lưu Minh',
    avatar: '👨‍⚕️',
    role: 'Chồng của Vương Nhất Tuyết (Bác sĩ)',
    description: 'Nam, khoảng 40 tuổi, bác sĩ giàu kinh nghiệm tại bệnh viện lớn ở Bắc Kinh.',
    scene: 'domestic'
  },
  liuxiaoxue: {
    id: 'liuxiaoxue',
    nameZh: '刘小雪',
    namePinyin: 'Liú Xiǎoxuě',
    nameVi: 'Lưu Tiểu Tuyết',
    avatar: '👧',
    role: 'Con gái của Lưu Minh & Vương Nhất Tuyết',
    description: 'Bé gái 12 tuổi, học sinh trung học cơ sở.',
    scene: 'domestic'
  },
  liuxiaoming: {
    id: 'liuxiaoming',
    nameZh: '刘小明',
    namePinyin: 'Liú Xiǎomíng',
    nameVi: 'Lưu Tiểu Minh',
    avatar: '👦',
    role: 'Con trai của Lưu Minh & Vương Nhất Tuyết',
    description: 'Bé trai 5 tuổi, học mẫu giáo, tinh nghịch đáng yêu.',
    scene: 'domestic'
  },
  yangtongle: {
    id: 'yangtongle',
    nameZh: '杨同乐',
    namePinyin: 'Yáng Tónglè',
    nameVi: 'Dương Đồng Lạc',
    avatar: '👨‍💻',
    role: 'Đồng nghiệp của Vương Nhất Tuyết',
    description: 'Nam, người Thượng Hải, ngoài 30 tuổi, làm việc cùng công ty với Vương Nhất Tuyết.',
    scene: 'domestic'
  },
  drhu: {
    id: 'drhu',
    nameZh: '胡医生',
    namePinyin: 'Hú Yīshēng',
    nameVi: 'Bác sĩ Hồ',
    avatar: '🥼',
    role: 'Đồng nghiệp của bác sĩ Lưu Minh',
    description: 'Bác sĩ trẻ làm việc tại bệnh viện.',
    scene: 'domestic'
  }
};
