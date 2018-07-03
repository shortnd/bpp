<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/Navbar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.lightest-blue-background {
  background: #00a6fb;
}
.lightest-blue-text {
  color: #00a6fb;
}
.light-blue-background {
  background: #0582CA;
}
.light-blue-text {
  color: #0582ca;
}
.blue-background {
  background: #006494;
}
.blue-text {
  color: #006494;
}
.dark-blue-background {
  background: #003554;
}
.dark-blue-text {
  background: #003554;
}
.darkest-blue-background {
  background: #051923;
}
.darkest-blue-text {
  color: #051923;
}
</style>

