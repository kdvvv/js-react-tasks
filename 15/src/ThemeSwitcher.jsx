import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    render() {
        const { themes, theme, setTheme } = this.context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map((_theme) => (
                    <ToggleButton
                        key={_theme.id}
                        type="radio"
                        variant="secondary"
                        checked={theme.id === _theme.id}
                        value={_theme.id}
                        onClick={() => setTheme(_theme)}
                    >
                        {_theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
// END
}

export default ThemeSwitcher;
