import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import ContractCard from "@/components/ContractCard";
import { ERC1155_CONTRACT_ADDRESS, ERC20_CONTRACT_ADDRESS, ERC721_CONTRACT_ADDRESS } from "@/constants/addresses";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.title} font-bold`}>
            My <span className={styles.gradientText0}>Contracts</span>
          </h1>
          <p className={styles.description}>Select a contract to interact with.</p>
        </div>
        <div className={styles.grid}>
          <ContractCard
            href="/"
            contractAddress={ERC20_CONTRACT_ADDRESS}
            title="ERC20 ->"
            description="Claim ERC20 Tokens"
          />
          <ContractCard href="/" contractAddress={ERC721_CONTRACT_ADDRESS} title="ERC721 ->" description="Claim " />
          <ContractCard href="/" contractAddress={ERC1155_CONTRACT_ADDRESS} title="ERC1155 ->" description="Claim " />
        </div>
      </div>
    </main>
  );
}
