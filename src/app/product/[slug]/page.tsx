
import { client } from "@/sanity/lib/client";
import { product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug: string): Promise<product > {
    return client.fetch (
        groq`*[_type == "products" && slug.current == $slug][0]{
        _id,
        name,
        products,
        _type,
        "slug": slug.current,
        image,
        description,
        sizes,
        price,
        rating,
        }`, {slug}
    )
}

export default async function ProductPage({params} : ProductPageProps){
    const {slug} = await params;
    const products = await getProduct(slug) 
  
    
    return(
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {products.image && (
                        <Image src={urlFor(products.image).url()} alt={products._id} width={500} height={500} className="rounded-lg shadow-md"/>
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{products.name}</h1>
                    <p>{products.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(products.rating) ? 'text-[#FFAD33]' : 'text-yellow-400'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {products.sizes && products.sizes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {products.sizes.map((size) => (
                  <Button key={size} variant="outline" className="px-6 py-3 text-lg">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

                    <p className="text-2xl font-sans">${products.price}</p>
                   
                    
                </div>
            </div>
        </div>
    )
}