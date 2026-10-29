import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Compass,
  Landmark,
  Moon,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Users,
  MapPin,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Hồ Sơ Dự Án HIST 2026 — Saigon: Veilwake",
  description:
    "Tài liệu đặc tả giải pháp du lịch tương tác đô thị kết hợp AR và di sản văn hóa Sài Gòn phục vụ đánh giá tại HIST 2026.",
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-page text-deep-blue pb-20">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-border py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-blue hover:text-deep-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Trang Chủ</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-ocean-blue font-bold">
              HIST 2026 · Project Dossier
            </span>
            <span className="text-xs text-body-blue hidden sm:inline">
              Mã hồ sơ: SVW-2026-MVP
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Header Hero for Project Overview */}
        <div className="border-b border-sky-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-ocean-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Tài liệu Đề Xuất Đổi Mới Sáng Tạo Du Lịch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue">
            Hồ Sơ Dự Án: Saigon: Veilwake
          </h1>
          <p className="text-base sm:text-lg text-body-blue mt-3 max-w-3xl leading-relaxed">
            Nền tảng du lịch đô thị tương tác kết hợp khám phá văn hóa thực địa, công nghệ thực tế tăng cường (AR) và hộ chiếu kỷ niệm số tại Thành phố Hồ Chí Minh.
          </p>
        </div>

        {/* 2-Column: Table of Contents (Left 4 cols) + Content (Right 8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          {/* Quick Anchor Navigation (Sticky Desktop) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="postcard-card p-5 bg-white border border-sky-border rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ocean-blue mb-3">
                Mục lục tài liệu
              </h3>
              <nav className="space-y-1.5 text-xs text-body-blue font-medium">
                <a href="#summary" className="block py-1 hover:text-ocean-blue">
                  1. Tóm tắt giải pháp (Executive Summary)
                </a>
                <a href="#problem" className="block py-1 hover:text-ocean-blue">
                  2. Vấn đề & Giả thuyết nghiên cứu
                </a>
                <a href="#loop" className="block py-1 hover:text-ocean-blue">
                  3. Vòng lặp trải nghiệm (Experience Loop)
                </a>
                <a href="#tourism-value" className="block py-1 hover:text-ocean-blue">
                  4. Ba trụ cột giá trị du lịch
                </a>
                <a href="#differentiation" className="block py-1 hover:text-ocean-blue">
                  5. Điểm khác biệt & Đổi mới sáng tạo
                </a>
                <a href="#mvp-scope" className="block py-1 hover:text-ocean-blue">
                  6. Phạm vi MVP & Giới hạn thực địa
                </a>
                <a href="#roadmap" className="block py-1 hover:text-ocean-blue">
                  7. Tầm nhìn mở rộng (Scalability)
                </a>
                <a href="#team" className="block py-1 hover:text-ocean-blue">
                  8. Đội ngũ & Thông tin liên hệ
                </a>
              </nav>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
              <span className="font-bold block flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" /> Nguyên tắc trung thực
              </span>
              <p className="text-[11px] leading-relaxed">
                Tài liệu phân định rõ ràng giữa tính năng cốt lõi đã chạy thực tế trong Chapter Zero và các định hướng mở rộng trong tương lai.
              </p>
            </div>
          </aside>

          {/* Detailed Content Modules (8 cols) */}
          <main className="lg:col-span-8 space-y-12">
            {/* 1. EXECUTIVE SUMMARY */}
            <section id="summary" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                1. Tóm Tắt Giải Pháp (Executive Summary)
              </h2>
              <p className="text-sm text-body-blue leading-relaxed">
                <strong>Saigon: Veilwake</strong> là ứng dụng di động dẫn dắt du khách và giới trẻ tự mình khám phá chiều sâu văn hóa của Sài Gòn bằng cách biến không gian thành phố thành một hành trình phiêu lưu tương tác:
              </p>
              <ul className="text-sm text-body-blue space-y-2 list-disc pl-5">
                <li>
                  <strong>Ban ngày:</strong> Bản đồ định vị GPS đưa người chơi đến các địa danh kiến trúc có thật, quan sát chi tiết lịch sử để giải thử thách và nhận huy hiệu kỷ niệm cá nhân hóa.
                </li>
                <li>
                  <strong>Ban đêm:</strong> Mở ra lớp kể chuyện kỳ ảo (Ký Giới) thông qua camera AR, giải mã các thông điệp bị bỏ quên và đánh thức Cảnh Ký Ức trong không gian an toàn.
                </li>
                <li>
                  <strong>Đối tượng phục vụ:</strong> Khách du lịch tự túc, nhóm bạn trẻ tại TP.HCM, cộng đồng yêu văn hóa lịch sử và các đơn vị xúc tiến điểm đến.
                </li>
              </ul>
            </section>

            {/* 2. PROBLEM & INSIGHT */}
            <section id="problem" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                2. Vấn Đề & Giả Thuyết Nghiên Cứu
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200">
                  <h3 className="font-bold text-rose-900 mb-1">Thực trạng quan sát</h3>
                  <p className="text-body-blue leading-relaxed">
                    Nhiều trải nghiệm tham quan đô thị hiện nay dừng lại ở việc check-in chụp ảnh vài phút rồi rời đi. Du khách ít có cơ hội hoặc động lực tương tác sâu với giá trị lịch sử và câu chuyện của điểm đến.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200">
                  <h3 className="font-bold text-teal-900 mb-1">Giả thuyết của Veilwake</h3>
                  <p className="text-body-blue leading-relaxed">
                    Nếu việc tìm hiểu văn hóa được chuyển hóa thành cơ chế giải đố gắn liền với quan sát thực địa và phần thưởng là kỷ niệm số cá nhân, người chơi sẽ chủ động khám phá lâu hơn và trân trọng di sản hơn.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. EXPERIENCE LOOP */}
            <section id="loop" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                3. Vòng Lặp Trải Nghiệm (Experience Loop)
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">BƯỚC 1</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">Bản đồ gợi ý địa danh</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">BƯỚC 2</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">Quan sát & giải câu đố</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">BƯỚC 3</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">Nhận Huy hiệu & Mảnh Ký Ức</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">BƯỚC 4</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">AR định vị ban đêm</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">BƯỚC 5</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">Lưu Cảnh Ký Ức Hộ Chiếu</span>
                  </div>
                </div>
                <p className="text-xs text-body-blue italic text-center">
                  * Vòng lặp khép kín thúc đẩy du khách tham quan cả ban ngày lẫn buổi tối một cách tự nhiên.
                </p>
              </div>
            </section>

            {/* 4. THREE TOURISM VALUES */}
            <section id="tourism-value" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                4. Ba Trụ Cột Giá Trị Cho Du Lịch TP.HCM
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">1. Phát triển du lịch văn hóa sáng tạo</h3>
                    <p className="text-body-blue mt-1">
                      Giúp các công trình di sản (như Bưu điện Trung tâm Sài Gòn, Nhà thờ Đức Bà) giao tiếp với thế hệ trẻ qua ngôn ngữ kể chuyện hiện đại, không khô cứng.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">2. Thúc đẩy kinh tế & du lịch đêm an toàn</h3>
                    <p className="text-body-blue mt-1">
                      Đưa ra lý do để du khách quay lại điểm đến vào ban đêm với kịch bản giải đố và trải nghiệm AR, gia tăng mức độ gắn kết với các tuyến phố đi bộ lân cận.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">3. Đẩy mạnh chuyển đổi số ngành du lịch</h3>
                    <p className="text-body-blue mt-1">
                      Ứng dụng định vị GPS, markerless AR và số hóa kỷ niệm du lịch mà không cần lắp đặt phần cứng tốn kém hoặc gây tác động tiêu cực đến di tích.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. DIFFERENTIATION */}
            <section id="differentiation" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                5. Điểm Khác Biệt & Đổi Mới Sáng Tạo
              </h2>
              <div className="p-4 rounded-2xl bg-white border border-sky-border text-xs sm:text-sm text-body-blue space-y-2.5">
                <p>
                  ✓ <strong>Không phải game thuần túy, không phải hướng dẫn viên khô khan:</strong> Veilwake đứng ở giao điểm giữa hướng dẫn du lịch tự túc và trò chơi nhập vai đô thị nhẹ nhàng (light urban adventure).
                </p>
                <p>
                  ✓ <strong>Tôn trọng tuyệt đối di sản thực địa:</strong> Mọi thử thách đều đòi hỏi người chơi nhìn vào kiến trúc thật, không chăm chăm dán mắt vào điện thoại.
                </p>
                <p>
                  ✓ <strong>Huy hiệu bưu thiếp cá nhân hóa:</strong> Thay vì chỉ nhận ảnh minh họa tĩnh, người chơi được lồng bức ảnh do chính mình chụp vào khung tem lưu niệm độc bản.
                </p>
              </div>
            </section>

            {/* 6. MVP SCOPE & EVIDENCE */}
            <section id="mvp-scope" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                6. Phạm Vi MVP & Giới Hạn Thử Nghiệm
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border text-xs space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-blue">Chapter Zero — Lá Thư Chưa Từng Đến:</strong>
                    <span className="text-body-blue block mt-0.5">
                      MVP tập trung trọn vẹn vào 2 địa điểm biểu tượng của Sài Gòn: <strong>Bưu điện Trung tâm TP.HCM</strong> (ban ngày) và <strong>Khu vực công cộng ngoài Nhà thờ Đức Bà</strong> (buổi tối).
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl overflow-hidden border border-sky-border relative h-36">
                    <Image
                      src="/assets/hero_post_office_day_v1.webp"
                      alt="Bưu điện Trung tâm TP.HCM"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[9px] px-2 py-0.5 rounded bg-black/60 text-white font-bold backdrop-blur-xs">
                      Chặng 1: Bưu điện Trung tâm (Ban ngày)
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-sky-border relative h-36">
                    <Image
                      src="/assets/chapter0_stop2_v1.webp"
                      alt="Nhà thờ Đức Bà ban đêm"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[9px] px-2 py-0.5 rounded bg-black/60 text-white font-bold backdrop-blur-xs">
                      Chặng 2: Nhà thờ Đức Bà (Buổi tối)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-blue">Giới hạn kỹ thuật & an toàn thực địa:</strong>
                    <span className="text-body-blue block mt-0.5">
                      Yêu cầu điện thoại hỗ trợ ARCore (Android); chỉ kích hoạt AR tại khu vực dừng chân an toàn ngoài vỉa hè công cộng; không áp dụng tính năng game lên khu vực tôn giáo/nghi lễ.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. ROADMAP */}
            <section id="roadmap" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                7. Tầm Nhìn Mở Rộng (Scalability Roadmap)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">Giai đoạn 1</span>
                  <strong className="text-deep-blue block mt-1">Hoàn thiện Chapter Zero</strong>
                  <p className="text-body-blue mt-1">Khảo sát trải nghiệm người dùng thực tế và tinh chỉnh câu đố văn hóa.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">Giai đoạn 2</span>
                  <strong className="text-deep-blue block mt-1">Mở rộng mạng lưới di sản</strong>
                  <p className="text-body-blue mt-1">Tuyến ẩm thực văn hóa Chợ Lớn (Quận 5), bảo tàng mỹ thuật và làng nghề.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">Giai đoạn 3</span>
                  <strong className="text-deep-blue block mt-1">Liên kết vùng (Vũng Tàu)</strong>
                  <p className="text-body-blue mt-1">Tuyến hành trình khám phá ngọn hải đăng và cảnh quan ven biển.</p>
                </div>
              </div>
            </section>

            {/* 8. TEAM & CONTACT */}
            <section id="team" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                8. Đội Ngũ Thực Hiện & Liên Hệ
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-ocean-blue">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue text-sm">Saigon: Veilwake Project Team</h3>
                    <p className="text-body-blue">Dự án dự thi Cuộc thi Sáng tạo Khởi nghiệp Du lịch HIST 2026</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-sky-100">
                  <div>
                    <span className="text-body-blue block">Lĩnh vực dự thi:</span>
                    <strong className="text-deep-blue">Du lịch thông minh & Đổi mới sáng tạo văn hóa</strong>
                  </div>
                  <div>
                    <span className="text-body-blue block">Tình trạng dự án:</span>
                    <strong className="text-teal-700">Prototype & Field Validation Phase</strong>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

