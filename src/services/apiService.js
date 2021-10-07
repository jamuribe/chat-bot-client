import axios from 'axios';

const startConversation = async () => {
  try {
    const res = await axios.get(`${process.env.VUE_APP_API}start`);
    refreshToken()
    return res;
  } catch (err) {
    console.error('Error: 0.1 ', err);
  }
}
const refreshToken = async () => {
  try {
    const intervalID = setInterval(async () => {
      const res = await axios.get(`${process.env.VUE_APP_API}refresh`);
      return res;

    }, 120000)
    return intervalID
  } catch (err) {
    console.error('Error: 0.2 ', err);
  }
}
const sendMessage = async (message) => {
  let body = {};
  try {
    body['message'] = message;
    const res = await axios.post(`${process.env.VUE_APP_API}message`, body);
    return res;
  } catch (err) {
    console.error('Error: 0.3 ', err);
    let data = { message: "Your message, I have not received" }
    return { data };
  }
}

const getCharacters = async () => {
  try {
    const res = await axios.get(`${process.env.VUE_APP_API}characters`);
    res.data[0].unshift({ name: 'When nine hundred years old you reach, look as good you will not.' });
    return res.data[0];
  } catch (err) {
    console.error('Error: 0.4 ', err);
    let message = [{ title: "Master Yoda will be back" }]
    return message;
  }
}
// function to get movie list GET
const getMovies = async () => {
  try {
    const res = await axios.get(`${process.env.VUE_APP_API}movies`);
    res.data[0].unshift({ title: 'A Jedi uses the Force for knowledge and defense, never for attack. A list of movies, you must have:' });
    return res.data[0];
  } catch (err) {
    console.error('Error: 0.5 ', err);
    let message = [{ title: "Judge me by my size, do you? Master Yoda is away. " }]
    return message;
  }
}

export default {
  getCharacters,
  getMovies,
  refreshToken,
  startConversation,
  sendMessage
};
