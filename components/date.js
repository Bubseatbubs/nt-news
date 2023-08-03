import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  var dateToString = format(date, 'LLLL d, yyyy');
  var monthDate = dateToString.split(" ")[0];

  if (monthDate == "January") {
    dateToString = "Bubuary" + dateToString.substring(7);
  }
  else if (monthDate == "Feburary") {
    dateToString = "Inesbily" + dateToString.substring(8);
    console.log(dateToString);
  }
  else if (monthDate == "March") {
    dateToString = "Munch" + dateToString.substring(5);
    console.log(dateToString);
  }
  else if (monthDate == "April") {
    dateToString = "Neory" + dateToString.substring(5);
    console.log(dateToString);
  }
  else if (monthDate == "May") {
    dateToString = "Bub" + dateToString.substring(3);
    console.log(dateToString);
  }
  else if (monthDate == "June") {
    dateToString = "Fary" + dateToString.substring(4);
    console.log(dateToString);
  }
  else if (monthDate == "July") {
    dateToString = "Fuly" + dateToString.substring(4);
    console.log(dateToString);
  }
  else if (monthDate == "August") {
    dateToString = "Pastor" + dateToString.substring(6);
    console.log(dateToString);
  }
  else if (monthDate == "September") {
    dateToString = "Baxtember" + dateToString.substring(9);
    console.log(dateToString);
  }
  else if (monthDate == "October") {
    dateToString = "Panilys" + dateToString.substring(7);
    console.log(dateToString);
  }
  else if (monthDate == "November") {
    dateToString = "Yimsfobe" + dateToString.substring(8);
    console.log(dateToString);
  }
  else if (monthDate == "December") {
    dateToString = "Nosember" + dateToString.substring(8);
    console.log(dateToString);
  }

  return dateToString;
}