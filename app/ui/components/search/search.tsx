"use client";
import React from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const debouncedSearch = useDebouncedCallback((term: string) => {
        // onSearch(value);
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        // params.set('page', '1');
        if (term) {
        params.set('query', term);
        } else {
        params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 350);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    return (
        <input
            type="text"
            // defaultValue={searchParams.get('query')?.toString()}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}