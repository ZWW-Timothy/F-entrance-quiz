import React, { Component } from 'react';
import './GroupList.scss';
// TODO GTB-工程实践: - 每个组件应该使用一个独立的文件夹把跟这个组件相关的文件包起来
class GroupList extends Component {
    // TODO GTB-工程实践: - API请求应该被抽取到一个单独的文件
    getGroupList = () => {
        fetch('http://localhost:8080/groupList', {
            method: "GET",
        })
        .then(response => {
            if (response.status === 200) {
                // TODO GTB-工程实践: - console.log不应该被提交上去
                console.log('Success')
            } else {
                console.log('Fail')
            }
        })
    }

    render() {
        return (
          <div className="group-list">
            <section className="group-list-header">
                <h1>分组列表</h1>
                <button onClick={() => this.getGroupList()}>分组学员</button>
            </section>
            
          </div>
        );
      }
}

export default GroupList;
