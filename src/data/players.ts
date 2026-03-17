export const players = [
  {
    id: "spokyso",
    nickname: "spokyso",
    realName: "Александр М.",
    age: 19,
    country: "RU",
    flag: "🇷🇺",
    team: "Echofall",
    teamId: "echofall",
    role: "Entry Fragger",
    joined: "Январь 2024",
    rating: 1.31,
    rank: 1,
    avatar: "👻",

    stats: {
      rating: 1.31,
      kd: 1.45,
      kpr: 0.87,
      adr: 92.4,
      kast: 74.2,
      hsp: 52.3,
      hs: 52.3,
      impact: 1.18,
      openingKills: 0.34,
      openingSuccess: 62.1,
      clutches: { "1v1": 18, "1v2": 7, "1v3": 2, "1v4": 0, "1v5": 0 },
      multiKills: { "2k": 87, "3k": 31, "4k": 8, "5k": 1 },
    },

    mapsStats: [
      { map: "Mirage", played: 18, rating: 1.42, kd: 1.61 },
      { map: "Dust2", played: 15, rating: 1.28, kd: 1.38 },
      { map: "Inferno", played: 12, rating: 1.19, kd: 1.27 },
      { map: "Nuke", played: 10, rating: 1.35, kd: 1.49 },
      { map: "Ancient", played: 9, rating: 1.41, kd: 1.55 },
    ],

    achievements: [
      { id: 1, title: "T6 Open Cup #3", place: "🥇 MVP турнира", date: "Февраль 2026" },
      { id: 2, title: "CIS Amateur League S4", place: "🥇 Лучший entry", date: "Январь 2026" },
      { id: 3, title: "Underground Cup #8", place: "🏆 Top fragger", date: "Декабрь 2025" },
      { id: 4, title: "CIS Amateur League S3", place: "⭐ MVP финала", date: "Октябрь 2025" },
    ],

    recentMatches: [
      { opponent: "ViperX", result: "W", score: "2-0", rating: 1.58, kills: 42, deaths: 18, date: "15 мар" },
      { opponent: "StormRise", result: "W", score: "2-1", rating: 1.39, kills: 58, deaths: 31, date: "12 мар" },
      { opponent: "NightFall", result: "L", score: "1-2", rating: 1.12, kills: 44, deaths: 39, date: "10 мар" },
      { opponent: "ColdBrew", result: "W", score: "2-0", rating: 1.71, kills: 39, deaths: 14, date: "8 мар" },
      { opponent: "GhostOps", result: "W", score: "2-1", rating: 1.24, kills: 52, deaths: 38, date: "5 мар" },
    ]
  }
];

export const getPlayer = (id: string) => players.find(p => p.id === id);
