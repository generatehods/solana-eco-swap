'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
      // Memuat skrip Jupiter Terminal v3
          const script = document.createElement('script');
              script.src = 'https://terminal.jup.ag/main-v3.js';
                  script.async = true;

                      script.onload = () => {
                            if (window.Jupiter) {
                                    window.Jupiter.init({
                                              displayMode: 'integrated',
                                                        integratedTargetId: 'integrated-terminal',
                                                                  endpoint: 'https://api.mainnet-beta.solana.com',
                                                                            strictTokenList: true,
                                                                                      formProps: {
                                                                                                  fixedInputMint: false,
                                                                                                              fixedOutputMint: false,
                                                                                                                        },
                                                                                                                                });
                                                                                                                                      }
                                                                                                                                          };

                                                                                                                                              document.head.appendChild(script);

                                                                                                                                                  return () => {
                                                                                                                                                        if (document.head.contains(script)) {
                                                                                                                                                                document.head.removeChild(script);
                                                                                                                                                                      }
                                                                                                                                                                          };
                                                                                                                                                                            }, []);

                                                                                                                                                                              return (
                                                                                                                                                                                  <main className="flex min-h-screen flex-col items-center justify-center bg-[#090d16] p-4 text-white">
                                                                                                                                                                                        <div className="text-center mb-8">
                                                                                                                                                                                                <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 sm:text-4xl">
                                                                                                                                                                                                          Solana Eco Swap
                                                                                                                                                                                                                  </h1>
                                                                                                                                                                                                                          <p className="mt-2 text-sm text-gray-400">
                                                                                                                                                                                                                                    Powered by Jupiter & Raydium Liquidity
                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                        {/* Kontainer tempat UI widget swap akan merender */}
                                                                                                                                                                                                                                                              <div 
                                                                                                                                                                                                                                                                      id="integrated-terminal" 
                                                                                                                                                                                                                                                                              className="w-full max-w-[420px] min-h-[560px] bg-[#131a2a] rounded-3xl border border-gray-800 shadow-2xl p-1"
                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                        </main>
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                          