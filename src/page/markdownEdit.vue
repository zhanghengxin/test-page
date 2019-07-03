<template>
    <mavonEditor ref="md" v-model="text" @imgAdd="$imgAdd">
    </mavonEditor>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    name: 'markdown-edit-page',
    components: {
        mavonEditor
    },
    data(){
        return {
            // data: '123'
            text: '123'
        }
    },
    watch:{
        "text"(data){
            // console.log(data)
            this.$emit('input', data)
        }
    },
    computed:{
        // text(val){
        //     this.$emit('value', val)
        // }
    },
    methods: {
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            formdata.append('image', $file);
            // console.log(formdata)
            this.http({
                url: 'http://0.0.0.0:3000/createImg',
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((result) => {
                // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                /**
                 * $vm 指为mavonEditor实例，可以通过如下两种方式获取
                 * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
                 * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
                 */
                // console.log(__dirname)
                // let a = require(result.data.url)
                // import a from result.data.url
                this.$refs.md.$img2Url(pos, result.data.url);
            })
        }
    }
}
</script>
