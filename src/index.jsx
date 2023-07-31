import React from "react";
import PropTypes from "prop-types";

const DateFormatRender = ({ date, format }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", format).format(
    new Date(date)
  );

  return <span>{formattedDate}</span>;
};

DateFormatRender.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  format: PropTypes.object.isRequired,
};

export default DateFormatRender;
