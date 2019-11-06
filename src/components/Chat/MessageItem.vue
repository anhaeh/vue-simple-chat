<template>
  <li>
    <div class="message-data">
      <span class="message-data-name">
        <i class="fa fa-circle online"></i>
        {{ contactName }}
      </span>
      <span class="message-data-time">{{ message.time }}</span>
    </div>
    <div class="message my-message">{{ message.text }}</div>
  </li>
</template>
<script>
export default {
  props: {
    message: {
      required: true,
      type: Object
    },
    contactName: {
      required: true,
      type: String
    }
  }
};
</script>

