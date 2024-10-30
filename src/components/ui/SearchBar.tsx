'use client'

import React, { useState } from "react";

type SearchBarProps = {
    placeholder?: string,
    onSearch?: (value: string) => void
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Найти товар', onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <div className="flex justify-between gap-3 rounded border w-[375px] border-salad-enabled p-2">
            <input className="w-full pl-2 placeholder:text-s placeholder:text-gray-hard outline-none" type="text" value={searchValue} placeholder={placeholder} onChange={handleInputChange} />
            <button onClick={handleSearch}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z" fill="#414141" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;