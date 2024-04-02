import { Avatar, Text, Button, Paper } from '@mantine/core';
import { IconCaretUpFilled } from '@tabler/icons-react';
import { IconCaretDownFilled } from '@tabler/icons-react';

const Card = ({ stockData, gainers }: any) => {
  return (
    <Paper radius="md" withBorder p="xl" bg="var(--mantine-color-body)">
      <Avatar
        className="w-28 h-28 object-cover"
        src="https://i.pinimg.com/564x/dd/31/84/dd3184f55d2908ef8c35b85d00553bcb.jpg"
        size={80}
        radius={80}
        mx="auto"
      />

      <Text ta="center" fz="xl" fw={600} pt="lg">
        {stockData.ticker}
      </Text>
      <Text ta="center" c="dimmed" fz="md">
        ${stockData.change_amount}
      </Text>
      {gainers ? (
        <Text
          ta="center"
          c="dimmed"
          fz="md"
          className="flex justify-center items-center text-green"
        >
          <IconCaretUpFilled />
          {stockData.change_amount} ({stockData.change_percentage})
        </Text>
      ) : (
        <Text
          ta="center"
          c="dimmed"
          fz="sm"
          className="flex justify-center items-center text-green"
        >
          <IconCaretDownFilled />
          {stockData.change_amount} ({stockData.change_percentage})
        </Text>
      )}
    </Paper>
  );
};

export default Card;
