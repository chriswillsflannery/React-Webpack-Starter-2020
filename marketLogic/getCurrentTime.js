/**
 * @author chriswillsflannery
 */

const apiKey = 'pk_fe5accdfe8df4bd193370f7a6b115621';
const apiSecret = 'sk_34971af56821493687f582215502cb96';


const url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=yIIJ4otbs9TR6nGsX2zFfHTrBuQ9TUhVcMEmaOYHQoPgQn6n0vy6T2OTIt8U';

/**
 * @param none
 * @return {string} current time
 */
function getCurrentTime() {
  const time = new Date().getTime();

  function dhm(ms) {
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    // let ampm;
    // if (hours - 5 > 12) {
    //   ampm = 'pm'
    // } else {
    //   ampm = 'am'
    // }
    return (hours - 5) + ":" + minutes;
  }

  return dhm(time);

}

module.exports = getCurrentTime;
