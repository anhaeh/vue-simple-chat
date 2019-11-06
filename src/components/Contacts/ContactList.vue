<template>
  <div class="people-list" id="people-list">
    <div class="search">
      <input type="text" placeholder="search" v-model="search">
      <i class="fa fa-search"></i>
    </div>
    <ul class="list">
      <contact-item
        v-for="(item, index) in contactsNormalized"
        :key="'contact'+ index"
        :contact="item"
      ></contact-item>
    </ul>
  </div>
</template>
<script>
import contactItem from "./ContactItem";

export default {
  components: {
    contactItem
  },
  data() {
    return {
      search: "",
      contacts: []
    };
  },
  computed: {
    contactsNormalized: function() {
      return this.contacts.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created() {
    /* call api */
    this.contacts = [
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
        name: "Vincent Porter",
        online: true
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg",
        name: "Aiden Chavez",
        online: false,
        offlineTime: "left 7 mins ago"
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
        name: "Mike Thomas",
        online: true
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg",
        name: "Erica Hughes",
        online: true
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg",
        name: "Ginger Johnston",
        online: true
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg",
        name: "Tracy Carpenter",
        online: false,
        offlineTime: "left 30 min"
      },
      {
        avatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg",
        name: "Christian Kelly",
        online: false,
        offlineTime: "since Oct 28"
      }
    ];
  }
};
</script>
<style lang="scss" scoped>
  .list {
    padding: 0;
  }
</style>