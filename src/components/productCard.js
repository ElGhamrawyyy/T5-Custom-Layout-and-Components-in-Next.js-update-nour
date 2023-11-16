import Image from "next/image";
import 'animate.css/animate.min.css';

export default function ProductCard({price, color, name, image}) {
    return (
        <div className="group relative animate__animated animate__bounce">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={image} width={200} height={200}
                       alt={name}
                       class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />

            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
        </div>
    );
}