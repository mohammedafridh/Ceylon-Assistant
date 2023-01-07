import { createContext, useContext, useState, useEffect} from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";


const usersContext = createContext();

export function UserProvider({children}) {
    const [guides, setGuides] = useState([]);
    const [tourists,setTourists] = useState([])

    useEffect(() => {
        const guidesCollection = onSnapshot(
          collection(db, "Guides"),
          (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
              list.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            console.log({list})
            setGuides(list);
          }
        );
        return () => {
          guidesCollection();
        };
      }, []);

      useEffect(() => {
        const touristCollection = onSnapshot(
          collection(db, "Tourist"),
          (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
              list.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setTourists(list);
          }
        );
        return () => {
            touristCollection();
        };
      }, []);

      const context = {
        guides,
        tourists
    }

    return (
        <usersContext.Provider value={context}>
            {children}
        </usersContext.Provider>
    )

}

export function useUser() {
    return useContext(usersContext);
}