const getWord = () => {
  return fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then((response) => response.json())
    .then((data) => {
      return data.body.Word;
    });
};

export default getWord;
