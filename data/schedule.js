/*
 * 시즌 특강 / 학기 일정 — 시즌이 바뀔 때마다 이 파일만 수정합니다.
 *
 *  title     : 섹션 큰 제목 (예: "2026 겨울방학 특강")
 *  period    : 기간 한 줄 요약
 *  location  : 수업 장소 안내 (없으면 "")
 *  poster    : 포스터 이미지 경로 (assets/img/season/ 아래, 없으면 "")
 *  notice    : 일정 아래 안내 문구 목록
 *  classes   : 반 목록 — name, teacher, target, schedule[{label, time}], points[]
 *  testDates : 함께 보여줄 시험 일정 (없으면 빈 목록 [])
 */
window.SEASON = {
  badge: "현재 모집 중",
  title: "2026 가을학기",
  subtitle: "SAT · 수학 · 영어 정규 프로그램",
  period: "2026. 8. 29 – 12. 12 · 매주 토요일",
  location: "뉴튼어학원 현장 수업",
  poster: "assets/img/season/2026-fall.jpg",

  classes: [
    {
      name: "SAT 실전 대비반",
      tag: "소수정예",
      teacher: "RW 스티븐 선생님 · Math 조셉박 선생님",
      target: "SAT 응시 예정 학생",
      schedule: [
        { label: "기간", time: "8/29 – 11/28 매주 토요일 (9/26 추석 휴강)" },
        { label: "SAT 영어", time: "10:00 – 14:00" },
        { label: "SAT 수학", time: "15:00 – 18:00" }
      ],
      points: ["실전 모의 테스트", "자체 SAT 플랫폼 과제·관리", "오답노트 · 단어 테스트", "학생별 약점 공략 문제 제공"]
    },
    {
      name: "MATH 튜터링",
      tag: "G9 – G12",
      teacher: "조셉박 선생님",
      target: "학교 수학 내신·선행이 필요한 학생",
      schedule: [
        { label: "기간", time: "8/29 – 12/12 매주 토요일" },
        { label: "시간", time: "11:00 – 14:00" }
      ],
      points: ["학교 내신(GPA) 성적 향상 밀착 관리", "수준 맞춤 선행 & 책임형 수업", "수업 외 온라인 강의로 언제든 복습"]
    },
    {
      name: "Academic English",
      tag: "G6 – G9",
      teacher: "이준희 선생님",
      target: "국제학교 · 유학 준비 학생",
      schedule: [
        { label: "기간", time: "8/29 – 12/12 매주 토요일" },
        { label: "G6 – G7", time: "10:00 – 13:00" },
        { label: "G8 – G9", time: "14:00 – 17:00" }
      ],
      points: ["Grammar Master 과정", "에세이 · 요약문 · 논설문 작성", "지문 논리구조 분석 · 정확한 독해", "SAT Reading/Writing 실전 전략"]
    }
  ],

  testDates: {
    label: "2026 SAT 시험일",
    dates: ["9/12", "10/3", "11/7", "12/5"]
  },

  notice: [
    "그룹 수업은 4명 이상 수강 시 개설됩니다.",
    "1:1 개인 수업은 시간과 과목을 상담 후 별도로 정합니다.",
    "결석 시 영상 수업으로 보강합니다."
  ]
};
