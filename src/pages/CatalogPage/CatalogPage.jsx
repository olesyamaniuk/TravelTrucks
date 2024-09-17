// import css from "./CatalogPage.module.css";
// import Filter from "../../components/Filter/Filter";
// import CarsList from "../../components/CarsList/CarsList";
// import { useEffect, useState, useCallback } from "react";
// import { getCars } from "../../../api";
// import Loader from "../../components/Loader/Loader";

// export default function CatalogPage() {
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [location, setLocation] = useState("");

//   const [filters, setFilters] = useState({
//     equipment: [
//       { label: "AC", active: false },
//       { label: "Automatic", active: false },
//       { label: "Kitchen", active: false },
//       { label: "TV", active: false },
//       { label: "Bathroom", active: false },
//     ],
//     type: [
//       { label: "Van", active: false },
//       { label: "Fully Integrated", active: false },
//       { label: "Alcove", active: false },
//     ],
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalCars, setTotalCars] = useState(0);
//   const carsPerPage = 4;

//   const fetchCars = useCallback(async (page) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const data = await getCars(page, carsPerPage);

//       if (data && data.items && Array.isArray(data.items)) {
//         setCars((prevCars) => {
//           const newCars = data.items.filter(item => !prevCars.some(prevCar => prevCar.id === item.id));
//           return [...prevCars, ...newCars]; 
//         });
//         setTotalCars(data.total); 
//       } else {
//         setError("Data format error: 'items' is not an array");
//       }
//     } catch (err) {
//       setError("Error fetching data");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchCars(currentPage);
//   }, [currentPage, fetchCars]);

//   const applyFilters = () => {
//     const activeEquipmentFilters = filters.equipment
//       .filter((filter) => filter.active)
//       .map((filter) => filter.label);

//     const activeTypeFilters = filters.type
//       .filter((filter) => filter.active)
//       .map((filter) => filterMapping[filter.label]);

//     const filtered = cars.filter((car) => {
//       const matchesEquipment = activeEquipmentFilters.every((filter) => {
//         switch (filter) {
//           case "AC":
//             return car.AC;
//           case "Automatic":
//             return car.transmission === "automatic";
//           case "Kitchen":
//             return car.kitchen;
//           case "TV":
//             return car.TV;
//           case "Bathroom":
//             return car.bathroom;
//           default:
//             return true;
//         }
//       });

//       const matchesType = activeTypeFilters.length === 0 || activeTypeFilters.includes(car.form);

//       const matchesLocation = car.location.toLowerCase().includes(location.toLowerCase());

//       return matchesEquipment && matchesType && matchesLocation;
//     });

//     setFilteredCars(filtered);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, cars, location]);

//   const handleFilterChange = useCallback((category, index) => {
//     setFilters((prevFilters) => {
//       const newFilters = { ...prevFilters };
//       newFilters[category][index].active = !newFilters[category][index].active;
//       return newFilters;
//     });
//   }, []);

//   const handleLocationChange = (newLocation) => {
//     setLocation(newLocation);
//   };

//   const handleNextPage = useCallback(() => {
//     if (currentPage * carsPerPage < totalCars) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, [currentPage, totalCars]);

//   return (
//     <div className={css.container}>
//       {error && <b>{error}</b>}
//       <Filter
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         location={location}
//         onLocationChange={handleLocationChange}
//       />
//       <div className={css.list}>
//         <CarsList cars={filteredCars} />
//         <div>
//           <button
//             className={css.buttonLoadMore}
//             onClick={handleNextPage}
//             disabled={currentPage * carsPerPage >= totalCars || loading}
//           >
//             {loading ? <Loader /> : currentPage * carsPerPage >= totalCars ? "No more" : "Load more"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import css from "./CatalogPage.module.css";
// import Filter from "../../components/Filter/Filter";
// import CarsList from "../../components/CarsList/CarsList";
// import { useEffect, useState, useCallback } from "react";
// import { getCars } from "../../../api";
// import Loader from "../../components/Loader/Loader";

// export default function CatalogPage() {
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [location, setLocation] = useState("");

//   const [filters, setFilters] = useState({
//     equipment: [
//       { label: "AC", active: false },
//       { label: "Automatic", active: false },
//       { label: "Kitchen", active: false },
//       { label: "TV", active: false },
//       { label: "Bathroom", active: false },
//     ],
//     type: [
//       { label: "Van", active: false },
//       { label: "Fully Integrated", active: false },
//       { label: "Alcove", active: false },
//     ],
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalCars, setTotalCars] = useState(0);
//   const carsPerPage = 4;

//   // Define filterMapping for vehicle types
//   const filterMapping = {
//     "Van": "panelTruck",
//     "Fully Integrated": "fullyIntegrated",
//     "Alcove": "alcove",
//   };

//   const fetchCars = useCallback(async (page) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const data = await getCars(page, carsPerPage);

//       if (data && data.items && Array.isArray(data.items)) {
//         setCars((prevCars) => {
//           const newCars = data.items.filter(item => !prevCars.some(prevCar => prevCar.id === item.id));
//           return [...prevCars, ...newCars]; 
//         });
//         setTotalCars(data.total); 
//       } else {
//         setError("Data format error: 'items' is not an array");
//       }
//     } catch (err) {
//       setError("Error fetching data");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchCars(currentPage);
//   }, [currentPage, fetchCars]);

