<template>
    <div class="cont">
            <v-icon class="buttonblack" x-large dark left>arrow_back</v-icon>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .cont {
        z-index: 9999;
        padding:10px;
        position: fixed;
        top: 20px;
        left: 20px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .buttonblack {
        color:black;
    }
    .cont {
        
        color:black !important;
    }
    @media screen and (max-width:768px) {
        .cont {
        
        color:white;
    }
    .buttonblack {
        color:rgb(131, 131, 131);
    }
    }
   
    
</style>
