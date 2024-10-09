import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import anh1 from '../../../assets/medical-facility/anviet1.jpg';
import anh2 from '../../../assets/medical-facility/hinh2.png';
class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facilty'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'>Cơ sở y tế nổi bật  </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>

                    <Slider {...this.props.settings}>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh1} className='image-section ' />
                            </div>
                            <div className='title-section'>Bệnh viện Đa khoa An Việt</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh2} className='image-section ' />
                            </div>
                            <div className='title-section'>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh1} className='image-section ' />
                            </div>
                            <div className='title-section'>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh1} className='image-section ' />
                            </div>
                            <div className='title-section'>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh1} className='image-section ' />
                            </div>
                            <div className='title-section'>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-medical'>
                                <img src={anh1} className='image-section ' />
                            </div>
                            <div className='title-section'>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
