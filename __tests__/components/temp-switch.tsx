import { render, fireEvent } from '@testing-library/react';
import TempSwitch from '../../app/components/temp-switch';

test('toggleTemperatureUnit function is called when buttons are clicked', () => {
  const toggleTemperatureUnitMock = jest.fn();
  const temperatureUnit = 'celsius';

  const { getByText } = render(
    <TempSwitch
      temperatureUnit={temperatureUnit}
      toggleTemperatureUnit={toggleTemperatureUnitMock}
    />
  );

  const celsiusButton = getByText('°C');
  const fahrenheitButton = getByText('°F');

  fireEvent.click(celsiusButton);
  expect(toggleTemperatureUnitMock).toHaveBeenCalledWith('celsius');

  fireEvent.click(fahrenheitButton);
  expect(toggleTemperatureUnitMock).toHaveBeenCalledWith('fahrenheit');
});