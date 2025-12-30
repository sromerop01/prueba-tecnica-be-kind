import axios from "axios";

const API_URL = "https://dev.apinetbo.bekindnetwork.com/api";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const authApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post(
      `${API_URL}/Authentication/Login`,
      payload
    );

    return response.data;
  },
};
