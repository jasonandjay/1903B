<template>
  <div class="app-container">
    <el-form ref="searchForm" :inline="true" :model="search">
      <el-form-item label="名称" prop="name">
        <el-input v-model="search.name" placeholder="请输入页面名称" />
      </el-form-item>
      <el-form-item label="路径" prop="path">
        <el-input v-model="search.path" placeholder="请输入页面路径" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="search.status">
          <el-option value="publish" label="已发布" />
          <el-option value="draft" label="草稿" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <section class="action">
      <div>
        <p v-show="showAction">
          <el-button>发布</el-button>
          <el-button>下线</el-button>
          <el-button type="danger">删除</el-button>
        </p>
      </div>
      <div>
        <el-button type="primary">新建</el-button>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="reload"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          @click="submitForm"
        >
          <path
            d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"
          />
        </svg>
      </div>
    </section>

    <el-table
      v-loading="loading"
      :data="pageList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="name" label="名称" width="300" />
      <el-table-column prop="path" label="路径" width="120" />
      <el-table-column prop="order" label="顺序" width="100" />
      <el-table-column prop="views" label="阅读量" width="100" />
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          <p>{{ scope.row.status === "draft" ? "草稿" : "已发布" }}</p>
        </template>
      </el-table-column>
      <el-table-column label="发布时间">
        <template slot-scope="scope">
          <p>{{ scope.row.publishAt | formatDate }}</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick(scope.row)"
          >查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      search: {
        name: '',
        path: '',
        status: ''
      },
      page: 1,
      loading: false,
      showAction: false
    }
  },
  computed: {
    ...mapState({
      pageCount: (state) => state.page.pageCount,
      pageList: (state) => state.page.pageList
    })
  },
  created() {
    this.submitForm()
    console.log('this...', this);
  },
  methods: {
    ...mapActions({
      getViewPage: 'page/getViewPage'
    }),
    handleSelectionChange(selection) {
      this.showAction = !!selection.length
      console.log('arguments...', arguments)
    },
    async submitForm() {
      this.loading = true
      const options = {}
      for (const key in this.search) {
        this.search[key] && (options[key] = this.search[key])
      }
      await this.getViewPage({ page: this.page, ...options })
      this.loading = false
    },
    resetForm() {
      this.$refs.searchForm.resetFields()
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.page = val
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin-right: 15px;
  }
  div {
    font-size: 0;
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 16px;
  }
  margin: 10px 0;
}
</style>
