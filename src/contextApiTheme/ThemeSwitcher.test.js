import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeContext } from './ThemeContext';

describe('ThemeSwitcher', () => {
    const mockToggleTheme = jest.fn();

    const renderComponent = (theme) => {
        render(
            <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
                <ThemeSwitcher />
            </ThemeContext.Provider>
        );
    };

    test('renders with light theme', () => {
        renderComponent('light');
        expect(screen.getByText('ThemeSwitcher')).toHaveClass('theme-light');
        expect(screen.getByText('Click to change the dark Theme')).toBeInTheDocument();
    });

    test('renders with dark theme', () => {
        renderComponent('dark');
        expect(screen.getByText('ThemeSwitcher')).toHaveClass('theme-dark');
        expect(screen.getByText('Click to change the light Theme')).toBeInTheDocument();
    });

    test('calls toggleTheme on button click', () => {
        renderComponent('light');
        fireEvent.click(screen.getByText('Click to change the dark Theme'));
        expect(mockToggleTheme).toHaveBeenCalled();
    });
});