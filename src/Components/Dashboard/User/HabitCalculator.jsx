import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Axios from "axios";

const HabitCalendar = ({ userEmail }) => {
  const [completedDates, setCompletedDates] = useState([]);

  useEffect(() => {
    Axios.get(`/users/${userEmail}/completed-habits`)
      .then(res => setCompletedDates(res.data))
      .catch(err => console.error(err));
  }, [userEmail]);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      if (completedDates.includes(formattedDate)) return 'completed';
    }
  }

  return <Calendar tileClassName={tileClassName} />;
}

export default HabitCalendar;
