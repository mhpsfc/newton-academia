# 뉴튼어학원 홈페이지 — 운영 가이드

뉴튼어학원(메인) × 제이엠에듀(Math by JM EDU) 소개형 홈페이지. 빌드 도구 없는 정적 사이트(HTML/CSS/JS).

## 폴더 구조
```
newton_homepage/
├─ index.html            페이지 본문 (학원소개·수업방식·DSAT·프로그램·강사진·JM EDU·오시는 길)
├─ data/
│  ├─ schedule.js        ★ 시즌 특강/학기 일정 — 시즌마다 이 파일만 수정
│  └─ site-config.js     연락처·주소·SNS·사업자 정보
├─ css/style.css         디자인 (색상은 맨 위 :root 변수)
├─ js/main.js            data/*.js 내용을 화면에 그려 줌
└─ assets/img/           로고·강사·교재·학원 사진 (웹용으로 줄인 사본)
```
원본 자료: `D:\뉴튼어학원 홈페이지 자료`, `D:\제이엠에듀(JM EDU) 홈페이지 자료`

## 시즌 특강 일정 바꾸기
1. 새 포스터가 있으면 `assets/img/season/`에 넣는다 (가로 900px 이하 JPG 권장).
2. `data/schedule.js`에서 `title`, `period`, `classes`, `testDates`, `poster`를 수정한다.
3. 로컬 미리보기 → 배포(아래).

## 연락처·주소 바꾸기
`data/site-config.js` 수정. 빈 문자열("")인 항목은 화면에 표시되지 않음
(예: `kakaoChannel`, `hours`, `email`, `academyRegNumber`를 채우면 해당 버튼/줄이 나타남).

## 로컬 미리보기
```
python -m http.server 5510 --directory D:\Claude_Code\newton_homepage
```
→ http://localhost:5510 (Claude Code에서는 `.claude/launch.json`의 `newton-homepage`)

## 배포
GitHub Pages (무료). 저장소에 push하면 1–2분 뒤 자동 반영.
배포 정보(저장소 주소·사이트 주소)는 이 파일 하단 "배포 기록"에 적는다.

## 확인 필요 항목 (원장님 확인 후 수정)
- 주소: 학원 등록정보 기준 "수지로 475" + 간판 사진 "4층" (사업자등록증 본점 주소는 동천로 356)
- 학원 등록번호, 상담 시간, 카카오톡 채널, 이메일 — `site-config.js`에 비워 둠
- 센터장 인사말: JM EDU 사이트 인사말을 바탕으로 다듬은 초안
- 강사 사진: 포스터에서 잘라낸 저해상도 — 원본 사진을 받으면 `assets/img/teachers/` 교체

## 배포 기록
- (아직 배포 전)
