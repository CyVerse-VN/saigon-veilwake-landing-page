# SAIGON: VEILWAKE

## LANDING PAGE — UI/UX DESIGN SPECIFICATION v1.1 · LIGHT TRAVEL EDITION

**Creative Direction:** Bright Cinematic Travel Storytelling · Day-to-Night Reveal · Interactive Product Showcase · Light Editorial Web Design  
**Tagline:** *Explore by Day. Awaken by Night.*  
**Tài liệu:** Đặc tả thiết kế website giới thiệu sản phẩm, phục vụ HIST 2026 trước mắt và có thể tái sử dụng cho các giai đoạn phát triển tiếp theo.  
**Ngày chốt định hướng:** 28/10/2026  
**Trạng thái:** Đã khóa định hướng sản phẩm, copy Hero, bố cục tám phân cảnh, **hệ màu sáng và phong cách editorial du lịch theo ảnh tham chiếu mới**, interactive showcase. Các media/cảnh thực tế và thông số kỹ thuật cụ thể cần triển khai/kiểm chứng.
**Tham chiếu hình ảnh ưu tiên (2026-10-28):** `a_clean_pastel_modern_travel_app_landing_page_mo.png` (bản mockup landing page SÁNG được chốt về visual/layout), `Saigon Veilwake Theme Showcase.png` (mẫu chuẩn về **ngôn ngữ hình ảnh ứng dụng**); **bản ảnh thiết kế nền tối trước đó không còn là art direction**.
**Loại tài liệu:** Design specification + implementation handoff. Ảnh tham chiếu là *visual intent*, không phải bằng chứng tính năng/cấu trúc dữ liệu đã triển khai.

> **Nguyên tắc số 1:** Website phải khiến người xem nhớ đến **một cách khám phá du lịch văn hóa mới**, không chỉ nhớ rằng nhóm có game AR hoặc website đẹp.  
> **Nguyên tắc số 2:** Chapter Zero đã có cốt truyện và vòng chơi được chốt. Website *kể lại và minh họa*, **không viết lại** cốt truyện.  
> **Nguyên tắc số 3:** Phân biệt rõ **nội dung thiết kế**, **MVP đã triển khai/đã quay**, và **định hướng tương lai**.  
> **Nguyên tắc số 4 (mới):** Trang chủ có cảm giác **tươi sáng, du lịch hiện đại, giàu cảm xúc và thanh lịch**, KHÔNG tối toàn trang, KHÔNG neon/fantasy quá mức, KHÔNG HUD theo kiểu trò chơi điện tử. Cảm giác huyền bí chỉ là một *lớp kể chuyện* xuất hiện có chủ đích.  
> **Nguyên tắc số 5 (mới):** Không làm mất/bớt tám phân cảnh hoặc nội dung đã chốt chỉ vì ảnh mockup là bản rút gọn. **Giữ cấu trúc nội dung v1.0; chỉ nâng cấp art direction, layout, hierarchy, responsive và micro-interactions.**

---


# 0. Bản đối chiếu thay đổi v1.0 → v1.1 (VISUAL LOCK)

| Thuộc tính | v1.0 (không tiếp tục dùng) | v1.1 (đã chốt theo mockup mới) |
|---|---|---|
| Cảm xúc tổng thể | Navy fantasy, dark cinematic trên hầu hết trang | **Bright premium travel editorial**, nắng ban ngày, xanh da trời, trắng kem, lịch thiệp, cởi mở |
| Tương phản | Nền tối + chữ vàng/ivory | **Nền trắng/kem/xanh pastel + chữ xanh navy**; tối cục bộ chỉ ở cảnh AR đêm |
| Hero | Video tối hoặc overlay đậm | **Ảnh Sài Gòn ban ngày rõ landmark**, người đi du lịch, điện thoại map UI; day→night là hiệu ứng *tương tác* chứ không phải trạng thái mặc định |
| Layout | Full-bleed section độc lập, nhiều màn tối | **Editorial asymmetrical two-column**; cột truyện chính rộng và cột showcase/tourism/media phụ, card bo tròn, khoảng trắng rõ |
| Ngôn ngữ hình ảnh | Game fantasy, nhiều biểu tượng phép thuật | Ảnh địa danh/văn hóa + postcard/tem/huy hiệu + app UI tinh tế; bướm/điểm sáng ở mức nhẹ |
| App screens | Dễ bị AI tự nghĩ ra UI dark game | **Đồng bộ 4 mood reference**: Thanh Bình, Hoài Cổ, Đêm Huyền Bí, Biển & Gió; map-first, thẻ địa điểm màu sáng và ba control đáy thực tế |
| CTA | Vàng kim trên nền đen | Nút **xanh biển đậm** cho primary; **kem vàng** cho CTA contextual; outline navy trên nền sáng |
| Typography | Display dark fantasy, chữ serif dày | **Refined travel editorial**: heading display có dấu tiếng Việt, body sans rõ ràng, các note script rất tiết chế |
| Hệ gamification | Có nguy cơ trông như game loot/reward | **Collectible travel passport / memory postcards**, không tiền ảo, không loot box, không fantasy battle UI |
| Cinematic | Kịch tính toàn trang | **Day-first scenic storytelling**, chỉ ACT 05 (night AR) có key visual đêm và tím; ACT 06 pha hai mood ngày/đêm |

## 0.1. Điều gì phải GIỮ NGUYÊN

- **Toàn bộ tám ACT 01–08, copy chính, CTA, ba giá trị du lịch và trang `/project`.**
- **Cốt truyện Chapter Zero**: Bưu điện Trung tâm Sài Gòn ban ngày → Huy hiệu Bưu điện và Mảnh Ký Ức: Lời Nhắn → khu vực ngoài Nhà thờ Đức Bà buổi tối → Cảnh Ký Ức: Những Lời Đã Gửi. Không tự chế thêm kịch bản.
- **Bốn tương tác P0**: Day-to-Night Reveal, Interactive App Preview, Badge Personalization Preview, Chapter Zero Timeline.
- **Kiến trúc app thực**: Khám phá / Hành trình / Nhật ký / Hộ chiếu nằm trong menu mở từ **Ký Môn trung tâm**; NPC bên trái và AR lens bên phải. Ảnh concept nào hiển thị tab-bar 5 mục kiểu phổ thông phải được **sửa** khi dựng prototype.
- **Tính trung thực**: demo mockup ≠ gameplay chạy thật; concept mood ≠ địa điểm/hành trình đã triển khai.

## 0.2. Trạng thái hình ảnh tham chiếu

1. **Primary web art direction:** `a_clean_pastel_modern_travel_app_landing_page_mo.png` — dùng để đối chiếu tổng thể nền sáng, bố cục, hệ nội dung hai cột, vật liệu thẻ du lịch, hierarchy, minh họa Chapter Zero và các khu vực video/app.
2. **Primary mobile UI visual reference:** `Saigon Veilwake Theme Showcase.png` — dùng để đối chiếu palette, phong cách map, marker, bottom discovery card, NPC, nút Ký Môn và AR lens.
3. **Không làm pixel-perfect từ hình AI**: chữ trong ảnh có thể sai dấu, vài nhãn/chế độ có thể là concept, marker/địa điểm có thể sai tọa độ, app có thể thể hiện sai hệ điều hướng. **Spec + canon + app UI v2.2 có quyền ưu tiên cho chức năng, bố cục hình chỉ là cảm hứng.**

---

# 1. Mục tiêu và phạm vi

## 1.1. Mục tiêu ưu tiên HIST

Website phải hoàn thành đồng thời bốn nhiệm vụ:

1. **Thu hút trong 5–10 giây đầu:** Người xem nhận ra ngay đây là trải nghiệm du lịch tương tác tại địa điểm có thật, có yếu tố game/AR.
2. **Giải thích giá trị du lịch:** Cho thấy Veilwake thúc đẩy khám phá chủ động, tiếp cận câu chuyện văn hóa, lưu giữ kỷ niệm và mở ra trải nghiệm du lịch đêm. Đây là **giá trị hướng tới**, không phải số liệu tác động đã được đo.
3. **Chứng minh bằng sản phẩm:** Giới thiệu một luồng chơi MVP thực tế từ khám phá bản đồ tới huy hiệu, điều tra, cảnh AR, cùng video/ảnh đã kiểm chứng khi có.
4. **Phục vụ đánh giá dự án:** Giúp ban giám khảo đi ngay đến trang Project Overview và demo, không cần xem hết hoạt cảnh.

Về dài hạn, website là **điểm vào của thương hiệu Veilwake** cho người trẻ, du khách tự túc, đối tác điểm đến và cộng đồng người chơi. Không đóng khung toàn bộ thương hiệu trong hai địa điểm của Chapter Zero.

## 1.2. Ưu tiên nội dung

