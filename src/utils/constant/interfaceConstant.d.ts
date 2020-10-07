declare namespace interfaceConstant {
  interface SvgIconProps {
    width?: string;
    height?: string;
    color?: string;
    title?: string;
    fillColor?: string;
    viewBox?: string;
  }

  interface MenuProps {
    color: "dark" | "light" | string;
  }
  interface TextProps {
    color?: string;
    weight?: number;
    small?: boolean;
    size?: string;

  }
  interface ImageProps {
    maxWidth?: string;
  }
  interface DividerProps {
    height: string
  }
}

export default interfaceConstant;
