<template>
  <el-row class="home" :getter="20">
    <el-col :spam="8" style="margin-top:20px;" class="one">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" alt="" class="user"/>
          <div class="user-info">
            <p class="user-info-admin">Admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2025-10-23</span></p>
          <p>上次登录地点:<span>中山</span></p>
          <p></p>
        </div>
      </el-card>

       <el-card shadow="hover" class="user-table">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >

          </el-table-column>
        </el-table>
      </el-card>

    </el-col>
    <el-col :span="16" style="margin-top:20px;">
      <div class="num">
            <el-card
          :body-style = "{display:'flex',padding:0}"
          v-for="item in countData"
          :key="item.name"
          >
            <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
            <div class="detail">
              <p class="nump">${{ item.value }}</p>
              <p class="txt">${{ item.name }}</p>
            </div>
          </el-card>
      </div>
      <el-card class="top-echart">
          <div ref="echart" style="height: 280px;"></div>
      </el-card>
      
      <div class="graph">
        <el-card>
          <div ref="userEchart" style="height: 240px;"></div>
        </el-card>
         <el-card>
          <div ref="videoEchart" style="height: 240px;"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script setup name='Home'>
import { ref ,getCurrentInstance , onMounted , reactive} from 'vue'
import * as echarts from 'echarts'

const {proxy} = getCurrentInstance()


const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href
}

const tableData = ref([])
const countData = ref([])
const chartData = ref([])
const observer = ref(null)
const tableLabel = ref({
  name:'课程',
  todayBuy:'今日销量',
  monthBuy:'月销量',
  totalBuy:'总销量'
})

const xOptions =reactive({
  textStyle:{
    color:'#333'
  },
  legend:{},
  grid:{
    left:'20%'
  },
  tooltip:{
    trigger:'axis'
  },
  xAxis:{
    type:'category',
    data:[],
    axisLine:{
      lineStyle:{
        color:'#17b3a3'
      }
    },
    axisLabel:{
      interval:0,
      color:'#333'
    }
  },
  yAxis:[
    {
    type:'value',
    axisLine:{
      lineStyle:{
      color:'#17b3a3'
        },
      },
    },
  ],
  color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa'],
  series:[],
})

const pieOptions = reactive({
  tooltip:{
    trigger:'item'
  },
  legend:{  },
  color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa'],
  series:[]
})

const getTableData =async ()=>{
  const data = await proxy.$api.getTableData()
  // console.log(data);
  tableData.value = data.tableData
}
const getCountData =async ()=>{
  const data = await proxy.$api.getCountData()
  // console.log(data);
  countData.value = data
}
const getChartData = async () => {
  const {orderData, userData,videoData} = await proxy.$api.getChartData()
  console.log(orderData);
  xOptions.xAxis.data = orderData.date
  xOptions.series = Object.keys(orderData.data[0]).map(val => ({
    name: val,
    data: orderData.data.map(item => item[val]),
    type: 'line'
  }))
  const oneEchart = echarts.init(proxy.$refs['echart'])
  oneEchart.setOption(xOptions)

  xOptions.xAxis.data = userData.map(item => item.data)
  xOptions.series = [
    {
      name:'新增用户',
      data:userData.map(item => item.new),
      type:'bar'
    },
    {
      name:'活跃用户',
      data:userData.map(item => item.active),
      type:'bar'
    },
  ]
  const twoEchart = echarts.init(proxy.$refs['userEchart'])
  twoEchart.setOption(xOptions)

  pieOptions.series = [
    {
      data:videoData,
      type:'pie'
    },
  ]
  const threeEchart = echarts.init(proxy.$refs['videoEchart'])
  threeEchart.setOption(pieOptions)

  //监听页面变化
  observer.value = new ResizeObserver((en)=>{
    oneEchart.resize()
    twoEchart.resize()
    threeEchart.resize()
  })

  //容器存在
  if(proxy.$refs['echart']){
    observer.value.observe(proxy.$refs['echart'])
  }
}

onMounted(() => {
  try {
    // 原mounted逻辑
    getTableData(),
    getCountData(),
    getChartData()
  } catch (error) {
    console.error('mounted钩子执行错误:', error)
  }
})
</script>


<style scoped lang="less">
  .home {
    height: 100%;
    overflow: hidden;
    .user {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      img{
        width: 150px;
        height: 150px;
        border-radius: 25%;
        margin-right: 40px;

      }
      .user-info{
          p{
              line-height: 40px;
          }
          .user-info-admin{
              font-size: 30px;
              color: #333;
          }
          .user-info-p{
            color: #999;
          }
      }
    }
    .login-info{
      p{
        line-height: 30px;
        font-size: 14px;
        color: #999;
        span{
          color: #666;
          margin-left: 60px;
        }
      }
      
    }
    .user-table{
      margin-top: 20px;

    }
    .num{
      display: flex;
      flex-wrap:wrap ;
      justify-content: space-between;
      margin-left: 20px;
       .el-card{
        width: 32%;
        margin-bottom: 20px;
       }
       .icons{
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
      }
       .detail{
        margin-left:15px ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .nump{
          font-size: 20px;
          margin-bottom: 10px;
        }
        .txt{
          font-size: 15px;
          text-align: center;
          color: #999;
        }
       }
    }
    .graph{
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      .el-card{
        width: 48%;
        height: 260px;

      }
    }
    .top-echart{
      margin-left: 20px;
    }

  }
  .el-card{
    width: 100%;
    // height: 50%;
    background-color: #fff;
    border-radius: 10px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  }
  .el-row{
    display: flex;
    // align-items: center;
  }
  // .el-col el-col-24{
  //   width: 250px;
  // }
  .one{
    width: 1000px;
    flex: 0 0 0;
  }

</style>