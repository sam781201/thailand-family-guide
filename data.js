const days = [
  {
    id: 'day1', date: '7/2（四）', title: '第一天：深夜大會師 ➜ 晚餐與夜遊', stay: '曼谷舒活風格酒店（66/1 Sukhumvit 2）', vibe: '抵達、分流進市區、晚餐彈性集合', transport: '第二組 Grab 六人大車；第三組 ARL 機場快線至 Phayathai 轉乘',
    route: ['18:00–19:30｜機場分流直奔市區', '20:30+｜晚餐與聚會三選一'],
    highlights: ['方案 A：Je Oh Chula 酸辣海鮮大砂鍋 ➜ 匯狂象神廟 24H', '方案 B：Emsphere 美食街，冷氣、帶娃輕鬆', '方案 C：Grab Food 外送炭烤大蝦回飯店'],
    kid: '3歲娃建議車上小睡，晚餐不要硬跑；外送派對是最穩版本。', backup: '太晚或塞車：直接外送回飯店；還有精神再去象神廟。', budget: '晚餐約 350–700 THB / 人'
  },
  {
    id: 'day2', date: '7/3（五）', title: '第二天：曼谷美食美妝大分流 ➜ 全員舒壓', stay: '曼谷舒活風格酒店（同上）', vibe: '早餐探索、合體午餐、下午分流、晚上舒壓', transport: '市區以 BTS/MRT＋Grab/Bolt 彈性移動',
    route: ['08:00–10:00｜晨間早餐備選庫', '10:30–13:30｜Here Hai 爆量蟹肉炒飯合體午餐', '13:45–17:30｜貴婦避暑流 / 潮流流 / 帶娃流', '18:00–20:00｜Playmondo 或 SPA', '20:30+｜CentralwOrld 舒適吃或 Jodd Fairs 夜市'],
    highlights: ['早餐：邢泰記、安樂園、Samantao、王子戲院豬肉粥、益生老茶室', '下午：四面佛＋Gaysorn、Siam Square、SEA LIFE', '晚餐：Savoey、Kub Kao Kub Pla、Jodd Fairs'],
    kid: 'SEA LIFE 與 Playmondo 是帶娃主線；百貨冷氣可做中繼休息點。', backup: '太熱：Gaysorn / CentralwOrld；累了：直接按摩或回飯店。', budget: '早餐 60–350；午餐 400–800；晚餐 500–800 THB / 人'
  },
  {
    id: 'day3', date: '7/4（六）', title: '第三天：曼谷 ➜ 綠山動物園 ➜ 芭達雅', stay: '芭達雅 Somerset Pattaya', vibe: '包車移動日、動物園、飯店泳池、海景晚餐、週末夜市', transport: '15人座保姆車單日包車；晚餐與夜市 Grab/Bolt',
    route: ['09:30｜包車從曼谷出發', '11:00–14:30｜Khao Kheow 綠山野生動物園', '15:30｜Somerset 入住＋頂樓海盜船水上滑梯', '18:00–20:30｜The Glass House Pattaya 海景晚餐', '21:00+｜Thepprasit 大帕夜市'],
    highlights: ['綠山動物園可租高爾夫球車，餵長頸鹿、看水豚', 'The Glass House：木松樹林玻璃屋海鮮', '大帕夜市：週五六日限定，烤大頭蝦、青木瓜沙拉'],
    kid: '這天最重要是午睡節奏：上車可補眠，下午用飯店泳池放電。', backup: '不去動物園：Great&Grand Sweet Destination、Frost Magical Ice of Siam、Terminal 21 Pattaya。', budget: '動物園門票約 300–350；晚餐 800–1500；夜市 150–300 THB / 人'
  },
  {
    id: 'day4', date: '7/5（日）', title: '第四天：芭達雅避暑網美 ➜ 飛機地標夜市', stay: '芭達雅 Somerset Pattaya', vibe: '室內避暑、海景午餐、百貨補貨、房內海鮮宴、飛機夜市', transport: '全日 Grab/Bolt 移動；百貨可步行',
    route: ['09:30–12:00｜House of Benedict 室內網美棚', '12:30–14:30｜3 Mermaids 或 The Sky Gallery 海景午餐', '15:00–20:30｜Central Pattaya 補貨＋Grab 外送海鮮回房', '20:45+｜Runway Street Food 飛機夜市'],
    highlights: ['House of Benedict：全室內冷氣、推車可走', '午餐 A：3 Mermaids 鳥巢打卡＋兒童遊戲區', '午餐 B：The Sky Gallery 草皮寬敞、推車友善', '飛機夜市：波音 747 地標，空地平坦'],
    kid: '中午海景餐廳不要排太硬，下午回房間或百貨讓小孩休息。', backup: '太累：省略夜市，直接飯店泳池＋外送。', budget: '門票 100–200；午餐 450–900；外送 400–700；夜市 100–250 THB / 人'
  },
  {
    id: 'day5', date: '7/6（一）', title: '第五天：芭達雅 ➜ 小綿羊農莊 ➜ 象神安插 ➜ 曼谷', stay: '曼谷 Eastin Grand Hotel Phayathai', vibe: '回程包車、親子農場、車上午睡、進曼谷安插象神', transport: '15人座保姆車單日包車；抵達後市區彈性移動',
    route: ['10:00｜退房，回程包車出發', '10:30–13:00｜Pattaya Sheep Farm 小綿羊農莊', '13:00｜啟程返回曼谷，小孩車上午睡', '15:30｜若 7/2 未去象神，安插匯狂象神廟', '18:30｜晚餐三選一'],
    highlights: ['小綿羊農莊：羊駝、小綿羊、童話風戶外農場', '備案：大象保護區或真理寺', '晚餐：Somboon、Chom Arun / Rongros、ICONSIAM SookSiam'],
    kid: '這天用包車消化長距離，午餐簡單即可，重點是讓小孩在回程睡。', backup: '不去農莊：Elephant Jungle Sanctuary 或 Sanctuary of Truth。', budget: '農莊門票 150–250；晚餐 200–1500 THB / 人'
  },
  {
    id: 'day6', date: '7/7（二）', title: '第六天：法力貼紙 ➜ 購物 ➜ 家族晚宴', stay: '曼谷 Eastin Grand Hotel Phayathai', vibe: '慢早餐、暹羅博物館、ICONSIAM、Big C、家族晚宴', transport: 'BTS/MRT＋Grab/Bolt；購物日以省力為主',
    route: ['08:00–10:00｜早餐彈性備案', '10:30｜Museum of Siam 暹羅博物館', '13:00｜ICONSIAM 午餐 ➜ Big C Supercenter 掃貨', '18:30｜家族晚宴'],
    highlights: ['早餐：The Coffee Club Phayathai、站邊輕食、Nara Thai、Grab 外送安樂園', '暹羅博物館：泰服拍照、互動裝置、Yant Sticker', '晚宴：Saneh Jaan / Paste Bangkok 或 Somboon / Nara Thai'],
    kid: '購物日容易累，建議午餐後安排一次飯店或咖啡廳休息。', backup: '不想跑遠：飯店周邊＋King Power / CentralwOrld。', budget: '晚宴約 800–4000 THB / 人'
  },
  {
    id: 'day7', date: '7/8（三）', title: '第七天：完美終極無縫分流', stay: '退房日', vibe: '依各組班機分流，行李、免稅、慢活、返程', transport: 'Grab 大車 / 機場快線，依班機時間決定',
    route: ['10:00｜第一組退房，Grab 大車直奔機場', '10:00+｜第二組依返程時間：機場免稅或飯店寄放行李＋King Power', '10:00–15:50｜第三組 The Commons Saladaeng 慢活＋大人按摩', '15:50｜第三組領行李，Grab 直奔機場'],
    highlights: ['晚班機：行李寄飯店，大人免稅，小孩泳池放電', '第三組：精品咖啡早午餐＋頭肩頸舒壓', '避免塞車：時間允許可用機場快線'],
    kid: '返程日不要安排硬景點，保留吃飯、泳池、免稅、交通緩衝。', backup: '遇到雨天或塞車：提早去機場，進免稅店吹冷氣。', budget: 'The Commons 約 400–650；按摩 600–1100 THB / 人'
  }
];

