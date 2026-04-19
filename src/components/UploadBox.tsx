import { useState } from "react";
import TestDashboard from "./Dashboard";

const UploadBox = () => {
  const [data, setData] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      const jsonData = JSON.parse(text);
      setData(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", color: "white" }}>
      <input type="file" accept=".json" onChange={handleFileChange} />

      {data && <TestDashboard data={data} />}
    </div>
  );
};

export default UploadBox;