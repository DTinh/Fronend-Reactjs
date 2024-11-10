import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { postVerifyBookAppointment } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';
import './VerifyEmail.scss';
import HomeFooter from './../HomePage/HomeFooter';
class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerity: false,
            errCode: 0
        }
    }
    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');

            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            })
            if (res && res.errCode === 0) {
                this.setState({
                    statusVerity: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerity: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }


        if (this.props.match && this.props.match.params && this.props.match.params) {

        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) { }


    }


    render() {
        let { statusVerity, errCode } = this.state;
        return (
            <>
                <HomeHeader />
                <div className='verify-email'>
                    {statusVerity === false ?
                        <div class="dotted-loader"></div>
                        :
                        <div>
                            {errCode === 0 ?
                                <div className='confirm-succeed'>Xác nhận lịch hẹn thành công!</div>
                                : <div className='confirm-error'>Lịch hẹn không tồn tại hoặc đã được xác nhận</div>
                            }
                        </div>
                    }
                </div>

                <HomeFooter />
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
