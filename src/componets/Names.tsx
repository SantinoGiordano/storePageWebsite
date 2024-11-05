export function Names() {
  const names = [
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
  names.map((name: string, index: number) => console.log(name, index));

  const namesList: string = names.join("\n");
  console.log(namesList);


  return <div>{namesList}</div>;
}
