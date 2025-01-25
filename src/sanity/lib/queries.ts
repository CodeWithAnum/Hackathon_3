import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "products"]`;
export const four = groq `*[_type == "products"][0..3]`;

export const HoodieProductsQuery = groq`*[_type == "products" && category == "hoodie"]`;

export const JeansProductsQuery = groq`*[_type == "products" && category == "jeans"]`;

export const ShirtsProductsQuery = groq`*[_type == "products" && category == "shirt"]`;

export const TShirtProductsQuery = groq`*[_type == "products" && category == "tshirt"]`;

export const ShortProductsQuery = groq`*[_type == "products" && category == "short"]`;
