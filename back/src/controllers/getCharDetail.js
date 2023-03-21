const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  const { detailId } = req.params;
  try {
    const response = await axios(URL + detailId);
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin: response.data.origin?.name,
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getCharDetail };
