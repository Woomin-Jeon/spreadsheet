import React from 'react';

import CryptoJS from 'crypto-js';

const styles = {
  whole: {
    fontFamily: 'Helvetica'
  },
  box: {
    display: "flex",
    fontWeight: 'bold',
    fontSize: '16px'
  },
  title: {
    float: 'right'
  },
  titleTop: {
    float: 'right',
    height: '32px',
    position: 'relative',
    top: '12px'
  },
  value: {
    marginLeft: '20px'
  },
  flag: {
    maxWidth: "40px",
    marginLeft: "15px",
    position: "relative",
    top: "4px"
  },
  provide: {
    float: 'right'
  },
  excel: {
    width: "100%",
    height: `${screen.height - 400}px`,
    border: "1px solid"
  },
  italic: {
    fontStyle: "italic"
  },
  bold: {
    fontWeight: 'bold'
  }
}

const data = {
  logo: "../src/images/PCB-logo.png",
  flag: "../src/images/PCB-flag.png",
  customerName: "PCB Technologies, Israel",
  customerId: "101",
  inCharge: "Ms. Eti Ben-David",
  excelURL: "U2FsdGVkX1++6DSMnpla06ITRLGjqEXfb3BpjC9kj1xPaa3Vp9tJ58qQTJcVUwvpW6ey8TAUpVrLZ0ozi7xrTguXpa1qAN0avg4vlOrxpGXpcqdKfjKnHT9sug9SVc/7zFNHeqVjEzZ0d5rS7iBGtlRnrPnmkX+T1sDDOrS+fTz01vgeCiQea0SWthy07qIQOElbpEy4OLUDheHw7H2a4mpPWCJWgdCX5MtfTge0NqZWNxnHoAeyZOBDugP79YoP"
};

export default function PCB() {
  return (
    <div css={styles.whole}>
      <img src={data.logo} />
      <br/>
      <br/>
      <div css={styles.box}>
        <div>
          <div css={styles.titleTop}>
            Customer Name:
          </div>
          <br/>
          <div css={styles.title}>
            Customer ID:
          </div>
          <br/>
          <div css={styles.title}>
            In Charge:
          </div>
        </div>
        <div css={styles.value}>
          <div>
            <span >{data.customerName}</span>
            <img css={styles.flag} src={data.flag} />
          </div>
          <div>
            {data.customerId}
          </div>
          <div>
            {data.inCharge}
          </div>
        </div>
      </div>

      <br/>

      <div>
        <div css={styles.provide}>
          <span css={styles.italic}>Provided by</span><span css={styles.bold}> LogLab ERP System™</span>
        </div>
        <iframe
          css={styles.excel}
          src={CryptoJS.AES.decrypt(data.excelURL, 'dal96k@hanmail.net').toString(CryptoJS.enc.Utf8)}
        >Use Chrome Browser, please.</iframe>
      </div>

    </div>
  );
}
