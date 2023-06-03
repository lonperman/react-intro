import { useState } from "react";

function useLocalStorage(itemName: string, initialValue: Task[]) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem: Task[];
  
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = useState<Task[]>(parsedItem);
  
    const saveItem = (newItem:Task[]) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem] as const;
}

export {useLocalStorage};
