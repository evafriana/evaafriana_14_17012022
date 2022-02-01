import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext, useField } from "formik";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      {...field}
      {...props}
      autoComplete="off"
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/MM/yyyy"
      role="button"
      aria-label="Datepicker"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="datepicker__header">
          <IoCaretBack
            className="icon__IoCaret"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          />

          <select
            className="datepicker__select"
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            className="datepicker__select"
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <IoCaretForward
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          />
        </div>
      )}
    />
  );
};

export default DatePickerField;
