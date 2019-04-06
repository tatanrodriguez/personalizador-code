<template>
        <div class="container-index">
        <transition name="cambio-fade" mode="out-in" appear>
            <figure>
                <img class="logo" src="../assets/img/logo.svg" alt="">
            </figure>
        </transition>
        <transition name="cambio-fade" mode="out-in" appear>
            <h1>Personaliza tu Tapizado</h1>
        </transition>
        <transition name="cambio-fade" mode="out-in" appear>
            <div class="line"></div>
        </transition>
        <transition name="cambio-tardio" mode="out-in" appear>
            <div class="cont-button">
                <router-link to="/option">
                    <button class="button">
                        Empieza Ahora
                        <v-icon color="#FE330A" dark left>arrow_forward</v-icon>
                    </button>
                </router-link>
            </div>
        </transition>
        <transition name="cambio-fade" mode="out-in" appear>
            <div class="a4">
                <p>
                    Software diseñado y desarrollado por <strong>A4 Identidad Digital</strong>
                </p>
                <p>
                    Copyright © todos los derechos reservados - Tapizados New Car's - 2019 - 2020
                </p>
            </div>
        </transition>
        <transition name="cambio-fade" mode="out-in" appear>
            <linea></linea>
        </transition>
        </div>
</template>

<script>
import Linea from '../components/shared/Linea.vue'
// import open from 'open';
export default {
    components: {
        Linea
    },
}
</script>

<style scoped>
    .a4 p {
        margin-bottom: 6px;
    }
    .a4 {
        width: 100%;
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
        text-align: center;
        bottom:3.9%;
        position: absolute;
        font-family:'biko';
        font-size: 17px;
    }
    .a4 strong {
        transition: all .2s ease-in-out;
        background: -webkit-linear-gradient(45deg,rgb(99, 51, 121),rgb(49, 134, 112));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor:url("../assets/img/cursor-pointer.png"), auto;
    }

    .a4 strong:hover {
        /* font-size:20px; */
        letter-spacing: 1px;
    }
    i {
        transition: all .2s ease-in-out;
        margin-left: -25px;
        margin-right: 0;
        /* font-size: 18px; */
        opacity: 0;
    }
    .cont-button {
        width: 100%;
        text-align: center;
        margin:auto;
    }
    .button {
        transition: all .2s ease-in-out;
        text-align: center;
        font-family:'biko';
         margin: 45px auto auto auto;
         font-size: 23px;
         padding:12px 25px;
         box-shadow: black 0px 0px 20px -5px;
         cursor:url("../assets/img/cursor-pointer.png"), auto;
         background:#FE330A;
         /* background-image:linear-gradient(90deg, #FE330A, #FF6B0D, #FE330A); */
         font-weight: 500;
         border: none;
         color:white;
         border-radius: 50px;
    }
    .button:hover i {
        transition-delay: .1s;
        opacity: 1;
        margin-left: 8px;
    }
    .button:hover {
        color: #FE330A;
        margin-top:41px;
        border: 2px solid #FE330A;
        padding:14px 27px;
        background:white;
      /* background-image:linear-gradient(90deg, #FE330A, #FF6B0D, #FE330A);   */
    }

    figure {
        width:290px;
        margin:auto;
    }
    /* figure img {
        width: 100%;
    } */
    .logo {
        width:100%;
        margin:60px auto auto auto;

    }
    h1 {
        text-align: center;
         font-family:'biko';
         margin-top: 40px;
         font-size: 35px;
         color: #FE330A;
         font-weight: 500;
    }

    .line {
        margin:30px auto auto  auto;
        width:100px;
        height: 5px;
        background-color: #FE330A;
    }

    .container-index {
        /* display: flex;
        align-items: center;
        flex-direction: column; */
        box-sizing: border-box;
        width:100%;
        height: 100vh;
        max-width: 100% !important;
        padding: 0 !important;
        margin:0 !important;
        background-image: url('../assets/img/textura-fondo.png');
        background-size: cover;
        background-repeat: no-repeat;
        
    }

     


    .cambio-tardio-enter-active {
        transition: all .5s ease-in-out;
        transition-delay: 1s;
    }
    .cambio-tardio-leave-active {
    transition: all .5s ease-in-out;
    transition-delay: 1s;
    }
    .cambio-tardio-enter, .cambio-tardio-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    opacity: 0;
    
    }

    .cambio-fade-enter-active {
        transition: all .5s ease-in-out;
        transition-delay: .5s;
    }
    .cambio-fade-leave-active {
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    }
    .cambio-fade-enter, .cambio-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    opacity: 0;
    
    }

    @media screen and (max-width: 798px) {
         .a4 {
        width: 100%;
        text-align: center;
        bottom:20px;
        position: absolute;
        font-family:'biko';
        font-size: 14px;
        
    }
    .a4 strong {
        transition: all .2s ease-in-out;
        background: -webkit-linear-gradient(45deg,rgb(99, 51, 121),rgb(49, 134, 112));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor:url("../assets/img/cursor-pointer.png"), auto;
    }

    .a4 strong:hover {
        font-size:20px;
        letter-spacing: 1px;
    }
    i {
        transition: all .2s ease-in-out;
        margin-left: -25px;
        margin-right: 0;
        /* font-size: 18px; */
        opacity: 0;
    }
    .cont-button {
        width: 100%;
        text-align: center;
        margin:auto;
    }
    .button {
        transition: all .2s ease-in-out;
        text-align: center;
        font-family:'biko';
         margin: 45px auto auto auto;
         font-size: 22px;
         padding:12px 25px;
         box-shadow: black 0px 0px 20px -5px;
         cursor:url("../assets/img/cursor-pointer.png"), auto;
         background:#FE330A;
         /* background-image:linear-gradient(90deg, #FE330A, #FF6B0D, #FE330A); */
         font-weight: 500;
         border: none;
         color:white;
         border-radius: 50px;
    }
    .button:hover i {
        transition-delay: .1s;
        opacity: 1;
        margin-left: 8px;
    }
    .button:hover {
        color: #FE330A;
        margin-top:41px;
        border: 2px solid #FE330A;
        padding:14px 27px;
        background:white;
      /* background-image:linear-gradient(90deg, #FE330A, #FF6B0D, #FE330A);   */
    }

    figure {
        width:220px;
        margin:auto;
    }
    /* figure img {
        width: 100%;
    } */
    .logo {
        width:100%;
        margin:60px auto auto auto;

    }
    h1 {
        text-align: center;
         font-family:'biko';
         margin-top: 40px;
         font-size: 30px;
         color: #FE330A;
         font-weight: 500;
    }

    .line {
        margin:30px auto auto  auto;
        width:100px;
        height: 5px;
        background-color: #FE330A;
    }

    .container-index {
        /* display: flex;
        align-items: center;
        flex-direction: column; */
        box-sizing: border-box;
        width:100%;
        height: 100vh;
        max-width: 100% !important;
        padding: 0 !important;
        margin:0 !important;
        background-image: url('../assets/img/textura-fondo.png');
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    }

</style>
