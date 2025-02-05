"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./GlobalSearchBox.module.css";
import Button, { Variant } from "@/components/Button/Button";

function GlobalSearchBox() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filtered",
          key: "query",
          value: query,
        });
      } else {
        dispatchFilters({ type: "removed_filter", key: "query" });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (!filters.query) {
      setQuery("");
    }
  }, [filters]);

  return (
    <form className={styles["search-box"]} onSubmit={onsubmitHandler}>
      <div className={styles["input-container"]}>
        <MingcuteSearchLine className={styles.prefix}></MingcuteSearchLine>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Doctor name, Speciality, Desease name,...."
        />
      </div>

      <div className={styles.divider}></div>

      <Button variant={Variant.TEXT}>
        <MingcuteLocationLine></MingcuteLocationLine>
        All Countries
      </Button>
    </form>
  );
}

export default GlobalSearchBox;
