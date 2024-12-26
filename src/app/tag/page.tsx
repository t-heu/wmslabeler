"use client"
import { useState, useMemo } from "react";

import {encodeToCode128} from '../utils/code128'
import styles from './page.module.scss';
import { code128 } from '../styles/fonts';

function Tag({data = [], changeComponent}: any) {
  const ITEMS_PER_PAGE = 500; // Defina quantos itens deseja por página
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => Math.ceil(data.length / ITEMS_PER_PAGE), [data.length]);
  
  // Dados da página atual
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return data.slice(start, end);
  }, [data, currentPage]);

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
        {currentData.map((text: string, index: number) => (
          <div className={styles.tagCard} key={index}>
            <p className={[styles.tagText].join(" ")}>
              {text.slice(5)}
            </p>
            <p className={[styles.tagBarcode, code128.className].join(" ")}>
              {encodeToCode128(text)}
            </p>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Tag;
