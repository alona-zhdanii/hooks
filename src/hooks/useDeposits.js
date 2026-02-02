import { useEffect, useMemo, useState } from "react";
import { depositsMock } from "../data/deposits";

export function useDeposits() {
  const [loading, setLoading] = useState(true);
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    // імітація запиту на сервер
    const t = setTimeout(() => {
      setDeposits(depositsMock);
      setLoading(false);
    }, 600);

    return () => clearTimeout(t);
  }, []);

  const active = useMemo(
    () => deposits.filter((d) => d.type === "active"),
    [deposits]
  );

  const closed = useMemo(
    () => deposits.filter((d) => d.type === "closed"),
    [deposits]
  );

  return { loading, deposits, active, closed };
}
