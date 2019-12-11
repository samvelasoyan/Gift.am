import img1 from './images/products/perfume/bleu-de-chanel.jpg';
import img2 from './images/products/perfume/allure-homme-sport-eau.jpg';
import img3 from './images/products/perfume/coco-mademoiselle-85.jpg';
import img4 from './images/products/perfume/coco-parfum.jpg';
import img5 from './images/products/perfume/chance-eau-tendre.jpg';
import img6 from './images/products/perfume/platinum-egoiste.jpg';
import img7 from './images/products/perfume/pacco-rabanne-lady-million.jpg';
import img8 from './images/products/perfume/lady-million-empire.jpg';
import img9 from "./images/products/perfume/dior-jadore.jpg";
import img10 from './images/products/perfume/miss-dior.jpg';


const productCreator = (id, image, name, price, description, category, arr) => {
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

const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const perfume = [];

productCreator(id(), img1, 'Bleu De Chanel', 155, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img2, 'Allure Homme Sport', 95, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img3, 'Coco Mademoiselle', 85, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img4, 'Coco Parfum', 210, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img5, 'Chance Eau Tendre', 105, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img6, 'Platinum Egoiste', 95, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img7, 'Lady Million', 100, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img8, 'Lady Million Empire', 85, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img9, "Dior J'adore", 70, {bool: false, txt}, 'perfume', perfume);
productCreator(id(), img10, 'Miss Dior', 80, {bool: false, txt}, 'perfume', perfume);
// productCreator(id(), img1, 'Bleu De Chanel', 154, txt, 'perfume', perfume);
// productCreator(id(), img1, 'Bleu De Chanel', 154, txt, 'perfume', perfume);
