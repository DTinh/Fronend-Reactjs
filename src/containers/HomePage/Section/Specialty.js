import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

import xuongkhop from '../../../assets/specialty/xuong-khop.png';

import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';

class Specialty extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'>Chuyên khoa phổ biến </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>

                    <Slider {...this.props.settings}>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Cơ xương khớp</div>
                        </div>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Thần kinh</div>
                        </div>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Tiêu hóa</div>
                        </div>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Tim mạch</div>
                        </div>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Tai mũi họng</div>
                        </div>
                        <div className='img-customize'>
                            <img src={xuongkhop} className='image-section' />
                            <div className='title-section'>Cột sống</div>
                        </div>
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
