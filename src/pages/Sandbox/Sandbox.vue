<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Sandbox Page</h2>
    <h3 v-if="isAppInitializing">Application initializing</h3>
    <h3 v-else>Application initialized</h3>

    <button v-on:click="onClick">BTN</button>
    <button v-on:click="showLoader">Show Loader</button>
    <button v-on:click="() => addMessage(TOAST_TYPES.INFO.type, 'this is a test message')">Add Info Message</button>
    <button v-on:click="() => addMessage(TOAST_TYPES.ERROR.type, 'this is a test message')">Add Error Message</button>
  </div>
</template>

<script>
import TOAST_TYPES from '../../components/toaster/toastTypes';
export default {
    name: 'SandboxView',
    props: ['msg', 'isAppInitializing', 'onClick', 'showLoader', 'addMessage'],
    data: () => {
        return { TOAST_TYPES };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
