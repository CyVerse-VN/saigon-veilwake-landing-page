export interface StoryPageData {
  id: string;
  actNumber: {
    vi: string;
    en: string;
  };
  title: {
    vi: string;
    en: string;
  };
  location: {
    vi: string;
    en: string;
  };
  timeOfDay: {
    vi: string;
    en: string;
  };
  tag: {
    vi: string;
    en: string;
  };
  vintageLetter: {
    sender: string;
    recipient: string;
    date: string;
    quote: {
      vi: string;
      en: string;
    };
    annotation: {
      vi: string;
      en: string;
    };
  };
  narrativeBody: {
    vi: string;
    en: string;
  };
  culturalClue: {
    label: {
      vi: string;
      en: string;
    };
    detail: {
      vi: string;
      en: string;
    };
  };
  companionTip: {
    vi: string;
    en: string;
  };
  phoneMockup: {
    screenType: "map" | "puzzle" | "twilight" | "ar-camera";
    headerTitle: {
      vi: string;
      en: string;
    };
    badgeText: {
      vi: string;
      en: string;
    };
    promptText: {
      vi: string;
      en: string;
    };
    actionBtnText: {
      vi: string;
      en: string;
    };
    statusDetail: {
      vi: string;
      en: string;
    };
    metaCoordinates?: string;
    options?: {
      id: number;
      text: {
        vi: string;
        en: string;
      };
      isCorrect?: boolean;
    }[];
  };
}

