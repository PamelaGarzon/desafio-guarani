import { useFormContext } from "react-hook-form";
import {
  formatZipCode,
  removeSpecialCharacters,
} from "../../../../helpers/utils/formatters.utils";
import { BRAZIL_STATES } from "../constants";
import { useGetAddressByZipCode } from "./useGetAddressByZipCode";

const ZIP_CODE_MASK_LENGTH = 8;

type AddressInfo = {
  street: string;
  complement?: string;
  neighborhood: string;
  state: string;
  city: string;
};

export const useAddressRegisterForm = () => {
  const methodsForm = useFormContext();

  const { getAddressByZipCode, loading } = useGetAddressByZipCode();

  const setStateValue = (stateValue: string) => {
    const currentState = BRAZIL_STATES.find(
      (state) => state.value === stateValue
    )?.value;

    return currentState;
  };

  const setAddressInfoFields = (addressInfo: AddressInfo) => {
    const state = setStateValue(addressInfo.state);

    methodsForm.setValue("street", addressInfo.street);
    methodsForm.setValue("complement", addressInfo.complement);
    methodsForm.setValue("neighborhood", addressInfo.neighborhood);
    methodsForm.setValue("city", addressInfo.city);
    methodsForm.setValue("state", state);
  };

  const clearAddressInfoFields = () => {
    methodsForm.resetField("street");
    methodsForm.resetField("complement");
    methodsForm.resetField("neighborhood");
    methodsForm.resetField("city");
    methodsForm.resetField("state");
  };

  const handleApplyZipCodeMask = (document: string) => {
    methodsForm.setValue("zipCode", formatZipCode(document));
    methodsForm.clearErrors("zipCode");
  };

  const handleManageFieldsByZipCode = async (value: string) => {
    const zipCodeWithoutMask = removeSpecialCharacters(value);

    if (zipCodeWithoutMask?.length === ZIP_CODE_MASK_LENGTH) {
      const info = await getAddressByZipCode(zipCodeWithoutMask);

      if (info) {
        setAddressInfoFields(info);
      } else {
        clearAddressInfoFields();
      }
    } else {
      clearAddressInfoFields();
    }
  };

  return {
    methodsForm,
    isFetchingAddress: loading,
    handleApplyZipCodeMask,
    handleManageFieldsByZipCode,
  };
};
