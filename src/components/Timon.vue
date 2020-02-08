<template>
        <div class="cont-timon">
                <router-link class="back" to="/option">
                    <Back></Back>
                </router-link>
                <div class="cont-to-img" >
                    <div class="cont-pdf" ref="filepdf">
                    <!-- <h4> {{ url }} </h4> -->
                    <transition name="fade-tran" mode="out-in" appear>
                    <div class="cont-img elevation-8">
                        <!-- imagen principal de fondo -->
                        <img src="../assets/img/timones/negro.jpg" alt="" width="620px">

                        <!-- imagen interior -->
                        <img :src="require(`../assets/img/timones/${ this.urlprincipal }.jpg`)"  alt="" width="620px">

                        <!-- exterior imagen -->
                        <!-- <img  :src="require(`../assets/img/timones/${ this.urlext }`)"  alt="" width="620px"> -->
                        
                        <!-- imagen de los hilos -->
                        <img :src="require(`../assets/img/timones/${ this.urlhilo }`)"  alt="" width="620px">
                        
                        <!-- src\assets\img\Cojineria\imagen-principal.jpg -->
                    </div>
                    </transition>

                    <transition name="fade-delay" mode="out-in" appear>
                    <div class="exp">
                        <v-card  class="elevation-7">
                            <!-- detalles de hilos -->
                            
                            <div class="detail-hilo">
                                <img src="../assets/img/timones/timones-pequenos/principal.jpg" width="185px" alt="">
                                <!-- <img :src="require(`../assets/img/cojineria/cojinerias-pequenas/${ this.urlint }`)" width="185px" alt=""> -->
                                <img :src="require(`../assets/img/timones/timones-pequenos/${ this.urlprincipal }.png`)" width="185px" alt="">

                                <img :src="require(`../assets/img/timones/timones-pequenos/${ this.urlhilo }`)" width="185px" alt="">
                                <transition name="cambio-hilo" mode="out-in" appear>
                                    <h3 class="pa-1 white--text"  style="text-align:left; position:absolute; font-weight:100; background:rgba(0,0,0,.65)" :key="namehilo"> Hilo {{ this.namehilo }} </h3>
                                </transition>

                            </div>
                            <!-- detalles de logo Repujado o Bordado -->
                            <!-- <div class="detail-logo">
                                
                                <img :src="require(`../assets/img/logorp/${ this.urllogo }`)" alt="">
                                <transition name="cambio-hilo" mode="out-in">   
                                    <h3 
                                        class="pa-1 white--text" 
                                        style="text-align:left; position:absolute; font-weight:100; background: rgba(0,0,0,.5);" 
                                        :key="logosname" > {{ this.logosname }} </h3>
                                </transition>   
                            </div> -->
                            <!-- detalles de seleccion de la persona-->
                            <div class="detail-costura">
                                <ul class="ul-din">
                                    <!-- exterior -->
                                    <div class="selects">
                                        <div class="cont-overflow-after">
                                            <!-- <h4 style="margin-top: 0px;" :key="nameselectedprincipal">Principal</h4> -->
                                            <!-- imagen de la seleccion de el exterior -->
                                            <img :src="require(`../assets/img/cueros/${ this.urlprincipal }.jpg`)">
                                        </div>
                                        <transition name="cambio-fade" mode="out-in">
                                            <h4  :key="nameselected"> {{ this.nameselected }} </h4>
                                        </transition>
                                    </div>
                                    <!-- interior -->
                                    <div  class="selects">
                                        
                                       
                                                <div class="cont-overflow-after over-none" v-bind:style="`background: ${this.hilop} !important`">
                                                    <div class="hilo" v-bind:style="`background: ${this.hiloimg};`">
                                                        <div class="linea"  v-bind:style="`border: 3px dashed transparent;`"></div>
                                                    </div>
                                                    <!-- <img :src="require(`../assets/img/cueros${cueros.img}`)" alt="" srcset=""> -->
                                                </div>
                                                <transition name="cambio-fade" mode="out-in">
                                                    <h4 :key="this.namehilo">
                                                        {{ this.namehilo }}
                                                    </h4>
                                                </transition> 
                                            
                                          

                                          
                                    </div>
                                </ul>
                            </div>
                        </v-card>
                    </div>
                    </transition>
                    </div>
                </div>
            <transition name="fade-tran" mode="out-in" appear>  
                <div class="cont-option">
                    <v-card class="mx-auto elevation-12" max-width="820px">
                        <v-card-title class="title font-weight-regular justify-space-between">
                            <transition name="slide-fade" mode="out-in">
                                <span :key="currentTitle">{{ currentTitle }}</span>
                            </transition>
                            <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
                        </v-card-title>

                            <v-window v-model="step" touchless>
                                <v-window-item :value="1">
                                    <div class="cont-colors">
                                        <ul class="ul-din">
                                            <!-- li de los cueros pincipaless -->
                                            <li v-for="(cuero, idx) in cueros" :key="cuero[idx]" @click="cambio(idx)">
                                                <div class="cont-overflow-after">
                                                    <img :src="require(`../assets/img/cueros/${cuero.img}.jpg`)">
                                                </div>
                                                <h4>{{ cuero.nombre }}</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </v-window-item>


                                <v-window-item :value="2">
                                    <div class="cont-colors">
                                        <!-- li de hilos -->
                                        <ul class="ul-din">
                                            <li v-for="(hilos, idx) in hiloss" :key="hilos[idx]" @click="cambiohilo(idx)">
                                                <div class="cont-overflow-after over">
                                                    <div class="hilo" v-bind:style="`background: ${hilos.bkg}`">
                                                        <div class="linea"  v-bind:style="`border: 3px dashed ${hilos.img};`"></div>
                                                    </div>
                                                    <!-- <img :src="require(`../assets/img/cueros${cueros.img}`)" alt="" srcset=""> -->
                                                </div>
                                                
                                                <h4>
                                                    {{ hilos.nombre }}
                                                </h4>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </v-window-item>

                                

                                <v-window-item :value="3">
                                    <div class="cont-colors guardarbtn">
                                        <ul class="ul-din ul-din-g">
                                            <!-- li del boton guardar -->
                                            <!-- <li>
                                                <input  v-model="cliente" id="cliente" type="text" placeholder="Cliente" value="">
                                                
                                                <input  v-model="clientetext" id="clientetext" type="text" placeholder="Tener en Cuenta" value="">
                                            </li> -->
                                            <li>
                                                <v-hover>
                                                    <v-btn id="btng" @click="downloadPdf(); showModal()"
                                                        dark round color="#FE330A" large>
                                                        <h3>Guardar</h3>
                                                    </v-btn>
                                                </v-hover>

                                                <v-hover>
                                                    <v-btn id="btng-m" @click="downloadPdfM(); showModal()"
                                                        dark round color="#FE330A" large>
                                                        <h3>Guardar</h3>
                                                    </v-btn>
                                                </v-hover>
                                            </li>
                                        </ul>
                                    </div>
                                </v-window-item>

                                
                            </v-window>

                            <!-- <v-divider></v-divider> -->

                            <v-card-actions>
                            <v-btn
                                id="btn-next"
                                :disabled="step === 1"
                                dark
                                round
                                color="#FE330A"
                                @click="step--"
                            >
                                <v-icon>keyboard_backspace</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                id="btn-prev"
                                :disabled="step === 3"
                                dark
                                round
                                color="#FE330A"
                                depressed
                                @click="step++"
                            >
                                <v-icon style="transform:rotate(180deg);">keyboard_backspace</v-icon>
                            </v-btn>
                            </v-card-actions>
                        </v-card>

                        <transition name="fade-tran" mode="out-in" appear>
                            <loader v-show="loader"></loader>
                        </transition>
                        <transition name="fade-tran" mode="out-in" appear>
                            <modal v-show="modal" class="modal-final"></modal>                    
                        </transition>

                </div>
            </transition>
        </div>
    

