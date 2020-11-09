<template>
<h1>
    {{USER}}{{ex}}PPPPPPPP
 <button @click="parent">parent</button>
 <children ref="children" :name="name" class="parent"/>
<extend />
</h1>
</template>
<script>
import extend from './extend'
import children from './children'
export default{
    components: { children,extend },
    inject: ['USER','ex'],
    data(){
        return {
            USER: this.USER,
            name:'ParentName'
        }
    },
    methods:{
        parent(){
            console.log(this)
            console.log(this.$refs)
            console.log(this.$)
        }
    }
}
</script>