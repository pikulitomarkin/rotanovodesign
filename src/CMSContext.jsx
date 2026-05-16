import React, { createContext, useContext, useState, useEffect } from 'react';

const CMSContext = createContext();

export function CMSProvider({ children }) {
  const [data, setData] = useState({
    settings: { whatsapp: "5521999999999" },
    hero: {
      card1: "/images/IMG_0380 1.webp",
      card2: "/images/tattoo realismo.webp",
      card3: "/images/IMG_1152 1.webp"
    },
    testimonials: {
      v1_url: "#",
      v1_thumb: "/images/IMG_1152 1.webp",
      v2_url: "#",
      v2_thumb: "/images/IMG_3329 1.webp"
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(res => res.json())
      .then(json => {
        if (json.settings) setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load CMS data:", err);
        setLoading(false);
      });
  }, []);

  const updateData = async (newData) => {
    setData(newData);
    await fetch('http://localhost:3001/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
  };

  return (
    <CMSContext.Provider value={{ data, updateData, loading }}>
      {children}
    </CMSContext.Provider>
  );
}

export const useCMS = () => useContext(CMSContext);
