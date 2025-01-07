import { FiltersType } from "@/app/search/types/filters-type";
import { ServiceType } from "@/enums/service-type";

export type FiltersAction =
  | {
      type: "setServiceType";
      serviceType: ServiceType;
    }
  | {
      type: "setSpecialityId";
      specialityId: string;
    };

export const filtersReducer = (
  filters: FiltersType,
  action: FiltersAction,
): FiltersType => {
  switch (action.type) {
    case "setServiceType": {
      return { ...filters, serviceType: action.serviceType };
    }

    case "setSpecialityId": {
      return { ...filters, specialityId: action.specialityId };
    }

    default: {
      throw Error("Unknown action");
    }
  }
};
