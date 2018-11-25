<template>
  <md-content md-tag="section" id="reports" class="content">
    <div class="container container-papa">
      <md-content class="md-scrollbar cartas">
        <md-card class="content-card " v-for="report in reports" :key="report.idReport">
          <md-card-header>
            <md-card-header-text class="header">
              <div class="md-title">{{ report.title }}</div>
              <div class="md-subhead">{{ report.date }}</div>
            </md-card-header-text>
            <md-card-media>
              <img v-bind:src="`${report.picture }`" alt="People">
            </md-card-media>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <md-card-expand-trigger>
                <md-button class="md-icon-button ">↓</md-button>
              </md-card-expand-trigger>
            </md-card-actions>
            <md-card-expand-content>
              <md-card-content>{{ report.description }}</md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </md-content>

      <div class="container-mapa">Soy un mapa</div>
    </div>
  </md-content>
</template>


<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>