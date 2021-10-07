<template>
  <section class="container">
    YodaBot
    <div class="chat-box-list-container">
      <ul class="chat-bot-list">
        <li class="message" v-for="(message, index) in messages" :key="index">
          <Message :message="message" :author="message.author" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Message from "./Message";

export default {
  name: "ChatBox",
  props: { messages: Object },
  components: {
    Message,
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
