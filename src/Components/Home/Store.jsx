import { useState } from "react";
import s1 from "../../Assets/Shop/s1.jpg";
import s2 from "../../Assets/Shop/s2.jpg";
import Button from "../Button";

const stores = [
  {
    id: 1,
    name: "Outlet 1",
    address: "BLK 82 Marine Parade #01-606 S440082",
    phone: "+65 94572331",
    timings: {
      weekday: "Monday – Friday: 7am – 7pm",
      weekend: "Saturday – Sunday: 8am – 7pm",
    },
    image: s1,
  },
  {
    id: 2,
    name: "Outlet 2",
    address: "123 Orchard Road #02-110 S238888",
    phone: "+65 81234567",
    timings: {
      weekday: "Monday – Friday: 9am – 8pm",
      weekend: "Saturday – Sunday: 10am – 6pm",
    },
    image: s2,
  },
];

export default function OurStore() {
  const [activeStore, setActiveStore] = useState(stores[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-8 items-center">
      {/* Left - Store Image */}
      <div className="relative">
        <img
          src={activeStore.image}
          alt={activeStore.name}
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>

      {/* Right - Store Info */}
      <div className="bg-bg border-border p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-italian text-secondary font-light mb-6">
          Our Store
        </h2>

        {/* Tabs */}
        <div className="flex space-x-6 mb-6">
          {stores.map((store) => (
            <button
              key={store.id}
              onClick={() => setActiveStore(store)}
              className={`pb-1 border-b-2 transition font-mont font-medium ${
                activeStore.id === store.id
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-text"
              }`}
            >
              {store.name}
            </button>
          ))}
        </div>

        {/* Store Details */}
        <p className="text-gray-700 font-mont text-lg font-medium mb-2">
          {activeStore.address}
        </p>
        <p className="text-gray-700 font-mont text-base font-medium mb-4">
          {activeStore.phone}
        </p>

        <div className="flex flex-col justify-between border-t pt-4 text-sm text-gray-600">
          <p className="text-gray-700 font-mont text-base font-medium mb-2">
            {activeStore.timings.weekday}
          </p>
          <p className="text-gray-700 font-mont text-base font-medium mb-7">
            {activeStore.timings.weekend}
          </p>
        </div>

        {/* CTA */}
        <Button
          title="View on Map"
          color="bg-bg"
          outline={true}
          txtColor="text-secondary"
        />
      </div>
    </div>
  );
}
