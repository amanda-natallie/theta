declare namespace interfaceConstant {
  interface SvgIconProps {
    width?: string;
    height?: string;
    color?: string;
    title?: string;
    fillColor?: string;
    bgColor?: string;
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
    height: string;
  }

  interface blogProps {
    image: string;
    type: string;
    description: string;
    tag: string;
    data: string;
  }
  interface podcastProps {
    title: string;
    subtitle: string;
    img: string;
    url: string;
    
  }

  interface boxProps {
    bg?: string
    color?: string
  }
}

export default interfaceConstant;
