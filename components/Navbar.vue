<template>
<div>
  <above-bar></above-bar>
  <nav class="navbar">
    <nuxt-link class="navbar-brand" id="logo" to="/">
      <!-- <img src="/ben_logo.png" alt="Ben Powerwashing Logo"> -->
      <h1>Benjamin Paul's <br> Pressure Washing</h1>
    </nuxt-link>
    <div class="container">
      <div class="row">
        <div class="text-center col-md-12">
          <ul id="nav">
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/estimate">Estimate</nuxt-link>
            </li>
          </ul><!--/#nav-->
        </div><!--/.text-center.col-md-12-->
      </div><!--/.row-->
    </div><!--/.container-->
  </nav>
</div>
</template>

<script>
import AboveBar from '~/components/AboveBar';
export default {
  components: {
    AboveBar
  }
}
</script>


<style>
.navbar {
  position:relative;
}
#logo {
  position: absolute;
}
#logo img {
  width: 179px;
}
</style>

