import { FiltersType } from "@/types/filters-type";

export type FiltersAction =
  | {
      type: "updated_filtered";
      key: keyof FiltersType;
      value: string;
    }
  | {
      type: "removed_filter";
      key: keyof FiltersType;
    }
  | {
      type: "removed_all";
    };

export const filtersReducer = (
  filters: FiltersType,
  action: FiltersAction,
): FiltersType => {
  switch (action.type) {
    case "updated_filtered": {
      return { ...filters, [action.key]: action.value };
    }

    case "removed_filter": {
      const clonedFilters = { ...filters };
      delete clonedFilters[action.key];
      return clonedFilters;
    }

    case "removed_all": {
      return {};
    }

    default: {
      throw Error("Unknown action");
    }
  }
};
