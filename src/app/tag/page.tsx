"use client"
import { useState } from "react";
import styles from './page.module.scss';
import { roboto, code128 } from '../styles/fonts';
import Barcode from 'react-barcode';

function Tag({data = [], changeComponent}: any) {
  const itemsPerPage = 500; // Defina quantos itens deseja por página
  const [currentPage, setCurrentPage] = useState(1);

  // Total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Dados da página atual
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Função para mudar de página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className={styles.pageHeader}>
      <header className={styles.header}>
        <a onClick={() => changeComponent('Home')} title="voltar" className={styles.headerAction}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </a>

        Total: {data.length} | Página: {currentPage} / {totalPages}

        <a onClick={() => window.print()} title="imprimir" className={styles.headerAction}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
        </a>
      </header>

      {/* Paginação */}
      <nav className={styles.header}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >Anterior</button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >Próxima</button>
      </nav>

      <article className={styles.tagContainer}>
        {currentData.map((item: string, index: number) => (
          <div className={styles.tagCard} key={index}>
            <div>
              <p className={[styles.tagText, roboto.className].join(" ")}>
                {item.slice(5)}
              </p>
              {/*<div className={styles.tagBarcode}>
                <Barcode 
                  value={item} 
                  displayValue={false} 
                  margin={0} 
                  height={30} 
                  width={1} 
                  format="CODE128" 
                  lineColor="#111"
                />
              </div>*/}
              {<p className={[styles.tagBarcode, code128.className].join(" ")}>
                *{item}*
              </p>}
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Tag;
