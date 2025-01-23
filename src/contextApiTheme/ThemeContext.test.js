import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

describe('ThemeContext', () => {
    test('should provide default theme value', () => {
        render(
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {({ theme }) => <div data-testid="theme">{theme}</div>}
                </ThemeContext.Consumer>
            </ThemeProvider>
        );
        expect(screen.getByTestId('theme').textContent).toBe('light');
    });

    test('should toggle theme value', () => {
        render(
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => (
                        <div>
                            <div data-testid="theme">{theme}</div>
                            <button onClick={toggleTheme}>Toggle Theme</button>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeProvider>
        );

        const themeDiv = screen.getByTestId('theme');
        const toggleButton = screen.getByText('Toggle Theme');

        expect(themeDiv.textContent).toBe('light');
        fireEvent.click(toggleButton);
        expect(themeDiv.textContent).toBe('dark');
        fireEvent.click(toggleButton);
        expect(themeDiv.textContent).toBe('light');
    });
});