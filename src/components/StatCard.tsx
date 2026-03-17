interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
  large?: boolean;
}

export default function StatCard({ label, value, sub, color, large }: StatCardProps) {
  return (
    <div
      className="card-dark"
      style={{
        padding: large ? "20px 24px" : "16px 20px",
        borderRadius: 6,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background: color || "var(--neon)",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 800,
          fontSize: large ? 28 : 22,
          color: color || "var(--neon)",
          lineHeight: 1.1,
          marginBottom: 6,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          color: "var(--text-dim)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>
      {sub && (
        <div
          style={{
            fontFamily: "Share Tech Mono, monospace",
            fontSize: 10,
            color: "var(--text-dim)",
            marginTop: 4,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
