<template>
<div>{{name}}
{{age}}
 <button @click="children">children</button>
 <button @keyup.v="vMethods">v</button>
</div>
</template>
<script>
export default{
    props:{
        name:{
            type: String,
            default: ()=>'name',
            required: false
        }
    },
    config:{
        ignoredElements: [  // 使 Vue 忽略在 Vue 之外的自定义元素  (e.g. 使用了 Web Components APIs)
            'my-component'
        ],
        productionTip:false, //设置为 false 以阻止 vue 在启动时生成生产提示。
        performance:true,
        keyCodes:{  // 给 v-on 自定义键位别名。
            v:86
        },
        silent: true, // 取消 Vue 所有的日志与警告。
        devtools: false, //配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
        warnHandler(msg,vm,trace){ //为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。
            console.log(msg,vm,trace)
        }
    },
    data(){
        return {
            age: '25'
        }
    },
    methods:{
        vMethods(){
            console.log('v')
        },
        children(){
            console.log(this)
            console.log(this.$)
        }
    }
}
</script>