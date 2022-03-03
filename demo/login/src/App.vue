<template>
  <div>
    <el-button round @click="dialogFormVisible = !dialogFormVisible"
      >登录</el-button
    >
    <Login v-if="dialogFormVisible"></Login>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  components: {
    Login,
  },
  data() {
    return {
      dialogFormVisible: false,
    };
  },
};
</script>
