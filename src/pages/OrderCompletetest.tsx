// import { fireEvent, render, screen } from '@testing-library/react';
// import { useNavigate } from 'react-router';
// import { useSearchParams } from 'react-router-dom';
// import OrderComplete from './OrderComplete';

// jest.mock('react-router', () => ({
//   useNavigate: jest.fn(),
// }));

// jest.mock('react-router-dom', () => ({
//   useSearchParams: jest.fn(),
// }));

// describe('OrderComplete', () => {
//   const mockNavigate = jest.fn();
//   (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

//   it('navigates to / when a button is clicked', () => {
//     (useSearchParams as jest.Mock).mockReturnValue([{ get: () => '123' }]);
//     render(
//       <OrderComplete />,
//     );

//     const cancelButton = screen.getByRole('button', { name: /메인화면으로/ });
//     fireEvent.click(cancelButton);

//     expect(mockNavigate).toHaveBeenCalledWith('/');
//   });
// });
