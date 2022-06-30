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
  return new Promise((resolve, reject) => {
    resolve(Data.Customers.find((el) => el.id === id));
  });
};

const promise = getCustomerById(2); // Invoking the function with different ids
promise.then((customer) => {
  console.log(customer.orders);
});
