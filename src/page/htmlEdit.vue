<template>
    <VueEditor v-model="data">
    </VueEditor>
</template>
<script>
import {VueEditor} from 'vue2-editor'

export default {
    name: 'edit-page',
    components: {
        VueEditor
    },
    data(){
        return {
            data: ''
        }
    },
    watch:{
        "data": (data)=>{
            window.console.log(data)
        }
    }
}
</script>
