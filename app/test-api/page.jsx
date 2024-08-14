"use client"
import { useState, useEffect } from 'react';

export default function TestApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}