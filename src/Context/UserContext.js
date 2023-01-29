import { createContext, useContext, useState, useEffect} from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { useUserAuth } from "./Context";

const usersContext = createContext();

export function UserProvider({children}) {
    const [guides, setGuides] = useState([]);
    const [tourists,setTourists] = useState([])
    const [userType, setUserType] = useState('')
    const {user} = useUserAuth()
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

      useEffect(()=>{
        const isGuide = guides.find(guide => guide.id === user.uid)
        const isTourist = tourists.find(tourist => tourist.id === user.uid)
        if(isGuide){
            setUserType('guide')
        }else if(isTourist){
            setUserType('tourist')
        }
      },[guides,tourists,user.uid])

      const context = {
        guides,
        tourists,
        userType
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