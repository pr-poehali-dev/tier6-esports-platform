import { teams } from "@/data/teams";
import { players } from "@/data/players";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const team = teams[0];
  const player = players[0];

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px" }}>

      {/* Hero */}
      <div
        style={{
          position: "relative",
          margin: "0 -24px 40px",
          padding: "60px 24px 50px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d0f14 0%, #12151c 50%, #0d0f14 100%)",
        }}
        className="grid-scan"
      >
        {/* Decorative lines */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255,107,26,0.06) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div className="glow-line" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
        <div className="glow-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span className="tag tag-orange">TIER 6 ESPORTS</span>
            <span className="tag tag-green">CIS REGION</span>
          </div>
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 5vw, 52px)",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 12,
              maxWidth: 600,
            }}
          >
            TIER 6{" "}
            <span style={{ color: "var(--neon)", textShadow: "0 0 30px rgba(255,107,26,0.5)" }}>
              СТАТИСТИКА
            </span>{" "}
            И РЕЙТИНГИ
          </h1>
          <p
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: 17,
              color: "var(--text-mid)",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            Официальная аналитическая платформа для команд и игроков подпольной сцены CS2.
            Статистика в реальном времени.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => onNavigate("teams")}
              style={{
                padding: "10px 24px",
                background: "var(--neon)",
                color: "#000",
                border: "none",
                borderRadius: 4,
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.08em",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--neon-glow)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              Смотреть команды
            </button>
            <button
              onClick={() => onNavigate("rankings")}
              style={{
                padding: "10px 24px",
                background: "transparent",
                color: "var(--neon)",
                border: "1px solid rgba(255,107,26,0.4)",
                borderRadius: 4,
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.08em",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,107,26,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Рейтинги
            </button>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 40,
              paddingTop: 32,
              borderTop: "1px solid var(--surface-3)",
              flexWrap: "wrap",
            }}
          >
            {[
              { v: "1", l: "Команда" },
              { v: "5", l: "Игроков" },
              { v: "37", l: "Матчей" },
              { v: "3", l: "Титула" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 28,
                    color: "var(--neon)",
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: 12,
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="home-grid">
        {/* Top Team */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#fff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Топ команды
            </h2>
            <button
              onClick={() => onNavigate("teams")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--neon)",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Все <Icon name="ChevronRight" size={14} />
            </button>
          </div>

          <button
            onClick={() => onNavigate("team", team.id)}
            className="card-dark"
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: 6,
              cursor: "pointer",
              background: "var(--surface-2)",
              border: "1px solid var(--surface-3)",
              textAlign: "left",
              transition: "all 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,26,0.4)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,107,26,0.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-3)";
              (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  background: "rgba(255,107,26,0.1)",
                  borderRadius: 6,
                  border: "1px solid rgba(255,107,26,0.2)",
                  flexShrink: 0,
                }}
              >
                {team.logo}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#fff",
                    }}
                  >
                    {team.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 9,
                      color: "var(--text-dim)",
                      border: "1px solid var(--surface-3)",
                      padding: "1px 5px",
                      borderRadius: 3,
                    }}
                  >
                    {team.tag}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="tag tag-orange">{team.region}</span>
                  <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "var(--text-dim)" }}>
                    {team.flag} {team.country}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "var(--neon)",
                  }}
                >
                  #{team.rank}
                </div>
                <div
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: 10,
                    color: "var(--text-dim)",
                  }}
                >
                  {team.rating} pts
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid var(--surface-3)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
              }}
            >
              {[
                { l: "W/L", v: `${team.wins}/${team.losses}` },
                { l: "Winrate", v: `${team.winRate}%` },
                { l: "Avg Rating", v: team.avgRating.toFixed(2) },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#e0e4ed",
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: 10,
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </button>
        </div>

        {/* Top Player */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#fff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Топ игроки
            </h2>
            <button
              onClick={() => onNavigate("players")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--neon)",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Все <Icon name="ChevronRight" size={14} />
            </button>
          </div>

          <button
            onClick={() => onNavigate("player", player.id)}
            className="card-dark"
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: 6,
              cursor: "pointer",
              background: "var(--surface-2)",
              border: "1px solid var(--surface-3)",
              textAlign: "left",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,26,0.4)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,107,26,0.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-3)";
              (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  background: "linear-gradient(135deg, rgba(255,107,26,0.2), rgba(255,61,0,0.1))",
                  borderRadius: 6,
                  border: "1px solid rgba(255,107,26,0.3)",
                  flexShrink: 0,
                }}
              >
                {player.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 800,
                      fontSize: 16,
                      color: "var(--neon)",
                    }}
                  >
                    {player.nickname}
                  </span>
                  <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "var(--text-dim)" }}>
                    {player.flag}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span className="tag tag-blue">{player.role}</span>
                  <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "var(--text-mid)" }}>
                    {player.team}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "var(--neon)",
                  }}
                >
                  {player.stats.rating.toFixed(2)}
                </div>
                <div
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: 10,
                    color: "var(--text-dim)",
                  }}
                >
                  RATING
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid var(--surface-3)",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                { l: "K/D", v: player.stats.kd.toFixed(2) },
                { l: "ADR", v: player.stats.adr.toFixed(1) },
                { l: "KAST", v: `${player.stats.kast}%` },
                { l: "HS%", v: `${player.stats.hs}%` },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#e0e4ed",
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: 10,
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Recent Matches */}
      <div style={{ marginTop: 36 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Последние матчи — Echofall
          </h2>
        </div>
        <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
          {team.recentMatches.map((match, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 20px",
                borderBottom: i < team.recentMatches.length - 1 ? "1px solid var(--surface-3)" : "none",
                gap: 16,
                transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,107,26,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <span
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 800,
                  fontSize: 11,
                  color: match.result === "W" ? "#22c55e" : "#ef4444",
                  background: match.result === "W" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                  border: `1px solid ${match.result === "W" ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)"}`,
                  padding: "2px 8px",
                  borderRadius: 3,
                  minWidth: 28,
                  textAlign: "center",
                }}
              >
                {match.result}
              </span>
              <span
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#e0e4ed",
                  flex: 1,
                }}
              >
                vs <span style={{ color: "var(--neon)" }}>{match.opponent}</span>
              </span>
              <span
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  minWidth: 36,
                  textAlign: "center",
                }}
              >
                {match.score}
              </span>
              <span
                className="tag tag-blue"
                style={{ minWidth: 60, textAlign: "center" }}
              >
                {match.map}
              </span>
              <span
                style={{
                  fontFamily: "Share Tech Mono, monospace",
                  fontSize: 11,
                  color: "var(--text-dim)",
                  minWidth: 50,
                  textAlign: "right",
                }}
              >
                {match.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements preview */}
      <div style={{ marginTop: 36 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Последние достижения
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {team.achievements.slice(0, 3).map((ach) => (
            <div
              key={ach.id}
              className="card-dark"
              style={{
                padding: "16px 18px",
                borderRadius: 6,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, var(--neon), #ff3d00)",
                }}
              />
              <div style={{ fontSize: 22, marginBottom: 8 }}>{ach.place.split(" ")[0]}</div>
              <div
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#e0e4ed",
                  marginBottom: 4,
                }}
              >
                {ach.title}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: 12,
                    color: "var(--text-mid)",
                  }}
                >
                  {ach.place.replace(ach.place.split(" ")[0] + " ", "")}
                </span>
                <span
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: 11,
                    color: "var(--neon)",
                  }}
                >
                  {ach.prize}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "Share Tech Mono, monospace",
                  fontSize: 10,
                  color: "var(--text-dim)",
                  marginTop: 4,
                }}
              >
                {ach.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
