<template>
		<div id="demo">
			<h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
		</div>
</template>

<script>
export default {
  data() {
    return {
			name:'atguigu',
			address:'北京'
    };
  }
}
</script>
