import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import TeamsPage from "@/pages/TeamsPage";
import PlayersPage from "@/pages/PlayersPage";
import TeamPage from "@/pages/TeamPage";
import PlayerPage from "@/pages/PlayerPage";
import StatsPage from "@/pages/StatsPage";
import RankingsPage from "@/pages/RankingsPage";

type Page = "home" | "teams" | "players" | "stats" | "rankings" | "team" | "player";

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [entityId, setEntityId] = useState<string | undefined>();

  const handleNavigate = (p: string, id?: string) => {
    setPage(p as Page);
    setEntityId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--surface)" }}>
      <Navbar activePage={page} onNavigate={handleNavigate} />

      <main style={{ minHeight: "calc(100vh - 56px)" }}>
        {page === "home" && <HomePage onNavigate={handleNavigate} />}
        {page === "teams" && <TeamsPage onNavigate={handleNavigate} />}
        {page === "players" && <PlayersPage onNavigate={handleNavigate} />}
        {page === "stats" && <StatsPage />}
        {page === "rankings" && <RankingsPage />}
        {page === "team" && entityId && <TeamPage teamId={entityId} onNavigate={handleNavigate} />}
        {page === "player" && entityId && <PlayerPage playerId={entityId} onNavigate={handleNavigate} />}
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--surface-3)",
          padding: "20px 24px",
          background: "var(--surface-2)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>
              T6<span style={{ color: "var(--neon)" }}>STATS</span>
            </span>
            <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "var(--text-dim)" }}>
              — Tier 6 Esports Analytics
            </span>
          </div>
          <span style={{ fontFamily: "Share Tech Mono, monospace", fontSize: 11, color: "var(--text-dim)" }}>
            © 2026 · Data updated: 17 Mar 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
