import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class HomeFooter extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2024 Duy Tính. More infomation, please visit my facebook.
                    <a target='_blank' href='https://www.facebook.com/duytinh1083/'> &#8594; Click here &#8592;</a></p>
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


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
