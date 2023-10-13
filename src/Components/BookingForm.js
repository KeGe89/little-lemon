import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = React.useState("")
    const [time, setTime] = React.useState("")
    const [guests, setGuests] = React.useState("")
    const [occasion, setOccasion] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitForm(event);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <div className="booking-form">
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input type="date" id="book-date" name="book-date" value={date} onChange={(event) => handleChange(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(event) => setTime(event.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                    return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" name="book-guests" value={guests} min='1' onChange={(event) => setGuests(event.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" name="book-occasion" key={occasion} value={occasion} onChange={(event) => setOccasion(event.target.value)} required>
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default BookingForm;