//   const applyFilters = () => {
//     const activeEquipmentFilters = filters.equipment
//       .filter((filter) => filter.active)
//       .map((filter) => filter.label);

//     const activeTypeFilters = filters.type
//       .filter((filter) => filter.active)
//       .map((filter) => filterMapping[filter.label]);

//     const filtered = cars.filter((car) => {
//       const matchesEquipment = activeEquipmentFilters.every((filter) => {
//         switch (filter) {
//           case "AC":
//             return car.AC;
//           case "Automatic":
//             return car.transmission === "automatic";
//           case "Kitchen":
//             return car.kitchen;
//           case "TV":
//             return car.TV;
//           case "Bathroom":
//             return car.bathroom;
//           default:
//             return true;
//         }
//       });

//       const matchesType = activeTypeFilters.length === 0 || activeTypeFilters.includes(car.form);

//       const matchesLocation = car.location.toLowerCase().includes(location.toLowerCase());

//       return matchesEquipment && matchesType && matchesLocation;
//     });

//     setFilteredCars(filtered);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, cars, location]);

//   const handleFilterChange = useCallback((category, index) => {
//     setFilters((prevFilters) => {
//       const newFilters = { ...prevFilters };
//       newFilters[category][index].active = !newFilters[category][index].active;
//       return newFilters;
//     });
//   }, []);

//   const handleLocationChange = (newLocation) => {
//     setLocation(newLocation);
//   };

//   const handleNextPage = useCallback(() => {
//     if (currentPage * carsPerPage < totalCars) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, [currentPage, totalCars]);

//   return (
//     <div className={css.container}>
//       {error && <b>{error}</b>}
//       <Filter
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         location={location}
//         onLocationChange={handleLocationChange}
//       />
//       <div className={css.list}>
//         <CarsList cars={filteredCars} />
//         <div>
//           <button
//             className={css.buttonLoadMore}
//             onClick={handleNextPage}
//             disabled={currentPage * carsPerPage >= totalCars || loading}
//           >
//             {loading ? <Loader /> : currentPage * carsPerPage >= totalCars ? "No more" : "Load more"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import CarsList from "../../components/CarsList/CarsList";
import { useEffect, useState, useCallback } from "react";
import { getCars } from "../../../api";
import Loader from "../../components/Loader/Loader";

const filterMapping = {
  "Van": "van",
  "Fully Integrated": "fullyIntegrated",
  "Alcove": "alcove",
};

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");

  const [filters, setFilters] = useState({
    equipment: [
      { label: "AC", active: false },
      { label: "Automatic", active: false },
      { label: "Kitchen", active: false },
      { label: "TV", active: false },
      { label: "Bathroom", active: false },
    ],
    type: [
      { label: "Van", active: false },
      { label: "Fully Integrated", active: false },
      { label: "Alcove", active: false },
    ],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const carsPerPage = 4;

  const fetchCars = useCallback(async (page) => {
    try {
      setError(null);
      setLoading(true);
      const data = await getCars(page, carsPerPage);

      if (data && data.items && Array.isArray(data.items)) {
        setCars((prevCars) => {
          const newCars = data.items.filter(item => !prevCars.some(prevCar => prevCar.id === item.id));
          return [...prevCars, ...newCars]; 
        });
        setTotalCars(data.total); 
      } else {
        setError("Data format error: 'items' is not an array");
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCars(currentPage);
  }, [currentPage, fetchCars]);

  const applyFilters = () => {
    const activeEquipmentFilters = filters.equipment
      .filter((filter) => filter.active)
      .map((filter) => filter.label);

    const activeTypeFilters = filters.type
      .filter((filter) => filter.active)
      .map((filter) => filterMapping[filter.label]);

    const filtered = cars.filter((car) => {
      const matchesEquipment = activeEquipmentFilters.every((filter) => {
        switch (filter) {
          case "AC":
            return car.AC;
          case "Automatic":
            return car.transmission === "automatic";
          case "Kitchen":
            return car.kitchen;
          case "TV":
            return car.TV;
          case "Bathroom":
            return car.bathroom;
          default:
            return true;
        }
      });

      const matchesType = activeTypeFilters.length === 0 || activeTypeFilters.includes(car.form);

      const matchesLocation = car.location.toLowerCase().includes(location.toLowerCase());

      return matchesEquipment && matchesType && matchesLocation;
    });

    setFilteredCars(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, cars, location]);

  const handleFilterChange = useCallback((category, index) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      newFilters[category][index].active = !newFilters[category][index].active;
      return newFilters;
    });
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleNextPage = useCallback(() => {
    if (currentPage * carsPerPage < totalCars) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalCars]);

  return (
    <div className={css.container}>
      {error && <b>{error}</b>}
      <Filter
        filters={filters}
        onFilterChange={handleFilterChange}
        location={location}
        onLocationChange={handleLocationChange}
      />
      <div className={css.list}>
        <CarsList cars={filteredCars} />
        <div>
          <button
            className={css.buttonLoadMore}
            onClick={handleNextPage}
            disabled={currentPage * carsPerPage >= totalCars || loading}
          >
            {loading ? <Loader /> : currentPage * carsPerPage >= totalCars ? "No more" : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
}
