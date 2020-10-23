import classes from "*.module.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import ArrowDownSvgIcon from "../icons/ArrowDownSvgIcon";



const CustomSelect = ({
  selectedOption,
  options,
  setOptions,
  label,
  type
}: interfaceConstant.SelectProps) => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontFamily: "Nunito",
      transform: "translate(30px, 13px) scale(1)",
      marginLeft: 10,
    },
    navigation: {
      "& *": {
        border: 0,
        outline: "none",
        background: "transparent",
      },
      "&:after": {
        content: "''",
        display: "block",
        position: "absolute",
        top: 12,
        left: 8,
        width: 20,
        height: 20,
        background: `url(${type === "local" ? "/media/icons/discovery.svg" : "/media/icons/calendar.svg"}) center center no-repeat`,
      },
    },
  })
);
  const classes = useStyles();
  return (
    <FormControl variant="outlined" fullWidth className={classes.navigation}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <Select
        value={selectedOption}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOptions(e.target.value)}
        label={label}
        IconComponent={() => (
          <ArrowDownSvgIcon
            width="8"
            height="8"
            fillColor={theme.palette.primary.main}
          />
        )}
      >
        <MenuItem value="">
          <em>Escolha um</em>
        </MenuItem>
        {options &&
          options.map((item: string, index: number) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
