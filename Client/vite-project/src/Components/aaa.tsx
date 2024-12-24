import React, { useState } from "react";

import {
  byID,
  avgAttackType,
  avgByZone,
  getByYear,
  get5ByBigOrganizatoion,
  organizationByYear,
  organizationByZone
} from "../Components/fatchAPI";

const Aaa = () => {
    const [id,setId] = useState('') 

  return (
    <div>
      <button onClick={() => byID(id)}>by id</button>
      <button onClick={() => avgAttackType("Armed Assault")}>
        avg by AttackType
      </button>
      <button onClick={() => avgByZone("Central America & Caribbean")}>
        avg by zone
      </button>
      <button onClick={() => getByYear(1970)}>avg by year</button>
      <button onClick={() => get5ByBigOrganizatoion("Eastern Europe")}>
        avg by big organization
      </button>
      <button onClick={() => organizationByYear(1970)}>
         organization by year
      </button>
      <button onClick={() => organizationByZone("White extremists")}>
         organization by zone
      </button>
    </div>
  );
};

export default Aaa;
