import { Typography, useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Doge<span style={{ color: "aqua" }}>Flix</span>
    </Typography>
  );
};

export default Logo;
