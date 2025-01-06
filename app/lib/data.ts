import { customers, images } from "../lib/mock-data";
import { CarouselItems, Customer } from "./types";

export function getCustomers(): Promise<Customer[]> {
  return new Promise((resolve) => {
    resolve(customers);
  });
}

export function getImages(): Promise<CarouselItems[]> {
  return new Promise((resolve) => {
    resolve(images);
  });
}
