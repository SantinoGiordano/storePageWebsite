import "../styles/backgrounds.css";
import "../styles/images.css";
import "../styles/workerInfo.css";
import "..//styles/scrollingText.css"
import { useEffect } from "react";

export function About() {
  
    const employees = [
    {
      name: "Alice Johnson",
      age: 32,
      img: "BlackShirtBoy.jpg",
      position: "Marketing Manager",
    },
    {
      name: "Robert Smith",
      age: 45,
      img: "blueShirtPerson.jpg",
      position: "Chief Financial Officer",
    },
    {
      name: "Emily Chen",
      age: 28,
      img: "blueShirtBoy.jpg",
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

  useEffect(() => {
    const hiddenElements = document.querySelectorAll<HTMLElement>(".hidden");

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add("show");
          observer.unobserve(targetElement);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    hiddenElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);
  return (
    <>
      <div className="content"></div>
      <div className="teamworkBackground">
        <div className="ourTeam">Our Team</div>
        <div className="box">
          <div className="employees-container">
            {employees.map((worker) => (
              <div className="employee-card hidden" key={worker.name}>
                <div className="workerDetails">
                  <img className="workerImg" src={worker.img} alt={`${worker.name}'s photo`} />
                  <div className="workerInfo">
                    <div className="workerName">{worker.name}</div>
                    <div className="workerMeta">
                      <span className="workerPosition">{worker.position}</span>, 
                      <span className="workerAge"> Age: {worker.age}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
