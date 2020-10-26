import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class MinusSvgIcon extends React.PureComponent<interfaceConstant.SvgIconProps> {
  render() {
    const { width, height, fillColor, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height="3px"
        viewBox={`0 0 ${width} 3`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M2.19507 1.5L12.5626 1.5"
          stroke={fillColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}

export default MinusSvgIcon;