const spas = [
  { area: '曼谷舒活風格酒店 Sukhumvit 2 周邊', items: ['Let’s Relax Spa Sukhumvit 31｜多人 VIP 包廂首選｜1,000–2,500 THB', 'Oasis Spa Sukhumvit 31｜別墅奢華感｜2,500–4,500 THB', 'Health Land Asoke｜老牌大店，推車動線寬｜650–1,500 THB'] },
  { area: '芭達雅 Somerset Pattaya 周邊', items: ['Let’s Relax Terminal 21 Pattaya｜百貨內最方便｜800–2,000 THB', 'Health Land Pattaya North｜在地大店｜650–1,200 THB', 'Oasis Spa Pattaya｜熱帶私人花園｜2,500–4,000 THB'] },
  { area: '曼谷 Eastin Grand Phayathai 周邊', items: ['Let’s Relax Spa Phayathai｜同站商圈續攤｜800–2,000 THB', 'Divana Virtue Spa Sathon｜奢華代表｜2,500–4,500 THB', 'Oasis Spa Sukhumvit 31｜最終放鬆首選｜2,500–4,500 THB'] }
];

const extras = [
  { title: '神秘改運電話算命', text: 'สำนักบูระพา，87 Si Phraya Rd。近期 Reels 爆紅，體驗換神奇電話號碼改運。399–999 THB。' },
  { title: 'Jodd Fairs Dan Neramit', text: '喬德夜市城堡版，巨大歐式城堡，晚上點燈好拍，空間寬敞推車友善。' },
  { title: 'Tichuca Rooftop Bar', text: '曼谷水母燈高空酒吧，純大人組深夜喝一杯首選。' },
  { title: 'Baan Kam Khae', text: '芭達雅波西米亞庭院，藤編鳥巢、白色沙灘椅，拍照零死角。' }
];
