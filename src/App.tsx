import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consoleLoader = useCallback(
    (loadingValue: boolean) => {
      setLoading(loadingValue);
      console.info(loading);
    },
    [loading],
  );

  const fetchData = useCallback(async () => {
    consoleLoader(true);
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) throw new Error("Error al obtener datos");
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      setError(error as string);
    } finally {
      consoleLoader(false);
    }
  }, [consoleLoader]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>UPS! Hay un error: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
