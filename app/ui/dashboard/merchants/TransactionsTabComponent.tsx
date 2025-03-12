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
  getKeyValue,
  Spinner,
} from '@heroui/react';

interface TransactionItem {
  id: string;
  txid: string;
  name?: string; // Добавьте другие поля в зависимости от ваших данных
}

export default function TransactionsTabComponent(walletName: {
  walletName: string;
}) {
  const [selected, setSelected] = useState<string | number>('signin');
  const [isLoading, setIsLoading] = useState(true);

  const columnsIncomingTransactions = [
    { key: 'id', label: 'id', id: '1' },
    { key: 'txid', label: 'txid', id: '2' },
  ];

  const columnsOutcomingTransactions = [
    { key: 'id', label: 'id' },
    { key: 'txid', label: 'txid' },
  ];

  const list = useAsyncList<TransactionItem>({
    async load({ signal }) {
      const res = await fetch('https://swapi.py4e.com/api/people/?search', {
        signal,
      });
      const json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      // Убедитесь, что 'a' и 'b' имеют правильный тип
      return {
        items: items.sort((a: TransactionItem, b: TransactionItem) => {
          // Получаем значения из объектов
          const first = a[sortDescriptor.column as keyof TransactionItem];
          const second = b[sortDescriptor.column as keyof TransactionItem];

          // Преобразуем значения в числа, если это строки, иначе оставляем как есть
          const firstParsed =
            first !== undefined && !isNaN(Number(first))
              ? Number(first)
              : first;
          const secondParsed =
            second !== undefined && !isNaN(Number(second))
              ? Number(second)
              : second;

          let cmp = 0;

          // Сравниваем либо как числа, либо как строки
          if (
            typeof firstParsed === 'number' &&
            typeof secondParsed === 'number'
          ) {
            cmp =
              firstParsed < secondParsed
                ? -1
                : firstParsed > secondParsed
                  ? 1
                  : 0;
          } else {
            // Если это строки, используем обычное строковое сравнение
            cmp = (firstParsed as string).localeCompare(secondParsed as string);
          }

          // Если сортировка по убыванию, меняем знак сравнения
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <>
      <Tabs
        aria-label="Tabs colors"
        color="secondary"
        radius="lg"
        variant="underlined"
        className="rounded-lg border-1 bg-background"
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
                defaultSelectedKeys={['2']}
                selectionMode="single"
                sortDescriptor={list.sortDescriptor}
                onSortChange={list.sort}
              >
                <TableHeader>
                  {columnsIncomingTransactions.map((column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  ))}
                </TableHeader>
                <TableBody
                  emptyContent={'No rows to display.'}
                  isLoading={isLoading}
                  items={list.items}
                  loadingContent={<Spinner label="Loading..." />}
                >
                  {(item) => (
                    <TableRow key={item.name}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
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
                  {(item) => (
                    <TableRow key={item.name}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
}
