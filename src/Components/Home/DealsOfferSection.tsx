"use client";
import React, { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
};

type Offer = {
  id: string;
  title: string;
  subtitle?: string;
  startsAt: string; // ISO date
  endsAt: string; // ISO date
  products: Product[];
  maxClaimable?: number; // for progress demo
};

const OFFERS: Offer[] = [
  {
    id: "offer-1",
    title: "Weekend Flash Sale",
    subtitle: "Up to 40% off on selected engraving gifts",
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // started 2h ago
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(), // ends in 48h
    maxClaimable: 120,
    products: [
      {
        id: "p1",
        name: "Personalized Walnut Photo Frame",
        price: 2399,
        oldPrice: 3199,
        image:
          "https://images.unsplash.com/photo-1520975919362-44f66f3d12c6?w=800&q=60&auto=format&fit=crop",
        tag: "Engraved",
      },
      {
        id: "p2",
        name: "Custom Leather Journal",
        price: 1499,
        oldPrice: 1999,
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=60&auto=format&fit=crop",
        tag: "Personalize",
      },
      {
        id: "p3",
        name: "Brushed Metal Keychain",
        price: 499,
        oldPrice: 799,
        image:
          "https://images.unsplash.com/photo-1600180758890-2f3b8f1b2c44?w=800&q=60&auto=format&fit=crop",
        tag: "Small Gift",
      },
    ],
  },
  {
    id: "offer-2",
    title: "Bundle Offer: Branding Kit",
    subtitle: "Logo printing + business card set — limited bundles",
    startsAt: new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString(), // starts in 6h
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(), // ends in 72h
    maxClaimable: 60,
    products: [
      {
        id: "p4",
        name: "Custom Logo Sticker Pack (100 pcs)",
        price: 899,
        oldPrice: 1299,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60&auto=format&fit=crop",
        tag: "Branding",
      },
      {
        id: "p5",
        name: "Premium Business Card Set (250 pcs)",
        price: 1999,
        oldPrice: 2799,
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=60&auto=format&fit=crop",
        tag: "Print",
      },
    ],
  },
  {
    id: "offer-3",
    title: "Daily Deal: Gifts Under 999",
    subtitle: "Gifts that delight — budget friendly",
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // started 8h ago
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(), // ends in 8h
    maxClaimable: 300,
    products: [
      {
        id: "p6",
        name: "Mini Engraved Pen",
        price: 399,
        oldPrice: 549,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=60&auto=format&fit=crop",
        tag: "Bestseller",
      },
      {
        id: "p7",
        name: "Custom Mug (With Quote)",
        price: 799,
        oldPrice: 999,
        image:
          "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=800&q=60&auto=format&fit=crop",
        tag: "Trending",
      },
      {
        id: "p8",
        name: "Leather Cord Organizer",
        price: 599,
        oldPrice: 799,
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=60&auto=format&fit=crop",
      },
    ],
  },
];

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

function formatCurrency(n: number) {
  // simple formatting (assumes NPR or local); replace with Intl if needed
  return `Rs ${n.toLocaleString()}`;
}

