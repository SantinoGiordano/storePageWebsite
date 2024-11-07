import "../styles/backgrounds.css";
import "../styles/images.css";
import "../styles/workerInfo.css";

export function About() {
  const employees = [
    {
      name: "Alice Johnson",
      age: 32,
      img: "https://placehold.co/100x100",
      position: "Marketing Manager",
    },
    {
      name: "Robert Smith",
      age: 45,
      img: "https://placehold.co/100x100",
      position: "Chief Financial Officer",
    },
    {
      name: "Emily Chen",
      age: 28,
      img: "https://placehold.co/100x100",
      position: "Product Designer",
    },
    {
      name: "James Lee",
      age: 39,
      img: "https://placehold.co/100x100",
      position: "Software Engineer",
    },
    {
      name: "Sophia Patel",
      age: 31,
      img: "https://placehold.co/100x100",
      position: "Operations Manager",
    },
    {
      name: "David Martinez",
      age: 50,
      img: "https://placehold.co/100x100",
      position: "Chief Executive Officer",
    },
  ];

  return (
    <>
      <p className="teamworkBackground">
        <p className="box">
          <div className="employees-container">
            {" "}
            {employees.map((worker) => (
              <>
            <div className="employee-card">
                <div className="workerDetails">
                <img className="workerImg" src={worker.img} />
                    <div className="workerName">{worker.name}</div>
                    <div className="workerPosition">{worker.position}</div>
                  <div className="workerAge">{worker.age}</div>
                  <p/>
                </div>
            </div>
              </>
            ))}
          </div>
        </p>
      </p>
    </>
  );
}
