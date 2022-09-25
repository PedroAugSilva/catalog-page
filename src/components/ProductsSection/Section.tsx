import "./Section.scss";
import "../../Global.scss";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";

export const Section = () => {
  interface api {
    name: string;
    price: number;
    image: string;
    id: number;
  }

  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((Response) => Response.json())
      .then(setData);
  }, []);
  const filter =
    filterInput.length > 0
      ? data.filter((filter: api) => filter.name.includes(filterInput))
      : data;

    const brandNames = ["adidas", "Asics", "Fila", "Mizuno", "Nike","Oakley", "Puma"];

  return (
    <div className="section">
      <div className="filter-section">
        <h2>FILTER BY</h2>
        <div className="input-area">
          
          <input
            type="radio"
            name="radio"
            value="Infantil"
            onChange={(e) =>
              setFilterInput(e.target.checked === true ? e.target.value : "")
            }
          />childish
         
          <input
            type="radio"
            name="radio"
            value=""
            onChange={(e) =>
              setFilterInput(e.target.checked === true ? e.target.value : "")
            }
          /> adult
        </div>
        <h2>FILTER BRAND</h2>
            <div className="input-area">
              {brandNames.map((names: string) =>(
                <>
                <input
                    type="radio"
                    name="radio"
                    value={names}
                    onChange={(e) =>
                      setFilterInput(e.target.checked === true ? e.target.value : "")
                    }
                  />{names}
                  </>
              ))}
          </div>
      </div>

      <div className="card-section">
        {filter.map((item: api) => {
          const { id, name, price, image } = item;
          return (
            <Card key={id} name={name} id={id} price={price} img={image} />
          );
        })}
      </div>
    </div>
  );
};
