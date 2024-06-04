<template>
    <div class="px-3 mt-3 flex justify-center">
        <svg width="500" height="500"
             viewBox="0 0 500 500" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
             <rect x="0" y="0" width="400" height="400" style="fill-opacity: 0; stroke: grey;"/>
             <g v-html="innercode"></g>
        </svg>    
    </div>
</template>

<script>
import { SVG, Container, extend } from '@svgdotjs/svg.js'
import widget from "../widget/mywidget.js"
import keygen from "../keygen.js"
import svgjsblob from "../blob.js"
import { btValue } from '../App.vue'

export default {
    data() {
        return {
            innercode: '',
            key: null,
            SVG: null,
        }
    },

    mounted() {
        if(!this.key) {
            this.refresh(keygen.getKeyParams(""))
        }
    },

    methods: {
        
        refresh(key) {
            this.key = key
            let val = btValue
            extend(Container, svgjsblob)
            let draw = SVG().viewbox(0, 0, 1000, 1000)
            widget(key,draw,val)
            this.innercode = draw.svg()
        },

        codeChange(code) {
            console.log("code",code);
            this.innercode = code
        }
    },
}
</script>
<style lang="">

</style>