import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "Credit / Debit Card",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      alert("Order Placed Successfully!");
      console.log(formData);
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">

            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Shipping Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.firstName}
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.lastName}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.email}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.phone}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.address}
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.city}
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.postalCode}
                  </p>
                </div>

              </div>
            </div>

            {/* Payment */}
            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Credit / Debit Card"
                    checked={
                      formData.payment === "Credit / Debit Card"
                    }
                    onChange={handleChange}
                  />
                  Credit / Debit Card
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment === "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="eSewa"
                    checked={formData.payment === "eSewa"}
                    onChange={handleChange}
                  />
                  eSewa
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Khalti"
                    checked={formData.payment === "Khalti"}
                    onChange={handleChange}
                  />
                  Khalti
                </label>

              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="border rounded-xl p-6 h-fit shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Wireless Headphones × 2</span>
                <span>$179.98</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$8.00</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>$197.98</span>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-6"
              >
                Place Order
              </button>

            </div>
          </div>

        </div>
      </form>
    </div>
  );
}
