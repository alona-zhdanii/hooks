import { useState } from "react";
import { useDeposits } from "../hooks/useDeposits";
import DepositsTable from "./DepositsTable";

export default function DepositsPage() {
  const { loading, active, closed } = useDeposits();
  const [tab, setTab] = useState("active"); // useState ✅

  const items = tab === "active" ? active : closed;

  return (
    <div className="page">
      <header className="header">
        <h1>
          Deposits <span className="badge">{items.length}</span>
        </h1>

        <div className="tabs">
          <button
            className={tab === "active" ? "tab active" : "tab"}
            onClick={() => setTab("active")}
          >
            Active
          </button>
          <button
            className={tab === "closed" ? "tab active" : "tab"}
            onClick={() => setTab("closed")}
          >
            Closed
          </button>
        </div>
      </header>

      <div className="card">
        {loading ? (
          <p className="muted">Loading mock data…</p>
        ) : items.length ? (
          <DepositsTable items={items} />
        ) : (
          <p className="muted">No items</p>
        )}
      </div>
    </div>
  );
}
