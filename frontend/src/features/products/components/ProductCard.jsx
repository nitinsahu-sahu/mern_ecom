import {
  FormHelperText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlistItems } from "../../wishlist/WishlistSlice";
import { selectLoggedInUser } from "../../auth/AuthSlice";
import { addToCartAsync, selectCartItems } from "../../cart/CartSlice";
import { motion } from "framer-motion";

export const ProductCard = ({
  id,
  title,
  price,
  thumbnail,
  brand,
  stockQuantity,
  handleAddRemoveFromWishlist,
  isWishlistCard,
  isAdminCard,
}) => {
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const loggedInUser = useSelector(selectLoggedInUser);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  let isProductAlreadyinWishlist = -1;

  const theme = useTheme();
  const is408 = useMediaQuery(theme.breakpoints.down(408));

  isProductAlreadyinWishlist = wishlistItems.some(
    (item) => item.product._id === id
  );

  const isProductAlreadyInCart = cartItems.some(
    (item) => item.product._id === id
  );

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    const data = { user: loggedInUser?._id, product: id };
    dispatch(addToCartAsync(data));
  };

  return (
    <>
      {isProductAlreadyinWishlist !== -1 ? (
        <Stack
          component={!isAdminCard && !isWishlistCard ? Paper : "div"}
          mt={2}
          elevation={3}
          p={2}
          width={is408 ? "90%" : "300px"}
          sx={{
            cursor: "pointer",
            borderRadius: "12px",
            background: "#f9f9f9",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
          onClick={() => navigate(`/product-details/${id}`)}
        >
          {/* Image Section */}
          <Stack
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              padding: "8px",
            }}
          >
            <img
              width={"100%"}
              style={{ aspectRatio: 1 / 1, objectFit: "contain" }}
              src={thumbnail}
              alt={`${title} photo unavailable`}
            />
          </Stack>

          {/* Lower Section */}
          <Stack
            flex={2}
            justifyContent={"flex-end"}
            spacing={1}
            mt={2}
            rowGap={2}
          >
            {/* Title and Wishlist */}
            <Stack>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  variant="h6"
                  fontWeight={500}
                  sx={{ color: "#333" }}
                >
                  {title}
                </Typography>
                {!isAdminCard && (
                  <motion.div
                    whileHover={{ scale: 1.3, y: -10, zIndex: 100 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <Checkbox
                      onClick={(e) => e.stopPropagation()}
                      checked={isProductAlreadyinWishlist}
                      onChange={(e) => handleAddRemoveFromWishlist(e, id)}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                  </motion.div>
                )}
              </Stack>
              <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
                {brand}
              </Typography>
            </Stack>

            {/* Price and Cart Button */}
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#2ecc71",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                ${price}
              </Typography>
              {!isWishlistCard ? (
                isProductAlreadyInCart ? (
                  <Typography
                    sx={{
                      color: "#e74c3c",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}
                  >
                    Added to cart
                  </Typography>
                ) : (
                  !isAdminCard && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 1 }}
                      onClick={(e) => handleAddToCart(e)}
                      style={{
                        padding: "10px 15px",
                        borderRadius: "25px",
                        outline: "none",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#3498db",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      Add To Cart
                    </motion.button>
                  )
                )
              ) : (
                ""
              )}
            </Stack>

            {/* Stock Warning */}
            {stockQuantity <= 20 && (
              <FormHelperText sx={{ fontSize: "0.9rem" }} error>
                {stockQuantity === 1
                  ? "Only 1 stock is left"
                  : "Only few are left"}
              </FormHelperText>
            )}
          </Stack>
        </Stack>
      ) : (
        ""
      )}
    </>
  );
};
