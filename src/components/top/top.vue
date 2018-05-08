<template>
  <div class="top">
    <router-link class="icon" tag="div" to="/my">
      <i class="icon-music"></i>
    </router-link>
    <h1 class="text">幻音宝盒</h1>
    <router-link to="/user" class="user" tag="div">
    <i class="icon-singer"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.top
  position relative
  height 44px
  text-align center
  color $color-text
  font-size 0px
  .icon
    position absolute
    top 0
    left 10px
    .icon-music
     display block
     padding 12px
     font-size $font-size-large-x
     color $color-text-a
  .text
    display inline-block
    vertical-align middle
    margin-top 16.5px
    font-size $font-size-large-x
  .user
    position absolute
    top 0
    right 10px
  .icon-singer
    display block
    padding 12px
    font-size $font-size-large-x
    color $color-text
</style>