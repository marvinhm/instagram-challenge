import React from 'react';
import Counter from '../components/counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
    it('Should match the snapshot', () => {
        const tree = renderer.create(<Counter />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Starts with a count of 0', () => {
        const wrapper = shallow(<Counter/>)
        const text = wrapper.find('p').text()
        // const countState = wrapper.state().count
        expect(text).toEqual("You clicked 0 times")
    })

    it('can increment the count when button clicked', () => {
        const wrapper = shallow(<Counter/>)
        const incrementBtn = wrapper.find('button.increment')
        incrementBtn.simulate('click')

        const text = wrapper.find('p').text()
        expect(text).toEqual("You clicked 1 times")
    })

    it('can decrement the count when button clicked', () => {
        const wrapper = shallow(<Counter/>)
        const decrementBtn = wrapper.find('button.decrement')
        decrementBtn.simulate('click')

        const text = wrapper.find('p').text()
        expect(text).toEqual("You clicked -1 times")
    })
    
})
