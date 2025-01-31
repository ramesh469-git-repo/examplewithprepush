import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeContext } from './ThemeContext';

// describe('ThemeSwitcher', () => {
//     const mockToggleTheme = jest.fn();

//     const renderComponent = (theme) => {
//         render(
//             <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
//                 <ThemeSwitcher />
//             </ThemeContext.Provider>
//         );
//     };

    describe('ThemeSwitcher', () => {
        const mockToggleTheme = jest.fn();

        const renderComponent = (theme) => {
            render(
                <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
                    <ThemeSwitcher />
                </ThemeContext.Provider>
            );
        };

        it('should render the ThemeSwitcher component', () => {
            renderComponent('light');
            expect(screen.getByText('light')).toBeInTheDocument();
        });

        it('should call toggleTheme when the checkbox is clicked', () => {
            renderComponent('light');
            const checkbox = screen.getByRole('checkbox');
            fireEvent.click(checkbox);
            expect(mockToggleTheme).toHaveBeenCalledTimes(1);
        });

        it('should display the correct theme label', () => {
            renderComponent('dark');
            expect(screen.getByText('dark')).toBeInTheDocument();
        });

        it('should have the checkbox unchecked when theme is light', () => {
            renderComponent('light');
            const checkbox = screen.getByRole('checkbox');
            expect(checkbox.checked).toBe(false);
        });

        it('should have the checkbox checked when theme is dark', () => {
            renderComponent('dark');
            const checkbox = screen.getByRole('checkbox');
            expect(checkbox.checked).toBe(false);
        });
    });