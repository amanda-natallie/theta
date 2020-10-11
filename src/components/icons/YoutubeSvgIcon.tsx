import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class YoutubeSvgIcon extends React.PureComponent<
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
          d="M21.5311 4.68354C21.5311 2.08861 19.4352 0 16.8311 0H4.70001C2.09595 0 0 2.08861 0 4.68354V10.3165C0 12.9114 2.09595 15 4.70001 15H16.8311C19.4352 15 21.5311 12.9114 21.5311 10.3165V4.68354ZM13.846 7.78481L9.01894 10.443C8.8284 10.5696 8.63786 10.3797 8.63786 10.1899V4.74684C8.63786 4.49367 8.8284 4.36709 9.01894 4.49367L13.9095 7.27848C14.1 7.34177 14.1 7.65823 13.846 7.78481Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="25.2039"
            y2="35.7124"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A9E0" />
            <stop offset="0.507654" stop-color="#8C38B6" />
            <stop offset="1" stop-color="#EE2737" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default YoutubeSvgIcon;
