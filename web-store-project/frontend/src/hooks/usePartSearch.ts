import { useState, useEffect } from "react";
import { searchParts } from "../apis/productRepository";
import type { Part } from "../../../shared/types/PartTypes";

export function usePartSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Part[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    function trySearch(): { isValid: boolean, errors: string[] } {
        if (!query.trim()) {
            return { isValid: false, errors: ["Please enter a part name"] };
        }
        if (query.trim().length < 2) {
            return { isValid: false, errors: ["Search must be at least 2 characters"] };
        }
        return { isValid: true, errors: [] };
    }

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            setIsOpen(false);
            return;
        }
        const debounce = setTimeout(async () => {
            const parts = await searchParts(query);
            setResults(parts);
            setIsOpen(true);
        }, 300);

        return () => clearTimeout(debounce);
    }, [query]);

    function closeDropdown() {
        setIsOpen(false);
        setQuery("");
    }

    return { query, setQuery, trySearch, results, isOpen, closeDropdown };
}