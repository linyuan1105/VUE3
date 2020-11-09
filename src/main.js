import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.config.globalProperties={
    num:100
}
app.config.performance = false
app.directive('my-directive', {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的父组件挂载之前调用
    beforeMount() {},
    // 绑定元素的父组件挂载时调用
    mounted(a,b,c,d,e,f,g) {
        console.log(a,'a')
        console.log(b,'b')
        console.log(c,'c')
        console.log(d,'d')
        console.log(e,'e')
        console.log(f,'f')
        console.log(g,'g')
    },
    // 在包含组件的 VNode 更新之前调用
    beforeUpdate(a,b,c) {
        console.log(a,'a')
        console.log(b,'b')
        console.log(c,'c')
    },
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() {},
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() {},
    // 卸载绑定元素的父组件时调用
    unmounted() {}
  })
console.log(app)
app.mount('#app')
// createApp(App).mount('#app')
