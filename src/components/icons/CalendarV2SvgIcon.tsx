import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class CalendarV2SvgIcon extends React.PureComponent<
  interfaceConstant.SvgIconProps
> {
  render() {
    const { width, height, fillColor, bgColor, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill={bgColor}
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M13.7411 15.1001H2.31332C1.24673 15.1001 0.408691 14.2402 0.408691 13.1458V3.68697C0.408691 2.59256 1.24673 1.73267 2.31332 1.73267H10.6937C11.1127 1.73267 11.4555 2.08444 11.4555 2.51439C11.4555 2.94433 11.1127 3.29611 10.6937 3.29611H2.31332C2.08476 3.29611 1.93239 3.45245 1.93239 3.68697V13.1458C1.93239 13.3803 2.08476 13.5367 2.31332 13.5367H13.7411C13.9696 13.5367 14.122 13.3803 14.122 13.1458V3.68697C14.122 3.45245 13.9696 3.29611 13.7411 3.29611H13.0935C12.6745 3.29611 12.3317 2.94433 12.3317 2.51439C12.3317 2.08444 12.6745 1.73267 13.0935 1.73267H13.7411C14.8077 1.73267 15.6457 2.59256 15.6457 3.68697V13.1458C15.6457 14.2011 14.8077 15.1001 13.7411 15.1001Z"
          fill={fillColor}
        />
        <path
          d="M10.9609 4.78146C10.5419 4.78146 10.199 4.42969 10.199 3.99975V1.06833C10.199 0.638391 10.5419 0.286621 10.9609 0.286621C11.3799 0.286621 11.7227 0.638391 11.7227 1.06833V3.99975C11.7227 4.42969 11.3799 4.78146 10.9609 4.78146Z"
          fill={fillColor}
        />
        <path
          d="M5.09437 4.78146C4.67535 4.78146 4.33252 4.42969 4.33252 3.99975V1.06833C4.33252 0.638391 4.67535 0.286621 5.09437 0.286621C5.51338 0.286621 5.85622 0.638391 5.85622 1.06833V3.99975C5.85622 4.42969 5.51338 4.78146 5.09437 4.78146Z"
          fill={fillColor}
        />
        <path
          d="M5.09505 8.33832C4.67603 8.33832 4.33319 7.98655 4.33319 7.55661C4.33319 7.12667 4.67603 6.7749 5.09505 6.7749C5.51407 6.7749 5.8569 7.12667 5.8569 7.55661C5.8569 7.98655 5.51407 8.33832 5.09505 8.33832Z"
          fill={fillColor}
        />
        <path
          d="M5.09437 11.3871C4.67535 11.3871 4.33252 11.0354 4.33252 10.6054C4.33252 10.1755 4.67535 9.82373 5.09437 9.82373C5.51338 9.82373 5.85622 10.1755 5.85622 10.6054C5.85622 11.0354 5.51338 11.3871 5.09437 11.3871Z"
          fill={fillColor}
        />
        <path
          d="M8.02714 8.33832C7.83667 8.33832 7.64625 8.26015 7.49388 8.10381C7.18913 7.79113 7.18913 7.3221 7.49388 7.00942C7.79862 6.69673 8.2557 6.69673 8.56044 7.00942C8.86519 7.3221 8.86519 7.83021 8.56044 8.14289C8.40807 8.26015 8.2176 8.33832 8.02714 8.33832Z"
          fill={fillColor}
        />
        <path
          d="M8.02759 11.3871C7.83713 11.3871 7.6467 11.309 7.49433 11.1526C7.18959 10.84 7.18959 10.3709 7.49433 10.0582C7.79907 9.74556 8.25615 9.74556 8.56089 10.0582C8.86563 10.3709 8.86563 10.879 8.56089 11.1917C8.40852 11.309 8.21805 11.3871 8.02759 11.3871Z"
          fill={fillColor}
        />
        <path
          d="M10.9618 8.33832C10.5428 8.33832 10.2 7.98655 10.2 7.55661C10.2 7.12667 10.5428 6.7749 10.9618 6.7749C11.3808 6.7749 11.7237 7.12667 11.7237 7.55661C11.7237 7.98655 11.3808 8.33832 10.9618 8.33832Z"
          fill={fillColor}
        />
        <path
          d="M10.9618 11.3872C10.5428 11.3872 10.2 11.0354 10.2 10.6055C10.2 10.1755 10.5428 9.82373 10.9618 9.82373C11.3808 9.82373 11.7237 10.1755 11.7237 10.6055C11.7237 11.0354 11.3808 11.3872 10.9618 11.3872Z"
          fill={fillColor}
        />
      </svg>
    );
  }
}

export default CalendarV2SvgIcon;
