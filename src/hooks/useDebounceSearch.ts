import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useDebounceSearch = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams()

    const ref = useRef<boolean>(false)

    useEffect(() => {
        if (ref?.current) {
            const handler: NodeJS.Timeout = setTimeout(() => {
                setDebouncedValue(value);
                setSearchParams({ search: value }, { replace: true })
            }, delay);
            return () => {
                // Cancel the timeout if value changes (also on delay change or unmount)
                clearTimeout(handler);
            };
        }
    }, [value, delay, setSearchParams]);

    return debouncedValue;
}

export default useDebounceSearch