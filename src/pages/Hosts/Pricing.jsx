import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const hostVan = useOutletContext();

  return (
    <main>
    { hostVan && <p>${hostVan[0].price} <span >/day</span></p> }
    </main>
  )
}
