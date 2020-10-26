import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class HamburguerMenuSvgIcon extends React.PureComponent<
  interfaceConstant.SvgIconProps
> {
  render() {
    const { width, height, fillColor, ...otherProps } = this.props;
    return (
      <svg
        width="32"
        height="21px"
        viewBox="0 0 32 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <rect width="28" height="3" rx="1.5" fill={fillColor} />
        <rect y="9" width="28" height="3" rx="1.5" fill={fillColor} />
        <rect y="18" width="28" height="3" rx="1.5" fill={fillColor} />
      </svg>
    );
  }
}

export default HamburguerMenuSvgIcon;
