import React, { Component } from 'react';
import './MemberList.scss';
// TODO GTB-工程实践: - 每个组件应该使用一个独立的文件夹把跟这个组件相关的文件包起来
class MemberList extends Component {
    // TODO GTB-知识点: - state应该被放到constructor里面
    state = {
        memberList: [],
    }

    componentDidMount = () => {
        this.getMemberList();
    };

    getMemberList = () => {
        fetch('http://localhost:8080/memberList', {
            method: "GET",
        })
            // TODO GTB-工程实践: - ESLint错误需要fix
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('Fail');
            }
        })
        .then(responseJson => {
            this.setState({
                memberList: responseJson,
            });
        });
    }

    render() {
        return (
          <div className="member-list">
            <section className="member-list-header">
                <h1>学员列表</h1>
            </section>
            <section className="member-list-body">
                {this.state.memberList.map((member, index) => (
                    // TODO GTB-知识点: - key需要是稳定的，唯一的
                    <span className="member" key={index}>
                        {`${this.state.memberList[index].memberId}. ${this.state.memberList[index].memberName}`}
                    </span>
                ))}
            </section>
          </div>
        );
      }
}

export default MemberList;
