import { teams } from "@/data/teams";
import Icon from "@/components/ui/icon";

interface TeamsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function TeamsPage({ onNavigate }: TeamsPageProps) {
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
          КОМАНДЫ
        </h1>
        <p style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "var(--text-mid)" }}>
          Все команды tier 6 сцены
        </p>
      </div>

      {/* Header table */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "48px 1fr 100px 100px 100px 100px",
          padding: "10px 20px",
          background: "var(--surface-3)",
          borderRadius: "6px 6px 0 0",
          gap: 8,
        }}
      >
        {["#", "Команда", "Рейтинг", "W/L", "WR%", "Maps"].map((h) => (
          <span
            key={h}
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              color: "var(--text-dim)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textAlign: h === "#" || h === "Команда" ? "left" : "center",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {teams.map((team, i) => (
        <button
          key={team.id}
          onClick={() => onNavigate("team", team.id)}
          style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr 100px 100px 100px 100px",
            padding: "14px 20px",
            width: "100%",
            background: "var(--surface-2)",
            border: "none",
            borderBottom: "1px solid var(--surface-3)",
            cursor: "pointer",
            textAlign: "left",
            gap: 8,
            alignItems: "center",
            transition: "background 0.15s",
            borderRadius: i === teams.length - 1 ? "0 0 6px 6px" : 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,107,26,0.06)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--surface-2)")}
        >
          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: 16,
              color: "var(--neon)",
            }}
          >
            #{team.rank}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                background: "rgba(255,107,26,0.1)",
                borderRadius: 4,
                border: "1px solid rgba(255,107,26,0.2)",
                flexShrink: 0,
              }}
            >
              {team.logo}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
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
                    borderRadius: 2,
                  }}
                >
                  {team.tag}
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 3 }}>
                <span className="tag tag-orange">{team.region}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 11, color: "var(--text-dim)" }}>
                  {team.flag} {team.country}
                </span>
              </div>
            </div>
          </div>

          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "var(--neon)",
              textAlign: "center",
            }}
          >
            {team.rating}
          </span>

          <span
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#e0e4ed",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#22c55e" }}>{team.wins}</span>
            {" / "}
            <span style={{ color: "#ef4444" }}>{team.losses}</span>
          </span>

          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: team.winRate >= 70 ? "#22c55e" : team.winRate >= 50 ? "var(--neon)" : "#ef4444",
              textAlign: "center",
            }}
          >
            {team.winRate}%
          </span>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <span
              style={{
                fontFamily: "Share Tech Mono, monospace",
                fontSize: 13,
                color: "#e0e4ed",
              }}
            >
              {team.mapsPlayed}
            </span>
            <Icon name="ChevronRight" size={14} style={{ color: "var(--neon)" }} />
          </div>
        </button>
      ))}

      <div
        style={{
          marginTop: 24,
          padding: "16px 20px",
          background: "var(--surface-2)",
          border: "1px solid var(--surface-3)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Icon name="Plus" size={16} style={{ color: "var(--neon)" }} />
        <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, color: "var(--text-mid)" }}>
          Скоро здесь появятся новые команды. Данные обновляются в реальном времени.
        </span>
      </div>
    </div>
  );
}
