import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class FacebookSvgIcon extends React.PureComponent<
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.003 12.9953V21.4316C10.003 21.5332 10.105 21.6349 10.207 21.6349H13.3689C13.4709 21.6349 13.5729 21.5332 13.5729 21.4316V12.8937H15.8679C15.9699 12.8937 16.0719 12.792 16.0719 12.6904L16.2759 10.0985C16.2759 9.94608 16.1739 9.84444 16.0719 9.84444H13.5729V8.01489C13.5729 7.60832 13.9299 7.25258 14.3379 7.25258H16.0719C16.1739 7.25258 16.2759 7.15094 16.2759 7.04929V4.45743C16.2759 4.35579 16.1739 4.25415 16.0719 4.25415H13.1139C11.38 4.25415 9.95197 5.67713 9.95197 7.40504V9.89526H8.37099C8.269 9.89526 8.16699 9.9969 8.16699 10.0985V12.6396C8.16699 12.7412 8.269 12.8429 8.37099 12.8429H9.95197V12.9953H10.003Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="8.16699"
            y1="4.25415"
            x2="26.3868"
            y2="11.2733"
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

export default FacebookSvgIcon;
