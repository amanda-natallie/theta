import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class SpotifySvgIcon extends React.PureComponent<
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
          d="M9.38465 0.750977C4.20208 0.750977 0 4.9796 0 10.1963C0 15.413 4.20208 19.6416 9.38465 19.6416C14.5672 19.6416 18.7682 15.413 18.7682 10.1963C18.7682 4.9796 14.5672 0.750977 9.38465 0.750977ZM13.6876 14.3742C13.5195 14.6516 13.1587 14.7396 12.883 14.5693C10.68 13.2146 7.90664 12.9078 4.64022 13.659C4.32534 13.7312 4.01159 13.5327 3.93987 13.2158C3.86704 12.8988 4.06426 12.583 4.37913 12.5108C7.9537 11.6885 11.0207 12.0427 13.4937 13.5643C13.7694 13.7346 13.8568 14.0967 13.6876 14.3742ZM14.8362 11.8013C14.6244 12.1487 14.1739 12.2582 13.8299 12.045C11.3075 10.4839 7.4629 10.0316 4.47886 10.9441C4.09227 11.0614 3.68327 10.8415 3.56561 10.4535C3.44907 10.0632 3.66758 9.65263 4.05417 9.53419C7.46178 8.49424 11.6986 8.9973 14.5952 10.7896C14.9392 11.0028 15.0479 11.4551 14.8362 11.8013ZM14.9348 9.12363C11.9104 7.31555 6.92055 7.14974 4.03288 8.03179C3.56897 8.17278 3.07929 7.90997 2.9381 7.443C2.79803 6.97604 3.05912 6.48313 3.52303 6.34101C6.83763 5.32813 12.3485 5.52326 15.8301 7.6043C16.2481 7.85357 16.3848 8.39611 16.1371 8.81457C15.8906 9.23416 15.3505 9.3729 14.9348 9.12363Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0.750977"
            x2="18.922"
            y2="0.906343"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A9E0" />
            <stop offset="1" stop-color="#8C38B6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default SpotifySvgIcon;
