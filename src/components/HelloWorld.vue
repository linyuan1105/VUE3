<template>
<div>
 <button  @click="add">{{Btn}}</button>
 <parent v-my-directive.lazy="directive()" />
 <children />
 <extend />
</div>
</template>

<script>
import extend from './extend'
import parent from './parent'
import children from './children'
export default{
    inject:['ex'],
    provide:{
        USER:{
            NAME:'PROVID'
        }
    },
    extends: {children},
    components: { parent, children, extend},
    config:{
        silent: true,
        devtools: false
    },
    data(){
        return {
            Btn: 'Btn'
        }
    },
    mounted(){
    },
    methods:{
        directive(){
            return this.Btn
        },
        add(){
            this.Btn = 'btn'
            console.log(this,this.num)
        }
    }
}
</script>
