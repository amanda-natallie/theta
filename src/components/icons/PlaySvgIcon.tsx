import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class PlaySvgIcon extends React.PureComponent<interfaceConstant.SvgIconProps> {
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
          d="M11.4026 8.77238C11.3367 8.83763 11.0878 9.11662 10.856 9.34612C9.49664 10.7895 5.95061 13.152 4.09463 13.8731C3.81276 13.989 3.10015 14.2343 2.7194 14.25C2.35457 14.25 2.00679 14.169 1.67492 14.0047C1.26121 13.7752 0.929341 13.4141 0.747494 12.9878C0.630429 12.6919 0.448581 11.8065 0.448581 11.7908C0.266734 10.8221 0.166718 9.24825 0.166718 7.509C0.166718 5.85187 0.266734 4.34212 0.415622 3.35888C0.43267 3.34313 0.614517 2.24287 0.813413 1.866C1.17825 1.1775 1.89086 0.75 2.65348 0.75H2.7194C3.21608 0.766875 4.26056 1.19438 4.26056 1.21012C6.01653 1.93238 9.48073 4.179 10.873 5.67188C10.873 5.67188 11.2651 6.0555 11.4356 6.29513C11.7015 6.63937 11.8334 7.06575 11.8334 7.49213C11.8334 7.968 11.6845 8.41125 11.4026 8.77238Z"
          fill={fillColor}
        />
      </svg>
    );
  }
}

export default PlaySvgIcon;
