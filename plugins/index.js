import Vue from 'vue'
import API from '../api/http'
import yHeader from '../components/yHeader'
import yNumberInput from '../components/yNumberInput'
import yBtn from '../components/yBtn'
import MessageBox from '../components/confirmBox/confirm'
import ToastBox from '../components/toastBox/toast'
import LoadMore from '../components/loadmoreBox/loadMore'
const lang = require('../lang/zn.json')
Vue.component('y-loadmore', LoadMore)
Vue.component('y-header', yHeader)
Vue.component('y-btn', yBtn)
Vue.component('y-number-input', yNumberInput)
Vue.use(MessageBox)
Vue.use(ToastBox)
Vue.prototype.$get = API.getJson
Vue.prototype.$post = API.postJson
Vue.prototype.$lang = lang
Vue.use(API)
