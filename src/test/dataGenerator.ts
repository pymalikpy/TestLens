const statuses = ["passed", "failed", "skipped"];

const tests = Array.from({ length: 50 }, (_, i) => {
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  return {
    id: `TC-${String(i + 1).padStart(3, "0")}`,
    name: `Test case ${i + 1}`,
    status,
    durationMs: Math.floor(Math.random() * 300) + 50,
    timestamp: new Date().toISOString(),
    ...(status === "failed" && {
      error: {
        message: "Random failure occurred",
        code: "RANDOM_ERROR"
      }
    })
  };
});

console.log(JSON.stringify({ tests }, null, 2));