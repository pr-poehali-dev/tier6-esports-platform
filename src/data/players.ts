export const players = [
  {
    id: "spokyso",
    nickname: "spokyso",
    realName: "—",
    age: 0,
    country: "RU",
    flag: "RU",
    team: "Echofall",
    teamId: "echofall",
    role: "Entry Fragger",
    joined: "2024",
    rating: 0,
    rank: 1,
    avatar: "SP",

    stats: {
      rating: 0,
      kd: 0,
      kpr: 0,
      adr: 0,
      kast: 0,
      hsp: 0,
      hs: 0,
      impact: 0,
      openingKills: 0,
      openingSuccess: 0,
      clutches: { "1v1": 0, "1v2": 0, "1v3": 0, "1v4": 0, "1v5": 0 },
      multiKills: { "2k": 0, "3k": 0, "4k": 0, "5k": 0 },
    },

    mapsStats: [
      { map: "Mirage", played: 0, rating: 0, kd: 0 },
      { map: "Dust2", played: 0, rating: 0, kd: 0 },
      { map: "Inferno", played: 0, rating: 0, kd: 0 },
      { map: "Nuke", played: 0, rating: 0, kd: 0 },
      { map: "Ancient", played: 0, rating: 0, kd: 0 },
    ],

    achievements: [
      { id: 1, title: "—", place: "—", date: "—" },
    ],

    recentMatches: [] as { opponent: string; result: string; score: string; rating: number; kills: number; deaths: number; date: string }[],
  }
];

export const getPlayer = (id: string) => players.find(p => p.id === id);
