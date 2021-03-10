<template>
  <v-dialog v-model="dialogSelf" persistent max-width="600px">
    <v-card>
      <slot></slot>
      <div class="display-flex box-center">
        <div class="confirm-btn no-select close" @click="closeDialog">Close</div>
        <div class="confirm-btn no-select" @click="saveDialog">Save</div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'dialog',
  data () {
    return {
      dialogSelf: false
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  watch: {
    isShow: function (newVal, oldVal) {
      console.log(oldVal, newVal)
      this.dialogSelf = newVal
    }
  },
  methods: {
    saveDialog () {
      this.$emit('saveDialog', 1)
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/main";
  .confirm-btn{
    margin-top: 20px;
    cursor: pointer;
    width: 160px;
    height: 48px;
    background-color: $emColor;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: $colorFFF;
    text-align: center;
    &.close{
      margin-right: 20px;
      background-color: $color999;
      color: $color333;
    }
  }
</style>
