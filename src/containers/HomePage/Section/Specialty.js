import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';
import { getAllSpecialty } from '../../../services/userService';
import { withRouter } from 'react-router-dom';

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleViewDetailSpecialty = (specialty) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${specialty.id}`)
        }
    }
    render() {
        let { dataSpecialty } = this.state;
        return (
            <div className='section-share section-specialty'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'><FormattedMessage id="homepage.specialty" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <Slider {...this.props.settings}>

                        {dataSpecialty && dataSpecialty.length > 0 &&
                            dataSpecialty.map((item, index) => {
                                return (
                                    <div className='img-customize' key={index}
                                        onClick={() => this.handleViewDetailSpecialty(item)}>
                                        <div className='image-section-specialty image-specialty'
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                        <div className='title-section'>{item.name}</div>
                                    </div>
                                )
                            })
                        }


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
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
