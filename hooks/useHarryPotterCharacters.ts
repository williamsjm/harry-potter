// hooks/useHarryPotterCharacters.ts
import { useState, useEffect } from "react";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  house: string;
}

const useHarryPotterCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setCharacters(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, isLoading, error };
};

export default useHarryPotterCharacters;
