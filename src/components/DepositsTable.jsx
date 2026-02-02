import StatusDot from "./StatusDot";

export default function DepositsTable({ items }) {
  return (
    <div className="table">
      <div className="thead">
        <div>PROPERTY</div>
        <div>MOVE IN DATE</div>
        <div>RENT</div>
        <div>DEPOSIT</div>
        <div>STATUS</div>
        <div></div>
      </div>

      {items.map((d) => (
        <div className="row" key={d.id}>
          <div>
            <div className="property">{d.property}</div>
            <div className="muted">{d.city}</div>
          </div>
          <div className="muted">{d.moveInDate}</div>
          <div className="muted">${d.rent}</div>
          <div>
            <div className="muted">${d.deposit}</div>
          </div>
          <div className="muted">{d.status}</div>
          <div className="dot">
            <StatusDot state={d.state} />
          </div>
        </div>
      ))}
    </div>
  );
}