export default function DealsOfferSection() {
  // track current time to compute timers
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      aria-labelledby="deals-heading"
      className="py-12 px-4 bg-tertiary/80"
      style={{ backgroundColor: "var(--color-tertiary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2
              id="deals-heading"
              className="text-3xl md:text-4xl font-extrabold text-primary"
            >
              Deals & Offers
            </h2>
            <p className="mt-1 text-sm text-gray-700 max-w-xl">
              Choongshin Crafts — Crafting ideas into reality: gifts, printing,
              branding, engraving. Grab limited-time offers before they’re gone.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-md px-3 py-2 bg-primary/10 text-primary text-sm font-semibold">
              LIVE NOW
            </div>
            <div className="text-sm text-gray-600 hidden md:block">
              Free shipping on orders over Rs 2,500 • Easy returns
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {OFFERS.map((offer) => {
            const start = new Date(offer.startsAt).getTime();
            const end = new Date(offer.endsAt).getTime();
            const total = Math.max(end - start, 1);
            const elapsed = Math.min(Math.max(now - start, 0), total);
            const remaining = Math.max(end - now, 0);
            const progress = Math.min(100, Math.round((elapsed / total) * 100));

            const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (remaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            const isUpcoming = now < start;
            const hasEnded = now >= end;

            // mock claimed count from progress and maxClaimable
            const claimed = offer.maxClaimable
              ? Math.round((progress / 100) * offer.maxClaimable)
              : Math.round((progress / 100) * 100);

            return (
              <article
                key={offer.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
                aria-labelledby={`${offer.id}-title`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        id={`${offer.id}-title`}
                        className="text-lg font-bold text-gray-900"
                      >
                        {offer.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {offer.subtitle}
                      </p>
                    </div>

                    <div className="text-right">
                      {isUpcoming ? (
                        <div className="text-xs text-gray-500">Starts in</div>
                      ) : hasEnded ? (
                        <div className="text-xs text-red-500">Offer ended</div>
                      ) : (
                        <div className="text-xs text-green-700">Ends in</div>
                      )}

                      <div
                        className={`mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm ${
                          hasEnded
                            ? "bg-gray-100 text-gray-500"
                            : "bg-secondary/10 text-secondary"
                        }`}
                        style={{
                          backgroundColor: hasEnded
                            ? undefined
                            : "var(--color-secondary)/10",
                        }}
                        aria-live="polite"
                      >
                        {hasEnded ? (
                          "—"
                        ) : isUpcoming ? (
                          <CountdownShortMillis target={start} now={now} />
                        ) : (
                          <span className="font-medium">
                            {String(days).padStart(2, "0")}:
                            {String(hours).padStart(2, "0")}:
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* product carousel/grid */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {offer.products.map((p) => (
                      <div
                        key={p.id}
                        className="flex gap-3 bg-gray-50 rounded-lg p-3"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-20 h-20 rounded-md object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                                {p.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {p.tag ?? "Gift"}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="text-sm font-bold text-gray-900 whitespace-nowrap">
                                {formatCurrency(p.price)}
                              </div>
                              {p.oldPrice && (
                                <div className="text-xs text-gray-400 line-through whitespace-nowrap">
                                  {formatCurrency(p.oldPrice)}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-3">
                            <button
                              type="button"
                              className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                              onClick={() =>
                                console.log(
                                  "View details ->",
                                  p.id,
                                  "from",
                                  offer.id
                                )
                              }
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* CTA */}
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="text-sm text-gray-600">
                      {offer.products.length}{" "}
                      {offer.products.length === 1 ? "product" : "products"}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={hasEnded || isUpcoming}
                        className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all ${
                          hasEnded
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : isUpcoming
                            ? "bg-secondary/80 text-white"
                            : "bg-primary text-white hover:shadow-lg"
                        }`}
                        style={{
                          backgroundColor: hasEnded
                            ? undefined
                            : isUpcoming
                            ? "var(--color-secondary)"
                            : "var(--color-primary)",
                          color: hasEnded ? undefined : "var(--color-tertiary)",
                        }}
                        onClick={() =>
                          console.log(
                            hasEnded
                              ? "Offer ended"
                              : isUpcoming
                              ? "Notify me for offer -> " + offer.id
                              : "Shop offer -> " + offer.id
                          )
                        }
                      >
                        {hasEnded
                          ? "Ended"
                          : isUpcoming
                          ? "Notify me"
                          : "Shop Offer"}
                      </button>

                      <a
                        href="#"
                        className="text-sm underline text-gray-600"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("See all deals clicked");
                        }}
                      >
                        See all deals
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Small helper component to show short countdown until start (days/h:m:s).
 * Rendered inline to keep rendering fast.
 */
function CountdownShortMillis({
  target,
  now,
}: {
  target: number;
  now: number;
}) {
  const remaining = Math.max(target - now, 0);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <span className="font-mono">
      {String(days).padStart(2, "0")}:{String(hours).padStart(2, "0")}:
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}
