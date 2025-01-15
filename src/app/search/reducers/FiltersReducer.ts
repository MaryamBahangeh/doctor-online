import { FiltersType } from "@/types/filters-type";

export type FiltersAction =
  | {
      type: "filtered";
      key: keyof FiltersType;
      value: string;
    }
  | {
      type: "deletedFilter";
      key: keyof FiltersType;
    }
  | {
      type: "deletedAllFilters";
    };

export const filtersReducer = (
  filters: FiltersType,
  action: FiltersAction,
): FiltersType => {
  switch (action.type) {
    case "filtered": {
      return { ...filters, [action.key]: action.value };
    }

    case "deletedFilter": {
      const clonedFilters = { ...filters };
      delete clonedFilters[action.key];
      return clonedFilters;
    }

    case "deletedAllFilters": {
      return {};
    }

    default: {
      throw Error("Unknown action");
    }
  }
};
