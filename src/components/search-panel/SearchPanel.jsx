import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Styles = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 90px;
   height: 50px;
   text-align: center;
   font-family: 'PT Sans', sans-serif;
   border-radius: 50px 50px 50px 50px;
   margin-left: 5px;
   margin-top: 7px;
   outline:none;
 }
 @media only screen and (max-width: 426px) {
    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    .react-datepicker__input-container input {
        margin: 5px 35px;
        width: 180px;
    }
}
`;

let res;
let start;
let end;
let child;
let adult;
let suit;
function getValueFromSearch(city) {
    res = city
}

function Search(props) {
    return (<div>
        <input placeholder={props.placeholder}
            className='searchPanel'
            onChange={city => getValueFromSearch(city.target.value)} />
    </div>
    );
};

function getStart(st) {
    console.log(st.getDate())
    start = st;
}

function getEnd(en) {
    console.log(typeof en)
    end = en;
}

function TableDatePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className='datePickerdiv'>
            <DatePicker
                placeholderText="Check in"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={date => {
                    setStartDate(date);
                    getStart(date);
                }}
            />
            <DatePicker
                placeholderText="Check out"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={date => {
                    setEndDate(date);
                    getEnd(date);
                }}
            />

        </div>
    );
}


class PeoplePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adultsAmount: 0,
            childrenAmount: 0,
            suitsAmount: 0
        };
    }

    getChild = (param) => {
        child = param
    }

    getAdult = (param) => {
        adult = param
    }

    getSuit = (param) => {
        suit = param
    }

    IncrementItem(e, el) {
        e.preventDefault();
        switch (el) {
            case 'adult':
                this.setState({ adultsAmount: this.state.adultsAmount + 1 });
                this.getAdult(this.state.adultsAmount + 1)
                break;
            case 'child':
                this.setState({ childrenAmount: this.state.childrenAmount + 1 });
                this.getChild(this.state.childrenAmount + 1)
                break;
            case 'suit':
                this.setState({ suitsAmount: this.state.suitsAmount + 1 });
                this.getSuit(this.state.suitsAmount + 1)
                break;
            default:
                alert("There is no such values");
        }
    }
    DecreaseItem(e, el) {
        e.preventDefault();
        switch (el) {
            case 'adult':
                if (this.state.adultsAmount === 0) {
                    return;
                }
                this.setState({ adultsAmount: this.state.adultsAmount - 1 });
                this.getAdult(this.state.adultsAmount - 1)
                break;
            case 'child':
                if (this.state.childrenAmount === 0) {
                    return;
                }
                this.setState({ childrenAmount: this.state.childrenAmount - 1 });
                this.getChild(this.state.childrenAmount - 1)
                break;
            case 'suit':
                if (this.state.suitsAmount === 0) {
                    return;
                }
                this.setState({ suitsAmount: this.state.suitsAmount - 1 });
                this.getSuit(this.state.suitsAmount - 1)
                break;
            default:
                alert("There is no such values");
        }
    }


    render() {
        return (

            <div className='peoplePicker' >
                <ul className='upper'>
                    <h1>Children</h1>
                    <h1>Adults</h1>
                    <h1>Suits</h1>
                </ul>
                <ul className='upper'>
                    <div className='stepper'>
                        <button className='button' onClick={(e) => this.DecreaseItem(e, 'child')}>-</button>
                        <h1>{this.state.childrenAmount}</h1>
                        <button className='button' onClick={(e) => this.IncrementItem(e, 'child')}>+</button>
                    </div>
                    <div className='stepper'>
                        <button className='button' onClick={(e) => this.DecreaseItem(e, 'adult')}>-</button>
                        <h1>{this.state.adultsAmount}</h1>
                        <button className='button' onClick={(e) => this.IncrementItem(e, 'adult')}>+</button>
                    </div>
                    <div className='stepper'>
                        <button className='button' onClick={(e) => this.DecreaseItem(e, 'suit')}>-</button>
                        <h1>{this.state.suitsAmount}</h1>
                        <button className='button' onClick={(e) => this.IncrementItem(e, 'suit')}>+</button>
                    </div>
                </ul>
            </div>
        );
    }
}

function convertDate(start) {
    let stDay = start.getDate()
    let stMon = start.getMonth() + 1
    if (start.getMonth() + 1 < 10) {
        stMon = '0' + parseInt(start.getMonth() + 1)

    }
    if (start.getDate() < 10) {
        stDay = '0' + start.getDate();
    }
    return (start.getFullYear() + "-" + stMon + "-" + stDay);
}

function SearchPanel(props) {


    const childFunction = (e) => {
        e.preventDefault();
        console.log(props)
        if (start !== undefined && end !== undefined) {
            start = convertDate(start)
            end = convertDate(end)
        }
        console.log(child)
        props.functionCallFromParent({res, start, end, child, adult, suit});
    }
    return (
        <div className='searchPanelform'>
            <Search placeholder='Where are you going?' />
            <Styles>
                <TableDatePicker />
            </Styles>
            <PeoplePicker />
            <div className='buttondiv'>
                <button className='searchButton' onClick={childFunction.bind(this)}>Search</button>
            </div>
        </div>
    );

}

export default SearchPanel;