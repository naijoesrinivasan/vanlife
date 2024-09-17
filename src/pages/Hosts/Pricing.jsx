import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const hostVan = useOutletContext();
  const spanStyles = {
    fontWeight: 300,
    fontSize: "16px",
    color: "#AAAAAA"
  };

  return (
    <section>
    { hostVan && <p>${hostVan.price} <span style={spanStyles}>/day</span></p> }
    </section>
  )
}