- **P0 — Bắt buộc:** Hero, giới thiệu ngắn vấn đề và giải pháp, khám phá địa điểm, cách chơi, huy hiệu cá nhân, tương tác ngày/đêm, Chapter Zero đúng canon, khu vực demo, giá trị du lịch, giới thiệu dự án/đội ngũ, CTA trung thực, mobile responsive, accessibility cơ bản.
- **P1 — Nâng cấp:** NPC tương tác có lời thoại kịch bản, cảnh 3D nhẹ, hiệu ứng âm thanh bật theo yêu cầu, gallery media phong phú, hiệu ứng chuyển camera chuyên sâu.
- **P2 — Tương lai:** WebAR trực tiếp, hệ thống tài khoản cộng đồng, web mini-game toàn màn hình, quản lý nội dung phức tạp, đăng ký nhận tin tự động, commerce.

## 1.3. Người dùng của website

| Nhóm | Điều họ cần hiểu | Lối vào |
|---|---|---|
| Ban giám khảo HIST | Vấn đề, giải pháp, đổi mới, giá trị du lịch, mức độ hoàn thiện, tính khả thi | Hero → How It Works → Demo → Project Overview |
| Người trẻ/nhóm bạn tại TP.HCM | Có gì thú vị khi chơi, địa điểm nào, ảnh/huy hiệu có gì đặc biệt | Hero → Trải nghiệm → Chapter Zero → CTA |
| Khách du lịch tự túc | Dễ tham gia không, khám phá văn hóa được gì, đi đâu, cần điện thoại nào | Hero → Cách chơi → Hướng dẫn → CTA |
| Đối tác/người đánh giá công nghệ | Sản phẩm hoạt động ra sao, ứng dụng công nghệ vào trải nghiệm, tính mở rộng | Project Overview → Demo → Liên hệ |

Không dùng thuật ngữ Ký Giới/Điệp Ức quá dày đặc ở những giây đầu; giải thích chúng sau khi đã định vị sản phẩm du lịch.

---

# 2. Thông điệp truyền thông đã chốt

## 2.1. Hero copy — bản chính

**Eyebrow:** `EXPLORE BY DAY. AWAKEN BY NIGHT.`  
**H1:** `Khám phá một Sài Gòn bạn chưa từng thấy.`  
**Supporting copy:**

> Biến những chuyến tham quan thành hành trình phiêu lưu tương tác — khám phá văn hóa, lưu giữ kỷ niệm và đánh thức những bí ẩn AR ẩn sau thành phố.

**CTA 1:** `Khám phá trải nghiệm` → cuộn đến cơ chế khám phá/cách chơi.  
**CTA 2:** `Xem Demo` → video/ảnh gameplay thực tế (chỉ hiện đường dẫn hoạt động khi có tư liệu).  
**Microproof / tags:** `Địa điểm có thật` · `Văn hóa địa phương` · `Khám phá qua AR`.

**Không dùng làm H1:** câu huyền bí quá trừu tượng như “Ký Giới đang thức tỉnh” mà không cho biết đây là sản phẩm du lịch.

## 2.2. Thông điệp cốt lõi theo thứ tự đọc

1. **Đây là một trải nghiệm khám phá thành phố.** Bản đồ, địa danh có thật, hoạt động gần người dùng.
2. **Du khách là người chủ động tham gia.** Quan sát, giải thử thách dựa trên nội dung văn hóa, thu thập chứng cứ.
3. **Mỗi chuyến đi để lại kỷ niệm riêng.** Huy hiệu có thể cá nhân hóa ảnh, xem lại, lưu PNG.
4. **Ban đêm mang tới lớp trải nghiệm kỳ ảo.** AR, Ấn Ký, vụ án, Cảnh Ký Ức dựa trên các trải nghiệm ban ngày.
5. **Có minh chứng triển khai cụ thể.** Chapter Zero tại Bưu điện Trung tâm Sài Gòn và khu vực ngoài Nhà thờ Đức Bà Sài Gòn.
6. **Có khả năng mở rộng thành hệ sinh thái hành trình.** Ẩm thực, di sản, nghệ thuật, cảnh quan, các vùng của TP.HCM; nêu là tầm nhìn chứ không nói đã vận hành.

## 2.3. Chất giọng / tone of voice

- Truyền cảm hứng, giàu hình ảnh nhưng dễ hiểu, không khoa trương hay kể lể.
- Câu ngắn ở section cinematic; chữ rõ, thông tin cụ thể ở section giải pháp và dự án.
- Về văn hóa: chân thực, tôn trọng lịch sử, mô tả hư cấu rõ ràng.
- Về công nghệ: “AR tạo trải nghiệm...” thay vì khẳng định công nghệ thay thế hoàn toàn hướng dẫn viên/du lịch truyền thống.
- Về tác động: “hướng tới / đặt giả thuyết / có thể khuyến khích” khi chưa có kết quả thực nghiệm.

---

# 3. Thế giới quan — CANON LOCK

Nguồn trục nội dung: **Saigon_Veilwake_Ban_Chot_Y_Tuong_The_Gioi_Game_v1.0**, **MVP_Brief v1.1**, **UI_UX_Design_Specification v2.2**.

Các thuật ngữ chính, không tự thay thế:

| Thuật ngữ | Vai trò trong nội dung website |
|---|---|
| **Ký Giới** | Thế giới song song hình thành từ những ký ức đứt mạch, không phải bản sao chính xác của quá khứ |
| **Dư Ức** | Phần ý nghĩa còn lại của ký ức từng có giá trị nhưng bị gián đoạn việc tiếp nối |
| **Người Lắng Nghe** | Vai trò người chơi sau khi ký ức “Đáp Lời” họ |
| **Điệp Ức** | Sinh vật hình bướm mang ký ức được truyền lại; đôi cánh tượng trưng việc lưu truyền và biến đổi |
| **Mảnh Ký Ức** | Vật phẩm đánh dấu ý nghĩa đã được khôi phục, **không phải coin để nhặt** |
| **Ấn Ký** | Dấu phong ấn liên kết hai thế giới; cần điều kiện để mở |
| **Cảnh Ký Ức** | Phần thưởng AR sau khi giải quyết vụ án |
| **Hộ Chiếu Ký Ức** | Album hành trình lâu dài, huy hiệu, ảnh, vụ án, Cảnh Ký Ức |
| **Ký Môn** | Trong UI mobile: nút điều hướng trung tâm tới bốn mục chính |

**Nguyên tắc kể chuyện:** Thành phố có thật là điểm khởi đầu, Ký Giới là lớp kỳ ảo giúp người chơi có lý do chú ý đến văn hóa và di sản. Không sử dụng Ký Giới để thay thế hoặc xuyên tạc kiến thức lịch sử.

**Chapter Zero không được trộn với các chương mùa đầu.** Chapter Zero có tên **“Lá Thư Chưa Từng Đến”**, không đổi thành “Những Bức Thư Chưa Được Gửi” (một chương khác trong phác thảo mùa đầu). Các tên chương mùa sau chỉ dùng như teaser nếu cần.

---

# 4. Information Architecture / Sitemap

```text
/
├── Hero — The City You Know
├── Beyond Sightseeing — Vấn đề du lịch
├── Discover — Thành phố là thế giới khám phá
├── Collect Memories — Huy hiệu & Mảnh Ký Ức
├── Awaken the Veil — AR & trải nghiệm đêm
├── Chapter Zero — Lá Thư Chưa Từng Đến
├── Product & Tourism Value — Sản phẩm & giá trị du lịch
└── Your Journey Begins — CTA + footer

/project
├── Vấn đề & giả thuyết
├── Giải pháp & giá trị người dùng
├── Đổi mới / cơ chế khác biệt
├── MVP: phạm vi, tiến độ, giới hạn
├── Bằng chứng: demo, test, screenshots (khi có)
├── Khả năng mở rộng
└── Đội ngũ & liên hệ
```

**Navigation desktop:** `Trải nghiệm` · `Cách chơi` · `Chapter Zero` · `Dự án` · **Xem Demo**.  
**Navigation mobile:** Logo + nút menu + CTA gọn.  
**Sticky navigation:** Nền **trắng sữa/ice-blue trong mờ**, chữ navy rõ, blur nhẹ sau khi cuộn; tránh thanh nav đen. CTA dạng pill outline navy hoặc filled blue; không che hero, không làm mất affordance. `VI | EN` là tùy chọn nếu đã có bản dịch thật, không làm toggle giả.

**Không dựng nhiều đường dẫn trống.** Nếu `/project`, video hoặc link demo chưa sẵn sàng, tạo nội dung thật hoặc tạm ẩn CTA, không dùng button giả.

---

# 5. Storyboard & đặc tả tám phân cảnh trang chủ

## 5.0. Hệ bố cục desktop theo ảnh tham chiếu (MỚI — CHỐT)

**Nguồn visual:** ảnh landing page sáng mới nhất; giống **một website du lịch/editorial có cinematic**, không phải brochure cứng và không phải màn hình game.

### Desktop editorial composition

