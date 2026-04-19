const isFlaky = (test: any) => {
  if (test.status === "failed") {
    if (test.error?.code === "ASSERTION_ERROR") return true;
    if (test.durationMs < 100) return true;
  }
  return false;
};

export default isFlaky;