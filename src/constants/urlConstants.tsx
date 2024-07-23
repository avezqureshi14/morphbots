export const BASE_URL = import.meta.env.VITE_API_URL;

export const URLS = {
    LOGIN: `${BASE_URL}/admin-login`,
    CREATE_ADMIN: `${BASE_URL}/admin`,
    GET_ADMINS: `${BASE_URL}/admin`,
    DELETE_ADMIN: (id: string) => `${BASE_URL}/admin/${id}`,
    EDIT_ADMIN: (id: string) => `${BASE_URL}/admin/${id}`
};
