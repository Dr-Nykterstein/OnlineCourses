import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";


const Styles = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 70px;
   height: 50px;
   border-radius: 50px 50px 50px 50px;
   margin-left: 5px;
   margin-top: 7px;
   outline:none;
 }
 @media only screen and (max-width: 426px) {
    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    .react-datepicker__input-container input {
        width: 75px;
        height: 40px;
        margin-left: 3px;
        margin-top: -8px;
    }
}
`;


function Search(props) {
    return (<div>
        <input placeholder={props.placeholder}
            className='searchPanel' />
    </div>
    );
};

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
                onChange={date => setStartDate(date)}
            />
            <DatePicker
                placeholderText="Check out"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={date => setEndDate(date)}
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

    IncrementItem(e, el) {
        e.preventDefault();
        switch (el) {
            case 'adult':
                this.setState({ adultsAmount: this.state.adultsAmount + 1 });
                break;
            case 'child':
                this.setState({ childrenAmount: this.state.childrenAmount + 1 });
                break;
            case 'suit':
                this.setState({ suitsAmount: this.state.suitsAmount + 1 });
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
                break;
            case 'child':
                if (this.state.childrenAmount === 0) {
                    return;
                }
                this.setState({ childrenAmount: this.state.childrenAmount - 1 });
                break;
            case 'suit':
                if(this.state.suitsAmount === 0){
                    return;
                }
                this.setState({ suitsAmount: this.state.suitsAmount - 1 });
                break;
            default:
                alert("There is no such values");
        }
    }


    render() {
        return (
            <div>
                
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
            </div>
        );
    }
}

function SearchPanel(props) {
    return (
        <div className='searchPanelform'>
            <div className='firstCol'>
                <Search placeholder='Where are you going?' />
                <Styles>
                    <TableDatePicker />
                </Styles>
            </div>
            <div className='secondCol'>
                <PeoplePicker />
                <button className='searchButton'>Search</button>
            </div>
        </div>
    );
}

export default SearchPanel;