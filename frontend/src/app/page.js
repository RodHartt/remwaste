"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

{
  /* Icons */
}
import AlertTriangleIcon from "@/icons/AlertTriangleIcon";

{
  /* Components */
}
import FadeInSection from "@/components/FadeInSection";
import SelectedFooter from "@/components/SelectedFooter";
import Button from "@/components/Button";
import ContainerBox from "@/components/ContainerBox";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch skips");
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSkips();
  }, []);

  const priceCalculator = (priceBeforeVat, vat) => {
    if (!priceBeforeVat || !vat) return "N/A";

    const price = parseFloat(priceBeforeVat);
    const vatRate = parseFloat(vat);

    const vatAmount = price * (vatRate / 100);
    const totalPrice = price + vatAmount;

    return {
      priceBeforeVat: price.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
    };
  };

  return (
    <main className="p-6 items-center justify-center flex flex-col">
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Choose Your Skip Size
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl">
        Select the skip size that best fits your needs.
        <br />
        You can also consult our AI assistant to help you choose the right size
        for your project.
      </p>

      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
          {data.map((skip, index) => {
            let skipSize = "4";
            if (parseInt(skip.size) >= 20) skipSize = "20";
            const price = priceCalculator(skip.price_before_vat, skip.vat);
            const total = price?.totalPrice ?? "N/A";
            const vat = price?.vatAmount ?? "N/A";
            return (
              <FadeInSection key={skip.id} delay={index * 0.1}>
                <ContainerBox
                  key={skip.id}
                  className="relative border-2 border-transparent hover:border-blue-500 transition duration-300 flex flex-col items-center"
                >
                  {!skip.allowed_on_road && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shadow">
                      <AlertTriangleIcon width={14} height={14} /> Not Allowed
                      On Road
                    </div>
                  )}
                  {/* Image */}
                  <div className="w-full h-[160px] mb-4 overflow-hidden flex items-center justify-center">
                    <Image
                      src={`/skips/${skipSize}skipnb.webp`}
                      alt={`${skip?.size ?? "Unknown"} yard skip`}
                      width={280}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <h2 className=" text-lg font-semibold mb-1">
                    {skip.size} Yard Skip
                  </h2>
                  <p className="dark:text-gray-400 text-sm mb-2">
                    {skip.hire_period_days} day hire period
                  </p>
                  <p className="text-blue-800 dark:text-blue-400 font-bold text-xl mb-2">
                    £{total}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
                    VAT Included £{vat}
                  </p>

                  {/* Call to Action */}
                  <Button
                    disabled={skip.forbidden || false}
                    onClick={() => setSelectedSkip(skip)}
                  >
                    {skip.forbidden
                      ? "Unavailable"
                      : selectedSkip?.id === skip.id
                      ? "Selected"
                      : "Select This Skip"}
                  </Button>
                </ContainerBox>
              </FadeInSection>
            );
          })}
          <SelectedFooter
            skip={
              selectedSkip && {
                size: selectedSkip.size,
                total: priceCalculator(
                  selectedSkip.price_before_vat,
                  selectedSkip.vat
                )?.totalPrice,
                hire_period_days: selectedSkip.hire_period_days,
              }
            }
            onBack={() => setSelectedSkip(null)}
            onContinue={() => console.log("Proceeding with", selectedSkip)}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <ChatBubble />
    </main>
  );
}
