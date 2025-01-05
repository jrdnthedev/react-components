"use client";

import { Customer } from "@/app/lib/types";
import React ,{ useEffect, useRef, useState } from "react";
import style from "./combobox.module.css";

interface ComboboxProps {
    options: Customer[];
    label: string;
    comboId: string;
}

export function Combobox({ options, comboId,  label }: ComboboxProps) {
    const [selectValue, setSelectValue] = useState('select a customer');
    const [isOpen, setIsOpen] = useState(false);
    const comboContainerRef = useRef<HTMLDivElement>(null);
    const listboxInputRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setIndex] = useState(0);

    //handle click outside the combo box
    useEffect(() => {        
        function handleClickOutside(event: any) {
            // Check if the click is outside the referenced element
            if (comboContainerRef.current && !comboContainerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
       
        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, comboContainerRef, setIsOpen]);

    //handle keydown event
    useEffect(() => {
        const el = comboContainerRef.current;
        function handleComboKeydown(event: any) {
            const key = event.key;
            
            if(['ArrowDown', 'ArrowUp','','Enter'].includes(key)) {
                event.preventDefault();
                setIsOpen(true);
                setTimeout(() => {
                    const options = el?.querySelectorAll('div[class*="comboOption"]');
                    
                    const val = options?.item(selectedIndex) as HTMLElement;
                    val.focus();
                }, 200);
                
            } else {
                setIsOpen(false);
            }
        }
        
        function handleKeyDown(event: any) {
            if(!isOpen) return;

            if (event.key === "ArrowDown") {
                setIndex((prevIndex) =>
                    prevIndex < options.length - 1 ? prevIndex + 1: options.length - 1
                );
            } else if (event.key === "ArrowUp") {
                setIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : 0
                );
            } else if (event.key === "Enter") {
                setSelectValue(options[selectedIndex].name);
                setIsOpen(false);
                setFocus();
            }
        }

        if(!isOpen) el?.removeEventListener("keydown", handleKeyDown);
        el?.addEventListener("keydown", handleComboKeydown);
        el?.addEventListener("keydown", handleKeyDown);

        return () => {
            // Clean up the event listener on component unmount
            el?.removeEventListener("keydown", handleComboKeydown);
            el?.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, options, selectedIndex,setSelectValue]);

    function setFocus() {
        listboxInputRef.current?.focus();
    }
    
    return (
        <div className={style.combo} ref={comboContainerRef}>
            <div id={comboId} data-testid="option-label" className={style.comboLabel} onClick={() => listboxInputRef.current?.focus()}>
                {label}:
            </div>
            <div aria-controls={comboId}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-labelledby={comboId}
                id={comboId}
                ref={listboxInputRef}
                className={style.comboInput}
                role="combobox"
                data-testid="option-selected-value"
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}>
                    {selectValue}
            </div>
            <div className={`${style.comboMenu} ${isOpen ? style.open : ""}`}
                role="listbox"
                id={comboId}
                aria-labelledby={comboId}
                data-testid="option-listbox"
                tabIndex={-1}>
                {options.map((option,index) => ( 
                    <div 
                        role="option"
                        tabIndex={0} id={option.id} 
                        key={option.id} 
                        className={style.comboOption} 
                        aria-selected={selectedIndex === index}
                        data-testid="option-value" 
                        onClick={
                            (e) => {
                                setIsOpen(!isOpen); 
                                setSelectValue(option.name);
                                setIndex(index);
                                setFocus();
                            }}>
                        {option.name}
                    </div>
                    ))}
            </div>
        </div>

    );
}

