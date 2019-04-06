<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <transition name="router-tran" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//importando el componente menu
// import Menu from './components/Menu.vue'


export default {
  name: 'app',
  // components: {
  //  Menu
  // }
}
</script>


<style>
  #app {
    margin: 0 !important;
    padding: 0 !important;
  }

  @font-face {
      font-family: 'biko';
      src: url("./assets/font/Biko-Regular.ttf");
    }

  @font-face {
      font-family: 'louis';
      src: url("./assets/font/Louis-George-Cafe.ttf");
    }
  html {
    cursor:url("./assets/img/cursor-normal.png"), auto;
    overflow-y:hidden;
  }

* {
  margin:0;
  padding:0;
  font-family: 'biko';
}
h1 {
  font-family: 'biko';
}


h1, h2, h3, h4, h5, h6, p{
  -webkit-user-select: none;
  font-family: 'biko';
}

.router-tran-enter-active, .router-tran-leave-active {
  transition: all .3s ease-in-out;
}
.router-tran-enter, .router-tran-leave-to {
  opacity: 0;
}

</style>