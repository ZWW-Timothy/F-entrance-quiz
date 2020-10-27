import React, { Component } from 'react';
import './MemberList.scss';

class MemberList extends Component {
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
