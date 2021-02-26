<template>
  <div class="contract-box">
    <a style="color: #008A5E" :href="`https://etherscan.io/address/${account}`" target="view_window" v-if="account">Connected Web3[{{account}}]</a>
    <v-btn v-else large color="error" @click="connectWallet">Connect Web3 wallet</v-btn>
    <v-tabs
      v-model="tab"
      centered
    >
      <v-tab
        v-for="n in tabs"
        :key="n"
      >
        {{ n }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(v,i) in read_contract"
              :key="i"
            >
              <v-expansion-panel-header>{{i+1}}. {{v.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <form  v-if="v.inputs.length > 0">
                  <v-container>
                    <v-row v-for="(vi, in1) in v.inputs" :key="`vinputs${v.name}${vi.name}${in1}`">
                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-text-field
                          v-model="vi.value"
                          :label="`${vi.name}(${vi.type})`"
                          :placeholder="`${vi.name}(${vi.type})`"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      class="mr-4"
                      @click="submitQuery(v, i)"
                    >
                      Query
                    </v-btn>
                    <div v-if="v.value !== ''">[ {{v.name}} method Response ]</div>
                    <div v-if="v.value !== ''">{{v.outputs.length > 0 ? (v.outputs[0].type + ' :') : ''}}  {{v.value}}</div>
                  </v-container>
                </form>
                <div v-else>{{v.value}} {{v.outputs.length > 0 ? ('(' + v.outputs[0].type + ')') : ''}}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(v,i) in write_contract"
              :key="i"
            >
              <v-expansion-panel-header>{{i+1}}. {{v.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <form>
                  <v-container>
                    <v-row v-for="(vi, in1) in v.inputs" :key="`vinputs${v.name}${vi.name}${in1}`">
                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-text-field
                          v-model="vi.value"
                          :label="`${vi.name}(${vi.type})`"
                          :placeholder="`${vi.name}(${vi.type})`"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      class="mr-4"
                      @click="submit(v)"
                    >
                      Write
                    </v-btn>
                  </v-container>
                </form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
.contract-box{
  padding: 50px;
}
</style>
