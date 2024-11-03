import { Container } from "@/components/shared/Container";
import { CategoriesList } from "@/components/shared/CategoriesList";
import Image from "next/image";

const Categories = () => {
    return (
        <main className="flex-grow">
            <Container className="pt-6">
                <h1 className="text-header-xl font-bold mb-[60px]">Каталог</h1>

                <CategoriesList />
                <div className="grid grid-cols-4 gap-10 mb-20">
                    {/* <div className="col-span-2">
                        <Image src="/images/cats/cat-1.png" alt="Молоко, сыр, яйцо" width={584} height={200}/>
                        <p>Молоко, сыр, яйцо</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-2.png" alt="Хлеб" width={272} height={200}/>
                        <p>Хлеб</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-3.png" alt="Фрукты и овощи" width={272} height={200}/>
                        <p>Фрукты и овощи</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-4.png" alt="Замороженные продукты" width={272} height={200}/>
                        <p>Замороженные продукты</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-5.png" alt="Напитки" width={272} height={200}/>
                        <p>Напитки</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-6.png" alt="Кондитерские изделия" width={272} height={200}/>
                        <p>Кондитерские изделия</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-7.png" alt="Чай, кофе" width={272} height={200}/>
                        <p>Чай, кофе</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-8.png" alt="Бакалея" width={272} height={200}/>
                        <p>Бакалея</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-9.png" alt="Здоровое питание" width={272} height={200}/>
                        <p>Здоровое питание</p>
                    </div>
                    <div className="col-span-2">
                        <Image src="/images/cats/cat-10.png" alt="Зоотовары" width={584} height={200}/>
                        <p>Зоотовары</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-11.png" alt="Детское питание" width={272} height={200}/>
                        <p>Детское питание</p>
                    </div>
                    <div className="col-span-2">
                        <Image src="/images/cats/cat-12.png" alt="Мясо, птица, колбаса" width={584} height={200}/>
                        <p>Мясо, птица, колбаса</p>
                    </div>
                    <div>
                        <Image src="/images/cats/cat-13.png" alt="Непродовольственные товары" width={272} height={200}/>
                        <p>Непродовольственные товары</p>
                    </div> */}
                </div>
            </Container>
        </main>
    );
};

export default Categories;