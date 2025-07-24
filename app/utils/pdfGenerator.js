import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { fontSize: 20, marginBottom: 20, textAlign: 'center', color: '#2563eb' },
  section: { marginBottom: 15 },
  title: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  text: { marginBottom: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  total: { fontSize: 16, fontWeight: 'bold', marginTop: 15, paddingTop: 10, borderTop: '2px solid #000' }
});

const QuotePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Cotización #{data.id}</Text>
      <View style={styles.section}>
        <Text style={styles.title}>Cliente</Text>
        <Text style={styles.text}>{data.clientName}</Text>
        <Text style={styles.text}>{data.clientPhone}</Text>
        <Text style={styles.text}>{data.clientAddress}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Desglose</Text>
        {data.breakdown.map((item, i) => (
          <View key={i} style={styles.row}>
            <Text>{item.label}</Text>
            <Text>${item.amount.toLocaleString()}</Text>
          </View>
        ))}
        <View style={[styles.row, styles.total]}>
          <Text>TOTAL</Text>
          <Text>${data.total.toLocaleString()}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export const downloadQuotePDF = async (quoteData) => {
  const blob = await pdf(<QuotePDF data={quoteData} />).toBlob();
  saveAs(blob, `cotizacion-${quoteData.id}.pdf`);
};