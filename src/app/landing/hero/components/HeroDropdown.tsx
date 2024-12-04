import { useEffect, useRef, useState, useTransition } from "react";
// import { useLocale } from "next-intl";
// import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const LocaleDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef(null);
  // const locale = useLocale();
  // const pathname = usePathname();
  // const params = useParams();
  // const router = useRouter();

  const options = {
    en: "English",
    es: "Spanish",
  };

  const selectLocale = (locale: string) => {
    startTransition(() => {
      // router.replace(
      //   // { pathname, params },
      //   // { locale }
      //   pathname,
      //   // @ts-expect-error -- TypeScript will validate that only known `params`
      //   // are used in combination with a given `pathname`. Since the two will
      //   // always match for the current route, we can skip runtime checks
      //   { locale }
      // );
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <div ref={dropdownRef} className="relative">
      {/* <button
        onClick={() => setShowDropdown((value) => !value)}
        className=" px-4 text-[#ffffff] py-2 rounded-md focus:outline-none bg-[#2775CA]"
      >
        {locale.toUpperCase()}
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="">
            {routing.locales.map((locale) => (
              <li onClick={() => selectLocale(locale)}>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left rounded-md">
                  {locale} - {options[locale]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default LocaleDropdown;
