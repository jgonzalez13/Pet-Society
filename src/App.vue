<template>
  <div id="app">
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Pet Society</h3>
      <md-button class="md-primary">Reportes</md-button>
      <md-button class="md-primary">Zonas</md-button>
      <md-button class="md-primary">Acerca de</md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
