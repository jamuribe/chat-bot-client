<template>
  <div>
    <p>
      <span>
        <strong> {{ author }}: </strong>
        <ul v-if="Array.isArray(message.text)">
          <li v-for="(msg, index) in message.text" :key="index">
            {{ msg }}
          </li>
        </ul>
        <ul v-else>
          <li>{{ message.text }}</li>
        </ul>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: { author: String, message: Object },
};
</script>

<style scoped>
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>