<link rel="stylesheet" href="https://use.typekit.net/ayh3ibg.css"></link>
<template>
  <div class="">
    <topbar/>
    <section class="h-full @light:text-gray-600 @dark:text-white body-font @dark:bg-gray-600 @light:bg-white">
      <div class="container py-10 md:w-[1000px">
        <keyinput @keyChanged="keyChanged"/>
        <div class="flex">
          <svg_view ref="svg_view_ref" />
          <div class="h-[500px] my-3 grid place-content-around">
            <button class="transition bg-[#1D1D1B] hover:bg-[#834FBA] p-4 h-full rounded-2xl" v-on:click="newBtValue('qua')">Fundo quadriculado</button>
            <button class="transition bg-[#1D1D1B] hover:bg-[#834FBA] p-4 h-full rounded-2xl" v-on:click="newBtValue('lis')">Fundo listrado</button>
            <button class="transition bg-[#1D1D1B] hover:bg-[#834FBA] p-4 h-full rounded-2xl" v-on:click="newBtValue('col')">Monstro colorido</button>
            <button class="transition bg-[#1D1D1B] hover:bg-[#834FBA] p-4 h-full rounded-2xl" v-on:click="newBtValue('cir')">Fundo circular</button>
          </div>
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
export var btValue = null

export default {
  components: { topbar, keyinput, svg_view, bottombar },

  data() {
    return {
      menu_sel: "genid"
    }
  },

  mounted() {

  },

  methods: {

    newBtValue(string){
      btValue = string
      console.log(btValue)
      return btValue
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