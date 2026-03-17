import { getPlayer } from "@/data/players";
import StatCard from "@/components/StatCard";
import Icon from "@/components/ui/icon";

interface PlayerPageProps {
  playerId: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function PlayerPage({ playerId, onNavigate }: PlayerPageProps) {
  const player = getPlayer(playerId);
  if (!player) return <div style={{ padding: 40, color: "var(--text-mid)", fontFamily: "Rajdhani" }}>Игрок не найден</div>;

  const clutchTotal = Object.values(player.stats.clutches).reduce((a, b) => a + b, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px" }}>

      {/* Breadcrumb */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "16px 0",
          fontFamily: "Rajdhani, sans-serif",
          fontSize: 13,
          color: "var(--text-dim)",
        }}
      >
        <button onClick={() => onNavigate("home")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)" }}>
          Главная
        </button>
        <Icon name="ChevronRight" size={12} />
        <button onClick={() => onNavigate("players")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)" }}>
          Игроки
        </button>
        <Icon name="ChevronRight" size={12} />
        <span style={{ color: "var(--neon)" }}>{player.nickname}</span>
      </div>

      {/* Hero */}
      <div
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--surface-3)",
          borderRadius: 8,
          padding: "28px 32px",
          marginBottom: 28,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            background: "radial-gradient(ellipse 40% 80% at 85% 50%, rgba(232,212,77,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="glow-line" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <div
            style={{
              width: 90,
              height: 90,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: 20,
              color: "var(--neon)",
              background: "rgba(232,212,77,0.08)",
              borderRadius: 8,
              border: "1px solid rgba(232,212,77,0.3)",
              flexShrink: 0,
            }}
          >
            {player.avatar}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
              <h1
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: 30,
                  color: "var(--neon)",
                  margin: 0,
                  textShadow: "0 0 20px rgba(232,212,77,0.4)",
                }}
              >
                {player.nickname}
              </h1>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, color: "var(--text-mid)", fontWeight: 400 }}>
                {player.realName}
              </span>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
              <span className="tag tag-blue">{player.role}</span>
              <span className="tag tag-orange">{player.team}</span>
              <span className="tag tag-green">Tier 6</span>
            </div>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[
                { icon: "User", v: `${player.age} лет` },
                { icon: "Flag", v: player.country },
                { icon: "Calendar", v: `Вступил: ${player.joined}` },
              ].map((d) => (
                <div
                  key={d.v}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--text-mid)",
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <Icon name={d.icon} size={13} />
                  {d.v}
                </div>
              ))}
            </div>
          </div>

          {/* Rating big */}
          <div
            style={{
              padding: "16px 28px",
              background: "rgba(232,212,77,0.07)",
              border: "1px solid rgba(232,212,77,0.2)",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "var(--text-dim)", marginBottom: 4, letterSpacing: "0.1em" }}>
              РЕЙТИНГ
            </div>
            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: 44,
                color: "var(--neon)",
                lineHeight: 1,
                textShadow: "0 0 30px rgba(232,212,77,0.5)",
              }}
            >
              {player.stats.rating.toFixed(2)}
            </div>
            <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "#22c55e", marginTop: 6 }}>
              ↑ #{player.rank} в рейтинге
            </div>
          </div>
        </div>
      </div>

      {/* Main stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12, marginBottom: 28 }}>
        <StatCard label="K/D Ratio" value={player.stats.kd.toFixed(2)} color="#22c55e" large />
        <StatCard label="ADR" value={player.stats.adr.toFixed(1)} large />
        <StatCard label="KAST %" value={`${player.stats.kast}%`} color="#60a5fa" large />
        <StatCard label="HS %" value={`${player.stats.hs}%`} color="#f472b6" large />
        <StatCard label="KPR" value={player.stats.kpr.toFixed(2)} large />
        <StatCard label="Impact" value={player.stats.impact.toFixed(2)} color="#a78bfa" large />
        <StatCard label="Opening %" value={`${player.stats.openingSuccess}%`} color="#fb923c" large />
        <StatCard label="Clutches" value={clutchTotal} color="#facc15" large />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="player-grid">

        {/* Multi-kills */}
        <div>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Мульти-килы
          </h2>
          <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
            {Object.entries(player.stats.multiKills).map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  padding: "14px 20px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--surface-3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
                    color: k === "2k" ? "#60a5fa" : k === "3k" ? "#22c55e" : k === "4k" ? "var(--neon)" : "#ef4444",
                    minWidth: 30,
                  }}
                >
                  {k.toUpperCase()}
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: 6,
                      background: "var(--surface-3)",
                      borderRadius: 3,
                      overflow: "hidden",
                      marginBottom: 4,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(v / 87) * 100}%`,
                        background: k === "2k" ? "#3b82f6" : k === "3k" ? "#22c55e" : k === "4k" ? "var(--neon)" : "#ef4444",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#e0e4ed",
                    minWidth: 30,
                    textAlign: "right",
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          {/* Clutches */}
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
              marginTop: 24,
            }}
          >
            Clutch-ситуации
          </h2>
          <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
            {Object.entries(player.stats.clutches).map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  padding: "12px 20px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--surface-3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--text-mid)",
                  }}
                >
                  {k.replace("1v", "1 vs ")}
                </span>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: v > 0 ? "var(--neon)" : "var(--text-dim)",
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Map stats */}
        <div>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Статистика по картам
          </h2>
          <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 80px",
                padding: "10px 18px",
                borderBottom: "1px solid var(--surface-3)",
              }}
            >
              {["Карта", "Rating", "K/D"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    fontSize: 11,
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textAlign: h === "Карта" ? "left" : "center",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
            {player.mapsStats.map((m, i) => (
              <div
                key={m.map}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 80px",
                  padding: "12px 18px",
                  borderBottom: i < player.mapsStats.length - 1 ? "1px solid var(--surface-3)" : "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,212,77,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 14, color: "#e0e4ed" }}>
                  {m.map}
                  <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "var(--text-dim)", marginLeft: 8 }}>
                    {m.played}
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: m.rating >= 1.3 ? "#22c55e" : m.rating >= 1.0 ? "var(--neon)" : "#ef4444",
                    textAlign: "center",
                  }}
                >
                  {m.rating.toFixed(2)}
                </span>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#e0e4ed",
                    textAlign: "center",
                  }}
                >
                  {m.kd.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Recent matches */}
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
              marginTop: 24,
            }}
          >
            Последние матчи
          </h2>
          <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
            {player.recentMatches.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "11px 18px",
                  borderBottom: i < player.recentMatches.length - 1 ? "1px solid var(--surface-3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,212,77,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 800,
                    fontSize: 10,
                    color: m.result === "W" ? "#22c55e" : "#ef4444",
                    background: m.result === "W" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                    border: `1px solid ${m.result === "W" ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)"}`,
                    padding: "2px 8px",
                    borderRadius: 3,
                  }}
                >
                  {m.result}
                </span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, color: "#e0e4ed", flex: 1 }}>
                  vs {m.opponent}
                </span>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: m.rating >= 1.3 ? "#22c55e" : m.rating >= 1.0 ? "var(--neon)" : "#ef4444",
                  }}
                >
                  {m.rating.toFixed(2)}
                </span>
                <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>
                  {m.kills}/{m.deaths}
                </span>
                <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "var(--text-dim)" }}>
                  {m.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div style={{ marginTop: 28 }}>
        <h2
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#fff",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Достижения и награды
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {player.achievements.map((ach) => (
            <div
              key={ach.id}
              className="card-dark"
              style={{ padding: "18px 20px", borderRadius: 6, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, var(--neon), #c8a800)",
                }}
              />
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: 15, color: "#e0e4ed", marginBottom: 4 }}>
                {ach.title}
              </div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, color: "var(--text-mid)", marginBottom: 8 }}>
                {ach.place}
              </div>
              <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>
                {ach.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .player-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}