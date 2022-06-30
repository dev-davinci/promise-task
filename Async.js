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

const getCustomerOrders = async (id) => {
  // Here, I'm getting the object returned from the getCustomerById function
  const customer = await Data.Customers.find((el) => el.id === id);

  // Then, Abstracting the orders property value from it.
  const customerOrders = customer.orders;

  console.log(customerOrders);
};

getCustomerOrders(1);
