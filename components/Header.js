import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/future/image";

const Header = () => {
  const theme = useTheme();
  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box py={matches ? (matchesLG ? 2.5 : 2) : 1} id="topex">
      <Box
        display="flex"
        width="100%"
        justifyContent="start"
        alignItems="center"
        pl={
          matchesMMD
            ? 2
            : matchesMD
            ? matchesLG
              ? matchesXL
                ? 16
                : 10
              : 3
            : 0
        }
      >
        <Image
          src="https://ik.imagekit.io/ahsrg6khu/LEAD/hIcon_kdknnhIwA.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1666092222679"
          alt="smart traveller icon"
          width={60}
          height={60}
        />
        <Typography variant="subtitle2" px={1} sx={{ color: "#00754A" }}>
          The Smart Traveller
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
