import React, { Fragment } from "react";
import Box from "./Box";
import background from "../images/IMG_14224.jpg";
import jewelryBG from "../images/categories/jewelry1.jpg";
import flowersBG from "../images/categories/flowers.jpg";
import beverageBG from "../images/categories/drinks.jpeg";
import watchesBG from "../images/categories/watches1.jpg";
import perfumeBG from "../images/categories/perfume.jpg";
import teddybearBG from "../images/categories/teddybear.jpg";

export default function Categories() {
    return (
        <div
            className="cat-container"
            style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
        >
            <h1>categories</h1>
            <div className="categories" id="categories">
                <Box background={perfumeBG} text="perfume" />
                <Box background={jewelryBG} text="jewelry" />
                <Box background={flowersBG} text="flowers" />
                <Box background={beverageBG} text="beverage" />
                <Box background={watchesBG} text="watches" />
                <Box background={teddybearBG} text="teddy bear" />
            </div>
        </div>
    );
}
