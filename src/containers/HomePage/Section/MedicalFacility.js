import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import anh1 from '../../../assets/medical-facility/anviet1.jpg';
import anh2 from '../../../assets/medical-facility/hinh2.png';
import { getAllClinic } from '../../../services/userService';
import { withRouter } from 'react-router-dom';

class MedicalFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataClinics: []
        }
    }
    async componentDidMount() {
        let res = await getAllClinic();
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : []
            })
        }
    }
    handleViewDetailClinic = (clinic) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${clinic.id}`)
        }
    }
    render() {
        let { dataClinics } = this.state;
        console.log("check state", this.state);

        return (
            <div className='section-share section-medical-facilty'>
                <div className='section-content'>
                    <div className='section'>
                        <span className='title-section'>Cơ sở y tế nổi bật  </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>

                    <Slider {...this.props.settings}>
                        {dataClinics && dataClinics.length > 0 &&
                            dataClinics.map((item, index) => {
                                return (
                                    <div className='img-customize'
                                        onClick={() => this.handleViewDetailClinic(item)}>
                                        <div className='img-medical'>
                                            <div className='image-section image-clinic'
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            >
                                            </div>
                                        </div>
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
