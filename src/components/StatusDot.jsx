export default function StatusDot({ state }) {
  const color =
    state === "success" ? "#22c55e" : state === "error" ? "#ef4444" : "#f59e0b";

  return (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color,
      }}
      title={state}
    />
  );
}
