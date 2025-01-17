import {
  Box,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import {
  QRCodePng,
  appStorePng,
  googlePlayPng,
  facebookPng,
  instagramPng,
  twitterPng,
  linkedinPng,
} from "../../assets";
import SendIcon from "@mui/icons-material/Send";
import { MotionConfig, motion } from "framer-motion";

export const Footer = () => {
  const theme = useTheme();
  const is700 = useMediaQuery(theme.breakpoints.down(700));

  const labelStyles = {
    fontWeight: 300,
    cursor: "pointer",
  };

  return (
    <Stack
      sx={{
        backgroundColor: "khaki",
        color: theme.palette.text.primary,
        padding: "3rem 1rem",
        rowGap: "3rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Upper Section */}
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        width="100%"
        rowGap={"2rem"}
        alignItems="flex-start"
      >
        <Stack rowGap={"1rem"}>
          <Typography variant="h6" fontWeight="bold">
            Account
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            My Account
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Login / Register
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Cart
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Wishlist
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Shop
          </Typography>
        </Stack>

        <Stack rowGap={"1rem"}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Terms Of Use
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            FAQ
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            Contact
          </Typography>
        </Stack>
        <Stack rowGap={"1rem"}>
          <Typography variant="h6" fontWeight="bold">
            Support
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            302A Anand Bajar, INDORE, MP, INDIA.
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            gbh@gmail.com
          </Typography>
          <Typography variant="body2" sx={labelStyles}>
            +91 9876543210
          </Typography>
        </Stack>
        <Stack rowGap={"1rem"}>
          <Typography variant="h6" fontWeight="bold">
            Exclusive
          </Typography>
          <Typography variant="body1">Subscribe</Typography>
          <Typography variant="body2" sx={labelStyles}>
            Get 10% off your first order
          </Typography>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "8px",
              ".MuiOutlinedInput-root": {
                backgroundColor: "#fff",
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SendIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              ),
            }}
          />
        </Stack>

        <Stack rowGap={"1rem"}>
          <Typography variant="h6" fontWeight="bold">
            Download App
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", fontWeight: 500 }}>
            Save $3 with App New User Only
          </Typography>
          <Stack flexDirection={"row"} gap={"0.5rem"}>
            <Box
              width={"80px"}
              height={"80px"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={QRCodePng}
                style={{ maxWidth: "100%", objectFit: "contain" }}
                alt="QR Code"
              />
            </Box>

            <Stack justifyContent={"center"} gap={1}>
              <img
                style={{ width: "120px", cursor: "pointer" }}
                src={googlePlayPng}
                alt="GooglePlay"
              />
              <img
                style={{ width: "120px", cursor: "pointer" }}
                src={appStorePng}
                alt="AppStore"
              />
            </Stack>
          </Stack>

          <Stack flexDirection={"row"} gap={"1rem"} mt={1}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
                filter: "grayscale(100%) brightness(0) invert(0)",
              }}
              src={facebookPng}
              alt="Facebook"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
                filter: "grayscale(100%) brightness(0) invert(0)",
              }}
              src={twitterPng}
              alt="Twitter"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
                filter: "grayscale(100%) brightness(0) invert(0)",
              }}
              src={instagramPng}
              alt="Instagram"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
                filter: "grayscale(100%) brightness(0) invert(0)",
              }}
              src={linkedinPng}
              alt="LinkedIn"
            />
          </Stack>
        </Stack>
      </Stack>

      {/* Lower Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="GrayText">
          &copy; Trends Craft {new Date().getFullYear()}. All rights reserved
        </Typography>
      </Box>
    </Stack>
  );
};
