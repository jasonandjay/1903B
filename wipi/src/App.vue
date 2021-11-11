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
  </div>
</template>

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