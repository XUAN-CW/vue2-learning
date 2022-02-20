<template>
  <div>
    <h1 ref="refTest">hello ref</h1>
    <button @click="submit">log element</button>
  </div>
</template>
<script>
export default {
  methods: {
    submit() {
      console.log(this.$refs.refTest);
    },
  },
};
</script>