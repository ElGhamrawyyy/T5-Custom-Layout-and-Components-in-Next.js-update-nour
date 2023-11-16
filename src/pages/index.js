import Header from "@/components/header";
import Footer from "@/components/footer";
import "../app/globals.css";
import Image from "next/image";
import Layout from "@/components/layout";
import ProductCard from "@/components/productCard";

export default function Home() {
    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <ProductCard price={200} color="Black" name="Basic Tee" image="/product.jpg"></ProductCard>
                        <ProductCard price={300} color="Red" name="Basic Tee 1" image="/product.jpg"></ProductCard>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
