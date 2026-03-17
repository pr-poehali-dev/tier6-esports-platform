export const teams = [
  {
    id: "echofall",
    name: "Echofall",
    tag: "ECF",
    rank: 1,
    rating: 0,
    country: "RU",
    flag: "RU",
    founded: "2023",
    region: "CIS",
    tier: "Tier 6",
    logo: "ECF",
    color: "#e8d44d",
    wins: 0,
    losses: 0,
    winRate: 0,
    mapsPlayed: 0,
    avgRating: 0,
    description: "Команда Echofall. Статистика появится по мере проведения матчей.",
    players: ["spokyso", "ghostfire", "kr4wl", "vexen", "null_ptr"],
    achievements: [
      { id: 1, title: "—", place: "1 место", date: "—" },
    ],
    recentMatches: [] as { opponent: string; result: string; score: string; map: string; date: string }[],
    mapStats: [
      { map: "Mirage", played: 0, winRate: 0 },
      { map: "Dust2", played: 0, winRate: 0 },
      { map: "Inferno", played: 0, winRate: 0 },
      { map: "Nuke", played: 0, winRate: 0 },
      { map: "Ancient", played: 0, winRate: 0 },
      { map: "Anubis", played: 0, winRate: 0 },
      { map: "Vertigo", played: 0, winRate: 0 },
    ]
  }
];

export const getTeam = (id: string) => teams.find(t => t.id === id);
