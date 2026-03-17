export const teams = [
  {
    id: "echofall",
    name: "Echofall",
    tag: "ECF",
    rank: 1,
    rating: 1247,
    country: "RU",
    flag: "🇷🇺",
    founded: "2023",
    region: "CIS",
    tier: "Tier 6",
    logo: "⚡",
    color: "#ff6b1a",
    wins: 28,
    losses: 9,
    winRate: 75.7,
    mapsPlayed: 74,
    avgRating: 1.18,
    description: "Восходящая звезда tier 6 сцены. Команда известна агрессивным стилем игры и сильной координацией.",
    players: ["spokyso", "ghostfire", "kr4wl", "vexen", "null_ptr"],
    achievements: [
      { id: 1, title: "T6 Open Cup #3", place: "🥇 1 место", date: "Февраль 2026", prize: "15 000 ₽" },
      { id: 2, title: "CIS Amateur League S4", place: "🥇 1 место", date: "Январь 2026", prize: "25 000 ₽" },
      { id: 3, title: "Underground Cup #8", place: "🥈 2 место", date: "Декабрь 2025", prize: "10 000 ₽" },
      { id: 4, title: "T6 Open Cup #2", place: "🥉 3 место", date: "Ноябрь 2025", prize: "5 000 ₽" },
      { id: 5, title: "CIS Amateur League S3", place: "🥈 2 место", date: "Октябрь 2025", prize: "15 000 ₽" },
    ],
    recentMatches: [
      { opponent: "ViperX", result: "W", score: "2-0", map: "Mirage", date: "15 мар" },
      { opponent: "StormRise", result: "W", score: "2-1", map: "Dust2", date: "12 мар" },
      { opponent: "NightFall", result: "L", score: "1-2", map: "Inferno", date: "10 мар" },
      { opponent: "ColdBrew", result: "W", score: "2-0", map: "Nuke", date: "8 мар" },
      { opponent: "GhostOps", result: "W", score: "2-1", map: "Ancient", date: "5 мар" },
    ],
    mapStats: [
      { map: "Mirage", played: 18, winRate: 83 },
      { map: "Dust2", played: 15, winRate: 73 },
      { map: "Inferno", played: 12, winRate: 67 },
      { map: "Nuke", played: 10, winRate: 80 },
      { map: "Ancient", played: 9, winRate: 78 },
      { map: "Anubis", played: 6, winRate: 50 },
      { map: "Vertigo", played: 4, winRate: 75 },
    ]
  }
];

export const getTeam = (id: string) => teams.find(t => t.id === id);
