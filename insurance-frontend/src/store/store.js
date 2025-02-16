import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import policyReducer from "../features/policies/policySlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/orders/orderSlice";
import claimReducer from "../features/claims/claimSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    policies: policyReducer,
    cart: cartReducer,
    orders: orderReducer,
    claims: claimReducer,
  },
});

export default store;
