import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function BookDetail() {

  const {title} = useParams()
  const {state} = useLocation()

  return (
    <div className="detail_box">
      <div className="img_box">
        <img src={state.thumbnail} alt={title} />
      </div>
      <div className="info">
        <p className="title">{state.title}</p>
        <p className="authors">저자 {state.authors}</p>
        <p className="publisher">출판 {state.publisher}</p>
        <p className="price">정가 {state.price}원</p>
        <a href={state.url} className="more">자세히 보기</a>
      </div>
      <div className="contents">
        <p>{state.contents ? state.contents : "No Contents"}</p>
        <p className="isbn">ISBN : {state.isbn}</p>
      </div>
    </div>
  )
}