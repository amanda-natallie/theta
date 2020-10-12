import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

class SignInSvgIcon extends React.PureComponent<
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
          d="M17.5032 18H10.183C9.64624 18 9.20703 17.5622 9.20703 17.027C9.20703 16.4919 9.64624 16.0541 10.183 16.0541H17.5032C17.796 16.0541 17.9912 15.8595 17.9912 15.5676V2.43243C17.9912 2.14054 17.796 1.94595 17.5032 1.94595H10.183C9.64624 1.94595 9.20703 1.50811 9.20703 0.972973C9.20703 0.437838 9.64624 0 10.183 0H17.5032C18.8696 0 19.9432 1.07027 19.9432 2.43243V15.5676C19.9432 16.9297 18.8208 18 17.5032 18Z"
          fill={fillColor}
        />
        <path
          d="M6.22994 15.5188C5.98594 15.5188 5.74192 15.4215 5.54671 15.2269C5.1563 14.8377 5.1563 14.254 5.54671 13.8648L10.4268 8.9999L5.54671 4.13504C5.1563 3.74585 5.1563 3.16204 5.54671 2.77285C5.93712 2.38366 6.52273 2.38366 6.91314 2.77285L12.4765 8.31881C12.8669 8.708 12.8669 9.29177 12.4765 9.68096L6.91314 15.2269C6.76674 15.4215 6.52275 15.5188 6.22994 15.5188Z"
          fill={fillColor}
        />
        <path
          d="M11.5991 9.97305H1.35101C0.814203 9.97305 0.375 9.53521 0.375 9.00007C0.375 8.46494 0.814203 8.0271 1.35101 8.0271H11.5991C12.1359 8.0271 12.5751 8.46494 12.5751 9.00007C12.5751 9.53521 12.1359 9.97305 11.5991 9.97305Z"
          fill={fillColor}
        />
      </svg>
    );
  }
}

export default SignInSvgIcon;
