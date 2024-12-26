"use client";
import { Customer } from "@/app/lib/types";
import style from "./select.module.css";
import React ,{ useState } from "react";

interface SelectProps {
    options: Customer[];
    label: string;
    onChange: (value: string) => void;
}

export function Select({ options,label, onChange }: SelectProps) {
    const [selectValue,setSelectValue] =  useState('no value selected');
    const listItems = options.map((option) => (
        <option key={option.id} value={option.name}>
            {option.name}
        </option>
    ))

    return (
        <div className="select-container">
            <div>
                <label htmlFor={label + 'label'}>{label}:</label>
                <select id={label + 'label'} className={style.select} onChange={(e) => {onChange(e.target.value);setSelectValue(e.target.value)}} >
                    <option value="Select a Value" disabled>Select a Value</option>
                    {listItems}
                </select>
            </div>
            <p>Selected: {selectValue}</p>
        </div>
    )
}