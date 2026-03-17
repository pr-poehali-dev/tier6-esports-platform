import { teams } from "@/data/teams";
import { players } from "@/data/players";

export default function RankingsPage() {
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
          РЕЙТИНГИ
        </h1>
        <p style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "var(--text-mid)" }}>
          Актуальные рейтинги по состоянию на Март 2026
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="rankings-grid">

        {/* Team Rankings */}
        <div>
          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--surface-3)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--surface-3)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(232,212,77,0.04)",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 20,
                  background: "var(--neon)",
                  borderRadius: 2,
                }}
              />
              <h2
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Рейтинг команд
              </h2>
            </div>

            {teams.map((team, i) => (
              <div
                key={team.id}
                style={{
                  padding: "16px 20px",
                  borderBottom: i < teams.length - 1 ? "1px solid var(--surface-3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,212,77,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 24,
                    color: "var(--neon)",
                    minWidth: 40,
                    textAlign: "center",
                  }}
                >
                  {team.rank}
                </span>
                <div style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: 14, color: "var(--neon)" }}>{team.logo}</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#fff",
                      marginBottom: 2,
                    }}
                  >
                    {team.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: 12,
                      color: "var(--text-mid)",
                    }}
                  >
                    {team.region} · {team.winRate}% WR
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 900,
                      fontSize: 18,
                      color: "var(--neon)",
                    }}
                  >
                    {team.rating}
                  </div>
                  <div
                    style={{
                      fontFamily: "Share Tech Mono, monospace",
                      fontSize: 10,
                      color: "var(--text-dim)",
                    }}
                  >
                    pts
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1 }} />
              </div>
            ))}

            <div
              style={{
                padding: "14px 20px",
                borderTop: "1px solid var(--surface-3)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
              <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>
                Обновлено: 17 марта 2026
              </span>
            </div>
          </div>
        </div>

        {/* Player Rankings */}
        <div>
          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--surface-3)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--surface-3)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(232,212,77,0.04)",
              }}
            >
              <div style={{ width: 4, height: 20, background: "#60a5fa", borderRadius: 2 }} />
              <h2
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Рейтинг игроков
              </h2>
            </div>

            {players.map((player, i) => (
              <div
                key={player.id}
                style={{
                  padding: "16px 20px",
                  borderBottom: i < players.length - 1 ? "1px solid var(--surface-3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,212,77,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 24,
                    color: "var(--neon)",
                    minWidth: 40,
                    textAlign: "center",
                  }}
                >
                  {player.rank}
                </span>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: 12,
                    color: "var(--neon)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(232,212,77,0.08)",
                    borderRadius: 4,
                    border: "1px solid rgba(232,212,77,0.2)",
                  }}
                >
                  {player.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "var(--neon)",
                      marginBottom: 2,
                    }}
                  >
                    {player.nickname}
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span className="tag tag-blue" style={{ fontSize: 9 }}>{player.role}</span>
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
                      fontSize: 20,
                      color: "#22c55e",
                    }}
                  >
                    {player.stats.rating.toFixed(2)}
                  </div>
                  <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 10, color: "var(--text-dim)" }}>
                    K/D {player.stats.kd.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <div
              style={{
                padding: "14px 20px",
                borderTop: "1px solid var(--surface-3)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
              <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>
                Обновлено: 17 марта 2026
              </span>
            </div>
          </div>


        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rankings-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}