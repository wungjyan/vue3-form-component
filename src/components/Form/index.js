import Input from '../Input.vue'
import FormItem from '../FormItem.vue'
import Form from '../Form.vue'

export default {
    install(app) {
        app.component(Input.name, Input)
        app.component(FormItem.name, FormItem)
        app.component(Form.name, Form)
    }
}