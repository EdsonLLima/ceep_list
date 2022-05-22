// remove datas repetidas
export const removeDatesRepeat = (dates) => {
  const uniqueDates = [];
  dates.forEach((date) => {
    if (uniqueDates.indexOf(date.dateFormat) === -1) {
      uniqueDates.push(date.dateFormat);
    }
  });

  return uniqueDates;
};

//ordena datas
export const sortDates = (date) => {
  date.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY").format("YYYYMMDD");

    const SecondDate = moment(b, "DD/MM/YYYY").format("YYYYMMDD");

    return firstDate - SecondDate;
  });
};
