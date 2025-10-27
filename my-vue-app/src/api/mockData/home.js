export default {
  getTableData:()=>{
    return {
      code : 200,
      data:{
        tableData: [
          {
            name:'oppo',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          },
          {
            name:'vivo',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          },
          {
            name:'苹果',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          },
          {
            name:'小米',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          },{
            name:'三星',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          },
          {
            name:'魅族',
            todayBuy: 100,
            monthBuy: 700,
            totalBuy: 800,
          }

        ]
      }
    }
  },
  getCountData:()=>{
    return {
      code : 200, 
      data:[
        {
          name:'今日支付订单',
          value:100,
          icon:'success',
          color:'#2d8cf0'
        },
        {
          name:'今日收藏订单',
          value:100,
          icon:'success',
          color:'#64d572'
        },
        {
          name:'今日未支付订单',
          value:100,
          icon:'success',
          color:'#f25e43'
        },
        {
          name:'本月支付订单',
          value:100,
          icon:'success',
          color:'#ff9900'
        },
        {
          name:'本月收藏订单',
          value:100,
          icon:'success',
          color:'#ed3f14'
        },
        {
          name:'本月未支付订单',
          value:100,
          icon:'success',
          color:'#19be6b'
        },
      ],
    }
  },
  getChartData:()=>{
    return {
      code : 200,
      data:{
        orderData:{
          date:[
            '2021-01-01',
            '2021-01-02',
            '2021-01-03',
            '2021-01-04',
            '2021-01-05',
            '2021-01-06',
            '2021-01-07',
          ],
          data:[
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
            {
                苹果:3839,
                小米:2341,
                三星:3254,
                索尼:6423,
                魅族:3241,
                华为:3254,
            },
          ],
        },
        videoData:[
          { name: '小米', value: 100 },
          { name: '苹果', value: 200 },
          { name: '华为', value: 300 },
          { name: '三星', value: 400 },
          { name: '魅族', value: 500 },
          { name: '索尼', value: 600 },
        ],
        userData:[
          { data: '周一', value: 100 },
          { data: '周二', value: 200 },
          { data: '周三', value: 300 },
          { data: '周四', value: 400 },
          { data: '周五', value: 500 },
          { data: '周六', value: 600 },
          { data: '周日', value: 700 },
        ]
      }
    }
  }
}