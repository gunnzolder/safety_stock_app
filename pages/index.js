import { useState } from "react";
import styles from "../styles/Home.module.css";

const initialSupplyData = [
  5, 0, 20, 0, 10, 0, 40, 0, 25, 0, 0, 0, 0, 30, 10, 10, 20, 30, 0, 0, 5, 0, 20,
  0, 10, 0, 40, 0, 25, 0,
];

export default function Home() {
  const [dailyDemand, setDailyDemand] = useState(10);
  const [supplyHistory, setSupplyHistory] = useState(initialSupplyData);
  const [safetyStock, setSafetyStock] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch("/api/calculate-safety-stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        daily_demand: dailyDemand,
        supply_history: supplyHistory,
      }),
    });

    const data = await response.json();
    setSafetyStock(data.safety_stock);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <label>Daily demand:</label>
        <input
          type="number"
          value={dailyDemand}
          onChange={(e) => setDailyDemand(e.target.value)}
        />
        <div>Historical data:</div>
        {supplyHistory.map((value, index) => (
          <div key={index}>
            <label>{index + 1} </label>
            <input
              type="number"
              value={value}
              onChange={(e) => {
                const updatedHistory = [...supplyHistory];
                updatedHistory[index] = e.target.value;
                setSupplyHistory(updatedHistory);
              }}
            />
          </div>
        ))}
        <button className={styles.cta} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
      <div className={styles.right}>
        {safetyStock && <div>Your calculated safety stock: {safetyStock}</div>}
      </div>
    </div>
  );
}
