import React, { Component } from 'react'
import './SystemMenu.css'

class SystemMenu extends Component {

    state = { date: {
            day: '',
            month: '',
            hours: '',
            minutes: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            const currentDay = new Date();
            this.setState({
                date: {
                    day: String(currentDay.getDate()).padStart(2, '0'),
                    month: String(currentDay.getMonth() + 1).padStart(2, '0'),
                    hours: currentDay.getHours(),
                    minutes: currentDay.getMinutes()
                }
            })
        }, 1000)
    }

    render() {

        const { day, month, hours, minutes } = this.state.date

        return (
            <div className="system-menu">
                <div className="system-menu__activities">Activities</div>
                <div className="system-menu__date">{`${day} ${month} ${hours}${hours ? ':' : ''}${minutes}`}</div>
                <div className="system-menu__image-container">
                    <img alt="" src="/images/speaker.png" className="system-menu__image"/>
                    <img alt="" src="/images/power.png" className="system-menu__image"/>
                    <img alt="" src="/images/dropdown.png" className="system-menu__image"/>
                </div>
            </div>
        )
    }
}

export default SystemMenu