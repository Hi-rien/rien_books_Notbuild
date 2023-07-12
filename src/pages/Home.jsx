import axios from 'axios'
import React, {useEffect, useState} from "react";
import $ from "jquery"
import Result from "../components/Result";


export default function Home() {

  const REST_API_KEY = "6fa6cd762f56f824defac792de87367a"

  const[query,setQuery] = useState('선물');
  const[page,setPage] = useState(1);
  const[last,setLast] = useState(1);
  const[target,setTarget] = useState('title')
  const [documents,setDocuments] = useState(null);
  const callAPI = async() =>{
      const url = `https://dapi.kakao.com/v3/search/book?target=${target}&query=${query}&page=${page}`;
      const config = {headers:`Authorization: KakaoAK ${REST_API_KEY}`};
      const result = await axios(url,config);
      setDocuments(result.data.documents);
      const total = result.data.meta.pageable_count;
      setLast(Math.ceil(total/10))
      console.log(result.data.documents)
  }

    useEffect(()=>{
      callAPI();
  },[page])

  const onSubmit  =(e) => {
      e.preventDefault();
      callAPI();
      setPage(1);
  }

  if(documents===null){
      return <h1>로딩중........</h1>
  }


  return (
    <div className='main_contents'>
        <h1>도서검색</h1>
        <form onSubmit={onSubmit}>
            <select name="option" id="option" onChange={(e)=>{setTarget(e.target.value)}}>
              <option name="option" value="title" >제목</option>
              <option name="option" value="publisher" >출판사</option>
              <option name="option" value="person" >작가</option>
            </select>
            <input type="text" placeholder='검색어' value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button>검색</button>
        </form>
        <div className='documents'>
            {documents.map(d=>(
              <Result 
                key={d.isbn}
                title={d.title}
                authors={d.authors}
                publisher={d.publisher}
                thumbnail={d.thumbnail}
                contents={d.contents}
                price={d.price}
                isbn = {d.isbn}
                url = {d.url}
                />
            ))}
        </div>
        <div className='pages'>
            <button onClick={()=>setPage(page-1)} disabled={page===1}>이전</button>
            <span style={{margin:'10px'}}>{page}/{last}</span>
            <button onClick={()=>setPage(page+1)} disabled={page===last}>다음</button>
        </div>
    </div>
  )
}