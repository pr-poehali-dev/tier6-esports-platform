import { players } from "@/data/players";
import Icon from "@/components/ui/icon";

interface PlayersPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function PlayersPage({ onNavigate }: PlayersPageProps) {
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
          ИГРОКИ
        </h1>
        <p style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, color: "var(--text-mid)" }}>
          Рейтинг игроков tier 6 сцены
        </p>
      </div>

      {/* Table header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "48px 1fr 90px 80px 80px 80px 80px",
          padding: "10px 20px",
          background: "var(--surface-3)",
          borderRadius: "6px 6px 0 0",
          gap: 8,
        }}
      >
        {["#", "Игрок", "Rating", "K/D", "ADR", "KAST", "HS%"].map((h) => (
          <span
            key={h}
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              color: "var(--text-dim)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textAlign: h === "#" || h === "Игрок" ? "left" : "center",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {players.map((player, i) => (
        <button
          key={player.id}
          onClick={() => onNavigate("player", player.id)}
          style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr 90px 80px 80px 80px 80px",
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
            borderRadius: i === players.length - 1 ? "0 0 6px 6px" : 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,212,77,0.05)")}
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
            #{player.rank}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: 12,
                color: "var(--neon)",
                background: "rgba(232,212,77,0.08)",
                borderRadius: 4,
                border: "1px solid rgba(232,212,77,0.22)",
                flexShrink: 0,
              }}
            >
              {player.avatar}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
                    color: "var(--neon)",
                  }}
                >
                  {player.nickname}
                </span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "var(--text-dim)" }}>
                  {player.country}
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 3, alignItems: "center" }}>
                <span className="tag tag-blue">{player.role}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 11, color: "var(--text-mid)" }}>
                  {player.team}
                </span>
              </div>
            </div>
          </div>

          {[
            { v: player.stats.rating.toFixed(2), color: "#22c55e" },
            { v: player.stats.kd.toFixed(2), color: "#e0e4ed" },
            { v: player.stats.adr.toFixed(1), color: "#e0e4ed" },
            { v: `${player.stats.kast}%`, color: "#e0e4ed" },
            { v: `${player.stats.hs}%`, color: "#f472b6" },
          ].map((s, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: s.color,
                textAlign: "center",
              }}
            >
              {s.v}
            </span>
          ))}
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
          Список пополняется. Новые игроки добавляются по мере появления команд.
        </span>
      </div>
    </div>
  );
}