import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class SearchSvgIcon extends React.PureComponent<
  interfaceConstant.SvgIconProps
> {
  render() {
    const { width, height, fillColor, viewBox, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          fill={fillColor}
          d="M10.3846 6.34615C10.3846 8.57272 8.57272 10.3846 6.34615 10.3846C4.11959 10.3846 2.30769 8.57272 2.30769 6.34615C2.30769 4.11959 4.11959 2.30769 6.34615 2.30769C8.57272 2.30769 10.3846 4.11959 10.3846 6.34615ZM15 13.8462C15 13.5397 14.8738 13.2422 14.6665 13.0349L11.5745 9.94291C12.3047 8.88822 12.6923 7.6262 12.6923 6.34615C12.6923 2.83954 9.85276 0 6.34615 0C2.83954 0 0 2.83954 0 6.34615C0 9.85276 2.83954 12.6923 6.34615 12.6923C7.6262 12.6923 8.88822 12.3047 9.94291 11.5745L13.0349 14.6575C13.2422 14.8738 13.5397 15 13.8462 15C14.4772 15 15 14.4772 15 13.8462Z"
        />
      </svg>
    );
  }
}

export default SearchSvgIcon;
