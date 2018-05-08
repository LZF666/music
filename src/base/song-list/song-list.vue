<template>
  <div class="song-list">
    <ul class="song-wrapper">
      <li @click="selectItem(song, index)" class="item" v-for="(song, index) in songs" :key="index">
        <div class="rank" v-show="rank">
          <span v-text="getRankText(index)"></span>
        </div>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    songs: {
      type: Array,
      default() {
        return []
      }
    },
    rank: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', item, index)
    },
    getDesc(song) {
      return `${song.singer}·${song.album}`
    },
    getRankText(index) {
      if (index > -1) {
        return index + 1
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.song-list
  .item
    display flex
    align-items center
    box-sizing border-box
    height 64px
    border 1px solid $color-background-c
    border-radius 5px
    padding-left 10px
    margin-bottom 5px
    .rank
      flex 0 0 25px
      width 25px
      margin-right 30px
      text-align center
      color $color-text
      font-size $font-size-medium
    .content
      flex 1
      line-height 20px
      overflow hidden
      .name
        no-wrap()
        color $color-text
        font-size $font-size-medium
      .desc
        no-wrap()
        margin-top 4px
        color $color-text-b
        font-size $font-size-medium
</style>