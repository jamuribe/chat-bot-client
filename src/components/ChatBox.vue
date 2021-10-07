<template>
  <section class="container">
    <div>
      <ul>
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
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  max-height: 500px;
  padding: 30px;
  border-radius: 5px;
}
.message {
  text-align: left;
}
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
