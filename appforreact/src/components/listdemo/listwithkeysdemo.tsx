import { useState } from "react"
import { ListItem } from "./listItem"

export interface IListItems{
    items:ListItem[];
};
export function ListofItems(iListItems:IListItems) {
    const[listItems,updateItems]=useState(iListItems.items);

    const addItem=()=>{

        const item = listItems.find((i)=>!listItems.includes(i));
        if(item)
        {
            updateItems([...listItems,item]);
        }

    }
    const removeItem=(item:ListItem)=>{
        updateItems(listItems.filter((i)=>i!=item));
    }
    return  <div>
        <button onClick={addItem}>Add Item</button>
    <ul>
        {
            
            listItems.map((item)=> <li>
                 <button onClick={()=>removeItem(item)}>Remove Item</button>
                <div>
                {item.id}
            </div>

            <div>{item.title}</div></li>)
        }
    </ul>
    </div>
    
} 





    



