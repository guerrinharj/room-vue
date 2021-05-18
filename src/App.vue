<template>

    <section v-if="isMobileOpen" class="mobile-menu-area">
        <transition>
          <mobile-menu> </mobile-menu>
        </transition>
    </section>


<main :class="{shade: isMobileOpen}">
 
    <section class="the-upper-area">
      <the-upper> </the-upper>
    </section>

    <section class="the-lower-area">
      <the-lower> </the-lower>
    </section>
    
  </main>

</template>

<script>

import TheLower from './components/TheLower.vue';
import TheUpper from './components/TheUpper.vue';
import MobileMenu from './components/MobileMenu.vue';

export default {
  name: 'App',
  components: {
    TheLower, TheUpper, MobileMenu
  },
  computed: {
      isMobileOpen() {
        return this.$store.getters.isMobileOpen
      }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'Spartan', sans-serif;
    overflow: hidden;

  }

  section {
    width: 100vw;
  }

  .mobile-menu-area {
    display: none;
  }



  @media (max-width: 600px) {

    body {
      overflow: initial;
      overflow-x: hidden
    }

    section {
      width: auto;
    }

    .mobile-menu-area {
      display: block;
    }

    .shade {
      opacity: 0.5;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      pointer-events: none;
    }

    .v-enter {
      transform: translateY(-100%);
    }
  
    .v-enter-active, .v-leave-active {
      transition: 0.2s ease
    }

    .v-enter-to {
      transform: translateY(0%);;
    }

  }

</style>
