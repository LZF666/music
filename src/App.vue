<template>
  <div id="app">
      <top></top>
      <tab></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <player></player>
  </div>
</template>

<script>
import Top from 'components/top/top'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  components: {
    Top,
    Tab,
    Player
  }
}
</script>