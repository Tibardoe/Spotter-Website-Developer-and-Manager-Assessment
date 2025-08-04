export const menu = [
  {
    title: "Home",
    href: "/",
    isDropdown: false,
  },
  {
    title: "Products",
    isDropdown: true,
    subCategories: [
      { name: "Lens", href: "/lens" },
      { name: "Sentinel", href: "/sentinel" },
      { name: "Spotter App", href: "/driversapp" },
    ],
  },
  {
    title: "Tools",
    isDropdown: true,
    subCategories: [
      { name: "TMS", href: "/tms" },
      { name: "Extension", href: "/extension" },
      { name: "Loan Calculators", href: "/loan-calculators" },
    ],
  },
  {
    title: "Insights",
    href: "/insights",
    isDropdown: false,
  },
];
