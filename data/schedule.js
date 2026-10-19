/*
 * 시즌 특강 / 학기 일정 — 시즌이 바뀔 때마다 이 파일만 수정합니다.
 *
 *  title     : 섹션 큰 제목 (예: "2026 겨울방학특강")
 *  period    : 기간 한 줄 요약
 *  location  : 수업 장소 안내 (없으면 "")
 *  poster    : 포스터 이미지 경로 (assets/img/season/ 아래, 없으면 "")
 *  posterFull: 포스터를 눌렀을 때 열리는 큰 이미지 (없으면 poster를 그대로 엶)
 *  notice    : 일정 아래 안내 문구 목록
 *  classes   : 반 목록 — name, teacher, target, schedule[{label, time}], points[]
 *              (label 안에 \n을 넣으면 그 자리에서 줄바꿈)
 *  testDates : 함께 보여줄 시험 일정 (없으면 빈 목록 [])
 *
 *  지난 시즌(2026 가을학기) 내용은 git 기록에 남아 있습니다.
 */
window.SEASON = {
  badge: "현재 모집 중",
  title: "2026 겨울방학특강",
  subtitle: "ENGLISH · MATH · AP · 국제학교 GPA 관리 · 입학준비",
  period: "2026. 12. 21 – 2027. 1. 15 · 4주 집중",
  location: "뉴튼어학원 현장 수업 · 온라인 ZOOM 수업",
  poster: "assets/img/season/2026-winter.jpg",
  posterFull: "assets/img/season/2026-winter-full.jpg",

  classes: [
    {
      name: "ENGLISH",
      tag: "SAT · 토플 · 듀오링고 · Academic English",
      teacher: "스티븐 · 유설하 · 제이미 Kim · 이준희 선생님",
      schedule: [
        { label: "SAT 영어 실전", time: "월–금 (주5회) 09:00–13:00 · 스티븐" },
        { label: "SAT 영어 입문", time: "월·수·금 (주3회) 14:00–17:00 · 스티븐 · 유설하" },
        { label: "SAT 영어 입문/실전", time: "토 10:00–14:00 · 유설하 · 제이미 Kim" },
        { label: "토플 · 듀오링고", time: "토 14:00–18:00 · 유설하 · 제이미 Kim (온라인 ZOOM 수업 · 과외 개별상담)" },
        { label: "Academic English G5–6", time: "토 10:00–13:00 · 이준희 (소수정예)" },
        { label: "Academic English G7–8", time: "토 14:00–17:00 · 이준희 (소수정예)" }
      ]
    },
    {
      name: "MATH",
      tag: "Algebra · Geometry · Precalculus · AP · SAT",
      teacher: "조셉박 · 양준영 선생님",
      schedule: [
        { label: "MATH 튜터링", time: "화·목 14:00–17:00 · 조셉박 (Algebra 1,2 · Geometry · AP Precalculus, 소수정예)" },
        { label: "MATH 개인과외", time: "토 10:00–18:00 · 양준영 (Algebra 1,2 · Geometry · Precalculus, 소수정예)" },
        { label: "AP Calculus AB & BC", time: "월·수 18:00–21:00 · 조셉박" },
        { label: "SAT MATH", time: "화·목 18:00–21:00 · 조셉박" },
        { label: "AP Statistics", time: "금 18:00–21:00 · 조셉박" }
      ],
      points: ["주말 온라인 ZOOM 수업", "소수정예 · 과외 개별상담"]
    },
    {
      name: "AP COURSES",
      tag: "월–토 상시 수강등록",
      teacher: "모든 AP 과목 뉴튼 오프라인 수업 · 온라인 ZOOM 수업 (소수그룹, 과외상담)",
      schedule: [
        { label: "AP Biology · Chemistry", time: "제이미 Kim · 임성택 선생님" },
        { label: "AP US · World History", time: "송기영 선생님" },
        { label: "AP Economics", time: "Micro / Macro · 이준희 · 이가영 선생님" },
        { label: "AP Physics", time: "Physics 1 · Physics C: Mechanics · 김광희 · 양준영 선생님" },
        { label: "AP Computer Science", time: "월–토 상시 수강등록" },
        { label: "AP Calculus\nAP Statistics", time: "AB & BC · 조셉박 선생님" }
      ]
    },
    {
      name: "국제학교 GPA 관리 · 입학준비",
      schedule: [
        { label: "GPA 관리", time: "Science · MATH · English" },
        { label: "입학준비", time: "국제학교 · 해외 학교" }
      ]
    }
  ],

  testDates: [],

  notice: [
    "상담 문의: 031-8002-5274 · 010-5671-0644",
    "온라인 ZOOM 수업과 과외는 개별 상담 후 시간과 과목을 정합니다."
  ]
};
