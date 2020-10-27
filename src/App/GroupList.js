import React, { Component } from 'react';
import './GroupList.scss';

class GroupList extends Component {
    getGroupList = () => {
        fetch('http://localhost:8080/groupList', {
            method: "GET",
        })
        .then(response => {
            if (response.status === 200) {
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
