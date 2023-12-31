import React from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

function Main(props) {

  const seedRandom = function(seed) {
    var m = 2**35 -31;
    var a = 185852;
    var s = seed % m;
    return function() {
      return (s = (a * s) % m) /m;
    }
  }

  const fetchAPI = function(date) {
    if (date instanceof Date) {
      let result = [];
      let random = seedRandom(date.getDate());
      for (let i = 17; i < 23; i++) {
        if (random() > 0.5) {
          result.push(i + ':30');
        }
        if (random() < 0.5) {
          result.push(i + ':00');
        }
      }
      return result;
    } else {
      return [];
    }
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = React.useReducer(updateTimes, initialState);

function updateTimes(state, date){
  return {availableTimes: fetchAPI(date)};
}

const navigate = useNavigate();

function submitForm(formData){
  if(submitAPI(formData)){
    navigate('/confirmed');
  }
}

  return (
    <main>
      <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}/>
          <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
    </main>
  )
}

export default Main;