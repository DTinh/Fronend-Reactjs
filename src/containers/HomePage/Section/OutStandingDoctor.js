import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import anh1 from '../../../assets/medical-facility/anviet1.jpg';
import anh2 from '../../../assets/medical-facility/hinh2.png';

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua  </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>

                    <Slider {...this.props.settings}>
                        <div className='img-customize outstanding-doctor'>
                            <div className='img-doctor'>
                                <div className='section-outstanding-doctor'></div>
                            </div>
                            <div className='title-section'>TS. BS Lê Thị Phương Thảo</div>
                            <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                        </div>
                        <div className='img-customize outstanding-doctor'>
                            <div className='img-doctor'>
                                <div className='section-outstanding-doctor'></div>
                            </div>
                            <div className='title-section'>TS. BS Lê Thị Phương Thảo</div>
                            <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                        </div>
                        <div className='img-customize outstanding-doctor'>
                            <div className='img-doctor'>
                                <div className='section-outstanding-doctor'></div>
                            </div>
                            <div className='title-section'>TS. BS Lê Thị Phương Thảo</div>
                            <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                        </div>
                        <div className='img-customize outstanding-doctor'>
                            <div className='img-doctor'>
                                <div className='section-outstanding-doctor'></div>
                            </div>
                            <div className='title-section'>TS. BS Lê Thị Phương Thảo</div>
                            <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                        </div>
                        <div className='img-customize outstanding-doctor'>
                            <div className='img-doctor'>
                                <div className='section-outstanding-doctor'></div>
                            </div>
                            <div className='title-section'>TS. BS Lê Thị Phương Thảo</div>
                            <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
