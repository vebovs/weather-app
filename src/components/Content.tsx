import React from 'react';
import { usePosition } from './Position';
import * as api from '../Api';
import { useQuery } from 'react-query';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

function Content() {
  const { position } = usePosition()!;
  const { data, isLoading, error, status } = useQuery('weather', () =>
    api.getWeather(position),
  );

  if (isLoading) {
    return <Spinner size='xl' />;
  }

  if (status === 'error') {
    if (isError(error)) {
      return (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      );
    } else {
      return (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>
            Something went wrong fetching the weather data.
          </AlertDescription>
        </Alert>
      );
    }
  }

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Description</Th>
          <Th isNumeric>Data</Th>
          <Th>Units</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Air temperature</Td>
          <Td isNumeric>
            {data.properties.timeseries[0].data.instant.details.air_temperature}
          </Td>
          <Td>{data.properties.meta.units.air_temperature}</Td>
        </Tr>
        <Tr>
          <Td>Relative humidity</Td>
          <Td isNumeric>
            {
              data.properties.timeseries[0].data.instant.details
                .relative_humidity
            }
          </Td>
          <Td>{data.properties.meta.units.relative_humidity}</Td>
        </Tr>
        <Tr>
          <Td>Wind speed</Td>
          <Td isNumeric>
            {data.properties.timeseries[0].data.instant.details.wind_speed}
          </Td>
          <Td>{data.properties.meta.units.wind_speed}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default Content;
