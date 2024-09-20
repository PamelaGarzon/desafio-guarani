import axios from "axios";
import { RegisterFormValues } from "../components/forms/ContactRegisterForm/types";

const BASE_URL = "http://localhost:3000";
export const postRegisterContact = async (data: RegisterFormValues) => {
  const response = await axios.post(`${BASE_URL}/contacts`, data);
  return response.data;
};
