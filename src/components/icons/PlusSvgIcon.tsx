import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class PlusSvgIcon extends React.PureComponent<interfaceConstant.SvgIconProps> {
  render() {
    const { width, height, fillColor, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height="20px"
        viewBox={`0 0 15 15`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M7.5 2V13"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M2 7.5L13 7.5"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    );
  }
}

export default PlusSvgIcon;