</template>

<script>
import Back from '../components/shared/Back.vue'
//importando js pdf
import jsPDF from 'jspdf'

import html2canvas from 'html2canvas'

import Modal from '../components/shared/Modal.vue'

import Loader from '../components/shared/Loader.vue'

import { setTimeout } from 'timers';
// import path from 'path'
// import { log } from 'util';

export default {
    data() {
        return {
        loader: false,
        modal: false,
        // clientetext: '',
        // cliente: '',
        // urlp: 'negro.png',
             //variable que cambia el color del exterior
        urlprincipal: 'negro',
        //variable que cambia el color de la url de la seleccion exterior
        // urlselected: 'negro.jpg', 
        //variable que cabia el color de la url del interior
        nameselected: 'Negro',
        //variable que cambia el nombre de la seleccion interior
        urlhilo: 'hilo-blanco.png',
        //nombre hilo
        namehilo: 'Blanco',
        //url de la imagen del logo repujado o bordado
        urllogo: 'logo-bordado-new-cars.jpg',
        //nombre del logo
        logosname: 'Bordado',
        hilop:'gray',
        hiloimg: 'white',
        step: 1,
        cojineriaImg: [
            {  }
        ],
        cueros: [
            { nombre: 'Negro' , img: 'negro' },
            { nombre: 'Gris oscuro', img: 'gris-oscuro' },
            { nombre: 'Gris claro', img: 'gris-m3-claro' },
            { nombre: 'Azul prado', img: 'azul-prado' },
            { nombre: 'Gris grafito', img: 'gris-grafito' },
            { nombre: 'Arena', img: 'arena' },
            { nombre: 'Ivory', img: 'ivory' },
            { nombre: 'Café toyota', img: 'cafe-toyota' },
            { nombre: 'Vinotinto', img: 'vinotinto' },
            { nombre: 'Rojo', img: 'rojo' }
        ],
        hiloss: [
            { nombre: 'Azul', img: '#172466', bkg: 'white', urlimg: 'hilo-azul.png' },
            { nombre: 'Beige', img: '#BCA77E', bkg: 'white', urlimg: 'hilo-beige.png' },
            { nombre: 'Blanco', img: 'white', bkg: 'gray', urlimg: 'hilo-blanco.png'},
            { nombre: 'Gris oscuro', img: '#5B5B5B', bkg: 'white', urlimg: 'hilo-gris-oscuro.png' },
            { nombre: 'Gris plata', img: '#919191', bkg: 'white', urlimg: 'hilo-gris-plata.png' },
            { nombre: 'Naranja', img: '#D35500', bkg: 'white', urlimg: 'hilo-naranja.png' },
            { nombre: 'Negro', img: 'black', bkg: 'white', urlimg: 'hilo-negro.png' },
            { nombre: 'Rojo', img: '#D30000', bkg: 'white', urlimg: 'hilo-rojo.png' },
            { nombre: 'Verde', img: '#007F03', bkg: 'white', urlimg: 'hilo-verde.png' }
        ],
        // logos: [
        //     { nombre: 'Repujado', url: 'logo-repujado-new-cars.jpg' },
        //     { nombre: 'Bordado', url: 'logo-bordado-new-cars.jpg' }
        // ]
        }
       },
        components: {
            Back,
            Modal,
            Loader
        },
        computed: {
        currentTitle () {
            switch (this.step) {
            case 1: return 'Color Principal'
            // case 2: return 'Color Secundario'
            case 2: return 'Color de Costura'
            case 3: return 'Tipo de Logo'
            case 4: return 'Guardar Diseño'
            default: return 'Tapizados New Car\'s'
            }
        }
        },
        methods: {
            showModal() {
                this.loader = true
                setTimeout(() => {
                    this.modal = true
                    setTimeout(() => {
                        this.loader = false
                    }, 10);
                }, 3000)
            },
            cambio(idx) {
                // console.log(idx);
                this.urlprincipal = this.cueros[idx].img
                //cambiando la imagen del exterior
                this.urlprincipal = this.cueros[idx].img
                //cambiando el nombre del selected de exerior
                this.nameselected = this.cueros[idx].nombre
                //cambiando la imagen del selected de exterior
                // this.urlselected = this.cueros[idx].img
            },
            cambiohilo(idx) {
                //obteniendo el color del hilo para el cambio de imagen
                this.urlhilo = this.hiloss[idx].urlimg
                //nombre del hilo
                this.namehilo = this.hiloss[idx].nombre

                this.hilop = this.hiloss[idx].bkg
                
                this.hiloimg = this.hiloss[idx].img

            },
            cambiologo(idx) {
                // console.log(idx);
                //obteniendo el nombre del tipo del logo
                this.logosname = this.logos[idx].nombre
                //obteniendo la url del ripo de logo
                this.urllogo = this.logos[idx].url
            },
            downloadPdf() {
                //creando pdf
                const doc = new jsPDF();
                //creando el elemento html del canvas
                let canvasElement = document.createElement('canvas');
                
                
                // let cliente = this.cliente
                // let clientetext = this.clientetext
                
                // let mouse = document.getElementsByTagName('body')[0];

                // mouse.style.cursor = "url('../assets/img/cursor-pointer.png'), pointer";
                // mouse.style.cursor = "pointer";

                //creando el html canvas
                html2canvas(this.$refs.filepdf, { canvas: canvasElement })
                    .then(function (canvas) {
                        console.log('guardardando...');
                        
                        const imagePdf = canvas.toDataURL("image/png");
                        // const logoimgpdf = require('../assets/img/logopdf.jpg');
                        // doc.setFont('arial')
                        // doc.setFontType('normal')
                        // doc.setTextColor(254, 51, 10)
                        doc.setFontSize(22)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('bold')
                        doc.text(80, 15, 'Tapizados New Car\'s')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 25, 'Nit: 79.883.551-2')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 32, 'Régimen Simplificado')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 39, 'Cel: (+57) 314 303 61 67')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 46, 'Carrera 27 C #71 B 44 / Barrio Alcázares')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 53, 'Bogotá D.C. / Colombia')
                        
                        doc.setFontSize(13)
                        doc.setFontType('bold')
                        doc.setTextColor(0, 0, 0)
                        doc.text(40, 65, 'Diseño de Tapizado elaborado en www.tapizadosnewcars.com')

                        doc.setDrawColor(254, 51, 10)
                        doc.line(114, 66, 177, 66)

                        
                        let logopdf = "data:image/png;base64,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"
                        // doc.addImage(logoimgpdf, 'JPEG', 0, 0, 350, 183);
                

                        doc.addImage(logopdf, 'JPEG', 10, 20, 50, 25)


                        doc.addImage(imagePdf, 'JPEG', 5, 70, 200, 105 );

                        //tapizados logo sobre personalizado
                        doc.addImage(logopdf, 'JPEG', 10, 76, 25, 12.5)
                        // console.log(imagePdf);
                        // doc.setTextColor(254, 51, 10)
                        
                        // doc.setFontSize(13)
                        // doc.setTextColor(0, 0, 0)
                        // doc.setFontType('bold')
                        // doc.text(5, 190, `Cliente: ${ cliente }`)

                        // doc.setFontSize(13)
                        // doc.setTextColor(0, 0, 0)
                        // doc.setFontType('normal')
                        // doc.text(5, 197, `Tener en cuenta: ${ clientetext }`)
                        doc.setFontSize(11)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(5, 200, 'Si quieres recibir la mejor asesoría en cuanto a costos, materiales y acabados del diseño personalizado ')

                        doc.setFontSize(11)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(5, 205, 'que acabaste de realizar, te invitamos a que nos contactes a través de ')

                        // 254, 51, 10
                        // , te invitamos a que nos escribas a nuestro whatsapp
                        doc.setFontSize(11)
                        doc.setTextColor(254, 51, 10)
                        doc.textWithLink('nuestro whatsapp +573143036167', 128, 205, {url: 'https://wa.me/573143036167?text=Buen%20dia,%20Deseo%20realizar%20una%20Cotizaci%C3%B3n'});


                        doc.setDrawColor(254, 51, 10)
                        doc.line(128, 206, 188, 206)


                         doc.setFontSize(10)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(40, 292, 'Copyright © todos los derechos reservados - Tapizados New Car\'s - 2019 - 2020')

                        
                        doc.save("timon-tapizado-perzonalizado-new-cars.pdf")
                        // console.log(logoimgpdf);

                        // document.querySelector('#cliente').value = "";
                        // document.querySelector('#clientetext').value = "";
                    })
                
            },
            downloadPdfM() {
                //creando pdf
                const doc = new jsPDF();
                //creando el elemento html del canvas
                let canvasElement = document.createElement('canvas');
                
                
                // let cliente = this.cliente
                // let clientetext = this.clientetext
                
                // let mouse = document.getElementsByTagName('body')[0];

                // mouse.style.cursor = "url('../assets/img/cursor-pointer.png'), pointer";
                // mouse.style.cursor = "pointer";

                //creando el html canvas
                html2canvas(this.$refs.filepdf, { canvas: canvasElement })
                    .then(function (canvas) {
                        console.log('guardardando...');
                        
                        const imagePdf = canvas.toDataURL("image/png");
                        // const logoimgpdf = require('../assets/img/logopdf.jpg');
                        // doc.setFont('arial')
                        // doc.setFontType('normal')
                        // doc.setTextColor(254, 51, 10)
                        doc.setFontSize(22)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('bold')
                        doc.text(80, 15, 'Tapizados New Car\'s')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 25, 'Nit: 79.883.551-2')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 32, 'Régimen Simplificado')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 39, 'Cel: (+57) 314 303 61 67')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 46, 'Carrera 27 C #71 B 44 / Barrio Alcázares')

                        doc.setFontSize(13)
                        doc.setFontType('normal')
                        doc.setTextColor(0, 0, 0)
                        doc.text(80, 53, 'Bogotá D.C. / Colombia')
                        
                        doc.setFontSize(13)
                        doc.setFontType('bold')
                        doc.setTextColor(0, 0, 0)
                        doc.text(40, 65, 'Diseño de Tapizado elaborado en www.tapizadosnewcars.com')

                        doc.setDrawColor(254, 51, 10)
                        doc.line(114, 66, 177, 66)

                        
                        let logopdf = "data:image/png;base64,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"
                        // doc.addImage(logoimgpdf, 'JPEG', 0, 0, 350, 183);
                

                        doc.addImage(logopdf, 'JPEG', 10, 20, 50, 25)


                        doc.addImage(imagePdf, 'JPEG', 5, 70, 200, 190 );

                        //tapizados logo sobre personalizado
                        doc.addImage(logopdf, 'JPEG', 10, 76, 25, 12.5)
                        // console.log(imagePdf);
                        // doc.setTextColor(254, 51, 10)
                        
                        // doc.setFontSize(13)
                        // doc.setTextColor(0, 0, 0)
                        // doc.setFontType('bold')
                        // doc.text(5, 190, `Cliente: ${ cliente }`)

                        // doc.setFontSize(13)
                        // doc.setTextColor(0, 0, 0)
                        // doc.setFontType('normal')
                        // doc.text(5, 197, `Tener en cuenta: ${ clientetext }`)
                         doc.setFontSize(11)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(5, 270, 'Si quieres recibir la mejor asesoría en cuanto a costos, materiales y acabados del diseño personalizado ')

                        doc.setFontSize(11)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(5, 275, 'que acabaste de realizar, te invitamos a que nos contactes a través de ')

                        // 254, 51, 10
                        // , te invitamos a que nos escribas a nuestro whatsapp
                        doc.setFontSize(11)
                        doc.setTextColor(254, 51, 10)
                        doc.textWithLink('nuestro whatsapp +573143036167', 128, 275, {url: 'https://wa.me/573143036167?text=Buen%20dia,%20Deseo%20realizar%20una%20Cotizaci%C3%B3n'});


                        doc.setDrawColor(254, 51, 10)
                        doc.line(128, 276, 188, 276)

                         doc.setFontSize(10)
                        doc.setTextColor(0, 0, 0)
                        doc.setFontType('normal')
                        doc.text(40, 292, 'Copyright © todos los derechos reservados - Tapizados New Car\'s - 2019 - 2020')

                        
                        doc.save("timon-tapizado-perzonalizado-new-cars.pdf")
                        // console.log(logoimgpdf);

                        // document.querySelector('#cliente').value = "";
                        // document.querySelector('#clientetext').value = "";
                    })
                
            }
        }
  }
