<template>
  <div class="chat-message clearfix">
    <textarea
      name="message-to-send"
      id="message-to-send"
      placeholder="Type your message"
      rows="3"
      v-model="message"
      @keydown.enter.prevent="send"
    ></textarea>
    <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
    <i class="fa fa-file-image-o"></i>
    <button @click="send">
      <i class="fas fa-paper-plane"></i> Send
    </button>
  </div>
</template>
<script>
export default {
  props: {
    contactActive: { required: true }
  },
  watch: {
    contactActive: function() {
      this.message = ""
    }
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    send: function() {
      if (this.message.trim() !== "") {
        this.$emit("send", this.message.trim())
      }
      this.message = ""
    }
  }
};
</script>
