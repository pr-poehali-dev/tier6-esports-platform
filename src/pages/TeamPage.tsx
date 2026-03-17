import { getTeam } from "@/data/teams";
import StatCard from "@/components/StatCard";
import Icon from "@/components/ui/icon";

interface TeamPageProps {
  teamId: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function TeamPage({ teamId, onNavigate }: TeamPageProps) {
  const team = getTeam(teamId);
  if (!team) return <div style={{ padding: 40, color: "var(--text-mid)", fontFamily: "Rajdhani" }}>Команда не найдена</div>;

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
        <button
          onClick={() => onNavigate("home")}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)" }}
        >
          Главная
        </button>
        <Icon name="ChevronRight" size={12} />
        <button
          onClick={() => onNavigate("teams")}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)" }}
        >
          Команды
        </button>
        <Icon name="ChevronRight" size={12} />
        <span style={{ color: "var(--neon)" }}>{team.name}</span>
      </div>

      {/* Hero block */}
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
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(255,107,26,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="glow-line" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <div
            style={{
              width: 80,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              background: "linear-gradient(135deg, rgba(255,107,26,0.2), rgba(255,61,0,0.05))",
              borderRadius: 8,
              border: "1px solid rgba(255,107,26,0.3)",
              flexShrink: 0,
            }}
          >
            {team.logo}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
              <h1
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: 28,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {team.name}
              </h1>
              <span
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: 10,
                  color: "var(--text-dim)",
                  border: "1px solid var(--surface-3)",
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                {team.tag}
              </span>
              <span className="tag tag-orange">{team.tier}</span>
            </div>
            <p style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "var(--text-mid)", margin: "0 0 14px", maxWidth: 500 }}>
              {team.description}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { icon: "Globe", v: team.region },
                { icon: "Flag", v: `${team.flag} ${team.country}` },
                { icon: "Calendar", v: `Основана: ${team.founded}` },
                { icon: "Users", v: `${team.players.length} игроков` },
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
                  <Icon name={d.icon as any} size={13} />
                  {d.v}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: 48,
                color: "var(--neon)",
                textShadow: "0 0 30px rgba(255,107,26,0.5)",
                lineHeight: 1,
              }}
            >
              #{team.rank}
            </div>
            <div style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)", marginTop: 4 }}>
              {team.rating} pts
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginBottom: 28 }}>
        <StatCard label="Победы" value={team.wins} color="#22c55e" large />
        <StatCard label="Поражения" value={team.losses} color="#ef4444" large />
        <StatCard label="Winrate" value={`${team.winRate}%`} large />
        <StatCard label="Карт сыграно" value={team.mapsPlayed} color="#60a5fa" large />
        <StatCard label="Avg Rating" value={team.avgRating.toFixed(2)} large />
        <StatCard label="Призовые" value="55 000 ₽" color="#facc15" large />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="team-grid">

        {/* Roster */}
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
            Состав
          </h2>
          <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
            {team.players.map((p, i) => (
              <button
                key={p}
                onClick={() => p === "spokyso" ? onNavigate("player", "spokyso") : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 18px",
                  width: "100%",
                  background: "none",
                  border: "none",
                  borderBottom: i < team.players.length - 1 ? "1px solid var(--surface-3)" : "none",
                  cursor: p === "spokyso" ? "pointer" : "default",
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => p === "spokyso" && (e.currentTarget.style.background = "rgba(255,107,26,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: "var(--text-dim)",
                    minWidth: 20,
                  }}
                >
                  #{i + 1}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    background: "rgba(255,107,26,0.08)",
                    border: "1px solid rgba(255,107,26,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  {p === "spokyso" ? "👻" : "🎮"}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: p === "spokyso" ? "var(--neon)" : "#e0e4ed",
                    }}
                  >
                    {p}
                  </div>
                  <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 11, color: "var(--text-dim)" }}>
                    {p === "spokyso" ? "Entry Fragger" : "Игрок"}
                  </div>
                </div>
                {p === "spokyso" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span className="tag tag-orange">1.31</span>
                    <Icon name="ChevronRight" size={14} style={{ color: "var(--neon)" }} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Map Stats */}
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
            {team.mapStats.map((m, i) => (
              <div
                key={m.map}
                style={{
                  padding: "12px 18px",
                  borderBottom: i < team.mapStats.length - 1 ? "1px solid var(--surface-3)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#e0e4ed",
                    }}
                  >
                    {m.map}
                  </span>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "Share Tech Mono, monospace",
                        fontSize: 11,
                        color: "var(--text-dim)",
                      }}
                    >
                      {m.played} карт
                    </span>
                    <span
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        color: m.winRate >= 70 ? "#22c55e" : m.winRate >= 50 ? "var(--neon)" : "#ef4444",
                      }}
                    >
                      {m.winRate}%
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "var(--surface-3)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${m.winRate}%`,
                      background: m.winRate >= 70
                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                        : m.winRate >= 50
                        ? "linear-gradient(90deg, var(--neon), #ff3d00)"
                        : "linear-gradient(90deg, #ef4444, #dc2626)",
                      borderRadius: 2,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Matches */}
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
          Последние матчи
        </h2>
        <div className="card-dark" style={{ borderRadius: 6, overflow: "hidden" }}>
          {team.recentMatches.map((match, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "13px 20px",
                borderBottom: i < team.recentMatches.length - 1 ? "1px solid var(--surface-3)" : "none",
                gap: 16,
                flexWrap: "wrap",
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
                  padding: "3px 10px",
                  borderRadius: 3,
                  minWidth: 32,
                  textAlign: "center",
                }}
              >
                {match.result}
              </span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: 15, color: "#e0e4ed", flex: 1 }}>
                vs <span style={{ color: "var(--neon)" }}>{match.opponent}</span>
              </span>
              <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", minWidth: 42, textAlign: "center" }}>
                {match.score}
              </span>
              <span className="tag tag-blue" style={{ minWidth: 64, textAlign: "center" }}>{match.map}</span>
              <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)", minWidth: 55, textAlign: "right" }}>
                {match.date}
              </span>
            </div>
          ))}
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
          {team.achievements.map((ach) => (
            <div
              key={ach.id}
              className="card-dark"
              style={{ padding: "18px 20px", borderRadius: 6, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: ach.place.includes("1") ? "linear-gradient(90deg, #facc15, #f97316)" : ach.place.includes("2") ? "linear-gradient(90deg, #94a3b8, #64748b)" : "linear-gradient(90deg, #cd7c2e, #92400e)",
                }}
              />
              <div style={{ fontSize: 24, marginBottom: 10 }}>{ach.place.split(" ")[0]}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: 15, color: "#e0e4ed", marginBottom: 6 }}>
                {ach.title}
              </div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, color: "var(--text-mid)", marginBottom: 8 }}>
                {ach.place.replace(ach.place.split(" ")[0] + " ", "")}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>{ach.date}</span>
                <span
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: 12,
                    color: "#facc15",
                    fontWeight: 700,
                  }}
                >
                  {ach.prize}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
