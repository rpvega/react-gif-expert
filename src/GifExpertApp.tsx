import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    const onNewCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            {
                <AddCategory
                    onNewCategory={onNewCategory} />
            }

            {
                categories.map((category: string, index: number) => (
                    <GifGrid
                        key={index}
                        category={category} />
                ))
            }
        </>
    )
}