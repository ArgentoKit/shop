import Image from "next/image";

const catsList = [
    'Молоко, сыр, яйцо',
    'Хлеб',
    'Фрукты и овощи',
    'Замороженные продукты',
    'Напитки',
    'Кондитерские изделия',
    'Чай, кофе',
    'Бакалея',
    'Здоровое питание',
    'Зоотовары',
    'Детское питание',
    'Мясо, птица, колбаса',
    'Непродовольственные товары'
];

type CategoriesListProps = {

};

export const CategoriesList = () => {
    return (
        <div className="grid grid-cols-4 gap-10 mb-20">
            {
                catsList.map((cat, index) => (
                    <div className={`group ${[0, 9, 11].includes(index) ? 'col-span-2' : ''} relative shadow-greenXS cursor-pointer`}>
                        <Image src={`/images/cats/cat-${index + 1}.png`} alt={cat} width={584} height={200} />
                        <div className="absolute w-full h-[117px] bottom-0 flex items-end p-[10px] gradient-green group-hover:gradient-orange">
                            <p className="text-m font-bold text-surface">{cat}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};