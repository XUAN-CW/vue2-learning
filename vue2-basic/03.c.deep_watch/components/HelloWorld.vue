<template>
  <!-- 
        深度监视：
            (1).Vue中的watch默认不监测对象内部值的改变（一层）。
            (2).配置deep:true可以监测对象内部值改变（多层）。
        备注：
            (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
            (2).使用watch时根据数据的具体结构，决定是否采用深度监视。
     -->
  <div>
    <h3>a的值是:{{ numbers.a }}</h3>
    <button @click="numbers.a++">点我让a+1</button>
    <h3>b的值是:{{ numbers.b }}</h3>
    <button @click="numbers.b++">点我让b+1</button>
    <button @click="numbers = { a: 666, b: 888 }">彻底替换掉numbers</button>
    {{ numbers.c.d.e }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: {
        a: 1,
        b: 1,
        c: {
          d: {
            e: 100,
          },
        },
      },
    };
  },
  watch: {
    numbers: {
      deep: true,
      handler() {
        console.log("numbers改变了");
      },
    },
  },
};
</script>