import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

export async function fetchHero(id) {
  try {
    const response = await axios(
      `https://www.superheroapi.com/api.php/${key}/${id}`,
      {
        method: "GET",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.url,
      intelligence: response.data.powerstats.intelligence,
      strength: response.data.powerstats.strength,
      speed: response.data.powerstats.speed,
      durability: response.data.powerstats.durability,
      power: response.data.powerstats.power,
      combat: response.data.powerstats.combat,
    };
  } catch (error) {
    console.error("Can't access api. Error: " + error);
    return null;
  }
}
