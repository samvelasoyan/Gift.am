import { 
    watchList, 
    flowerList, 
    perfumeList, 
    jewelryList, 
    teddybearList,
    balloonsList,
    beveragesList,
    cakesList,
    hampersList
} from './data/data';

const productCreator = (id,{ image, name, price, description, category, tags}, arr) => {
    const product = {
        id,
        image: require(`${image}`),
        name,
        price,
        description,
        category,
        tags
    };
    return arr.push(product);
};

const id = () => {
    let id = Math.floor(Math.random() * 10000);
    return id;
};
export const perfume = [];
export const jewelry = [];
export const watches = [];
export const flowers = [];
export const teddybear = [];
export const beverage = [];
export const cakes = [];
export const hampers = [];
export const balloons = [];


perfumeList.map(item => productCreator(id(), {...item}, perfume))

watchList.map(item => productCreator(id(), {...item}, watches))

flowerList.map(item => productCreator(id(), {...item}, flowers))

jewelryList.map(item => productCreator(id(), {...item}, jewelry))

teddybearList.map(item => productCreator(id(), {...item}, teddybear))

balloonsList.map(item => productCreator(id(), {...item}, balloons))

beveragesList.map(item => productCreator(id(), {...item}, beverage))

cakesList.map(item => productCreator(id(), {...item}, cakes))

hampersList.map(item => productCreator(id(), {...item}, hampers))
