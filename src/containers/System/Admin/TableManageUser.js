import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as action from "../../../store/actions";

// import '../System/';
class TableManageUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux(); // fire 1 action cua redux
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }
    render() {
        // console.log("check all users: ", this.props.listUsers);
        // console.log("check state: ", this.state.usersRedux);

        let arrUsers = this.state.usersRedux;
        return (

            <table id='TableManageUser'>
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'

                                        ><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'
                                            onClick={() => this.handleDeleteUser(item)} //item là biến object lưu thông tin của người dùng
                                        >
                                            <i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users, //hung user
    };
};

const mapDispatchToProps = dispatch => { //map action vap ben trong props
    return {
        fetchUserRedux: () => dispatch(action.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(action.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
