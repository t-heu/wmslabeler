"use client"
import styles from './page.module.scss';
import {greatVibes, roboto} from '../styles/fonts';

function Tag({data = [], changeComponent}: any) {
  const length = data?.length || 0;

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

        <p>Total: {length}</p>

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

      <article className={styles.tagContainer}>
        {data.map((item: string, index: number) => (
          <div className={styles.tagCard} key={index}>
            <div>
              <p className={[styles.tagText, roboto.className].join(' ')}>{item.slice(5)}</p>
              <p className={[styles.tagBarcode, greatVibes.className].join(' ')}>*{item}*</p>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Tag;
