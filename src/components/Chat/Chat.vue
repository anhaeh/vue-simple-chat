<template>
  <div class="chat">
    <template v-if="contactActive">
      <chat-header/>
      <messages-box :messages="messages"></messages-box>
      <message-input :contact-active="contactActive" @send="sendMessage"></message-input>
    </template>
    <div v-else class="no-chat">
      <h3>Click in a contact to begin a conversation</h3>
    </div>
  </div>
</template>
<script>
import chatHeader from "./ChatHeader";
import messagesBox from "./MessagesBox";
import messageInput from "./MessageInput";

export default {
  watch: {
    contactActive: async function() {
      await this.getMessages();
      this.scrollBottom()
    }
  },
  components: {
    chatHeader,
    messagesBox,
    messageInput
  },
  data() {
    return {
      messages: []
    };
  },
  computed: {
    contactActive: function() {
      return this.$store.getters.getActiveContact;
    }
  },
  methods: {
    scrollBottom: function () {
      let container = this.$el.querySelector(".chat-history");
      container.scrollTop = container.scrollHeight;
    },
    sendMessage: async function(message) {
      let date = new Date();
      let formatDate = date.toTimeString().split(" ")[0];
      await this.messages.push({
        me: true,
        time: formatDate,
        text: message
      });
      /* call api to save message */
      this.scrollBottom()
    },
    getMessages: function() {
      /* call to api */
      this.messages = [
        {
          time: "10:10 AM, Today",
          text: "Hi Vincent, how are you? How is the project coming along?",
            me: true
        },
        {
          time: "10:12 AM, Today",
          text:
            "Are we meeting today? Project has been already finished and I have results to show you.",
          me: false
        },
        {
          time: "10:14 AM, Today",
          text:
            "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?",
          me: true
        },
        {
          time: "10:16 AM, Today",
          text:
            "Actually everything was fine. Im very excited to show this to our team.",
          me: false
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.no-chat {
  height: 757px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
