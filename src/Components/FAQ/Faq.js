import React, {useState,useEffect} from 'react'
import './Faq.css'
import {db} from '../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'

const Faq = () => {

  const [selected,setSelected] = useState('')
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState('')
  const[faq,setFaq] = useState([])

  const toggle = (i) => {
      if(selected == i){
        return setSelected(null)
      }

      setSelected(i)
  }

  const getFaq = async () => {
    setLoading(true);
    const allData = onSnapshot(collection(db,'faq'),(snapshot)=>{
      console.log({allData});
      let list = []
      snapshot.docs.forEach((doc)=>{
        list.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setFaq(list.filter(item => item.status === 'active'))
      setLoading(false)
    },(error)=>{
      setError(error.message)
    });
    return ()=>{
      allData()
    };
  }

  useEffect(()=>{
    getFaq();
  },[]);

  return (
    <div className = 'faq'>
      <h1>FAQ</h1>

      {faq.map((faqData,i)=>(
        <div className='faqData'>
          <div className = 'question' onClick = {()=>toggle(i)}>
            <h4>{faqData.question}</h4>
            <div className='icons'>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
          </div>

          <div className = {selected == i? 'content show' : 'content'}>
            {faqData.answer}
          </div>

        </div>
      ))}
    </div>
  )
}

export default Faq