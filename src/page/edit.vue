<template>
    <div>
        <!-- <b-breadcrumb v-for="item in pathList" :key="item">
            <b-breadcrumb-item v-if="true" :to="'/' + item">{{item}}</b-breadcrumb-item>
        </b-breadcrumb> -->
        <b-breadcrumb>
            <b-breadcrumb-item v-for="item in pathList" :key="item" :to="'/' + item">
                <span slot="appearance">
                    <a v-if="item != 'e'">{{currentPath + item}}</a>
                    <input v-else :value="item"/>
                </span>
                <!-- <input slot="appearance" :value="item"/> -->
            </b-breadcrumb-item>
        </b-breadcrumb>
        <b-button @on-click="save" size="large">保存</b-button>
        <edit v-model="data">
        </edit>
        <!-- <img src="../../docs/img/test001.jpg"/> -->
        <!-- <img src="&/../docs/img/test001.jpg"/> -->
    </div>
</template>
<script>
import edit from './markdownEdit.vue'
import 'mavon-editor/dist/css/index.css'
// import tupian from '#/img/test001.jpg'

export default {
    name: 'edit-page',
    components: {
        edit
    },
    props: [
        "path"
    ],
    watch:{
        "data": (data)=>{
            window.console.log(data)
        },
        // "$route": (to, from)=>{
        //     window.console.log(from)
        //     window.console.log(to)
        //     this.pathList = from.slice().split('/')
        // },
        "path": (val) =>{
            window.console.log(val)
        }
    },
    computed: {
        // path : (val) =>{
        //     window.console.log(val)
        // }
        currentPath(){
            let pathList = this.pathList
            return pathList[pathList.length - 1]
        }
    },
    data(){
        return {
            data: '',
            pathList: ['a', 'b', 'c', 'd', 'e']
        }
    },
    methods: {
        async save(){
            console.log("save")
            // await this.creatFile('../../docs/test2.md', this.data)
            // await this.http.post('http://0.0.0.0:3000/createFile', {
            //     name: `./test${Math.random*100}.md`,
            //     data: this.data
            // }).then((rep)=>{
            //     console.log(rep)
            // }).catch((err)=>{
            //     console.log(err)
            // })
            let that = this
            await this.http({
                method: 'post',
                url: 'http://0.0.0.0:3000/createFile',
                data: {
                    name: `./test${Math.random*100}.md`,
                    data: that.data
                }
            }).then((rep)=>{
                console.log(rep)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getPath(data){
            this.pathList = data
        }
    }
}
</script>
