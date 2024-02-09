import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  //random kurs getirecek fonksiyon
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  }; //daha öncekiler geçerli yeni elemanım getCourses'dan gelen eleman yanına ekleyecek

  const courseList = courses.map((course, index) => {
    //her bir elemana course dedik
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="butonum" onClick={handleClick}>
        Kurs Ekle
      </button>

      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;

/*
courses array'ini tek tek course componentine
geçmem gerek bunun için map fonksiyonu kullancam
map fonksiyonu ile array içindeki elemanları döneceğiz
*/
