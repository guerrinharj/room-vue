<template>

    <div class="menu-wrapper">

    <div class="burger" @click="clickMobile">
            <img :src="mobile[0]" >
    </div>  

    <div class="menu">

        

        <div class="logo"> 
            <img alt="logo" :src="require('@/assets/' + logo + '')">
        </div>
        <ul class="nav"> 
            <li v-for="item in nav" :key="item"> {{ item }} </li>
        </ul>
    
    </div>

    </div>
    
</template>

<script>
export default {
    computed: {
        logo() {
            return this.$store.getters.logo
        },
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

.burger {
    display: none;
}

.logo {
    transition: 0.2s ease;
    cursor: pointer;
}

.logo:hover {
    opacity: 0.4;
    transition: 0.5s ease;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
}

ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li {
    margin-left: 3rem;
    color: white;
    font-weight: 500;
    cursor: pointer;
}

 li:after {
        display:block;
        content: '';
        border-bottom: solid 1px #fff;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    li:hover:after {
        transform: scaleX(1);
    }



   @media (max-width: 600px) {


       .menu {
           justify-content: center;
           text-align: center;
           margin: auto;
       }

       .menu-wrapper {
          display: flex;
            align-items: center;
            width: 75vw;
            margin: auto;
       }

       .burger {
           display: block;
           align-self: flex-start;
           cursor: pointer;
       }



       ul {
           display: none;
       }


   } 

</style>