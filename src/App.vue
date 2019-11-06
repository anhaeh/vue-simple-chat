<template>
  <div id="app">
    <div class="container clearfix">
      <contact-list></contact-list>
      <chat></chat>
    </div>
  </div>
</template>

<script>
require('lato-font')
require('./assets/style.scss')

import Chat from "./components/Chat/Chat";
import ContactList from "./components/Contacts/ContactList";

export default {
  name: "App",
  components: {
    ContactList,
    Chat
  }
};
</script>

<style lang="scss">
</style>
