import { customers, images } from "../lib/mock-data";
import { CarouselItems, Customer } from "./types";

export function getCustomers(): Promise<Customer[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, 1000);
  });
}

export function getImages(): Promise<CarouselItems[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(images);
    }, 1000);
  });
}
