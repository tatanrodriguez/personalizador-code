<template>
    <div class="container_option">
        <router-link class="back" to="/">
            <Back class="buttonblack"></Back>
        </router-link>
            <div class="texto">
                <h1>Elige que quieres personalizar</h1>
            </div>
            
            <div class="line"></div>
            <div class="options"> 
                <ul>
                    <li v-for="option in options" class="items" :key="option.id">
                        <router-link :to="option.link" class="links">
                       <v-hover>
                            <v-card 
                            slot-scope="{ hover }" 
                            :class="`elevation-${hover ? 12 : 2}`">
                            <v-img :src="require(`../assets/img/${option.image}`)" alt="" width="120px" height="160px" contain class="ml-5 mr-5"></v-img>
                             
                                <h2 class="text text-xs-center pb-4 pt-1">
                                    {{ option.text }}
                                </h2>
                            </v-card>
                       </v-hover>
                       </router-link>
                    </li>
                    
                </ul>
            </div>

        <Linea></Linea>
    </div>
</template>

<script>
import Linea from '../components/shared/Linea.vue'
import Back from '../components/shared/Back.vue'
// import { log } from 'util';

export default {
    data() {
       return {
            options: [
            { 
                id: '1',
                text: 'Cojinería',
                image: 'cojineria.svg',
                link: '/cojineria'
            },
            { 
                id: '2',
                text: 'Timón',
                image: 'timon.svg',
                link: '/timon' 
            },
            { 
                id: '3',
                text: 'Cartera',
                image: 'cartera.svg',
                link: '/cartera'
            },
            { 
                id: '4',
                text: 'Techo',
                image: "techo.svg",
                link: '/techo'
            }
        ]
       }

    },
    components: {
        Linea,
        Back
    },
}

</script>

<style scoped>
    /* .v-image__image {
        background-size: contain !important;
    } */
    /* .v-image__image--cover {
        background-size: contain !important;
    } */
    .elevation-12 {
        -webkit-box-shadow: 0px 7px 8px -4px rgba(254, 51, 10, 0.2),
                        0px 12px 17px 2px rgba(254, 51, 10, 0.14), 
                        0px 5px 22px 4px rgba(254, 51, 10, 0.12) !important;

        box-shadow: 0px 7px 8px -4px rgba(254, 51, 10, 0.2), 
                    0px 12px 17px 2px rgba(254, 51, 10, 0.14), 
                    0px 5px 22px 4px rgba(254, 51, 10, 0.12) !important;
    }
    .links {
        text-decoration: none;
        cursor:url("../assets/img/cursor-pointer.png"), pointer !important;
    }
    .text {
        text-decoration: none;
        transition: all .2s ease-in-out;
        color:#FE330A !important;
        font-family: 'biko' !important;
        position: relative;
    }

    .text::after {
        transition: all .2s ease-in-out;
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        width: 0%;
        height: 3px;
        background: #FE330A;
    }
    .items:hover .text::after {
        width:100%;
    }

    .container_option {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-image: url('../assets/img/textura-fondo.png');
        background-size: cover;
        background-repeat: no-repeat;
    }


    .texto {
        padding-top: 100px;
        position: relative;
        text-align: center;
    }
    .back {
        cursor: url("../assets/img/cursor-pointer.png"), pointer;
        color: black;
    }
    .buttonblack {
        color:black;
    }
     .line {
        margin:30px auto 0px  auto;
        width:100px;
        height: 5px;
        background-color: #FE330A;
    }
    .options {
        margin-top: 60px;
        width: 95%;
        max-width: 1100px;
    }
    .items {
        list-style: none;
        cursor: url("../assets/img/cursor-pointer.png"), pointer !important;
        
    }
    ul {
        display: flex;
        justify-content: space-evenly;
    }

   @media screen and (max-width:768px) {
       .elevation-12 {
        -webkit-box-shadow: 0px 7px 8px -4px rgba(254, 51, 10, 0.2),
                        0px 12px 17px 2px rgba(254, 51, 10, 0.14), 
                        0px 5px 22px 4px rgba(254, 51, 10, 0.12) !important;

        box-shadow: 0px 7px 8px -4px rgba(254, 51, 10, 0.2), 
                    0px 12px 17px 2px rgba(254, 51, 10, 0.14), 
                    0px 5px 22px 4px rgba(254, 51, 10, 0.12) !important;
    }
    .links {
        text-decoration: none;
        cursor:url("../assets/img/cursor-pointer.png"), pointer !important;
    }
    .text {
        text-decoration: none;
        transition: all .2s ease-in-out;
        color:#FE330A !important;
        font-family: 'biko' !important;
        position: relative;
    }

    .text::after {
        transition: all .2s ease-in-out;
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        width: 0%;
        height: 3px;
        background: #FE330A;
    }
    .items:hover .text::after {
        width:100%;
    }

    .container_option {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-image: url('../assets/img/textura-fondo.png');
        background-size: cover;
        background-repeat: no-repeat;
    }


    .texto {
        font-size: 12px;
        padding-top: 120px;
        position: relative;
        text-align: center;
    }
    .back {
        
        cursor: url("../assets/img/cursor-pointer.png"), pointer;
    }
     .line {
        margin:30px auto 0px  auto;
        width:100px;
        height: 5px;
        background-color: #FE330A;
    }
    .options {
        margin-top: 60px;
        width: 95%;
        max-width: 100%;
        /* overflow: auto !important;
        white-space: nowrap !important; */
    }
    .items {
        box-sizing: border-box;
        padding:0px 10px;
        list-style: none;
        cursor: url("../assets/img/cursor-pointer.png"), pointer !important;
        
    }
    ul {
        display: flex;
        justify-content: flex-start;
        /* flex-wrap: wrap; */
        -webkit-overflow-scrolling: touch;
        overflow: auto !important;
        white-space: nowrap !important;
    }

   
   }
</style>
         <!-- <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card> -->