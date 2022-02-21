<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
  </div>
</template>

<script>
//引入一个混合
import { hello, showNameDemo } from "../mixins/mixin";

export default {
  mixins: [hello, showNameDemo],
};
</script>