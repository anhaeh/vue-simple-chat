<template>
  <li class="clearfix">
    <div class="message-data align-right">
      <span class="message-data-time">{{ message.time }}</span> &nbsp; &nbsp;
      <span class="message-data-name">Me </span>
      <i class="fa fa-circle me"></i>
    </div>
    <div class="message other-message float-right">{{ message.text }}</div>
  </li>
</template>
<script>
export default {
  props: {
    message: {
      required: true
    }
  }
};
</script>