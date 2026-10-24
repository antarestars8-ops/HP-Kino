import json, os
D = {
"bagus bang": ["nice hyung", "좋다 형"],
"GUE JUGA. bales asal padahal ga liat apa2 😭": ["ME TOO. replied anyway without seeing anything 😭", "나도. 아무것도 못 봤는데 대충 답함 😭"],
"📱 seminggu kemudian udah kebuka. cek di home": ["📱 a week later is unlocked. check the home screen", "📱 일주일 후가 열렸어요. 홈 화면 확인"],
"ga mau ngetik": ["don't feel like typing", "치기 싫어"],
"Kino ga mau ngirim foto ini ke siapa-siapa.": ["Kino doesn't want to send this photo to anyone.", "키노는 이 사진을 누구에게도 보내고 싶지 않다."],
"Kino ga mau upload foto ini ke mana-mana.": ["Kino doesn't want to upload this photo anywhere.", "키노는 이 사진을 어디에도 올리고 싶지 않다."],
"kasih aku 5 menit. abis itu terserah kamu": ["give me 5 minutes. after that it's up to you", "5분만 줘. 그다음엔 네 맘대로 해"],
"aku jelasin semuanya. ga ada yg aku tutupin lagi": ["i'll explain everything. nothing hidden anymore", "다 설명할게. 이제 숨기는 거 없어"],
"oke. tapi ini yg terakhir.": ["okay. but this is the last time.", "그래. 근데 이게 마지막이야."],
"ending aku di HP Kino 🐰 hp-kino.vercel.app": ["my ending in HP Kino 🐰 hp-kino.vercel.app", "HP Kino에서 내 엔딩 🐰 hp-kino.vercel.app"],
"📝 kalo ga keucap · baca lagi sebelum tgl 25": ["📝 in case it doesn't get said · reread before the 25th", "📝 말로 못 할까 봐 · 25일 전에 다시 읽기"],
"jam di HP Kino dimajuin ke 25 Okt 22.00. HP seminggu kemudian udah kebuka": ["HP Kino's clock has been moved to 25 Oct 10 PM. The phone a week later is unlocked", "HP Kino 시계가 10월 25일 오후 10시로 맞춰졌어요. 일주일 후 폰이 열렸어요"],
"udah lewat jam 10 malem kok, langsung aja ke epilog": ["it's already past 10 PM, go straight to the epilogue", "이미 밤 10시 지났어요, 바로 에필로그로 가세요"],
}
p = os.path.join(os.path.dirname(__file__), '..', 'dict.json'); d = json.load(open(p))
for k, v in D.items(): d[k] = v
json.dump(d, open(p, 'w'), ensure_ascii=False); print(len(d))
