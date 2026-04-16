import AxiosInstance from "./AxiosInstance";

export const GenderService = {
    storeGender: async (data: { gender: string }) => {
        const response = await AxiosInstance.post("/gender/storeGender", data);
        return response;
    },
};

export default GenderService;