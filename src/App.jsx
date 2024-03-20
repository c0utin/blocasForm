import React, { useState } from 'react';
import svgImage from '../public/svgviewer-output.svg';

const NFTForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Wallet:", wallet);
  };

  return (
    <div className="relative">
      <img src={svgImage} alt="Imagem SVG" className="absolute inset-x-0 top-0 w-full z-10" style={{ height: 'auto' }} />
      <div className="h-screen flex justify-center items-center relative z-20">
        <div className="max-w-lg mx-auto p-8 rounded-lg shadow-lg bg-opacity-50 bg-blue-800">
          <div className="rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-white">Receba sua Proof-Of-Attendance NFT</h2>
            <p className="text-white">Para receber sua NFT, você precisa ter participado do evento e ter uma carteira na rede Sepolia.</p>
            <p className="text-white mb-4">Ainda não tem uma carteira? <a href="#" className="text-blue-300 hover:underline">Clique aqui</a> e crie a sua já.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-white">Seu nome</label>
                <span className="text-gray-300 text-sm">Esse nome será gravado no NFT para provar sua presença</span>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-white">Email</label>
                <span className="text-gray-300 text-sm">Email para receber novidades</span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@email.com"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="wallet" className="block mb-2 text-white">Wallet</label>
                <span className="text-gray-300 text-sm">Carteira para receber o NFT na rede Sepolia</span>
                <input
                  type="text"
                  id="wallet"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder="0x00...0000"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Gerar NFT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTForm;
