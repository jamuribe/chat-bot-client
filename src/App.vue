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
    messageCount: 0,
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
    checkCount(message) {
      let errorMessages = [
        "I'm sorry, I couldn't find any information relating to your question. Please search for another word or phrase.",
        "I've had a look and there's nothing I can find which fits your question. Please search again using a different word or phrase.",
        "Sorry, we couldn't find any answers to your question.",
      ];

      if (errorMessages.includes(`${message}`)) {
        this.messageCount++;
      }
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
        this.checkCount(res.data["message"]);
        if (this.messageCount > 1) {
          this.messageCount = 0;
          return this.getCharacters();
        }
        let text = res.data["message"];
        this.pushToMessage(text, "Master Yoda");
      });
    },

    async getCharacters() {
      await apiService.getCharacters().then((res) => {
        let characters = res.slice(0, 10).map((char) => {
          return char.name;
        });
        this.pushToMessage(characters, "Master Yoda");
      });
    },

    async getmovieList() {
      await apiService.getMovies().then((res) => {
        let movies = res.map((movie) => {
          return movie.title;
        });
        this.pushToMessage(movies, "Master Yoda");
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
