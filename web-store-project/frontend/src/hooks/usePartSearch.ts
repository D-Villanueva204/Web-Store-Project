import { useState } from "react";

export function usePartSearch(initialValue: string = "") {
    const [searchValue, setSearchValue] = useState<string>(initialValue);

    function trySearch(): { isValid: boolean, errors: string[] } {
        if (!searchValue.trim()) {
            return { isValid: false, errors: ["Please enter a part name"] };
        }
        if (searchValue.trim().length < 2) {
            return { isValid: false, errors: ["Search must be at least 2 characters"] };
        }
        return { isValid: true, errors: [] };
    }

    return { searchValue, setSearchValue, trySearch };
}