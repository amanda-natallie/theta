import React from "react";
import interfaceConstant from "../../utils/constant/interfaceConstant";

const ArrowDownSvgIcon = ({
  width,
  height,
  fillColor,
  bgColor,
  ...otherProps
}: interfaceConstant.SvgIconProps): JSX.Element => {
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
        d="M3.246 7.08654C3.20733 7.04887 3.042 6.90664 2.906 6.77415C2.05067 5.9974 0.650667 3.9711 0.223333 2.91054C0.154667 2.74947 0.00933333 2.34226 0 2.12469C0 1.91622 0.048 1.71748 0.145333 1.52784C0.281333 1.29144 0.495333 1.1018 0.748 0.997888C0.923333 0.930994 1.448 0.827081 1.45733 0.827081C2.03133 0.723168 2.964 0.666016 3.99467 0.666016C4.97667 0.666016 5.87133 0.723168 6.454 0.808246C6.46333 0.817988 7.11533 0.921901 7.33867 1.03556C7.74667 1.24403 8 1.65124 8 2.08703V2.12469C7.99 2.40851 7.73667 3.00536 7.72733 3.00536C7.29933 4.00877 5.968 5.98831 5.08333 6.78389C5.08333 6.78389 4.856 7.00795 4.714 7.10537C4.51 7.25735 4.25733 7.33268 4.00467 7.33268C3.72267 7.33268 3.46 7.2476 3.246 7.08654Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowDownSvgIcon;
