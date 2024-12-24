export const byID = async (id: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/analysis/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllTerror = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis//deadliest-attack-types/`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const avgAttackType = async (attack_type: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/deadliest-attack-types/${attack_type}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const avgAllZones = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/highest-casualty-regions/`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const avgByZone = async (zone: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/highest-casualty-regions/${zone}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(`aaaa${result}`);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getByYear = async (year: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/incident-trends/${year}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getByYears = async (year1: number, year2: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/incident-trends/${year1}/${year2}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const get5ByBigOrganizatoion = async (organization: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/relationships/top-groups/?get5=${organization}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getByBigOrganizatoion = async (organization: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/relationships/top-groups/?getbigs=${organization}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      console.log(result);
  
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

export const organizationByYear = async (year1: number, year2: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analysis/incident-trends/${year1}/${year2}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const organizationBetweenYear = async (year1: number, year2: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/analysis/incident-trends/${year1}/${year2}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      console.log(result);
  
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

export const organizationByZone = async (zone: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/relationships/deadliest-regions/${zone}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const organizationAndYear = async (gname: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/relationships/groups-by-year/?getgroop=${gname}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
