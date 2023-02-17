<template>
  <img class="logo" alt="logo" src="./../assets/logo.png" />
  <UsePinia />
  <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import UsePinia from '@/components/UsePinia.vue';
  import { useUserStore } from '@/store/user';

  export default defineComponent({
    name: 'IndexPage',
    components: {
      UsePinia
    },
    setup() {
      const userStore = useUserStore();
      console.log('home--userStore--', userStore);
    }
  });
</script>
<style lang="less" scoped>
  .logo {
    padding-top: 50px;
  }
</style>
