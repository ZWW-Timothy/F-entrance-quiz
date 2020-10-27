import React, { Component } from 'react';
import './GroupList.scss';

class GroupList extends Component {
    getGroupResult = () => {
        fetch('http://localhost:8080/group', {
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
            <h1>分组列表</h1>
            <button className="button-group" onClick={() => this.getGroupResult()}>分组学员</button>
          </div>
        );
      }
}

export default GroupList;