```text
┌───────────────────────────────────────── HEADER (light) ──────────────────────────────────────┐
│ Logo VEILWAKE      Trải nghiệm   Cách chơi   Chapter Zero   Dự án    [Xem Demo]               │
├──────────────────────────────────────┬─────────────────────────────────────────────────────────┤
│ ACT 01 · HERO / daylight            │ THEME / TRAVEL MOOD PREVIEW (supporting editorial block) │
│ headline + 2 CTAs + landmark photo   │ 4 atmospheric themes + river/coast visual                │
│ traveller + mobile map mockup        │ conceptual visual gallery, not 4 playable game modes      │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ ACT 02 · tourism problem             │ ACT 07 preview: three tourism values                      │
│ postcard + traveller photograph      │ cultural / nighttime / digital                            │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ ACT 03 · discover map/location       │ INTERACTIVE APP SHOWCASE                                   │
│ real city visual + map/UI            │ phone screens with Ký Môn / markers / panels              │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ ACT 04 · badges / personal memories  │ PRODUCT EVIDENCE / DEMO                                    │
│ travel souvenir cards and photo      │ gallery / video / prototype status                         │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ ACT 05 · isolated NIGHT AR feature   │ CONTEXT CTA / proof links                                  │
│ deep blue-purple, phone AR overlay   │ editorial white/sky-blue cards                             │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ ACT 06 · Chapter Zero two stops      │ ACT 08 · join / demo / project                              │
│ day postcard → night postcard        │ light-background CTA, skyline and letter motif            │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER — pale sky / postcard floral accents / brand / real links                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Cột trái ~58–62%**: storytelling, trải nghiệm văn hóa, điểm đến và Chapter Zero. **Cột phải ~38–42%**: thematic gallery (art direction), lợi ích du lịch, app preview, video demo và CTA. Đây là **layout model**, không phải hệ lưới cứng bắt mọi ảnh/copy vào tỉ lệ đó; cụ thể dùng CSS Grid 12 cột (7/5 hoặc 8/4 tùy viewport).
- Không tạo **hai vùng scroll độc lập**. Website cuộn **một luồng thống nhất**, có thể để một số section dạng feature-board 2 cột; user vẫn đọc thuận tiện và tiếp cận được toàn bộ nội dung.
- **Thứ tự đọc logic/DOM và mobile:** ACT 01 → ACT 02 → ACT 03 → ACT 04 → ACT 05 → ACT 06 → ACT 07 → ACT 08. Trên desktop, module ACT 07 có thể *được preview bằng thẻ tóm tắt* bên phải từ sớm, nhưng **nội dung chính ACT 07 vẫn phải có** và giữ thứ tự semantic; các right-rail mini-cards chỉ là teaser/điểm truy cập, không thay thế ACT 07.
- Section dùng **mặt nền trắng/sky/cream xen kẽ**, chiều cao theo nội dung, gutter lớn và card border mảnh. Ảnh **không tách rời** nội dung mà tràn mềm vào nền theo lớp mờ. Góc bo khoảng 18–28px, shadow nhẹ, không giả frame kim loại game.
- Phân biệt **gallery app** (màn hình screenshot/prototype) và **gameplay video**. Trên desktop, phía phải có thể thành một *visual rail* cập nhật minh họa theo section đang ở viewport; khi JS tắt vẫn phải xem được nội dung tĩnh.

### Hệ module phân cấp trang chủ

- **Tier 1 — attention:** Hero landscape + tagline + du khách + app map; Chapter Zero day/night; Night AR experience. Lớp hình lớn, headline ít.
- **Tier 2 — explanation:** vấn đề, bản đồ du lịch, badges và tourism impact. Visual kết hợp ảnh thực địa + UI thật + icon đơn sắc.
- **Tier 3 — evidence:** interactive app prototype, footage, video demo, trạng thái MVP, link Project Overview. Card sạch, thông tin thực và dễ tra cứu.

## ACT 01 — THE CITY YOU KNOW (HERO)

**Nhiệm vụ:** Trong 5–10 giây đầu, xác định *du lịch khám phá thành phố* là cốt lõi và dựng sự tò mò về thế giới AR.

- **Nền ưu tiên:** Bưu điện Trung tâm Sài Gòn dưới **ánh sáng ấm ban ngày**, nền trời xanh nhẹ, cây và du khách chụp ảnh. Ảnh đời thực là trọng tâm; không default nền tối.
- **Layer 1:** Ảnh địa danh thật ở giữa/phía phải, du khách nhỏ ở foreground tạo ngữ cảnh trải nghiệm.
- **Layer 2:** Mockup điện thoại **map-first sáng/pastel** nổi ở cạnh phải Hero, thiết kế sát `Saigon Veilwake Theme Showcase.png`. Tạo cảm giác đây là app khám phá, không giả làm video AR/3D thật.
- **Layer 3:** Copy canh trái trên nền trắng sương hoặc gradient **trắng → trong suốt**, H1 navy; primary CTA navy đậm, secondary outline navy. Tag địa điểm/văn hóa/AR dạng icon line-color nhỏ.
- **Layer 4:** Điệp Ức/bướm tím nhạt và nắng lấp lánh **ít, mảnh**, chỉ xuất hiện gần ảnh hoặc khi cuộn; không che landmark/CTA.
- **Cột phụ phía phải (desktop):** Intro gallery `Cùng một thế giới. Nhiều cách để nhìn thấy.` + 4 thẻ mood trải nghiệm; ưu tiên mục tiêu truyền cảm hứng, **không tuyên bố đây là tính năng chọn theme đã triển khai**.
- **Kết thúc:** Chuyển động daylight→twilight khi người xem cuộn; chuyển về sáng thoáng ở phần nội dung tiếp theo, không giữ trang trong chế độ đen suốt hành trình.

**Desktop:** Hero chiếm khối chính bên trái, nội dung chữ canh trái, ảnh Bưu điện và mockup điện thoại tương quan thị giác; giới thiệu bốn mood trải nghiệm ở rail bên phải. Không dùng dark overlay tràn cả ảnh.  
**Mobile:** Dùng crop dọc riêng; headline + CTA trên nền sáng, điện thoại map xuất hiện dưới H1; gallery mood cuộn ngang hoặc grid 2×2 kế tiếp, không nén bốn thẻ thành chữ bé.  
**Hành vi:** Button CTA có thật; icon cuộn; không bắt người dùng xem hết cảnh.  
**Media fallback:** ảnh tĩnh tối ưu; video không tự phát âm thanh.

### Motion sequence của Hero (gợi ý sản xuất, không phải timeline bắt buộc)

| Mốc cuộn tương đối | Hình ảnh | UI và ý nghĩa |
|---|---|---|
| 0–25% | **Nắng sáng / sky blue / Bưu điện**, UI map rõ | Nhấn mạnh du lịch, không fantasy mở màn |
| 25–50% | Nắng chuyển dịu, vài bướm/đốm sáng lộ ra | Gợi một lớp bí ẩn, không che sản phẩm |
| 50–75% | **Twilight trong vùng ảnh**, violet dịu và Ấn Ký nhỏ | Cho cảm giác day-to-night mà **không đổi cả website sang nền tối** |
| 75–100% | Mockup ứng dụng/map và phần Discover nổi bật; trở lại nền sáng | Trả lời ngay “đây là sản phẩm gì?” |

**Lưu ý:** Không được dùng cảnh fantasy quá trừu tượng khiến người xem tưởng đây là game nhập vai 3D thuần túy. Hình thành phố thật phải hiện diện liên tục.

## ACT 02 — BEYOND SIGHTSEEING (TOURISM PROBLEM)

**H1/H2 gợi ý:** `Một chuyến đi có thể nhiều hơn những bức ảnh.`

- Nêu **giả thuyết sản phẩm**: không ít trải nghiệm tham quan chỉ dừng ở đến nơi, chụp ảnh, đọc thông tin rồi rời đi; một số nhóm khách muốn tham gia sâu hơn vào câu chuyện của nơi họ đến.
- Visual: **collage như postcard du lịch** trên nền giấy kem/xanh nhạt: ảnh du khách, postcard ảnh kiến trúc xưa, một note nhỏ mang thông điệp `Không chỉ là điểm đến, mỗi nơi là những câu chuyện...`. Khung ảnh bo nhẹ, shadow mềm, không art fantasy đen.
- Message: `Khám phá — Hiểu — Lưu giữ`.
- Không đưa số liệu thị trường/tác động chưa được dẫn nguồn. Nếu bổ sung thống kê, cần nguồn, năm, khu vực và giới hạn diễn giải.
- CTA dạng text: `Veilwake biến chuyến đi thành trải nghiệm như thế nào?` → ACT 03.

## ACT 03 — DISCOVER (EXPLORATION)

**H2:** `Mỗi địa điểm là một câu chuyện đang chờ được khám phá.`

- Media trục chính: **bản đồ isometric/map đầy sắc sáng** và smartphone khung mỏng trên nền sky-blue; map marker đa màu rõ nhưng không quá dày; bottom discovery card **trắng mờ**. Đây là màn app **map-first**, không xây lại kiểu dark RPG map.
- Diễn giải rõ: bản đồ giúp người dùng **tự do** chọn nơi muốn đi; GPS gợi ý nội dung liên quan khi gần địa điểm; không ép tham gia hoặc đi một tuyến định sẵn.
- Thông tin du lịch: tên nơi, gợi ý văn hóa, khu vực lân cận, trạng thái hoạt động khả dụng.
- Interactive element: `Explore App Preview` — người dùng chạm marker để xem card địa điểm, mở thử **Ký Môn**, chuyển giữa bốn mục chính: **Khám phá, Hành trình, Nhật ký, Hộ chiếu**.
- Có icon **NPC Companion** góc dưới trái và **Ống kính Ký Giới** góc dưới phải; tránh nhầm thành thanh 4-tab cố định. Menu bốn mục mở từ nút tròn trung tâm Ký Môn.
- Không thể hiện tất cả marker đều có nhiệm vụ thực sự trong MVP.

## ACT 04 — COLLECT MEMORIES (CULTURE & BADGES)

**H2:** `Sưu tầm những ký ức, không chỉ những tấm ảnh.`

- Cho thấy quan hệ nhân quả: **quan sát địa danh thật → giải thử thách văn hóa → nhận Huy hiệu Địa Danh → cá nhân hóa ảnh → lưu kỷ niệm**.
- Demo hai trạng thái huy hiệu: mặc định và ảnh được người dùng đưa vào khung (sử dụng ảnh mẫu được cấp phép, không làm lộ ảnh thật của người dùng). Trình bày kiểu **travel souvenir/passport postcard**: khung huy hiệu vàng thanh lịch, tem Bưu điện, ảnh người dùng; nền giấy sáng, không inventory/loot game.
- Trình diễn Mảnh Ký Ức như chứng cứ/ý nghĩa được khôi phục, không nhầm với tiền tệ hoặc lượt điểm.
- Copy ngắn: `Mỗi huy hiệu đánh dấu một nơi bạn thực sự khám phá. Bức ảnh của bạn biến nó thành kỷ niệm không ai giống ai.`
- Với sản phẩm MVP, chỉ thể hiện **ảnh + PNG** như khả năng triển khai thực tế; video, huy hiệu tiến hóa và Đại Huy Hiệu là roadmap nếu được giới thiệu.

## ACT 05 — AWAKEN THE VEIL (NIGHT TOURISM + AR)

**H2:** `Khi đêm xuống, một thế giới khác thức tỉnh.`

- Đây là **cao trào cinematic** thứ hai và **điểm sử dụng nền tối cục bộ có chủ đích**: một feature banner navy–indigo/tím có **Nhà thờ Đức Bà trong khung cảnh đêm** cùng điện thoại AR; Ấn Ký trỗi dậy, ánh sáng, thư và chim giấy xuất hiện. Nền xung quanh và phần kế vẫn sáng; không biến toàn trang thành giao diện game tối.
- Cơ chế cần giải thích ngắn: **Mảnh Ký Ức phù hợp + vị trí hợp lệ + thời gian cấu hình + chủ động bật AR**.
- Visual được gắn với không gian thành phố có thật, không chỉ CGI abstract.
- Gắn lợi ích **du lịch đêm**: một hành trình khám phá/vui chơi mới dựa trên câu chuyện, *chưa tuyên bố đã làm tăng thời gian lưu trú hoặc doanh thu*.
- **Safety copy:** chỉ trải nghiệm AR tại điểm dừng an toàn; không nhìn camera khi đang đi hoặc băng đường. Không đặt hình tượng huyền bí lên tượng thờ hay khu vực tôn giáo/nghi lễ.
- Các hiệu ứng demo nếu là render/visualization thì ghi rõ `Concept visualization`; nếu video camera thật ghi `Gameplay capture`/`Prototype footage`.

## ACT 06 — CHAPTER ZERO: LÁ THƯ CHƯA TỪNG ĐẾN

**Vai trò:** Case study minh chứng cho một luồng chơi, **không thay thế câu chuyện dài hạn của Veilwake**.

**Giới thiệu:** `Một lá thư không đến được nơi nó thuộc về. Những dấu vết còn lại nằm giữa hai địa điểm quen thuộc của Sài Gòn.`

**Timeline chính — chỉ dựa trên canon đã chốt:**

| Giai đoạn | Địa điểm và sự kiện | Phần thưởng / điều kiện |
|---|---|---|
| **Ban ngày — Khám phá** | **Bưu điện Trung tâm Sài Gòn**. Người chơi chủ động nhận nhiệm vụ, quan sát một chi tiết văn hóa/kiến trúc đã được kiểm chứng và giải một câu đố về việc liên lạc, gửi thông điệp | **Huy hiệu Bưu điện**, có thể cá nhân hóa bằng ảnh; **Mảnh Ký Ức: Lời Nhắn**; manh mối cho vụ án đêm |
| **Ban đêm — Điều tra** | **Khu vực công cộng an toàn bên ngoài Nhà thờ Đức Bà Sài Gòn**. Khi đủ tiến trình, vị trí, thời gian: kích hoạt Ấn Ký bằng camera AR, dùng chứng cứ ban ngày để giải vụ án | Khôi phục Ấn Ký, kết luận vụ án được viết sẵn |
| **Kết chương — Ký Ức hồi sinh** | Phong thư và dòng chữ phát sáng trong AR hóa thành **chim giấy** bay lên | **Cảnh Ký Ức: Những Lời Đã Gửi**; lời nhắn kết chương; lưu trạng thái hoàn thành |

**Hình ảnh/bố cục:** Chapter Zero thể hiện theo dạng **hai postcard hành trình đặt cạnh nhau** trên nền xanh phấn/giấy sáng, liên kết bằng một mũi tên/tuyến thư nhỏ: postcard Bưu điện nắng sáng → postcard Nhà thờ lúc tối. Typography và thẻ nhiệm vụ vẫn đọc rõ khi background hình sáng hoặc tối.

**Tương tác trên website:** timeline hai chặng sáng/tối + thẻ kết thúc. Người xem chọn chặng để xem ảnh địa danh thật, ảnh/screenshot nhiệm vụ và một đoạn mô tả ngắn. Có thể xem ảnh kết chương bằng hành vi chủ động `Xem cảnh AR` thay vì tự tiết lộ hết ngay đầu section.

**Không được tự bổ sung:** đáp án chính xác, tên/đặc điểm chi tiết NPC, nội dung lá thư, danh tính người gửi/nhận, các tình tiết khiến kết thúc đổi hướng, biểu tượng văn hóa chưa xác minh, thêm địa điểm thứ ba thành nhiệm vụ MVP. Những chi tiết này chưa được tài liệu nguồn xác nhận.

**Lưu ý văn hóa và địa điểm:** Chi tiết kiến trúc và kiến thức lịch sử cần được fact-check; vị trí AR thực tế nằm **ngoài khu vực nghi lễ** và phải khảo sát đủ an toàn, ánh sáng, quyền sử dụng địa điểm. Không hàm ý người chơi phải dùng điện thoại khi bước qua đường.

**Teaser kết chương:** `Đây mới chỉ là lời nhắn đầu tiên. Cả thành phố còn những câu chuyện đang chờ được kể tiếp.`

## ACT 07 — PRODUCT & TOURISM VALUE

**H2:** `Một cách mới để trải nghiệm du lịch đô thị.`

Trình bày ba giá trị bằng **ba thẻ sáng** (white translucent / ice-blue border / icon navy hoặc vàng nhạt) đặt trong vùng rail phải trên desktop và khối chính có heading đầy đủ; mobile xếp dọc:

1. **Du lịch văn hóa và sáng tạo:** Có động lực chủ động khám phá thông qua câu chuyện và thử thách gắn với địa điểm.
2. **Du lịch đêm:** Bổ sung trải nghiệm khám phá/giải trí vào thời gian buổi tối với điều kiện an toàn và phù hợp thực địa.
3. **Chuyển đổi số trải nghiệm:** Tích hợp bản đồ, GPS, kịch bản nhiệm vụ, huy hiệu số và AR.

**Khối bằng chứng sản phẩm:**

- Trailer/demo clip thật: thời lượng ngắn, có phụ đề; có thể xem bản dài. Trình bày trong **player card** nền trắng xanh, thumb footage AR đêm, play button navy/white và gallery thumbnail bên dưới; ảnh chỉ là mockup khi chưa có video thật.
- Gallery **ảnh chụp màn hình thật** từ ứng dụng, phân biệt mockup thiết kế nếu chưa triển khai.
- Checklist tiến độ: `Đã triển khai` / `Đang thử nghiệm` / `Kế hoạch`, chỉ điền từ thực tế dự án.
- Liên kết `Tìm hiểu dự án` → `/project`.

Không tạo số liệu giả (người chơi, lượt tải, đối tác, tỷ lệ hoàn thành, địa điểm có hỗ trợ, doanh thu). Nếu chưa có pilot data, trình bày giả thuyết và kế hoạch đánh giá.

## ACT 08 — YOUR JOURNEY BEGINS

**H2:** `Hành trình của bạn bắt đầu từ đây.`

- Cảnh kết là **bầu trời sáng/gradient xanh kem** và silhouette skyline Sài Gòn, thẻ phong thư nhỏ/bướm nhẹ; nếu xuất hiện đêm chỉ làm teaser nhỏ. CTA lớn màu blue; không kết website bằng màn tối nặng.
- CTA chính phụ thuộc tình trạng phát hành (xem mục 8).
- Liên kết cần có: `Xem Demo`, `Tìm hiểu dự án`, `Liên hệ`, đường dẫn chính sách quyền riêng tư khi triển khai.
- Footer: logo, slogan, mô tả một dòng, thông tin đội ngũ liên hệ đã xác minh, bản quyền hình ảnh.

---

# 6. Tương tác website — Interaction Specifications

## 6.1. Mức B: Cinematic + Interactive Product Showcase

Bốn tương tác trọng tâm là **P0** vì giúp hiểu sản phẩm, không phải chỉ trang trí:

| ID | Tương tác | Trigger | Phản hồi / Trạng thái | Hoạt động thay thế |
|---|---|---|---|---|
| INT-01 | Day-to-Night Reveal | Cuộn qua Hero | Cảnh ban ngày chuyển sang night/Veil, copy và CTA vẫn đọc được | Reduced motion: hai keyframe tĩnh + crossfade nhẹ |
| INT-02 | App Preview | Chạm Ký Môn / mục menu / marker | Mở menu bốn mục, card địa điểm hoặc screenshot ứng dụng liên quan | Tab/button chuyển ảnh và mô tả dễ dùng bằng bàn phím |
| INT-03 | Memory Badge Preview | Chọn `Mặc định` / `Của tôi` | Thay ảnh mẫu và khung huy hiệu; không upload ảnh thật nếu chưa có cơ chế riêng | Slider ảnh before/after hoặc hai card tĩnh |
| INT-04 | Chapter Zero Timeline | Chọn `Ban ngày` / `Ban đêm` / `Kết chương` | Chuyển ảnh/video và mô tả đúng canon; không tự phát spoiler | Accordion ba trạng thái, không cần animation |

**Nguyên tắc tương tác:** mọi điều khiển bấm được phải có phản hồi thật; hover không phải tương tác duy nhất; không tạo nút `Tải ngay` trỏ tới đường dẫn giả.

### INT-05 — Four travel moods (P1, hỗ trợ visual, không giả là gameplay)

Dựa trên ảnh giao diện app do nhóm chọn, một khu gallery trong rail phải dùng tiêu đề **`Cùng một thế giới. Nhiều cách để nhìn thấy.`**, giới thiệu bốn phong cách trải nghiệm/vùng cảm xúc:

| Mood concept | Màu / không khí | Visual ứng dụng minh họa | Trạng thái nội dung |
|---|---|---|---|
| **Thanh Bình — Ban Ngày** | Sky blue, aqua, trắng, nắng sáng | Map điểm đến, gợi ý khám phá | **Visual direction**; không tuyên bố là mode runtime nếu chưa build |
| **Hoài Cổ — Sài Gòn Xưa** | Sepia nhẹ, hổ phách, vàng cổ | Ảnh/texture di sản, postcard lịch sử | **Concept visual**, không tự thêm chuyến xuyên thời gian / data lịch sử |
| **Đêm Huyền Bí** | Indigo, navy, tím nhạt, ánh đom đóm | AR lens, Ấn Ký, quest đêm | Liên kết tới **AR Chapter Zero**, phân biệt footage với concept |
| **Biển & Gió — Vũng Tàu** | Xanh biển, ngọc lam, cát ấm | Mood cảnh biển, điểm du lịch định hướng | **Roadmap/visual vision**, không hiển thị như nội dung MVP playable |

- Chế độ tương tác nếu làm: click một thẻ → **đổi key visual/background/phone screenshot** trong panel, có label `Hình dung trải nghiệm` hoặc `Ý tưởng mở rộng`, không đổi sự thật về tính năng đang có.
- Nếu team không có bốn bộ asset thật, đây là **gallery tĩnh**, không cần build interactive selector giả. Ảnh tham chiếu AI có thể sinh sai chữ ở tên mood; bản nội dung website dùng **`Biển & Gió — Vũng Tàu`** như nhãn thiết kế tạm thời, không khẳng định đây là tên tính năng chính thức.
- Mood **không phải** hệ thống bắt người chơi chọn phe, class, điểm kỹ năng hoặc skin game. Dùng để gợi không khí du lịch đa dạng; hành trình thực vẫn dựa vào vị trí và nội dung mở khóa.

## 6.2. INT-02 chi tiết — App Preview

**Initial state:** màn hình **Khám phá**, bản đồ rộng, discovery panel thu gọn, NPC ở góc trái, Ký Môn giữa, AR lens bên phải.  
**On Ký Môn:** xuất hiện menu 2×2: **Khám phá / Hành trình / Nhật ký / Hộ chiếu**.  
**On Khám phá:** card địa điểm và gợi ý hoạt động gần vị trí (minh họa dữ liệu demo được đánh dấu).  
**On Hành trình:** Chapter Zero là hành trình duy nhất *playable* trong MVP; hành trình khác nếu có teaser thì là `Sắp ra mắt`.  
**On Nhật ký:** trạng thái câu chuyện/chứng cứ; không tạo lời giải mới.  
**On Hộ chiếu:** huy hiệu, Mảnh Ký Ức, Cảnh Ký Ức trong các trạng thái đã khóa / đã mở.  
**On NPC:** nếu có preview, dùng lời thoại kịch bản; tuyệt đối không ghi là `AI chat tự do` khi chưa làm.

Dữ liệu giả dùng riêng cho **prototype website**, không nhập nhằng với tiến trình chơi thực trong APK.

## 6.3. Optional NPC / 3D

- NPC website P1: một biểu tượng/linh vật nhỏ cùng tối đa 3–4 lời gợi ý cố định về Veilwake, chơi như thế nào, Chapter Zero và trải nghiệm AR. **Tên, thiết kế và tính cách cụ thể vẫn cần art direction cuối**, không mặc định tên mới.
- Không cho NPC nhảy popup khi mới tải trang, không autoplay giọng nói, có thể đóng và không chặn CTA.
- 3D real-time chỉ dùng nếu FPS và hiệu năng tốt; fallback sprite hoặc video cũng đạt mục tiêu.

---

# 7. Visual Design System — LIGHT TRAVEL EDITION (ĐÃ CHỐT)

## 7.1. Art direction: bright cinematic travel, không phải dark fantasy

**Tên định hướng:** `Bright Cinematic Travel × Modern Editorial × Subtle Urban Magic`.

- **Trục visual chính (~80–90% thời lượng/diện tích trang):** nắng ban ngày, trắng mây, xanh da trời, không gian kiến trúc thật, du khách, map UI, postcard và ký ức cá nhân.
- **Trục accent fantasy (~10–20% và không cần đo pixel chính xác):** bướm Điệp Ức, đường ánh sáng mềm, một ít violet tại Ấn Ký và khu AR đêm. Không có glow phủ mọi icon, không viền neon UI, không card giả vật phẩm RPG.
- **Nền website mặc định sáng**: ice-blue, ivory, white; toàn trang phải cảm giác thoáng, hiện đại, vui khám phá. **Chỉ ACT 05 có phân cảnh night cinematic nền đậm**, nhưng phần content của toàn trang vẫn chủ yếu sáng.
- **Ảnh thành phố trước, game sau**: landmark/du khách chiếm hero và phần giới thiệu. Ảnh AR chỉ dùng cho phần chuyển cảnh và demo. Hình Ký Giới không che mất di sản thật.
- **Chất liệu thị giác**: kính mờ trắng, giấy bưu thiếp/tem, đường skyline mờ, hoa lá bản địa tiết chế ở mép section, bản đồ màu nước nhẹ và đường line-art kiến trúc; tránh texture cổ/gothic phủ toàn màn.

## 7.2. Design tokens mới (gợi ý sản xuất, xác nhận lại contrast trước khi code)

| Token | Hex gợi ý | Vai trò |
|---|---|---|
| `--page-bg` | `#F7FBFF` | Nền chính rất sáng |
| `--sky-50` | `#EFF8FF` | Hero/readable background |
| `--sky-100` | `#E3F3FC` | Alternating sections |
| `--sky-200` | `#CCE8F5` | Card tint, line illustrations |
| `--white` | `#FFFFFF` | Surface, discovery cards, modal |
| `--cream` | `#FFF7E8` | Postcard, badge, thư/tem |
| `--sand` | `#F5DEB5` | Contextual CTA, travel highlight |
| `--sun-gold` | `#E7AA59` | Sunlight, stamp accents, day motif |
| `--ocean-blue` | `#14658E` | Primary CTA, link, icon |
| `--deep-blue` | `#163B65` | Headings, main text emphasis |
| `--body-blue` | `#315977` | Secondary descriptive text |
| `--border-sky` | `#D5E8F2` | Light card border |
| `--teal` | `#37A8B6` | Sea, map discovery, progress accents |
| `--veil-lilac` | `#927DDB` | Điệp Ức/AR highlights; light usage |
| `--night-indigo` | `#223966` | ACT 05 local night panel **only** |
| `--night-violet` | `#4B447B` | ACT 05 gradient accents only |

