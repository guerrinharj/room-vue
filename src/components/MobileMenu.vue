<template>
    <div class="mobile-menu">
        <div class="mobile-menu-wrapper"> 
            <img :src="mobile[1]" @click="clickMobile">
            <ul> 
                <li v-for="mobilemenuitem in nav" :key="mobilemenuitem"> {{ mobilemenuitem }} </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {

    computed: {
        nav() {
            return this.$store.getters.menu
        },
        mobile() {
            return this.$store.getters.mobile
        }
    },
    methods: {
         clickMobile() {
            this.$store.dispatch('clickOpenMobile')
            }
        }
    
}
</script>

<style scoped>

.mobile-menu {
    background-color: white;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 10vh;
    z-index: 20;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-menu-wrapper {
    display: flex;
    align-items: center;;
}

ul {
    display: flex;
    list-style-type: none;
    font-weight: 500;
}

li {
    margin-right: 20px;
    font-size: 12px
}

img {
    cursor: pointer;
}

</style>