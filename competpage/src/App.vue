<!-- src/App.vue -->
<template>
  <div>
    <Main />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Main from '@/components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
</script>
