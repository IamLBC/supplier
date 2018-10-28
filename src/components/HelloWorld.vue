<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<template>
  <div class="hello">
    <h1>hello</h1>
    <h1 class="msg test_class">{{ msg }}</h1>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<style lang="scss">
.hello {
  color: red;
  .msg {
    color: blue;
  }
}
</style>
