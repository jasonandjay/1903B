<template>
  <div>
    <header></header>
    <main>
      <div>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>

    </main>
    <my-footer v-if="showFooter"></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

const showFooterRoutes = ['/', '/archives', '/knowledge'];
export default ({
  components: {
    MyFooter
  },
  data(){
    return {
      showFooter: true
    }
  },
  watch: {
    $route: {
      handle(){
        console.log('$router..', this)
      },
      immediate: true
    }
  }
})
</script>

<style>
header{
  height: 64px;
}
main{
  background-color: var(--bg-body);
  min-height: calc(100vh - 64px);
}
main>div{
  text-align: center;
}
</style>