"use client";
import React, { useState } from 'react';

import styles from './page.module.scss';
import { read, utils } from 'xlsx';

function read_file(file: any) {
  const wb = read(file, { type: 'buffer', raw: true });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const data = utils.sheet_to_json(ws);
  
  if (data.length === 0) alert('Arquivo não pode está vazio!');

  const uniqueData = Array.from(
    new Set(
      data.map((tag: any) => (tag['wms'] || tag['WMS'] || tag['Wms.'] || '').trim())
    )
  );
  
  return uniqueData
}

const Home = ({data, changeComponent}: any) => {
  const [name, setName] = useState("Arraste ou clique para enviar.");

  const handleFileChange = (event: any) => {
    setName(event.target.files[0].name)
    
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado

    const ext = event.target.files[0].name.split('.')[1];
    const extension = ['xlsx', 'xls', 'ods', 'csv'];

    if (!extension.includes(ext)) {
      alert('Arquivo com formato inválido!');
    }
    
    if (file) {
      const reader = new FileReader();

      // Quando o arquivo for lido com sucesso, ele estará disponível no 'reader.result'
      reader.onload = function(e) {
        if (!e.target) return;

        const buffer = e.target.result;  // Aqui está o ArrayBuffer do arquivo
        data(read_file(buffer));
      };

      // Ler o arquivo como ArrayBuffer
      reader.readAsArrayBuffer(file);
    } else {
      console.log("Nenhum arquivo selecionado");
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!data) return;

    try {
      changeComponent('Tag');
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className={styles.pageHeader}>
      <div className={styles.content}>
        <h2>GERAR ETIQUETAS WMS</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={styles.input__form}>
            <input
              name="file"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <span className={styles.input__text} data-js-label="data-js-label">
              {name}
            </span>
          </div>
          <button title="Enviar" type="submit" className={styles.input__button}>
            ENVIAR
          </button>
        </form>

        <p className={styles.input__text}>
          Baixe o modelo
          <a
            title="baixar modelo"
            className={styles.link}
            href="/download.xlsx"
            download="download"
          > clicando aqui</a>
        </p>
      </div>
    </main>
  );
};

export default Home;
