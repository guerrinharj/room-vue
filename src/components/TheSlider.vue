<template>
  <div class="the-slider">
    <div @click="arrowLeft">
        <img alt="logo" :src="require('@/assets/' + slider[0] + '')">       
    </div>
     <div @click="arrowRight">
        <img alt="logo" :src="require('@/assets/' + slider[1] + '')">       
    </div>

   </div>
</template>

<script>
export default {
    computed: {
        slider() {
            return this.$store.getters.slider 
        }
    },
    methods: {
        arrowLeft() {
           this.$store.dispatch('leftSliding')
        },
        arrowRight() {
            this.$store.dispatch('rightSliding')
        }
    }
    
}
</script>

<style scoped>

.the-slider {
    display: flex;
    justify-content: center;

}

.the-slider div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 0.2s ease;
}

.the-slider div:hover {
    filter: invert(0.2);
    transition: 0.2s ease;
}


</style>