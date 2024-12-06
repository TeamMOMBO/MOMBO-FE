export interface ApiResponse<T = unknown> {
  status: number;
  res_data?: T;
}