**Legacy app colors** (`#121B2A`, `#1C293A`, `#D9B16F`, `#4BA9A0`, `#A28AE5`) vẫn có thể xuất hiện trong asset/screenshot app và **mood Đêm Huyền Bí**, nhưng không được mặc định chúng là nền chủ đạo website. Không thay đổi mã màu sản phẩm Android chỉ vì web có bộ token riêng.

### Màu theo từng ACT

| ACT | Background/visual | Typography và nhấn |
|---|---|---|
| 01 Hero | White-mist → sky-blue; ảnh Bưu điện nắng vàng | Headline navy, nút ocean-blue |
| 02 Tourism Problem | White/cream + postcard ảnh thực | Navy; annotation sepia nhẹ |
| 03 Discover | Pastel aqua/sky, map và smartphone | Navy, pin sắc teal/orange/violet |
| 04 Collect Memories | Cream/ice-blue, tem và khung ảnh vàng mềm | Navy, gold muted |
| 05 Night AR | **Feature panel indigo-violet** và ảnh night; xung quanh sáng | White/cream trên night banner; CTA vàng kem |
| 06 Chapter Zero | White/cream, hai postcard ngày/đêm | Navy + label chặng rõ |
| 07 Value/Product | White/sky, 3 cards và screenshot thật | Navy + thin gold/blue icons |
| 08 Closing CTA | Pale blue sky, skyline nhẹ, bướm/letter mảnh | Ocean-blue CTA, navy H2 |

