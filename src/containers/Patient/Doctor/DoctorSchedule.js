import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorSchedule.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import BookingModal from './Modal/BookingModal';

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvalableTime: [],
            isOpenModalBooing: false,
            dataScheduleTimeModal: {}
        }
    }
    async componentDidMount() {
        // console.log('moment vie: ', moment(new Date()).format('dddd - DD/MM'));
        // console.log('moment en: ', moment(new Date()).locale('en').format('ddd - DD/MM'));
        let { language } = this.props;
        let allDays = this.getArrDays(language);
        if (this.props.doctorIdFromParent) {
            let res = await getScheduleDoctorByDate(this.props.doctorIdFromParent, allDays[0].value);
            this.setState({
                allAvalableTime: res.data ? res.data : []
            })
        }
        this.setState({
            allDays: allDays,
        })
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let allDays = this.getArrDays(this.props.language)
            this.setState({
                allDays: allDays,
            })
        }
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let allDays = this.getArrDays(this.props.language)
            let res = await getScheduleDoctorByDate(this.props.doctorIdFromParent, allDays[0].value);
            this.setState({
                allAvalableTime: res.data ? res.data : []
            })
        }
    }
    capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    getArrDays = (language) => {
        let allDays = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                if (i === 0) {
                    let ddMM = moment(new Date()).format('DD/MM');
                    let today = `Hôm nay - ${ddMM}`;
                    object.label = today;
                } else {
                    let labelVi = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                    object.label = this.capitalizeFirstLetter(labelVi)
                }
            } else {
                if (i === 0) {
                    let ddMM = moment(new Date()).format('DD/MM');
                    let today = `Today - ${ddMM}`;
                    object.label = today;
                } else {
                    object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
                }
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDays.push(object);
        }
        return allDays;
    }
    handleOnChangeSelect = async (event) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent;
            let date = event.target.value
            let res = await getScheduleDoctorByDate(doctorId, date);
            if (res && res.errCode === 0) {
                let allTime = res.data
                this.setState({
                    allAvalableTime: res.data ? res.data : []
                })
            }
        }
    }
    handleClickScheduleTime = (time) => {
        this.setState({
            isOpenModalBooing: true,
            dataScheduleTimeModal: time
        })
    }
    closeBookingClose = () => {
        this.setState({
            isOpenModalBooing: false,
        })
    }
    render() {
        let { allDays, allAvalableTime, isOpenModalBooing, dataScheduleTimeModal } = this.state;
        let { language } = this.props;
        return (
            //fragment
            <>
                <div className='doctor-schedule-container'>
                    <div className='all-schedule'>
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {allDays && allDays.length > 0 &&
                                allDays.map((item, index) => {
                                    return (
                                        <option value={item.value}
                                            key={index}
                                        >{item.label}</option>
                                    )
                                })}

                        </select>
                    </div>
                    <div className='all-available-time'>
                        <div className='text-calendar'>
                            <i class="fas fa-calendar-alt"></i>  <span><FormattedMessage id="patient.detail-doctor.appointment" /></span>
                        </div>
                        <div className='time-content'>
                            {allAvalableTime && allAvalableTime.length > 0 ?
                                <React.Fragment>
                                    <div className='time-content-btns'>
                                        {allAvalableTime.map((item, index) => {
                                            let timeDisplay = language === LANGUAGES.VI ?
                                                item.timeTypeData.valueVi : item.timeTypeData.valueEn
                                            return (
                                                <button key={index} className={language === LANGUAGES.VI ? 'btn-vie' : 'btn-en'}
                                                    onClick={() => this.handleClickScheduleTime(item)}
                                                >
                                                    {timeDisplay} </button>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className='book-free'>
                                        <span><FormattedMessage id="patient.detail-doctor.choose" /> <i class="far fa-hand-point-up"></i> <FormattedMessage id="patient.detail-doctor.book-free" /> </span>
                                    </div>
                                </React.Fragment>
                                : <div className='no-schedule'><FormattedMessage id="patient.detail-doctor.no-schedule" /></div>
                            }
                        </div>
                    </div>
                </div>
                <BookingModal
                    isOpenModal={isOpenModalBooing}
                    closeBookingClose={this.closeBookingClose}
                    dataTime={dataScheduleTimeModal}
                />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
