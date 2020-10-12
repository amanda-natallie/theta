import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class InstagramSvgIcon extends React.PureComponent<
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
          d="M14.5371 3.50215C13.8981 3.50215 13.4188 3.97971 13.4188 4.61647C13.4188 5.25322 13.8981 5.73079 14.5371 5.73079C15.1761 5.73079 15.6553 5.25322 15.6553 4.61647C15.6553 3.97971 15.1228 3.50215 14.5371 3.50215ZM9.53164 4.93484C6.92242 4.93484 4.8457 7.05736 4.8457 9.60437C4.8457 12.1514 6.97567 14.2739 9.53164 14.2739C12.1409 14.2739 14.2176 12.1514 14.2176 9.60437C14.2176 7.05736 12.1409 4.93484 9.53164 4.93484ZM9.53164 12.629C7.88091 12.629 6.49642 11.3024 6.49642 9.60437C6.49642 7.95943 7.82766 6.57979 9.53164 6.57979C11.1824 6.57979 12.5669 7.90636 12.5669 9.60437C12.5669 11.3024 11.1824 12.629 9.53164 12.629ZM19.0633 5.73079C19.0633 2.54702 16.5073 0 13.3124 0H5.75093C2.55596 0 0 2.54702 0 5.73079V13.2657C0 16.4495 2.55596 18.9965 5.75093 18.9965H13.3124C16.5073 18.9965 19.0633 16.4495 19.0633 13.2657V5.73079ZM17.2528 13.2657C17.2528 15.4413 15.4956 17.1924 13.3124 17.1924H5.75093C3.5677 17.1924 1.81048 15.4413 1.81048 13.2657V5.73079C1.81048 3.55521 3.5677 1.80414 5.75093 1.80414H13.3124C15.4956 1.80414 17.2528 3.55521 17.2528 5.73079V13.2657Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="39.0396"
            y2="14.1615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A9E0" />
            <stop offset="0.507654" stopColor="#8C38B6" />
            <stop offset="1" stopColor="#EE2737" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default InstagramSvgIcon;
