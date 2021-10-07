import axios from 'axios';

const getQuote = async () => {
  try {
    const res = await axios.get('https://cw-quotes.herokuapp.com/api/quotes/random');
    return res;
  } catch (err) {
    console.error(err);
  }
}

const startConversation = async () => {
  try {
    const res = await axios.get('http://localhost:3000/start');
    refreshToken()
    return res;
  } catch (err) {
    console.error('Error: 0.1 ', err);
  }
}
const refreshToken = async () => {
  try {
    const intervalID = setInterval(async () => {
      const res = await axios.get('http://localhost:3000/refresh');
      console.log(res)
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
    const res = await axios.post('http://localhost:3000/message', body);
    console.log(res)
    return res;
  } catch (err) {
    console.error('Error: 0.3 ', err);
    let data = { message: "Your message, I have not received" }
    return { data };
  }
}
sendMessage('hello')

const getCharacters = async () => {
  try {
    const res = await axios.get('http://localhost:3000/characters');
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
    const res = await axios.get('http://localhost:3000/movies');
    return res.data[0];
  } catch (err) {
    console.error('Error: 0.5 ', err);
    let message = [{ title: "Master Yoda is away. After the tone, leave a message." }]
    return message;
  }
}

export default {
  getQuote,
  getCharacters,
  getMovies,
  refreshToken,
  startConversation,
  sendMessage
};
