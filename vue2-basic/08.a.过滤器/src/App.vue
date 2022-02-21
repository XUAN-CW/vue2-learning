<template>
  <div>
    <!-- 
      过滤器：
        定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
        语法：
            1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
            2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
        备注：
            1.过滤器也可以接收额外参数、多个过滤器也可以串联
            2.并没有改变原本的数据, 是产生新的对应的数据
    -->
    <!-- 准备好一个容器-->
    <div id="root">
      <h2>显示格式化后的时间</h2>
      <!-- 计算属性实现 -->
      <h3>{{ fmtTime }}</h3>
      <!-- methods实现 -->
      <h3>{{ getFmtTime() }}</h3>
      <!-- 过滤器实现 -->
      <h3>{{ time | timeFormater }}</h3>
      <!-- 过滤器实现（传参） -->
      <h3>{{ time | timeFormaterParameter("YYYY_MM_DD") | mySlice }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 1621561377603, //时间戳
    };
  },

  computed: {
    fmtTime() {
      return "  计算属性实现" + this.time;
    },
  },
  methods: {
    getFmtTime() {
      return "  methods实现" + this.time;
    },
  },
  //局部过滤器
  filters: {
    timeFormater(value) {
      return "  过滤器实现" + value;
    },
    timeFormaterParameter(value, str = "YYYY年MM月DD日 HH:mm:ss") {
      return "  过滤器实现(传参)" + value + str;
    },
  },
};
</script>

