import apiClient from "../utils/api-client";

// 장바구니 상품들 주문
export function checkoutAPI() {
  return apiClient.post("order/checkout");
}
