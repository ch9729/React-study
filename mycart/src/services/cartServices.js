import apiClient from "../utils/api-client";

// 제품 id, 수량 db에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`cart/${id}`, { quantity });
}

export async function getCartAPI() {
  return await apiClient.get("/cart");
}

// 장바구니 제품 삭제
export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}
