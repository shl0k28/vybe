import React from 'react'
// import { useWeb3 } from '../../context/Web3Context'

const Navbar: React.FC = () => {

    // const { ethAccount, web3Instance } = useWeb3()
    
    return(
        <nav className="px-8 py-4 flex item-center justify-between">
            <div>
                <h1 className="font-mono text-3xl">vybe</h1>
            </div>
            <div className="font-mono">
                <button 
                    className="bg-gray-900 px-3 py-2 text-gray-100"
                >
                    Mint NFT
                </button>
            </div>
        </nav>
    )
}

export default Navbar