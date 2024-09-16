
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
//   const [location, setLocation] = useState(""); // Додано стан для локації

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
//   const carsPerPage = 4;

//   const fetchCars = useCallback(async (page) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const data = await getCars(page);
//       setCars((prevCars) => [...prevCars, ...data.items]);
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
//       .map((filter) => filter.label);

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

//       // Додано перевірку на локацію
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

//   const indexOfLastCar = currentPage * carsPerPage;
//   const indexOfFirstCar = indexOfLastCar - carsPerPage;
//   const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

//   const totalPages = Math.ceil(filteredCars.length / carsPerPage);

//   const handleNextPage = useCallback(() => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, [currentPage, totalPages]);

//   return (
//     <div className={css.container}>
//       {error && <b>{error}</b>}
//       <Filter
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         location={location} // Передаємо локацію в компонент Filter
//         onLocationChange={handleLocationChange} // Функція для оновлення локації
//       />
//       <div className={css.list}>
//         <CarsList cars={currentCars} />
//         <div>
//           <button
//             className={css.buttonLoadMore}
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages || loading}
//           >
//             {loading ? <Loader /> : "Load more"}
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

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(""); // Додано стан для локації

  const [filters, setFilters] = useState({
    equipment: [
      { label: "AC", active: false },
      { label: "Automatic", active: false },
      { label: "Kitchen", active: false },
      { label: "TV", active: false },
      { label: "Bathroom", active: false },
    ],
    type: [
      { label: "panelTruck", active: false },
      { label: "fullyIntegrated", active: false },
      { label: "alcove", active: false },
    ],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const fetchCars = useCallback(async (page) => {
    try {
      setError(null);
      setLoading(true);
      const data = await getCars(page);
      setCars((prevCars) => [...prevCars, ...data.items]);
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
      .map((filter) => filter.label);

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

      // Додано перевірку на локацію
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
      newFilters[category][index].active = !newFilters[category][index].active; // Перемикаємо активність фільтра
      return newFilters;
    });
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className={css.container}>
      {error && <b>{error}</b>}
      <Filter
        filters={filters}
        onFilterChange={handleFilterChange}
        location={location} // Передаємо локацію в компонент Filter
        onLocationChange={handleLocationChange} // Функція для оновлення локації
      />
      <div className={css.list}>
        <CarsList cars={currentCars} />
        <div>
          <button
            className={css.buttonLoadMore}
            onClick={handleNextPage}
            disabled={currentPage === totalPages || loading}
          >
            {loading ? <Loader /> : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
}
