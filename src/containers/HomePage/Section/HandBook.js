import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

import handbook from '../../../assets/handbook/hb1.png';

import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';

class HandBook extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }
    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'>Cẩm nang </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className='img-customize'>
                            <img src={handbook} className='image-section handbook ' />
                            <div className='title-section'>BookingCare ra mắt Trợ lý AI - Bước tiến mới trong chăm sóc sức khỏe với trí tuệ nhân tạo</div>
                        </div>
                        <div className='img-customize'>
                            <img src={handbook} className='image-section handbook' />
                            <div className='title-section'>BookingCare ra mắt Trợ lý AI - Bước tiến mới trong chăm sóc sức khỏe với trí tuệ nhân tạo</div>
                        </div>
                        <div className='img-customize'>
                            <img src={handbook} className='image-section handbook' />
                            <div className='title-section'>BookingCare ra mắt Trợ lý AI - Bước tiến mới trong chăm sóc sức khỏe với trí tuệ nhân tạo</div>
                        </div>
                        <div className='img-customize'>
                            <img src={handbook} className='image-section handbook' />
                            <div className='title-section'>BookingCare ra mắt Trợ lý AI - Bước tiến mới trong chăm sóc sức khỏe với trí tuệ nhân tạo</div>
                        </div>
                        <div className='img-customize'>
                            <img src={handbook} className='image-section handbook' />
                            <div className='title-section'>BookingCare ra mắt Trợ lý AI - Bước tiến mới trong chăm sóc sức khỏe với trí tuệ nhân tạo</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
