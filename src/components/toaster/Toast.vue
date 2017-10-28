<template>
<div class="message alert" v-bind:class="messageClass">
    <button v-on:click="onClose" type="button" className="close">&times;</button>
    <div class="inner-message">
    {{ message }}
    </div>
</div>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        'message': { type: String, required: true },
        'type': { type: String, required: true },
        'onClose': { type: Function, required: true },
        },
    computed: {
        messageClass: function() {
            return 'alert-'+this.$props.type;
        }
    }
  };
</script>
