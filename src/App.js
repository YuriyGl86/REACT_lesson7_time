
import './App.css';
import moment from 'moment';
import React, {useState} from 'react';
import { DateTimePrettyWrapper } from './components/DateTimePrettyWrapper';


const secondsCalculator = (date)=>{
  const  startTime = moment(date, 'YYYY-MM-DD hh:mm:ss');
  const now = moment()
  const  minutesDiff = now.diff(startTime, 'minutes');
  if(minutesDiff<60){return minutesDiff + ' минут назад'}
  else if (minutesDiff< 1440){return Math.floor(minutesDiff/60) + ' часов назад'}
  return  now.diff(startTime, 'days') + ' дней назад'  
}

function DateTime(props) {
    // console.log(secondsCalculator(props.date))
    return (
        <p className="date">{props.date}</p>
    )
}


const DateTimePretty = DateTimePrettyWrapper(secondsCalculator)(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date}/>
            <DateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-05 11:18:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-05 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}


