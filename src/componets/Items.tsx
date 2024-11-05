import { Data } from "./data";


export function Items() {
  const items = [
    " Michael Thompson",
    "Sarah Bennett",
    "James Miller",
    "Emily Harris",
    "David Robinson",
    "Jessica Parker",
    "Matthew Collins",
    "Olivia Turner",
    "Christopher Edwards",
    "Amanda Hughes",
    "Joshua Clark",
    "Ashley Scott",
    "Andrew Morris",
    "Megan Phillips",
    "Daniel Ross",
  ];
  return (
    <>
    <ul>
      {items.map((items) => (
        <div>{items}</div>
      ))}
    </ul>
    </>
  );
}
