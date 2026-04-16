import { useState, type FC, type FormEvent } from "react";
import axios from "axios";
import SubmitButton from "../../../components/Button/SubmitButton";
import FloatingLabelInput from "../../../components/Input/FloatingLabelInput";
import { GenderService } from "../../../services/GenderService";
import { type GenderFieldErrors } from "../../../interfaces/GenderFieldErrors";

interface AddGenderFormProps {
    onGenderAdded: (message: string) => void;
}

export const AddGenderForm: FC<AddGenderFormProps> = ({ onGenderAdded }) => {
    const [loadingStore, setLoadingStore] = useState(false);
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState<GenderFieldErrors>({});

    const handleStoreGender = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setLoadingStore(true);

            await new Promise((resolve) => setTimeout(resolve, 1200));

            const res = await GenderService.storeGender({ gender });

            if (res.status === 200) {
                setErrors({});
                setGender("");

                if (res.data?.message) {
                    onGenderAdded(res.data.message);
                }
            }
        } catch (error: unknown) {
            if (
                axios.isAxiosError(error) &&
                error.response &&
                error.response.status === 422
            ) {
                setErrors(error.response.data.errors);
            } else {
                console.error(error);
            }
        } finally {
            setLoadingStore(false);
        }
    };

    return (
        <form onSubmit={handleStoreGender} className="space-y-5">
            <div className="w-full">
                <FloatingLabelInput
                    label="Gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    autoFocus
                    errors={errors.gender}
                />
            </div>

            <div className="flex justify-end pt-2">
                <SubmitButton
                    label="Save Gender"
                    loading={loadingStore}
                    loadingLabel="Saving Gender..."
                />
            </div>
        </form>
    );
};

export default AddGenderForm;