## 7.3. Typography — premium travel/editorial

- **Body/UI:** Be Vietnam Pro hoặc font sans có đầy đủ Unicode tiếng Việt, legible ở 14–16px+; line-height khoảng 1.5–1.7.
- **Display headline:** serif thanh lịch kiểu travel editorial hoặc font có tương phản nét vừa phải; phải kiểm tra dấu tiếng Việt (`ấ`, `ồ`, `ư`, `Đ`), webfont license và hiển thị trên Android/Windows. Font chưa khóa, **không tự chọn font logo hoặc thay logo**.
- **H1 desktop:** khoảng 48–70px tùy breakpoint, tối đa 3–4 dòng đẹp; H1 mobile 34–44px; không ép số đo cứng nếu clip.
- **H2:** 28–40px desktop, 25–32px mobile; tiêu đề section không vượt độ dài làm mất cân đối ảnh.
- **Microcopy:** cyan/dark blue, không dùng vàng nhạt trên trắng; line nhỏ có contrast hợp chuẩn.
- **Decorative handwriting:** dành cho một dòng note trên postcard như `Những câu chuyện vẫn đang chờ được tìm thấy…`; không đặt nội dung cốt lõi/CTA bằng chữ viết tay.

## 7.4. Card, buttons, icons, surfaces

