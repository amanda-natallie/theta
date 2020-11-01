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
    elevation?: 0 | 1 | 2 | 3;
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
    height?: string;
    bordered?: boolean
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
    noPadding?: boolean
    column?: boolean
    justify?: "flex-start" | "flex-end" | "space-between" | string 
  }
  

  interface PageProps {
    noFooter?: boolean
    noPadding?: boolean
    children : React.ReactNode
    title?: string
    breadcrumbs?: string
  }

  interface BackButtonProps {
    link: string
    bordered?: boolean
  }


  interface SelectProps {
    options: string[]
    setOptions: Function
    selectedOption: string
    type: "local" | "date"
    label: string
  }
}

export default interfaceConstant;
