import { Button } from "./ui/components/button/button";
import { Select } from "./ui/components/select/select";
import { Combobox } from "./ui/components/combobox/combobox";
import { Carousel } from "./ui/components/carousel/carousel";
import { Form } from "./ui/components/form/form";
import { Search } from "./ui/components/search/search";
import { getCustomers, getImages } from "./lib/data";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const customers = await getCustomers();
  const images = await getImages();
  const query = searchParams?.query || "";
  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div id="home">
      <h1>HomePage</h1>
      <div className="section">
        <Button>Click me</Button>
      </div>

      <div className="section">
        <Select options={customers} label="Cusomters"/>
      </div>

      <div className="section">
        <Select options={customers} label="testcustomers"/>
      </div>

      <div className="section">
       <Combobox options={customers} label="Combobox" comboId="uniqueIdentifier" />
      </div>

      <div className="section">
       <Combobox options={customers} label="Combobox2" comboId="testIdentifier" />
      </div>

      <div className="section">
        <Carousel imageData={images} />
      </div>

      <div className="section">
        <Form />
      </div>

      <div className="section">
        <Search placeholder="...Search Customers"/>

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
