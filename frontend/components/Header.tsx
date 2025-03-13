import { config } from "@/config";
import { useGetCollectionData } from "@/hooks/useGetCollectionData";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { WalletSelector } from "./WalletSelector";

export function Header() {
  const { data } = useGetCollectionData();

  const title = useMemo(() => {
    return data?.collection.collection_name ?? config.defaultCollection?.name ?? "NFT Collection Mint Page";
  }, [data?.collection]);

  return (
    <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
      <h1 className="display">
        <Link to="/">{title}</Link>
      </h1>

      

<details style={{ color: "green", fontSize: "1.5rem" }}>
  <summary>Aptos stake and vote !</summary>
  <ul>
    <li><Link to="https://stake.new/dashboard/" target="_blank">Stake</Link></li>
    <li><Link to="https://governance.aptosfoundation.org/" target="_blank">Vote</Link></li>
  </ul>
</details>
      

      <div className="flex gap-2 items-center flex-wrap">
        <WalletSelector />
      </div>
    </div>
  );
}
