import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "teams", label: "Команды" },
  { id: "players", label: "Игроки" },
  { id: "stats", label: "Статистика" },
  { id: "rankings", label: "Рейтинги" },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(13, 15, 20, 0.95)",
        borderBottom: "1px solid rgba(255, 107, 26, 0.15)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "var(--neon)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 900,
              color: "#000",
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            T6
          </div>
          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            T6<span style={{ color: "var(--neon)" }}>STATS</span>
          </span>
        </button>

        {/* Nav links desktop */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          className="hidden-mobile"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link ${activePage === item.id ? "active" : ""}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: 4,
                backgroundColor:
                  activePage === item.id
                    ? "rgba(255, 107, 26, 0.08)"
                    : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 4,
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
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
            <span
              style={{
                fontFamily: "Share Tech Mono, monospace",
                fontSize: 11,
                color: "#22c55e",
                letterSpacing: "0.05em",
              }}
            >
              LIVE
            </span>
          </div>

          {/* Mobile burger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--neon)",
              display: "none",
            }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--surface-2)",
            borderTop: "1px solid var(--surface-3)",
            padding: "12px 24px 16px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMenuOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: activePage === item.id ? "var(--neon)" : "var(--text-mid)",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--surface-3)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
