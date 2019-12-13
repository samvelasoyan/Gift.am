import { watchList, flowerList, perfumeList} from './data/data';

const productCreator = (id,{ image, name, price, description, category}, arr) => {
    const product = {
        id,
        image,
        name,
        price,
        description,
        category
    };
    return arr.push(product);
};

const id = () => {
    let id = Math.floor(Math.random() * 10000);
    return id;
};
export const perfume = [];
export const watches = [];
export const flowers = [];

perfumeList.map(item => productCreator(id(), {...item}, perfume))

watchList.map(item => productCreator(id(), {...item}, watches))

flowerList.map(item => productCreator(id(), {...item}, flowers))