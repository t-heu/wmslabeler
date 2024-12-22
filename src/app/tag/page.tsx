"use client"
import { useState, useMemo } from "react";
import styles from './page.module.scss';
import { roboto, code128 } from '../styles/fonts';

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

  // Função utilitária para gerar texto no formato 'C'
  const toSetC = (text: string): string =>
    text.match(/\d{2}/g)?.map((ascii) => {
      const codeC = Number(ascii);
      return String.fromCharCode(codeC > 94 ? codeC + 100 : codeC + 32);
    }).join('') || "";
  
  function checkSum128(data: string, startCode: number) {
    let sum = startCode;
    for (let i = 0; i < data.length; i++) {
      const code = data.charCodeAt(i);
      const value = code > 194 ? code - 100 : code - 32;
      sum += (i + 1) * (value);
    }
  
    let checksum = (sum % 103) + 32;
    if (checksum > 126) checksum = checksum + 68 ;
    return String.fromCharCode(checksum);
  }
  
  const encodeToCode128 = (text: string, codeABC = "B"): string => {
    const startCode = String.fromCharCode(codeABC.toUpperCase().charCodeAt(0) + 138);
    const stop = String.fromCharCode(206);
  
    const processedText = codeABC === 'C' ? toSetC(text) : text.replace(/ /g, String.fromCharCode(32));
    const check = checkSum128(processedText, startCode.charCodeAt(0) - 100);
  
    return startCode + processedText + check + stop;
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
            <div>
              <p className={[styles.tagText, roboto.className].join(" ")}>
                {text.slice(5)}
              </p>
              {<p className={[styles.tagBarcode, code128.className].join(" ")}>
              {encodeToCode128(text)}
              </p>}
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Tag;
