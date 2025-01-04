import React, { useState } from "react";
import { debounce } from "lodash";

export function Search({onSearch}: {onSearch: (value: string) => void}) {
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearch = debounce((value: string) => {
        onSearch(value);
    }, 500);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedSearch(value);
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
        />
    )
}