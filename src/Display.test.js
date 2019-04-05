import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from './Components/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for Diplsay component', () => {
    it('Contains two `input` tags', () => {
        const display = shallow(<Display />);
        expect(display.find('.display-container')).not.toBeUndefined();
    })

    it('Contains `Result` cmoponent', () => {
        const display = shallow(<Display />);
        expect(display.find('.result-container')).not.toBeUndefined();
    })
})