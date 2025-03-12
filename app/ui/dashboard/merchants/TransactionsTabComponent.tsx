'use client';

import { useState } from 'react';
import { useAsyncList } from '@react-stately/data';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Snippet,
  Button,
  Pagination,
  getKeyValue,
} from '@heroui/react';
import Notiflix from 'notiflix';

interface TransactionItem {
  id: string;
  txid: string;
}

interface TransactionsTabComponentProps {
  incomingTransactions: string[]; // Ожидаем массив транзакций
}

export default function TransactionsTabComponent({
  incomingTransactions,
}: TransactionsTabComponentProps) {
  const [selected, setSelected] = useState<string | number>('signin');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const columnsIncomingTransactions = [
    { id: '1', key: 'id', label: 'id' },
    { id: '2', key: 'txid', label: 'TxID' },
    { id: '3', key: 'txid_explorer' },
  ];

  const handleCopyTxId = (txid: string) => {
    navigator.clipboard.writeText(txid).then(
      () => {
        Notiflix.Notify.success('Transaction ID copied');
      },
      (err) => {
        Notiflix.Notify.warning('Failed to copy Transaction ID');
      },
    );
  };

  const list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: incomingTransactions.map((txid, index) => ({
          id: index + 1,
          txid,
        })),
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          const first = a[sortDescriptor.column as keyof typeof a];
          const second = b[sortDescriptor.column as keyof typeof b];
          let cmp = 0;

          // Проверка, если это число, то сортируем как числа
          if (!isNaN(first) && !isNaN(second)) {
            cmp = Number(first) - Number(second);
          } else if (typeof first === 'string' && typeof second === 'string') {
            // Если это строки, сравниваем их
            cmp = first.localeCompare(second);
          }

          // Если сортировка по убыванию
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  const hasMore = page < 9;

  return (
    <div className="flex w-full flex-col">
      <Tabs
        color="primary"
        variant="bordered"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="Incoming" title="Incoming">
          <Card>
            <CardBody>
              <Table
                isStriped
                aria-label="Transactions"
                color="primary"
                defaultSelectedKeys={['0']}
                selectionMode="single"
                sortDescriptor={list.sortDescriptor}
                onSortChange={list.sort}
                /*bottomContent={
                  hasMore && !isLoading ? (
                    <div className="flex w-full justify-center">
                      <Button
                        isDisabled={list.isLoading}
                        variant="flat"
                        onPress={list.loadMore}
                      >
                        {list.isLoading && <Spinner color="white" size="sm" />}
                        Load More
                      </Button>
                    </div>
                  ) : null
                }*/
              >
                <TableHeader>
                  {columnsIncomingTransactions.map((column) => (
                    <TableColumn allowsSorting key={column.key}>
                      {column.label}
                    </TableColumn>
                  ))}
                </TableHeader>
                <TableBody
                  emptyContent={'No rows to display.'}
                  isLoading={isLoading}
                  items={list.items}
                  loadingContent={<Spinner label="Loading..." />}
                >
                  {list.items.map((item: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.txid}</TableCell>
                      <TableCell>
                        <Snippet
                          color="default"
                          hideSymbol
                          size="sm"
                          className="bg-inherit"
                          content={item.txid}
                          onCopy={() => handleCopyTxId(item.txid)}
                        ></Snippet>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Outcoming" title="Outcoming">
          <Card>
            <CardBody>
              <Table
                aria-label="Example table with dynamic content"
                color="primary"
                defaultSelectedKeys={['2']}
                selectionMode="single"
                sortDescriptor={list.sortDescriptor}
                onSortChange={list.sort}
              >
                <TableHeader>
                  <TableColumn key="name" allowsSorting>
                    Name
                  </TableColumn>
                  <TableColumn key="height" allowsSorting>
                    Height
                  </TableColumn>
                  <TableColumn key="mass" allowsSorting>
                    Mass
                  </TableColumn>
                  <TableColumn key="birth_year" allowsSorting>
                    Birth year
                  </TableColumn>
                </TableHeader>
                <TableBody
                  emptyContent={'No rows to display.'}
                  isLoading={isLoading}
                  items={list.items}
                  loadingContent={<Spinner label="Loading..." />}
                >
                  {[]}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
