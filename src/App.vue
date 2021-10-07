<template>
  <div>
    <ChatBox :messages="messages" />
    <div class="chat-input">
      <input type="text" v-model="message" @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import ChatBox from "./components/ChatBox.vue";
import apiService from "./services/apiService";

export default {
  name: "App",
  data: () => ({
    message: "",
    messages: [],
  }),
  created() {
    const storedMessages = this.openStorage();
    if (storedMessages) {
      this.messages.push(...storedMessages);
    }
    apiService.startConversation();
  },
  methods: {
    openStorage() {
      return JSON.parse(sessionStorage.getItem("messages"));
    },

    saveStorage() {
      sessionStorage.setItem("messages", JSON.stringify(this.messages));
    },

    updateStorage() {
      let storedMessages = this.openStorage();
      if (!storedMessages) storedMessages = {};
      storedMessages = this.messages;
      this.saveStorage(storedMessages);
    },

    pushToMessage(text, author) {
      this.messages.push({
        text: text,
        author: author,
      });
      this.updateStorage();
    },

    checkForce(message) {
      if (message.match(/\b(force)\b/gi)) return true;
      return false;
    },

    async sendMessage() {
      if (!this.message.length) return;
      this.pushToMessage(this.message, "Me");
      if (this.checkForce(this.message)) {
        this.getmovieList();
      } else {
        this.receiveMessage(this.message);
      }
      this.message = "";
    },

    async receiveMessage(message) {
      await apiService.sendMessage(message).then((res) => {
        console.log(res);
        let text = res.data["message"];
        this.pushToMessage(text, "Master Yoda");
      });
    },

    async getCharacters() {
      await apiService.getCharacters().then((res) => {
        console.log(res);
        let characters = res.slice(1, 10).map((char) => {
          return char.name;
        });
        this.pushToMessage(characters, "Master Yoda");
        // this.messages.push({
        //   text: [
        //     "Results I have not, list of character you must have: ",
        //     ...characters,
        //   ],
        //   author: "Master Yoda",
        // });
      });
    },

    async getmovieList() {
      await apiService.getMovies().then((res) => {
        console.log(res);

        let movies = res.map((movie) => {
          return movie.title;
        });
        this.pushToMessage(movies, "Master Yoda");
        // this.messages.push({
        //   text: [
        //     "Strong is the force, a movie list here you have: ",
        //     ...movies,
        //   ],
        //   author: "Master Yoda",
        // });
      });
    },
  },
  components: {
    ChatBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
