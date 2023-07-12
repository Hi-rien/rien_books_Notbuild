import React from "react";
import logo from '../img/book.png'

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" className="foot_logo" />
      <p>본 사이트는 상업용 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다.</p>
      <p>홈페이지의 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다.</p>
    </footer>
  )
}