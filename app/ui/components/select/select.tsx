"use client";
import { Customer } from "@/app/lib/types";
import style from "./select.module.css";
import React ,{ useState } from "react";

interface SelectProps {
    options: Customer[];
    label: string;
}

export function Select({ options,label }: SelectProps) {
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
                <select data-testid="select" id={label + 'label'} className={style.select} onChange={(e) => {setSelectValue(e.target.value)}} >
                    <option value="Select a Value" disabled>Select a Value</option>
                    {listItems}
                </select>
            </div>
            <p data-testid="selected-value">Selected: {selectValue}</p>
        </div>
    )
}