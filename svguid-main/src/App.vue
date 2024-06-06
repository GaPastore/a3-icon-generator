<link rel="stylesheet" href="https://use.typekit.net/ayh3ibg.css"></link>
<template>
  <div class="">
    <topbar/>
    <section class="h-full pb-10 @light:text-gray-600 @dark:text-white body-font @dark:bg-gray-600 @light:bg-white">
      <div class="flex w-full justify-center">
        <div class="container flex justify-center -ml-20 py-10 md:w-[1000px]">
          <keyinput @keyChanged="keyChanged" class="-ml-50"/>
          <div class="flex">
            <svg_view ref="svg_view_ref" />
            <buttons ref="buttons" />
          </div>
          <button class="transition w-1/2 self-center text-white bg-[#42B242] hover:bg-[#834FBA] @dark:bg-[#834FBA] @dark:hover:bg-[#42B242] p-4 h-20 mt-5 rounded-2xl" v-on:click="downloadSVG">Baixar Iconomonster</button>
        </div>
      <div class="w-1/3 mt-10 text-[25px] text-justify align-bottom leading-relaxed indent">
        Iconomonster é uma ferramenta para aqueles que estão incecisos na hora de escolher uma foto de perfil. 
        Este projeto foi desenvolvido durante aulas de Ciência da Computação na Universidade São Judas Tadeu, sem fins lucrativos.
        O site gera uma imagem de monstro sempre que você digitar algo, tendo diversas formas, olhos e acessórios.
        Cada caractere colocado dá direito a um avatar diferente, ou seja, possibilidades infinitas de novos ícones!
        Caso você goste do ícone gerado, poderá salvar sua imagem no computador com apenas um clique no botão "Salvar Iconomonster", super simples!
        <br>
        <br>
        Desenvolvedores: Alef Rosa, Gabriel Pastore, Pedro Morais, Pedro Luccas

      </div>
      </div>
    </section>
    <bottombar/>
  </div>
</template>

<script>
import bottombar from "./components/bottombar.vue"
import topbar from "./components/topbar.vue"
import keyinput from "./components/keyinput.vue"
import svg_view from "./components/svg_view.vue"
import buttons from "./components/buttons.vue"

function triggerDownload(imgURI) {
    const a = document.createElement('a');
    a.download = 'image.png'; // filename
    a.target = '_blank';
    a.href = imgURI;
    // trigger download button
    // (set `bubbles` to false here.
    // or just `a.click()` if you don't care about bubbling)
    a.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    }));
  }

export default {
  components: { topbar, keyinput, svg_view, bottombar, buttons },

  data() {
    return {
      menu_sel: "genid"
    }
  },

  mounted() {
  },

  methods: {

    downloadSVG() {
      const svgNode = document.querySelector('svg');
      const svgString = (new XMLSerializer()).serializeToString(svgNode);
      const svgBlob = new Blob([svgString], {
        type: 'image/svg+xml;charset=utf-8'
      });
    
      const DOMURL = window.URL || window.webkitURL || window;
      const url = DOMURL.createObjectURL(svgBlob);
    
      const image = new Image();
      image.width = svgNode.width.baseVal.value;
      image.height = svgNode.height.baseVal.value;
      image.src = url;
      image.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
      
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
      
        const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
          
        console.log(canvas.toDataURL('image/png'))
        triggerDownload(imgURI);
      };
    },

    menuChange(selected) {
      this.menu_sel = selected
    },

    codeChange(code) {

    },

    keyChanged(key) {
      this.$refs.svg_view_ref.refresh(key)
    }
  },

}

</script>
<style></style>