import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    console.log(token);
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
    const response  = await authFetch(url);
    
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userController = {
    getMe,
};












 /* const getMe = async (token) => {
    try {
        const response = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjk2MTIxNTkyLCJleHAiOjE2OTg3MTM1OTJ9.p6Nl7LGPYdWpzcUYUFIXebRYQe_oYAFBTTn6gq7SVnY'}`
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const userController = {
    getMe
};

*/