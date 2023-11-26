import React from "react";
import { useParams } from "react-router-dom";
import elementdData from "../../Elements";
import { Link } from "react-router-dom";
import "./style.css";

const Fulldetails = () => {
  const params = useParams();

  //console.log(params);

  let elementDetailsFull = elementdData.find(
    (eachElementItem) => eachElementItem.atomicNumber == params.id
  );
  console.log(elementDetailsFull);

  return (
    <>
      <div className="back-btn-container">
        <Link to="/elements">
          <button className="back-btn-item">BACK</button>
        </Link>
      </div>

      <div className="secondary-container">
        <div className="element-data-container">
          <div className="element-title-container">
            <h1>{elementDetailsFull.name}</h1>
          </div>
          <div className="element-full-data-container">
            <p className="property-name">Symbol</p>
            <p className="property-value">{elementDetailsFull.symbol}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">AtomicNumber</p>
            <p className="property-value">{elementDetailsFull.atomicNumber}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Name</p>
            <p className="property-value">{elementDetailsFull.name}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">AtomicMass</p>
            <p className="property-value">{elementDetailsFull.atomicMass}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">EC</p>
            <p className="property-value">
              {elementDetailsFull.electronicConfiguration}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Electronegativity</p>
            <p className="property-value">
              {elementDetailsFull.electronegativity}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">AtomicRadius</p>
            <p className="property-value">{elementDetailsFull.atomicRadius}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Ion Radius</p>
            <p className="property-value">{elementDetailsFull.ionRadius}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Group</p>
            <p className="property-value">{elementDetailsFull.group}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Period</p>
            <p className="property-value">{elementDetailsFull.period}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">GroupBlock</p>
            <p className="property-value">{elementDetailsFull.groupBlock}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">BP</p>
            <p className="property-value">{elementDetailsFull.boilingPoint}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">MP</p>
            <p className="property-value">{elementDetailsFull.meltingPoint}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Density</p>
            <p className="property-value">{elementDetailsFull.density}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Standard State</p>
            <p className="property-value">{elementDetailsFull.standardState}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">VanDerWaals Radius</p>
            <p className="property-value">
              {elementDetailsFull.vanDerWaalsRadius}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Ionization Energy</p>
            <p className="property-value">
              {elementDetailsFull.ionizationEnergy}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Electron Affinity</p>
            <p className="property-value">
              {elementDetailsFull.electronAffinity}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Oxidation States</p>
            <p className="property-value">
              {elementDetailsFull.oxidationStates}
            </p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">CpkHex Color</p>
            <p className="property-value">{elementDetailsFull.cpkHexColor}</p>
          </div>
          <hr />
          <div className="element-full-data-container">
            <p className="property-name">Discovered Year</p>
            <p className="property-value">
              {elementDetailsFull.yearDiscovered}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fulldetails;
