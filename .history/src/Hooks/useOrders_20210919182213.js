import {useState} from 'react';

export function useOrders() {
  const [orders, useOrders] = useState();
  return {
    orders,
    useOrders
  }
}