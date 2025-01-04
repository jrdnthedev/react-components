"use client";
import { Button } from "./ui/components/button/button";
import { Select } from "./ui/components/select/select";
import { customers,images } from "./lib/mock-data";
import { Combobox } from "./ui/components/combobox/combobox";
import { Carousel } from "./ui/components/carousel/carousel";
import { Form } from "./ui/components/form/form";
import { Search } from "./ui/components/search/search";
import { useState } from "react";

export default function Home() {
  const [filteredCustomers,setFilteredCustomers] = useState(customers);
  return (
    <div id="home">
      <h1>HomePage</h1>
      <div className="section">
        <Button onClick={() => console.log("clicked")}>Click me</Button>
      </div>

      <div className="section">
        <Select options={customers} label="Cusomters" onChange={(value) => console.log(value)} />
      </div>

      <div className="section">
        <Select options={customers} label="testcustomers" onChange={(value) => console.log(value)} />
      </div>

      <div className="section">
       <Combobox options={customers} label="Combobox" comboId="uniqueIdentifier" onChange={(value) => console.log(value)} />
      </div>

      <div className="section">
       <Combobox options={customers} label="Combobox2" comboId="testIdentifier" onChange={(value) => console.log(value)} />
      </div>

      <div className="section">
        <Carousel imageData={images} />
      </div>

      <div className="section">
        <Form />
      </div>

      <div className="section">
        <Search onSearch={(value) => {  
          setFilteredCustomers(customers.filter((customer) => customer.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
        }} />

        <div>
          <h2>Search Results</h2>
          <ul>
            {filteredCustomers.map((customer) => (
              <li key={customer.id}>{customer.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
