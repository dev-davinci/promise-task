const Data = {
  Customers: [
    {
      id: 1,
      name: "Muhammad Gamal",
      email: "muhamedgamal81@gmail.com",
      orders: ["laptop", "t-shirt"],
    },
    {
      id: 2,
      name: "Mazen Gamal",
      email: "blabla@gmail.com",
      orders: ["trousers", "iPhone"],
    },
    {
      id: 3,
      name: "Abdulrahman Gamal",
      email: "blabla2@gmail.com",
      orders: ["keyboard", "mouse"],
    },
  ],
};

const getCustomerById = (id) => {
  // Here, I'm abstracting a specific object from the array based on the id passed
  const customer = Data.Customers.find((el) => el.id === id);
  return customer;
};

const getCustomerOrders = (id, callback) => {
  // Here, I'm getting the object returned from the getCustomerById function
  const customerData = callback(id);
  // Then, Abstracting the orders property value from it.
  const customerOrders = customerData.orders;

  return customerOrders;
};

console.log(getCustomerOrders(3, getCustomerById));
