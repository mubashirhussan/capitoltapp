"use client";

import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {
  ASSET_TYPES,
  CHAMBERS,
  COMMITTEE,
  COUNTRIES,
  GENDER,
  INDUSTRY_SECTORS,
  MARKET_CAP_TIERS,
  POLITICAL_PARTY,
  STATE_NAMES,
  TRADE_SIZE_TIERS,
  TRANSACTION_LABELS,
  TRANSACTION_TYPE,
} from "../../../../utils/constant";
import CustomDataTable from "@/components/CustomDataTable";

// Define a type for the filter options
interface FilterOption {
  label: string;
  value: string;
}

// Define a type for the filter object
interface Filter {
  label: string;
  options: FilterOption[];
}

// Define the filters
const filters: Filter[] = [
  {
    label: "Find by Politician",
    options: [
      { label: "Grapes", value: "grapes" },
      { label: "Mango", value: "mango" },
      { label: "Strawberry", value: "strawberry" },
    ],
  },
  {
    label: "Congress Chamber",
    options: Object.entries(CHAMBERS).map(([value, label]) => ({
      label,
      value,
    })), // Map CHAMBERS into options
  },

  {
    label: "Find by Issuer",
    options: [
      { label: "Milk", value: "milk" },
      { label: "Cheese", value: "cheese" },
      { label: "Yogurt", value: "yogurt" },
    ],
  },
  {
    label: "Issuer State",
    options: Object.entries(STATE_NAMES).map(([value, label]) => ({
      label,
      value,
    })), // Map States into options
  },
  {
    label: "Transaction Type",
    options: Object.entries(TRANSACTION_TYPE).map(([value, label]) => ({
      label,
      value,
    })), // Map Transaction Type into options
  },
  {
    label: "Political Party",

    options: Object.entries(POLITICAL_PARTY).map(([value, label]) => ({
      label,
      value,
    })), // Map Political Party into options
  },
  {
    label: "Committee",
    options: Object.entries(COMMITTEE).map(([value, label]) => ({
      label,
      value,
    })), // Map Committee Party into options
  },
  {
    label: "Sector",
    options: Object.entries(INDUSTRY_SECTORS).map(([value, label]) => ({
      label,
      value,
    })), // Map Industry Sector Party into options
  },
  {
    label: "Issuer Country",
    options: Object.entries(COUNTRIES).map(([value, label]) => ({
      label,
      value,
    })), // Map countries Party into options
  },
  {
    label: "Trade Size",
    options: TRADE_SIZE_TIERS.map((tier) => ({
      label: tier.display, // Use the `display` field for the dropdown label
      value: tier.id.toString(), // Use the `id` field as the unique value
    })),
  },
  {
    label: "Politician State",
    options: Object.entries(STATE_NAMES).map(([value, label]) => ({
      label,
      value,
    })), // Map States into options
  },
  {
    label: "Gender",
    options: Object.entries(GENDER).map(([value, label]) => ({ label, value })), // Map gender into options
  },
  {
    label: "Market Cap",
    options: MARKET_CAP_TIERS.map((mcap) => ({
      label: mcap.display,
      value: mcap.id.toString(),
    })),
  },
  {
    label: "Asset Type",
    options: Object.entries(ASSET_TYPES).map(([value, label]) => ({
      label,
      value,
    })), // Map Asset Type into options
  },
  {
    label: "Transaction Label",
    options: Object.entries(TRANSACTION_LABELS).map(([value, label]) => ({
      label,
      value,
    })), // Map Transaction Label into options
  },
];

const CustomDropdown = () => {
  // State to manage selected options for each filter
  const [selectedFilters, setSelectedFilters] = useState(
    filters.reduce((acc, filter) => {
      acc[filter.label] = [];
      return acc;
    }, {} as Record<string, FilterOption[]>)
  );

  // Handle filter selection changes
  const handleFilterChange = (
    label: string,
    selectedOptions: FilterOption[]
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [label]: selectedOptions,
    }));
  };
  const columns = [
    { name: "name", label: "Name" },
    { name: "age", label: "Age" },
  ];

  const data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 22 },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 ">
        {filters.map((filter) => (
          <div key={filter.label} className="trade-filters">
            <MultiSelect
              options={filter.options}
              value={selectedFilters[filter.label]}
              onChange={(selected: FilterOption[]) =>
                handleFilterChange(filter.label, selected)
              }
              labelledBy={`${filter.label}`}
              className=" w-auto text-size-3 font-medium bg-primary border-0"
              debounceDuration={300}
              // isOpen={true}
              closeOnChangedValue={false}
              valueRenderer={(selected) =>
                selected.length === 0
                  ? `${filter.label}`
                  : `${selected.length} selected`
              }
            />
          </div>
        ))}
      </div>

      <h3 className="font-bold mt-4">Selected Filters:</h3>
      <pre className="bg-gray-100 p-4 rounded text-black">
        {JSON.stringify(selectedFilters, null, 2)}
      </pre>
      <div className="my-4">
        <CustomDataTable title={"datatable"} columns={columns} data={data} />
      </div>
    </div>
  );
};

export default CustomDropdown;