<template>
  <div class="chat-history">
    <ul class="list">
      <component
        v-for="(message, index) in messages"
        :is="message.me ? 'message-item-me': 'message-item'"
        :key="'message-' + index"
        :message="message"
        :contact-name="contactName"
      >
      </component>
      <!-- for writing contact
      <li>
        <div class="message-data">
          <span class="message-data-name">
            <i class="fa fa-circle online"></i> Vincent
          </span>
          <span class="message-data-time">10:31 AM, Today</span>
        </div>
        <i class="fa fa-circle online"></i>
        <i class="fa fa-circle online" style="color: #AED2A6"></i>
        <i class="fa fa-circle online" style="color:#DAE9DA"></i>
      </li>
      -->
    </ul>
  </div>
</template>
<script>
import messageItem from './MessageItem'
import messageItemMe from './MessageItemMe'

export default {
  props: {
    messages: {
      required: true,
      type: Array
    }
  },
  components: {
    messageItem,
    messageItemMe
  },
  computed: {
    contactName: function() {
      return this.$store.getters.getActiveContact.name;
    }
  },
};
</script>

