import React from 'react'
import { Link } from 'react-router-dom'

const recentOrders = [
  {
    id: '1',
    productId: '4324',
    customerId: '23143',
    customerName: 'Shirley A. Lape',
    orderDate: '2022-05-17T03:24:00',
    orderTotal: '$435.50',
    orderStatus: 'PLACED',
    shippingAddress: 'Cottage Grove, OR 97424'
  },
  {
    id: '2',
    productId: '5434',
    customerId: '65345',
    customerName: 'Mason Nash',
    orderDate: '2022-05-17T07:14:00',
    orderTotal: '$836.44',
    orderStatus: 'SHIPPED',
    shippingAddress: 'Westminster, CA 92683'
  },
  // ... rest of the orders
]

function RecentNews() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent News</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td><Link to={`/order/${order.id}`}>#{order.id}</Link></td>
                <td><Link to={`/product/${order.productId}`}>#{order.productId}</Link></td>
                <td><Link to={`/customer/${order.customerId}`}>{order.customerName}</Link></td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.orderTotal}</td>
                <td>{order.shippingAddress}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentNews

