import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress"
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";


type Tab = {
    title: string;
    value: string;
    products: Product[];
}

export const ProductsTab = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [progress, setProgress] = useState<any>(13)

    const getAllCategories = async () => {
        setProgress(55);
        const products = await getAllProducts();
        console.log(products);
        setProgress(false);
        setProducts(products);
    }

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: products.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: products.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: products.filter(item => item.category === 'beverage')
        },
    ];

    useEffect(() => {
      setTimeout(() => {
        getAllCategories();
      }, 4000);
    }, []);
    
    // console.log(products);
    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex">

            {!progress && tabs.length > 0 && tabs.map(item => (
                <TabsTrigger key={item.value} value={item.value} className="flex-1">
                    {item.title}
                </TabsTrigger>
            ))}
            {progress &&  <Progress value={progress} className="w-[60%]" />}
            
            </TabsList>
            {tabs.map(item => (
                <TabsContent key={item.value} value={item.value} className="mt-6">
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                               <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && !progress && <ProductEmpty />}
                </TabsContent>
            ))}
           
        </Tabs>
    );
}