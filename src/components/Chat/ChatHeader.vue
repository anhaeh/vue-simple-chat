<template>
  <div class="chat-header clearfix">
    <img :src="current.avatarUrl" alt="avatar" class="avatar">
    <div class="chat-about">
      <div class="chat-with">Chat with {{ current.name }}</div>
      <div class="chat-num-messages">already 1 902 messages</div>
    </div>
    <i class="fa fa-star"></i>
  </div>
</template>
<script>
export default {
  computed: {
    current: function() {
      return this.$store.getters.getActiveContact;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
