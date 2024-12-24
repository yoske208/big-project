import { useEffect } from "react";
import { TerrorModel } from "../../Interface/Interfaces";

interface Props {
  terrors: TerrorModel[];
}

export default function AttacType({ terrors }: Props) {
  
  if (terrors) {

    console.log(1);
    
    console.log(terrors.length);
    

    return (
      <div>
      <h1>AttacType</h1>
     
    </div>
   
   
   
  );
}
else {
  return (
    <div>
      <h1>AttacType</h1>
    </div>
  );
}
}
