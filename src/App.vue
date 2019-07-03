<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <router-view>
        </router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    components: {
    // HelloWorld
    },
    watch:{
        // "$route": (to, from)=>{
        // window.console.log(from)
        // window.console.log(to)
        // this.pathList = from.slice().split('/')
        // this.route.params = from
        // }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
