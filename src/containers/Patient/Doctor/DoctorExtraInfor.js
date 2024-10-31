import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorExtraInfor.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: true,

        }
    }
    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    showHightDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }

    render() {
        let { isShowDetailInfor } = this.state;
        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>Địa chỉ Khám</div>
                    <div className='name-clinic'>Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê</div>
                    <div className='detail-address'>286 Thụy Khuê, quận Tây Hồ, Hà Nội</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false ?
                        <div className='short-infor'>GIÁ Khám: 300.000đ
                            <span onClick={() => this.showHightDetailInfor(true)}>Xem chi tiết</span>
                        </div>
                        :
                        <>
                            <div className='title-price'>Giá khám </div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>Giá khám</span>
                                    <span className='right'>250.000đ</span>
                                    <div className='note'>Chưa bao gồm chi phí chụp chiếu, xét nghiệm</div>
                                </div>

                            </div>
                            <div className='payment'>Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ</div>

                            <div className='hide-price'>
                                <span onClick={() => this.showHightDetailInfor(false)}>Ẩn bảng giá</span>
                            </div>
                        </>

                    }


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