- **Card:** surface trắng gần opaque; bo 18–26px; border `--border-sky`, shadow rất nhẹ; không dùng viền vàng dày giả cổ.
- **Primary CTA:** ocean-blue filled, chữ trắng; secondary outline navy trên nền sáng; contextual CTA cream/sand, chữ navy. Bo pill 999px hoặc khoảng 20px cho button riêng.
- **Icons:** line icon/navy, du lịch/văn hóa/bản đồ, cùng stroke weight; AR icon violet chỉ dùng ở ngữ cảnh AR. Ưu tiên không gian thông thoáng, icon size có phân cấp.
- **Card địa điểm:** ảnh thật, tên, khoảng cách/gợi ý, nhãn trạng thái rõ; tránh gamified power-level, XP, rarity, coin, loot.
- **Huy hiệu:** có yếu tố tem/bưu thiếp Việt Nam, khung cá nhân hóa ảnh; trang trọng và kỷ niệm thay vì vật phẩm để giao dịch.
- **Minh họa:** 20–30% có thể là minh họa/collage dạng editorial, nhưng địa điểm thật phải là điểm tham chiếu chính; phân biệt concept với ảnh thực.

## 7.5. Bố cục chi tiết / khoảng trắng

- **Desktop ≥1200px:** content max-width gợi ý 1320–1480px (rộng hơn v1.0 để hợp composite hai cột), padding 32–64px, grid 12 cột (narrative ~7/12, showcase ~5/12), gutter 20–32px. Key visual có thể edge-to-edge **bên trong section**, nhưng vẫn có khung sáng quanh tổng layout.
- **Tablet 768–1199px:** chia 2 cột nếu giữ được card/phone rõ; chuyển sang section stack khi không đủ không gian; không ép sidebar bé.
- **Mobile <768px:** **một cột** có thứ tự ACT 01→08; đan các module showcase đúng ngữ cảnh: four moods sau Hero, interactive app trong Discover, tourism values trong ACT07, video ở Product Evidence. Card theme 2×2 hoặc carousel có nhãn; CTA full-width nếu cần. Không cố tái hiện nguyên ảnh hai cột desktop.
- **Khoảng trắng:** spacing 8px base, section gap có nhịp 56–96px desktop/36–64px mobile, card padding 20–32px desktop/16–24px mobile. Các số này để triển khai, không phải từ ảnh AI đo chính xác.
- **Readability:** body line length khoảng 45–75 ký tự, độ tương phản WCAG AA (ưu tiên 4.5:1 cho normal text), focus visible, touch target tối thiểu 44×44px.

## 7.6. Style consistency với Android app (critical)

**Tham chiếu UI:** `Saigon Veilwake Theme Showcase.png`, không phải UI dark fantasy render riêng.

- Mặc định **Thanh Bình — Ban Ngày**: map tươi sáng, isometric/pastel, nhiều khoảng trắng, chấm vị trí GPS, marker vừa phải, bottom discovery sheet/card trắng.
- Mood **Hoài Cổ**: nắng chiều sepia ấm; vẫn là bản đồ dễ đọc và UI chuẩn của app, không phải game AR cổ điển.
- Mood **Đêm Huyền Bí**: dark map được phép nằm **trong màn hình app / section night**, KHÔNG dùng theme này để tô tối mọi section landing page.
- Mood **Biển/Vũng Tàu**: phối teal–aqua và ảnh biển; **mới là hình ảnh mở rộng**, không đánh dấu một tuyến quest đã vận hành.
- Ký Môn giữ **nút tròn điều hướng trung tâm**, NPC góc trái, AR Lens góc phải; menu 2×2 chỉ mở khi tương tác. Chỉ trong prototype website mới có button đơn giản để chuyển ảnh, và phải ghi rõ là mô phỏng luồng điều hướng.
- Không tùy tiện tạo một thanh tab-bar 5 mục dưới app. Các nhãn nhìn thấy trong ảnh AI **không thay thế đặc tả màn hình Android**.

---

# 8. CTA và điều hướng chuyển đổi

| Vị trí | CTA | Đích xác định |
|---|---|---|
| Hero primary | `Khám phá trải nghiệm` | Scroll tới ACT 03 hoặc phần how-it-works |
| Hero secondary / nav | `Xem Demo` | Mở modal video hoặc trang demo **khi có file/video thật** |
| App Preview | `Khám phá ứng dụng` | Điều khiển bản preview trong trang |
| Chapter Zero | `Xem hành trình đầu tiên` | Timeline ACT 06 |
| Product Value | `Tìm hiểu dự án` | `/project` |
| Final | `Bắt đầu hành trình` | Tải APK đã xác minh **hoặc** đăng ký quan tâm **hoặc** xem demo, theo trạng thái phát hành |

**Gating bắt buộc:**

- Nếu chưa có APK: không đặt nhãn `Tải Android`.
- Nếu chỉ có prototype: dùng `Xem thiết kế trải nghiệm` / `Xem prototype` thay vì `Chơi ngay`.
- Nếu chưa có form/backend nhận đăng ký: không hiển thị `Đăng ký sớm` mà không lưu được dữ liệu.
- Nếu APK có chế độ demo giả lập GPS/time cho ban giám khảo: phải ghi rõ `Bản demo / Chế độ mô phỏng`.

---

# 9. Project Overview — Trang dành cho HIST / đối tác

**Mục tiêu:** Trình bày đề xuất du lịch sáng tạo dưới dạng dễ đánh giá, tránh lẫn với các cảnh fantasy.

## Các module

1. **Executive summary:** Veilwake là gì, nhóm người dùng, trải nghiệm du lịch khác biệt ở đâu.
2. **Problem / user insight:** Những giả thuyết về khám phá văn hóa và giải trí đô thị, chưa kết luận thay người dùng.
3. **Solution / experience loop:** Bản đồ → thử thách văn hóa → huy hiệu & Mảnh Ký Ức → vụ án đêm → Cảnh Ký Ức.
4. **Why tourism:** Du lịch văn hóa, du lịch đêm, chuyển đổi số; nêu liên hệ tới người dùng và điểm đến.
5. **What makes it different:** Story-driven exploration, physical location, badge personalization, AR tied to cultural meaning; không tự tuyên bố chưa ai từng làm.
6. **MVP scope and evidence:** Chỉ một Chapter Zero với hai địa điểm gameplay; ảnh/video build chạy thật; thiết bị và điều kiện thử nghiệm; giới hạn.
7. **Scalability roadmap:** Thêm địa danh, hành trình ẩm thực, truyền thống địa phương, nội dung Vũng Tàu và Bình Dương — **tầm nhìn**, không phải nội dung có sẵn.
8. **Team and contact:** Thành viên, trách nhiệm, contact thật; không bịa đơn vị hợp tác hoặc tổ chức bảo trợ.
9. **Evidence attachments (nếu có):** Trailer; APK; screenshot; test note; các nguồn văn hóa đã kiểm chứng.

