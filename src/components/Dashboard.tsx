import { useState } from "react";
import isFlaky from "../utils/helper/testUtils";

const TestDashboard = ({ data }: any) => {
  const [filter, setFilter] = useState("all");

  // store which test's suggestion is open
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);

  const filteredTests = data.tests.filter((test: any) => {
    if (filter === "all") return true;
    if (filter === "failed") return test.status === "failed";
    if (filter === "flaky") return isFlaky(test);
  });

  const toggleSuggestion = (testId: string) => {
    setActiveSuggestion((prev) => (prev === testId ? null : testId));
  };

  return (
    <div>
      {/* Summary */}
      <div
        style={{
            
          maxWidth: "800px",
          margin: "40px auto",
          padding: "20px",
          color: "white",
          textAlign: "left",
        }}
      >
        <h2>Summary</h2>
        <p>Total: {data.totalTests}</p>
        <p style={{ color: "lightgreen" }}>Passed: {data.passed}</p>
        <p style={{ color: "tomato" }}>Failed: {data.failed}</p>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {["all", "failed", "flaky"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: filter === type ? "#4f46e5" : "#333",
              color: "white",
            }}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tests */}
      {filteredTests.map((test: any) => (
        <div
          key={test.id}
          style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "16px",
            marginBottom: "12px",
            background: "#1a1a1a",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold" }}>{test.name}</p>

            <span
              style={{
                color: test.status === "failed" ? "#ef4444" : "#22c55e",
                fontWeight: "bold",
              }}
            >
              {test.status}
            </span>
          </div>

          {/* Flaky */}
          {isFlaky(test) && (
            <p style={{ color: "#f59e0b", marginTop: "6px" }}>
              Potential Flaky Test
            </p>
          )}

          {/* Error */}
          {test.status === "failed" && test.error && (
            <p style={{ color: "#f87171", marginTop: "6px" }}>
              {test.error.message}
            </p>
          )}

          {/* Suggestion Button */}
          {test.status === "failed" && (
            <button
              onClick={() => toggleSuggestion(test.id)}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: "#4f46e5",
                color: "white",
                cursor: "pointer",
              }}
            >
              {activeSuggestion === test.id
                ? "Hide Suggestion"
                : "Get Suggestion"}
            </button>
          )}

          {/* Suggestion Output */}
          {activeSuggestion === test.id && (
            <p style={{ color: "#60a5fa", marginTop: "8px" }}>
              Possible cause: This failure could be due to timing issues,
              unstable selectors, or environment inconsistencies. Consider
              adding waits or validating element visibility before interaction.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TestDashboard;