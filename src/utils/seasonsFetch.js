import { useState } from "react";

export const season1Fetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async() => {
    setIsLoading(true)
    try {
      const { data } = await axios.get('/episode?episode=S01')
      setEpisodes(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.warn('ERROR', error)
      alert('Ошибка при загрузке эпиздов')
      setIsLoading(true)
    } 
  }
}