<template>
  <div class="">
    <topbar/>
    <section class="h-full @light:text-gray-600 @dark:text-white body-font @dark:bg-[#1d1d1b] @light:bg-white">
      <div class="container py-10 mx-auto w-full md:w-1/2">
        <div class="">
          <keyinput @keyChanged="keyChanged"/>
          <svg_view ref="svg_view_ref" />
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

    menuChange(selected) {
      this.menu_sel = selected
    },

    codeChange(code) {

    },

    keyChanged(key) {
      this.$refs.svg_view_ref.refresh(key)
      //console.log("keyChanged");
    }
  },
}
</script>
<style></style>