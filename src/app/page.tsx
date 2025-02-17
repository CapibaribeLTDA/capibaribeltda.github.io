'use client'
import './page.css';

export default function Home() {
  return (
    <div id="frame1" className="">
      <h1>Home</h1>
      <div id="bubble1" className="bubble"><button onFocus={() => {}}></button></div>
      <div id="bubble2" className="bubble"><button onFocus={() => {}}></button></div>
      <div id="bubble3" className="bubble"><button onFocus={() => {}}></button></div>
      <div id="bubble4" className="bubble"><button onFocus={() => {}}></button></div>
      <p id="step-description"></p>
    </div>
  );
}