**Tính khả dụng:** Có toc/anchors rõ; có thể in PDF hoặc chia sẻ link; hạn chế chuyển động, ưu tiên nội dung; tránh yêu cầu cuộn qua cả trailer mới đọc được tài liệu.

---

# 10. Motion / animation / accessibility / performance

## Motion principles

- **Cinematic, not obstructive:** Tương tác cuộn do người dùng kiểm soát; không scroll hijacking, không bắt hoàn thành animation để đọc.
- **One hero moment, one AR climax:** Hero reveal và night reveal là hai điểm nhấn; các section khác tiết chế. **Màu mặc định luôn sáng**, cả sau khi người dùng xem cảnh AR đêm.
- **Readable content first:** Không đưa text quan trọng vào frame video không đọc được.
- **Mute by default:** Không tự phát âm thanh; có toggle bật/tắt rõ.
- **Reduced motion:** Tôn trọng `prefers-reduced-motion`, thay sequence bằng crossfade hoặc các khung ảnh tĩnh.
- **Keyboard / screen reader:** Các section, tab, menu, dialog và nút có thứ tự focus, nhãn và hành vi đóng/mở đúng.

## Performance targets (mục tiêu kỹ thuật đề xuất, không phải số liệu đo)

- Tối ưu Core Web Vitals, đặc biệt LCP/CLS/INP trên thiết bị di động.
- Ảnh AVIF/WebP, poster trước khi video bắt đầu, lazy-load các phần dưới fold.
- Không tải video background/3D nặng trước khi người dùng cần nếu không đóng góp vào phần nhìn đầu trang.
- Animation dùng CSS transform/opacity và GSAP khi cần; 3D/Three.js chỉ khi đã chứng minh giá trị, có fallback. **Không dùng WebGL rendering toàn trang, video nền dài hoặc ánh sáng chớp dày đặc chỉ để 'cinematic'.**
- Không phụ thuộc vào WebGL mới xem được nội dung; mạng yếu vẫn xem được ảnh/copy và truy cập Project Overview.

## SEO & chia sẻ

- Title/description tập trung `Saigon: Veilwake`, `du lịch tương tác`, `khám phá Sài Gòn`, `AR`.
- Metadata Open Graph có ảnh cover chất lượng, slogan, mô tả rõ sản phẩm.
- Nội dung quan trọng phải hiện trong HTML, không chỉ trong canvas/video.
- Tiếng Việt là ngôn ngữ đầu; kiến trúc nội dung hỗ trợ thêm tiếng Anh khi triển khai.

---

# 11. Asset & media production checklist

| ID | Asset | Sử dụng | Yêu cầu | Ưu tiên |
|---|---|---|---|---|
| MEDIA-01 | Video/ảnh Sài Gòn ban ngày | Hero | Có landmark thật, quyền sử dụng, crop desktop/mobile, **ánh sáng cao, sky blue, vàng nắng; ít overlay** | P0 |
| MEDIA-02 | Layer fantasy / glow / Điệp Ức | Hero transition | Asset PNG/WebM alpha hoặc CSS; **hình bướm tím trong mờ, kích thước nhỏ**; không che nội dung | P0 |
| MEDIA-03 | Bản đồ + 4 mục Ký Môn | App Preview | **Khớp ảnh UI Theme Showcase + kiến trúc UI v2.2**; 4 mood là concept visual, không tạo bottom nav sai | P0 |
| MEDIA-04 | UI Place Detail Bưu điện | Discover, Chapter Zero | Nội dung văn hóa đã kiểm chứng, trạng thái nhiệm vụ rõ | P0 |
| MEDIA-05 | Huy hiệu Bưu điện 2 trạng thái | Badge Preview | Mẫu trước/sau cá nhân hóa, có ảnh minh họa được phép | P0 |
| MEDIA-06 | Mảnh Ký Ức: Lời Nhắn | Badge/Chapter Zero | Thiết kế biểu tượng consistent với app | P0 |
| MEDIA-07 | Night city / AR Ấn Ký | Night Reveal | Phân biệt concept với footage; không phủ lên biểu tượng tôn giáo | P0 |
| MEDIA-08 | VFX phong thư, chữ phát sáng, chim giấy | Chapter Zero ending | Đúng Cảnh Ký Ức đã chốt | P0 |
| MEDIA-09 | Trailer/gameplay APK thực tế | Demo + evidence | Chú thích thiết bị/build và tình trạng demo phù hợp | P0 khi có |
| MEDIA-10 | Hình chụp màn hình app thật | Product evidence | Không nhầm mockup với bản build | P0 khi có |
| MEDIA-11 | Logo, icon, brand assets | Toàn site | Một nguồn sự thật thống nhất; SVG, PNG; giấy phép rõ; **logo sáng navy** để dùng trên nền trắng | P0 |
| MEDIA-12 | NPC mascot website | Optional mini-dialogue | Đợi khóa nhân vật/thiết kế thực tế | P1 |
| MEDIA-13 | Âm thanh nền / SFX | Các khoảnh khắc cinematic | Chỉ chạy sau tương tác chủ động, có license | P1 |
| MEDIA-14 | Ảnh mở rộng vùng biển / làng nghề | Vision / roadmap | Ghi rõ tính chất định hướng, không giả là gameplay đã có; blue-aqua/coastal mood | P1 |
| MEDIA-15 | Hero 4 travel moods (Thanh Bình / Hoài Cổ / Đêm Huyền Bí / Biển) | Hero rail / app visual | Dùng moodboard có nhãn rõ, ảnh/prototype thật hoặc được ghi `Concept` | P1 |
| MEDIA-16 | Collage postcard du lịch + tem + hoa lá nhẹ | ACT 02, 04, 06, footer | Nền kem sáng; ảnh địa danh/du khách có quyền sử dụng; không cổ điển hóa cả trang | P0 |
| MEDIA-17 | Design screenshot / style gallery | Handoff thiết kế | Hai file tham chiếu đính kèm: landing page sáng + four-theme app, không coi là ảnh gameplay | P0 |

**Quy tắc phân loại media:** `Real location footage` / `Actual gameplay` / `UI prototype` / `Concept visualization` / `Future roadmap` được gắn đúng khi dùng trong bối cảnh có thể gây hiểu nhầm.

---

# 12. Tiến trình thực thi cho nhóm

## Phase A — Content lock

- [ ] Chốt nội dung text tám Acts theo bản đặc tả.
- [ ] Fact-check thông tin văn hóa địa điểm nếu đưa ra sự kiện cụ thể.
- [ ] Dán nhãn trạng thái tính năng, media và demo theo tình hình thực tế.
- [ ] Kiểm tra Chapter Zero không đổi cốt truyện hay tự thêm đáp án.

## Phase B — Visual & prototype

- [ ] Tạo 2–3 keyframe Hero: **daylight is default → twilight overlay nhẹ → app map preview rõ**, bảo đảm background sáng.
- [ ] Hoàn thành storyboard desktop **bố cục narrative + showcase rail** theo ảnh sáng và crop mobile **single-column**.
- [ ] Dựng Interactive App Preview với 4 mục đúng Ký Môn.
- [ ] Dựng Badge Preview và Chapter Zero Timeline.
- [ ] Review copy “du lịch trước, fantasy sau” và visual “**light travel first, mystical layer second**”.
- [ ] Đối chiếu các màn app với ảnh `Saigon Veilwake Theme Showcase.png`; không chấp nhận tab-bar giả hoặc dark fantasy UI trên mọi screen.
- [ ] Tạo các trạng thái preview 4 mood có nhãn `Concept/Định hướng` khi chưa phải tính năng runtime.

## Phase C — Web implementation

- [ ] Tạo website responsive **Light Travel Edition**, bố cục hai cột editorial desktop / một cột mobile, và `/project`.
- [ ] Hoàn thiện bốn tương tác P0, loading/fallback, accessibility.
- [ ] Kiểm thử mobile thật, máy yếu, reduced-motion, mạng chậm.
- [ ] Liên kết CTA thật, xác minh media nguồn và SEO preview.
- [ ] Kiểm tra nội dung không giả định thành tích hoặc tính năng chưa có.

**Stack công nghệ chỉ là đề xuất, chưa khóa:** Next.js/React hoặc framework phù hợp đội; CSS/Tailwind cho giao diện; GSAP ScrollTrigger cho cinematic; Framer Motion cho UI; Three.js nếu cần một lớp 3D nhẹ và có fallback; video/WebM tối ưu thay cho 3D thời gian thực nếu đủ hiệu quả. Không dùng công nghệ nặng chỉ để phô diễn.

---

# 13. Acceptance criteria — Tiêu chí nghiệm thu landing page

