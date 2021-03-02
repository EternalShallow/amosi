<template>
  <div class="reward-box">
    <div class="user-info center-width">
      <div class="avatar-img"><img src="../../assets/image/logo@2x.png" alt=""></div>
      <div class="user-name">BONDING</div>
      <div class="balance-list display-flex box-center-Y">
        <div class="balance-item">
          <div class="title">Your Transferrable <br>
               GlC Holdings</div>
          <div class="amount">3345</div>
        </div>
        <div class="balance-item">
          <div class="title">Your Staked Hegic</div>
          <div class="amount">345</div>
        </div>
        <div class="balance-item">
          <div class="title">Current HEGIC Price</div>
          <div class="amount">$3345</div>
        </div>
        <div class="balance-item">
          <div class="title">Total USD Value</div>
          <div class="amount">21312</div>
        </div>
      </div>
    </div>
    <div class="interface-box center-width display-flex box-center-start">
      <div class="sub-title-box">
        <div class="display-flex box-center-end">
          <div class="line1"></div>
          <div class="box-flex1 line2"></div>
        </div>
        <div class="text1">CHOOSE THE</div>
        <div class="text2">INTERFACE</div>
        <div class="text3">THAT YOU WANT TO</div>
        <div class="text4">NTERACT <span>WITH</span></div>
      </div>
      <div class="con-box box-flex1">
        <div class="interface-tab display-flex box-center-Y">
          <div class="interface-tab-item no-select" @click="changeInterfaceTab(i)" :class="{active: interfaceList.index === i}" v-for="(v, i) in interfaceList.list" :key="`interface-list-${i}`" v-html="v"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "index";
</style>
