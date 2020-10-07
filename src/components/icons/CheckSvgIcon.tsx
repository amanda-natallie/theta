import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class CheckSvgIcon extends React.PureComponent<interfaceConstant.SvgIconProps> {
  render() {
    const { width, height, fillColor, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M7.90247 12.874L18.6128 2"
          stroke={fillColor}
          stroke-width="4"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.90576 12.874L2 7.43701"
          stroke={fillColor}
          stroke-width="4"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}

export default CheckSvgIcon;
