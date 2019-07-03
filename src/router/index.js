import vue from 'vue'
import router from 'vue-router'
// import edit from '../page/markdownEdit.vue'
import edit from '../page/edit.vue'

vue.use(router)

export default new router({
    routes: [
        {
            path: '/edit/:path',
            component: edit,
            props: true
        },
        {
            path: '*',
            redirect: '/edit/1'
        }
    ]
})
