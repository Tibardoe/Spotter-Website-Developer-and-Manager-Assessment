// import { cn } from "@/utils/cn";
// import Link from "next/link";
// import React from "react";

// type HeaderLinkProps = {
//   subCategories: { name: string; href: string }[];
//   isOpen: boolean;
// };

// export default function DropdownMenu({
//   subCategories,
//   isOpen,
// }: HeaderLinkProps) {
//   return (
//     <ul
//       className={cn(
//         "bg-white min-h-32 w-44 absolute rounded-md p-2 flex flex-col gap-2",
//         {
//           "animate-fadeInScale": isOpen,
//           "animate-fadeOutScale": !isOpen,
//         }
//       )}
//     >
//       {subCategories.map((subCategory) => (
//         <React.Fragment key={subCategory.name}>
//           <li className="text-black text-sm hover:text-lg transition-all">
//             <Link href={subCategory.href}>{subCategory.name}</Link>
//           </li>

//           <hr />
//         </React.Fragment>
//       ))}
//     </ul>
//   );
// }

import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type HeaderLinkProps = {
  subCategories: { name: string; href: string }[];
  isOpen: boolean;
};

export default function DropdownMenu({
  subCategories,
  isOpen,
}: HeaderLinkProps) {
  return (
    <ul
      className={cn(
        "bg-white shadow-lg absolute min-w-48 p-2 rounded-lg flex flex-col gap-1 z-50 transition-all duration-300",
        {
          "animate-fadeInScale opacity-100 scale-100": isOpen,
          "animate-fadeOutScale opacity-0 scale-95 pointer-events-none":
            !isOpen,
        }
      )}
    >
      {subCategories.map((subCategory, index) => (
        <React.Fragment key={subCategory.name}>
          <li>
            <Link
              href={subCategory.href}
              className="block p-2 text-sm text-gray-700 hover:bg-teal-700 hover:text-teal-100 rounded-md transition-all duration-200"
            >
              {subCategory.name}
            </Link>
          </li>
          {index !== subCategories.length - 1 && (
            <hr className="border-t border-gray-200" />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
