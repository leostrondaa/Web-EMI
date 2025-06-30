import React, { useState, useMemo } from 'react';

export default function Memo({ products }) {
  
    const [searchTerm, setSearchTerm] = useState('');

    // Função para filtrar os produtos
    const filteredProducts = useMemo(() => {        
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    return (
        <div>
            <h1>useMemo</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                { 
                    filteredProducts.map(product => (
                            <li key={product.id}>{product.name}</li>
                        )
                    )
                }
            </ul>
            <hr/>
        </div>
    );
}
