import Vue from 'vue'
import {
  Button,
  Menu,
  MenuItem,
  Card,
  Dialog,
  Form,
  FormItem,
  Input,
  Pagination,
  Tag,
  Timeline,
  TimelineItem
  // Row,
  // Col
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(TimelineItem)
// Vue.use(Row)
// Vue.use(Col)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 500 }
