"use client";
import React, { useState } from 'react';

import styles from './page.module.scss';
import readFile from '../utils/readFile';

const Home = ({data, changeComponent}: any) => {
  const [fileData, setFileData] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const VALID_EXTENSIONS = ['xlsx', 'xls', 'ods', 'csv'];

  const validateFileExtension = (fileName: string): boolean => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? VALID_EXTENSIONS.includes(ext) : false;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      alert("Nenhum arquivo selecionado");
      return;
    }

    const file = files[0];

    if (!validateFileExtension(file.name)) {
      alert(`Arquivo com formato inválido! Permitido: ${VALID_EXTENSIONS.join(', ')}`);
      return;
    }

    setSelectedFiles(files);
    setFileData(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!fileData) {
      alert("Nenhum arquivo foi selecionado.");
      return;
    }

    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const buffer = e.target?.result;
        if (buffer) {
          data(readFile(buffer as ArrayBuffer));
          changeComponent('Tag');
        }
      };

      reader.onerror = () => {
        alert("Erro ao processar o arquivo. Por favor, tente novamente.");
      };

      reader.readAsArrayBuffer(fileData);
    } catch (error) {
      console.error("Erro:", error);
      setIsSubmitting(false);
      alert("Erro inesperado. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.pageHeader}>
      <div className={styles.content}>
        <h2>GERAR ETIQUETAS WMS</h2>
        <p>Arraste ou clique para enviar.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.input__form}>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <span className={styles.input__text}>
              {selectedFiles.length
                ? selectedFiles.map((file: any) => file.name).join(", ")
                : "Escolher Arquivo"}
            </span>
          </div>
          {selectedFiles.length > 0 && (
            <div>
              <p>Arquivos selecionados:</p>
              <ul>
                {selectedFiles.map((file: any, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <button type="submit" className={styles.input__button} disabled={!fileData || isSubmitting}>
            {isSubmitting ? "Processando..." : "Gerar"}
          </button>
        </form>
        <p className={styles.version__text}>version 1.33</p>
      </div>
    </div>
  );
};

export default Home;
