import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class PlusSvgIcon extends React.PureComponent<interfaceConstant.SvgIconProps> {
  render() {
    const { width, height, fillColor, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height="20px"
        viewBox={`0 0 5 5`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          // d="M2.19507 1.5L12.5626 1.5"
          // M0,-1 V1 M-1,0 H1
          d="M2.19507 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
          fill={fillColor}
          stroke={fillColor}
          stroke-width="0.1"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}

export default PlusSvgIcon;
