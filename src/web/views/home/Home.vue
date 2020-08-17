<template>
  <div>
    <!-- <div class="app-section">
      <div class="app-section__header">
        <h2>日访问量</h2>
      </div>
    </div>
    <div class="app-section">
      <div class="app-section__header">
        <h2>运行天数</h2>
      </div>
    </div> -->
    <div class="app-section">
      <div class="app-section__header">
        <h2>时间轴</h2>
      </div>
      <div class="app-section__content">
        <el-timeline>
          <el-timeline-item
            v-for="activity in activities"
            :key="activity.timestamp"
            :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activities: [
        {
          timestamp: '2020.08',
          content: 'waiting for edit...'
        },
        {
          timestamp: '2020.09',
          content: 'waiting for edit...'
        },
        {
          timestamp: '2020.10',
          content: 'waiting for edit...'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
