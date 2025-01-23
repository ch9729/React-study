import apiClient from "../utils/api-client";

// 제품 id, 수량 db에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`cart/${id}`, { quantity });
}
