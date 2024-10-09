import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';
import vtv from '../../../assets/about/vtv1.png';

class About extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="587" height="330"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>
                        <div className='child-right'>
                            <img src={vtv} />
                        </div>

                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => { //map state cua redux vao   , map state cua redux cho vao react
    /**react co the lay cac bien state thong qua this.props */
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
