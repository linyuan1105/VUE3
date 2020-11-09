<template>
    <div>{{USER}}
        <children />
    </div>
</template>
<script>

import children from './children'
export default {
    provide:{
        ex:{
            name:'ex'
        }
    },
    inject:['USER'],
    components:{children},
    mounted(){
    }
}
</script>