1. Người xem nhận ra ngay Veilwake là trải nghiệm **du lịch khám phá thực địa** kết hợp AR/game, không nhầm là game fantasy thuần túy. **Toàn trang mặc định sáng và du lịch-first.**
2. H1, supporting copy, cả hai CTA Hero đọc rõ trên desktop/mobile; không chờ animation.
3. Có đủ tám Acts theo luồng: du lịch → vấn đề → khám phá → sưu tầm → AR đêm → Chapter Zero → giá trị & bằng chứng → CTA.
4. Ký Môn trong App Preview dẫn đúng **bốn mục chính**, không đổi thiết kế thành bottom navigation thông thường.
5. Huy hiệu thể hiện **nhận do hoàn thành nhiệm vụ**, ảnh chỉ dùng để cá nhân hóa.
6. Mảnh Ký Ức được truyền đạt là thành quả khôi phục ý nghĩa, không phải coin.
7. Chapter Zero: **Bưu điện / Huy hiệu Bưu điện / Mảnh Ký Ức: Lời Nhắn / Nhà thờ Đức Bà / Ấn Ký / Cảnh Ký Ức: Những Lời Đã Gửi**, đúng trình tự và không thêm tình tiết mới.
8. Cảnh AR và ban đêm không vô tình khuyến khích hoạt động không an toàn hoặc không phù hợp không gian tôn giáo.
9. Có Project Overview đọc nhanh được; có đường từ trang chủ đến nội dung dự án và bằng chứng.
10. CTA hoạt động thật; chưa có APK/video thì có fallback trung thực.
11. Hiệu ứng scroll không ngăn truy cập nội dung; mobile giảm chuyển động, media fallback và không autoplay tiếng.
12. Mọi claim về sản phẩm, người dùng và tác động được phân biệt theo `Đã triển khai` / `Thử nghiệm` / `Dự kiến`.
13. Bố cục **desktop narrative + visual/showcase rail**, có đủ 8 ACT; mobile một cột có thứ tự logic và không scroll ngang toàn trang.
14. **Không có dark theme toàn site, không HUD/fantasy RPG/loot.** Cảnh night chỉ chiếm một feature panel, sau đó bố cục quay lại nền sáng.
15. Hero giữ ảnh địa danh Sài Gòn *ban ngày*, headline navy, CTA ocean-blue, điện thoại map pastel; có fallback khi JS/video không chạy.
16. App UI preview phải bám ảnh `Saigon Veilwake Theme Showcase.png` và UI v2.2, nút **Ký Môn giữa**, NPC trái, AR lens phải; không đổi thành bottom nav 5 tab.
17. Four travel moods được giới thiệu như **bốn sắc thái hình ảnh**, **không giả là bốn mode đã được build**; Vũng Tàu thể hiện là mở rộng.
18. Travel/tourism value và demo **có mặt rõ** như ở ảnh mới, không bị mất khi đổi style hoặc khi render mobile.

---


# 13A. Design handoff — hướng dẫn Figma/Stitch/Codex theo ảnh mới

## 13A.1. Design prompt ngắn để bảo toàn bố cục và nội dung

> Create a complete high-fidelity responsive landing page for **Saigon: Veilwake** from the supplied specification. **STRICTLY use the latest bright pastel two-column travel website reference**: airy white and sky-blue background, elegant navy typography, warm Saigon daylight photography, subtle cream/gold travel postcards, polished mobile-map app mockups, carefully isolated purple night AR scene. Preserve **all eight narrative acts 01–08, the /project route, the real product evidence/demo sections, and the exact Chapter Zero canon.** Desktop: left narrative content + right editorial tourism/app/demo showcase; mobile: one column in logical story order. Keep gaming metaphors understated: this is a cultural tourism discovery product with AR storytelling, not a dark RPG website. Use the app Theme Showcase reference for map, location cards and central Ký Môn navigation; **never invent a conventional five-tab bottom navigation**. Never label concept images as working gameplay. Use real, verified CTA destinations only.

## 13A.2. Negative design constraints (sai là phải sửa)

- No full-site dark navy/black, no oppressive cinematic gradients, no heavy neon particle backgrounds, no gold-on-black fantasy website.
- No fantasy RPG dashboard, HUD, XP bar, inventory shop, loot box, rarity colors, monster/battle visuals.
- No disappearance or consolidation of original 8 acts, no dropping tourism impact, demo or Project Overview.
- No rendering the prototype app as a visually unrelated product; phone UI must follow `Saigon Veilwake Theme Showcase.png` while respecting the actual app navigation rules.
- No 4 moods presented as live features without build evidence; no beach/Vũng Tàu shown as Chapter Zero mission.
- No fabricated historic fact, review/rating, GPS coordinates, user numbers, partner logos, testimonials, trial results or functioning download links.
- No autoplay audio, no forced scroll, no heavy desktop-only animation without mobile and reduced-motion fallback.

## 13A.3. Review checklist (before acceptance)

1. Side by side compare against both reference PNGs at 1440px and 390px.
2. Check hero readability after forcing reduced motion and disabling scripts.
3. Check all eight sections, three tourism pillars, Chapter Zero order and correct terminology.
4. Check label `UI prototype` vs `Actual gameplay` on every meaningful media tile.
5. Check clickable interactive prototype state transitions and no false CTAs.
6. Verify clear product/tourism identity when all images fail to load.

---

# 14. Decision log / Những điều chưa chốt

## ĐÃ CHỐT

- **Bright Cinematic Travel Storytelling**; Hero **Day-to-Night Reveal** (daylight-first) và một phần motif **The Lost Letter** tại Chapter Zero.
- **Reference visuals đã chốt:** `a_clean_pastel_modern_travel_app_landing_page_mo.png` (web), `Saigon Veilwake Theme Showcase.png` (app style). Không quay về concept web tối.
- Trọng tâm là **giá trị du lịch** cho HIST: du lịch văn hóa, trải nghiệm buổi tối, chuyển đổi số.
- **Mức B:** Cinematic + Interactive Product Showcase, không dựng full immersive 3D website.
- Copy Hero chính xác như mục 2.1.
- Tám phân cảnh, Project Overview riêng, bốn tương tác P0, thêm gallery bốn mood là P1.
- Desktop **editorial asymmetrical two-column** (storytelling lớn trái; tourism/product/media phải), mobile thứ tự một cột; soft-card/pastel travel visual.
- Chapter Zero **giữ nguyên canon**, không mở rộng scope gameplay MVP.

## CHƯA CHỐT / CẦN DỮ LIỆU TRIỂN KHAI

- File/logo cuối, font display cuối và mẫu cụ thể của NPC/Điệp Ức; **bộ token hex trên là gợi ý production theo ảnh chứ chưa phải đo màu chính thức**.
- Thước phim thực địa, tính sẵn có và bản quyền media.
- Câu đố văn hóa, lời thoại, chứng cứ, đáp án vụ án của Chapter Zero.
- Tình trạng APK thực tế, link demo thật, QA/điện thoại thử nghiệm.
- Tọa độ AR an toàn, thử nghiệm điều kiện hiện trường, xác minh thông tin địa điểm.
- Ngân sách media và stack web mà nhóm có khả năng duy trì.

**Lưu ý phiên bản tài liệu:** Những thay đổi kỹ thuật game **Kotlin/ARCore/SceneView với ranh giới Unity as a Library về sau** thuộc prompt Android mới nhất và **không thay đổi canon gameplay**. MVP Brief v1.1 còn phản ánh phương án Unity trước đó; landing page không nên khóa nền tảng triển khai dựa vào chi tiết này.

---

# 15. Nguồn chuẩn nội bộ (source of truth)

1. `Saigon_Veilwake_Ban_Chot_Y_Tuong_The_Gioi_Game_v1.0(2).docx` — thế giới quan, thuật ngữ, nguyên tắc, câu chuyện dài hạn.
2. `MVP_Brief.md` — Chapter Zero, địa điểm, luồng game, phần thưởng, điều kiện, giới hạn MVP.
3. `UI_UX_Design_Specification.md` — kiến trúc map-first, Ký Môn 2×2, NPC, AR lens, hành trình, nhật ký, hộ chiếu.
4. `CODEX_PROMPT_VEILWAKE_ANDROID_MVP_UPDATED.md` — cập nhật quyết định triển khai Android Kotlin-first, Unity-ready; **không dùng làm nguồn sửa cốt truyện**.
5. Quyết định trong cuộc trao đổi chốt landing page: Hero `Khám phá một Sài Gòn bạn chưa từng thấy.`, Cinematic Day-to-Night, Interactive Product Showcase B, HIST/tourism-first, Chapter Zero giữ nguyên.
6. **Latest visual web reference:** `a_clean_pastel_modern_travel_app_landing_page_mo.png` — hướng thiết kế **sáng**, full 8-ACT content, editorial two-column bố cục có feature board và showcase rail.
7. **App visual reference supplied by team:** `Saigon Veilwake Theme Showcase.png` — phong cách app map-first, 4 mood tham chiếu; **không tự suy diễn các mode này là tính năng thực tế**.

**Thứ tự ưu tiên khi mâu thuẫn:** canon/worldbuilding → scope/gameplay của MVP Brief → UI mobile v2.2 → quyết định landing page v1.1 → **tham chiếu hình mới về visual** → lựa chọn kỹ thuật riêng cho từng nền tảng. Ảnh AI không được đảo ngược logic/gameplay đã chốt. Nội dung đã được phát hành với công chúng phải được kiểm chứng tính chính xác thực tế trước khi xuất bản.

---

*End of Landing Page UI/UX Design Specification v1.1 · Light Travel Edition — Saigon: Veilwake.*
