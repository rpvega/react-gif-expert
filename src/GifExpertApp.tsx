import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState<string[]>(['one punch']);

    const onNewCategory = (newCategory: string): void => {
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