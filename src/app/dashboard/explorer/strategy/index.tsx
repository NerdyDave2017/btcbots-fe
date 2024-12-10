import React from "react";
import { ArrowRight, SearchIcon, SettingsIcon } from "@/public/assets/icons";
import { SelectedType } from "../page";
import Link from "next/link";
import Card from "../components/card";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Strategy = ({ setSelected }: Props) => {
  const nav = ["Data Room", "FAQ", "Help", "Knowledge Base"];

  const data = [
    {
      coinType: "btc",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quod quos. Autem magni harum at. In omnis hic dolorum repellat!",
    },
    {
      coinType: "btc",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum est ad fugiat reiciendis neque unde nostrum sed architecto hic, natus exercitationem illo consequuntur odit non quaerat, velit impedit quasi dignissimos! Eius totam dicta laborum, quam ipsam sunt reprehenderit recusandae. Odio at vero quos laborum modi mollitia maxime perspiciatis nulla, reprehenderit, asperiores commodi. Nostrum similique consequatur explicabo quibusdam voluptatum saepe nesciunt qui, hic autem doloremque repellendus ipsa impedit eveniet.",
    },
    {
      coinType: "btc",
      value:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit voluptas ad id voluptatibus! Odio ipsa ad minus eos doloremque itaque libero distinctio, aliquid officiis quaerat animi nisi sequi amet accusantium doloribus non impedit. Quis temporibus nihil tempora incidunt quam minima excepturi dolores quia doloremque ratione, harum, sed rem aperiam id voluptas quas nam.",
    },
    {
      coinType: "eth",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum dolores tempore?",
    },
    {
      coinType: "eth",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea velit explicabo ipsum nesciunt deleniti animi, alias accusamus ad. Ipsum facilis eos repudiandae recusandae expedita quas magni magnam ratione ut ipsam in, eius sit repellat debitis illum autem iure, harum molestias, facere aliquam omnis architecto nihil incidunt labore? Sunt omnis repudiandae cupiditate tempore dolor, sequi error vel magnam possimus, qui placeat eius eaque blanditiis aliquam autem. Ipsam sunt, at omnis ut eum sapiente distinctio quas officia. Distinctio, explicabo ex obcaecati consectetur minus omnis! Quos laboriosam magnam natus optio sit nihil officiis voluptates? Possimus rem nihil corrupti.",
    },
    {
      coinType: "eth",
      value:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae accusantium dignissimos saepe velit laudantium debitis sequi eius animi aut dolor voluptatem totam, ad cumque odit? Facere eligendi ipsa aperiam sint doloremque ipsum dolorem minima expedita dicta, enim quo modi labore iusto tempore reprehenderit fugit debitis repellat laboriosam. Culpa quasi molestias odio architecto minima optio itaque voluptates, earum accusamus quam sit pariatur dolores vero a? Nemo, velit maxime. Amet excepturi sed perspiciatis, dolore tempore nesciunt minus architecto dolorum!",
    },
    {
      coinType: "sol",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis aliquam eaque consectetur laudantium voluptatem, velit excepturi temporibus non ipsam.",
    },
    {
      coinType: "sol",
      value:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum iste enim minima in? Deleniti porro quaerat alias nulla enim deserunt. Incidunt consectetur quam reiciendis amet quidem quis iure, pariatur magni aliquam sint at eaque aliquid assumenda porro saepe impedit. Deserunt totam in iste quod hic quia quae dicta exercitationem?",
    },
    {
      coinType: "sol",
      value:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolorem.",
    },
    {
      coinType: "usdt",
      value:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis minima beatae praesentium illum, repellat suscipit necessitatibus mollitia ab asperiores facilis commodi facere non omnis iure earum, inventore cupiditate debitis officiis! Beatae expedita porro nam repudiandae iure, ratione enim eligendi inventore ipsa nemo nisi vel itaque sint tenetur cumque, ad hic! Veniam voluptas neque deleniti nam aperiam.",
    },
    {
      coinType: "usdt",
      value:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugiat explicabo, alias illo aut ullam repellendus quae accusamus, assumenda error a ex quos inventore. Voluptatum delectus porro ad ab dolorem voluptatibus error dignissimos.",
    },
    {
      coinType: "usdt",
      value:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati quos ducimus culpa pariatur sed.",
    },
    {
      coinType: "usdc",
      value:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores animi velit excepturi aperiam, beatae minima? Maxime dolore aperiam reprehenderit autem culpa odit quas fugit, fugiat dolorum ipsum, aspernatur magni facere quis repudiandae distinctio recusandae. Tempore omnis, fugiat sequi porro adipisci magni numquam animi doloremque, aperiam corrupti, iure autem modi labore dolorum totam pariatur consectetur accusantium itaque odio? Ut illum, amet explicabo omnis voluptate sint nemo odit culpa commodi distinctio eligendi?",
    },
    {
      coinType: "usdc",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quo! Est facilis quis possimus, perspiciatis vitae velit ex accusantium suscipit rem? Veniam quasi blanditiis natus exercitationem! Quaerat, tempora molestias voluptatum eius quibusdam provident? Odit consequatur veritatis laudantium. A modi iste harum non sint exercitationem, dolorem fugiat alias vero quas repudiandae asperiores nemo rem incidunt facilis obcaecati laudantium ducimus saepe numquam odio accusantium. Id magnam nisi architecto nihil deserunt cumque odit cum debitis quam sapiente reiciendis omnis vitae aspernatur rem quis temporibus eaque distinctio, beatae obcaecati. Placeat, dolorum nemo perspiciatis velit rerum repudiandae, numquam provident temporibus tempore quibusdam eligendi id pariatur.",
    },
    {
      coinType: "usdc",
      value: "Lorem ipsum dolor sit amet.",
    },
  ];

  // console.log(data.sort((a, b) => a.coinType.localeCompare(b.coinType)));

  return (
    <div className="w-full font-normal overflow-scroll">
      <div className="px-[48px] w-full relative mb-[48px]">
        <ArrowRight
          onClick={() => setSelected(null)}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl font-normal text-center">
          Select Your Desired Strategy
        </p>
      </div>

      <div className="w-full px-[48px] py-4 bg-[#eaf0f6] justify-between items-center inline-flex">
        <div className="justify-start items-center gap-6 inline-flex">
          {nav.map((item) => (
            <Link
              href=""
              key={item}
              className="text-primary text-lg font-normal"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[289px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
            <input
              className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
              placeholder="Search for a bot"
            />

            <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>

          <div className="px-4 py-3 bg-[#dfeaf5] rounded-xl justify-center items-center inline-flex">
            <SettingsIcon className="cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>
        </div>
      </div>

      <div className="columns-3 justify-items-center w-[1070px] m-auto mt-6">
        {/* {data.map((item, index) => ( */}
        <Card onClick={() => setSelected("activate")} />
        <Card onClick={() => setSelected("activate")} />
        <Card onClick={() => setSelected("activate")} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Strategy;
