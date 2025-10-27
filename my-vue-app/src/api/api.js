// 整个项目的api的统一管理

import request from "./reques";

export default {
  getTableData(){
    return request({
      url:'/home/getTableData',
      method:'get',
      // mock: true,
    });
  },
  getCountData(){
    return request({
      url:'/home/getCountData',
      method:'get',
      // mock: true,
    });
  },  
  getChartData(){
    return request({
      url:'/home/getChartData',
      method:'get',
      // mock: true,
    });
  },
  getUserData(data){
    return request({
      url:'/home/getUserData',
      method:'get',
      // mock: true,
      data,
    });
  },
  deleteUser(data){
    return request({
      url:'/user/deleteUser',
      method:'get',
      // mock: true,
      data,
    });
  },
  addUser(data){
    return request({
      url:'/user/addUser',
      method:'post',
      // mock: true,
      data,
    });
  },
  editUser(data){
    return request({
      url:'/user/editUser',
      method:'post',
      // mock: true,
      data,
    });
  },
  getMenu(params){
    return request({
      url:'/premission/getMenu',
      method:'post',
      data: params,
    })
  }
};