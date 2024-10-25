import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import anh1 from '../../../assets/medical-facility/anviet1.jpg';
import anh2 from '../../../assets/medical-facility/hinh2.png';
import * as action from "../../../store/actions";
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }

    async componentDidMount() {
        this.props.loadTopDoctors();
    }
    handleViewDetailDoctor = (doctor) => {
        console.log("check doctor: ", doctor)
        this.props.history.push(`/detail-doctor/${doctor.id}`)
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        // console.log("check arrDoctors: ", arrDoctors)
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'><FormattedMessage id="homepage.outstanding-doctor" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <Slider {...this.props.settings}>
                        {arrDoctors && arrDoctors.length > 0
                            && arrDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div className='img-customize outstanding-doctor' key={index}
                                        onClick={() => this.handleViewDetailDoctor(item)}
                                    >
                                        <div className='img-doctor'>
                                            <div className='section-outstanding-doctor'
                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                            ></div>
                                        </div>
                                        <div className='title-section'>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                        <div className='title-section doctor-specialty'>Tiêu hóa,Bệnh Viên gan</div>
                                    </div>
                                )
                            })}
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(action.fetchTopDoctor()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
