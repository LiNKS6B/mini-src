<!-- 页面主入口 -->
<template>
<div class="app-layout app-layout--main">
  <Header></Header>
  <el-menu
    class="app-menu"
    :default-active="currentSelect"
    mode="horizontal"
    @select="onMenuSelect">
    <el-menu-item v-for="item in menu" :key="item.menuName" :index="item.menuName">
      <a class="app-menu__link" :href="item.to"></a>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
  <div class="app-layout__view">
    <keep-alive>
      <router-view class="app-page"></router-view>
    </keep-alive>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import menu from './menu'

const routeMap = {} // menuName -> to
menu.forEach(item => { routeMap[item.menuName] = item.to })

export default {
  data() {
    return {
      menu: Object.freeze(menu),
      currentSelect: ''
    }
  },
  components: {
    Header
  },
  created() {
    this.updateSelectByRoute()
  },
  watch: {
    $route(route) {
      this.updateSelectByRoute(route)
    }
  },
  methods: {
    onMenuSelect(menuName) {
      this.$router.push(routeMap[menuName])
    },
    updateSelectByRoute(route) {
      route = route || this.$route
      let i = -1
      let menuName = this.menu[0].menuName
      const matched = route.matched
      while (++i < matched.length) {
        const target = matched[i].meta.menu
        if (target) {
          menuName = target
          break
        }
      }
      this.currentSelect = menuName
    }
  }
}
</script>

<style lang="scss">
.app-menu {
  &__link {
    display: inline-block;
    width: 0;
    text-indent: -100px;
  }
}
</style>