</script>

<style scoped>

  .ul-din-g {
      overflow: hidden !important;
   
  }


 #btn-next, #btn-prev {
        height: 28px;
        min-width:35px;
    }
#cliente, #clientetext {
        position: relative;
        font-size: 16px;
        width: 300px;
        transition: all .5s ease-in-out;
        margin: 3px;
        padding:5px;
        border-bottom: 1px solid black;
    }

  
    .title {
        /* font-size: 18px !important;  */
        padding: 10px 16px 0px 16px;
    }
    #cliente:focus, #clientetext:focus {
        transition: all .5s ease-in-out;
        outline: none;
        margin: 3px;
        padding:5px;
        border-bottom: 2px solid black;
    }
    .detail-costura .ul-din {
        flex-direction: column;
        /* margin-top: 20px; */
    }

    .detail-costura .ul-din .selects {
        /* padding:20px !important; */
        /* margin-top: 50px; */
        margin:15px auto 0px auto;
    }
    .detail-logo img {   
        position: absolute;
    }
    .detail-costura {
        
        width:185px;
        /* background:lightcoral; */
    }
    .detail-logo {
        position: relative;
        width:185px;
        height: 111px;
        /* background: lightblue; */
    }
    .detail-hilo img {
        position: absolute;
    }
    .detail-hilo {
        position: relative;
        width:185px;
        height: 185px;
        /* background: pink; */
    }
    .over-none {
        transition: all .3s ease-in-out;
        width: 50px;
        height: 50px;
        /* background: red; */
        position: relative;
        padding:0px;
        margin: 5px;
        box-sizing: content-box;
        border-radius: 70px;
        /* cursor:url("../assets/img/cursor-pointer.png"), auto;   */
        border: 2px solid transparent;
    }

    .over {
        transition: all .3s ease-in-out;
        width: 50px;
        height: 50px;
        /* background: red; */
        position: relative;
        padding:0px;
        margin: 5px;
        box-sizing: content-box;
        border-radius: 70px;
        cursor:url("../assets/img/cursor-pointer.png"), auto;  
        border: 2px solid transparent;
    }

    .ul-din li:hover .over {
        border: 2px solid black;
        padding: 5px;
        margin: 0;
        
    }

    .cont-overflow-after .hilo .linea {
        margin-top: 20px;
        transform: rotate(45deg);
        margin-left: 15%;
        width:70px;
        height: 70px;
    }

    .cont-overflow-after .hilo {
        overflow: hidden;
        width: 100%;
        height: 100%;
        /* background: blue; */
        border-radius: 70px;
        border:1px solid black;
        box-sizing: border-box;
    }
    .cont-overflow-after  img {
        transition: all .3s ease-in-out;
        border-radius: 70px;
        width: 50px;
        height: 50px;
        position: relative;
        border: 2px solid transparent;
        padding:0px;
        margin: 5px;
        box-sizing: content-box;
        cursor:url("../assets/img/cursor-pointer.png"), auto;
    }
     .ul-din li:hover img {
        border: 2px solid black;
        padding:5px;
        margin: 0;
    }

    .ul-din .selects img {
        cursor:url("../assets/img/cursor-normal.png"), auto;
    }
    .ul-din .selects {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        width: auto;
        height: 100%;
        
    }

    .ul-din {
        padding: 0 !important;
        margin: 0 !important;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    
    .ul-din li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        width: 70px;
        height: 100%;
    }
    .ul-din li h4 {
        text-align: center;
        margin-top: 7px;
        font-size: 13px;
    }
    .cont-colors {
        width:100%;
        height: 100px;
    }
    .exp .v-card {
        margin-left:15px;
        height: 100%;
    }
    .cont-to-img {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .cont-pdf {
        display: flex;
        justify-content: center;
    }
    .exp {
        left: 0;
        margin: 0;
        width:200px;
        height: 415px;
        /* background: orangered; */
    }
    .back {
        cursor:url("../assets/img/cursor-pointer.png"), auto;
    }
    .cont-timon {
        width: 100%;
        height: 100vh;
        background-image: url('../assets/img/textura-fondo.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
    .cont-option {
        position:fixed;
        max-width:100%;
        width:100%;
        bottom:1%;

    }
    .cont-img {
        /* position: relative; */
        /* margin: 0 auto; */
        /* position: relative; */
        background: gray;
        width: 620px;
    }
    .cont-img img {
        position: absolute;
        
    }
    .v-btn {
        cursor:url("../assets/img/cursor-pointer.png"), auto;
    }


    .fade-delay-enter-active, .fade-delay-leave-active {
        transition: all .2s ease-in-out;
        transition-delay: .6s;
    }
    .fade-delay-enter, .fade-delay-leave-to {
        opacity: 0;
    }

    .fade-tran-enter-active, .fade-tran-leave-active {
        transition: all .2s ease-in-out;
        transition-delay: .4s;
    }
    .fade-tran-enter, .fade-tran-leave-to {
        opacity: 0;
    }

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.cambio-hilo-enter-active {
  transition: all .2s ease-in-out;
}
.cambio-hilo-leave-active {
  transition: all .2s ease-in-out;
}
.cambio-hilo-enter, .cambio-hilo-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(5px);
  opacity: 0;
}

.cambio-fade-enter-active {
  transition: all .2s ease-in-out;
}
.cambio-fade-leave-active {
  transition: all .2s ease-in-out;
}
.cambio-fade-enter, .cambio-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(5px);
  opacity: 0;
}
    #btng-m {
        display: none;
    }
    #btng {
        display: block;
    }

    
    @media screen and (max-width:768px) {
        #btng {
            display: none;
        }

        #btng-m {
            display: block;
        }
        .cont-option {
            padding: 0px 00px 0px 0px;
            box-sizing: border-box;
            position:fixed;
            max-width:100%;
            width:100%;
            bottom:0%;

            }
        .cont-pdf {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

     .cont-to-img {
        margin-top: 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
    }
    .cont-img img {
        position: absolute;
        width: 100%;
        top: 0;
        
    }
    .cont-img {
        margin: auto;
        position: relative;
        max-width: 620px !important;
        width:100%;
        padding-top: 66.25%;
        /* background: blue; */
        
        
    }

      .ul-din {
        display: flex;
        justify-content: flex-start;
        /* flex-wrap: wrap; */
        overflow-X: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }

    .ul-din {
        padding: 0;
        margin: 0;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    
    .ul-din li {
        margin:0px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        width: 70px;
        height: 100%;
    }

    #btn-next, #btn-prev {
        height: 28px;
        min-width:35px;
    }
    .title {
        font-size: 18px !important; 
        padding: 10px 16px 0px 16px;
    }

    .detail-costura {
        width:90px;
        height: 100px;
    }
    .detail-costura .ul-din {
        overflow: visible;
        width:auto;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* height: 100px; */
        /* align-items: center;
        justify-content: center; */
        /* overflow: hidden; */
        height: 100%;
    }
    .detail-costura .ul-din .selects  {
        flex-direction: row;
        align-items: center;
        justify-content: center;
       
        height: auto;

    }

    .detail-costura .selects h4 {
        font-size: 11px;
    }
    .detail-costura .cont-overflow-after img {
        width: 30px;
        height: 30px;
        padding:0;
        margin: 0px 5px;
    }

    .detail-logo {
        width:155px;
        height: 100px;
    }
    .detail-logo img {
        /* width:100%; */
        height: 100px;
    }

    .detail-hilo {
        width:100px;
        height: 100px;
    }
    .detail-hilo img {
        width:100px;
    }
    .exp .v-card{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        margin-left: 0px;
    }
    .exp {
        height: auto;
        width: auto;
    }

    .botonpr {
        height: 40px;
        padding: 0 20px;
    }
    .guardarbtn .ul-din {
        justify-content: space-evenly;
    }

      #cliente, #clientetext {
        position: relative;
        font-size: 15px;
        width: 150px;
        transition: all .5s ease-in-out;
        margin: 5px;
        padding:3px;
        border-bottom: 1px solid black;
    }

    #btng {
        padding:10px;
        height: 29px;
        font-size: 12px;
    }

    #btng-m {
        padding:10px;
        height: 29px;
        font-size: 12px;
    }
    .over-none {
         width: 30px;
        height: 30px;
        margin:0 5px;
    }
    .detail-costura .ul-din .selects[data-v-02cae0f7] {
        margin: 0;
        padding:0;
        
    }
    .detail-costura .cont-overflow-after .hilo {
        border:none;
    }
    }
</style>
