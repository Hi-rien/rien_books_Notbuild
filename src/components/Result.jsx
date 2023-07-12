import React from "react";
import { useNavigate } from "react-router-dom";


export default function Result(props) {

  const navigate = useNavigate()

  const onClickBookItem = () => {
    navigate(`/book/${props.title}`, {
      state: props
    })
  }

  return (
    <div className='box' onClick={onClickBookItem}>
      <img src={props.thumbnail ? props.thumbnail:'http://via.placeholder.com/120X150'} alt={props.title} />
      <div className="desc">
        <div className='title'>{props.title}</div>
        <div className="authors">{props.authors}</div>
        <div className="publisher">{props.publisher}</div>
      </div>
    </div>
  )
}