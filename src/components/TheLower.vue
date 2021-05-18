<template>
    <div class="the-lower">

        <div class="the-image" :style="{backgroundImage:`url(${about.images[0]})`}">
             
        </div>

        <div class="text-area">
            <div>
                <h3> {{ about.title}} </h3>
                <p> {{ about.bio}} </p>
            </div>
        </div>

       <div class="the-image" :style="{backgroundImage:`url(${about.images[1]})`}">
             
        </div>

    </div>
</template>

<script>
export default {
    computed: {
        about() {
            return this.$store.getters.about
        }
    }
    
}
</script>

<style scoped>

.the-lower {
    display: flex;
    width: 100%;
    height: 40vh;
}



.the-image {
    height: 100%;
    width: 35%;
    background-size: cover;
}



.text-area {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-area div {
    width: 70%;
}

.text-area div h3 {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 15px
}

.text-area div p {
     font-size: 13px;
     opacity: 0.5;
     line-height: 1.5;
     font-weight: 500
}

@media (max-width: 600px) {

    .the-lower {
        height: auto;
        display: block;
    }

    .the-image {
            padding: 20vh;
    }

    .text-area {
        width: 100%
    }

    .text-area div {
    width: 80%;
    margin: 40px auto;
}


}

</style>