export const storybookPages: StoryPageData[] = [
  {
    id: "act-1",
    actNumber: {
      vi: "HỒI I · KHỞI HÀNH",
      en: "ACT I · DEPARTURE",
    },
    title: {
      vi: "Bức Thư Thất Lạc Năm 1972",
      en: "The Lost Letter of 1972",
    },
    location: {
      vi: "Bưu Điện Trung Tâm Sài Gòn · Số 2 Công xã Paris",
      en: "Saigon Central Post Office · No. 2 Paris Commune Sq.",
    },
    timeOfDay: {
      vi: "08:15 Sáng · Nắng sớm qua vòm me cổ thụ",
      en: "08:15 AM · Morning sun slants through tamarind trees",
    },
    tag: {
      vi: "Khám Phá Thực Địa",
      en: "Physical Discovery",
    },
    vintageLetter: {
      sender: "Người gửi: Thầy giáo già (1972)",
      recipient: "Gửi người nhận tương lai tại bưu cục Sài Gòn",
      date: "Sài Gòn, ngày 14 tháng 4 năm 1972",
      quote: {
        vi: "“Nếu bạn cầm trên tay bức thư này, nghĩa là thành phố đã đi qua thêm nửa thế kỷ. Những viên gạch vòm trần này vẫn nhớ từng bước chân người gửi gắm tin yêu...”",
        en: "“If you hold this letter in your hands, the city has journeyed past another half-century. Yet these vaulted bricks still recall every footstep of those sending hope...”",
      },
      annotation: {
        vi: "Dấu bưu triện cổ mờ nhạt — cần định vị thực địa để phục hồi nét mực",
        en: "Faded vintage postmark — requires field GPS alignment to restore ink",
      },
    },
    narrativeBody: {
      vi: "Tại cửa chính Bưu điện, bạn mở ứng dụng Veilwake. Tín hiệu GPS bắt đầu đồng bộ với tọa độ lịch sử. Bạn bước vào đại sảnh mái vòm nơi ánh sáng vàng cổ điển tràn ngập không gian, bắt đầu lần theo dấu vết của bức thư chưa từng đến tay người nhận.",
      en: "Standing at the grand portal of the Central Post Office, you open the Veilwake app. GPS signals sync with historical coordinates. You step into the majestic vaulted hall, embarking on a quest to trace a letter that never reached its destination.",
    },
    culturalClue: {
      label: {
        vi: "Chi tiết kiến trúc",
        en: "Architectural Clue",
      },
      detail: {
        vi: "Mái vòm thùng tròn thiết kế bởi Gustave Eiffel kết hợp chi tiết hoa văn Phục Hưng và hệ cột sắt thanh thoát.",
        en: "Barrel-vaulted iron trusses engineered by Gustave Eiffel blending Renaissance motifs with elegant ironwork.",
      },
    },
    companionTip: {
      vi: "Vara mách bạn: Hãy đứng ngay dưới tâm vòm đồng hồ lớn để nhận tín hiệu định vị mạnh nhất nhé!",
      en: "Vara whispers: Stand directly beneath the central clock vault for the strongest signal lock!",
    },
    phoneMockup: {
      screenType: "map",
      headerTitle: {
        vi: "Bản Đồ Ký Giới · Tọa Độ",
        en: "Veil Map · Coordinates",
      },
      badgeText: {
        vi: "Cách bạn 45m · Đã định vị",
        en: "45m away · GPS Locked",
      },
      promptText: {
        vi: "Chạm 'Bắt đầu nhiệm vụ' để quét hoa văn vòm bưu cục",
        en: "Tap 'Start Quest' to scan post office barrel vault",
      },
      actionBtnText: {
        vi: "Bắt đầu nhiệm vụ thực địa",
        en: "Start Field Quest",
      },
      statusDetail: {
        vi: "Tọa độ: 10.7798° N, 106.6998° E",
        en: "Coords: 10.7798° N, 106.6998° E",
      },
      metaCoordinates: "10.7798° N, 106.6998° E",
    },
  },
  {
    id: "act-2",
    actNumber: {
      vi: "HỒI II · GIẢI MÃ",
      en: "ACT II · DECIPHER",
    },
    title: {
      vi: "Manh Mối Dưới Vòm Sắt Eiffel",
      en: "Clues Beneath Eiffel's Vault",
    },
    location: {
      vi: "Dãy Bàn Viết Thư Cổ Điển & Hộp Thư Gỗ 1891",
      en: "Antique Writing Desks & 1891 Wooden Letterboxes",
    },
    timeOfDay: {
      vi: "09:30 Sáng · Nhịp sống đô thị nhộn nhịp",
      en: "09:30 AM · Bustling urban rhythm",
    },
    tag: {
      vi: "Câu Đố Văn Hóa",
      en: "Cultural Riddle",
    },
    vintageLetter: {
      sender: "Dấu vết: Mảnh giấy đính kèm",
      recipient: "Mã hóa theo hoa văn gạch sàn",
      date: "Tháng 10 năm 1891",
      quote: {
        vi: "“Nhìn lên trần cao sẽ thấy tên những vĩ nhân ngành điện tín. Nhưng nhìn xuống chân, bạn mới thấy hướng đi của những phong thư xuyên đại dương.”",
        en: "“Look up to see the titans of telegraphy etched in gold. But look down at your feet to find which direction oceanic correspondence once sailed.”",
      },
      annotation: {
        vi: "Khám phá bản đồ cổ vẽ hai bờ sông Sài Gòn & tuyến cáp điện ngầm",
        en: "Discover antique maps depicting the Saigon River and undersea cables",
      },
    },
    narrativeBody: {
      vi: "Tại các bốt điện thoại gỗ cổ kính, ứng dụng đặt ra thử thách quan sát: Hãy tìm thấy bản đồ cổ vẽ hệ thống viễn thông Nam Kỳ xưa. Khi câu trả lời chính xác được chọn, Mảnh Ký Ức đầu tiên bắt đầu sáng rực lên trong điện thoại của bạn.",
      en: "Beside the polished wooden phone booths, the app presents a keen observation puzzle: Locate the hand-painted antique map of historic Southern telegraphy. With the correct answer chosen, your first Memory Shard illuminates in your hand.",
    },
    culturalClue: {
      label: {
        vi: "Cột mốc lịch sử",
        en: "Historical Landmark",
      },
      detail: {
        vi: "Hai bản đồ lịch sử vẽ tay trên tường đối diện nhau: 'Lignes télégraphiques du Sud Vietnam' (1892) và 'Saigon et ses environs' (1892).",
        en: "Two hand-painted historic wall maps facing each other: 'Lignes télégraphiques du Sud Vietnam' (1892) & 'Saigon et ses environs' (1892).",
      },
    },
    companionTip: {
      vi: "Vara gợi ý: Chú ý hai bức tranh bản đồ khổng lồ hai bên tường sảnh chính nhé!",
      en: "Vara hints: Pay close attention to the two giant historic map frescoes on either wall!",
    },
    phoneMockup: {
      screenType: "puzzle",
      headerTitle: {
        vi: "Thử Thách Quan Sát · Sảnh Chính",
        en: "Observation Quest · Main Hall",
      },
      badgeText: {
        vi: "Câu đố văn hóa 01/01",
        en: "Cultural Riddle 01/01",
      },
      promptText: {
        vi: "Hai bản đồ vẽ tay hai bên tường đại sảnh mô tả điều gì?",
        en: "What do the two hand-painted historic maps on the hall walls depict?",
      },
      actionBtnText: {
        vi: "Xác nhận lời giải",
        en: "Submit Answer",
      },
      statusDetail: {
        vi: "Đã quan sát: Bản đồ 1892",
        en: "Observed: 1892 Map Fresco",
      },
      options: [
        {
          id: 1,
          text: {
            vi: "Tuyến xe điện chạy qua Bến Thành và Chợ Lớn",
            en: "Historic tram routes connecting Ben Thanh and Cholon",
          },
          isCorrect: false,
        },
        {
          id: 2,
          text: {
            vi: "Tuyến cáp điện tín Nam Kỳ & Bản đồ Sài Gòn 1892",
            en: "Southern telegraph lines & 1892 Saigon regional map",
          },
          isCorrect: true,
        },
        {
          id: 3,
          text: {
            vi: "Hành trình tàu thủy từ Cần Giờ về Cảng Sài Gòn",
            en: "Steamer maritime voyages from Can Gio to Saigon Port",
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "act-3",
    actNumber: {
      vi: "HỒI III · CHUYỂN GIAO",
      en: "ACT III · TWILIGHT",
    },
    title: {
      vi: "Khi Hoàng Hôn Phủ Bóng Ký Giới",
      en: "When Dusk Veils the Realm",
    },
    location: {
      vi: "Quảng Trường Công Xã Paris · Trước Nhà Thờ Đức Bà",
      en: "Paris Commune Square · Facing Notre Dame Cathedral",
    },
    timeOfDay: {
      vi: "18:00 Hoàng Hôn · Thành phố lên đèn neon",
      en: "06:00 PM Twilight · Neon city lights awaken",
    },
    tag: {
      vi: "Chuyển Đổi Ngày/Đêm",
      en: "Day-to-Night Shift",
    },
    vintageLetter: {
      sender: "Gợi ý: Lời dặn cuối phong thư",
      recipient: "Hẹn ước dưới chân tháp chuông",
      date: "Chập tối, 1972",
      quote: {
        vi: "“Chờ khi chuông giáo đường ngân lên hồi sáu giờ chiều, khi ráng chiều biến thành màu lam ngọc, hãy mở chiếc phong bì thứ hai...”",
        en: "“Wait until the church bells chime six in the evening, when twilight sky turns deep turquoise, then unseal the second envelope...”",
      },
      annotation: {
        vi: "Thời khắc Ký Giới thức tỉnh — Chuyển giao giữa hai trạng thái ánh sáng",
        en: "The moment the Veil realm awakens — Shifting between two ambient states",
      },
    },
    narrativeBody: {
      vi: "Ánh mặt trời lặn dần sau những ngọn cây me. Giao diện ứng dụng tự động chuyển sang chế độ Hoàng Hôn Huyền Ảo. Cánh Điệp Ức trên màn hình rung rinh báo hiệu: Không gian thực tại và Ký Giới đã bắt đầu hòa làm một.",
      en: "The sun descends past the crowns of ancient trees. The app seamlessly transitions into Twilight Mode. Memory Butterfly wings flutter upon your screen, signaling that reality and the Veil have begun to merge.",
    },
    culturalClue: {
      label: {
        vi: "Trải nghiệm an toàn",
        en: "Pedestrian Safety",
      },
      detail: {
        vi: "Quảng trường đi bộ Công xã Paris là không gian công cộng thoáng rộng, an toàn tuyệt đối cho du khách dừng chân ngắm cảnh.",
        en: "Paris Commune Square pedestrian zone provides a broad, secure open space ideal for tourists to pause and admire the scene.",
      },
    },
    companionTip: {
      vi: "Vara nhắc bạn: Tìm một băng ghế đá nhìn thẳng về phía hai tháp chuông để chuẩn bị bật ống kính AR nhé!",
      en: "Vara advises: Find a quiet stone bench facing the twin bell towers to prepare your AR lens!",
    },
    phoneMockup: {
      screenType: "twilight",
      headerTitle: {
        vi: "Radar Hoàng Hôn · Ký Giới",
        en: "Twilight Radar · Veil",
      },
      badgeText: {
        vi: "Chế độ đêm đã kích hoạt · 18:05",
        en: "Night Mode Active · 06:05 PM",
      },
      promptText: {
        vi: "Phát hiện tần số dao động Điệp Ức tại tọa độ tháp chuông",
        en: "Memory Butterfly frequency detected near the bell towers",
      },
      actionBtnText: {
        vi: "Khởi động Ống Kính AR",
        en: "Launch AR Lens",
      },
      statusDetail: {
        vi: "Ánh sáng thực địa: Đạt chuẩn AR",
        en: "Ambient light: AR Ready",
      },
      metaCoordinates: "10.7797° N, 106.6990° E",
    },
  },
  {
    id: "act-4",
    actNumber: {
      vi: "HỒI IV · THỨC TỈNH",
      en: "ACT IV · AWAKENING",
    },
    title: {
      vi: "Đàn Chim Giấy Bay Vào Bầu Trời Đêm",
      en: "Origami Flock Soaring into Night",
    },
    location: {
      vi: "Không Gian Thực Tế Tăng Cường (AR) · Tháp Chuông Đức Bà",
      en: "Augmented Reality (AR) Space · Notre Dame Spire",
    },
    timeOfDay: {
      vi: "19:45 Đêm · Ánh sáng Ký Giới huyền ảo",
      en: "07:45 PM Night · Luminous Veil ambience",
    },
    tag: {
      vi: "Cảnh Ký Ức #00",
      en: "Memory Scene #00",
    },
    vintageLetter: {
      sender: "Bức thư hoàn tất hành trình",
      recipient: "Trao gửi cho du khách hiện đại",
      date: "Khoảnh khắc hiện tại",
      quote: {
        vi: "“Cảm ơn bạn đã mang lá thư này đến đích. Những lời yêu thương dù trễ muộn bao lâu, một khi được nhớ đến, đều sẽ hóa thành ánh sao bất tử...”",
        en: "“Thank you for bringing this letter home. Words of devotion, no matter how delayed, once remembered, transform into immortal starlight...”",
      },
      annotation: {
        vi: "Vụ án kết thúc — Bạn nhận được Tem Kỷ Niệm Vàng & Cảnh Ký Ức vĩnh viễn",
        en: "Mystery resolved — You receive the Golden Souvenir Stamp & permanent Memory Scene",
      },
    },
    narrativeBody: {
      vi: "Khi bạn giơ camera hướng về bầu trời phía sau tháp chuông, phong thư năm 1972 khẽ mở ra. Hàng trăm con chim giấy phát sáng bay vút lên bầu trời đêm Sài Gòn, tạo nên một cảnh tượng kỳ ảo khó quên. Bạn nhấn 'Đóng Mộc Kỷ Niệm' để lưu giữ khoảnh khắc này.",
      en: "As you point your camera toward the sky above the spires, the 1972 envelope gently unfolds. Hundreds of luminous origami birds take flight into Saigon's night sky. You tap 'Stamp Souvenir' to preserve this unforgettable moment forever.",
    },
    culturalClue: {
      label: {
        vi: "Ý nghĩa di sản",
        en: "Heritage Significance",
      },
      detail: {
        vi: "Kết nối cảm xúc giữa thế hệ quá khứ và du khách hiện đại thông qua công nghệ AR không xâm hại di tích.",
        en: "Emotional bridge between past generations and modern travelers via non-invasive AR technology.",
      },
    },
    companionTip: {
      vi: "Vara chúc mừng: Bạn đã hoàn thành xuất sắc Chapter Zero! Nhớ tải bưu thiếp kỷ niệm về điện thoại nhé!",
      en: "Vara cheers: You have completed Chapter Zero! Be sure to save your souvenir postcard!",
    },
    phoneMockup: {
      screenType: "ar-camera",
      headerTitle: {
        vi: "Ống Kính Ký Giới · AR Camera",
        en: "Veil Lens · AR Camera View",
      },
      badgeText: {
        vi: "Đã đánh thức Cảnh Ký Ức #00",
        en: "Awakened Memory Scene #00",
      },
      promptText: {
        vi: "Đàn chim giấy mang thông điệp 1972 bay lượn trên bầu trời",
        en: "Flock of origami birds carrying 1972 message into the stars",
      },
      actionBtnText: {
        vi: "Đóng Dấu Mộc & Lưu Bưu Thiếp",
        en: "Stamp Postcard & Save PNG",
      },
      statusDetail: {
        vi: "Thành tựu: 100% Hoàn thành",
        en: "Achievement: 100% Complete",
      },
    },
  },
];

