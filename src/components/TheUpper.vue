<template>

  
    <div class="the-upper">

        <div class="menu-area">
            <the-menu> </the-menu>
        </div>

        <div class="image-area">
            <div class="scroller" :style="{transform:`translateX(${slides.position}%)`}">
                <div v-for="slideimage in slides.info" :key="slideimage" class="the-image" >
                    <div :style="{backgroundImage:`url(${slideimage.link})`}" > 
                    
                    </div>
                </div>
            </div>

            <div class="slider-area-mobile"> 
                <the-slider> </the-slider>
            </div>
           
        </div>

        <div class="text-and-slider-area">

   
                <div class="text-area">

                    
                    <div>    
                            <h2> {{ slides.info[0].title }} </h2>
                            <p> {{ slides.info[0].bio }} </p>
                    </div>

                     <div class="shop-now-area">
                        <span> 
                            {{ shop[0] }} 
                            <img alt="logo" :src="require('@/assets/' + shop[1] + '')">
                        </span>
                    </div>

                
                </div>

               

                    <div class="slider-area"> 
                        <the-slider> </the-slider>
                     </div>
            </div>

    

  
    </div>



</template>

<script>

import TheMenu from './TheMenu.vue'
import TheSlider from './TheSlider.vue'


export default {
    components: {
        TheMenu,
        TheSlider
    },
    computed: {
        slides() {
            return this.$store.getters.slides
        },
        shop() {
            return this.$store.getters.shop
        }
    }
}
</script>

<style scoped>

.the-upper {
    display: flex;
    width: 100%;
    height: 65vh;
}


.menu-area {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 10;
}

.image-area {
    height: 100%;
    overflow: hidden;
    width: 64%
}

.scroller {
    height: 100%;
    display: flex;
    transition: 0.5s ease;
}


.the-image {
    
    height: 100%;
   
}

.the-image div {
     width: 64vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    /* transform: translateX(-100%); */
    transition: 0.5s ease;
}


.text-and-slider-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34%;
}


.text-area {
    display: flex;
    align-items: center;
    padding: 2rem;
    flex-wrap: wrap;
}

.text-area div {
    width: 70%;
    margin: auto
}

h2 {
    font-size: 2.0rem;
    line-height: 1.1;
    margin: 0
}

p {
    line-height: 1.5;
    font-size: 0.9rem;
    opacity: 0.5;
    font-weight: 500
}

.shop-now-area {
    transition: 0.3s ease;
    cursor: pointer
}

.shop-now-area:hover   {
    transform: translateX(1%);
    transition: 0.3s  ease;
}

.shop-now-area span img {
    transition: 0.3s ease;
}

.shop-now-area span:hover img {
    transform: translateX(22%);
    transition: 0.5s 0.2s ease
}

span {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 500;
    margin-top: 20px;
}

.slider-area, .slider-area-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
}

.slider-area-mobile {
    display: none;
}


@media (max-width: 600px) {


.the-upper {
    display: block;
    height: auto;
}

.menu-area {
    width: 100vw;
    left: 0;
    margin: auto;
}

.image-area {
    width: 100%;
    height: 50vh;
    position: relative;
}

.the-image {
    width: 100%;
}

.the-image div {
    width: 100vw;
}

.text-and-slider-area {

    display: block;
    height: 50vh;
    width: 100%;
}

.text-area {
    padding: 2.5rem;
}

.text-area div {
    width: 100%;
}

.slider-area {
    display: none;
}

.slider-area-mobile {
    display: block;
    right: 0
}

.the-slider {
    justify-content: flex-end;
}




}


</style>