import Image from "next/image";

// Update this array with actual image paths
const platforms = [
  { name: "Etherium", src: "/images/Blockchain/Etherium.svg" },
  { name: "Solana", src: "/images/Blockchain/solana.svg" },
  { name: "Stellar", src: "/images/Blockchain/stellar.svg" },
  { name: "Hyperledger", src: "/images/Blockchain/Hyperledger.svg" },
  { name: "Credits", src: "/images/Blockchain/Credits.svg" },
  { name: "Bigchaindb", src: "/images/Blockchain/Bigchaindb.svg" },
  { name: "Hashgraph", src: "/images/Blockchain/Hashgraph.svg" },
  { name: "Ripple", src: "/images/Blockchain/Ripple.svg" },
  { name: "Corda", src: "/images/Blockchain/Corda.svg" },
  { name: "Multichain", src: "/images/Blockchain/Multichain.svg" },
  { name: "Tron", src:  "/images/Blockchain/Tron.svg" },
  { name: "EOS", src: "/images/Blockchain/EOS.svg" },

];

const BlockchainPlatforms = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10">
        <span className="text-blue-800 font-semibold">Blockchain</span> Platforms We Work On
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-lg shadow-sm p-4 w-full max-w-[120px] hover:shadow-md transition"
          >
            <Image
              src={platform.src}
              alt={platform.name}
              width={50}
              height={50}
              className="mb-3 object-contain"
            />
            <p className="text-sm font-medium text-gray-700 text-center">{platform.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainPlatforms;
