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
    }
  | {
      type: "deleteAllFilters";
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
    case "deleteAllFilters": {
      return {
        ...filters,
        specialityId: undefined,
        serviceType: ServiceType.BOTH,
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
};
