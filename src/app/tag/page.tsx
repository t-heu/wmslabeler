"use client"
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function Tag() {
  const router = useRouter();
  const data = router.query.data ? JSON.parse(router.query.data as string) : []; // Desserializa o array
  /*const data = [
    "1I T 01 IE 01 I",
    "9W T 01 FE 01 B",
    "1W W 99 WE 99 W",
    // Adicione mais itens aqui
  ];*/
  const length = data.length;

  return (
    <main className={styles.pageHeader}>
      <header className={styles.header}>
        <p title="voltar" className={styles.headerAction}>
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
        </p>

        <p>Total: {length}</p>

        <p title="imprimir" className={styles.headerAction}>
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
        </p>
      </header>

      <article className={styles.tagContainer}>
        {data.map((item: string, index: number) => (
          <div className={styles.tagCard} key={index}>
            <div>
              <p className={styles.tagText}>{item.slice(5)}</p>
              <p className={styles.tagBarcode}>*{item}*</p>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}
