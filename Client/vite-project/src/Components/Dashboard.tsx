import React, { useState } from "react";
import Map from "./MapComp/Map"; // קומפוננטת מפה
import IncidentTrends from "./IncidentTrends";
import IncidentByID from "./IncidentByID";
import AvgByZone from "./AvgByZone";
import Top5Organizations from "./Top5Organizations";
import OrganizationsByYear from "./OrganizationsByYear";
import DeadliestAttackTypes from "./DeadliestAttackTypes";
import TopAllOrganizations from "./TopAllOrganizations";
import AvgAllZones from "./AvgAllZones";
import IncidentTrendsBetwen2 from "./IncidentTrendsBetwen2";
import YearByOrganizations from "./YearByOrganizations";

interface MarkerData {
  lat: number;
  lng: number;
  info: string;
}

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MarkerData[] | null>(null); // כל הנקודות
  const [singleMarker, setSingleMarker] = useState<MarkerData | null>(null); // נקודה יחידה
  const [showAllMarkers, setShowAllMarkers] = useState(true); // מצב תצוגה

  const updateMap = (lat: number, lng: number, info: string) => {
    setMapData((prevData) => [...(prevData || []), { lat, lng, info }]);
  };

  const updateSingleMarker = (lat: number, lng: number, info: string) => {
    setSingleMarker({ lat, lng, info });
    setShowAllMarkers(false); // עבור לתצוגת נקודה יחידה
  };

  const updateAllMarkers = (markers: MarkerData[]) => {
    setMapData(markers);
    setShowAllMarkers(true); // עבור לתצוגת כל הנקודות
  };

  const toggleMarkers = () => {
    setShowAllMarkers((prev) => !prev);
  };


  // const updateMap = (lat: number, lng: number, info: string) => {
  //   setMapData((prevData) => [...(prevData || []), { lat, lng, info }]);
  // };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "deadliestAttackTypes":
        return <DeadliestAttackTypes />;
      case "incidentTrends":
        return <IncidentTrends />;
      case "IncidentTrendsBetwen2":
        return <IncidentTrendsBetwen2 />;
      case "incidentByID":
        return <IncidentByID updateMap={updateMap} />;
      case "avgByZone":
        return <AvgByZone updateMap={updateMap} />;
      case "avgAllZones":
        return <AvgAllZones updateMap={updateMap} />;
      case "top5Organizations":
        return <Top5Organizations />;
      case "topAllOrganizations":
        return <TopAllOrganizations />;
      case "organizationsByYear":
        return <OrganizationsByYear />;
      case "yearbyorganizations":
        return <YearByOrganizations updateMap={updateMap} />;
      default:
        return <p>בחר שאילתה להצגת מידע</p>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", padding: "10px" }}>
        <h2>דשבורד לניתוח נתוני אירועים</h2>

        <button onClick={() => updateSingleMarker(32.0853, 34.7818, "נקודה לדוגמה")}>
          הצג נקודה אחת
        </button>

        <button onClick={() => updateAllMarkers([{ lat: 32.0853, lng: 34.7818, info: "תל אביב" }])}>
          הצג את כל הנקודות
        </button>

        <button onClick={toggleMarkers}>
          {showAllMarkers ? "הצג נקודה יחידה" : "הצג את כל הנקודות"}
        </button>

        <div>
          <button onClick={() => setActiveComponent("incidentTrends")}>
            מגמות תקריות לפי שנה
          </button>
          <button onClick={() => setActiveComponent("IncidentTrendsBetwen2")}>
            מגמות תקריות לפי שנים
          </button>
          <button onClick={() => setActiveComponent("incidentByID")}>
            חיפוש לפי מזהה
          </button>
          <button onClick={() => setActiveComponent("avgByZone")}>
            ממוצע לפי אזור
          </button>
          <button onClick={() => setActiveComponent("avgAllZones")}>
            ממוצע לפי אזורים
          </button>
          <button onClick={() => setActiveComponent("top5Organizations")}>
            חמשת הארגונים הכי בולטים
          </button>
          <button onClick={() => setActiveComponent("topAllOrganizations")}>
            הארגונים הכי בולטים
          </button>
          <button onClick={() => setActiveComponent("organizationsByYear")}>
            ארגונים לפי שנים
          </button>
          <button onClick={() => setActiveComponent("yearbyorganizations")}>
            השנים לפי הארגון
          </button>
          <button onClick={() => setActiveComponent("deadliestAttackTypes")}>
            סוגי התקפות הקטלניים ביותר
          </button>
        </div>

        {/* אזור תוכן המשתנה לפי הבחירה */}
        <div style={{ marginTop: "20px" }}>{renderActiveComponent()}</div>
      </div>

      {/* המפה תמיד בצד השני */}
      <div style={{ width: "50%", padding: "10px" }}>
      <Map markersData={mapData} singleMarker={singleMarker} showAll={showAllMarkers} />

      </div>
    </div>
  );
};

export default Dashboard;
