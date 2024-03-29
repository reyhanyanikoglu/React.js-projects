import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import './Course.css';

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};
/*
js de key value değerleri eşitse Angular: Angular, yerine direkt yazılabilir.
*/

function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;

//gelen propsa göre burada kurslar basılcak
