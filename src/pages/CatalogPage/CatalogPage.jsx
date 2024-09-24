import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import CarsList from "../../components/CarsList/CarsList";
import { useEffect, useState, useCallback } from "react";
import { getCars } from "../../../api";
import Loader from "../../components/Loader/Loader";

const filterMapping = {
  "Van": "panelTruck",
  "Fully Integrated": "fullyIntegrated",
  "Alcove": "alcove",
};

export default function CatalogPage() {
  const [allCars, setAllCars] = useState([]);
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
  const carsPerPage = 4;

  const fetchAllCars = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      const data = await getCars(1, 100);  // Завантажуємо всі машини

      if (data && data.items && Array.isArray(data.items)) {
        setAllCars(data.items);
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
    fetchAllCars();
  }, [fetchAllCars]);

  const applyFilters = useCallback(() => {
    const activeEquipmentFilters = filters.equipment
      .filter((filter) => filter.active)
      .map((filter) => filter.label);

    const activeTypeFilters = filters.type
      .filter((filter) => filter.active)
      .map((filter) => filterMapping[filter.label]);

    const filtered = allCars.filter((car) => {
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
    setCurrentPage(1); 
  }, [allCars, filters, location]);

  useEffect(() => {
    applyFilters();
  }, [filters, location, allCars, applyFilters]);

  const handleFilterChange = useCallback((category, index) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (category === "type") {
        newFilters.type = newFilters.type.map((item, i) => ({
          ...item,
          active: i === index,
        }));
      } else {
        newFilters[category][index].active = !newFilters[category][index].active;
      }

      return newFilters;
    });
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const displayedCars = filteredCars.slice(0, currentPage * carsPerPage);

  const handleNextPage = () => {
    if (currentPage * carsPerPage < filteredCars.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

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
        <CarsList cars={displayedCars} />
        <div>
          <button
            className={css.buttonLoadMore}
            onClick={handleNextPage}
            disabled={currentPage * carsPerPage >= filteredCars.length || loading}
          >
            {loading ? <Loader /> : currentPage * carsPerPage >= filteredCars.length ? "No more" : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
}
