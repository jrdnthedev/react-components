"use client";
import { Button } from "./ui/components/button/button";
import { Select } from "./ui/components/select/select";
import { customers,images } from "./lib/mock-data";
import { Combobox } from "./ui/components/combobox/combobox";
import { Carousel } from "./ui/components/carousel/carousel";

export default function Home() {

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
        
      </div>
    </div>
  )
}
