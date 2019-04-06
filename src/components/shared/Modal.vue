<template>
    <div class="cont-modal">
        <div class="content-modal">
            <h1>¡Gracias por usar nuestro Personalizador de Tapizados!</h1>
            <p>
                Te invitamos a que nos compartas tu experiencia en redes sociales etiquetándonos como <span>Tapizados New Cars</span>  en Facebook y en Instagram como 
                <span>@tapizados_newcars</span> usando el hashtag <span>#personalizadornewcars</span> 
            </p>
            
            <div class="cont-social">
                <a href="https://www.facebook.com/tapizadosnewcars/" target="_blank">
                    <li class="fab fa-facebook"></li>
                </a>
                <a href="https://www.instagram.com/tapizados_newcars/" target="_blank">
                    <li class="fab fa-instagram"></li>
                </a>
            </div>

            <div class="buttons_modal">
                <v-btn dark color="black" href="https://www.tapizadosnewcars.com/productos-y-servicios/">
                    <v-icon class="mr-1" style="transform: rotate(180deg);">arrow_forward</v-icon>
                    Volver al sitio web
                </v-btn>
                <router-link to="/option">
                    <v-btn dark color="#FE330A">
                        <!-- <v-icon class="mr-1" style="transform: rotate(180deg);"></v-icon> -->
                        Realizar otro Diseño
                    </v-btn>
                </router-link>

            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   
    a {
        text-decoration: none;
    }
    a li {
        transition: all .3s ease-in-out;
        padding:10px;
        font-size: 35px;
        color:#FE330A;
        /* border-radius: 80px; */
    }

    a:hover li {
        padding:10px 10px;
        font-size: 35px;
        color:black;
        /* background: #FE330A; */
        /* border-radius: 30px; */
    }
    .buttons_modal {
        margin-top: 20px;
        width: 100%;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .buttons_modal .v-btn {
        font-size: 14px;
        padding:8px;   
    }
    .v-icon {
        font-size: 14px;
    }
    .cont-modal {
        z-index: 9999;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,.7);
        /* background: white; */
        display:flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .content-modal {
        text-align: center;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 25px 0px black;
        border-radius: 10px;
        /* box-sizing: border-box; */
        margin: 20px;
        background: white;
        max-width: 95%;
        width:510px;
        /* height: 400px; */
        padding: 32px;
    }
    h1 {
        font-size: 23px;
        color:#FE330A;
    }

    span {
        color:#FE330A;
    }

    p {
        font-size: 18px;
        margin-top: 30px;
    }

    @media screen and (max-width:768px) {
        .buttons_modal {
        display: flex;
        /* flex-direction: column; */
        }

        .buttons_modal .v-btn, .v-icon {
            font-size: 12px;
            padding:8px;
            margin:2px;
        }
        .v-icon {
            margin:0;
            padding:0;
        }

        h1 {
        font-size: 20px;
        color:#FE330A;
        }

        span {
            color:#FE330A;
        }

        p {
            font-size: 17px;
            margin-top: 15px;
        }
    }
</style>
