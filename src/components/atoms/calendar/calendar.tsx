import React from 'react';
import DatePicker from 'react-native-date-picker';

export interface KorCalendarProps {
  selectedDate: string;
  isVisible: boolean;
  onDayPress: (day: any) => void;
  onClose: () => void;
  toastRef?: any;
  minDate?: string;
  maxDate?: string;
  calendarProps?: object; // Allows passing extra props to the Calendar
}

export default function ZonCalendar({
  selectedDate,
  isVisible,
  onDayPress,
  onClose,
  toastRef,
  minDate,
  maxDate,
  calendarProps = {}, // Accept additional props
}: KorCalendarProps) {
  return (
    <DatePicker
      mode="datetime"
      modal
      open={isVisible}
      date={new Date(selectedDate)}
      onConfirm={onDayPress}
      minimumDate={minDate ? new Date(minDate) : undefined}
      minuteInterval={30}
      maximumDate={maxDate ? new Date(maxDate) : undefined} // Pass the maxDate if available
      {...calendarProps} // Spread additional props
    />
  );
}
