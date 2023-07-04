<template>
  <PageHeader/>
  <div class = "container">
    <PageMenu/>
    <router-view/>
  </div>
  
  <PageFooter/>
</template>
<script>
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import PageMenu from '@/components/PageMenu';

export default {
  name : "App",
  components : {
    PageHeader,
    PageFooter,
    PageMenu
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container{
  display: flex;
}

aside{
  width: 20%;
}

main {
  width: 80%;
}
</style>