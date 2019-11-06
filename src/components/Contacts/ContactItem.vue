<template>
  <li class="clearfix contact-item" @click="click()" :class="{ 'selected': active }">
    <img :src="contact.avatarUrl" alt="avatar" class="avatar">
    <div class="about">
      <div class="name">{{ contact.name }}</div>
      <div class="status">
        <i class="fa fa-circle" :class="contact.online ? 'online' : 'offline'"></i>
        {{ status }}
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    contact: { required: true, type: Object }
  },
  methods: {
    click: function() {
      this.$store.dispatch("clickContact", this.contact);
    }
  },
  computed: {
    status: function() {
      return this.contact.online
        ? "Online"
        : `Offline ${this.contact.offlineTime}`;
    },
    active: function() {
      /* TODO use id from contact object when use a api */
      return (
        this.$store.getters.getActiveContact &&
        this.$store.getters.getActiveContact.name === this.contact.name
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.contact-item {
  padding: 10px 20px;
  cursor: pointer;
  &.selected {
    background: #1b223d;
  }
}
</style>
