import { players } from "@/data/players";
import { teams } from "@/data/teams";

export default function StatsPage() {
  const p = players[0];
  const t = teams[0];

  const statRows = [
    { category: "Атака", stats: [
      { label: "ADR (урон за раунд)", player: p.stats.adr.toFixed(1), avg: "72.3", diff: "+20.1" },
      { label: "KPR (убийств за раунд)", player: p.stats.kpr.toFixed(2), avg: "0.68", diff: "+0.19" },
      { label: "Opening Kill %", player: `${p.stats.openingSuccess}%`, avg: "50.0%", diff: "+12.1%" },
      { label: "HS %", player: `${p.stats.hsp}%`, avg: "45.2%", diff: "+7.1%" },
    ]},
    { category: "Выживание", stats: [
      { label: "KAST %", player: `${p.stats.kast}%`, avg: "70.5%", diff: "+3.7%" },
      { label: "K/D Ratio", player: p.stats.kd.toFixed(2), avg: "1.00", diff: "+0.45" },
      { label: "Impact Rating", player: p.stats.impact.toFixed(2), avg: "1.00", diff: "+0.18" },
    ]},
    { category: "Мульти-килы", stats: [
      { label: "2K per map", player: (p.stats.multiKills["2k"] / p.mapsStats.reduce((a,b) => a+b.played,0) * p.mapsStats.length).toFixed(1), avg: "2.1", diff: "+5.8" },
      { label: "3K за серию", player: p.stats.multiKills["3k"].toString(), avg: "11", diff: "+20" },
      { label: "4K за серию", player: p.stats.multiKills["4k"].toString(), avg: "2", diff: "+6" },
    ]},
  ];

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px" }}>
      <div style={{ padding: "28px 0 24px" }}>
        <h1
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            color: "#fff",
            letterSpacing: "0.05em",
            marginBottom: 6,
          }}
        >
          СТАТИСТИКА
        </h1>
        <p style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "var(--text-mid)" }}>
          Детальная аналитика по игрокам и командам
        </p>
      </div>

      {/* Player spotlight */}
      <div
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--surface-3)",
          borderRadius: 8,
          padding: "20px 24px",
          marginBottom: 28,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="glow-line" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div
            style={{
              width: 48,
              height: 48,
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: 14,
              color: "var(--neon)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(232,212,77,0.08)",
              borderRadius: 6,
              border: "1px solid rgba(232,212,77,0.25)",
            }}
          >
            {p.avatar}
          </div>
          <div>
            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 800,
                fontSize: 18,
                color: "var(--neon)",
              }}
            >
              {p.nickname}
            </div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, color: "var(--text-mid)" }}>
              {p.team} · {p.role}
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: 32,
                color: "var(--neon)",
                textShadow: "0 0 20px rgba(232,212,77,0.4)",
              }}
            >
              {p.stats.rating.toFixed(2)}
            </div>
            <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "var(--text-dim)" }}>OVERALL RATING</div>
          </div>
        </div>

        {statRows.map((cat) => (
          <div key={cat.category} style={{ marginBottom: 20 }}>
            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                color: "var(--neon)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: "1px solid rgba(255,107,26,0.15)",
              }}
            >
              {cat.category}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px 80px", gap: 0 }}>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 0" }}>Показатель</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", padding: "4px 0" }}>Игрок</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", padding: "4px 0" }}>Avg T6</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", padding: "4px 0" }}>Δ</span>
              {cat.stats.map((s) => (
                <>
                  <span key={s.label + "l"} style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "#e0e4ed", padding: "8px 0", borderTop: "1px solid var(--surface-3)", fontWeight: 500 }}>{s.label}</span>
                  <span key={s.label + "p"} style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: 13, color: "var(--neon)", textAlign: "center", padding: "8px 0", borderTop: "1px solid var(--surface-3)" }}>{s.player}</span>
                  <span key={s.label + "a"} style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 12, color: "var(--text-mid)", textAlign: "center", padding: "8px 0", borderTop: "1px solid var(--surface-3)" }}>{s.avg}</span>
                  <span key={s.label + "d"} style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 12, color: "#22c55e", textAlign: "center", padding: "8px 0", borderTop: "1px solid var(--surface-3)" }}>{s.diff}</span>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Team stats */}
      <div
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--surface-3)",
          borderRadius: 8,
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 800,
            fontSize: 15,
            color: "#fff",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: 14, color: "var(--neon)" }}>{t.logo}</span>
          {t.name} — Командная статистика
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
          {[
            { label: "Всего матчей", value: t.wins + t.losses, color: "#e0e4ed" },
            { label: "Побед", value: t.wins, color: "#22c55e" },
            { label: "Поражений", value: t.losses, color: "#ef4444" },
            { label: "Winrate", value: `${t.winRate}%`, color: "var(--neon)" },
            { label: "Средний рейтинг", value: t.avgRating.toFixed(2), color: "var(--neon)" },
            { label: "Карт сыграно", value: t.mapsPlayed, color: "#60a5fa" },
            { label: "Лучшая карта", value: "—", color: "var(--text-mid)" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "16px",
                background: "var(--surface-3)",
                borderRadius: 6,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: s.color,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}