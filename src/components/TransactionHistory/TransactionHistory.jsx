import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableRow}>
              <td className={css.tableInfo}>{type}</td>
              <td className={css.tableInfo}>{amount}</td>
              <td className={css.tableInfo}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
