import Vue from 'vue'
import './element'
import promiseFinally from 'promise.prototype.finally'
import eventBus from './eventBus'

promiseFinally.shim()
Vue.use(eventBus)
