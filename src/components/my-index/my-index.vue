<template>
  <transition name="slide">
    <div class="wrapper">
        <div class="icon">
          <!-- <h1 class="text">毕业设计</h1> -->
          <i class="icon-left" @click="back"></i>
        </div>
      <div class="footer">
        <span class="copy">&copy;2018 云南大学 数字媒体技术 刘子釜</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.wrapper
  background $color-background-c
  position fixed
  top 0
  bottom 0
  z-index 100
  width 100%
  background-size cover
  bg-image('index')
  &.slide-enter-active, &.slide-leave-active
    transition all 0.3s
  &.slide-enter, &.slide-leave-to
    transform translate3d(-100%, 0, 0)
  .icon
    position fixed
    top 0
    height 44px
    width 100%
    // background $color-text-d
    z-index 100
    text-align center
    .text
      display inline-block
      vertical-align middle
      margin-top 15px
      font-size $font-size-large-x
    .icon-left
      position absolute
      top 0
      right 6px
      font-size $font-size-large-x
      display block
      padding 12px
      color $color-text-g
      transform rotate(180deg)
  .footer
    position absolute
    right 10px
    left 10px
    bottom 5px
    text-align center
    font-size $font-size-medium
    color $color-text-g
    z-index 100

</style>
